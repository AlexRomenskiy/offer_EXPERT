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
import VideoWidget from '../components/VideoWidget';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="scroll-focus anim-trigger"><PainSection /></div>
      <div className="scroll-focus anim-trigger"><TransformationSection /></div>
      <div className="scroll-focus anim-trigger"><SystemIncludesSection /></div>
      <div className="scroll-focus anim-trigger"><CaseStudySection /></div>
      <div className="scroll-focus anim-trigger"><TestimonialsSection /></div>
      <div className="scroll-focus anim-trigger"><PricingSection /></div>
      <div className="scroll-focus anim-trigger"><AboutSection /></div>
      <div className="scroll-focus anim-trigger"><FAQSection /></div>
      <div className="scroll-focus anim-trigger"><FinalCTASection /></div>
      <VideoWidget src="/videos/craftlions-widget.mp4" />
    </>
  );
}
