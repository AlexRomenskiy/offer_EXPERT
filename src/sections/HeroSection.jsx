import { useState, useCallback } from 'react';

const steps = [
  { num: '01', label: 'Розбір ситуації', icon: 'solar:chat-round-dots-linear' },
  { num: '02', label: 'Збірка системи', icon: 'solar:settings-minimalistic-linear' },
  { num: '03', label: 'Продажі на автопілоті', icon: 'solar:rocket-linear' },
];

const cardImages = [
  'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
];

const cardIcons = ['solar:wallet-linear', 'solar:chart-square-linear', 'solar:rocket-linear'];

export default function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollTo = useCallback((e, selector) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full flex-grow relative z-10 pb-8 lg:pb-0">
      {/* Left Column: Text */}
      <div className="lg:col-span-7 flex flex-col pt-4 relative justify-center">
        {/* Social Proof Pill */}
        <div className="inline-flex bg-white border border-slate-200 w-max rounded-full mb-8 p-1.5 shadow-sm items-center [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both]">
          <div className="flex -space-x-2 mr-3">
            <img src="https://i.pravatar.cc/100?img=1" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <img src="https://i.pravatar.cc/100?img=3" alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 text-slate-700 flex items-center justify-center text-[9px] font-semibold tracking-tighter">
              50+
            </div>
          </div>
          <span className="text-xs font-medium text-slate-500 tracking-wide pr-3">
            <span className="text-slate-900">Експертів</span> вже автоматизували продажі
          </span>
        </div>

        {/* Headline */}
        <h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-normal text-slate-900 tracking-tight mb-8 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
          Збираю систему
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 font-light">
            продажів для експертів
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-slate-500 font-normal max-w-md mb-10 leading-relaxed tracking-wide border-l-2 border-slate-200 pl-6 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both]">
          Автоматизована воронка, яка працює 24/7: від першого контакту до оплати — без вашої участі.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
          <a
            href="#final-cta"
            onClick={(e) => scrollTo(e, '#final-cta')}
            className="btn-amber group"
          >
            <span className="text-sm font-medium tracking-tight">Записатися на розбір</span>
            <span className="btn-amber-icon">
              <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, '#pricing')}
            className="hover:bg-slate-50 hover:text-slate-900 transition-all flex text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full py-3 px-6 shadow-sm gap-2 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Переглянути тарифи</span>
            <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
          </a>
        </div>

        {/* Footer Stats with Curved Lines */}
        <div className="flex flex-wrap gap-2 md:gap-6 mt-auto items-center [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Запуск</p>
              <p className="text-sm text-slate-900 font-medium">від 7 днів</p>
            </div>
            <div className="curve-separator ml-4 md:ml-8" />
          </div>
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Платформи</p>
              <p className="text-sm text-slate-900 font-medium">Telegram / Insta</p>
            </div>
            <div className="curve-separator ml-4 md:ml-8" />
          </div>
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Оплати</p>
              <p className="text-sm text-slate-900 font-medium">Будь-які системи</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Card Stack + Steps */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end lg:pt-16 h-full pt-10 lg:pr-6 justify-center w-full">
        {/* Stacked Cards */}
        <div className="relative mb-12 w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] group perspective-1000 [animation:fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
          <div className="absolute -inset-8 bg-orange-500/10 blur-3xl -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          <div className="relative w-full h-full">
            {[2, 1, 0].map((cardIdx) => {
              const offset = cardIdx - activeStep;
              let transform, zIndex, opacity;

              if (offset === 0) {
                transform = 'translateY(0px) scale(1)';
                zIndex = 30;
                opacity = 1;
              } else if (offset > 0) {
                transform = `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`;
                zIndex = 30 - offset * 10;
                opacity = 1 - offset * 0.2;
              } else {
                transform = 'translateY(24px) scale(0.9)';
                zIndex = 10;
                opacity = 0;
              }

              return (
                <div
                  key={cardIdx}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl origin-bottom bg-white border border-slate-200 transition-all duration-500"
                  style={{ transform, zIndex, opacity }}
                >
                  <img
                    src={cardImages[cardIdx]}
                    className="w-full h-full object-cover opacity-30 mix-blend-multiply"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
                  {cardIdx === activeStep && (
                    <div className="flex absolute inset-0 items-center justify-center">
                      <div className="flex transition-transform hover:scale-110 bg-white/80 w-14 h-14 rounded-full shadow-lg backdrop-blur-md items-center justify-center border border-slate-200">
                        <iconify-icon icon={cardIcons[cardIdx]} className="text-slate-700" width="24" height="24" />
                      </div>
                    </div>
                  )}
                  {cardIdx === 2 && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-orange-50 border border-orange-200 text-orange-500 text-[10px] font-semibold rounded uppercase tracking-wider">
                      Live
                    </div>
                  )}
                  {cardIdx === 1 && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Збірка...</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Steps */}
        <div className="flex flex-col gap-3 w-full max-w-[320px]">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`step-item flex cursor-pointer rounded-xl p-3 items-center border border-transparent hover:bg-black/[0.02] group ${isActive ? 'active' : ''}`}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: isActive ? '#f97316' : 'transparent',
                    color: isActive ? '#fff' : '#94a3b8',
                  }}
                >
                  {step.num}
                </div>
                <span
                  className="text-sm font-medium transition-colors duration-300 ml-4 group-hover:text-slate-900"
                  style={{ color: isActive ? '#0f172a' : '#64748b' }}
                >
                  {step.label}
                </span>
                <iconify-icon
                  icon={step.icon}
                  width="16"
                  height="16"
                  className={`ml-auto transition-all duration-300 ${
                    isActive ? 'opacity-100 text-orange-500' : 'opacity-0 group-hover:opacity-50 text-slate-400'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
