export default function PainPointsSection() {
  return (
    <section
      id="pain-points"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EEF4FA] scroll-mt-24"
    >
      {/* atmospheric wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)] pointer-events-none" />

      {/* structural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="painpoints-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#painpoints-grid)" />
        </svg>
      </div>

      {/* soft glow */}
      <div className="absolute top-[-18%] left-[-8%] w-[42%] h-[42%] blur-[110px] rounded-full pointer-events-none bg-orange-300/[0.14]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === Section Header === */}
        <div className="max-w-3xl mb-14 lg:mb-16 anim-trigger">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{ transitionDelay: '0s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
              5 ситуацій · діагностика
            </span>
          </div>

          <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5">
            <span className="block sm:inline anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Скільки з цього</span>
            </span>{' '}
            <span className="block anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.2s' }}>у тебе зараз?</span>
            </span>
          </h2>

          <p className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up" style={{ transitionDelay: '0.3s' }}>
            5 типових ситуацій, у яких застрягають експерти, поки продажі тримаються на ручному режимі.
          </p>
        </div>

        {/* === 3-column instrumentation grid === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch anim-trigger">

          {/* === COLUMN 1 === */}
          <div className="flex flex-col gap-6 lg:gap-7 min-h-full">

            {/* Card 1 — Аудиторія є — продаж замало (visual: funnel bars) */}
            <div className="group relative min-h-[320px] rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up" style={{ transitionDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.52))]" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(254,215,170,0.30),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(251,146,60,0.10),transparent_32%)]" />
              </div>

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">PNT-01</span>
                  <iconify-icon icon="solar:filter-linear" className="text-orange-500 text-lg" />
                </div>

                <div className="flex flex-col items-center my-4 gap-1.5">
                  <div className="w-full max-w-[200px]">
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-orange-300 rounded-full" />
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.14em] mt-1 mb-2">100 заявок</div>
                    <div className="w-3/5 h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-orange-400/70 rounded-full" />
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.14em] mt-1 mb-2">~40 на дзвінок</div>
                    <div className="w-1/4 h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-rose-400 rounded-full" />
                    </div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.14em] mt-1">~5 продажів</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[1.35rem] lg:text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-slate-950 mb-2">
                    Аудиторія є — продаж замало
                  </h3>
                  <p className="text-[0.95rem] leading-[1.6] text-slate-600">
                    Контент дивляться, заявки пишуть. Але до оплати доходять одиниці — лід губиться десь між DM і чеком.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 — Дохід упирається в стелю (metric: curve + plato badge) */}
            <div className="group relative min-h-[280px] rounded-[28px] overflow-hidden bg-white/36 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up" style={{ transitionDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.50),transparent_52%)]" />
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.25) 1px, transparent 0)', backgroundSize: '14px 14px' }} />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">PNT-05</span>
                  <iconify-icon icon="solar:graph-up-linear" className="text-orange-500 text-lg" />
                </div>

                <div className="relative flex items-end justify-center my-3">
                  <svg viewBox="0 0 200 100" className="w-full max-w-[220px] h-24" preserveAspectRatio="none">
                    <line x1="0" y1="100" x2="200" y2="100" stroke="rgb(226,232,240)" strokeWidth="1" />
                    <line x1="0" y1="35" x2="200" y2="35" stroke="rgb(226,232,240)" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 0 95 Q 40 90 70 60 T 130 35 L 200 33" stroke="rgb(251,146,60)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <circle cx="200" cy="33" r="4" fill="rgb(251,146,60)" />
                    <circle cx="200" cy="33" r="8" fill="rgb(251,146,60)" fillOpacity="0.2" />
                  </svg>
                  <div className="absolute top-0 right-0 inline-flex items-center gap-1.5 rounded-full border border-orange-200/70 bg-white/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-orange-700">
                    <span className="w-1 h-1 rounded-full bg-orange-500" />
                    Плато
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[1.3rem] lg:text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-slate-950 mb-2">
                    Дохід упирається в стелю
                  </h3>
                  <p className="text-[0.93rem] leading-[1.6] text-slate-600">
                    Скільки б заявок не приходило — більше за певну кількість на тиждень не відпрацюєш. Час — обмежений ресурс.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMN 2 === */}
          <div className="flex flex-col gap-6 lg:gap-7 min-h-full">

            {/* Card 3 — Без тебе система зупиняється (content + clock visual) */}
            <div className="group relative min-h-[280px] rounded-[28px] overflow-hidden bg-white/34 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <iconify-icon icon="solar:moon-sleep-linear" className="text-orange-500 text-base" />
                    PNT-03
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-slate-700 tabular-nums leading-none">23:47</div>
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.14em] mt-1">пятниця</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                      <span className="font-mono text-[9px] font-semibold text-slate-500 uppercase tracking-[0.14em]">офлайн</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[1.3rem] lg:text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-slate-950 mb-2">
                    Без тебе система зупиняється
                  </h3>
                  <p className="text-[0.93rem] leading-[1.6] text-slate-600">
                    Не вийшов на роботу день — заявки без відповіді. Поїхав у відпустку — продажі стали.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 — Технічно зібрати самому (visual: logos cluster) */}
            <div className="group relative min-h-[320px] rounded-[28px] overflow-hidden bg-white/38 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up" style={{ transitionDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(254,215,170,0.22),transparent_36%)]" />
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251,146,60,0.78) 1px, transparent 0)', backgroundSize: '16px 16px' }} />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">PNT-04</span>
                  <iconify-icon icon="solar:settings-linear" className="text-orange-500 text-lg" />
                </div>

                <div className="relative flex flex-col items-center justify-center my-4">
                  <div className="relative w-full h-24">
                    <div className="absolute top-0 left-2 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-6 transition-transform duration-500 group-hover:-rotate-12">
                      <iconify-icon icon="simple-icons:manychat" width="20" height="20" className="text-slate-700" />
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center rotate-3 transition-transform duration-500 delay-75">
                      <iconify-icon icon="simple-icons:stripe" width="20" height="20" className="text-slate-700" />
                    </div>
                    <div className="absolute top-0 right-2 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-3 transition-transform duration-500 delay-100">
                      <iconify-icon icon="simple-icons:zapier" width="20" height="20" className="text-slate-700" />
                    </div>
                    <div className="absolute bottom-0 left-8 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center rotate-6 transition-transform duration-500 delay-150">
                      <iconify-icon icon="simple-icons:googleads" width="20" height="20" className="text-slate-700" />
                    </div>
                    <div className="absolute bottom-0 right-8 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-6 transition-transform duration-500 delay-200">
                      <iconify-icon icon="simple-icons:notion" width="20" height="20" className="text-slate-700" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-rose-500/20 border border-rose-400/40 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center z-10">
                      <span className="text-sm font-bold text-rose-500">?</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[1.3rem] lg:text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-slate-950 mb-2">
                    Технічно зібрати самому — окрема професія
                  </h3>
                  <p className="text-[0.93rem] leading-[1.6] text-slate-600">
                    Бот, лендинг, інтеграції оплат, CRM. Тижні вивчення — або підрядники, що тягнуть бюджет і строки.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMN 3 — Big dark hero card (Card 2: manual labor) === */}
          <div className="flex flex-col min-h-full">
            <div className="group relative flex-1 min-h-[540px] rounded-[28px] overflow-hidden bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)] border border-white/20 anim-fade-up" style={{ transitionDelay: '0.3s' }}>
              {/* Atmospheric glows */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(251,146,60,0.32),transparent_24%)]" />
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/20 blur-[80px]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.04)_0%,rgba(15,23,42,0.18)_24%,rgba(15,23,42,0.72)_72%,rgba(15,23,42,0.88)_100%)]" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300/85">
                  <span>PNT-02 · Manual Labor</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    12 непрочитаних
                  </span>
                </div>

                {/* Chat bubbles illustration */}
                <div className="flex-1 flex flex-col gap-2 items-end my-6">
                  <div className="bg-white/10 border border-white/15 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm">
                    <div className="h-1.5 w-24 bg-white/40 rounded-full mb-1" />
                    <div className="h-1.5 w-32 bg-white/40 rounded-full" />
                  </div>
                  <div className="bg-white/10 border border-white/15 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm">
                    <div className="h-1.5 w-28 bg-white/40 rounded-full mb-1" />
                    <div className="h-1.5 w-20 bg-white/40 rounded-full" />
                  </div>
                  <div className="bg-white/10 border border-white/15 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm">
                    <div className="h-1.5 w-20 bg-white/40 rounded-full" />
                  </div>
                  <div className="bg-orange-500/15 border border-orange-400/30 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm">
                    <div className="h-1.5 w-32 bg-orange-300/60 rounded-full mb-1" />
                    <div className="h-1.5 w-24 bg-orange-300/60 rounded-full" />
                  </div>
                </div>

                <div className="max-w-[26ch]">
                  <h3 className="font-display text-[1.7rem] lg:text-[1.9rem] leading-[1.08] tracking-[-0.03em] text-white mb-4">
                    Кожен клієнт — на твоїх плечах
                  </h3>
                  <p className="text-[0.98rem] leading-[1.7] text-slate-300 mb-5">
                    Повідомлення, скрипти, рахунки, доступи — усе вручну. Один клієнт забирає години твого часу.
                  </p>

                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    <iconify-icon icon="solar:chat-square-linear" className="text-orange-400 text-base" />
                    24/7 у режимі live-support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
