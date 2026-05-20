import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

// Self-hosted compressed MP4 — 720p H.264, CRF 24, ~16MB
// (source: 34MB MOV @ 3Mbps, compressed via ffmpeg slow preset + faststart)
const TANIA_VIDEO_SRC = '/tania-testimonial.mp4';

const scope = [
  'Стратегія',
  'Упаковка продукту',
  'Магніт + тріпваер',
  'Прогрівний бот',
  'Оплати + видача',
  'Аналітика',
];

export default function CaseStudySection() {
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
          {/* Decorative dot-mesh background — Pricing-style base center */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          {/* Mono eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Кейс · 7 днів
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              Як це працює на
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                практиці
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
            Один реальний прогін системи: де ставиться воронка, через
            скільки починає платити — і що це міняє для експерта.
          </p>
        </div>

        {/* 2-col layout: fixed-width 9:16 LEFT (Shorts/Reels canon) + flex RIGHT
            lg:items-start prevents stretch — LEFT keeps true 9:16, RIGHT takes natural height */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 anim-trigger lg:items-start">

          {/* ============================================
              LEFT — Video card (true 9:16 on all breakpoints)
              Light glass frame, cover/video shown in full composition (no crop).
              ============================================ */}
          <div className="anim-fade-up flex justify-center lg:justify-start" style={{ transitionDelay: '0.10s' }}>
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[28px] overflow-hidden bg-white/55 backdrop-blur-xl border border-white/60 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)]">

              {/* Inner glow highlight — matches glass card canon */}
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none z-[1]" />

              {!isPlaying ? (
                <>
                  <img
                    src="/Cover-UA.png"
                    alt="Tania Lav — відеовідгук"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* Click-to-play */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Дивитися відеовідгук Tania Lav"
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

                  {/* Top-right subscriber pill */}
                  <div className="absolute top-5 right-5 z-10 pointer-events-none">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-white/80 px-3 py-1.5 shadow-sm">
                      <iconify-icon icon="solar:users-group-rounded-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                      <span className="text-[11px] font-medium text-slate-700" style={{ fontFamily: fontStack }}>
                        10K+ підписників
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                /* Playing — native HTML5 video, fills 9:16 frame natively */
                <video
                  src={TANIA_VIDEO_SRC}
                  poster="/Cover-UA.png"
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

          {/* ============================================
              RIGHT — Results stack (1fr column in [340px_1fr] grid)
              ============================================ */}
          <div className="flex flex-col gap-5 lg:gap-6">

            {/* === Combined: scope + stats card === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] p-6 lg:p-7 anim-fade-up"
              style={{ transitionDelay: '0.15s' }}
            >
              {/* Scope: package + delivered in 7 days */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[1.05rem] text-slate-950 font-medium" style={{ fontFamily: fontStack }}>
                    Зроблено за 7 днів
                  </span>
                  <span className="text-[0.85rem] text-slate-500" style={{ fontFamily: fontStack }}>
                    · стандарт 14
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
                  <span className="text-brand-gradient">Пакет «Генератор»</span>
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
                Через 2–3 тижні після запуску
              </div>

              {/* Mobile: stacked rows (number left, label right). sm+: 3-col grid */}
              <div className="flex flex-col gap-4 sm:hidden">
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-slate-200/50">
                  <span className="text-[2.4rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    18
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    клієнтів на інтенсив
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-slate-200/50">
                  <span className="text-[2.4rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    4
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    на індивідуальну
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
                    $990
                  </span>
                  <span className="text-[0.85rem] text-slate-600 text-right leading-tight" style={{ fontFamily: fontStack }}>
                    окупився за 1–1.5 місяця
                  </span>
                </div>
              </div>

              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5 lg:gap-6">
                <div>
                  <div className="text-[2.4rem] lg:text-[2.8rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    18
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    клієнтів на інтенсив
                  </div>
                </div>
                <div>
                  <div className="text-[2.4rem] lg:text-[2.8rem] text-slate-950 font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    4
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    на індивідуальну
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
                    $990
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    окупився за 1–1.5 місяця
                  </div>
                </div>
              </div>

              {/* Honest caveat — turns 1-case-portfolio into trust */}
              <div
                className="mt-6 lg:mt-7 pt-5 border-t border-slate-200/50 text-[0.82rem] text-slate-500 leading-[1.55]"
                style={{ fontFamily: fontStack }}
              >
                <span className="text-slate-700 font-medium">Чесно:</span>{' '}
                результат не «типовий». У Тетяни 10K+ аудиторії і своя довіра —
                це драйвер швидкості. У іншого старту — інші цифри.
              </div>
            </div>

            {/* === Quote === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] p-6 lg:p-7 anim-fade-up"
              style={{ transitionDelay: '0.20s' }}
            >
              <iconify-icon
                icon="solar:quote-up-square-linear"
                width="28"
                height="28"
                style={{ color: '#175ae8' }}
                class="opacity-70 mb-3 block"
              />
              <blockquote className="text-[1.05rem] lg:text-[1.15rem] leading-[1.55] text-slate-800 font-medium tracking-[-0.01em]" style={{ fontFamily: fontStack }}>
                «Я люблю, коли гроші мають лік. З підписниками те саме: рада,
                що система турбується про кожного, а мені видає безпосередньо
                тих, хто хоче працювати. Для мене, як для дівчини з
                бізнес-проектом, найкраще оновлення гардеробу — це упаковка
                продукту.»
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
              Хочу такий самий результат
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
