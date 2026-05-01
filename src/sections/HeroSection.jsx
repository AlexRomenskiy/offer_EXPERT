import { useState, useCallback } from 'react';

const steps = [
  { num: '01', label: 'За 30 хв розумієте, де втікають гроші', icon: 'solar:magnifer-linear' },
  { num: '02', label: 'Отримуєте робочу воронку за 7–14 днів', icon: 'solar:settings-minimalistic-linear' },
  { num: '03', label: 'Продажі йдуть без твоєї участі', icon: 'solar:rocket-linear' },
];

const platforms = [
  { name: 'Telegram', icon: 'simple-icons:telegram' },
  { name: 'Instagram', icon: 'simple-icons:instagram' },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp' },
  { name: 'TikTok', icon: 'simple-icons:tiktok' },
  { name: 'Messenger', icon: 'simple-icons:messenger' },
  { name: 'Email', icon: 'solar:letter-linear' },
  { name: 'SMS', icon: 'solar:chat-round-line-linear' },
];

function AuditCard() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Розбір ситуації</span>
        <span className="text-[10px] font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">30 хв</span>
      </div>
      <div className="text-base font-semibold text-slate-900 mb-3 tracking-tight">Точки втрат</div>
      <ul className="space-y-2 text-xs text-slate-600">
        <li className="flex items-start gap-2">
          <iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon>
          <span>Лідам відповідаєте вручну в DM</span>
        </li>
        <li className="flex items-start gap-2">
          <iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon>
          <span>Немає сторінки, що продає</span>
        </li>
        <li className="flex items-start gap-2">
          <iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon>
          <span>Оплати — на банківські реквізити</span>
        </li>
        <li className="flex items-start gap-2">
          <iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon>
          <span>Доступ до продукту — вручну</span>
        </li>
      </ul>
    </div>
  );
}

function BuildCard() {
  const items = [
    { label: 'Лендинг продукту', done: true },
    { label: 'Чат-бот у мессенджерах', done: true },
    { label: 'Прийом оплат', done: true },
    { label: 'Автоматична видача', done: false },
  ];
  return (
    <div className="absolute inset-0 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Збірка системи</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">live</span>
        </div>
      </div>
      <div className="text-base font-semibold text-slate-900 mb-1 tracking-tight">3 з 4 модулів</div>
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-orange-500 rounded-full" style={{ width: '75%' }} />
      </div>
      <ul className="space-y-1.5 text-xs">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <iconify-icon
              icon={it.done ? 'solar:check-circle-bold' : 'solar:clock-circle-linear'}
              className={it.done ? 'text-orange-500' : 'text-slate-300'}
              width="14"
            ></iconify-icon>
            <span className={it.done ? 'text-slate-700' : 'text-slate-400'}>{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SalesCard() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Сьогодні</span>
        <iconify-icon icon="solar:graph-up-linear" className="text-orange-500" width="14"></iconify-icon>
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-xl text-orange-500 font-medium">+$</span>
        <span className="text-3xl font-semibold tracking-tight text-orange-500 leading-none">891</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-slate-50 rounded-lg px-2.5 py-1.5">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Заявок</div>
          <div className="text-sm font-semibold text-slate-900">12</div>
        </div>
        <div className="bg-slate-50 rounded-lg px-2.5 py-1.5">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Продажів</div>
          <div className="text-sm font-semibold text-slate-900">3</div>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
          <iconify-icon icon="solar:card-linear" className="text-orange-500" width="14"></iconify-icon>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-medium text-slate-800 truncate">Оплата $297 · Олена К.</div>
          <div className="text-[10px] text-slate-400">2 хв тому</div>
        </div>
      </div>
    </div>
  );
}

const cardComponents = [AuditCard, BuildCard, SalesCard];

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
        {/* Headline */}
        <h1 className="leading-[0.95] lg:text-[4.5rem] text-4xl font-normal text-slate-900 tracking-tight mb-8 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
          Ти експерт.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 font-light">
            Не менеджер з продажу і не айтішник.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-slate-500 font-normal max-w-xl mb-6 leading-relaxed tracking-wide border-l-2 border-slate-200 pl-6 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both]">
          Збираю систему під ключ: лендинг, чат-боти у мессенджерах, прийом оплат і автоматичну видачу продукту. Поки система продає — ти займаєшся експертизою.
        </p>

        {/* Platform strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Працює з</span>
          <div className="flex items-center gap-3">
            {platforms.map((p) => (
              <div key={p.name} className="group relative" title={p.name}>
                <iconify-icon
                  icon={p.icon}
                  width="18"
                  height="18"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                ></iconify-icon>
              </div>
            ))}
          </div>
          <span className="text-[10px] text-slate-400">— через ManyChat</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16 [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
          <a
            href="#final-cta"
            onClick={(e) => scrollTo(e, '#final-cta')}
            className="btn-amber group"
          >
            <span className="text-sm font-medium tracking-tight">Записатися на безкоштовний розбір</span>
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

        {/* Footer Stats */}
        <div className="flex flex-wrap gap-2 md:gap-6 mt-auto items-center justify-center md:justify-start [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Реалізація</p>
              <p className="text-sm text-slate-900 font-medium">5–14 днів</p>
            </div>
            <div className="curve-separator ml-4 md:ml-8" />
          </div>
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Композиція</p>
              <p className="text-sm text-slate-900 font-medium">Воронка під ключ</p>
            </div>
            <div className="curve-separator ml-4 md:ml-8" />
          </div>
          <div className="flex items-center group cursor-default">
            <div className="px-1 text-center">
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-500 transition-colors">Формат</p>
              <p className="text-sm text-slate-900 font-medium">1 експерт, 4–5 проєктів</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Card Stack + Steps */}
      <div className="lg:col-span-5 flex flex-col items-center lg:items-end lg:pt-16 h-full pt-10 lg:pr-6 justify-center w-full">
        {/* Stacked Cards */}
        <div className="relative mb-12 w-full max-w-[300px] sm:max-w-[340px] aspect-[4/3] group perspective-1000 [animation:fadeSlideIn_1.2s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
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

              const CardComponent = cardComponents[cardIdx];

              return (
                <div
                  key={cardIdx}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl origin-bottom bg-white border border-slate-200 transition-all duration-500"
                  style={{ transform, zIndex, opacity }}
                >
                  <CardComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Steps */}
        <div className="flex flex-col gap-3 w-full max-w-[340px]">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`step-item flex cursor-pointer rounded-xl p-3 items-center border border-transparent hover:bg-black/[0.02] group ${isActive ? 'active' : ''}`}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-300 shrink-0"
                  style={{
                    backgroundColor: isActive ? '#f97316' : 'transparent',
                    color: isActive ? '#fff' : '#94a3b8',
                  }}
                >
                  {step.num}
                </div>
                <span
                  className="text-sm font-medium transition-colors duration-300 ml-4 group-hover:text-slate-900 leading-tight"
                  style={{ color: isActive ? '#0f172a' : '#64748b' }}
                >
                  {step.label}
                </span>
                <iconify-icon
                  icon={step.icon}
                  width="16"
                  height="16"
                  className={`ml-auto pl-2 transition-all duration-300 shrink-0 ${
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
