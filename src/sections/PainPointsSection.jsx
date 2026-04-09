import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function PainPointsSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="pain-points" className="flex flex-col gap-10 z-10 w-full relative scroll-mt-24" ref={sectionRef}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1 reveal-on-scroll">
        <div className="max-w-2xl">
          <h2 className="md:text-5xl text-3xl font-normal text-slate-900 tracking-tight mb-4">
            Досить бути
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-600"> менеджером</span>
          </h2>
          <p className="leading-relaxed text-base font-normal text-slate-500">
            Ти — експерт. Але замість того, щоб робити те, в чому ти найкращий,
            ти витрачаєш час на рутину.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-xl shadow-slate-200/50 bg-slate-100 rounded-[2rem] gap-px border border-slate-200">

        {/* Card 1: Охоплення */}
        <div className="group hover:bg-slate-50/80 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Про тебе мало знають</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Маєш потужний досвід, але через відсутність системи про це знає лише вузьке коло людей.
            </p>
          </div>

          <div className="flex flex-col flex-grow mt-8 py-4 relative items-center justify-center">
            <div className="flex gap-4 mb-6 relative z-10">
              <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
            </div>
            <div className="flex text-[10px] uppercase group-hover:scale-105 transition-transform font-semibold text-slate-900 tracking-wider bg-white border border-slate-200 rounded-full mt-2 px-4 py-2 shadow-sm gap-2 items-center">
              <iconify-icon icon="solar:danger-triangle-linear" width="14" height="14" className="text-slate-400" />
              <span>Мало охоплення</span>
            </div>
          </div>
        </div>

        {/* Card 2: Енергія (Span 2) */}
        <div className="group relative bg-white hover:bg-slate-50/80 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px] md:col-span-2 overflow-hidden">
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:battery-charge-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Дохід залежить від енергії</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Не було сил сьогодні — значить, не було продажів. Немає системи, яка працює без тебе.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-full md:w-2/3 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            <div className="absolute top-[20%] right-12 w-48 h-32 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 rotate-6 flex flex-col p-4 group-hover:rotate-3 group-hover:scale-105 transition-all duration-700 ease-out z-0">
              <div className="flex items-center gap-2 mb-3">
                <iconify-icon icon="solar:chart-square-linear" width="20" height="20" className="text-slate-400" />
                <span className="text-xs font-semibold text-slate-600">Дохід</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-orange-400 rounded-full" />
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-slate-300 rounded-full" />
                </div>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <span className="text-[10px] text-slate-400 font-medium">Стабільність</span>
                <span className="text-sm font-semibold text-slate-900">Низька</span>
              </div>
            </div>
            <div className="absolute bottom-[15%] right-32 w-16 h-16 bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-200/50 -rotate-12 flex items-center justify-center group-hover:-rotate-6 group-hover:translate-y-2 transition-all duration-700 delay-100 z-20">
              <iconify-icon icon="solar:battery-charge-linear" width="32" height="32" className="text-red-400" />
            </div>
          </div>
        </div>

        {/* Card 3: Пасивний дохід */}
        <div className="group relative bg-white hover:bg-slate-50/80 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:notes-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Відсутність пасивного доходу</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Немає продуктів, які продаються самі. Заробіток іде лише тоді, коли ти на зв'язку.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center py-4 relative flex-grow">
            <div className="group-hover:opacity-100 transition-opacity opacity-60 w-48 h-32 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center z-10 shadow-sm ring-4 ring-white border border-slate-200">
                <iconify-icon icon="solar:wallet-money-linear" width="20" height="20" className="text-slate-500" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-red-300 rounded-full" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-300 rounded-full" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-300 rounded-full" />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-red-300 rounded-full" />
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none text-slate-200" style={{ zIndex: 0 }}>
                <line x1="96" y1="64" x2="96" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="96" y1="64" x2="96" y2="112" stroke="currentColor" strokeWidth="1.5" />
                <line x1="96" y1="64" x2="16" y2="64" stroke="currentColor" strokeWidth="1.5" />
                <line x1="96" y1="64" x2="176" y2="64" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4: Технічний хаос */}
        <div className="group hover:bg-slate-50/80 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:server-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Технічний хаос</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Не розумієш, як втілити усе технічно. Витрачаєш час на рутину замість улюбленої справи.
            </p>
          </div>

          <div className="mt-8 relative flex flex-col items-center justify-center flex-grow">
            <div className="w-full bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex items-center gap-3 relative z-10 group-hover:shadow-md transition-all duration-300">
              <iconify-icon icon="solar:magnifer-linear" width="20" height="20" className="text-slate-400" />
              <div className="h-2 w-20 bg-slate-100 rounded-full" />
              <div className="ml-auto flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-slate-400">???</span>
              </div>
            </div>
            <div className="absolute -left-2 bottom-8 w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500 delay-100 z-20">
              <iconify-icon icon="solar:settings-linear" width="20" height="20" className="text-white" />
            </div>
          </div>
        </div>

        {/* Card 5: Рутина */}
        <div className="group hover:bg-slate-50/80 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-400">
              <iconify-icon icon="solar:chat-square-linear" width="24" height="24" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Ручна робота з кожним</h3>
            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              Повідомлення, матеріали, оплати — все вручну. Кожен клієнт забирає час.
            </p>
          </div>

          <div className="mt-8 flex items-end justify-center relative flex-grow">
            <div className="flex overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] transition-shadow duration-500 bg-gradient-to-b from-slate-50 to-slate-100 w-24 h-24 border-slate-200 border rounded-full relative scale-50 items-center justify-center">
              <iconify-icon icon="solar:inbox-unread-linear" width="40" height="40" className="text-slate-400" />
            </div>
            <div className="absolute top-0 right-4 flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(248,113,113,0.4)]" />
              <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide">12 запитів</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
