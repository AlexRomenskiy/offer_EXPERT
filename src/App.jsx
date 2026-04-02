import HeroSection from './sections/HeroSection';
import PainPointsSection from './sections/PainPointsSection';
import CaseStudySection from './sections/CaseStudySection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import PricingSection from './sections/PricingSection';
import CalculatorSection from './sections/CalculatorSection';

export default function App() {
  return (
    <div className="text-zinc-900 antialiased selection:bg-orange-200 selection:text-orange-900 flex flex-col min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <CaseStudySection />
      <BeforeAfterSection />
      <PricingSection />
      <CalculatorSection />
    </div>
  );
}
