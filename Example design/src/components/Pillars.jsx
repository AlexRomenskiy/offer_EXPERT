import React, { useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Pillars() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative" ref={sectionRef}>
      <div className="text-center mb-20 md:mb-24 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
          Built for modern reliability teams
        </h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
          Everything engineers need to maintain high availability, without the configuration headaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[600px]">
        {/* Column 1: Observability */}
        <div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
              <iconify-icon icon="solar:eye-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Observability</h3>
            <p className="text-slate-500 leading-relaxed">
              Metrics, logs, and traces centralized. Powerful query capabilities instantly slice through petabytes of telemetry data.
            </p>
          </div>
          <div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden p-5 flex flex-col gap-3 shadow-inner group-hover:bg-white/70 transition-colors">
            <div className="w-full h-1/4 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
            <div className="flex-1 flex gap-3">
              <div className="w-1/3 bg-slate-200/50 rounded-lg border border-slate-300/20"></div>
              <div className="flex-1 bg-slate-100/50 rounded-lg border border-slate-300/20 flex flex-col gap-2 p-2">
                <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                <div className="w-full h-2 bg-slate-200/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: AIOps */}
        <div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
              <iconify-icon icon="solar:magnifer-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">AIOps</h3>
            <p className="text-slate-500 leading-relaxed">
              Dramatically reduce alert fatigue. Machine learning models group related incidents and surface predictive warnings.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden flex group-hover:bg-white/70 transition-colors bg-white/50 w-full border-white/60 border rounded-2xl mt-12 relative shadow-inner items-center justify-center">
            <div className="w-full px-8">
              <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-slate-900/80 rounded-full"></div>
              </div>
              <div className="mt-6 flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.18)] flex items-center justify-center scale-110 ring-4 ring-white/60">
                  <iconify-icon icon="solar:check-read-linear" width="16" height="16" class="text-white"></iconify-icon>
                </div>
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Automation */}
        <div className="glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 reveal-on-scroll shadow-[0_18px_55px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_85px_rgba(15,23,42,0.09)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/70 border border-slate-200/70 backdrop-blur-md flex items-center justify-center mb-8 text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.06)] group-hover:bg-white/80 group-hover:text-slate-900 transition-colors">
              <iconify-icon icon="solar:magic-stick-linear" width="24" height="24"></iconify-icon>
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Automation</h3>
            <p className="text-slate-500 leading-relaxed">
              Turn tribal knowledge into code. Build low-code workflows that auto-remediate common infrastructure failures.
            </p>
          </div>
          <div className="mt-12 relative w-full aspect-[4/3] bg-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-inner group-hover:bg-white/70 transition-colors flex items-center justify-center">
            <div className="relative w-28 h-20 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] transform -rotate-12 translate-y-2 translate-x-2 z-10 transition-transform duration-700 group-hover:-rotate-[15deg] group-hover:translate-x-0"></div>
            <div className="relative w-28 h-20 bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] transform rotate-6 -translate-x-4 -translate-y-2 z-20 transition-transform duration-700 group-hover:rotate-[10deg] group-hover:-translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}