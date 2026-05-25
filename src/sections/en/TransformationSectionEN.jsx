import { useState, useEffect, useRef } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';

const fontStack = "'Manrope', sans-serif";

export default function TransformationSectionEN() {
  const [mode, setMode] = useState('manual');
  const interactedAtRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
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
      <TransformationBackground />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="relative max-w-3xl mx-auto mb-10 lg:mb-12 text-center anim-trigger">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Demo · Live system
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              From chaos to
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                system
              </span>
            </span>
          </h2>

          <p
            className="text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up mx-auto max-w-[42ch] subtitle-hairline-mobile-only"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            One moment — two modes. Toggle and see the difference.
          </p>
        </div>

        <div className="anim-trigger">
          <div className="md:hidden flex justify-center anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <IPhoneMockup mode={mode} setMode={handleSetMode} />
          </div>

          <div className="hidden md:flex justify-center anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <IPadMockup mode={mode} setMode={handleSetMode} />
          </div>
        </div>

        <div className="flex justify-center mt-10 lg:mt-14 anim-trigger">
          <a
            href={BOOKING_URL_EN}
            target="_blank"
            rel="noopener noreferrer"
            className="anim-fade-up inline-flex items-center gap-2.5 rounded-full text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 hover:translate-y-[-1px]"
            style={{
              transitionDelay: '0.20s',
              fontFamily: fontStack,
              background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
              boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
            }}
          >
            Build this for me
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
      <div className="absolute -left-[5px] top-[18%] w-[5px] h-[6%] bg-slate-300 rounded-l-md z-0" />
      <div className="absolute -left-[5px] top-[26%] w-[5px] h-[10%] bg-slate-300 rounded-l-md z-0" />
      <div className="absolute -right-[5px] top-[24%] w-[5px] h-[12%] bg-slate-300 rounded-r-md z-0" />

      <div className="absolute inset-0 bg-slate-200 rounded-[3rem] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border-[3px] border-slate-100 z-0" />

      <div className="absolute inset-[7px] bg-[#f8fafc] rounded-[2.75rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-slate-950 rounded-full z-50 flex items-center justify-between px-2">
          <div className="w-2 h-2 bg-slate-800 rounded-full" />
          <div
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              mode === 'auto' ? 'bg-[#60a5fa]' : 'bg-slate-500'
            }`}
          />
        </div>

        <div className="h-11 pt-3 px-5 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-40">
          <span className="ml-1 tracking-tight" style={{ fontFamily: fontStack }}>9:41</span>
          <div className="flex gap-1 items-center opacity-75 mr-1">
            <iconify-icon icon="solar:wifi-minimalistic-linear" width="12" height="12" />
            <iconify-icon icon="solar:battery-full-minimalistic-linear" width="14" height="14" />
          </div>
        </div>

        <div className="flex justify-center mt-1 mb-3">
          <ToggleTwo mode={mode} setMode={setMode} />
        </div>

        <div className="flex-1 px-4 pt-2 relative">

          <div
            className={`absolute inset-x-4 transition-all duration-500 ${
              mode === 'manual'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <PortraitManualPlaceholder />
          </div>

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
      <div className="absolute inset-0 bg-slate-200 rounded-[2rem] shadow-[0_20px_55px_rgba(15,23,42,0.08)] border-[2px] border-slate-100 z-0" />

      <div className="absolute inset-[10px] bg-[#f8fafc] rounded-[1.7rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full z-50" />

        <div className="pt-4 pb-3 px-6 flex items-center justify-center">
          <ToggleTwo mode={mode} setMode={setMode} />
        </div>

        <div className="flex-1 px-6 pb-8 relative">

          <div
            className={`absolute inset-x-6 inset-y-0 pb-8 transition-all duration-500 ${
              mode === 'manual'
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <LandscapeManualPlaceholder />
          </div>

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
    <div
      className={`relative z-30 isolate inline-flex p-0.5 rounded-full bg-slate-100 border border-slate-200 ${className}`}
      style={{ pointerEvents: 'auto' }}
    >
      <button
        type="button"
        onClick={() => setMode('manual')}
        className={`cursor-pointer touch-manipulation px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 ${
          mode === 'manual'
            ? 'bg-gradient-to-r from-[#020f2d] to-[#175ae8] text-white shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
        style={{ fontFamily: fontStack }}
      >
        Manual
      </button>
      <button
        type="button"
        onClick={() => setMode('auto')}
        className={`cursor-pointer touch-manipulation px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-300 ${
          mode === 'auto'
            ? 'bg-gradient-to-r from-[#020f2d] to-[#175ae8] text-white shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
        style={{ fontFamily: fontStack }}
      >
        Automated
      </button>
    </div>
  );
}

/* ============================================================================
   Atmospheric background — VARIANT 5 (Soft Atmosphere)
   Identical to UA version, no copy inside.
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
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 65% at 50% 50%, rgba(96,165,250,0.08) 0%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-[60%] left-1/2 w-[1500px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.10) 0%, rgba(23,90,232,0.05) 40%, transparent 75%)',
            animation: 'tx-glow-outer 9s ease-in-out 2s infinite',
          }}
        />
        <div
          className="absolute top-[60%] left-1/2 w-[1150px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.16) 0%, rgba(23,90,232,0.10) 35%, transparent 70%)',
            animation: 'tx-glow-mid 7s ease-in-out 1s infinite',
          }}
        />
        <div
          className="absolute top-[60%] left-1/2 w-[820px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(96,165,250,0.22) 0%, rgba(23,90,232,0.13) 38%, transparent 65%)',
            animation: 'tx-glow-inner 5s ease-in-out infinite',
          }}
        />
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

/* ============================================================================
   PORTRAIT placeholders (iPhone) — EN content
   ============================================================================ */
function PortraitManualPlaceholder() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
            <iconify-icon icon="solar:chat-round-line-linear" width="14" height="14" style={{ color: '#64748b' }} />
          </div>
          <span className="text-[11px] text-slate-700 font-medium" style={{ fontFamily: fontStack }}>Inbox</span>
        </div>
        <span className="text-[9px] text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
          12 new
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        {[
          { name: '@alex_n', text: 'How much is it?', time: '15 m' },
          { name: '@sarah_m', text: 'Hi, interested in the course', time: '38 m' },
          { name: '@evan_b', text: 'Can I sign up?', time: '1 h' },
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
        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Waiting on reply</span>
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
          <span className="text-[11px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>New payment</span>
        </div>
        <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
          Success
        </span>
      </div>

      <div className="mb-3 pb-3 border-b border-slate-100">
        <div className="text-[1.7rem] text-slate-950 font-semibold tracking-tight leading-none mb-1" style={{ fontFamily: fontStack }}>
          $497
        </div>
        <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>
          Expert-Systems Course
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <iconify-icon icon="solar:user-rounded-linear" width="12" height="12" style={{ color: '#94a3b8' }} />
        <span className="text-[10px] text-slate-600" style={{ fontFamily: fontStack }}>Sarah M. · via bot</span>
      </div>

      <div className="flex items-center gap-1.5 text-[#175ae8] pt-2.5 border-t border-slate-100">
        <iconify-icon icon="solar:check-circle-linear" width="12" height="12" />
        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Access granted automatically</span>
      </div>
    </div>
  );
}

/* ============================================================================
   LANDSCAPE placeholders (iPad) — EN content
   ============================================================================ */
function LandscapeManualPlaceholder() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl h-full p-4 shadow-sm flex gap-4">
      <div className="w-[44%] flex flex-col">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <iconify-icon icon="solar:chat-round-line-linear" width="16" height="16" style={{ color: '#64748b' }} />
            </div>
            <span className="text-[12px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>Inbox</span>
          </div>
          <span className="text-[10px] text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
            12 new
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {[
            { name: '@alex_n', text: 'How much is it?', time: '15 m' },
            { name: '@sarah_m', text: 'Interested in the course', time: '38 m' },
            { name: '@evan_b', text: 'Can I sign up?', time: '1 h' },
            { name: '@olivia_r', text: 'Any payment plan?', time: '2 h' },
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

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center">
            <span className="text-[11px] font-medium text-rose-600" style={{ fontFamily: fontStack }}>A</span>
          </div>
          <span className="text-[12px] text-slate-800 font-medium" style={{ fontFamily: fontStack }}>@alex_n</span>
          <span className="text-[10px] text-rose-500 ml-auto" style={{ fontFamily: fontStack }}>just now</span>
        </div>

        <div className="flex flex-col gap-2 flex-1 justify-end pb-2">
          <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-3 py-2 self-start max-w-[80%]">
            <p className="text-[11px] text-slate-700" style={{ fontFamily: fontStack }}>How much is it?</p>
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
          <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Waiting on reply — 15 min</span>
        </div>
      </div>
    </div>
  );
}

function LandscapeAutoPlaceholder() {
  const txs = [
    { name: 'Sarah M.', sum: '$497', product: 'Expert-Systems Course', time: '2:23 pm' },
    { name: 'Mark D.', sum: '$297', product: 'Monthly subscription', time: '1:45 pm' },
    { name: 'Anna B.', sum: '$147', product: 'Archive access', time: '12:18 pm' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl h-full p-4 shadow-sm flex gap-4">
      <div className="w-[44%] flex flex-col">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center">
              <iconify-icon icon="solar:chart-square-linear" width="16" height="16" style={{ color: '#175ae8' }} />
            </div>
            <span className="text-[12px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>Today</span>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
            Active
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-[#175ae8]/[0.05] rounded-lg p-2.5 border border-[#175ae8]/15">
            <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Leads</div>
            <div className="text-[1.3rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>12</div>
          </div>
          <div className="bg-[#175ae8]/[0.05] rounded-lg p-2.5 border border-[#175ae8]/15">
            <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Sales</div>
            <div className="text-[1.3rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>3</div>
          </div>
        </div>

        <div className="bg-[#175ae8]/[0.08] rounded-lg p-2.5 border border-[#175ae8]/20 flex-1 flex flex-col justify-center">
          <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>Revenue today</div>
          <div className="text-[1.6rem] text-slate-950 font-semibold tracking-tight leading-tight" style={{ fontFamily: fontStack }}>$891</div>
        </div>
      </div>

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
          <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Access granted automatically</span>
        </div>
      </div>
    </div>
  );
}
