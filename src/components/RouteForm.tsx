import React from 'react'

export default function RouteForm() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Carian Trip Balik</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Lokasi Asal */}
        <div>
          <label className="block text-xs text-slate-400 mb-1">Lokasi Asal (Pickup)</label>
          <select className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2.5 text-sm focus:ring-amber-500 focus:border-amber-500">
            <option>Semua Lokasi</option>
            <option>Penang</option>
            <option>Kuala Lumpur</option>
            <option>Johor Bahru</option>
          </select>
        </div>

        {/* Lokasi Destinasi */}
        <div>
          <label className="block text-xs text-slate-400 mb-1">Destinasi (Dropoff)</label>
          <select className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2.5 text-sm focus:ring-amber-500 focus:border-amber-500">
            <option>Semua Destinasi</option>
            <option>Kuala Lumpur</option>
            <option>Penang</option>
            <option>Johor Bahru</option>
          </select>
        </div>

        {/* Saiz Lori */}
        <div>
          <label className="block text-xs text-slate-400 mb-1">Saiz Lori</label>
          <select className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg p-2.5 text-sm focus:ring-amber-500 focus:border-amber-500">
            <option>Semua Saiz</option>
            <option>1 Tan</option>
            <option>3 Tan</option>
            <option>10 Tan</option>
          </select>
        </div>
      </div>
      
      <button className="mt-4 w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm py-2.5 px-6 rounded-lg transition-colors">
        Cari Job Pintar
      </button>
    </div>
  )
}
