// EN-version of landing — primarily for showing to English-speaking
// business contacts for feedback, not for paid NA acquisition.
// Per project_decisions_2026-05-17 + project_unified_synthesis_2026-05-17.
// All 11 sections fully translated as of 2026-05-20.

import HeroSectionEN from '../sections/en/HeroSectionEN';
import PainSectionEN from '../sections/en/PainSectionEN';
import TransformationSectionEN from '../sections/en/TransformationSectionEN';
import SystemIncludesSectionEN from '../sections/en/SystemIncludesSectionEN';
import CaseStudySectionEN from '../sections/en/CaseStudySectionEN';
import TestimonialsSectionEN from '../sections/en/TestimonialsSectionEN';
import PricingSectionEN from '../sections/en/PricingSectionEN';
import AboutSectionEN from '../sections/en/AboutSectionEN';
import GuaranteeSectionEN from '../sections/en/GuaranteeSectionEN';
import FAQSectionEN from '../sections/en/FAQSectionEN';
import FinalCTASectionEN from '../sections/en/FinalCTASectionEN';
import VideoWidget from '../components/VideoWidget';

export default function EnLandingPage() {
  return (
    <>
      <HeroSectionEN />
      <div className="scroll-focus anim-trigger"><PainSectionEN /></div>
      <div className="scroll-focus anim-trigger"><TransformationSectionEN /></div>
      <div className="scroll-focus anim-trigger"><SystemIncludesSectionEN /></div>
      <div className="scroll-focus anim-trigger"><CaseStudySectionEN /></div>
      <div className="scroll-focus anim-trigger"><TestimonialsSectionEN /></div>
      <div className="scroll-focus anim-trigger"><PricingSectionEN /></div>
      <div className="scroll-focus anim-trigger"><AboutSectionEN /></div>
      <div className="scroll-focus anim-trigger"><GuaranteeSectionEN /></div>
      <div className="scroll-focus anim-trigger"><FAQSectionEN /></div>
      <div className="scroll-focus anim-trigger"><FinalCTASectionEN /></div>
      <VideoWidget src="/videos/craftlions-widget.mp4" />
    </>
  );
}
