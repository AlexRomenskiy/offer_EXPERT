import React from 'react'
import Header from './components/Header'
import WebGLBackground from './components/WebGLBackground'
import HeroSection from './components/HeroSection'
import LogoCloud from './components/LogoCloud'
import BentoGrid from './components/BentoGrid'
import Timeline from './components/Timeline'
import Integrations from './components/Integrations'
import PlatformModules from './components/PlatformModules'
import MarqueeSection from './components/MarqueeSection'
import Pillars from './components/Pillars'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <WebGLBackground />
      <HeroSection />
      <main className="z-10 w-full relative">
        <LogoCloud />
        <BentoGrid />
        <Timeline />
        <Integrations />
        <PlatformModules />
        <MarqueeSection />
        <Pillars />
        <Testimonials />
        <Pricing />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}