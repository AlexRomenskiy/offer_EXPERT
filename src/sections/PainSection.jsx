import { useEffect, useRef, useState } from 'react';

const fontStack = "'Manrope', sans-serif";
const CARD_COUNT = 5;

export default function PainSection() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const first = el.firstElementChild;
      if (!first) return;
      // step = card width + gap (gap-4 on mobile = 16px)
      const step = first.offsetWidth + 16;
      if (step <= 0) return;
      const idx = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(idx, CARD_COUNT - 1)));
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (i) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[i];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section
      id="pain"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* =====================================================
              LEFT — sticky header
              ===================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start anim-trigger">
            <h2
              className="text-[2.35rem] sm:text-[2.85rem] lg:text-[3.2rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
              style={{ fontFamily: fontStack, textWrap: 'balance' }}
            >
              <span className="block anim-wrap">
                <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                  Скільки з цього
                </span>
              </span>
              <span className="block anim-wrap">
                <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                  у тебе зараз?
                </span>
              </span>
            </h2>

            <p
              className="max-w-[34rem] text-[1rem] sm:text-[1.06rem] leading-[1.7] text-slate-600 mb-8 anim-fade-up"
              style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
            >
              5 типових ситуацій, у яких застрягають експерти, поки продажі
              тримаються на ручному режимі.
            </p>

            {/* progress counter — keeps reader oriented through the stack */}
            <div
              className="hidden lg:flex items-center gap-3 text-[12px] text-slate-500 anim-fade-up"
              style={{ transitionDelay: '0.40s', fontFamily: fontStack }}
            >
              <span className="text-[#175ae8] font-medium">01</span>
              <span className="flex-1 h-px bg-gradient-to-r from-[#175ae8]/45 via-slate-300/60 to-transparent" />
              <span className="text-slate-400">05</span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — vertical stack of 5 cards
              ===================================================== */}
          <div className="lg:col-span-7">
            <div
              ref={carouselRef}
              className="anim-trigger flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 lg:flex-col lg:gap-6 lg:overflow-visible lg:snap-none lg:pb-0 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none' }}
            >

            {/* === Card 1 — Аудиторія є — продаж замало === */}
            <div
              className="group relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 anim-fade-up snap-start shrink-0 w-[82%] sm:w-[68%] lg:w-auto lg:shrink"
              style={{ transitionDelay: '0.05s' }}
            >
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-200/18 blur-[90px]" />

              <div className="relative z-10 p-6 lg:p-7 flex flex-col sm:flex-row gap-6 items-center">
                {/* Visual — funnel bars */}
                <div className="shrink-0 w-full sm:w-[200px]">
                  <div className="w-full h-2.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#175ae8] rounded-full" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 mb-1.5" style={{ fontFamily: fontStack }}>
                    100 заявок
                  </div>
                  <div className="w-3/5 h-2.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#60a5fa] rounded-full" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 mb-1.5" style={{ fontFamily: fontStack }}>
                    ~40 на дзвінок
                  </div>
                  <div className="w-[15%] h-2.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-slate-400 rounded-full" />
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1" style={{ fontFamily: fontStack }}>
                    ~5 продажів
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end mb-3">
                    <iconify-icon icon="solar:filter-linear" width="20" height="20" style={{ color: '#175ae8' }} />
                  </div>
                  <h3
                    className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Аудиторія є — продаж замало
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Контент дивляться, заявки пишуть. Але до оплати доходять
                    одиниці — лід губиться десь між DM і чеком.
                  </p>
                </div>
              </div>
            </div>

            {/* === Card 2 — Кожен клієнт — на твоїх плечах === */}
            <div
              className="group relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 anim-fade-up snap-start shrink-0 w-[82%] sm:w-[68%] lg:w-auto lg:shrink"
              style={{ transitionDelay: '0.10s' }}
            >
              <div className="pointer-events-none absolute -bottom-20 -left-16 w-60 h-60 rounded-full bg-blue-200/16 blur-[90px]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-80" />

              <div className="relative z-10 p-6 lg:p-7 flex flex-col sm:flex-row gap-6 items-center">
                {/* Visual — chat bubbles */}
                <div className="shrink-0 w-full sm:w-[200px] flex flex-col gap-1.5 items-end">
                  <div className="bg-white/75 border border-slate-200/70 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm shadow-sm">
                    <div className="h-1.5 w-24 bg-slate-300/70 rounded-full mb-1" />
                    <div className="h-1.5 w-32 bg-slate-300/70 rounded-full" />
                  </div>
                  <div className="bg-white/75 border border-slate-200/70 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm shadow-sm">
                    <div className="h-1.5 w-28 bg-slate-300/70 rounded-full" />
                  </div>
                  <div className="bg-[#175ae8]/12 border border-[#175ae8]/30 rounded-2xl rounded-br-sm px-3 py-2 max-w-[180px] backdrop-blur-sm">
                    <div className="h-1.5 w-32 bg-[#175ae8]/55 rounded-full mb-1" />
                    <div className="h-1.5 w-24 bg-[#175ae8]/55 rounded-full" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end mb-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-[#175ae8]/30 bg-[#175ae8]/8 px-2.5 py-0.5 text-[11px] text-[#175ae8]"
                      style={{ fontFamily: fontStack }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#175ae8] animate-pulse" />
                      12 непрочитаних
                    </span>
                  </div>
                  <h3
                    className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Кожен клієнт — на твоїх плечах
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Повідомлення, скрипти, рахунки, доступи — усе вручну. Один
                    клієнт забирає години твого часу.
                  </p>
                </div>
              </div>
            </div>

            {/* === Card 3 — Без тебе система зупиняється === */}
            <div
              className="group relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 anim-fade-up snap-start shrink-0 w-[82%] sm:w-[68%] lg:w-auto lg:shrink"
              style={{ transitionDelay: '0.15s' }}
            >
              <div className="pointer-events-none absolute -top-16 right-1/4 w-56 h-56 rounded-full bg-blue-200/16 blur-[90px]" />

              <div className="relative z-10 p-6 lg:p-7 flex flex-col sm:flex-row gap-6 items-center">
                {/* Visual — clock */}
                <div className="shrink-0 w-full sm:w-[200px] flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-slate-800 tabular-nums leading-none" style={{ fontFamily: fontStack }}>
                          23:47
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1" style={{ fontFamily: fontStack }}>
                          пятниця
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span className="text-[10px] font-medium text-slate-500" style={{ fontFamily: fontStack }}>
                        офлайн
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end mb-3">
                    <iconify-icon icon="solar:moon-sleep-linear" width="20" height="20" style={{ color: '#175ae8' }} />
                  </div>
                  <h3
                    className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Без тебе система зупиняється
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Не вийшов на роботу день — заявки без відповіді. Поїхав у
                    відпустку — продажі стали.
                  </p>
                </div>
              </div>
            </div>

            {/* === Card 4 — Технічно зібрати самому === */}
            <div
              className="group relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 anim-fade-up snap-start shrink-0 w-[82%] sm:w-[68%] lg:w-auto lg:shrink"
              style={{ transitionDelay: '0.20s' }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(147,197,253,0.18),transparent_38%)]" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.72) 1px, transparent 0)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="relative z-10 p-6 lg:p-7 flex flex-col sm:flex-row gap-6 items-center">
                {/* Visual — logos cluster around a confused "?" */}
                <div className="shrink-0 w-full sm:w-[200px] flex items-center justify-center">
                  <div className="relative w-full h-24">
                    <div className="absolute top-0 left-2 w-11 h-11 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-6 transition-transform duration-500 group-hover:-rotate-12">
                      <iconify-icon icon="simple-icons:manychat" width="20" height="20" style={{ color: '#1e293b' }} />
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-11 h-11 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center rotate-3 transition-transform duration-500 delay-75">
                      <iconify-icon icon="simple-icons:stripe" width="20" height="20" style={{ color: '#1e293b' }} />
                    </div>
                    <div className="absolute top-0 right-2 w-11 h-11 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-3 transition-transform duration-500 delay-100">
                      <iconify-icon icon="simple-icons:zapier" width="20" height="20" style={{ color: '#1e293b' }} />
                    </div>
                    <div className="absolute bottom-0 left-7 w-11 h-11 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center rotate-6 transition-transform duration-500 delay-150">
                      <iconify-icon icon="simple-icons:googleads" width="20" height="20" style={{ color: '#1e293b' }} />
                    </div>
                    <div className="absolute bottom-0 right-7 w-11 h-11 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center -rotate-6 transition-transform duration-500 delay-200">
                      <iconify-icon icon="simple-icons:notion" width="20" height="20" style={{ color: '#1e293b' }} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/85 border border-slate-700 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center z-10">
                      <span className="text-sm font-bold text-white" style={{ fontFamily: fontStack }}>?</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end mb-3">
                    <iconify-icon icon="solar:settings-linear" width="20" height="20" style={{ color: '#175ae8' }} />
                  </div>
                  <h3
                    className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Технічно зібрати самому — окрема професія
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Бот, лендинг, інтеграції оплат, CRM. Тижні вивчення — або
                    підрядники, що тягнуть бюджет і строки.
                  </p>
                </div>
              </div>
            </div>

            {/* === Card 5 — Дохід упирається в стелю === */}
            <div
              className="group relative rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 anim-fade-up snap-start shrink-0 w-[82%] sm:w-[68%] lg:w-auto lg:shrink"
              style={{ transitionDelay: '0.25s' }}
            >
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-blue-200/18 blur-[90px]" />

              <div className="relative z-10 p-6 lg:p-7 flex flex-col sm:flex-row gap-6 items-center">
                {/* Visual — growth curve plateauing */}
                <div className="shrink-0 w-full sm:w-[200px] flex items-end justify-center relative">
                  <svg viewBox="0 0 200 100" className="w-full max-w-[200px] h-24" preserveAspectRatio="none">
                    <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(148,163,184,0.40)" strokeWidth="1" />
                    <line x1="0" y1="35" x2="200" y2="35" stroke="rgba(148,163,184,0.40)" strokeWidth="1" strokeDasharray="3 3" />
                    <path
                      d="M 0 95 Q 40 90 70 60 T 130 35 L 200 33"
                      stroke="#175ae8"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="33" r="4" fill="#175ae8" />
                    <circle cx="200" cy="33" r="8" fill="#175ae8" fillOpacity="0.20" />
                  </svg>
                  <div
                    className="absolute top-0 right-0 inline-flex items-center gap-1.5 rounded-full border border-[#175ae8]/30 bg-white/80 px-2.5 py-1 text-[11px] text-[#175ae8]"
                    style={{ fontFamily: fontStack }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#175ae8]" />
                    Плато
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end mb-3">
                    <iconify-icon icon="solar:graph-up-linear" width="20" height="20" style={{ color: '#175ae8' }} />
                  </div>
                  <h3
                    className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Дохід упирається в стелю
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Скільки б заявок не приходило — більше за певну кількість на
                    тиждень не відпрацюєш. Час — обмежений ресурс.
                  </p>
                </div>
              </div>
            </div>

            </div>

            {/* Mobile-only dot pagination */}
            <div className="flex lg:hidden justify-center gap-2 mt-3">
              {Array.from({ length: CARD_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Перейти до картки ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIndex
                      ? 'w-6 bg-[#175ae8]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
