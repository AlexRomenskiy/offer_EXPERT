import React from 'react'

export default function MarqueeSection() {
  return (
    <section className="py-24 border-y border-white/30 bg-white/5 backdrop-blur-sm overflow-hidden">
      <div
        className="marquee-track whitespace-nowrap"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 30%, black 60%, transparent)',
        }}
      >
        <span className="text-[8rem] text-[var(--primary)] font-bold opacity-5 mx-12">SYSTEM MONITORING</span>
        <span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">AI INSIGHTS</span>
        <span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">AUTOMATED WORKFLOWS</span>
        <span className="text-[8rem] font-bold text-[var(--primary)] opacity-5 mx-12">INCIDENT DETECTION</span>
      </div>
    </section>
  )
}