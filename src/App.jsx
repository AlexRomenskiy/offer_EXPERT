import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PainSection from './sections/PainSection';
import SystemIncludesSection from './sections/SystemIncludesSection';
import TransformationSection from './sections/TransformationSection';
import CaseStudySection from './sections/CaseStudySection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import AboutSection from './sections/AboutSection';
import GuaranteeSection from './sections/GuaranteeSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';

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
    <div className="min-h-screen selection:bg-[#175ae8]/20 text-slate-700 relative">
      {/* Atmospheric base background — unified cool-blue across all sections */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3ECF5] via-[#EEF4FA] to-[#F4F8FB]" />
        {/* Subtle film-grain noise — fractalNoise turbulence, multiply-blended */}
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

      <HeroSection />
      <PainSection />
      <TransformationSection />
      <SystemIncludesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
