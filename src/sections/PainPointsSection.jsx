import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import DarkCard from '../components/DarkCard';

export default function PainPointsSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="pain-points" className="flex flex-col gap-10 z-10 w-full relative scroll-mt-24" ref={sectionRef}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1 reveal-on-scroll">
        <div className="max-w-2xl">
          <h2 className="md:text-5xl text-3xl font-normal text-slate-900 tracking-tight mb-4">
            Скільки з цього
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-600"> у тебе зараз?</span>
          </h2>
          <p className="leading-relaxed text-base font-normal text-slate-500">
            5 типових ситуацій, у яких застрягають експерти, поки продажі тримаються на ручному режимі.
          </p>
        </div>
      </div>

      {/* Bento Grid — huly-style: separate cards with gap, mixed dark/light */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 — LIGHT: Conversion gap */}
        <div className="group bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col min-h-[340px] justify-between reveal-on-scroll">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:filter-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Аудиторія є — продаж замало</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Контент дивляться, заявки пишуть. Але до оплати доходять одиниці — лід губиться десь між DM і чеком.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center py-4 relative flex-grow">
            <div className="relative w-full max-w-[200px] h-32 flex flex-col items-center">
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-orange-300 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 mb-2">100 заявок</div>
              <div className="w-3/5 h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-orange-300/70 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 mb-2">~40 на дзвінок</div>
              <div className="w-1/4 h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-rose-300 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">~5 продажів</div>
            </div>
          </div>
        </div>

        {/* Card 2 — DARK + leak: Manual labor (span 2) */}
        <DarkCard
          className="md:col-span-2 min-h-[340px] reveal-on-scroll"
          leaks={[
            { position: 'top-right', color: 'rgba(255, 107, 53, 0.5)', size: 480, blur: 100 },
          ]}
        >
          <div className="p-8 flex flex-col justify-between h-full overflow-hidden relative">
            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-3 text-orange-400/80">
                <iconify-icon icon="solar:chat-square-linear" width="24" height="24" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Кожен клієнт — на твоїх плечах</h3>
              <p className="text-sm text-white/60 font-normal leading-relaxed">
                Повідомлення, скрипти, рахунки, доступи — усе вручну. Один клієнт забирає години твого часу.
              </p>
            </div>

            <div className="absolute right-0 bottom-0 top-0 w-full md:w-2/3 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-l from-[#1c1f24] via-[#1c1f24]/70 to-transparent z-10" />

              <div className="absolute top-[15%] right-12 z-0 flex flex-col gap-2 items-end">
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
              </div>

              <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-white/10 border border-white/20 px-2.5 py-1.5 rounded-full backdrop-blur-md z-20">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(248,113,113,0.6)]" />
                <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wide">12 непрочитаних</span>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* Card 3 — LIGHT: Dependence */}
        <div className="group bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col min-h-[340px] justify-between reveal-on-scroll">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:moon-sleep-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Без тебе система зупиняється</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Не вийшов на роботу день — заявки без відповіді. Поїхав у відпустку — продажі стали.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center py-4 relative flex-grow">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-slate-700 tabular-nums leading-none">23:47</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">пятниця</div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">офлайн</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — DARK + leak: Tech chaos */}
        <DarkCard
          className="min-h-[340px] reveal-on-scroll"
          leaks={[
            { position: 'bottom-left', color: 'rgba(255, 107, 53, 0.45)', size: 320, blur: 70 },
          ]}
        >
          <div className="p-8 flex flex-col justify-between h-full">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 text-orange-400/80">
                <iconify-icon icon="solar:settings-linear" width="24" height="24" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Технічно зібрати самому — окрема професія</h3>
              <p className="text-sm text-white/60 font-normal leading-relaxed">
                Бот, лендинг, інтеграції оплат, CRM. Тижні вивчення — або підрядники, що тягнуть бюджет і строки.
              </p>
            </div>

            <div className="mt-8 relative flex flex-col items-center justify-center flex-grow">
              <div className="relative w-full h-24">
                <div className="absolute top-0 left-2 w-12 h-12 bg-white border border-white/20 rounded-xl shadow-lg flex items-center justify-center -rotate-6 group-hover:-rotate-12 transition-transform duration-500">
                  <iconify-icon icon="simple-icons:manychat" width="20" height="20" className="text-slate-700" />
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-white/20 rounded-xl shadow-lg flex items-center justify-center rotate-3 transition-transform duration-500 delay-75">
                  <iconify-icon icon="simple-icons:stripe" width="20" height="20" className="text-slate-700" />
                </div>
                <div className="absolute top-0 right-2 w-12 h-12 bg-white border border-white/20 rounded-xl shadow-lg flex items-center justify-center -rotate-3 transition-transform duration-500 delay-100">
                  <iconify-icon icon="simple-icons:zapier" width="20" height="20" className="text-slate-700" />
                </div>
                <div className="absolute bottom-0 left-8 w-12 h-12 bg-white border border-white/20 rounded-xl shadow-lg flex items-center justify-center rotate-6 transition-transform duration-500 delay-150">
                  <iconify-icon icon="simple-icons:googleads" width="20" height="20" className="text-slate-700" />
                </div>
                <div className="absolute bottom-0 right-8 w-12 h-12 bg-white border border-white/20 rounded-xl shadow-lg flex items-center justify-center -rotate-6 transition-transform duration-500 delay-200">
                  <iconify-icon icon="simple-icons:notion" width="20" height="20" className="text-slate-700" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-rose-500/20 border border-rose-400/40 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-rose-300">?</span>
                </div>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* Card 5 — LIGHT: Scale ceiling */}
        <div className="group bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-8 flex flex-col min-h-[340px] justify-between reveal-on-scroll">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:graph-up-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Дохід упирається в стелю</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Скільки б заявок не приходило — більше за певну кількість на тиждень не відпрацюєш. Час — обмежений ресурс.
            </p>
          </div>

          <div className="mt-8 flex items-end justify-center relative flex-grow">
            <svg viewBox="0 0 200 100" className="w-full max-w-[200px] h-24" preserveAspectRatio="none">
              <line x1="0" y1="100" x2="200" y2="100" stroke="rgb(226,232,240)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgb(226,232,240)" strokeWidth="1" />
              <line x1="0" y1="35" x2="200" y2="35" stroke="rgb(226,232,240)" strokeWidth="1" strokeDasharray="3 3" />
              <path
                d="M 0 95 Q 40 90 70 60 T 130 35 L 200 33"
                stroke="rgb(251,146,60)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="200" cy="33" r="4" fill="rgb(251,146,60)" />
              <circle cx="200" cy="33" r="8" fill="rgb(251,146,60)" fillOpacity="0.2" />
            </svg>
            <div className="absolute top-2 right-2 text-[9px] font-semibold text-slate-400 uppercase tracking-wider bg-white border border-slate-200 px-2 py-1 rounded-full">
              Плато
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
