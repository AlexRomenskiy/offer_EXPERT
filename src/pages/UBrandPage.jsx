// U-Brand (Craft Lions × Tania) — joint-product event landing.
// Reached via the QR shown at Tania's live talk. EN + $ pricing, books a call.
// Reuses the existing EN pricing + testimonials; adds U-Brand hero, duo and
// urgency blocks. Discount/deadline/video are all driven from config/ubrand.js.

import { useEffect } from 'react';

import UBrandHero from '../sections/ubrand/UBrandHero';
import UBrandDuoSection from '../sections/ubrand/UBrandDuoSection';
import UBrandUrgencySection from '../sections/ubrand/UBrandUrgencySection';
import UBrandFinalCTA from '../sections/ubrand/UBrandFinalCTA';

import PricingSectionEN from '../sections/en/PricingSectionEN';
import TestimonialsSectionEN from '../sections/en/TestimonialsSectionEN';

export default function UBrandPage() {
  useEffect(() => {
    document.title = 'U-Brand · Craft Lions × Tania';
  }, []);

  return (
    <>
      <UBrandHero />
      <div className="scroll-focus anim-trigger"><UBrandDuoSection /></div>
      <div className="scroll-focus anim-trigger"><TestimonialsSectionEN /></div>
      <div className="scroll-focus anim-trigger"><UBrandUrgencySection /></div>
      <div className="scroll-focus anim-trigger"><PricingSectionEN /></div>
      <div className="scroll-focus anim-trigger"><UBrandFinalCTA /></div>
    </>
  );
}
