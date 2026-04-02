import { useState, useEffect } from 'react';

export default function PricingSection() {
  const [typewriterText, setTypewriterText] = useState('');
  const [activeDotIdx, setActiveDotIdx] = useState(0);

  useEffect(() => {
    const phrases = ["формат роботи", "шлях до масштабу", "рівень системи"];
    let pIdx = 0, cIdx = 0, isDeleting = false;
    let timeoutId;

    function type() {
      const current = phrases[pIdx];
      const newText = isDeleting ? current.substring(0, cIdx - 1) : current.substring(0, cIdx + 1);
      setTypewriterText(newText);
      cIdx = isDeleting ? cIdx - 1 : cIdx + 1;
      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && cIdx === current.length) {
        speed = 2500;
        isDeleting = true;
      } else if (isDeleting && cIdx === 0) {
        isDeleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        speed = 500;
      }
      timeoutId = setTimeout(type, speed);
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDotIdx(prev => (prev + 1) % 3);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const dotStyle = (i, mirror = false) => {
    const active = mirror ? (2 - activeDotIdx) === i : activeDotIdx === i;
    return {
      opacity: active ? 0.8 : 0.2,
      boxShadow: active ? '0 0 6px rgba(249,115,22,0.5)' : 'none'
    };
  };

  return (
    <section className="overflow-hidden flex-grow text-zinc-900 bg-[#FAFAFA] w-full border-neutral-200/60 border-t pt-18 pb-24 relative top-14">
      <div className="[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60"></div>

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-orange-200/40 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col z-10 text-center mt-18 mb-16 pt-15 pb-15 relative items-center">
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="flex gap-1.5 opacity-60">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-orange-600 transition-all duration-300" style={dotStyle(i)}></div>
              ))}
            </div>
            <div className="w-14 h-14 bg-gradient-to-b from-white to-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-orange-100 shadow-[inset_0_2px_5px_rgba(249,115,22,0.02),0_10px_15px_-3px_rgba(249,115,22,0.05)]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)', backgroundSize: '4px 4px' }}></div>
              <iconify-icon icon="solar:layers-linear" className="text-2xl text-orange-500 relative z-10" style={{ filter: 'drop-shadow(0 0 6px rgba(249,115,22,0.4))' }}></iconify-icon>
            </div>
            <div className="flex gap-1.5 opacity-60">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-orange-600 transition-all duration-300" style={dotStyle(i, true)}></div>
              ))}
            </div>
          </div>
          <div className="text-center h-28 sm:h-24">
            <h2 className="text-4xl md:text-5xl tracking-tight text-zinc-900 font-medium mb-4" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              Обери свій <span className="block sm:inline mt-1 sm:mt-0"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-light">{typewriterText}</span><span className="animate-pulse text-orange-500">_</span></span>
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-2 mt-2 backdrop-blur-sm">
              <iconify-icon icon="solar:bolt-linear" className="text-orange-500 text-base"></iconify-icon>
              <span className="text-sm text-orange-700 font-normal tracking-wide">Я працюю одночасно лише з 4-5 клієнтами.</span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
          {/* Plan 0 */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#f8f8f8] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_30px_-10px_rgba(0,0,0,0.1)] group">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-200/60 pb-5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200/50 group-hover:bg-white group-hover:border-zinc-300 transition-colors">
                <iconify-icon icon="solar:pen-linear" className="text-xl text-zinc-500"></iconify-icon>
              </div>
              <h3 className="text-lg tracking-tight text-zinc-900 font-normal">Пакет 0: Стратегія</h3>
            </div>
            <p className="text-sm text-zinc-500 font-light mb-6 min-h-[44px]">Глибокий аналіз точки «А», розробка позиціонування та план масштабування.</p>
            <div className="mb-8 flex flex-col gap-1">
              <div className="text-4xl tracking-tighter text-zinc-900 font-light">$150</div>
              <div className="text-sm text-transparent opacity-0 font-light">Спейсер</div>
            </div>
            <button className="w-full bg-gradient-to-b from-white to-zinc-50 border border-zinc-200 rounded-xl py-3 text-sm font-normal transition-all active:scale-[0.98] text-zinc-700 hover:text-zinc-900 mb-8 shadow-sm">
              Обрати пакет
            </button>
            <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}></div>
            <ul className="space-y-4 flex-1 text-sm font-light text-zinc-600">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:check-circle-linear" className="text-lg text-zinc-400 shrink-0 mt-0.5"></iconify-icon>
                <span><strong className="text-zinc-900 font-normal">Результат:</strong> Чітка дорожня карта розвитку на 3 місяці.</span>
              </li>
            </ul>
          </div>

          {/* Plan 1 */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#f8f8f8] flex flex-col transition-all duration-500 ease-out hover:-translate-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_30px_-10px_rgba(0,0,0,0.1)] group">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-200/60 pb-5">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200/50 group-hover:bg-white group-hover:border-zinc-300 transition-colors">
                <iconify-icon icon="solar:rocket-linear" className="text-xl text-zinc-500"></iconify-icon>
              </div>
              <h3 className="text-lg tracking-tight text-zinc-900 font-normal">Пакет 1: Фундамент</h3>
            </div>
            <p className="text-sm text-zinc-500 font-light mb-6 min-h-[44px]">Стратегія + посадкова сторінка + бот для видачі безкоштовного матеріалу.</p>
            <div className="mb-8 flex flex-col gap-1">
              <div className="text-4xl tracking-tighter text-zinc-900 font-light">$495</div>
              <div className="text-sm text-zinc-500 font-light">5–7 робочих днів</div>
            </div>
            <button className="w-full bg-gradient-to-b from-white to-zinc-50 border border-zinc-200 rounded-xl py-3 text-sm font-normal transition-all active:scale-[0.98] text-zinc-700 hover:text-zinc-900 mb-8 shadow-sm">
              Обрати пакет
            </button>
            <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}></div>
            <ul className="space-y-4 flex-1 text-sm font-light text-zinc-600">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:check-circle-linear" className="text-lg text-zinc-400 shrink-0 mt-0.5"></iconify-icon>
                <span><strong className="text-zinc-900 font-normal">ROI:</strong> Зрозуміла точка входу, збір контактів потенційних клієнтів.</span>
              </li>
            </ul>
          </div>

          {/* Plan 2 */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white to-[#fff8f4] flex flex-col md:-translate-y-4 transition-all duration-500 ease-out hover:-translate-y-6 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(249,115,22,0.3),0_20px_40px_-15px_rgba(234,88,12,0.15)] z-10 border border-transparent">
            <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-orange-500/50 animate-pulse"></div>
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-orange-500/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="flex items-center justify-between mb-4 border-b border-orange-200/50 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-200">
                  <iconify-icon icon="solar:crown-linear" className="text-xl text-orange-500"></iconify-icon>
                </div>
                <h3 className="text-lg tracking-tight text-zinc-900 font-normal">Пакет 2: Генератор</h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-md bg-orange-100/80 px-2 py-1 text-[10px] font-normal tracking-wider uppercase text-orange-700 border border-orange-200/60 shadow-sm shrink-0">
                Популярний
              </span>
            </div>

            <p className="text-sm text-zinc-600 font-light mb-6 min-h-[44px]">Стратегія + комплекс сторінок + бот + автоматичний прийом оплат + повна воронка.</p>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-xl text-zinc-500 font-light">від</span>
              <span className="text-4xl tracking-tighter text-zinc-900 font-light">$990</span>
              <span className="text-sm text-zinc-500 font-light ml-1">/ 14 днів</span>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl py-3.5 px-4 text-sm font-normal transition-all active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_-5px_rgba(234,88,12,0.3),0_0_0_1px_#c2410c]">
                <iconify-icon icon="solar:users-group-rounded-linear" className="text-base opacity-90"></iconify-icon>
                <span>Обрати пакет</span>
              </button>
              <button className="w-full inline-flex items-center justify-center gap-2 bg-white/60 border border-orange-200/80 hover:bg-white text-zinc-700 rounded-xl py-3 px-4 text-sm font-normal transition-all active:scale-[0.98] backdrop-blur-sm shadow-sm">
                <iconify-icon icon="solar:chat-round-line-linear" className="text-base opacity-70"></iconify-icon>
                <span>Обговорити проєкт</span>
              </button>
            </div>

            <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}></div>

            <ul className="space-y-4 flex-1 text-sm font-light text-zinc-600">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:check-circle-linear" className="text-lg text-orange-500 shrink-0 mt-0.5"></iconify-icon>
                <span><strong className="text-zinc-900 font-normal">ROI:</strong> Пасивний дохід. Система окупується з 2-3 продажів.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bonus Banner placeholder */}
        <div className="max-w-6xl mx-auto mt-12 z-10 relative"></div>
      </div>
    </section>
  );
}
