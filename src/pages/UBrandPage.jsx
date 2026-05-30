// U-Brand (Craft Lions × Tania) — joint-product event landing.
// Reached via the QR shown at Tania's live talk. EN + $ pricing.
// CTAs lead to the in-page lead form (#book) → /api/lead → Telegram.
// Every package bundles both founders' work. Discount auto-reverts after deadline.

import { useEffect } from 'react';

import UBrandHero from '../sections/ubrand/UBrandHero';
import UBrandDuoSection from '../sections/ubrand/UBrandDuoSection';
import UBrandUrgencySection from '../sections/ubrand/UBrandUrgencySection';
import UBrandPricingSection from '../sections/ubrand/UBrandPricingSection';
import UBrandFinalCTA from '../sections/ubrand/UBrandFinalCTA';
import UBrandLeadForm from '../sections/ubrand/UBrandLeadForm';
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
      <div className="scroll-focus anim-trigger"><UBrandLeadForm /></div>
      <UBrandFooter />
    </>
  );
}
