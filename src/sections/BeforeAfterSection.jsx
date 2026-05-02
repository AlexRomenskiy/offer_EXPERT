import { useState } from 'react';

export default function BeforeAfterSection() {
  const [mode, setMode] = useState('auto');
  const [scenario, setScenario] = useState('message');

  const viewKey = `${mode}-${scenario}`;

  const manualList = [
    { icon: 'solar:chat-round-line-linear', text: '12+ невідповіданих повідомлень' },
    { icon: 'solar:clock-circle-linear', text: 'Години на ручні відповіді' },
    { icon: 'solar:card-linear', text: 'Очікування скріншотів оплат' },
    { icon: 'solar:folder-open-linear', text: 'Ручна видача матеріалів' },
    { icon: 'solar:battery-charge-linear', text: 'Вигорання та втрата мотивації' },
  ];

  const autoList = [
    { icon: 'solar:chat-round-dots-linear', text: 'Бот відповідає миттєво 24/7' },
    { icon: 'solar:bolt-linear', text: 'Автоматична видача матеріалів' },
    { icon: 'solar:card-linear', text: 'Автоматичний прийом оплат' },
    { icon: 'solar:chart-square-linear', text: 'Стабільний потік продажів' },
    { icon: 'solar:sun-linear', text: 'Час на головне — на експертизу і клієнтів' },
  ];

  return (
    <section
      id="before-after"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EAF2F8] scroll-mt-24"
    >
      {/* atmospheric wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.22)_0%,rgba(234,242,248,0.38)_22%,rgba(234,242,248,0.56)_100%)]" />

      {/* structural grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.045]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="ba-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ba-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 pb-16 items-end anim-trigger">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] anim-fade-up" style={{ transitionDelay: '0s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
                System Toggle · live demo
              </span>
            </div>

            <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light">
              <span className="block sm:inline anim-wrap">
                <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Від хаосу</span>
              </span>{' '}
              <span className="block anim-wrap">
                <span className="anim-line text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600" style={{ transitionDelay: '0.2s' }}>до системи</span>
              </span>
            </h2>
          </div>

          <p className="text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 text-left md:pb-2 max-w-[40ch] anim-fade-up" style={{ transitionDelay: '0.3s' }}>
            Один день експерта в двох режимах. Перемкни — і подивись, що змінюється.
          </p>
        </div>

        {/* Two large interface panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 anim-trigger">

          {/* === Panel 1: Phone mockup === */}
          <div className="group relative rounded-[24px] p-6 flex flex-col gap-6 overflow-hidden border border-white/60 bg-white/38 backdrop-blur-2xl shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.48),transparent_52%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange-200/[0.18] blur-[90px]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-[1.4rem] lg:text-[1.55rem] tracking-[-0.03em] text-slate-950 font-medium">
                  Один екран — два сценарії
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/65 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
                  iPhone Mock
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-[1.75] max-w-md">
                Перемкни режим і обери сценарій — побачиш, як одна й та сама ситуація виглядає вручну і в системі.
              </p>
            </div>

            {/* Phone */}
            <div className="relative z-10 flex justify-center items-start" style={{ perspective: '1400px' }}>
              <div className="relative w-[300px] h-[620px] mx-auto">
                {/* Side buttons */}
                <div className="absolute -left-[7px] top-[100px] w-[7px] h-[24px] bg-slate-200 rounded-l-lg border border-slate-300 border-r-0 z-0" />
                <div className="absolute -left-[7px] top-[148px] w-[7px] h-[48px] bg-slate-200 rounded-l-lg border border-slate-300 border-r-0 z-0" />
                <div className="absolute -left-[7px] top-[208px] w-[7px] h-[48px] bg-slate-200 rounded-l-lg border border-slate-300 border-r-0 z-0" />
                <div className="absolute -right-[7px] top-[160px] w-[7px] h-[64px] bg-slate-200 rounded-r-lg border border-slate-300 border-l-0 z-0" />

                {/* Phone body */}
                <div className="absolute inset-0 bg-slate-200 rounded-[3.2rem] shadow-[20px_30px_55px_rgba(15,23,42,0.12)] border-[4px] border-slate-100 z-0" />

                {/* Screen */}
                <div className="absolute inset-x-[8px] top-[8px] bottom-[8px] bg-[#f8f9fb] rounded-[2.8rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_16px_rgba(15,23,42,0.04)] border border-slate-200/70">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-[#0f172a] rounded-full z-50 flex items-center justify-between px-2">
                    <div className="w-2.5 h-2.5 bg-slate-800 rounded-full flex items-center justify-center border border-white/5">
                      <div className="w-1 h-1 bg-blue-500/50 rounded-full blur-[1px]" />
                    </div>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_4px_rgba(249,115,22,0.6)] animate-pulse" />
                  </div>

                  {/* Status Bar */}
                  <div className="h-12 w-full pt-3 px-5 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-40">
                    <span className="ml-1 tracking-tight">9:41</span>
                    <div className="flex gap-1 items-center opacity-80 mr-1">
                      <iconify-icon icon="solar:tuning-2-linear" width="12" height="12" />
                      <iconify-icon icon="solar:wifi-minimalistic-linear" width="12" height="12" />
                      <iconify-icon icon="solar:battery-full-minimalistic-linear" width="14" height="14" />
                    </div>
                  </div>

                  <div className="flex-1 px-3 pt-1 pb-4 flex flex-col h-full overflow-hidden relative z-10 bg-gradient-to-br from-[#f8f9fb] to-slate-200/30">
                    {/* Mode toggle in-phone */}
                    <div className="flex p-0.5 rounded-full w-max mx-auto z-10 mb-4 border border-slate-200 bg-slate-100">
                      <button
                        onClick={() => setMode('manual')}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
                          mode === 'manual' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        Вручну
                      </button>
                      <button
                        onClick={() => setMode('auto')}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
                          mode === 'auto' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        Автоматизація
                      </button>
                    </div>

                    {/* Card views */}
                    <div className="flex-grow flex items-center justify-center relative w-full h-full">
                      {mode === 'auto' && scenario === 'message' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                              <iconify-icon icon="solar:user-linear" width="14" height="14" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs text-slate-800 font-medium tracking-tight">Новий лід</span>
                              <span className="text-[10px] text-slate-400">Через бот</span>
                            </div>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                            <p className="text-xs text-slate-600 leading-relaxed font-light">
                              <span className="text-orange-600 font-medium">@alex_new</span> запустив воронку та переглядає перший відео-урок.
                            </p>
                          </div>
                        </div>
                      )}

                      {mode === 'auto' && scenario === 'response' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-3">
                            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                              <iconify-icon icon="solar:bolt-linear" width="14" height="14" />
                            </div>
                            <span className="text-xs text-slate-800 font-medium tracking-tight">Автовідповідь</span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="bg-orange-50 rounded-lg rounded-tr-sm p-3 border border-orange-100 self-end w-[90%]">
                              <p className="text-xs text-slate-700 font-light">Ось посилання на матеріали курсу! Доступ відкрито на 30 днів.</p>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400 text-right pr-1">Миттєво</span>
                          </div>
                        </div>
                      )}

                      {mode === 'auto' && scenario === 'payment' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                                <iconify-icon icon="solar:wallet-linear" width="14" height="14" />
                              </div>
                              <span className="text-xs text-slate-800 font-medium tracking-tight">Нова оплата</span>
                            </div>
                            <span className="text-[10px] text-orange-700 font-medium bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">Успішно</span>
                          </div>
                          <div className="flex flex-col gap-1 mb-3 border-b border-slate-100 pb-3">
                            <span className="text-2xl text-slate-900 font-medium tracking-tighter">$ 497</span>
                            <span className="text-[11px] text-slate-400 font-light">Онлайн-курс експерта</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1.5">
                              <iconify-icon icon="solar:user-linear" width="12" height="12" className="text-slate-300" />
                              <span className="text-[10px] text-slate-400 font-light">Клієнт з воронки</span>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400">14:23</span>
                          </div>
                        </div>
                      )}

                      {mode === 'manual' && scenario === 'message' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="relative w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                              <span className="absolute top-0 right-0 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                              </span>
                              <iconify-icon icon="solar:chat-round-line-linear" width="14" height="14" />
                            </div>
                            <span className="text-xs text-slate-800 font-medium tracking-tight">Direct</span>
                          </div>
                          <div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
                            <p className="text-xs text-slate-600 leading-relaxed">
                              У тебе <span className="text-rose-600 font-medium">12 невідповідей</span>. Клієнти чекають на інформацію про ціни.
                            </p>
                          </div>
                        </div>
                      )}

                      {mode === 'manual' && scenario === 'response' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex flex-col gap-2">
                            <div className="bg-slate-50 rounded-lg rounded-tl-sm p-3 border border-slate-100 self-start w-[85%]">
                              <p className="text-[11px] text-slate-500 font-light">А можна детальніше про формат? Які є модулі?</p>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-100 rounded-lg rounded-tr-sm p-2.5 border border-slate-200 self-end w-[85%] mt-1">
                              <div className="flex gap-1 items-center px-1">
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                              <p className="text-[11px] text-slate-400 ml-1 font-light">Ти друкуєш...</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {mode === 'manual' && scenario === 'payment' && (
                        <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-center bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                          <div className="flex flex-col items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 bg-slate-50">
                              <iconify-icon icon="solar:gallery-linear" width="20" height="20" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-xs text-slate-800 font-medium tracking-tight">Очікування скріншоту</span>
                              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                                Скинув реквізити. Чекаєш скрін оплати, щоб вручну видати доступ.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Tabs */}
                    <div className="grid grid-cols-3 gap-1.5 z-10 w-full mt-auto pt-4 max-w-xl mx-auto">
                      {['message', 'response', 'payment'].map((tab) => {
                        const icons = { message: 'solar:chat-square-linear', response: 'solar:reply-outline', payment: 'solar:card-linear' };
                        const labels = { message: 'Повідомлення', response: 'Відповідь', payment: 'Оплата' };
                        const isActive = scenario === tab;
                        return (
                          <button
                            key={tab}
                            onClick={() => setScenario(tab)}
                            className={`flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-lg transition-all duration-300 ${
                              isActive
                                ? 'bg-slate-100 border border-slate-200 text-slate-700 shadow-sm'
                                : 'bg-white/50 border border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <iconify-icon icon={icons[tab]} width="18" height="18" />
                            <span className="text-[10px] font-medium tracking-tight truncate w-full text-center">{labels[tab]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-slate-900/10 rounded-full z-40" />
                </div>
              </div>
            </div>
          </div>

          {/* === Panel 2: Mode comparison === */}
          <div className="group relative rounded-[24px] p-6 flex flex-col gap-6 overflow-hidden border border-white/60 bg-white/38 backdrop-blur-2xl shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.48),transparent_52%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-200/[0.18] blur-[90px]" />

            <div className="relative z-10 flex items-center justify-between">
              <h3 className="font-display text-[1.4rem] lg:text-[1.55rem] tracking-[-0.03em] text-slate-950 font-medium">
                Що змінюється
              </h3>
              <div className="flex p-1 rounded-full bg-white/65 border border-slate-200/70 shadow-sm">
                <button
                  onClick={() => setMode('manual')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    mode === 'manual' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Вручну
                </button>
                <button
                  onClick={() => setMode('auto')}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    mode === 'auto' ? 'bg-orange-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Автоматизація
                </button>
              </div>
            </div>

            {/* Sync card */}
            <div className="relative z-10 flex-1 rounded-[20px] overflow-hidden border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(148,163,184,0.12)] ring-1 ring-white/40 min-h-[400px]">
              {/* Manual mode card */}
              <div
                className={`absolute inset-0 p-6 lg:p-7 flex flex-col transition-all duration-500 ${
                  mode === 'manual'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    Manual mode · loss
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-400 border border-rose-100">
                    <iconify-icon icon="solar:danger-triangle-linear" width="16" height="16" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {manualList.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-rose-100/50 rounded-xl p-3 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                        <iconify-icon icon={item.icon} width="16" height="16" className="text-rose-400" />
                      </div>
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-rose-100/50 flex items-center gap-2 text-rose-500">
                  <iconify-icon icon="solar:close-circle-linear" width="16" height="16" />
                  <span className="text-xs font-medium">Немає системи — немає стабільності</span>
                </div>
              </div>

              {/* Auto mode card */}
              <div
                className={`absolute inset-0 p-6 lg:p-7 flex flex-col transition-all duration-500 ${
                  mode === 'auto'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    Auto mode · live
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100">
                    <iconify-icon icon="solar:rocket-linear" width="16" height="16" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {autoList.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-orange-100/50 rounded-xl p-3 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                        <iconify-icon icon={item.icon} width="16" height="16" className="text-orange-500" />
                      </div>
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-orange-100/50 flex items-center gap-2 text-orange-600">
                  <iconify-icon icon="solar:verified-check-linear" width="16" height="16" />
                  <span className="text-xs font-medium">Система продає — ти займаєшся експертизою</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
