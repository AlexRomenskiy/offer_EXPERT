import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Як працюємо', href: '#methodology' },
  { label: 'Кейс', href: '#case' },
  { label: 'Тарифи', href: '#pricing' },
];

const ctaText = 'Записатися';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'pt-3' : 'pt-6 sm:pt-7 lg:pt-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div
          className="rounded-full transition-all duration-300"
          style={{
            background: scrolled
              ? 'linear-gradient(180deg, rgba(15,23,42,0.82), rgba(15,23,42,0.72))'
              : 'transparent',
            border: scrolled
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid transparent',
            backdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
            padding: scrolled ? '8px 14px' : '4px 4px',
            boxShadow: scrolled
              ? '0 10px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)'
              : 'none',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Brand: lion mark + wordmark — aligned with headline left edge */}
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
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
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

            {/* Actions — aligned with image card right edge */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {/* Animated CTA button */}
              <a
                href="#request-access"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const el = document.querySelector('#request-access');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="hidden md:inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full relative items-center gap-2"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.10)',
                  boxShadow:
                    '0 8px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.50)',
                  height: '44px',
                  padding: '0 22px',
                  transition:
                    'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(251,146,60,0.40)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.50)';
                }}
              >
                {/* Animated red bar */}
                <div
                  className="absolute top-0 left-0 h-full w-full pointer-events-none"
                  style={{
                    zIndex: 1,
                    backgroundColor: 'transparent',
                    mask:
                      'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)',
                    WebkitMask:
                      'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 50% 50%, #fb923c 0%, transparent 50%), radial-gradient(circle at 45% 45%, #f97316 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fdba74 0%, transparent 45%), radial-gradient(circle at 45% 55%, #fbbf24 0%, transparent 45%), radial-gradient(circle at 55% 45%, #ea580c 0%, transparent 45%)',
                      mask:
                        'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)',
                      WebkitMask:
                        'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)',
                      animation:
                        'loader-bar-move 2s infinite alternate cubic-bezier(0.6, 0.8, 0.5, 1), loader-bar-opacity 4s infinite cubic-bezier(0.6, 0.8, 0.5, 1)',
                      filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.6))',
                    }}
                  />
                </div>

                {/* Letter-by-letter text */}
                <span
                  className="relative flex"
                  style={{
                    zIndex: 2,
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    userSelect: 'none',
                    color: '#fff',
                    gap: '0.05em',
                  }}
                >
                  {[...ctaText].map((letter, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        opacity: 0,
                        animation: 'loader-letter-anim 4s infinite linear',
                        animationDelay: `${0.1 + i * 0.105}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
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
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mx-auto max-w-7xl px-6 mt-3 origin-top transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
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
  );
}
