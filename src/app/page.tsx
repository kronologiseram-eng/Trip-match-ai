import React from 'react'
import Navbar from '../components/Navbar'
import AmbientBackground from '../components/AmbientBackground'
import TruckStatus from '../components/TruckStatus'
import RouteForm from '../components/RouteForm'
import LiveMatchesSection from '../components/LiveMatchesSection'
import Footer from '../components/Footer'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative flex flex-col justify-between">
      {/* Efek Latar Belakang Moden */}
      <AmbientBackground />

      <div className="z-10 flex-1">
        {/* Menu Navigasi Atas */}
        <Navbar />

        {/* Kandungan Dashboard */}
        <main className="max-w-5xl mx-auto py-8 px-4 md:px-8 space-y-6">
          {/* Status Semasa Lori Pemandu */}
          <TruckStatus />

          {/* Borang Carian (RouteForm) */}
          <RouteForm />

          {/* Papan Pemuka Padanan Live */}
          <LiveMatchesSection />
        </main>
      </div>

      {/* Kaki Halaman */}
      <Footer />
    </div>
  )
}
