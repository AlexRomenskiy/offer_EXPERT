import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

/* ============================================================
   ASSET PIPELINE (per user 2026-05-13):
   ============================================================
   Two device mockups share a single toggle state (Вручну/Автоматизація).
   Below <md (phone): iPhone mockup with PORTRAIT placeholder/video.
   From md upward (tablet+desktop): iPad mockup with LANDSCAPE placeholder/video.

   Assets to produce per state (4 stills → 2 videos per orientation):

   Portrait (iPhone):
     /videos/manual-portrait.mp4   (initial-portrait-manual → final-portrait-manual)
     /videos/auto-portrait.mp4     (initial-portrait-auto   → final-portrait-auto)

   Landscape (iPad):
     /videos/manual-landscape.mp4  (initial-landscape-manual → final-landscape-manual)
     /videos/auto-landscape.mp4    (initial-landscape-auto   → final-landscape-auto)

   When ready, replace each placeholder card (marked with TODO below) with:
     <video
       src="/videos/<orientation>-<mode>.mp4"
       autoPlay loop muted playsInline
       className="w-full h-full object-cover rounded-2xl"
     />
   Keep the outer wrapper (opacity/translate-y transition) so the toggle
   animation continues to work seamlessly.
   ============================================================ */

export default function TransformationSection() {
  const [mode, setMode] = useState('auto');

  return (
    <section
      id="transformation"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading + ultra-short subtitle — centered */}
        <div className="max-w-3xl mx-auto mb-10 lg:mb-12 text-center anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-4"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Від хаосу
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                до системи
              </span>
            </span>
          </h2>

          <p
            className="text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up mx-auto"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Один момент — два режими. Перемкни і подивись.
          </p>
        </div>

        <div className="anim-trigger">
          {/* ===================================================
              iPhone mockup — phone only (< md, < 768px)
              =================================================== */}
          <div className="md:hidden flex justify-center anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <IPhoneMockup mode={mode} setMode={setMode} />
          </div>

          {/* ===================================================
              iPad mockup — tablet + desktop (>= md, >= 768px)
              =================================================== */}
          <div className="hidden md:flex justify-center anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <IPadMockup mode={mode} setMode={setMode} />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ============================================================================
   iPhone mockup (portrait orientation)
   ============================================================================ */
function IPhoneMockup({ mode, setMode }) {
  return (
    <div
      className="relative w-[290px] sm:w-[320px]"
      style={{ aspectRatio: '0.49' }}
    >
      {/* Side buttons */}
      <div className="absolute -left-[5px] top-[18%] w-[5px] h-[6%] bg-slate-300 rounded-l-md z-0" />
      <div className="absolute -left-[5px] top-[26%] w-[5px] h-[10%] bg-slate-300 rounded-l-md z-0" />
      <div className="absolute -right-[5px] top-[24%] w-[5px] h-[12%] bg-slate-300 rounded-r-md z-0" />

      {/* Phone body */}
      <div className="absolute inset-0 bg-slate-200 rounded-[3rem] shadow-[0_30px_70px_rgba(15,23,42,0.14)] border-[3px] border-slate-100 z-0" />

      {/* Screen */}
      <div className="absolute inset-[7px] bg-[#f8fafc] rounded-[2.75rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-slate-950 rounded-full z-50 flex items-center justify-between px-2">
          <div className="w-2 h-2 bg-slate-800 rounded-full" />
          <div
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              mode === 'auto' ? 'bg-[#60a5fa]' : 'bg-slate-500'
            }`}
          />
        </div>

        {/* Status bar */}
        <div className="h-11 pt-3 px-5 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-40">
          <span className="ml-1 tracking-tight" style={{ fontFamily: fontStack }}>9:41</span>
          <div className="flex gap-1 items-center opacity-75 mr-1">
            <iconify-icon icon="solar:wifi-minimalistic-linear" width="12" height="12" />
            <iconify-icon icon="solar:battery-full-minimalistic-linear" width="14" height="14" />
          </div>
        </div>

        {/* Toggle pill */}
        <ToggleTwo mode={mode} setMode={setMode} className="mx-4 mt-1 mb-3" />

        {/* Content area — PLACEHOLDER (swap for portrait video later) */}
        <div className="flex-1 px-4 pt-2 relative">

          {/* TODO swap with: <video src="/videos/manual-portrait.mp4" ... /> */}
          <div
            className={`absolute inset-x-4 transition-all duration-500 ${
              mode === 'manual'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <PortraitManualPlaceholder />
          </div>

          {/* TODO swap with: <video src="/videos/auto-portrait.mp4" ... /> */}
          <div
            className={`absolute inset-x-4 transition-all duration-500 ${
              mode === 'auto'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <PortraitAutoPlaceholder />
          </div>

        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-slate-950/15 rounded-full z-40" />
      </div>
    </div>
  );
}

/* ============================================================================
   iPad mockup (landscape orientation)
   ============================================================================ */
function IPadMockup({ mode, setMode }) {
  return (
    <div
      className="relative w-[640px] lg:w-[820px] xl:w-[940px]"
      style={{ aspectRatio: '16/9' }}
    >
      {/* iPad body */}
      <div className="absolute inset-0 bg-slate-200 rounded-[2rem] shadow-[0_35px_90px_rgba(15,23,42,0.14)] border-[2px] border-slate-100 z-0" />

      {/* Screen */}
      <div className="absolute inset-[10px] bg-[#f8fafc] rounded-[1.7rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        {/* Front camera (landscape — long left edge centered) */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full z-50" />

        {/* Top toolbar with toggle */}
        <div className="pt-4 pb-3 px-6 flex items-center justify-center">
          <ToggleTwo mode={mode} setMode={setMode} />
        </div>

        {/* Content area — PLACEHOLDER (swap for landscape video later) */}
        <div className="flex-1 px-6 pb-8 relative">

          {/* TODO swap with: <video src="/videos/manual-landscape.mp4" ... /> */}
          <div
            className={`absolute inset-x-6 inset-y-0 pb-8 transition-all duration-500 ${
              mode === 'manual'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <LandscapeManualPlaceholder />
          </div>

          {/* TODO swap with: <video src="/videos/auto-landscape.mp4" ... /> */}
          <div
            className={`absolute inset-x-6 inset-y-0 pb-8 transition-all duration-500 ${
              mode === 'auto'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <LandscapeAutoPlaceholder />
          </div>

        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[3px] bg-slate-950/15 rounded-full z-40" />
      </div>
    </div>
  );
}

/* ============================================================================
   Shared toggle (used in both mockups)
   ============================================================================ */
function ToggleTwo({ mode, setMode, className = '' }) {
  return (
    <div className={`flex p-0.5 rounded-full bg-slate-100 border border-slate-200 ${className}`}>
      <button
        type="button"
        onClick={() => setMode('manual')}
        className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
          mode === 'manual'
            ? 'bg-white text-slate-800 shadow-sm'
            : 'text-slate-400 hover:text-slate-600'
        }`}
        style={{ fontFamily: fontStack }}
      >
        Вручну
      </button>
      <button
        type="button"
        onClick={() => setMode('auto')}
        className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
          mode === 'auto'
            ? 'bg-[#175ae8] text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-600'
        }`}
        style={{ fontFamily: fontStack }}
      >
        Автоматизація
      </button>
    </div>
  );
}

/* ============================================================================
   PORTRAIT placeholders (iPhone)
   ============================================================================ */
function PortraitManualPlaceholder() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
            <iconify-icon icon="solar:chat-round-line-linear" width="14" height="14" style={{ color: '#64748b' }} />
          </div>
          <span className="text-[11px] text-slate-700 font-medium" style={{ fontFamily: fontStack }}>Direct</span>
        </div>
        <span className="text-[9px] text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
          12 нових
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {[
          { name: '@alex_new', text: 'А скільки коштує?', time: '15 хв' },
          { name: '@maria_z', text: 'Доброго дня, цікавить курс', time: '38 хв' },
          { name: '@ihor_e', text: 'Можна записатися?', time: '1 год' },
        ].map((msg, i) => (
          <div key={i} className="bg-slate-50 rounded-lg p-2 border border-slate-100">
            <p className="text-[10px] text-slate-600 leading-tight" style={{ fontFamily: fontStack }}>
              {msg.name}: {msg.text}
            </p>
            <span className="text-[9px] text-slate-400 mt-0.5 inline-block" style={{ fontFamily: fontStack }}>{msg.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-rose-500">
        <iconify-icon icon="solar:clock-circle-linear" width="12" height="12" />
        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Чекають на відповідь</span>
      </div>
    </div>
  );
}

function PortraitAutoPlaceholder() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center">
            <iconify-icon icon="solar:wallet-linear" width="14" height="14" style={{ color: '#175ae8' }} />
          </div>
          <span className="text-[11px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>Нова оплата</span>
        </div>
        <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
          Успіх
        </span>
      </div>

      <div className="mb-3 pb-3 border-b border-slate-100">
        <div className="text-[1.7rem] text-slate-950 font-semibold tracking-tight leading-none mb-1" style={{ fontFamily: fontStack }}>
          $497
        </div>
        <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>
          Курс «Експерт-Системи»
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <iconify-icon icon="solar:user-rounded-linear" width="12" height="12" style={{ color: '#94a3b8' }} />
        <span className="text-[10px] text-slate-600" style={{ fontFamily: fontStack }}>Олена К. · через бот</span>
      </div>

      <div className="flex items-center gap-1.5 text-[#175ae8] pt-2.5 border-t border-slate-100">
        <iconify-icon icon="solar:check-circle-linear" width="12" height="12" />
        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Доступ видано автоматично</span>
      </div>
    </div>
  );
}

/* ============================================================================
   LANDSCAPE placeholders (iPad) — 2-column layout
   ============================================================================ */
function LandscapeManualPlaceholder() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl h-full p-4 shadow-sm flex gap-4">
      {/* Left column — DM inbox */}
      <div className="w-[44%] flex flex-col">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <iconify-icon icon="solar:chat-round-line-linear" width="16" height="16" style={{ color: '#64748b' }} />
            </div>
            <span className="text-[12px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>Direct</span>
          </div>
          <span className="text-[10px] text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
            12 нових
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {[
            { name: '@alex_new', text: 'А скільки коштує?', time: '15 хв' },
            { name: '@maria_z', text: 'Цікавить курс', time: '38 хв' },
            { name: '@ihor_e', text: 'Можна записатися?', time: '1 год' },
            { name: '@olha_v', text: 'Чи можна частинами?', time: '2 год' },
          ].map((msg, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-2 border border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>{msg.name}</span>
                <span className="text-[9px] text-slate-400" style={{ fontFamily: fontStack }}>{msg.time}</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight mt-0.5" style={{ fontFamily: fontStack }}>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — active chat */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center">
            <span className="text-[11px] font-medium text-rose-600" style={{ fontFamily: fontStack }}>A</span>
          </div>
          <span className="text-[12px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>@alex_new</span>
          <span className="text-[10px] text-rose-500 ml-auto" style={{ fontFamily: fontStack }}>щойно</span>
        </div>

        <div className="flex flex-col gap-2 flex-1 justify-end pb-2">
          <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-3 py-2 self-start max-w-[80%]">
            <p className="text-[11px] text-slate-700" style={{ fontFamily: fontStack }}>А скільки коштує?</p>
          </div>
          <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-3 py-2 self-start w-fit">
            <div className="flex gap-1 items-center">
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>

        <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-rose-500">
          <iconify-icon icon="solar:clock-circle-linear" width="12" height="12" />
          <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Чекає на відповідь — 15 хв</span>
        </div>
      </div>
    </div>
  );
}

function LandscapeAutoPlaceholder() {
  const txs = [
    { name: 'Олена К.', sum: '$497', product: 'Курс «Експерт-Системи»', time: '14:23' },
    { name: 'Павло С.', sum: '$297', product: 'Місячна підписка', time: '13:45' },
    { name: 'Анна Б.', sum: '$147', product: 'Доступ до архіву', time: '12:18' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl h-full p-4 shadow-sm flex gap-4">
      {/* Left column — Today metrics */}
      <div className="w-[44%] flex flex-col">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center">
              <iconify-icon icon="solar:chart-square-linear" width="16" height="16" style={{ color: '#175ae8' }} />
            </div>
            <span className="text-[12px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>Сьогодні</span>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
            Active
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-[#175ae8]/[0.05] rounded-lg p-2.5 border border-[#175ae8]/15">
            <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Ліди</div>
            <div className="text-[1.3rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>12</div>
          </div>
          <div className="bg-[#175ae8]/[0.05] rounded-lg p-2.5 border border-[#175ae8]/15">
            <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Продажі</div>
            <div className="text-[1.3rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>3</div>
          </div>
        </div>

        <div className="bg-[#175ae8]/[0.08] rounded-lg p-2.5 border border-[#175ae8]/20 flex-1 flex flex-col justify-center">
          <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Дохід сьогодні</div>
          <div className="text-[1.6rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>$891</div>
        </div>
      </div>

      {/* Right column — transaction feed */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <iconify-icon icon="solar:bolt-linear" width="14" height="14" style={{ color: '#10b981' }} />
          </div>
          <span className="text-[12px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>Live · Auto-flow</span>
          <span className="text-[10px] text-emerald-600 ml-auto flex items-center gap-1" style={{ fontFamily: fontStack }}>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Online
          </span>
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          {txs.map((tx, i) => (
            <div key={i} className="bg-emerald-50/40 rounded-lg p-2 border border-emerald-100/70 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <iconify-icon icon="solar:check-circle-linear" width="12" height="12" style={{ color: '#10b981' }} />
              </div>
              <div className="flex-1 flex justify-between items-center min-w-0">
                <div className="min-w-0 mr-2">
                  <div className="text-[11px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>{tx.name}</div>
                  <div className="text-[9px] text-slate-500 truncate" style={{ fontFamily: fontStack }}>{tx.product}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[12px] text-slate-950 font-semibold tabular-nums" style={{ fontFamily: fontStack }}>{tx.sum}</div>
                  <div className="text-[9px] text-slate-400" style={{ fontFamily: fontStack }}>{tx.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[#175ae8]">
          <iconify-icon icon="solar:check-circle-linear" width="12" height="12" />
          <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Доступ видано автоматично</span>
        </div>
      </div>
    </div>
  );
}
