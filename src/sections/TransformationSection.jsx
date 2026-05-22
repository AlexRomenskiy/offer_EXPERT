import { useState, useEffect, useRef } from 'react';

const fontStack = "'Manrope', sans-serif";

/* ============================================================
   ASSET PIPELINE — static hyperreal frames wired now,
   will be swapped for looping videos in a later step.
   ============================================================
   Two device mockups share a single toggle state (Вручну/Автоматизація).
   Below <md (phone): iPhone mockup with PORTRAIT frame.
   From md upward (tablet+desktop): iPad mockup with LANDSCAPE frame.

   Current wiring uses UA-locale paths. EN paths exist on disk
   (`-EN.png` variants) — will be threaded once i18n is implemented.
   When videos are produced, swap each <img> for:
     <video src="..." autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover" />
   Opacity-transition wrapper stays unchanged.
   ============================================================ */

const ASSETS = {
  portrait: {
    manual: '/Images/3. manual-portrait-UA.png',
    auto: '/Images/3. auto-portrait-UA.png',
  },
  landscape: {
    manual: '/Images/3. manual-landscape-UA.png',
    auto: '/Images/3. auto-landscape-UA.png',
  },
};

export default function TransformationSection() {
  const [mode, setMode] = useState('manual');
  const interactedAtRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pause auto-cycle for 10s after user manually clicks
      if (Date.now() - interactedAtRef.current < 10000) return;
      setMode((prev) => (prev === 'manual' ? 'auto' : 'manual'));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSetMode = (newMode) => {
    interactedAtRef.current = Date.now();
    setMode(newMode);
  };

  return (
    <section
      id="transformation"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden"
    >
      {/* Atmospheric background — single unified field (Variant 5 — Soft Atmosphere) */}
      <TransformationBackground />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading + ultra-short subtitle — centered always */}
        <div className="relative max-w-3xl mx-auto mb-10 lg:mb-12 text-center anim-trigger">
          {/* Decorative dot-mesh background — Pricing-style base center */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          {/* Mono eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Демо · Live system
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              Від хаосу до
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                системи
              </span>
            </span>
          </h2>

          <p
            className="text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up mx-auto max-w-[42ch] subtitle-hairline-mobile-only"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Одна ситуація — два режими. Перемкни і подивись.
          </p>
        </div>

        <div className="anim-trigger">
          {/* ===================================================
              iPhone mockup — phone only (< md, < 768px)
              pt reserves space for the tab strip above the bezel
              =================================================== */}
          <div className="md:hidden flex justify-center anim-fade-up pt-8" style={{ transitionDelay: '0.10s' }}>
            <IPhoneMockup mode={mode} setMode={handleSetMode} />
          </div>

          {/* ===================================================
              iPad mockup — tablet + desktop (>= md, >= 768px)
              pt reserves space for the tab strip above the bezel
              =================================================== */}
          <div className="hidden md:flex justify-center anim-fade-up pt-10 lg:pt-12" style={{ transitionDelay: '0.10s' }}>
            <IPadMockup mode={mode} setMode={handleSetMode} />
          </div>
        </div>

        {/* CTA — center, brand-gradient, scrolls to request-access */}
        <div className="flex justify-center mt-10 lg:mt-14 anim-trigger">
          <a
            href="#request-access"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="anim-fade-up inline-flex items-center gap-2.5 rounded-full text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 hover:translate-y-[-1px]"
            style={{
              transitionDelay: '0.20s',
              fontFamily: fontStack,
              background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
              boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
            }}
          >
            Хочу таку систему
            <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
          </a>
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
      <div className="absolute inset-0 bg-slate-200 rounded-[3rem] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border-[3px] border-slate-100 z-0" />

      {/* Screen */}
      <div className="absolute inset-[7px] bg-[#f8fafc] rounded-[2.75rem] overflow-hidden z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        {/* Content area — fills entire screen as background (no crop) */}
        <div className="absolute inset-0">
          <img
            src={ASSETS.portrait.manual}
            alt="Демонстрація ручного режиму"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              mode === 'manual' ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src={ASSETS.portrait.auto}
            alt="Демонстрація автоматизованого режиму"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              mode === 'auto' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

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
        <div className="absolute top-0 inset-x-0 h-11 pt-3 px-5 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-40">
          <span className="ml-1 tracking-tight" style={{ fontFamily: fontStack }}>9:41</span>
          <div className="flex gap-1 items-center opacity-75 mr-1">
            <iconify-icon icon="solar:wifi-minimalistic-linear" width="12" height="12" />
            <iconify-icon icon="solar:battery-full-minimalistic-linear" width="14" height="14" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-slate-950/15 rounded-full z-40" />
      </div>

      {/* Tab strip — sits above the iPhone bezel, attached to top edge like browser tabs */}
      <DeviceTabs mode={mode} setMode={setMode} compact className="absolute bottom-full left-1/2 -translate-x-1/2 z-30" />
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
      <div className="absolute inset-0 bg-slate-200 rounded-[2rem] shadow-[0_20px_55px_rgba(15,23,42,0.08)] border-[2px] border-slate-100 z-0" />

      {/* Screen */}
      <div className="absolute inset-[10px] bg-[#f8fafc] rounded-[1.7rem] overflow-hidden z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        {/* Content area — fills entire screen as background (no crop) */}
        <div className="absolute inset-0">
          <img
            src={ASSETS.landscape.manual}
            alt="Демонстрація ручного режиму"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              mode === 'manual' ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src={ASSETS.landscape.auto}
            alt="Демонстрація автоматизованого режиму"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              mode === 'auto' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Front camera (landscape — long left edge centered) */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full z-50" />

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[3px] bg-slate-950/15 rounded-full z-40" />
      </div>

      {/* Tab strip — sits above the iPad bezel, attached to top edge like browser tabs */}
      <DeviceTabs mode={mode} setMode={setMode} className="absolute bottom-full left-1/2 -translate-x-1/2 z-30" />
    </div>
  );
}

/* ============================================================================
   Device tab strip — two rounded-top «browser tabs» that sit on the top edge
   of the device bezel. Active tab uses white bg + brand-gradient top accent +
   soft shadow — reads as a premium control attached to the device, without
   covering any screen content.
   ============================================================================ */
function DeviceTabs({ mode, setMode, compact = false, className = '' }) {
  return (
    <div className={`flex items-end gap-0.5 ${className}`} style={{ pointerEvents: 'auto' }}>
      <ChromeTab active={mode === 'manual'} onClick={() => setMode('manual')} compact={compact}>
        Вручну
      </ChromeTab>
      <ChromeTab active={mode === 'auto'} onClick={() => setMode('auto')} compact={compact}>
        Автоматизація
      </ChromeTab>
    </div>
  );
}

function ChromeTab({ active, onClick, compact, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer touch-manipulation rounded-t-[10px] font-medium transition-all duration-300 ${
        compact ? 'px-3.5 py-1.5 text-[11px]' : 'px-5 py-2 text-[12px]'
      } ${
        active
          ? 'bg-white text-slate-900 shadow-[0_-4px_14px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)]'
          : 'bg-slate-100/85 text-slate-500 hover:text-slate-700 hover:bg-slate-100'
      }`}
      style={{ fontFamily: fontStack }}
    >
      {/* Brand-gradient accent line — top edge of active tab */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[10px]"
          style={{ background: 'linear-gradient(90deg, #020f2d 0%, #175ae8 100%)' }}
        />
      )}
      {children}
    </button>
  );
}

/* ============================================================================
   Atmospheric background — VARIANT 5 (Soft Atmosphere / unified field)
   ============================================================================
   Single cohesive light field — no discrete spots, no clusters, no chaos.
   Same atmosphere for both manual/auto. Toggle only changes device content.

   Composition (back to front):
     1. Subtle whole-section blue tint base (cool reading surface)
     2. Strong central anchor glow behind device (1100×700)
     3. Four large soft "clouds" — radial gradients slowly drifting
        with translate + scale, blending into one unified breathing field
     4. ~14 tiny evenly-distributed particles (no clusters, no bright accents)
        — barely visible texture, slow twinkle for life
   Mask: 14% / 86% vertical fade.
   ============================================================================ */
function TransformationBackground() {
  return (
    <>
      <style>{`
        @keyframes tx-glow-inner {
          0%, 100% { opacity: 0.60; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1.00; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes tx-glow-mid {
          0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 0.95; transform: translate(-50%, -50%) scale(1.07); }
        }
        @keyframes tx-glow-outer {
          0%, 100% { opacity: 0.50; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 0.90; transform: translate(-50%, -50%) scale(1.09); }
        }
        @keyframes tx-cloud-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.55; }
          50%      { transform: translate(40px, -22px) scale(1.06); opacity: 0.85; }
        }
        @keyframes tx-cloud-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.50; }
          50%      { transform: translate(-32px, 28px) scale(0.96); opacity: 0.80; }
        }
        @keyframes tx-cloud-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.52; }
          50%      { transform: translate(22px, 26px) scale(1.05); opacity: 0.82; }
        }
        @keyframes tx-cloud-drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.48; }
          50%      { transform: translate(-26px, -18px) scale(0.97); opacity: 0.78; }
        }
        @keyframes tx-particle-twinkle {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.55; }
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
        }}
      >
        {/* 1. Whole-section subtle blue tint — cool reading surface */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 65% at 50% 50%, rgba(96,165,250,0.08) 0%, transparent 80%)',
          }}
        />

        {/* 2a. OUTER breathing halo — widest, slowest rhythm */}
        <div
          className="absolute top-[60%] left-1/2 w-[1500px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.10) 0%, rgba(23,90,232,0.05) 40%, transparent 75%)',
            animation: 'tx-glow-outer 9s ease-in-out 2s infinite',
          }}
        />

        {/* 2b. MID breathing glow */}
        <div
          className="absolute top-[60%] left-1/2 w-[1150px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.16) 0%, rgba(23,90,232,0.10) 35%, transparent 70%)',
            animation: 'tx-glow-mid 7s ease-in-out 1s infinite',
          }}
        />

        {/* 2c. INNER intense breathing glow — strongest, directly behind device */}
        <div
          className="absolute top-[60%] left-1/2 w-[820px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.22) 0%, rgba(23,90,232,0.13) 38%, transparent 65%)',
            animation: 'tx-glow-inner 5s ease-in-out infinite',
          }}
        />

        {/* 3. Soft drifting side-clouds — dimmer, supportive ambient */}
        <div
          className="absolute top-[12%] left-[2%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,0.10) 0%, rgba(96,165,250,0.04) 35%, transparent 65%)',
            animation: 'tx-cloud-drift-1 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[8%] right-[2%] w-[560px] h-[560px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,0.09) 0%, rgba(96,165,250,0.04) 35%, transparent 65%)',
            animation: 'tx-cloud-drift-2 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[10%] left-[4%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,0.09) 0%, rgba(96,165,250,0.04) 35%, transparent 65%)',
            animation: 'tx-cloud-drift-3 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[6%] right-[3%] w-[540px] h-[540px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.03) 35%, transparent 65%)',
            animation: 'tx-cloud-drift-4 17s ease-in-out infinite',
          }}
        />

        {/* 4. Minimal evenly-distributed particles — subtle texture only */}
        {V5_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
              background: 'rgba(23,90,232,0.42)',
              animation: `tx-particle-twinkle ${5 + (i % 3) * 0.7}s ease-in-out ${
                (i * 0.4) % 4
              }s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}

const V5_PARTICLES = [
  // Evenly distributed across the field — no clusters, no hot spots
  { x: 8,  y: 24, s: 2 },
  { x: 22, y: 28, s: 1 },
  { x: 38, y: 22, s: 2 },
  { x: 54, y: 26, s: 1 },
  { x: 70, y: 24, s: 2 },
  { x: 88, y: 28, s: 1 },
  { x: 14, y: 50, s: 1 },
  { x: 88, y: 50, s: 1 },
  { x: 8,  y: 72, s: 2 },
  { x: 24, y: 76, s: 1 },
  { x: 40, y: 78, s: 2 },
  { x: 56, y: 74, s: 1 },
  { x: 72, y: 76, s: 2 },
  { x: 88, y: 72, s: 1 },
];

