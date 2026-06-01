import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import EnLandingPage from './pages/EnLandingPage';
import UBrandPage from './pages/UBrandPage';
import TestDesignPage from './pages/TestDesignPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiesPolicy from './pages/legal/CookiesPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import RefundPolicy from './pages/legal/RefundPolicy';
import Contacts from './pages/legal/Contacts';

import PrivacyPolicyEN from './pages/legal/en/PrivacyPolicyEN';
import CookiesPolicyEN from './pages/legal/en/CookiesPolicyEN';
import TermsOfServiceEN from './pages/legal/en/TermsOfServiceEN';
import RefundPolicyEN from './pages/legal/en/RefundPolicyEN';
import ContactsEN from './pages/legal/en/ContactsEN';

import CookieConsentBanner from './components/CookieConsentBanner';
import AnalyticsGate from './components/AnalyticsGate';
import MetaPixelGate from './components/MetaPixelGate';
import Preloader from './components/Preloader';

function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E3ECF5] via-[#EEF4FA] to-[#F4F8FB]" />
      <svg
        className="absolute w-full h-full opacity-[0.35] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="bg-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.45" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-noise)" />
      </svg>
    </div>
  );
}

function AnimObserver() {
  // Master-template anim system: observe .anim-trigger and add .is-visible
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.anim-trigger').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );

    const observeAll = () => {
      document.querySelectorAll('.anim-trigger:not(.is-visible)').forEach((el) => observer.observe(el));
    };

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-[#175ae8]/20 text-slate-700 relative">
        <GlobalBackground />
        <AnimObserver />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/en" element={<EnLandingPage />} />
          <Route path="/u-brand" element={<UBrandPage />} />
          <Route path="/test-design" element={<TestDesignPage />} />
          <Route path="/test_design" element={<TestDesignPage />} />

          {/* UA legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/contacts" element={<Contacts />} />

          {/* EN legal */}
          <Route path="/en/privacy" element={<PrivacyPolicyEN />} />
          <Route path="/en/cookies" element={<CookiesPolicyEN />} />
          <Route path="/en/terms" element={<TermsOfServiceEN />} />
          <Route path="/en/refund" element={<RefundPolicyEN />} />
          <Route path="/en/contacts" element={<ContactsEN />} />

          {/* Backwards-compat / common aliases */}
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="/cookie-policy" element={<Navigate to="/cookies" replace />} />
          <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
          <Route path="/refund-policy" element={<Navigate to="/refund" replace />} />
          <Route path="/en/privacy-policy" element={<Navigate to="/en/privacy" replace />} />
          <Route path="/en/cookie-policy" element={<Navigate to="/en/cookies" replace />} />
          <Route path="/en/terms-of-service" element={<Navigate to="/en/terms" replace />} />
          <Route path="/en/refund-policy" element={<Navigate to="/en/refund" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <CookieConsentBanner />
        <AnalyticsGate />
        <MetaPixelGate />
        <Preloader />
      </div>
    </BrowserRouter>
  );
}
