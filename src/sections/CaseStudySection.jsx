export default function CaseStudySection() {
  const scrollToFinal = (e) => {
    e.preventDefault();
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="case-study"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EEF4FA] scroll-mt-24"
    >
      {/* atmospheric wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)]" />

      {/* structural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="case-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#case-grid)" />
        </svg>
      </div>

      {/* soft glows */}
      <div className="absolute top-[-12%] right-[-8%] w-[42%] h-[42%] blur-[110px] rounded-full pointer-events-none bg-orange-300/[0.16]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-14 lg:mb-16 anim-trigger">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{ transitionDelay: '0s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
              Кейс · Tania Lav
            </span>
          </div>

          <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5">
            <span className="block sm:inline anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Як це працює</span>
            </span>{' '}
            <span className="block anim-wrap">
              <span className="anim-line text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600" style={{ transitionDelay: '0.2s' }}>на практиці</span>
            </span>
          </h2>

          <p className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up" style={{ transitionDelay: '0.3s' }}>
            Tania Lav — On-Camera Brand для експертів та засновників. 10K+ аудиторія, досвід — але не було системи продажів.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 anim-trigger">

          {/* === LEFT: Video card (dark hero placeholder) === */}
          <div className="lg:col-span-5 anim-fade-up">
            <div className="group relative h-full min-h-[460px] rounded-[28px] overflow-hidden bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)] border border-white/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(251,146,60,0.32),transparent_24%)]" />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange-500/20 blur-[100px]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.04)_0%,rgba(15,23,42,0.18)_24%,rgba(15,23,42,0.72)_72%,rgba(15,23,42,0.88)_100%)]" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300/85">
                  <span>Video Testimonial</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Soon
                  </span>
                </div>

                {/* Play icon centered */}
                <div className="flex-1 flex items-center justify-center my-6">
                  <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 shadow-[0_0_60px_rgba(251,146,60,0.25)]">
                    <iconify-icon icon="solar:videocamera-record-linear" width="32" height="32" />
                  </div>
                </div>

                <div className="max-w-[26ch]">
                  <h3 className="font-display text-[1.7rem] lg:text-[1.9rem] leading-[1.08] tracking-[-0.03em] text-white mb-3">
                    Скоро буде додано
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-slate-300 mb-5">
                    Tania Lav · підготовка контенту
                  </p>

                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    <iconify-icon icon="solar:user-linear" className="text-orange-400 text-base" />
                    запис відеовідгуку
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT: Content stack === */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">

            {/* Client pill */}
            <div className="relative rounded-[20px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_rgba(148,163,184,0.10),0_4px_14px_rgba(15,23,42,0.04)] anim-fade-up">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

              <div className="relative z-10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center ring-2 ring-white/40 shadow-md">
                    <span className="text-white font-semibold text-sm tracking-wider">TL</span>
                  </div>
                  <div className="flex flex-col justify-center gap-0.5">
                    <h3 className="text-sm font-medium text-slate-950 tracking-tight leading-none">Tania Lav</h3>
                    <a
                      href="https://instagram.com/lav_tania"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 leading-none hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      @lav_tania
                      <iconify-icon icon="solar:arrow-right-up-linear" width="11" height="11" />
                    </a>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-orange-200/70 bg-orange-50/60 shrink-0">
                  <iconify-icon icon="solar:target-linear" width="14" height="14" className="text-orange-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-orange-700">Точка А · 10K+ без системи</span>
                </div>
              </div>
            </div>

            {/* 2 result cards side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {/* What was done */}
              <div className="relative rounded-[24px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12)] anim-fade-up" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]" />
                <div className="relative z-10 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <iconify-icon icon="solar:clock-circle-linear" className="text-orange-500 text-base" />
                    Зроблено за 7 днів
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 mb-5 ml-6">Пакет Генератор · стандартний термін 14 днів</p>

                  <div className="flex flex-col gap-2.5">
                    {[
                      'Стратегія і позиціонування',
                      'Посадкова сторінка інтенсиву',
                      'Чат-бот воронка',
                      'Автоматичний прийом оплат',
                      'Автоматична видача матеріалів',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/65 hover:bg-white/85 transition-colors rounded-xl p-2.5 border border-white/60">
                        <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-200/70">
                          <iconify-icon icon="solar:check-circle-linear" width="14" height="14" />
                        </div>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="relative rounded-[24px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12)] anim-fade-up" style={{ transitionDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(254,215,170,0.32),transparent_38%)]" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.4) 1px, transparent 0)', backgroundSize: '14px 14px' }} />

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <iconify-icon icon="solar:chart-square-linear" className="text-orange-500 text-base" />
                    Через 2–3 тижні
                  </div>

                  <div className="flex flex-col gap-6 flex-1">
                    <div>
                      <span className="font-display text-[3rem] lg:text-[3.4rem] leading-none tracking-[-0.05em] text-slate-950 block mb-1">18</span>
                      <span className="text-sm text-slate-600">клієнтів на інтенсив</span>
                    </div>
                    <div>
                      <span className="font-display text-[3rem] lg:text-[3.4rem] leading-none tracking-[-0.05em] text-slate-950 block mb-1">4</span>
                      <span className="text-sm text-slate-600">клієнти на індивідуальну роботу</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-orange-600">
                    <iconify-icon icon="solar:verified-check-linear" width="18" height="18" />
                    <span className="text-xs font-medium">Інвестиція $990 окупилась з перших продажів</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_24px_60px_rgba(249,115,22,0.30)] border border-orange-400/40 anim-fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_55%)]" />
              <div className="absolute -right-6 -bottom-6 text-black/10 pointer-events-none">
                <iconify-icon icon="solar:quote-right-bold" width="128" height="128" className="opacity-25 text-orange-950" />
              </div>

              <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-3">
                <p className="text-lg lg:text-xl font-light text-white tracking-tight leading-relaxed max-w-[92%]">
                  &quot;Тепер я можу просто робити контент і не переживати, що забула комусь відповісти або відправити посилання. Система працює за мене.&quot;
                </p>
                <div className="flex items-center gap-2 mt-4 border-t border-white/25 pt-4">
                  <span className="text-sm font-medium text-white tracking-tight">— Tania Lav</span>
                  <span className="text-xs text-white/75">· через 3 тижні після запуску</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#final-cta"
              onClick={scrollToFinal}
              className="group relative rounded-[20px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 hover:border-orange-300/70 transition-all duration-300 shadow-[0_12px_36px_rgba(148,163,184,0.10)] anim-fade-up flex items-center justify-between gap-4 p-5 lg:p-6"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-base lg:text-lg font-medium text-slate-950 tracking-tight">Хочеш такий же результат?</span>
                <span className="text-sm text-slate-600">Розберемо твою ситуацію за 30 хв — безкоштовно.</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-slate-900 group-hover:bg-orange-500 text-white px-5 py-3 rounded-xl font-medium text-sm shadow-md transition-all">
                <span className="hidden sm:inline">Записатись на розбір</span>
                <span className="sm:hidden">Записатись</span>
                <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
