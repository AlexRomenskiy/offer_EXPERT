// EN-version of landing — primarily for showing to English-speaking
// business contacts for feedback, not for paid NA acquisition.
// Per project_decisions_2026-05-17 + project_unified_synthesis_2026-05-17.

import HeroSectionEN from '../sections/en/HeroSectionEN';
import PainSectionEN from '../sections/en/PainSectionEN';
import PricingSectionEN from '../sections/en/PricingSectionEN';
import AboutSectionEN from '../sections/en/AboutSectionEN';
import FinalCTASectionEN from '../sections/en/FinalCTASectionEN';

// TODO (next turn): replace these UA imports with EN-specific section files
import SystemIncludesSection from '../sections/SystemIncludesSection';
import TransformationSection from '../sections/TransformationSection';
import CaseStudySection from '../sections/CaseStudySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import GuaranteeSection from '../sections/GuaranteeSection';
import FAQSection from '../sections/FAQSection';

export default function EnLandingPage() {
  return (
    <>
      <HeroSectionEN />
      <PainSectionEN />
      {/* TODO: TransformationSectionEN */}
      <TransformationSection />
      {/* TODO: SystemIncludesSectionEN */}
      <SystemIncludesSection />
      {/* TODO: CaseStudySectionEN */}
      <CaseStudySection />
      {/* TODO: TestimonialsSectionEN */}
      <TestimonialsSection />
      <PricingSectionEN />
      <AboutSectionEN />
      {/* TODO: GuaranteeSectionEN */}
      <GuaranteeSection />
      {/* TODO: FAQSectionEN */}
      <FAQSection />
      <FinalCTASectionEN />
    </>
  );
}
