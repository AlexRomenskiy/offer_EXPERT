import Header from './components/Header';
import CanvasBackground from './components/CanvasBackground';
import HeroSection from './sections/HeroSection';
import PainPointsSection from './sections/PainPointsSection';
import CaseStudySection from './sections/CaseStudySection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import PricingSection from './sections/PricingSection';
import CalculatorSection from './sections/CalculatorSection';
import AboutSection from './sections/AboutSection';
import FAQSection from './sections/FAQSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <CanvasBackground />
      <HeroSection />
      <main className="relative z-10 w-full">
        <PainPointsSection />
        <CaseStudySection />
        <BeforeAfterSection />
        <PricingSection />
        <CalculatorSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
}
