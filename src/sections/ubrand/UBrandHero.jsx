import { useEffect, useRef, useState } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';
import {
  UBRAND_DISCOUNT_PCT,
  UBRAND_DEADLINE_LABEL,
  UBRAND_INTRO_VIDEO,
  UBRAND_INTRO_POSTER,
  TANIA_NAME,
} from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";

// Inline 9:16 intro-video card — autoplay muted loop, tap to toggle sound.
// Mirrors VideoWidget behaviour but lives inside the hero instead of floating.
function IntroVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div
      onClick={toggleSound}
      className="group relative w-[210px] h-[373px] sm:w-[240px] sm:h-[426px] lg:w-[280px] lg:h-[498px] rounded-[26px] overflow-hidden cursor-pointer bg-slate-950 border border-white/15"
      style={{
        boxShadow: '0 28px 70px rgba(2,15,45,0.45), 0 8px 24px rgba(2,15,45,0.30)',
      }}
    >
      <video
        ref={videoRef}
        src={UBRAND_INTRO_VIDEO}
        poster={UBRAND_INTRO_POSTER || undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={() => setVideoError(true)}
        className="w-full h-full object-cover object-top"
      />

      {/* Caption pill */}
      {!videoError && (
        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
          <span
            className="text-[10px] tracking-[0.18em] uppercase text-white/90"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {TANIA_NAME} · 1 min
          </span>
        </div>
      )}

      {/* Sound toggle */}
      {!videoError && (
        <div className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/70 transition-colors">
          <iconify-icon
            icon={muted ? 'solar:volume-cross-linear' : 'solar:volume-loud-linear'}
            width="16"
            height="16"
            style={{ color: '#fff' }}
          />
        </div>
      )}

      {/* Fallback when the video file is missing */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#020f2d] via-[#0a1a3d] to-[#175ae8] flex flex-col items-center justify-center gap-2">
          <iconify-icon icon="solar:play-circle-linear" width="36" height="36" style={{ color: '#fff' }} />
          <span className="text-[10px] tracking-[0.18em] uppercase text-white/80 font-medium">
            {TANIA_NAME}’s video
          </span>
        </div>
      )}
    </div>
  );
}

export default function UBrandHero() {
  return (
    <section id="ubrand-hero" className="relative p-2 sm:p-5">
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden sm:min-h-[calc(100vh-40px)]"
        style={{
          background:
            'linear-gradient(135deg, #020f2d 0%, #0a1a3d 52%, #0c2a6b 100%)',
          boxShadow: '0 30px 50px rgba(15,23,42,0.35), 0 70px 120px rgba(15,23,42,0.22)',
        }}
      >
        {/* Dot texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
        {/* Blue glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(23,90,232,0.30), transparent 62%)' }}
        />

        {/* Top bar — logo only, no nav (focused conversion page) */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-8 lg:px-12 pt-6">
          <img src="/logo/horizontal-on-dark.svg" alt="Craft Lions" className="h-7 sm:h-8 w-auto" />
          <span
            className="hidden sm:inline text-[11px] tracking-[0.22em] uppercase text-white/45"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            U-Brand
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-10 pb-12 lg:pt-12 lg:pb-10 min-h-[inherit] flex flex-col lg:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT — copy */}
            <div className="lg:col-span-7 order-2 lg:order-1 anim-trigger is-visible">
              {/* Event discount ribbon */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 anim-fade-up"
                style={{
                  background: 'rgba(251,146,60,0.12)',
                  border: '1px solid rgba(251,146,60,0.40)',
                  transitionDelay: '0.05s',
                }}
              >
                <iconify-icon icon="solar:gift-linear" width="15" height="15" style={{ color: '#fb923c' }} />
                <span
                  className="text-[11px] sm:text-[12px] tracking-[0.10em] uppercase text-orange-200"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Live-event bonus · −{UBRAND_DISCOUNT_PCT}% until {UBRAND_DEADLINE_LABEL}
                </span>
              </div>

              <p
                className="text-[11px] tracking-[0.24em] uppercase text-[#7fb0ff] mb-4 anim-fade-up"
                style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.10s' }}
              >
                Craft Lions × {TANIA_NAME}
              </p>

              <h1
                className="font-light mb-5 text-white anim-fade-up max-w-[34rem]"
                style={{ fontFamily: fontStack, lineHeight: 1.16, transitionDelay: '0.14s' }}
              >
                <span className="block font-medium text-[2rem] sm:text-[3rem] lg:text-[3.6rem] tracking-[0.01em]">
                  You{' '}
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
                    showed up
                  </span>
                  .
                </span>
                <span className="block font-medium text-[2rem] sm:text-[3rem] lg:text-[3.6rem] tracking-[0.01em]">
                  Let’s build the{' '}
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
                    brand behind it
                  </span>
                  .
                </span>
              </h1>

              <p
                className="max-w-[30rem] text-[0.95rem] sm:text-[1.02rem] leading-[1.6] text-slate-200/85 mb-7 pl-5 anim-fade-up"
                style={{
                  fontFamily: fontStack,
                  borderLeft: '1px solid rgba(255,255,255,0.20)',
                  transitionDelay: '0.20s',
                }}
              >
                {TANIA_NAME} got you in front of the camera. The system behind it —
                your brand, your product, the funnel that turns attention into clients —
                that’s what I build. From being seen to being booked. And you don’t have
                to do it alone.
              </p>

              <div className="anim-fade-up" style={{ transitionDelay: '0.28s' }}>
                <a
                  href={BOOKING_URL_EN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-wide rounded-full px-10 relative items-center justify-center"
                  style={{ fontFamily: fontStack, height: '60px' }}
                >
                  <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px] pointer-events-none">
                    <div
                      className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#fb923c_320deg,#f97316_360deg)]"
                      style={{ animation: 'beam-spin 3s linear infinite' }}
                    />
                    <div className="absolute inset-[1px] rounded-full bg-zinc-950" />
                  </div>
                  <div className="-z-10 overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-zinc-950 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/40 via-orange-700/15 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-500/30 blur-2xl rounded-full transition-colors duration-500 group-hover:bg-orange-400/55" />
                  </div>
                  <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                    Book your strategy call
                  </span>
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    width="16"
                    height="16"
                    class="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: '#fff' }}
                  />
                </a>
                <p
                  className="text-[11px] text-slate-300/70 mt-3 tracking-[0.02em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Free 30-min call · mention today’s talk to lock your −{UBRAND_DISCOUNT_PCT}%.
                </p>
              </div>
            </div>

            {/* RIGHT — Tania intro video */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end anim-trigger is-visible">
              <IntroVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
