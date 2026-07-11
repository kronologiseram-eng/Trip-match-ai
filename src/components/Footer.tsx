import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-905 py-6 px-4 text-center mt-12">
      <p className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} TripMatch AI. Diusahakan dengan penuh dedikasi oleh Ary Nation.
      </p>
    </footer>
  )
}
