import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const CONSENT_STORAGE_KEY = 'craftlions_cookie_consent_v1';
const PIXEL_ID = '825263620658258';

function readMarketingConsent() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return !!parsed?.marketing;
  } catch {
    return false;
  }
}

function loadPixel() {
  if (typeof window === 'undefined') return;
  if (window.fbq) return; // already loaded — never re-init

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}

export default function MetaPixelGate() {
  const { pathname } = useLocation();
  const firstPathRef = useRef(pathname);

  useEffect(() => {
    if (readMarketingConsent()) loadPixel();

    const handler = (e) => {
      if (e.detail?.marketing) loadPixel();
    };
    window.addEventListener('craftlions:consent-changed', handler);
    return () => window.removeEventListener('craftlions:consent-changed', handler);
  }, []);

  // SPA route-change PageView. Skip the initial path — loadPixel() already fires it on init.
  useEffect(() => {
    if (pathname === firstPathRef.current) return;
    if (typeof window === 'undefined' || !window.fbq) return;
    window.fbq('track', 'PageView');
  }, [pathname]);

  // Global Lead tracking on Calendly clicks. Capture phase → fires even with target="_blank".
  // Source is auto-detected from closest [data-cta-source] or [id] ancestor.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onClick = (e) => {
      if (!window.fbq) return;
      const link = e.target.closest?.('a[href*="calendly.com"]');
      if (!link) return;
      const srcEl = link.closest('[data-cta-source]') || link.closest('[id]');
      const source = srcEl?.dataset?.ctaSource || srcEl?.id || 'unknown';
      const market = link.href.includes('alex-romenskii') ? 'ua' : 'en';
      window.fbq('track', 'Lead', {
        content_name: `calendly_${source}`,
        content_category: market,
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
