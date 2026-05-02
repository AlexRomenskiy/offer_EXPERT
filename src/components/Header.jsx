import { useState } from 'react';

const navItems = [
  { label: 'Для кого', href: '#pain-points' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Кейс', href: '#case-study' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header({ theme = 'light' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dark = theme === 'dark';

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="flex md:mb-12 z-10 mb-10 relative gap-x-6 gap-y-6 items-center justify-between">
      {/* Logo */}
      <div className={`flex items-center gap-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
        <div
          className={`flex w-9 h-9 rounded-full items-center justify-center relative ${
            dark
              ? 'bg-white/[0.06] border border-white/15 backdrop-blur-md'
              : 'bg-gradient-to-b from-black/5 to-transparent'
          }`}
          style={
            !dark
              ? {
                  '--border-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0))',
                  '--border-radius-before': '9999px',
                }
              : undefined
          }
        >
          <iconify-icon icon="solar:layers-linear" width="16" height="16" className={dark ? 'text-orange-400' : ''} />
        </div>
        <span className="text-lg font-medium tracking-tight">LOGO</span>
      </div>

      {/* Navigation pill */}
      <nav
        className={`hidden md:flex uppercase text-xs font-medium tracking-widest rounded-full py-2 px-6 shadow-sm gap-x-8 items-center backdrop-blur-md ${
          dark
            ? 'bg-white/[0.05] border border-white/10 text-slate-300'
            : 'bg-white/60 border border-slate-200 text-slate-500'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className={`transition-colors duration-300 ${dark ? 'hover:text-white' : 'hover:text-slate-900'}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA + Mobile toggle */}
      <div className="flex items-center gap-2">
        <a
          href="#final-cta"
          onClick={(e) => handleNav(e, '#final-cta')}
          className={`hidden sm:flex items-center gap-2 group rounded-lg py-2.5 px-5 border shadow-sm relative transition-colors text-xs font-medium tracking-wide ${
            dark
              ? 'bg-white/[0.05] border-white/15 text-white/85 hover:bg-white/[0.1] hover:text-white'
              : 'bg-gradient-to-b from-black/[0.02] to-transparent border-slate-200 text-slate-900 hover:bg-black/5'
          }`}
        >
          <span
            className={`text-[11px] uppercase font-medium tracking-tight transition-colors ${
              dark ? 'text-white/85 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
            }`}
          >
            Записатися
          </span>
          <iconify-icon icon="solar:arrow-right-linear" width="14" height="14" className="group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors focus:outline-none ${
            dark ? 'text-white/80 hover:bg-white/[0.06]' : 'text-slate-600 hover:bg-white/60'
          }`}
          aria-label="Menu"
        >
          <iconify-icon icon={mobileOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} width="20" height="20" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileOpen
            ? 'transform scale-100 opacity-100 visible'
            : 'transform scale-95 opacity-0 invisible'
        }`}
      >
        <div
          className={`backdrop-blur-2xl rounded-2xl p-3 shadow-xl flex flex-col gap-1 ${
            dark
              ? 'bg-slate-950/85 border border-white/10'
              : 'bg-white/80 border border-slate-200'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className={`p-4 text-center text-sm font-medium rounded-xl transition-all ${
                dark
                  ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className={`h-px mx-6 my-1 ${dark ? 'bg-white/10' : 'bg-slate-200/50'}`} />
          <a
            href="#final-cta"
            onClick={(e) => handleNav(e, '#final-cta')}
            className={`p-4 text-center text-sm font-medium rounded-xl shadow-lg ${
              dark ? 'text-slate-900 bg-orange-400 hover:bg-orange-300' : 'text-white bg-slate-900'
            }`}
          >
            Записатися
          </a>
        </div>
      </div>
    </header>
  );
}
