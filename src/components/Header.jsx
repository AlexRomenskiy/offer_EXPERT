import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Як працюємо', href: '#methodology' },
  { label: 'Кейс', href: '#case' },
  { label: 'Тарифи', href: '#pricing' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-5 transition-all duration-300 ${
          scrolled ? 'pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <div
          className="max-w-5xl mx-auto rounded-full transition-all duration-300"
          style={{
            background: scrolled
              ? 'linear-gradient(180deg, rgba(15,23,42,0.82), rgba(15,23,42,0.72))'
              : 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(255, 255, 255, 0.22)',
            backdropFilter: 'blur(22px) saturate(160%)',
            WebkitBackdropFilter: 'blur(22px) saturate(160%)',
            padding: scrolled ? '6px 12px' : '8px 16px',
            boxShadow: scrolled
              ? '0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)'
              : '0 10px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.18)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Brand: lion mark (chroma-keyed) + wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileOpen(false);
              }}
              className="flex items-center gap-2.5"
            >
              <img
                src="/logo/mark-on-light.png"
                alt="CRAFT LIONS"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              />
              <span className="text-[15px] sm:text-[16px] font-semibold tracking-[0.01em]">
                <span className="text-white">CRAFT</span>
                <span className="text-[#60a5fa] ml-1.5">LIONS</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium text-white/65">
              {navItems.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const el = document.querySelector(it.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/[0.06]"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <a
                href="#request-access"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const el = document.querySelector('#request-access');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="hidden md:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[13px] font-medium text-slate-950 bg-white/95 hover:bg-white transition-all duration-300 shadow-[0_2px_10px_rgba(255,255,255,0.10)]"
              >
                Записатися
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex md:hidden p-2 rounded-full transition-all duration-300 border border-white/15 bg-white/[0.06] hover:bg-white/[0.12]"
                aria-label="Меню"
              >
                <iconify-icon
                  icon={mobileOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'}
                  width="20"
                  height="20"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mx-auto max-w-5xl mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen
              ? 'transform scale-100 opacity-100 visible'
              : 'transform scale-95 opacity-0 invisible'
          }`}
        >
          <div
            className="rounded-2xl p-3 flex flex-col gap-1 border"
            style={{
              background: 'rgba(2, 15, 45, 0.92)',
              borderColor: 'rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const el = document.querySelector(it.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="p-4 text-center text-sm font-medium rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {it.label}
              </a>
            ))}
            <div className="h-px mx-6 my-1 bg-white/10" />
            <a
              href="#request-access"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                const el = document.querySelector('#request-access');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="p-4 text-center text-sm font-medium rounded-xl text-slate-950 bg-white shadow-lg"
            >
              Записатися
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
