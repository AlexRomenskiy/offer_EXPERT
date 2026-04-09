import { useState } from 'react';

const navItems = [
  { label: 'Для кого', href: '#pain-points' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Кейс', href: '#case-study' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="flex md:mb-16 z-10 mb-12 relative gap-x-6 gap-y-6 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 text-slate-900">
        <div
          className="flex text-slate-900 bg-gradient-to-b from-black/5 to-transparent w-8 h-8 rounded-full items-center justify-center relative"
          style={{ '--border-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0))', '--border-radius-before': '9999px' }}
        >
          <iconify-icon icon="solar:layers-linear" width="16" height="16" />
        </div>
        <span className="text-lg font-medium tracking-tight">
          LOGO
        </span>
      </div>

      {/* Navigation pill */}
      <nav className="hidden md:flex uppercase text-xs font-medium text-slate-500 tracking-widest bg-white/60 border-slate-200 border rounded-full py-2 px-6 shadow-sm backdrop-blur-md gap-x-8 items-center">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="hover:text-slate-900 transition-colors duration-300"
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
          className="hidden sm:flex items-center gap-2 group hover:bg-black/5 text-xs font-medium text-slate-900 tracking-wide bg-gradient-to-b from-black/[0.02] to-transparent rounded-lg py-2.5 px-5 border border-slate-200 shadow-sm relative transition-colors"
        >
          <span className="text-[11px] uppercase font-medium text-slate-600 group-hover:text-slate-900 transition-colors tracking-tight">
            Записатися
          </span>
          <iconify-icon icon="solar:arrow-right-linear" width="14" height="14" className="group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none"
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
        <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-2xl p-3 shadow-xl flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-slate-200/50 mx-6 my-1" />
          <a
            href="#final-cta"
            onClick={(e) => handleNav(e, '#final-cta')}
            className="p-4 text-center text-sm font-medium text-white bg-slate-900 rounded-xl shadow-lg"
          >
            Записатися
          </a>
        </div>
      </div>
    </header>
  );
}
