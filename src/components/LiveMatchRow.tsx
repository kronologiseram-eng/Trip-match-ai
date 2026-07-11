import React from 'react'

interface MatchRowProps {
  truckType: string;
  origin: string;
  destination: string;
  date: string;
  phone: string;
  price?: string;
}

export default function LiveMatchRow({ truckType, origin, destination, date, phone, price = "Boleh Bincang" }: MatchRowProps) {
  return (
    <div className="bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/30 p-4 rounded-xl transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      {/* Kiri: Jenis Lori & Info Laluan */}
      <div className="space-y-1 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            Lori {truckType}
          </span>
          <span className="text-xs text-slate-400">{date}</span>
        </div>
        <div className="text-white font-medium text-base flex items-center gap-2">
          <span>{origin}</span>
          <span className="text-amber-500 text-sm">➔</span>
          <span>{destination}</span>
        </div>
      </div>

      {/* Kanan: Harga & Butang WhatsApp */}
      <div className="flex sm:flex-col items-between sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
        <div className="text-left sm:text-right mb-2 sm:mb-1">
          <p className="text-[10px] text-slate-400 uppercase">Anggaran Bajet</p>
          <p className="text-sm font-bold text-emerald-400">{price}</p>
        </div>
        <a 
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2"
        >
          WhatsApp Pelanggan
        </a>
      </div>
    </div>
  )
}
