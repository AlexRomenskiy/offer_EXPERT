import React, { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => setMobileOpen(!mobileOpen)

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full px-2 py-2 pl-6 flex items-center justify-between transition-all duration-500 hover:bg-white/80 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-medium text-slate-800 tracking-tight text-sm uppercase hidden sm:block">
              Orion
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {['Product', 'Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white uppercase tracking-widest bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              Access
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none"
            >
              {!mobileOpen ? (
                <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20"></iconify-icon>
              ) : (
                <iconify-icon icon="solar:close-circle-linear" width="20" height="20"></iconify-icon>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full px-4 mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen
              ? 'transform scale-100 opacity-100 visible'
              : 'transform scale-95 opacity-0 invisible'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-1">
            <a href="#" className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all">
              Product
            </a>
            <a href="#" className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all">
              Platform
            </a>
            <a href="#" className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all">
              Solutions
            </a>
            <div className="h-px bg-slate-200/50 mx-6 my-1"></div>
            <a href="#" className="p-4 text-center text-sm font-medium text-white bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10">
              Access Platform
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}