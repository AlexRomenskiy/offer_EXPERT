import { useLocation } from 'react-router-dom';

/**
 * Returns the active locale based on the current URL.
 * - `/en` and `/en/*` → 'en'
 * - everything else → 'ua' (default)
 *
 * Pair with `localePath(path, locale)` to build links that preserve locale.
 */
export function useLocale() {
  const { pathname } = useLocation();
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'ua';
}

/**
 * Prefixes a path with `/en` when locale === 'en'. Pass-through for 'ua'.
 *   localePath('/pricing', 'en') → '/en/pricing'
 *   localePath('/',         'en') → '/en'
 *   localePath('/anything', 'ua') → '/anything'
 */
export function localePath(path, locale) {
  if (locale !== 'en') return path;
  if (path === '/') return '/en';
  return `/en${path}`;
}

/**
 * For the language switcher — returns the URL of the same content in the
 * opposite locale. e.g., on `/en` returns `/`; on `/` returns `/en`.
 * Legal routes are EN-stubbed too (`/en/privacy` would link back to `/privacy`).
 */
export function oppositeLocaleUrl(pathname, currentLocale) {
  if (currentLocale === 'en') {
    if (pathname === '/en') return '/';
    return pathname.replace(/^\/en/, '') || '/';
  }
  if (pathname === '/') return '/en';
  return `/en${pathname}`;
}
