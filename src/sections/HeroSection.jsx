import { useState, useCallback } from 'react';
import Header from '../components/Header';

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
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">Розбір ситуації</span>
        <span className="text-[10px] font-medium text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">30 хв</span>
      </div>
      <div className="text-base font-semibold text-slate-950 mb-3 tracking-tight">Точки втрат</div>
      <ul className="space-y-2 text-xs text-slate-600">
        <li className="flex items-start gap-2"><iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon><span>Лідам відповідаєте вручну в DM</span></li>
        <li className="flex items-start gap-2"><iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon><span>Немає сторінки, що продає</span></li>
        <li className="flex items-start gap-2"><iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon><span>Оплати — на банківські реквізити</span></li>
        <li className="flex items-start gap-2"><iconify-icon icon="solar:close-circle-linear" className="text-rose-400 shrink-0 mt-0.5" width="14"></iconify-icon><span>Доступ до продукту — вручну</span></li>
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
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">Збірка системи</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500 uppercase">live</span>
        </div>
      </div>
      <div className="text-base font-semibold text-slate-950 mb-1 tracking-tight">3 з 4 модулів</div>
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-orange-500 rounded-full" style={{ width: '75%' }} />
      </div>
      <ul className="space-y-1.5 text-xs">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <iconify-icon icon={it.done ? 'solar:check-circle-bold' : 'solar:clock-circle-linear'} className={it.done ? 'text-orange-500' : 'text-slate-300'} width="14"></iconify-icon>
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
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-400">Сьогодні</span>
        <iconify-icon icon="solar:graph-up-linear" className="text-orange-500" width="14"></iconify-icon>
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-xl text-orange-500 font-medium">+$</span>
        <span className="text-3xl font-semibold tracking-tight text-orange-500 leading-none">891</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-slate-50 rounded-lg px-2.5 py-1.5">
          <div className="font-mono text-[10px] tracking-[0.16em] text-slate-400 uppercase">Заявок</div>
          <div className="text-sm font-semibold text-slate-900">12</div>
        </div>
        <div className="bg-slate-50 rounded-lg px-2.5 py-1.5">
          <div className="font-mono text-[10px] tracking-[0.16em] text-slate-400 uppercase">Продажів</div>
          <div className="text-sm font-semibold text-slate-900">3</div>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
          <iconify-icon icon="solar:card-linear" className="text-orange-500" width="14"></iconify-icon>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-medium text-slate-800 truncate">Оплата $297 · Олена К.</div>
          <div className="font-mono text-[10px] text-slate-400">2 хв тому</div>
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
    <section
      id="hero"
      className="relative z-10 isolate overflow-hidden text-white border-b border-slate-800/50 min-h-[860px] lg:min-h-[920px] px-6 md:px-8 lg:px-12"
    >
      {/* === Background layers === */}
      <div className="absolute inset-0 -z-10">
        {/* Base navy gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070A14_0%,#0B1220_55%,#0E1428_100%)]" />
        {/* Cool indigo glow — upper left */}
        <div className="hero-glow-cool absolute -top-40 -left-32 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-indigo-500/30 blur-[140px]" />
        {/* Warm orange glow — lower right */}
        <div className="hero-glow-warm absolute -bottom-48 -right-32 w-[55vw] h-[55vw] max-w-[820px] max-h-[820px] rounded-full bg-orange-500/22 blur-[140px]" />
        {/* Tinted radial overlays (mockup primitive) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_78%_42%,rgba(249,115,22,0.06),transparent_30%)]" />
      </div>

      {/* === Structural grid (mockup primitive) === */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.4)"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)"></rect>
        </svg>
      </div>

      {/* === Header (dark variant) === */}
      <div className="relative z-10 max-w-7xl mx-auto pt-6">
        <Header theme="dark" />
      </div>

      {/* === Hero content === */}
      <div className="relative z-10 max-w-7xl mx-auto pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="anim-trigger grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* === LEFT: main message === */}
          <div className="lg:col-span-7 max-w-[760px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 mb-8 shadow-[0_6px_24px_rgba(0,0,0,0.2)] anim-fade-up" style={{ transitionDelay: '0s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">
                Воронка під ключ · для онлайн-експертів
              </span>
            </div>

            {/* Headline (anim-line treatment) */}
            <h1 className="font-display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[1.0] tracking-[-0.04em] font-light max-w-[14ch] mb-7 text-white">
              <span className="anim-wrap">
                <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Ти експерт.</span>
              </span>{' '}
              <span className="anim-wrap">
                <span className="anim-line text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500" style={{ transitionDelay: '0.22s' }}>
                  Не менеджер з продажу і не айтішник.
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-[42rem] text-[1.05rem] sm:text-[1.12rem] lg:text-[1.18rem] leading-[1.7] font-normal mb-9 anim-fade-up text-slate-200/90 border-l border-white/10 pl-5" style={{ transitionDelay: '0.35s' }}>
              Збираю систему під ключ: лендинг, чат-боти у мессенджерах, прийом оплат і автоматичну видачу продукту. Поки система продає — ти займаєшся експертизою.
            </p>

            {/* Platforms */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 anim-fade-up" style={{ transitionDelay: '0.4s' }}>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Працює з</span>
              <div className="flex items-center gap-3.5">
                {platforms.map((p) => (
                  <div key={p.name} title={p.name}>
                    <iconify-icon icon={p.icon} width="18" height="18" className="text-slate-400 hover:text-white transition-colors"></iconify-icon>
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-slate-500">— через ManyChat</span>
            </div>

            {/* CTAs (mockup primitives: white pill + glass pill) */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14 anim-fade-up" style={{ transitionDelay: '0.45s' }}>
              <a
                href="#final-cta"
                onClick={(e) => scrollTo(e, '#final-cta')}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border bg-gradient-to-r px-6 text-[14px] font-medium transition-all duration-300 border-white/70 from-white to-slate-100 text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_38px_rgba(255,255,255,0.25)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-90 bg-[radial-gradient(circle_at_25%_20%,rgba(0,0,0,0.10),transparent_28%)]" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Записатися на безкоштовний розбір
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="transition-transform duration-300 group-hover:translate-x-0.5"></iconify-icon>
                </span>
              </a>

              <a
                href="#pricing"
                onClick={(e) => scrollTo(e, '#pricing')}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border backdrop-blur-xl px-6 text-[14px] font-medium transition-all duration-300 border-white/20 bg-white/10 text-white hover:bg-white/20 shadow-[0_6px_22px_rgba(0,0,0,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_55%)]" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Переглянути тарифи
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </span>
              </a>
            </div>

            {/* === System Snapshot (mockup primitive) === */}
            <div className="dark-glass-strong relative max-w-4xl rounded-[28px] px-5 py-5 sm:px-6 sm:py-6 anim-fade-up shadow-[0_24px_70px_rgba(0,0,0,0.4)]" style={{ transitionDelay: '0.55s' }}>
              <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04)_28%,transparent_55%)]" />
                <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
                <div className="absolute -top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
              </div>

              <div className="corner-tl text-white" />
              <div className="corner-tr text-white" />
              <div className="corner-bl text-white" />
              <div className="corner-br text-white" />

              <div className="relative z-10 flex items-center justify-between gap-4 pb-4 mb-5 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">
                    System Snapshot
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] border bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-white/20">
                <div className="px-2 md:px-5">
                  <div className="font-display text-[1.6rem] sm:text-[1.8rem] leading-none tracking-[-0.03em] mb-2 text-white">5–14 днів</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2 text-slate-300">Реалізація</div>
                  <p className="text-sm leading-relaxed text-slate-300/90">Повна збірка від стратегії до запуску.</p>
                </div>
                <div className="px-2 md:px-5">
                  <div className="font-display text-[1.6rem] sm:text-[1.8rem] leading-none tracking-[-0.03em] mb-2 text-white">Воронка під ключ</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2 text-slate-300">Композиція</div>
                  <p className="text-sm leading-relaxed text-slate-300/90">Лендинг + бот + оплати + видача — однією системою.</p>
                </div>
                <div className="px-2 md:px-5">
                  <div className="font-display text-[1.6rem] sm:text-[1.8rem] leading-none tracking-[-0.03em] mb-2 text-white">4–5 проєктів</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2 text-slate-300">Формат</div>
                  <p className="text-sm leading-relaxed text-slate-300/90">1 експерт веде паралельно — увага кожному запуску.</p>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT: System View panel (cards + steps) === */}
          <div className="lg:col-span-5 anim-fade-up" style={{ transitionDelay: '0.4s' }}>
            <div className="dark-glass-strong relative rounded-[28px] p-5 sm:p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02)_45%,transparent_70%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent opacity-80" />
              </div>

              <div className="corner-tl text-white" />
              <div className="corner-tr text-white" />
              <div className="corner-bl text-white" />
              <div className="corner-br text-white" />

              {/* Panel header */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-4 mb-5 border-b border-white/15">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/85">
                  System View
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] border bg-orange-500/15 text-orange-300 border-orange-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Live demo
                </span>
              </div>

              {/* Card stack */}
              <div className="relative z-10 mx-auto mb-6 w-full max-w-[320px] aspect-[4/3] perspective-1000">
                <div className="absolute -inset-8 -z-10 opacity-70">
                  <div className="absolute inset-0 bg-orange-500/25 blur-[80px] rounded-full" />
                  <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full translate-x-6 -translate-y-4" />
                </div>

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
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)] origin-bottom bg-white border border-white/40 transition-all duration-500"
                        style={{ transform, zIndex, opacity }}
                      >
                        <CardComponent />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Steps */}
              <div className="relative z-10 flex flex-col gap-2">
                {steps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveStep(i)}
                      className={`flex cursor-pointer rounded-xl p-3 items-center group transition-all duration-300 border ${
                        isActive
                          ? 'border-white/15 bg-white/[0.07] -translate-x-1'
                          : 'border-transparent hover:bg-white/[0.04] hover:border-white/10'
                      }`}
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors duration-300 shrink-0 font-mono"
                        style={{
                          backgroundColor: isActive ? '#f97316' : 'rgba(255,255,255,0.06)',
                          color: isActive ? '#0f172a' : 'rgba(255,255,255,0.55)',
                          border: isActive ? 'none' : '1px solid rgba(255,255,255,0.10)',
                        }}
                      >
                        {step.num}
                      </div>
                      <span
                        className="text-sm font-medium transition-colors duration-300 ml-4 leading-tight"
                        style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
                      >
                        {step.label}
                      </span>
                      <iconify-icon
                        icon={step.icon}
                        width="16"
                        height="16"
                        className={`ml-auto pl-2 transition-all duration-300 shrink-0 ${
                          isActive ? 'opacity-100 text-orange-400' : 'opacity-0 group-hover:opacity-50 text-slate-400'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom fade-out into next light section === */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
    </section>
  );
}
