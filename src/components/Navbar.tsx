import React from 'react'

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            TripMatch AI
          </span>
          <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-medium">
            Beta
          </span>
        </div>

        {/* Profile/Status Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-400">Pemandu Aktif</p>
            <p className="text-sm font-semibold text-white">Ary Nation</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm border-2 border-slate-800">
            AN
          </div>
        </div>
      </div>
    </nav>
  )
}
