import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const fontStack = "'Manrope', sans-serif";

const LABELS = {
  ua: {
    backToHome: 'На головну',
    backShort: 'Назад',
    effective: 'Чинна з',
    version: 'версія',
    toc: 'Зміст',
    ariaHome: 'На головну CRAFT LIONS',
  },
  en: {
    backToHome: 'Back to home',
    backShort: 'Back',
    effective: 'Effective from',
    version: 'version',
    toc: 'Contents',
    ariaHome: 'Back to CRAFT LIONS home',
  },
};

/**
 * Shared layout for /legal/* pages.
 * - Matches landing's design canon (light glass on brand gradient bg)
 * - Top compact header (logo + back-to-home link)
 * - Optional sticky TOC on lg+ (rendered by individual page via the tocItems prop)
 * - Footer with legal links
 *
 * Props:
 *   title       — H1 of the page
 *   eyebrow     — small uppercase label above title (e.g. "Privacy")
 *   effective   — effective date string ("2026-05-19")
 *   version     — policy version ("1.0")
 *   tocItems    — array of { id, label } for in-page nav (optional)
 *   children    — page content (sections with id matching tocItems)
 */
export default function LegalLayout({ title, eyebrow, effective, version, tocItems = [], children }) {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith('/en/') || pathname === '/en';
  const homeUrl = isEn ? '/en' : '/';
  const t = isEn ? LABELS.en : LABELS.ua;

  // Scroll to top + set document title on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const prevTitle = document.title;
    document.title = `${title} · CRAFT LIONS`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ===== Sticky header — always accessible "back to home" ===== */}
      <header className="sticky top-0 z-30 px-6 md:px-8 lg:px-12 py-3 sm:py-4 bg-[#EEF4FA]/75 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to={homeUrl}
            className="inline-flex items-center gap-2.5 group"
            aria-label={t.ariaHome}
          >
            <img
              src="/logo/mark-on-light.png"
              alt="CRAFT LIONS"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
            <span
              className="text-[15px] sm:text-[16px] font-semibold tracking-[0.01em] text-slate-900"
              style={{ fontFamily: fontStack }}
            >
              CRAFT <span className="text-brand-gradient ml-0.5">LIONS</span>
            </span>
          </Link>

          <Link
            to={homeUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-slate-200/70 backdrop-blur-md text-[12px] sm:text-[13px] font-medium text-slate-700 hover:bg-white hover:border-[#175ae8]/30 hover:text-[#175ae8] transition-all"
            style={{ fontFamily: fontStack }}
          >
            <iconify-icon icon="solar:arrow-left-linear" width="14" height="14" />
            <span className="hidden sm:inline">{t.backToHome}</span>
            <span className="sm:hidden">{t.backShort}</span>
          </Link>
        </div>
      </header>

      {/* ===== Main ===== */}
      <main className="relative z-10 flex-1 px-6 md:px-8 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">

          {/* Page header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            {eyebrow && (
              <div
                className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="h-px w-6 bg-slate-300" />
                {eyebrow}
              </div>
            )}
            <h1
              className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light leading-[1.15] mb-4"
              style={{ fontFamily: fontStack }}
            >
              {title}
            </h1>
            {(effective || version) && (
              <p
                className="text-[12px] uppercase tracking-[0.18em] text-slate-500"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {effective && <>{t.effective} {effective}</>}
                {effective && version && <> · </>}
                {version && <>{t.version} {version}</>}
              </p>
            )}
          </div>

          {/* Body grid: TOC sidebar + content */}
          <div className={tocItems.length > 0 ? 'grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16' : ''}>

            {tocItems.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.toc}
                  </p>
                  <nav className="flex flex-col gap-2.5">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-[13px] leading-snug text-slate-600 hover:text-[#175ae8] transition-colors"
                        style={{ fontFamily: fontStack }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            <article
              className="legal-prose"
              style={{ fontFamily: fontStack }}
            >
              {children}
            </article>

          </div>
        </div>
      </main>

    </div>
  );
}
