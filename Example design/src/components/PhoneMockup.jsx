import React from 'react'

export default function PhoneMockup() {
  return (
    <div className="card-floater relative w-[340px] h-[720px] mx-auto transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]">
      {/* Side Buttons */}
      <div className="absolute -left-[9px] top-[122px] w-[9px] h-[28px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]"></div>
      <div className="absolute -left-[9px] top-[176px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]"></div>
      <div className="absolute -left-[9px] top-[244px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0 transition-transform hover:-translate-x-[1px]"></div>
      <div className="absolute -right-[9px] top-[190px] w-[9px] h-[78px] bg-[#e2e8f0] rounded-r-lg shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.9),inset_2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-l-0 z-0 transition-transform hover:translate-x-[1px]"></div>

      {/* Outer Clay Body */}
      <div className="absolute inset-0 bg-[#e2e8f0] rounded-[3.9rem] shadow-[25px_35px_65px_rgba(15,23,42,0.15),inset_-6px_-6px_16px_rgba(15,23,42,0.08),inset_6px_6px_16px_rgba(255,255,255,0.95)] border-[5px] border-[#f1f5f9] z-0"></div>

      {/* Inner Screen */}
      <div className="absolute inset-x-[10px] top-[10px] bottom-[10px] bg-[#f8f9fb] rounded-[3.25rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_20px_rgba(15,23,42,0.06)] border border-slate-200/70">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[116px] h-[30px] bg-[#0f172a] rounded-full z-50 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.12)] flex items-center justify-between px-2.5 hover:w-[126px] transition-all duration-500 cursor-pointer">
          <div className="w-3 h-3 bg-[#1e293b] rounded-full flex items-center justify-center border border-white/5">
            <div className="w-1 h-1 bg-blue-500/50 rounded-full blur-[1px]"></div>
          </div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse"></div>
        </div>

        {/* Status Bar */}
        <div className="h-14 w-full pt-3 px-6 flex justify-between items-center text-[11px] font-semibold text-slate-800 z-40 bg-gradient-to-b from-[#f8f9fb] to-transparent">
          <span className="ml-1 tracking-tight">9:41</span>
          <div className="flex gap-1.5 items-center opacity-80 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V4"></path><path d="M22 20V4"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="10" x="2" y="7" rx="2" ry="2" fill="currentColor"></rect>
              <line x1="22" x2="22" y1="11" y2="13"></line>
            </svg>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 px-4 pt-2 pb-10 flex flex-col gap-3 overflow-hidden relative z-10 bg-gradient-to-br from-[#f8f9fb] to-[#e2e8f0]/30">
          <div className="flex flex-col mb-1 ml-1 transform-gpu transition-all duration-700 hover:translate-x-1">
            <h2 className="text-[22px] font-semibold text-slate-800 tracking-tight leading-none">Intelligence</h2>
            <p className="text-xs text-slate-500 font-medium mt-1">All systems operational</p>
          </div>

          {/* Uptime Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 flex items-center justify-between relative border border-slate-100/80 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Global Uptime</span>
              <span className="text-3xl font-semibold text-slate-800 tracking-tight mt-1">
                99.9<span className="text-base text-slate-400 font-medium ml-px">%</span>
              </span>
            </div>
            <div className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90 transform-gpu transition-transform duration-1000 group-hover:rotate-[360deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="8"></circle>
                <circle cx="50" cy="50" r="42" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="264" strokeDashoffset="26.4" strokeLinecap="round"></circle>
              </svg>
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100/50 text-blue-500 transform-gpu transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 flex flex-col relative overflow-hidden border border-slate-100/80 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-[168px]">
            <div className="flex justify-between items-center mb-2 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.4)] animate-pulse"></div>
                <span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Response</span>
              </div>
              <div className="text-sm font-semibold text-slate-800">
                182<span className="text-slate-400 font-normal text-[10px] ml-0.5">ms</span>
              </div>
            </div>
            <div className="flex-1 flex items-end gap-[3px] z-10 w-full pt-2">
              {[
                { h: '30%', bg: 'bg-blue-500/10', hoverH: '40%', hoverBg: 'group-hover:bg-blue-500/20' },
                { h: '45%', bg: 'bg-blue-500/20', hoverH: '55%', hoverBg: 'group-hover:bg-blue-500/30' },
                { h: '35%', bg: 'bg-blue-500/30', hoverH: '25%', hoverBg: 'group-hover:bg-blue-500/40' },
                { h: '55%', bg: 'bg-blue-500/15', hoverH: '65%', hoverBg: 'group-hover:bg-blue-500/25' },
                { h: '75%', bg: 'bg-blue-500/40', hoverH: '85%', hoverBg: 'group-hover:bg-blue-500/50' },
                { h: '100%', bg: 'bg-emerald-500/60', hoverH: '90%', hoverBg: 'group-hover:bg-emerald-500/80', active: true },
                { h: '65%', bg: 'bg-blue-500/25', hoverH: '55%', hoverBg: 'group-hover:bg-blue-500/35' },
                { h: '45%', bg: 'bg-blue-500/10', hoverH: '60%', hoverBg: 'group-hover:bg-blue-500/20' },
                { h: '25%', bg: 'bg-blue-500/5', hoverH: '20%', hoverBg: 'group-hover:bg-blue-500/15' },
                { h: '40%', bg: 'bg-blue-500/10', hoverH: '30%', hoverBg: 'group-hover:bg-blue-500/20' },
                { h: '50%', bg: 'bg-blue-500/20', hoverH: '45%', hoverBg: 'group-hover:bg-blue-500/30' },
                { h: '35%', bg: 'bg-blue-500/15', hoverH: '25%', hoverBg: 'group-hover:bg-blue-500/25' },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 ${bar.bg} rounded-t-[2px] transition-all duration-700 ${bar.hoverBg} relative`}
                  style={{ height: bar.h }}
                >
                  {bar.active && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500 border border-white shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(241,245,249,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(241,245,249,0.6)_1px,transparent_1px)] bg-[size:14px_14px] z-0 opacity-60"></div>
          </div>

          {/* Auto Remediation */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)] p-4 border border-slate-100/80 flex flex-col justify-between relative overflow-hidden min-h-[120px] flex-1 group transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50/80 flex items-center justify-center border border-purple-100/50 transform-gpu transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-800 tracking-tight">Auto-Remediation</h4>
                  <p className="text-[10px] text-purple-500 font-medium mt-0.5">Active • 3 actions</p>
                </div>
              </div>
              <div className="w-8 h-4 bg-purple-500 rounded-full relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
                <div className="absolute right-[2px] top-[2px] w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
            <svg className="absolute bottom-0 left-0 w-full h-12 opacity-[0.05] text-purple-600 transition-all duration-700 transform-gpu group-hover:-translate-y-1 group-hover:opacity-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,20 L0,10 C20,15 40,5 60,10 C80,15 90,5 100,5 L100,20 Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[124px] h-[4px] bg-slate-900/10 rounded-full z-40 transition-all duration-300 hover:bg-slate-900/20 hover:scale-x-105 cursor-pointer"></div>
      </div>
    </div>
  )
}