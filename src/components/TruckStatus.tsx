import React from 'react'

export default function TruckStatus() {
  return (
    <div className="bg-slate-800/50 border border-slate-850 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <div>
        <p className="text-xs text-slate-400">Status Lori Anda Sekarang:</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-semibold text-white">KOSONG & Sedia Ambil Trip</span>
        </div>
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none text-xs bg-slate-900 hover:bg-slate-950 text-slate-300 px-3 py-2 rounded-lg border border-slate-700 transition-colors">
          Set Sibuk
        </button>
        <button className="flex-1 sm:flex-none text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-3 py-2 rounded-lg transition-colors">
          Kemas Kini Lokasi
        </button>
      </div>
    </div>
  )
}
