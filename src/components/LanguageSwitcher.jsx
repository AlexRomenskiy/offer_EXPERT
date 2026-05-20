import { Link, useLocation } from 'react-router-dom';
import { useLocale, oppositeLocaleUrl } from '../hooks/useLocale';

const fontStack = "'Manrope', sans-serif";

/**
 * Compact UA/EN toggle. Active locale = highlighted; click on inactive = switch.
 * Designed to sit inside the dark Header pill on landing (white-on-dark) or
 * inside light contexts (dark-on-light). Defaults to dark-context styling;
 * pass `variant="light"` for light contexts (legal pages).
 */
export default function LanguageSwitcher({ variant = 'dark' }) {
  const { pathname } = useLocation();
  const locale = useLocale();
  const otherUrl = oppositeLocaleUrl(pathname, locale);

  const isDark = variant === 'dark';
  const activeClass = isDark
    ? 'text-white bg-white/15 border-white/25'
    : 'text-slate-900 bg-white border-slate-300';
  const inactiveClass = isDark
    ? 'text-white/55 hover:text-white border-transparent'
    : 'text-slate-500 hover:text-slate-900 border-transparent';

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ${
        isDark ? 'bg-white/[0.06] border border-white/10' : 'bg-slate-100/80 border border-slate-200'
      }`}
      style={{ fontFamily: fontStack }}
    >
      <Link
        to={locale === 'ua' ? pathname : otherUrl}
        className={`inline-flex h-7 items-center px-2.5 rounded-full text-[11px] font-semibold tracking-[0.04em] transition-colors border ${
          locale === 'ua' ? activeClass : inactiveClass
        }`}
        aria-current={locale === 'ua' ? 'true' : undefined}
      >
        UA
      </Link>
      <Link
        to={locale === 'en' ? pathname : otherUrl}
        className={`inline-flex h-7 items-center px-2.5 rounded-full text-[11px] font-semibold tracking-[0.04em] transition-colors border ${
          locale === 'en' ? activeClass : inactiveClass
        }`}
        aria-current={locale === 'en' ? 'true' : undefined}
      >
        EN
      </Link>
    </div>
  );
}
