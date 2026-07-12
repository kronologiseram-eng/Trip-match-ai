import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Sila tukar Token Facebook Scraper mengikut actor yang digunakan
const APIFY_TOKEN = process.env.APIFY_TOKEN
const ACTOR_ID = 'apify/facebook-groups-scraper' // Ini nama robot scraper FB Group standard

export async function GET() {
  try {
    if (!APIFY_TOKEN) {
      return NextResponse.json({ error: 'APIFY_TOKEN tidak dijumpai' }, { status: 500 })
    }

    // 1. Panggil Robot Apify untuk mula mengikis (Scraping)
    // Kita arahkan robot untuk cari post di Group Facebook Lori Sewa Malaysia
    const runResponse = await fetch(`https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${APIFY_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startUrls": [
          { "url": "https://www.facebook.com/groups/lorisewamalaysia" } // Contoh group lori sewa
        ],
        "resultsLimit": 5, // Kita ambil 5 post paling baru sahaja untuk jimat kos
        "viewOption": "CHRONOLOGICAL" // Susun ikut masa (terkini di atas)
      })
    })

    const runData = await runResponse.json()
    const datasetId = runData.data.defaultDatasetId

    // Tunggu 5 saat untuk robot selesai bekerja (dalam real-case kita guna webhook, tapi untuk test kita fetch terus)
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // 2. Ambil data hasil kikisan (Dataset) dari Apify
    const datasetResponse = await fetch(`https://api.apify.com/v2/datasets/${datasetId}/items?token=${APIFY_TOKEN}`)
    const items = await datasetResponse.json()

    // 3. Masukkan data ke dalam database Supabase menggunakan Prisma
    const savedJobs = []
    for (const item of items) {
      // Kita tapis post yang ada nombor telefon sahaja (sebab orang lori nak nombor phone)
      const phoneRegex = /(601|01)[0-9]{8,9}/
      const matchPhone = item.text ? item.text.match(phoneRegex) : null
      
      if (matchPhone) {
        const cleanPhone = matchPhone[0]
        
        // Simpan dalam Supabase (Guna Prisma)
        const newJob = await prisma.job.create({
          data: {
            truckType: item.text.includes('3t') || item.text.includes('3 tan') ? '3 Tan' : '1 Tan', // AI filter olok-olok sebelum kita pasang GPT
            origin: item.text.includes('penang') || item.text.includes('pg') ? 'Penang' : 'Kuala Lumpur',
            destination: item.text.includes('kl') || item.text.includes('selangor') ? 'Kuala Lumpur' : 'Penang',
            date: 'Baru sat',
            phone: cleanPhone
          }
        })
        savedJobs.push(newJob)
      }
    }

    return NextResponse.json({ 
      message: 'Scraping berjaya!', 
      jobsSavedCount: savedJobs.length,
      jobs: savedJobs 
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
