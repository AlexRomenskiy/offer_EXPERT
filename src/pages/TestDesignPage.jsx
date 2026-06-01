// TEST DESIGN — brand-merge concept (Craft Lions navy master × Tania Lav warm accent).
// Throwaway demo route at /test-design to JUDGE the merge live in the browser.
// Thesis: navy carries "system & ROI", burgundy warmth carries "human & camera";
// burgundy is a dosed guest on the navy skeleton, never the bg or the CTAs.

import { useEffect } from 'react';

const fontStack = "'Manrope', sans-serif";
const mono = "'JetBrains Mono', monospace";

const NAVY = '#020f2d';
const BLUE = '#175ae8';
const BURG = '#800020';
const BURG_DK = '#5a0016';

const taniaPoints = [
  'Befriend the camera — film yourself and enjoy, no tension',
  'Become the face & voice of your brand — screen, stage, life',
  'Confident delivery — body, voice and presence that sells',
];

const olexandrPoints = [
  'Product packaging — landing, offer, structure that sells',
  'Funnel & automation — lead magnet, bot, payments',
  'Traffic & analytics — ads that scale what works',
];

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative p-2 sm:p-5">
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #020f2d 0%, #0a1a3d 52%, #0c2a6b 100%)',
          boxShadow: '0 30px 50px rgba(15,23,42,0.35), 0 70px 120px rgba(15,23,42,0.22)',
        }}
      >
        {/* dot texture, masked from the centre */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '22px 22px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, transparent 40%, black 85%)',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, transparent 40%, black 85%)',
          }}
        />
        {/* WARM glow (left) — Tania's half */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-[560px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(128,0,32,0.40), transparent 64%)' }}
        />
        {/* COOL glow (right) — the system's half */}
        <div
          aria-hidden="true"
          className="absolute -top-28 -right-24 w-[620px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(23,90,232,0.34), transparent 62%)' }}
        />

        {/* top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-8 lg:px-12 pt-6">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo/mark-on-light.png" alt="CRAFT LIONS" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
            <span className="text-[15px] sm:text-[16px] font-semibold tracking-[0.01em]">
              <span className="text-white">CRAFT</span>
              <span className="text-[#60a5fa] ml-1.5">LIONS</span>
            </span>
          </a>
          <span className="text-[11px] tracking-[0.22em] uppercase text-white/45" style={{ fontFamily: mono }}>
            Brand system · concept
          </span>
        </div>

        {/* centered column */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20 flex flex-col items-center text-center anim-trigger is-visible">
          <p
            className="text-[9.5px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.24em] uppercase text-[#7fb0ff] mb-5 anim-fade-up"
            style={{ fontFamily: mono, transitionDelay: '0.05s' }}
          >
            Tania Lav &amp; Olexandr · Co-founders of Craft Lions
          </p>
          <h1
            className="font-light mb-6 text-white anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.12, transitionDelay: '0.1s' }}
          >
            <span className="block font-medium text-[2.1rem] sm:text-[3.1rem] lg:text-[3.7rem] tracking-[0.01em]">
              From being{' '}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0b8c4 60%, #800020 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                seen
              </span>
            </span>
            <span className="block font-medium text-[2.1rem] sm:text-[3.1rem] lg:text-[3.7rem] tracking-[0.01em]">
              to being{' '}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 70%, #175ae8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                booked
              </span>
            </span>
          </h1>
          <p
            className="max-w-[34rem] text-[0.98rem] sm:text-[1.05rem] leading-[1.6] text-slate-200/85 mb-8 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.16s' }}
          >
            One brand, two halves. Tania makes you impossible to ignore on camera; the
            system behind it turns that attention into booked clients. Same roof — two
            temperatures.
          </p>

          {/* temperature legend */}
          <div className="flex items-center gap-3 anim-fade-up" style={{ transitionDelay: '0.22s', fontFamily: mono }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] text-[#f0b8c4]"
              style={{ background: 'rgba(128,0,32,0.18)', border: '1px solid rgba(128,0,32,0.45)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#e06a86' }} /> Warm · human
            </span>
            <span className="text-white/30">+</span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] text-[#7fb0ff]"
              style={{ background: 'rgba(23,90,232,0.16)', border: '1px solid rgba(23,90,232,0.45)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#60a5fa' }} /> Cool · system
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Two halves ─────────────────────────────────────────────────────────────────
function HalfCard({ warm, tag, name, tagline, photo, points, heading }) {
  const accent = warm ? BURG : BLUE;
  const accentSoft = warm ? '#b21d44' : BLUE;
  return (
    <div
      className="relative p-7 lg:p-8 rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/60 anim-fade-up h-full overflow-hidden"
      style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
    >
      {/* top hairline — warm vs cool */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ background: warm ? `linear-gradient(90deg, ${BURG_DK}, ${BURG})` : `linear-gradient(90deg, ${NAVY}, ${BLUE})` }}
      />
      {/* dosed glow — only present, never dominant */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: warm ? 'radial-gradient(circle, rgba(128,0,32,0.12), transparent 70%)' : 'radial-gradient(circle, rgba(23,90,232,0.10), transparent 70%)' }}
      />

      <div className="relative z-10">
        {/* portrait */}
        <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden mb-5 border border-white/60 bg-slate-200">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
          {warm && (
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-multiply pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(128,0,32,0.30) 0%, transparent 55%)' }}
            />
          )}
          {!warm && (
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-multiply pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(2,15,45,0.30) 0%, transparent 55%)' }}
            />
          )}
        </div>

        {/* tag */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          <p className="text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: mono, color: accent }}>
            {tag} · {name}
          </p>
        </div>

        <h3 className="text-[1.5rem] text-slate-950 font-semibold leading-tight mb-4" style={{ fontFamily: fontStack }}>
          {heading}
        </h3>

        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <iconify-icon
                icon="solar:check-circle-line-duotone"
                width="18"
                height="18"
                style={{ color: accentSoft, marginTop: '1px', flexShrink: 0 }}
              />
              <span className="text-[0.92rem] text-slate-700 leading-[1.5]" style={{ fontFamily: fontStack }}>{p}</span>
            </li>
          ))}
        </ul>
        <p className="text-[12px] text-slate-500 mt-5" style={{ fontFamily: fontStack }}>{tagline}</p>
      </div>
    </div>
  );
}

function TwoHalves() {
  return (
    <section className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-[1180px] mx-auto">
        <div className="relative text-center mb-12 lg:mb-16 anim-trigger">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: mono }}
          >
            <span className="h-px w-6 bg-slate-300" />
            One brand, two halves
            <span className="h-px w-6 bg-slate-300" />
          </div>
          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.18, transitionDelay: '0.08s' }}
          >
            Two halves of <span className="italic-accent">one system</span>
          </h2>
          <p
            className="max-w-[34rem] mx-auto mt-5 text-[0.98rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline-mobile-only"
            style={{ fontFamily: fontStack, transitionDelay: '0.14s' }}
          >
            Same navy skeleton on both cards. Warmth shows up only on Tania's half —
            a hairline, a portrait, an accent. It never takes over the surface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 anim-trigger items-stretch">
          <HalfCard
            warm
            tag="ON CAMERA"
            name="TANIA LAV"
            heading="Own the camera."
            photo="/tania-lav.jpg"
            points={taniaPoints}
            tagline="Co-founder · 15 yrs on screen · on-camera coach"
          />
          <HalfCard
            tag="THE SYSTEM"
            name="OLEXANDR"
            heading="Get booked."
            photo="/olexandr.jpg"
            points={olexandrPoints}
            tagline="Co-founder · 7+ yrs in digital marketing"
          />
        </div>

        <p
          className="text-center max-w-[40rem] mx-auto mt-10 text-[1.05rem] sm:text-[1.15rem] leading-[1.55] text-slate-800 font-light anim-trigger anim-fade-up"
          style={{ fontFamily: fontStack }}
        >
          You become the expert people <span className="text-brand-gradient font-medium">see</span> — and the
          business they <span className="text-brand-gradient font-medium">buy from</span>.
        </p>
      </div>
    </section>
  );
}

// ── Temperature ladder (the strategy made visual) ───────────────────────────────
const rungs = [
  { label: 'Free course', stage: 'Awareness', t: 0 },
  { label: 'Tripwire', stage: 'Warming', t: 0.4 },
  { label: 'U-Brand service', stage: 'Decision · $1–4k', t: 0.78 },
  { label: 'Subscription', stage: 'Retention', t: 1 },
];

function mix(t) {
  // warm burgundy → cool navy across the ladder
  const lerp = (a, b) => Math.round(a + (b - a) * t);
  const r = lerp(0x80, 0x02), g = lerp(0x00, 0x0f), b = lerp(0x20, 0x2d);
  return `rgb(${r},${g},${b})`;
}

function TemperatureLadder() {
  return (
    <section className="relative pb-24 px-6 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-[1180px] mx-auto anim-trigger">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-4 anim-fade-up"
            style={{ fontFamily: mono }}
          >
            <span className="h-px w-6 bg-slate-300" />
            One brand, two temperatures
            <span className="h-px w-6 bg-slate-300" />
          </div>
          <h2
            className="text-[1.7rem] sm:text-[2.1rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.2, transitionDelay: '0.08s' }}
          >
            Warmer where we earn trust. <span className="italic-accent">Cooler</span> where we close.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 anim-fade-up" style={{ transitionDelay: '0.14s' }}>
          {rungs.map((r, i) => (
            <div
              key={i}
              className="relative rounded-[20px] p-6 overflow-hidden border border-white/15"
              style={{ background: `linear-gradient(150deg, ${mix(r.t)} 0%, ${mix(Math.min(1, r.t + 0.18))} 100%)`, minHeight: 150 }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '18px 18px' }}
              />
              <div className="relative z-10">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-white/55 mb-2" style={{ fontFamily: mono }}>
                  Rung {i + 1}
                </p>
                <p className="text-[1.15rem] text-white font-semibold leading-tight mb-1" style={{ fontFamily: fontStack }}>
                  {r.label}
                </p>
                <p className="text-[12px] text-white/65" style={{ fontFamily: fontStack }}>{r.stage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* rule caption */}
        <div
          className="mt-8 flex items-center justify-center gap-2.5 text-center px-5 py-4 rounded-[16px] bg-white/55 backdrop-blur-xl border border-white/60 anim-fade-up"
          style={{ transitionDelay: '0.2s' }}
        >
          <iconify-icon icon="solar:info-circle-linear" width="16" height="16" style={{ color: '#64748b', flexShrink: 0 }} />
          <p className="text-[0.85rem] text-slate-600 leading-[1.5]" style={{ fontFamily: fontStack }}>
            Navy carries system &amp; ROI · warmth carries human &amp; camera — burgundy is a guest
            in the navy house, never the background or the CTAs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TestDesignPage() {
  useEffect(() => {
    document.title = 'Brand merge · concept — Craft Lions × Tania Lav';
  }, []);

  return (
    <div className="relative">
      <Hero />
      <TwoHalves />
      <TemperatureLadder />
    </div>
  );
}
