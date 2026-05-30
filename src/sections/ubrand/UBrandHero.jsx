import { useRef, useState } from 'react';
import {
  UBRAND_DISCOUNT_PCT,
  UBRAND_INTRO_VIDEO,
  UBRAND_INTRO_POSTER,
  TANIA_NAME,
  OLEXANDR_NAME,
  isDiscountActive,
} from '../../config/ubrand';
import { useUBrandForm } from './UBrandFormModal';

const fontStack = "'Manrope', sans-serif";

// Inline 16:9 intro-video card — centered hero centerpiece.
// Autoplay muted loop, tap to toggle sound. Recap video is horizontal;
// the placeholder vertical clip is center-cropped via object-cover.
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
      className="group relative w-full max-w-[760px] aspect-video rounded-[24px] overflow-hidden cursor-pointer bg-slate-950 border border-white/15"
      style={{ boxShadow: '0 32px 80px rgba(2,15,45,0.45), 0 10px 28px rgba(2,15,45,0.30)' }}
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
        className="w-full h-full object-cover"
      />

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

      {!videoError && (
        <div className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/70 transition-colors">
          <iconify-icon
            icon={muted ? 'solar:volume-cross-linear' : 'solar:volume-loud-linear'}
            width="18"
            height="18"
            style={{ color: '#fff' }}
          />
        </div>
      )}

      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#020f2d] via-[#0a1a3d] to-[#175ae8] flex flex-col items-center justify-center gap-2">
          <iconify-icon icon="solar:play-circle-linear" width="40" height="40" style={{ color: '#fff' }} />
          <span className="text-[10px] tracking-[0.18em] uppercase text-white/80 font-medium">
            {TANIA_NAME}’s video
          </span>
        </div>
      )}
    </div>
  );
}

export default function UBrandHero() {
  const discount = isDiscountActive();
  const { open } = useUBrandForm();
  return (
    <section id="ubrand-hero" className="relative p-2 sm:p-5">
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #020f2d 0%, #0a1a3d 52%, #0c2a6b 100%)',
          boxShadow: '0 30px 50px rgba(15,23,42,0.35), 0 70px 120px rgba(15,23,42,0.22)',
        }}
      >
        {/* Dot texture — masked away from the centre so it never sits behind the headline */}
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
        <div
          aria-hidden="true"
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[760px] h-[620px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(23,90,232,0.28), transparent 62%)' }}
        />

        {/* Top bar — Craft Lions lockup (matches main page), no nav */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-8 lg:px-12 pt-6">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/logo/mark-on-light.png"
              alt="CRAFT LIONS"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-[15px] sm:text-[16px] font-semibold tracking-[0.01em]">
              <span className="text-white">CRAFT</span>
              <span className="text-[#60a5fa] ml-1.5">LIONS</span>
            </span>
          </a>
          <span
            className="text-[11px] tracking-[0.22em] uppercase text-white/45"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            U-Brand
          </span>
        </div>

        {/* Centered hero column */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-10 pb-12 lg:pt-12 lg:pb-16 flex flex-col items-center text-center anim-trigger is-visible">

          {/* Event discount ribbon — auto-hides after the deadline */}
          {discount && (
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
                Live-event bonus · −{UBRAND_DISCOUNT_PCT}% if you make a decision
              </span>
            </div>
          )}

          {/* Eyebrow — team framing (co-founders) */}
          <p
            className="text-[11px] tracking-[0.24em] uppercase text-[#7fb0ff] mb-4 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.10s' }}
          >
            {TANIA_NAME} &amp; {OLEXANDR_NAME} · Co-founders of Craft Lions
          </p>

          {/* Headline — no trailing periods */}
          <h1
            className="font-light mb-5 text-white anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.14, transitionDelay: '0.14s' }}
          >
            <span className="block font-medium text-[2.1rem] sm:text-[3.1rem] lg:text-[3.7rem] tracking-[0.01em]">
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
            </span>
            <span className="block font-medium text-[2.1rem] sm:text-[3.1rem] lg:text-[3.7rem] tracking-[0.01em]">
              Now let’s build the{' '}
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
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-[34rem] text-[0.98rem] sm:text-[1.05rem] leading-[1.6] text-slate-200/85 mb-9 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.20s' }}
          >
            On camera, {TANIA_NAME} makes you impossible to ignore. Behind it,{' '}
            {OLEXANDR_NAME} builds the system — brand, product, funnel — that turns
            attention into booked clients. From being <em>seen</em> to being{' '}
            <em>booked</em>. And you don’t have to do it alone.
          </p>

          {/* CTA — kept ABOVE the video so it's visible without scrolling (desktop + mobile) */}
          <div className="anim-fade-up" style={{ transitionDelay: '0.26s' }}>
            <button
              type="button"
              onClick={open}
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
                Reserve your spot
              </span>
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="16"
                height="16"
                class="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: '#fff' }}
              />
            </button>
            <p
              className="text-[11px] text-slate-300/70 mt-3 tracking-[0.02em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {discount
                ? `Just reserve your spot — no payment now. Booking now locks your −${UBRAND_DISCOUNT_PCT}%.`
                : 'Just reserve your spot — no payment, we’ll reach out.'}
            </p>
          </div>

          {/* Horizontal video — the "second moment", below the CTA */}
          <div className="w-full flex justify-center mt-10 anim-fade-up" style={{ transitionDelay: '0.32s' }}>
            <IntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
