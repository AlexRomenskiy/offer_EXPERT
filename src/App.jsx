import Header from './components/Header';
import CanvasBackground from './components/CanvasBackground';
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
  return (
    <div className="flex justify-center items-start min-h-screen bg-slate-50 selection:bg-orange-500/20 xl:p-8 text-slate-600 relative overflow-x-hidden">
      <CanvasBackground />

      <main className="glass-panel-static overflow-hidden flex flex-col xl:max-w-[1300px] xl:border-slate-200 border-none xl:border xl:rounded-[2.5rem] md:p-10 xl:p-12 xl:shadow-2xl xl:shadow-slate-200/50 min-h-screen xl:min-h-[700px] w-full z-10 rounded-none p-6 relative">
        {/* Vertical Grid Lines */}
        <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
          <div className="h-full w-[1px] bg-black/[0.03]" />
          <div className="h-full w-[1px] bg-black/[0.03] hidden md:block" />
          <div className="h-full w-[1px] bg-black/[0.03] hidden lg:block" />
          <div className="h-full w-[1px] bg-black/[0.03] hidden xl:block" />
          <div className="h-full w-[1px] bg-black/[0.03]" />
        </div>

        <Header />

        <div className="relative z-10 flex flex-col">
          <HeroSection />

          <div className="section-divider my-16 lg:my-24" />
          <PainPointsSection />

          <CaseStudySection />

          <div className="section-divider my-16 lg:my-24" />
          <BeforeAfterSection />

          <div className="section-divider my-16 lg:my-24" />
          <PricingSection />

          <div className="section-divider my-16 lg:my-24" />
          <AboutSection />

          <div className="section-divider my-16 lg:my-24" />
          <FAQSection />

          <div className="section-divider my-16 lg:my-24" />
          <FinalCTASection />

          <div className="section-divider my-16 lg:my-24" />
          <Footer />
        </div>
      </main>
    </div>
  );
}
