import HeroSection from '../sections/HeroSection';
import PainSection from '../sections/PainSection';
import SystemIncludesSection from '../sections/SystemIncludesSection';
import TransformationSection from '../sections/TransformationSection';
import CaseStudySection from '../sections/CaseStudySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingSection from '../sections/PricingSection';
import AboutSection from '../sections/AboutSection';
import FAQSection from '../sections/FAQSection';
import FinalCTASection from '../sections/FinalCTASection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <TransformationSection />
      <SystemIncludesSection />
      <CaseStudySection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
