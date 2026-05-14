const fontStack = "'Manrope', sans-serif";

/* ============================================================
   ASSET PIPELINE (per user 2026-05-13 — pending):
   - Tania Lav photo (portrait) — replace placeholder avatar zone
   - Tania Lav video testimonial — wire to play button overlay
   When assets arrive:
     * Swap the photo placeholder div with <img src="/photos/tania-lav.jpg" />
     * Wire play button to open video modal or inline <video> swap
   ============================================================ */

const scope = ['Стратегія', 'Лендинг', 'Чат-бот', 'Прийом оплат', 'Автомат видача'];

export default function CaseStudySection() {
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
        <div className="max-w-3xl mb-12 lg:mb-14 anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Як це працює
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                на практиці
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Tania Lav — On-Camera Brand для експертів. 10K+ аудиторія, але без
            системи продажів. Зібрали воронку за 7 днів.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 anim-trigger">

          {/* ============================================
              LEFT — Profile card (5-col)
              ============================================ */}
          <div className="lg:col-span-5 anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <div className="relative h-full min-h-[480px] rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40">

              {/* PHOTO PLACEHOLDER — swap with <img src="/photos/tania-lav.jpg" /> when ready */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50">
                {/* subtle premium glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(23,90,232,0.10),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(96,165,250,0.08),transparent_45%)]" />

                {/* Centered avatar silhouette (until real photo lands) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/60 border border-white/80 backdrop-blur-md flex items-center justify-center shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                    <iconify-icon
                      icon="solar:user-rounded-linear"
                      width="56"
                      height="56"
                      style={{ color: '#94a3b8' }}
                    />
                  </div>
                </div>
              </div>

              {/* Top-right subscriber pill */}
              <div className="absolute top-5 right-5 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-white/80 px-3 py-1.5 shadow-sm">
                  <iconify-icon icon="solar:users-group-rounded-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                  <span className="text-[11px] font-medium text-slate-700" style={{ fontFamily: fontStack }}>
                    10K+ підписників
                  </span>
                </div>
              </div>

              {/* Centered play button — for future video testimonial */}
              <button
                type="button"
                aria-label="Дивитися відеовідгук (скоро)"
                className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 z-10 group"
                disabled
              >
                <div className="relative w-[68px] h-[68px] rounded-full bg-white/80 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-[0_15px_40px_rgba(23,90,232,0.18)] transition-transform group-hover:scale-105">
                  <iconify-icon
                    icon="solar:play-bold"
                    width="26"
                    height="26"
                    style={{ color: '#175ae8' }}
                  />
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 whitespace-nowrap" style={{ fontFamily: fontStack }}>
                    відеовідгук скоро
                  </span>
                </div>
              </button>

              {/* Bottom identity overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 bg-gradient-to-t from-white/85 via-white/40 to-transparent backdrop-blur-sm">
                <div className="text-[1.35rem] lg:text-[1.5rem] text-slate-950 font-medium tracking-[-0.02em] leading-tight" style={{ fontFamily: fontStack }}>
                  Tania Lav
                </div>
                <div className="text-[0.95rem] text-slate-600 mt-0.5" style={{ fontFamily: fontStack }}>
                  @lav_tania · On-Camera Brand для експертів
                </div>
              </div>
            </div>
          </div>

          {/* ============================================
              RIGHT — Results stack (7-col)
              ============================================ */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">

            {/* === Combined: scope + stats card === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 p-7 lg:p-8 anim-fade-up"
              style={{ transitionDelay: '0.15s' }}
            >
              {/* Scope: delivered in 7 days */}
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-[1.05rem] text-slate-950 font-medium" style={{ fontFamily: fontStack }}>
                    Зроблено за 7 днів
                  </span>
                  <span className="text-[0.85rem] text-slate-500" style={{ fontFamily: fontStack }}>
                    · стандарт 14
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-7 lg:mb-8">
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
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mb-6 lg:mb-7" />

              <div className="text-[0.85rem] text-slate-500 mb-4" style={{ fontFamily: fontStack }}>
                Через 2–3 тижні після запуску
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-6">
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
                  <div className="text-[2.4rem] lg:text-[2.8rem] text-[#175ae8] font-medium tracking-[-0.04em] leading-none" style={{ fontFamily: fontStack }}>
                    $990
                  </div>
                  <div className="text-[0.85rem] text-slate-600 mt-1.5 leading-tight" style={{ fontFamily: fontStack }}>
                    окупилось з перших продажів
                  </div>
                </div>
              </div>
            </div>

            {/* === Quote === */}
            <div
              className="relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 p-7 lg:p-8 anim-fade-up"
              style={{ transitionDelay: '0.20s' }}
            >
              <iconify-icon
                icon="solar:quote-up-square-linear"
                width="28"
                height="28"
                style={{ color: '#175ae8' }}
                class="opacity-70 mb-3 block"
              />
              <blockquote className="text-[1.05rem] lg:text-[1.15rem] leading-[1.55] text-slate-800 font-medium tracking-[-0.01em] mb-4" style={{ fontFamily: fontStack }}>
                «Тепер я можу просто робити контент і не переживати, що забула
                комусь відповісти або відправити посилання. Система працює за
                мене.»
              </blockquote>
              <footer className="text-[0.9rem] text-slate-500" style={{ fontFamily: fontStack }}>
                — Tania Lav, через 3 тижні після запуску
              </footer>
            </div>

            {/* === CTA === */}
            <a
              href="#request-access"
              onClick={scrollToCTA}
              className="anim-fade-up self-start inline-flex items-center gap-2.5 rounded-full bg-[#175ae8] hover:bg-[#0e47c8] text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] shadow-[0_12px_30px_-8px_rgba(23,90,232,0.45)] transition-all duration-300 hover:translate-y-[-1px]"
              style={{ transitionDelay: '0.25s', fontFamily: fontStack }}
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
