// U-Brand (Craft Lions × Tania) — joint-product event landing.
// Reached via the QR shown at Tania's live talk. EN + $ pricing, books a call.
// Every package bundles both founders' work. Discount/deadline/video are all
// driven from config/ubrand.js; the discount auto-reverts after the deadline.

import { useEffect } from 'react';

import UBrandHero from '../sections/ubrand/UBrandHero';
import UBrandDuoSection from '../sections/ubrand/UBrandDuoSection';
import UBrandUrgencySection from '../sections/ubrand/UBrandUrgencySection';
import UBrandPricingSection from '../sections/ubrand/UBrandPricingSection';
import UBrandFinalCTA from '../sections/ubrand/UBrandFinalCTA';
import UBrandFooter from '../sections/ubrand/UBrandFooter';

export default function UBrandPage() {
  useEffect(() => {
    document.title = 'U-Brand · Craft Lions × Tania Lav';
  }, []);

  return (
    <>
      <UBrandHero />
      <div className="scroll-focus anim-trigger"><UBrandDuoSection /></div>
      <div className="scroll-focus anim-trigger"><UBrandUrgencySection /></div>
      <div className="scroll-focus anim-trigger"><UBrandPricingSection /></div>
      <div className="scroll-focus anim-trigger"><UBrandFinalCTA /></div>
      <UBrandFooter />
    </>
  );
}
