import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const CONSENT_STORAGE_KEY = 'craftlions_cookie_consent_v1';

function readAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return !!parsed?.analytics;
  } catch {
    return false;
  }
}

export default function AnalyticsGate() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(readAnalyticsConsent());
    const handler = (e) => setAllowed(!!e.detail?.analytics);
    window.addEventListener('craftlions:consent-changed', handler);
    return () => window.removeEventListener('craftlions:consent-changed', handler);
  }, []);

  if (!allowed) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
