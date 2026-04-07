import React from 'react'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="tracking-tight">
            Real-Time
            <br />
            Intelligence.
          </h1>
          <p>
            Monitor performance, detect issues early, and automate operational
            workflows from one unified, AI-powered control platform.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start">
            <button className="cta-btn">Request Demo</button>
            <button className="px-6 py-3 rounded-full text-sm font-medium text-slate-700 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
              View Platform
            </button>
          </div>
        </div>

        <div className="card-section flex relative items-center justify-center" style={{ perspective: '1400px' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-blue-400/10 rounded-full blur-[90px] -z-10 pointer-events-none"></div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}