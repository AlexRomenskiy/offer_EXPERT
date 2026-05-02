import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import PainPointsSection from './sections/PainPointsSection';
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
    <div className="min-h-screen bg-slate-950 selection:bg-orange-500/20 text-slate-700 relative overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
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
