import { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

export default function AboutSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="about" className="w-full scroll-mt-24" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              className="relative aspect-[4/5] max-h-[480px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/50"
              aria-label="Фото Олександра"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                  <iconify-icon icon="solar:user-circle-linear" width="48" height="48" className="text-slate-300" />
                </div>
                <p className="text-sm font-normal text-slate-400 max-w-[200px] leading-relaxed">
                  Місце для вашого фото
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 order-1 lg:order-2 reveal-on-scroll">
          <div className="flex items-center gap-2 mb-6">
            <iconify-icon icon="solar:stars-linear" width="14" height="14" className="text-orange-500" />
            <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">Про мене</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Олександр
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:calendar-linear" width="16" height="16" className="text-orange-500" />
              <span className="font-semibold text-slate-900">6+</span>
              <span className="text-slate-500 font-normal">років у маркетингу</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white text-sm text-slate-700 shadow-sm">
              <iconify-icon icon="solar:global-linear" width="16" height="16" className="text-orange-500" />
              <span className="font-semibold text-slate-900">5+</span>
              <span className="text-slate-500 font-normal">країн</span>
            </span>
          </div>

          <div className="space-y-5 text-base text-slate-500 font-normal leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
            <p>
              <span className="text-slate-800 font-medium">6+ років у маркетингу</span> — від управління командами до побудови AI-воронок.
            </p>
            <p>
              Працював з проєктами в <span className="text-slate-800 font-medium">5+ країнах</span>. Зараз фокусуюсь на одному: допомагаю експертам перетворити знання на{' '}
              <span className="text-slate-800 font-medium">систему, яка продає</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
