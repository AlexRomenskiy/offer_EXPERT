import { useState } from 'react';

export default function BeforeAfterSection() {
  const [mode, setMode] = useState('auto');
  const [scenario, setScenario] = useState('message');

  const viewKey = `${mode}-${scenario}`;

  return (
    <section className="w-full scroll-mt-24" id="before-after">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4">
          Від хаосу
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-600"> до системи</span>
        </h2>
        <p className="text-base text-slate-500 font-normal leading-relaxed">
          Подивіться, як виглядає трансформація продажів для експерта. Перемикайте режим, щоб побачити різницю.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Phone Mockup */}
        <div className="flex justify-center items-start relative" style={{ perspective: '1400px' }}>
          <div className="relative w-[300px] h-[620px] mx-auto">
            {/* Side Buttons */}
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
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse" />
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

              {/* Screen Content */}
              <div className="flex-1 px-3 pt-1 pb-4 flex flex-col h-full overflow-hidden relative z-10 bg-gradient-to-br from-[#f8f9fb] to-slate-200/30">
                {/* Mode Toggle */}
                <div
                  className="flex p-0.5 rounded-full w-max mx-auto z-10 mb-4 border border-slate-200 bg-slate-100"
                >
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
                        <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <iconify-icon icon="solar:user-linear" width="14" height="14" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-slate-800 font-medium tracking-tight">Новий лід</span>
                          <span className="text-[10px] text-slate-400">Через Telegram Бот</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          <span className="text-emerald-600 font-medium">@alex_new</span> запустив воронку та переглядає перший відео-урок.
                        </p>
                      </div>
                    </div>
                  )}

                  {mode === 'auto' && scenario === 'response' && (
                    <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-3">
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <iconify-icon icon="solar:bolt-linear" width="14" height="14" />
                        </div>
                        <span className="text-xs text-slate-800 font-medium tracking-tight">Автовідповідь</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-blue-50 rounded-lg rounded-tr-sm p-3 border border-blue-100 self-end w-[90%]">
                          <p className="text-xs text-slate-700 font-light">Ось посилання на матеріали курсу! Доступ відкрито на 30 днів.</p>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono text-right pr-1">Миттєво</span>
                      </div>
                    </div>
                  )}

                  {mode === 'auto' && scenario === 'payment' && (
                    <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                            <iconify-icon icon="solar:wallet-linear" width="14" height="14" />
                          </div>
                          <span className="text-xs text-slate-800 font-medium tracking-tight">Нова оплата</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">Успішно</span>
                      </div>
                      <div className="flex flex-col gap-1 mb-3 border-b border-slate-100 pb-3">
                        <span className="text-2xl text-slate-900 font-medium tracking-tighter">₴ 15,000</span>
                        <span className="text-[11px] text-slate-400 font-light">Курс: &quot;Продажі в Instagram&quot;</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1.5">
                          <iconify-icon icon="solar:user-linear" width="12" height="12" className="text-slate-300" />
                          <span className="text-[10px] text-slate-400 font-light">Клієнт з воронки</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">14:23</span>
                      </div>
                    </div>
                  )}

                  {mode === 'manual' && scenario === 'message' && (
                    <div key={viewKey} className="w-full max-w-[280px] rounded-xl p-4 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                          <span className="absolute top-0 right-0 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                          </span>
                          <iconify-icon icon="solar:chat-round-line-linear" width="14" height="14" />
                        </div>
                        <span className="text-xs text-slate-800 font-medium tracking-tight">Instagram Direct</span>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          У вас <span className="text-orange-600 font-medium">12 невідповідей</span> запитів. Клієнти очікують на інформацію про ціни.
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
                          <p className="text-[11px] text-slate-400 ml-1 font-light">Ви друкуєте...</p>
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
                            Скинули реквізити. Чекаєте скрін оплати, щоб вручну видати доступ.
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

        {/* Right: Interactive Card */}
        <div className="flex flex-col gap-6">
          {/* Mode tabs */}
          <div className="flex p-1 rounded-full w-max bg-slate-100 border border-slate-200">
            <button
              onClick={() => setMode('manual')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'manual' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Вручну
            </button>
            <button
              onClick={() => setMode('auto')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === 'auto' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Автоматизація
            </button>
          </div>

          {/* Content card synced with mode */}
          <div className="relative min-h-[400px]">
            {/* Manual mode card */}
            <div
              className={`absolute inset-0 rounded-2xl p-8 flex flex-col border transition-all duration-500 ${
                mode === 'manual'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,241,242,0.5) 100%)', borderColor: 'rgba(254,202,202,0.4)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-slate-900 tracking-tight">Вручну</h3>
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-400 border border-red-100">
                  <iconify-icon icon="solar:danger-triangle-linear" width="18" height="18" />
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {[
                  { icon: 'solar:chat-round-line-linear', text: '12+ невідповіданих повідомлень', color: 'text-red-400' },
                  { icon: 'solar:clock-circle-linear', text: 'Годинни на ручні відповіді', color: 'text-red-400' },
                  { icon: 'solar:card-linear', text: 'Очікування скріншотів оплат', color: 'text-red-400' },
                  { icon: 'solar:folder-open-linear', text: 'Ручна видача матеріалів', color: 'text-red-400' },
                  { icon: 'solar:battery-charge-linear', text: 'Вигорання та втрата мотивації', color: 'text-red-400' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-red-100/50 rounded-xl p-3.5 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <iconify-icon icon={item.icon} width="16" height="16" className={item.color} />
                    </div>
                    <span className="text-sm text-slate-700 font-normal">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-red-100/50 flex items-center gap-2 text-red-400">
                <iconify-icon icon="solar:close-circle-linear" width="16" height="16" />
                <span className="text-xs font-medium">Немає системи — немає стабільності</span>
              </div>
            </div>

            {/* Auto mode card */}
            <div
              className={`absolute inset-0 rounded-2xl p-8 flex flex-col border transition-all duration-500 ${
                mode === 'auto'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,253,244,0.5) 100%)', borderColor: 'rgba(187,247,208,0.4)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-slate-900 tracking-tight">Автоматизація</h3>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                  <iconify-icon icon="solar:rocket-linear" width="18" height="18" />
                </div>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {[
                  { icon: 'solar:chat-round-dots-linear', text: 'Бот відповідає миттєво 24/7', color: 'text-emerald-500' },
                  { icon: 'solar:bolt-linear', text: 'Автоматична видача матеріалів', color: 'text-emerald-500' },
                  { icon: 'solar:card-linear', text: 'Автоматичний прийом оплат', color: 'text-emerald-500' },
                  { icon: 'solar:chart-square-linear', text: 'Стабільний дохід без участі', color: 'text-emerald-500' },
                  { icon: 'solar:sun-linear', text: 'Час на контент та відпочинок', color: 'text-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-emerald-100/50 rounded-xl p-3.5 shadow-sm">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <iconify-icon icon={item.icon} width="16" height="16" className={item.color} />
                    </div>
                    <span className="text-sm text-slate-700 font-normal">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100/50 flex items-center gap-2 text-emerald-500">
                <iconify-icon icon="solar:verified-check-linear" width="16" height="16" />
                <span className="text-xs font-medium">Система працює — ви відпочиваєте</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
