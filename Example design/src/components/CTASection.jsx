import React from 'react'

export default function CTASection() {
  return (
    <section className="flex flex-col text-center h-[60vh] pr-6 pl-6 relative items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none"></div>
      <div className="w-64 h-64 rounded-full bg-blue-400/20 blur-[100px] absolute"></div>
      <h2 className="text-5xl md:text-7xl font-medium text-[var(--primary)] tracking-tighter mb-6 relative z-10">
        Stop reacting.<br />Start anticipating.
      </h2>
      <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 relative z-10 font-light">
        Join hundreds of engineering teams who rely on Orion to secure their uptime and automate incident response.
      </p>
      <div className="relative z-10">
        <button className="cta-btn text-lg pt-4 pr-10 pb-4 pl-10 shadow-lg">Request Demo</button>
      </div>
    </section>
  )
}