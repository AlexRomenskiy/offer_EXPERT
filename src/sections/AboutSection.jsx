import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function AboutSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 pt-32 pb-32 scroll-mt-24" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-slate-200/40 blur-2xl opacity-60" />
            <div
              className="relative aspect-[4/5] max-h-[480px] rounded-[2rem] overflow-hidden glass-panel-static"
              aria-label="Фото Олександра — додасте пізніше"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm">
                  <iconify-icon icon="solar:user-circle-linear" className="text-4xl text-slate-400" />
                </div>
                <p className="text-sm font-light text-slate-400 max-w-[200px] leading-relaxed">
                  Місце для вашого фото
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 order-1 lg:order-2 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/60 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-slate-500 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Про мене
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Олександр
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white/70 backdrop-blur-md text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:calendar-linear" className="text-amber-500" />
              <span className="font-heading font-semibold text-slate-900">6+</span>
              <span className="text-slate-500 font-light">років у маркетингу</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white/70 backdrop-blur-md text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:global-linear" className="text-amber-500" />
              <span className="font-heading font-semibold text-slate-900">5+</span>
              <span className="text-slate-500 font-light">країн</span>
            </span>
          </div>

          <div className="space-y-5 text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
            <p>
              <span className="text-slate-800 font-normal">6+ років у маркетингу</span> — від управління командами до побудови AI-воронок.
            </p>
            <p>
              Працював з проєктами в <span className="text-slate-800 font-normal">5+ країнах</span>. Зараз фокусуюсь на одному: допомагаю експертам перетворити знання на{' '}
              <span className="text-slate-800 font-normal">систему, яка продає</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
