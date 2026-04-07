import React, { useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function PlatformModules() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  const handleClick = (e) => {
    const gallery = document.getElementById('gallery-interaction')
    if (gallery) gallery.classList.toggle('active')
  }

  return (
    <section className="overflow-hidden md:pt-32 md:pb-32 bg-slate-50/50 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-[80px] mix-blend-multiply opacity-60"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-slate-500 shadow-sm cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          Platform Modules
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]">
          Everything you need.<br />In one unified console.
        </h2>
        <p className="mt-4 text-lg text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
          Hover to explore the components of the Orion platform.
        </p>
      </div>

      <div
        id="gallery-interaction"
        className="relative z-10 w-full max-w-[1000px] h-[500px] md:h-[600px] mx-auto flex items-center justify-center group cursor-pointer"
        style={{ perspective: '1200px' }}
        onClick={handleClick}
      >
        {/* CENTER CARD */}
        <div className="relative z-50 w-[300px] md:w-[360px] bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[32px] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:scale-105 group-hover:-translate-y-2">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">Core</span>
            <div className="w-8 h-8 rounded-full bg-slate-100/50 border border-white flex items-center justify-center text-slate-400">
              <iconify-icon icon="solar:monitor-linear" width="16" height="16"></iconify-icon>
            </div>
          </div>
          <h3 className="text-2xl font-medium text-slate-900 tracking-tight">Command Center</h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
            Your single pane of glass for real-time observability across all distributed systems.
          </p>
          <div className="overflow-hidden flex flex-col bg-white/50 w-full h-32 border-white/60 border rounded-2xl mt-8 p-3 relative shadow-inner gap-2">
            <div className="w-1/2 h-2 bg-slate-200/80 rounded-full"></div>
            <div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative">
              <div className="absolute top-3 left-3 right-3 h-2 bg-white rounded-full w-2/3 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* SATELLITE 1 */}
        <div className="card-scatter-1 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-40 pointer-events-none group-hover:pointer-events-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">Observe</span>
            <div className="w-7 h-7 rounded-full bg-blue-50/50 border border-blue-100/50 flex items-center justify-center text-blue-500">
              <iconify-icon icon="solar:folder-with-files-linear" width="14" height="14"></iconify-icon>
            </div>
          </div>
          <h4 className="text-lg font-medium text-slate-800 tracking-tight">Log Explorer</h4>
          <div className="mt-4 flex items-center gap-3 bg-white/40 p-2.5 rounded-xl border border-white/50">
            <div className="h-1.5 w-12 bg-slate-300/50 rounded-full"></div>
            <div className="w-8 h-5 bg-blue-500 rounded-full ml-auto relative shadow-sm">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* SATELLITE 2 */}
        <div className="card-scatter-2 md:w-[280px] transition-all duration-700 transition-spring z-30 pointer-events-none group-hover:pointer-events-auto bg-white/60 opacity-0 w-[260px] border-white/60 border rounded-[28px] p-6 absolute shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] backdrop-blur-xl" style={{ transitionDelay: '75ms' }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">Analyze</span>
            <div className="w-7 h-7 rounded-full bg-purple-50/50 border border-purple-100/50 flex items-center justify-center text-purple-500">
              <iconify-icon icon="solar:share-circle-linear" width="14" height="14"></iconify-icon>
            </div>
          </div>
          <h4 className="text-lg font-medium text-slate-800 tracking-tight">Trace Viewer</h4>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative"></div>
            <div className="flex-1 bg-slate-100/50 w-full border-slate-200/30 border rounded-xl relative"></div>
            <div className="aspect-square bg-white/50 rounded-lg border border-white/60"></div>
          </div>
        </div>

        {/* SATELLITE 3 */}
        <div className="card-scatter-3 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-20 pointer-events-none group-hover:pointer-events-auto" style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">Detect</span>
            <div className="w-7 h-7 rounded-full bg-emerald-50/50 border border-emerald-100/50 flex items-center justify-center text-emerald-500">
              <iconify-icon icon="solar:danger-triangle-linear" width="14" height="14"></iconify-icon>
            </div>
          </div>
          <h4 className="text-lg font-medium text-slate-800 tracking-tight">Smart Alerts</h4>
          <div className="mt-4 flex items-end gap-1.5 h-10 px-1">
            <div className="bg-slate-500/20 w-1/4 h-[40%] rounded-t-sm"></div>
            <div className="bg-slate-500/40 w-1/4 h-[70%] rounded-t-sm"></div>
            <div className="bg-slate-500/30 w-1/4 h-[50%] rounded-t-sm"></div>
            <div className="bg-slate-500/50 w-1/4 h-[90%] rounded-t-sm"></div>
          </div>
        </div>

        {/* SATELLITE 4 */}
        <div className="card-scatter-4 absolute w-[260px] md:w-[280px] bg-white/60 backdrop-blur-xl border border-white/60 rounded-[28px] p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 transition-spring z-10 pointer-events-none group-hover:pointer-events-auto" style={{ transitionDelay: '150ms' }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400">Act</span>
            <div className="w-7 h-7 rounded-full bg-amber-50/50 border border-amber-100/50 flex items-center justify-center text-amber-500">
              <iconify-icon icon="solar:play-circle-linear" width="14" height="14"></iconify-icon>
            </div>
          </div>
          <h4 className="text-lg font-medium text-slate-800 tracking-tight">Runbook Builder</h4>
          <div className="overflow-hidden flex flex-col bg-white/50 w-full h-12 border-white/60 border rounded-full mt-8 p-3 relative shadow-inner gap-2">
            <div className="animate-pulse bg-slate-400 w-7 h-7 rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}