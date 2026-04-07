import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function BeforeAfterSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section className="max-w-[1400px] mx-auto pt-20 pb-32 px-6" ref={sectionRef}>
      <div className="mb-16 text-center reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 tracking-tight mb-4">
          Від хаосу до системи
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
          Подивіться, як виглядає трансформація продажів для експерта.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card: До */}
        <div className="glass-panel rounded-[2rem] p-10 flex flex-col min-h-[420px] reveal-on-scroll group"
          style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,241,242,0.4) 100%)' }}
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-heading font-medium text-slate-900 tracking-tight">До</h3>
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100 shadow-sm">
                <iconify-icon icon="solar:danger-triangle-linear" className="text-xl" />
              </div>
            </div>
            <p className="text-slate-500 font-light leading-relaxed">
              Ручні продажі, головний біль та нерозуміння наступного кроку.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-3 items-center justify-end">
            <div className="w-[85%] bg-white/60 backdrop-blur-md border border-rose-100/50 rounded-xl p-4 shadow-sm transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500 translate-y-4 group-hover:translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-rose-100/50 flex items-center justify-center text-rose-400">
                  <iconify-icon icon="solar:close-circle-linear" className="text-sm" />
                </div>
                <div className="h-2 w-24 bg-rose-100 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                <div className="h-1.5 w-4/5 bg-slate-100 rounded-full" />
              </div>
            </div>
            <div className="w-[90%] bg-white/80 backdrop-blur-md border border-rose-100/80 rounded-xl p-4 shadow-md transform rotate-1 group-hover:rotate-2 transition-transform duration-500 z-10 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <iconify-icon icon="solar:chat-round-line-linear" className="text-sm" />
                </div>
                <div className="h-2 w-32 bg-slate-100 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                <div className="h-1.5 w-2/3 bg-slate-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Card: Після */}
        <div className="glass-panel rounded-[2rem] p-10 flex flex-col min-h-[420px] reveal-on-scroll group"
          style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(240,253,244,0.4) 100%)' }}
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-heading font-medium text-slate-900 tracking-tight">Після</h3>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                <iconify-icon icon="solar:rocket-linear" className="text-xl" />
              </div>
            </div>
            <p className="text-slate-500 font-light leading-relaxed">
              Зрозумілі смисли, чіткий напрямок розвитку, автоматична видача продуктів та стабільний дохід.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-end">
            <div className="w-full bg-white/90 backdrop-blur-md border border-emerald-100/80 rounded-xl p-5 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-700 animate-float" style={{ animationDelay: '-3s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100/50">
                    <iconify-icon icon="solar:chart-square-linear" className="text-lg" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-widest font-medium mb-0.5">Статус</div>
                    <div className="text-sm text-slate-800 font-medium tracking-tight">Стабільний дохід</div>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 flex items-center gap-1.5 shadow-sm">
                  <iconify-icon icon="solar:bolt-linear" className="text-emerald-500" /> Автоматизовано
                </span>
              </div>
              <div className="h-px w-full bg-slate-100 mb-4" />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500 text-sm" />
                  <div className="h-1.5 w-3/4 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-full rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500 text-sm" />
                  <div className="h-1.5 w-2/3 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-full rounded-full" />
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
