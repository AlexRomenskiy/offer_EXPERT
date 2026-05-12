import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PainSection from './sections/PainSection';
import SystemIncludesSection from './sections/SystemIncludesSection';
import CaseStudySection from './sections/CaseStudySection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import PricingSection from './sections/PricingSection';
import AboutSection from './sections/AboutSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
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

  return (
    <div className="min-h-screen selection:bg-[#175ae8]/20 text-slate-700 relative overflow-x-hidden">
      {/* Atmospheric base background — unified cool-blue across all sections */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3ECF5] via-[#EEF4FA] to-[#F4F8FB]" />
        <svg
          className="absolute w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)',
            maskImage: 'radial-gradient(100% 100% at top left, black, transparent)',
          }}
        >
          <defs>
            <pattern id="base-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#base-grid)" />
        </svg>
      </div>

      <HeroSection />
      <PainSection />
      <SystemIncludesSection />
      <BeforeAfterSection />
      <CaseStudySection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
