import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Для кого', href: '#pain-points' },
  { label: 'Рішення', href: '#pricing' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className={`relative backdrop-blur-xl border rounded-full px-2 py-2 pl-6 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 border-white/60 shadow-[0_15px_40px_rgba(0,0,0,0.08)]'
              : 'bg-white/70 border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
          } hover:bg-white/85 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-heading font-medium text-slate-800 tracking-tight text-sm uppercase">
              LOGO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-wider rounded-full hover:bg-white/60 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#final-cta"
              onClick={(e) => handleNav(e, '#final-cta')}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white uppercase tracking-widest bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              Записатися
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-white/60 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              <iconify-icon icon={mobileOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} width="20" height="20" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full px-4 mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen
              ? 'transform scale-100 opacity-100 visible'
              : 'transform scale-95 opacity-0 invisible'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="p-4 text-center text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-2xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-slate-200/50 mx-6 my-1" />
            <a
              href="#final-cta"
              onClick={(e) => handleNav(e, '#final-cta')}
              className="p-4 text-center text-sm font-medium text-white bg-slate-900 rounded-2xl shadow-lg shadow-slate-900/10"
            >
              Записатися
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
