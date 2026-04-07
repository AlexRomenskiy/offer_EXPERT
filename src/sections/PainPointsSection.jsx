import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function PainPointsSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="pain-points" className="max-w-[1400px] mx-auto pt-20 pb-32 px-6 scroll-mt-24" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 tracking-tight mb-4">
          Досить бути менеджером з продажу свого продукту
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
          Ти — експерт. Але замість того, щоб робити те, в чому ти найкращий:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 min-h-[800px] gap-x-8 gap-y-8">
        {/* Card 1: Охоплення */}
        <div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24" class="text-slate-700" />
            </div>
            <h3 className="text-3xl font-medium text-slate-900 mb-3 tracking-tight mt-4">
              Про тебе мало знають
            </h3>
            <p className="text-slate-500 text-lg font-light">
              Маєш потужний досвід, але через відсутність системи про це знає лише вузьке коло людей.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-6 h-auto md:h-44">
            <div className="flex-1 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-sm min-h-[160px]">
              <div className="flex justify-between items-center w-full mb-4 relative z-10">
                <div className="text-xs font-medium text-slate-500 tracking-wider uppercase">Охоплення</div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-full pt-4 relative z-10">
                {[
                  { h: '30%', bg: 'bg-slate-400/10' },
                  { h: '50%', bg: 'bg-slate-400/20' },
                  { h: '80%', bg: 'bg-slate-400/30' },
                  { h: '100%', bg: 'bg-amber-400/50' },
                  { h: '60%', bg: 'bg-slate-400/20' },
                  { h: '40%', bg: 'bg-slate-400/10' },
                  { h: '45%', bg: 'bg-slate-400/10' },
                  { h: '20%', bg: 'bg-slate-400/5' },
                ].map((bar, i) => (
                  <div key={i} className={`${bar.bg} w-full rounded-t-sm`} style={{ height: bar.h }} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white/60 border border-white/80 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
              <div className="text-xs font-medium text-slate-500 tracking-wider uppercase mb-1">Поточний стан</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-700">
                  <iconify-icon icon="solar:danger-triangle-linear" width="16" height="16" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-1.5 w-full bg-slate-300 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Ресурс */}
        <div className="glass-panel flex flex-col reveal-on-scroll group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:battery-charge-linear" width="24" height="24" class="text-slate-700" />
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight mt-4">Дохід залежить від енергії</h3>
            <p className="text-slate-500 font-light">Не було сил сьогодні — значить, не було продажів.</p>
          </div>
          <div className="mt-10 flex w-full h-44 relative items-end justify-center"
            style={{
              maskImage: 'linear-gradient(180deg, transparent, black 40%, black 100%, transparent)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent, black 40%, black 100%, transparent)',
            }}
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-4 bg-slate-50/50 w-[85%] h-24 border-slate-300/30 border rounded-xl absolute bottom-16 shadow-sm" />
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2 bg-slate-50/80 w-[92%] h-24 border-slate-200/50 border rounded-xl absolute bottom-8 shadow-md backdrop-blur-md" />
            <div className="absolute w-full bottom-0 h-24 bg-white/80 border border-white/80 rounded-xl backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center px-6 gap-4">
              <div className="flex bg-slate-50 w-12 h-12 border-slate-200 border rounded-xl shadow-inner items-center justify-center">
                <iconify-icon icon="solar:chart-square-linear" width="24" height="24" class="text-slate-500" />
              </div>
              <div className="space-y-2.5 flex-1">
                <div className="h-2.5 bg-slate-300/80 w-1/2 rounded-full" />
                <div className="h-2 w-1/3 bg-slate-200/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Монетизація */}
        <div className="glass-panel flex flex-col reveal-on-scroll group rounded-[2rem] p-10 justify-between">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:notes-linear" width="24" height="24" class="text-slate-700" />
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight mt-4">Відсутність пасивного доходу</h3>
            <p className="text-slate-500 font-light">Немає продуктів, які продаються самі. Заробіток іде лише тоді, коли ти на зв&apos;язку.</p>
          </div>
          <div className="mt-10 space-y-3">
            <div className="flex items-center justify-between bg-white/70 border border-white p-4 rounded-xl shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <iconify-icon icon="solar:wad-of-money-linear" width="16" height="16" class="text-slate-600" />
                </div>
                <div className="h-2.5 w-24 bg-slate-300 rounded-full" />
              </div>
              <div className="w-2 h-2 rounded-full bg-red-400" />
            </div>
            <div className="flex items-center justify-between bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm opacity-50">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                  <iconify-icon icon="solar:wad-of-money-linear" width="16" height="16" />
                </div>
                <div className="h-2 w-28 bg-slate-200 rounded-full" />
              </div>
              <div className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* Card 4: Рутина */}
        <div className="glass-panel md:col-span-2 flex flex-col reveal-on-scroll group rounded-[2rem] p-10 gap-6">
          <div>
            <div className="flex bg-slate-100 w-12 h-12 border-slate-200 border rounded-full shadow-inner items-center justify-center">
              <iconify-icon icon="solar:server-linear" width="24" height="24" class="text-slate-700" />
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-2 mt-4">Технічний хаос</h3>
            <p className="text-slate-500 max-w-lg font-light">
              Ти класний фахівець, але не розумієш, як усе це втілити технічно. Витрачаєш час на рутину замість того, щоб робити те, що любиш.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'solar:chat-square-linear', label: 'Повідомлення' },
              { icon: 'solar:folder-open-linear', label: 'Матеріали' },
              { icon: 'solar:card-linear', label: 'Оплати' },
              { icon: 'solar:settings-linear', label: 'Налаштування' },
            ].map((item) => (
              <div key={item.icon} className="bg-white/60 border border-white/80 rounded-xl p-5 flex flex-col items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                  <iconify-icon icon={item.icon} width="20" height="20" />
                </div>
                <span className="text-xs font-medium text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
