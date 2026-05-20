import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

// EN-version video — 4.4MB H.264, CRF 24, +faststart
// (source: 12MB MP4 @ 1.6Mbps, compressed via ffmpeg slow preset)
const TANIA_VIDEO_SRC = '/tania-testimonial-en.mp4';

const scope = [
  'Strategy',
  'Product packaging',
  'Magnet + tripwire',
  'Warm-up bot',
  'Payments + delivery',
  'Analytics',
];

export default function CaseStudySectionEN() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToCTA = (e) => {
    e.preventDefault();
    document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="case"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative max-w-3xl mb-12 lg:mb-14 anim-trigger text-center md:text-left">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Case study · 7 days
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              How it works
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                in practice
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline"
            style={{
              transitionDelay: '0.30s',
              fontFamily: fontStack,
            }}
          >
            One real run of the system — where the funnel sits, how fast it
            starts paying, and what it changes for the expert.
          </p>
        </div>

        {/* 2-col layout — stretch on lg so right column matches 9:16 left card height */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 anim-trigger lg:items-stretch">

          {/* =========================================== LEFT — Video card =========================================== */}
          <div className="anim-fade-up flex justify-center lg:justify-start" style={{ transitionDelay: '0.10s' }}>
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[28px] overflow-hidden bg-white/55 backdrop-blur-xl border border-white/60 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)]">

              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none z-[1]" />

              {!isPlaying ? (
                <>
                  <img
                    src="/Cover-ENG.png"
                    alt="Tania Lav — video testimonial"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Watch Tania Lav's video testimonial"
                    className="group absolute inset-0 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#175ae8] focus-visible:ring-inset"
                  >
                    <span aria-hidden="true" className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    <span className="relative w-[76px] h-[76px] rounded-full bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-[0_18px_45px_rgba(23,90,232,0.35)] transition-transform duration-300 group-hover:scale-110">
                      <span aria-hidden="true" className="absolute inset-0 rounded-full border border-white/60 animate-ping opacity-40" />
                      <iconify-icon
                        icon="solar:play-bold"
                        width="30"
                        height="30"
                        style={{ color: '#175ae8', marginLeft: '3px' }}
                      />
                    </span>
                  </button>

                  <div className="absolute top-5 right-5 z-10 pointer-events-none">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-white/80 px-3 py-1.5 shadow-sm">
                      <iconify-icon icon="solar:users-group-rounded-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                      <span className="text-[11px] font-medium text-slate-700" style={{ fontFamily: fontStack }}>
                        10K+ followers
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <video
                  src={TANIA_VIDEO_SRC}
                  poster="/Cover-ENG.png"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture
                  className="absolute inset-0 w-full h-full object-cover object-center bg-black"
                />
              )}
            </div>
          </div>

          {/* =========================================== RIGHT — Results stack (stretched on lg, button bottom-anchored) =========================================== */}
          <div className="flex flex-col gap-5 lg:gap-6 lg:h-full lg:justify-between">

            {/* === Combined: scope + stats card === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] p-6 lg:p-7 anim-fade-up"
              style={{ transitionDelay: '0.15s' }}
            >
              {/* Scope: package + delivered in 7 days */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[1.05rem] text-slate-950 font-medium" style={{ fontFamily: fontStack }}>
                    Shipped in 7 days
                  </span>
                  <span className="text-[0.85rem] text-slate-500" style={{ fontFamily: fontStack }}>
                    · vs 14-day standard
                  </span>
                </div>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#175ae8]/30 bg-[#175ae8]/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.16em] hover:bg-[#175ae8]/[0.14] transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="text-brand-gradient">Generator package</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" style={{ color: '#175ae8' }} />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-5 lg:mb-6">
                {scope.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/65 border border-slate-200/60 px-3 py-1 text-[11.5px] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Stats divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mb-5 lg:mb-6" />

              <div className="text-[0.85rem] text-slate-500 mb-4" style={{ fontFamily: fontStack }}>
                2–3 weeks after launch
              </div>

              {/* Mobile: stacked rows (number left, label right). sm+: 3-col grid */}
              <div className="flex flex-col gap-4 sm:hidden">
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-slate-200/50">
                  <span className="text-[2.4rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    18
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    clients into intensive
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-slate-200/50">
                  <span className="text-[2.4rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    4
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    into 1-on-1
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    className="text-[2.4rem] font-medium tracking-[-0.04em] leading-none"
                    style={{
                      fontFamily: fontStack,
                      background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    1–1.5
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    months to payback
                  </span>
                </div>
              </div>

              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-6">
                <div>
                  <div className="text-[2.4rem] lg:text-[2.8rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    18
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    clients into intensive
                  </div>
                </div>
                <div>
                  <div className="text-[2.4rem] lg:text-[2.8rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    4
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    into 1-on-1
                  </div>
                </div>
                <div>
                  <div
                    className="text-[2.4rem] lg:text-[2.8rem] font-medium tracking-[-0.04em] leading-none"
                    style={{
                      fontFamily: fontStack,
                      background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    1–1.5
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    months to payback
                  </div>
                </div>
              </div>

              {/* Honest caveat */}
              <div
                className="mt-6 lg:mt-7 pt-5 border-t border-slate-200/50 text-[0.82rem] text-slate-500 leading-[1.55]"
                style={{ fontFamily: fontStack }}
              >
                <span className="text-slate-700 font-medium">Honest:</span>{' '}
                this result isn’t «typical». Tania had a 10K+ audience and
                existing trust — that’s a speed driver. A different starting
                point gives different numbers.
              </div>
            </div>

            {/* === Quote (no icon — text starts at card top edge) === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] p-6 lg:p-7 anim-fade-up"
              style={{ transitionDelay: '0.20s' }}
            >
              <blockquote className="text-[1.05rem] lg:text-[1.15rem] leading-[1.55] text-slate-800 font-medium tracking-[-0.01em]" style={{ fontFamily: fontStack }}>
                «I love when money makes sense. Same with subscribers — I love
                that the system takes care of everyone, and just routes me the
                ones who actually want to work. For me, running a business, the
                best wardrobe upgrade is product packaging.»
              </blockquote>
            </div>

            {/* === CTA === */}
            <a
              href="#request-access"
              onClick={scrollToCTA}
              className="anim-fade-up self-center lg:self-start inline-flex items-center gap-2.5 rounded-full text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 hover:translate-y-[-1px]"
              style={{
                transitionDelay: '0.25s',
                fontFamily: fontStack,
                background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
              }}
            >
              Get me a system like this
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
