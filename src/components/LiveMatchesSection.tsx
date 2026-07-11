import React from 'react'
import LiveMatchRow from './LiveMatchRow'

const mockJobs = [
  { id: '1', truckType: '3 Tan', origin: 'Penang (Butterworth)', destination: 'Kuala Lumpur (Kepong)', date: 'Baru sat (2 mnt lepas)', phone: '60123456789', price: 'RM1,200' },
  { id: '2', truckType: '1 Tan', origin: 'Johor Bahru', destination: 'Kuala Lumpur', date: '15 mnt lepas', phone: '60123456789', price: 'RM600' },
  { id: '3', truckType: '10 Tan', origin: 'Kuala Lumpur', destination: 'Penang', date: '1 jam lepas', phone: '60123456789', price: 'Boleh Bincang' },
]

export default function LiveMatchesSection() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold text-white uppercase tracking-wider">Padanan Live Terkini</h2>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="space-y-3">
        {mockJobs.map((job) => (
          <LiveMatchRow 
            key={job.id}
            truckType={job.truckType}
            origin={job.origin}
            destination={job.destination}
            date={job.date}
            phone={job.phone}
            price={job.price}
          />
        ))}
      </div>
    </div>
  )
}
