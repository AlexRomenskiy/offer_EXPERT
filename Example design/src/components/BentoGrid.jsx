import React, { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function BentoGrid() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="max-w-[1400px] mr-auto ml-auto pt-20 pr-6 pb-32 pl-6" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">
          Complete Operational Visibility
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
          See risks instantly, eliminate noise, and give your team the context
          they need to resolve incidents faster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-[800px] gap-x-8 gap-y-8">
        {/* CARD 1: AI Root Cause Analysis */}
        <div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:cpu-linear" width="24" height="24" class="text-slate-700"></iconify-icon>
            </div>
            <div>
              <h3 className="text-3xl font-medium text-[var(--primary)] mb-3 tracking-tight">
                AI Root Cause Analysis
              </h3>
              <p className="text-[var(--text-muted)] text-lg">
                Automatically correlate metrics, logs, and traces to pinpoint
                the exact origin of an issue instantly.
              </p>
            </div>
          </div>

          {/* UI Schema */}
          <div className="mt-10 flex flex-col md:flex-row gap-6 h-auto md:h-44">
            <div className="flex-1 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[160px]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
              <div className="flex justify-between items-center w-full mb-4 relative z-10">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase">System Load</div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-full pt-4 relative z-10">
                {[
                  { h: '30%', bg: 'bg-slate-400/10' },
                  { h: '50%', bg: 'bg-slate-400/20' },
                  { h: '80%', bg: 'bg-slate-400/30' },
                  { h: '100%', bg: 'bg-slate-600/50', active: true },
                  { h: '60%', bg: 'bg-slate-400/20' },
                  { h: '40%', bg: 'bg-slate-400/10' },
                  { h: '45%', bg: 'bg-slate-400/10' },
                  { h: '20%', bg: 'bg-slate-400/5' },
                ].map((bar, i) => (
                  <div key={i} className={`${bar.bg} w-full rounded-t-sm relative`} style={{ height: bar.h }}>
                    {bar.active && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-600 shadow-[0_0_10px_rgba(71,85,105,0.6)]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Insights Generated */}
            <div className="w-full md:w-1/3 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Insights Generated</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-700">
                  <iconify-icon icon="solar:danger-triangle-linear" width="16" height="16"></iconify-icon>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 w-full bg-slate-300 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
                  <iconify-icon icon="solar:info-circle-linear" width="16" height="16"></iconify-icon>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 w-5/6 bg-slate-300 rounded-full"></div>
                  <div className="h-1.5 w-1/2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Multi-Cloud Visibility */}
        <div className="glass-panel flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] pt-10 pr-10 pb-10 pl-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:layers-linear" width="24" height="24" class="text-slate-700"></iconify-icon>
            </div>
            <div>
              <h3 className="text-2xl font-normal text-[var(--primary)] mb-3 tracking-tight">Multi-Cloud Visibility</h3>
              <p className="text-[var(--text-muted)] font-light">Unify telemetry data across your entire infrastructure.</p>
            </div>
          </div>

          <div
            className="flex w-full h-44 mt-10 relative items-end justify-center"
            style={{
              perspective: '1000px',
              maskImage: 'linear-gradient(180deg, transparent, black 40%, black 100%, transparent)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent, black 40%, black 100%, transparent)',
            }}
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-4 bg-slate-50/50 w-[85%] h-24 border-slate-300/30 border rounded-xl absolute bottom-16 shadow-sm"></div>
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2 bg-slate-50/80 w-[92%] h-24 border-slate-200/50 border rounded-xl absolute bottom-8 shadow-md backdrop-blur-md"></div>
            <div className="absolute w-full bottom-0 h-24 bg-white/80 border border-white/80 rounded-xl backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center px-6 gap-4 transform transition-transform duration-500">
              <div className="flex bg-slate-50 w-12 h-12 border-slate-200 border rounded-xl shadow-inner items-center justify-center">
                <iconify-icon icon="solar:server-square-linear" width="24" height="24" class="text-slate-500"></iconify-icon>
              </div>
              <div className="space-y-2.5 flex-1">
                <div className="h-2.5 bg-slate-300/80 w-1/2 rounded-full"></div>
                <div className="h-2 w-1/3 bg-slate-200/80 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Automated Runbooks */}
        <div className="glass-panel flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:bolt-linear" width="24" height="24" class="text-slate-700"></iconify-icon>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[var(--primary)] mb-3 tracking-tight">Automated Runbooks</h3>
              <p className="text-[var(--text-muted)]">Trigger self-healing workflows without human intervention.</p>
            </div>
          </div>

          <div className="mt-10 space-y-3">
            {/* Active Toggle */}
            <div className="flex items-center justify-between bg-white/70 border border-white p-4 rounded-xl shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <iconify-icon icon="solar:code-circle-linear" width="16" height="16" class="text-slate-600"></iconify-icon>
                </div>
                <div className="h-2.5 w-24 bg-slate-700 rounded-full"></div>
              </div>
              <div className="w-11 h-6 bg-slate-700 rounded-full relative shadow-inner">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow border border-slate-200"></div>
              </div>
            </div>

            {/* Inactive Toggle */}
            <div className="flex items-center justify-between bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                  <iconify-icon icon="solar:restart-linear" width="16" height="16"></iconify-icon>
                </div>
                <div className="h-2 w-28 bg-slate-400 rounded-full"></div>
              </div>
              <div className="w-11 h-6 bg-slate-200 rounded-full relative shadow-inner border border-slate-300">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm border border-slate-100"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: Global Edge Tracing */}
        <div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll transition-all duration-1000 group rounded-[2rem] p-10 gap-6">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:earth-linear" width="24" height="24" class="text-slate-700"></iconify-icon>
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-2">Global Edge Tracing</h3>
            <p className="text-slate-500 max-w-lg">
              Distributed tracing infrastructure with ultra-low latency.
              Follow requests across microservices and catch bottlenecks in real-time.
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row gap-5 h-auto md:h-48">
            {/* Map Visualization */}
            <div className="flex-[2] bg-white/60 border border-white/80 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-sm min-h-[160px]">
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 15,30 L 40,60 L 65,35 L 85,75" stroke="#cbd5e1" strokeWidth="0.5" fill="none" strokeDasharray="2 2"></path>
                <path d="M 40,60 L 55,85" stroke="#cbd5e1" strokeWidth="0.5" fill="none" strokeDasharray="2 2"></path>
              </svg>
              <div className="absolute top-[30%] left-[15%] w-3.5 h-3.5 rounded-full bg-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.4)] border border-white"></div>
              <div className="absolute top-[60%] left-[40%] w-5 h-5 rounded-full bg-white border-2 border-slate-200 shadow-[0_0_20px_rgba(148,163,184,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full absolute"></div>
              </div>
              <div className="absolute top-[35%] left-[65%] w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_10px_rgba(148,163,184,0.3)] border border-white"></div>
              <div className="absolute top-[75%] left-[85%] w-3.5 h-3.5 rounded-full bg-slate-400 shadow-[0_0_15px_rgba(148,163,184,0.4)] border border-white"></div>
              <div className="absolute top-[85%] left-[55%] w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>

            {/* Data Panel */}
            <div className="flex-[1] flex flex-col gap-4">
              <div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Global Latency</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-medium text-slate-800">12</span>
                  <span className="text-sm font-medium text-slate-500">ms</span>
                </div>
                <div className="mt-3 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 w-[15%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-white/60 border border-white/80 rounded-xl p-5 flex-1 flex flex-col justify-center shadow-sm">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Active Traces</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium text-slate-800">3,492</span>
                </div>
                <div className="mt-3 flex gap-1.5">
                  <div className="h-2 flex-1 bg-slate-400/20 rounded-full"></div>
                  <div className="h-2 flex-1 bg-slate-400/40 rounded-full"></div>
                  <div className="h-2 flex-1 bg-slate-400/60 rounded-full"></div>
                  <div className="h-2 flex-[0.5] bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}