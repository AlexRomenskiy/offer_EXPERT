import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const fontStack = "'Manrope', sans-serif";

// localStorage key — bump version to re-prompt when policy changes materially
const CONSENT_STORAGE_KEY = 'craftlions_cookie_consent_v1';

/**
 * Default consent state — GDPR-compliant opt-in (everything non-essential = false).
 * Necessary = always true (functional cookies for the site to work).
 */
const DEFAULT_PREFERENCES = {
  necessary: true, // forced — site won't work without these
  functional: false, // remember user choices (e.g. accepted-cookies state)
  analytics: false, // Vercel Analytics, GA, etc.
  marketing: false, // ad pixels, retargeting (Meta/Google ads)
};

function readStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStoredConsent(prefs) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        ...prefs,
        necessary: true,
        timestamp: new Date().toISOString(),
      })
    );
    // Notify any listening scripts (analytics gate, etc.)
    window.dispatchEvent(new CustomEvent('craftlions:consent-changed', { detail: { ...prefs, necessary: true } }));
  } catch {
    /* localStorage may be blocked — silently ignore */
  }
}

/**
 * Programmatic API — call window.__craftlionsReopenCookies() to re-open the banner
 * for users who want to change their preferences later.
 */
export function reopenCookiePreferences() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('craftlions:open-cookie-preferences'));
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFERENCES);

  const { pathname } = useLocation();
  const isEn = pathname === '/en' || pathname.startsWith('/en/');
  const cookiesUrl = isEn ? '/en/cookies' : '/cookies';
  const labels = isEn
    ? {
        title: 'Cookies on this site',
        desc1: 'We use necessary cookies to make the site work. With your consent — also analytics and marketing cookies.',
        moreLink: 'Details',
        acceptAll: 'Accept all',
        rejectAll: 'Necessary only',
        customize: 'Customize',
        prefTitle: 'Cookie preferences',
        prefDesc: 'Choose which cookie categories you allow.',
        prefCategoriesLink: 'What these categories are',
        collapse: 'Collapse',
        save: 'Save choice',
        catNecessary: { title: 'Necessary', desc: "Basic cookies the site can't work without. Cannot be disabled." },
        catFunctional: { title: 'Functional', desc: 'Remember your preferences — language, settings, form values.' },
        catAnalytics: { title: 'Analytics', desc: 'Anonymous visit statistics — so we can see what works and what doesn’t.' },
        catMarketing: { title: 'Marketing', desc: 'Pixels and tracking for retargeting and ads (Meta, Google).' },
      }
    : {
        title: 'Cookies на цьому сайті',
        desc1: 'Необхідні cookies — щоб сайт працював. За твоєю згодою — аналітичні та маркетингові.',
        moreLink: 'Детальніше',
        acceptAll: 'Прийняти всі',
        rejectAll: 'Тільки необхідні',
        customize: 'Налаштувати',
        prefTitle: 'Налаштування cookies',
        prefDesc: 'Обери, які категорії cookies ти дозволяєш.',
        prefCategoriesLink: 'Що це за категорії',
        collapse: 'Згорнути',
        save: 'Зберегти вибір',
        catNecessary: { title: 'Необхідні', desc: 'Базові cookies, без яких сайт не може коректно працювати. Не вимикаються.' },
        catFunctional: { title: 'Функціональні', desc: "Запам'ятовують твої вподобання — мову, налаштування, форми." },
        catAnalytics: { title: 'Аналітика', desc: 'Анонімна статистика відвідувань — щоб ми бачили, що працює, а що ні.' },
        catMarketing: { title: 'Маркетинг', desc: 'Pixels та tracking для ретаргетингу і реклами (Meta, Google).' },
      };

  // Initial mount — check if banner needed
  useEffect(() => {
    const stored = readStoredConsent();
    if (!stored) {
      // First-time visitor → show banner after a brief delay so it doesn't crash into hero animation
      const t = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(t);
    }
    // Returning visitor — hydrate prefs from storage (for the settings dialog)
    setPrefs({
      necessary: true,
      functional: !!stored.functional,
      analytics: !!stored.analytics,
      marketing: !!stored.marketing,
    });
  }, []);

  // Listen for programmatic re-open (e.g. from "Cookie settings" link in footer)
  useEffect(() => {
    const handler = () => {
      const stored = readStoredConsent();
      if (stored) {
        setPrefs({
          necessary: true,
          functional: !!stored.functional,
          analytics: !!stored.analytics,
          marketing: !!stored.marketing,
        });
      }
      setIsExpanded(true);
      setIsVisible(true);
    };
    window.addEventListener('craftlions:open-cookie-preferences', handler);
    // Expose global helper for easy invocation from anywhere
    window.__craftlionsReopenCookies = () => window.dispatchEvent(new CustomEvent('craftlions:open-cookie-preferences'));
    return () => {
      window.removeEventListener('craftlions:open-cookie-preferences', handler);
      delete window.__craftlionsReopenCookies;
    };
  }, []);

  const handleAcceptAll = () => {
    const next = { necessary: true, functional: true, analytics: true, marketing: true };
    setPrefs(next);
    writeStoredConsent(next);
    setIsVisible(false);
    setIsExpanded(false);
  };

  const handleRejectAll = () => {
    const next = { ...DEFAULT_PREFERENCES }; // only necessary
    setPrefs(next);
    writeStoredConsent(next);
    setIsVisible(false);
    setIsExpanded(false);
  };

  const handleSavePreferences = () => {
    writeStoredConsent(prefs);
    setIsVisible(false);
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 z-[60] max-w-xl mx-auto"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div
        className="relative rounded-[20px] bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_22px_60px_rgba(15,23,42,0.16),0_6px_18px_rgba(15,23,42,0.06)] overflow-hidden animate-[fadeIn_0.3s_ease-out]"
        style={{ fontFamily: fontStack }}
      >
        {/* Glass highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none"
        />

        <div className="relative z-10 p-4 sm:p-5">

          {/* Compact view */}
          {!isExpanded ? (
            <>
              <div className="mb-3.5">
                <h2
                  id="cookie-consent-title"
                  className="text-[14px] font-semibold text-slate-950 tracking-[-0.01em] mb-1"
                >
                  {labels.title}
                </h2>
                <p id="cookie-consent-desc" className="text-[12.5px] text-slate-600 leading-[1.5]">
                  {labels.desc1}{' '}
                  <Link to={cookiesUrl} className="text-[#175ae8] hover:underline">
                    {labels.moreLink}
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1.5">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 inline-flex items-center justify-center h-9 rounded-full text-white text-[12.5px] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                    boxShadow: '0 10px 28px rgba(23,90,232,0.25), inset 0 1px 0 rgba(255,255,255,0.20)',
                  }}
                >
                  {labels.acceptAll}
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="flex-1 inline-flex items-center justify-center h-9 rounded-full text-slate-700 text-[12.5px] font-medium bg-white/70 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all"
                >
                  {labels.rejectAll}
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="flex-1 inline-flex items-center justify-center gap-1 h-9 rounded-full text-slate-700 text-[12.5px] font-medium hover:bg-slate-100/60 transition-all"
                >
                  {labels.customize}
                </button>
              </div>
            </>
          ) : (
            /* Expanded preferences view */
            <>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h2
                    id="cookie-consent-title"
                    className="text-[14px] font-semibold text-slate-950 tracking-[-0.01em] mb-1"
                  >
                    {labels.prefTitle}
                  </h2>
                  <p className="text-[12px] text-slate-600 leading-[1.5]">
                    {labels.prefDesc}{' '}
                    <Link to={cookiesUrl} className="text-[#175ae8] hover:underline">
                      {labels.prefCategoriesLink}
                    </Link>
                    .
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-slate-100 transition-colors"
                  aria-label={labels.collapse}
                >
                  <iconify-icon icon="solar:close-circle-linear" width="18" height="18" style={{ color: '#64748b' }} />
                </button>
              </div>

              <div className="space-y-1.5 mb-4">
                <CategoryToggle
                  title={labels.catNecessary.title}
                  desc={labels.catNecessary.desc}
                  checked={true}
                  disabled={true}
                />
                <CategoryToggle
                  title={labels.catFunctional.title}
                  desc={labels.catFunctional.desc}
                  checked={prefs.functional}
                  onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
                />
                <CategoryToggle
                  title={labels.catAnalytics.title}
                  desc={labels.catAnalytics.desc}
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                />
                <CategoryToggle
                  title={labels.catMarketing.title}
                  desc={labels.catMarketing.desc}
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-1.5">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="flex-1 inline-flex items-center justify-center h-9 rounded-full text-white text-[12.5px] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                    boxShadow: '0 10px 28px rgba(23,90,232,0.25), inset 0 1px 0 rgba(255,255,255,0.20)',
                  }}
                >
                  {labels.save}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 inline-flex items-center justify-center h-9 rounded-full text-slate-700 text-[12.5px] font-medium bg-white/70 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all"
                >
                  {labels.acceptAll}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryToggle({ title, desc, checked, onChange, disabled }) {
  return (
    <label
      className={`flex items-start gap-3 p-2.5 rounded-xl border transition-colors ${
        disabled ? 'border-slate-200/60 bg-slate-50/50 cursor-default' : 'border-slate-200/70 bg-white/50 hover:bg-white/70 cursor-pointer'
      }`}
    >
      <span className="flex-1 min-w-0">
        <span className="block text-[12.5px] font-semibold text-slate-950 mb-0.5">{title}</span>
        <span className="block text-[11.5px] text-slate-600 leading-[1.45]">{desc}</span>
      </span>
      <span className="shrink-0 mt-0.5">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange?.(!checked)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            checked ? 'bg-gradient-to-r from-[#020f2d] to-[#175ae8]' : 'bg-slate-300'
          } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <span
            className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${
              checked ? 'translate-x-[18px]' : 'translate-x-[3px]'
            }`}
          />
        </button>
      </span>
    </label>
  );
}
