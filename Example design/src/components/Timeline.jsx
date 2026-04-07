import React, { useEffect, useRef } from 'react'

export default function Timeline() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const steps = Array.from(section.querySelectorAll('.tl-step'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === section) {
            section.classList.add('is-inview')
            return
          }
          const el = entry.target
          const idx = steps.indexOf(el)
          el.style.transitionDelay = Math.min(idx * 120, 360) + 'ms'
          el.classList.add('is-inview')
          io.unobserve(el)
        })
      },
      { threshold: 0.28, rootMargin: '0px 0px -10% 0px' }
    )

    io.observe(section)
    steps.forEach((s) => io.observe(s))

    return () => io.disconnect()
  }, [])

  const phases = [
    {
      num: '01',
      title: 'Ingest & Detect',
      desc: 'Orion continuously ingests metrics and logs across your entire infrastructure, immediately detecting anomalies before users notice.',
      icon: 'solar:download-square-linear',
      align: 'left',
      delay: '0ms',
    },
    {
      num: '02',
      title: 'AI Contextualization',
      desc: 'The AI engine groups related alerts, strips away noise, and generates a human-readable summary of the root cause in real-time.',
      icon: 'solar:cpu-linear',
      align: 'right',
      delay: '120ms',
      breatheDelay: '1.5s',
    },
    {
      num: '03',
      title: 'Automate & Resolve',
      desc: 'Orion triggers predefined runbooks to automatically scale resources, roll back deploys, or alert the right on-call engineer instantly.',
      icon: 'solar:settings-linear',
      align: 'left',
      delay: '240ms',
      breatheDelay: '3s',
    },
  ]

  return (
    <section
      id="liquid-timeline"
      ref={sectionRef}
      className="md:py-48 overflow-hidden bg-slate-50/30 pt-32 pb-32 relative border-t border-slate-200/40"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-20 text-center mb-16 md:mb-24 tl-title">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-slate-200/70 backdrop-blur-md text-[11px] font-medium tracking-widest uppercase text-slate-500 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          Workflow
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[0.95]">
          From incident to resolution in seconds.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
          Automated workflows eliminate manual debugging and accelerate your mean time to recovery.
        </p>
      </div>

      <div
        className="tl-spine"
        aria-hidden="true"
        style={{
          maskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)',
        }}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-24 md:gap-40">
        {phases.map((phase) => (
          <div
            key={phase.num}
            className="tl-step group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            style={{ transitionDelay: phase.delay }}
          >
            {/* Center Node */}
            <div className="absolute left-1/2 top-[3.5rem] -translate-x-1/2 hidden md:flex items-center justify-center z-20">
              <div className="tl-halo absolute w-24 h-24 border border-slate-100/50 rounded-full pointer-events-none"></div>
              <div
                className="tl-node w-14 h-14 bg-white rounded-full border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center animate-breathe group-hover:scale-105 transition-transform duration-500"
                style={phase.breatheDelay ? { animationDelay: phase.breatheDelay } : {}}
              >
                <iconify-icon icon={phase.icon} width="20" height="20" class="text-slate-400"></iconify-icon>
              </div>
            </div>

            {phase.align === 'left' ? (
              <>
                <div className="md:text-right md:pr-24 md:mt-0 mt-8">
                  <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-4">
                      Phase {phase.num}
                    </div>
                    <h3 className="text-3xl font-medium text-slate-800 mb-4 tracking-tight">{phase.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light">{phase.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
              </>
            ) : (
              <>
                <div className="hidden md:block"></div>
                <div className="md:text-left md:pl-24 mt-8 md:mt-0">
                  <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-skeuo border border-slate-100/80 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="md:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-slate-100 shadow-sm flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mb-4">
                      Phase {phase.num}
                    </div>
                    <h3 className="text-3xl font-medium text-slate-800 mb-4 tracking-tight">{phase.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light">{phase.desc}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}