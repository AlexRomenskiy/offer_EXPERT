import { useState } from 'react';

export default function HeroSection() {
  const [currentMode, setCurrentMode] = useState('auto');
  const [currentScenario, setCurrentScenario] = useState('message');

  const viewKey = `${currentMode}-${currentScenario}`;

  const scrollToCta = (e) => {
    e.preventDefault();
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pb-24 z-10">
      <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-12 items-center">

          {/* Left Column — Text */}
          <div className="flex flex-col items-start text-left w-full">
            {/* Social Proof */}
            <div className="inline-flex bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-max rounded-full mb-8 pt-1.5 pr-5 pb-1.5 pl-1.5 items-center">
              <div className="flex -space-x-2 mr-3">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/578a5bc5-2c9f-4285-8ae6-0d7dafefba84_320w.webp" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a99aa12-9c50-44fe-bb7d-5dfef28b7d59_320w.webp" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e91b8c7-be64-41b5-8bd8-75efab28bdbe_320w.webp" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-medium tracking-tight">
                  50+
                </div>
              </div>
              <span className="text-xs font-light text-slate-400 tracking-wide uppercase">
                <span className="text-slate-700 font-medium">експертів</span> вже автоматизували продажі
              </span>
            </div>

            {/* Headline */}
            <h1 className="lg:text-[4.5rem] leading-[1.05] text-5xl font-heading font-semibold text-slate-900 tracking-tighter max-w-2xl mb-6">
              Збираю систему продажів{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 font-semibold">
                для експертів
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-[520px] leading-relaxed mb-8 font-light">
              Автоматизована воронка, яка працює 24/7: від першого контакту до оплати — без вашої участі.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 items-start mb-10 lg:mb-14">
              <a href="#final-cta" onClick={scrollToCta} className="btn-amber text-base">
                <span className="btn-amber-glow" />
                Записатися на розбір
              </a>
              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-full text-sm font-medium text-slate-700 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                Переглянути тарифи
              </a>
            </div>

            {/* Footer Stats */}
            <div className="flex flex-wrap justify-start gap-8 lg:gap-12 items-center pt-8 border-t border-slate-200/60 w-full max-w-2xl">
              <div className="flex flex-col items-start gap-1 group cursor-default">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Запуск</p>
                <p className="text-base text-slate-800 font-medium tracking-tight">від 7 днів</p>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex flex-col items-start gap-1 group cursor-default">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Платформи</p>
                <p className="text-base text-slate-800 font-medium tracking-tight">Telegram / Insta</p>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex flex-col items-start gap-1 group cursor-default hidden sm:flex">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Оплати</p>
                <p className="text-base text-slate-800 font-medium tracking-tight">Будь-які системи</p>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup — Clay/Light style */}
          <div className="flex justify-center items-center relative" style={{ perspective: '1400px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-blue-400/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

            <div className="card-floater relative w-[340px] h-[720px] mx-auto transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]">
              {/* Side Buttons */}
              <div className="absolute -left-[9px] top-[122px] w-[9px] h-[28px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0" />
              <div className="absolute -left-[9px] top-[176px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0" />
              <div className="absolute -left-[9px] top-[244px] w-[9px] h-[56px] bg-[#e2e8f0] rounded-l-lg shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-r-0 z-0" />
              <div className="absolute -right-[9px] top-[190px] w-[9px] h-[78px] bg-[#e2e8f0] rounded-r-lg shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.9),inset_2px_-2px_4px_rgba(15,23,42,0.15)] border border-white/60 border-l-0 z-0" />

              {/* Clay body */}
              <div className="absolute inset-0 bg-[#e2e8f0] rounded-[3.9rem] shadow-[25px_35px_65px_rgba(15,23,42,0.15),inset_-6px_-6px_16px_rgba(15,23,42,0.08),inset_6px_6px_16px_rgba(255,255,255,0.95)] border-[5px] border-[#f1f5f9] z-0" />

              {/* Inner Screen */}
              <div className="absolute inset-x-[10px] top-[10px] bottom-[10px] bg-[#f8f9fb] rounded-[3.25rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_20px_rgba(15,23,42,0.06)] border border-slate-200/70">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[116px] h-[30px] bg-[#0f172a] rounded-full z-50 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.12)] flex items-center justify-between px-2.5">
                  <div className="w-3 h-3 bg-[#1e293b] rounded-full flex items-center justify-center border border-white/5">
                    <div className="w-1 h-1 bg-blue-500/50 rounded-full blur-[1px]" />
                  </div>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.6)] animate-pulse" />
                </div>

                {/* Status Bar */}
                <div className="h-14 w-full pt-3 px-6 flex justify-between items-center text-[11px] font-semibold text-slate-800 z-40">
                  <span className="ml-1 tracking-tight">9:41</span>
                  <div className="flex gap-1.5 items-center opacity-80 mr-1">
                    <iconify-icon icon="solar:tuning-2-linear" width="14" height="14" />
                    <iconify-icon icon="solar:wifi-minimalistic-linear" width="14" height="14" />
                    <iconify-icon icon="solar:battery-full-minimalistic-linear" width="16" height="16" />
                  </div>
                </div>

                {/* Screen Content */}
                <div className="flex-1 px-4 pt-2 pb-5 flex flex-col h-full overflow-hidden relative z-10 bg-gradient-to-br from-[#f8f9fb] to-[#e2e8f0]/30">
                  {/* Mode Toggle */}
                  <div className="flex p-1 rounded-full w-max mx-auto z-10 mb-6"
                    style={{
                      background: 'linear-gradient(180deg, #f1f5f9, #e2e8f0)',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8)',
                    }}
                  >
                    <button
                      onClick={() => setCurrentMode('manual')}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        currentMode === 'manual' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      Вручну
                    </button>
                    <button
                      onClick={() => setCurrentMode('auto')}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        currentMode === 'auto' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      Автоматизація
                    </button>
                  </div>

                  {/* Card views */}
                  <div className="flex-grow flex items-center justify-center relative w-full h-full">
                    {currentMode === 'auto' && currentScenario === 'message' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-5 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <iconify-icon icon="solar:user-linear" className="text-base" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-800 font-medium tracking-tight">Новий лід</span>
                            <span className="text-xs text-slate-400 tracking-wide">Через Telegram Бот</span>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-sm text-slate-600 leading-relaxed font-light">
                            <span className="text-emerald-600 font-medium">@alex_new</span> запустив воронку та переглядає перший відео-урок.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentMode === 'auto' && currentScenario === 'response' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-5 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <iconify-icon icon="solar:bolt-linear" className="text-base" />
                          </div>
                          <span className="text-sm text-slate-800 font-medium tracking-tight">Автовідповідь</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="bg-blue-50 rounded-xl rounded-tr-sm p-4 border border-blue-100 self-end w-[90%]">
                            <p className="text-sm text-slate-700 font-light">Ось посилання на матеріали курсу! Доступ відкрито на 30 днів.</p>
                          </div>
                          <span className="text-xs text-slate-400 font-mono text-right pr-1">Миттєво</span>
                        </div>
                      </div>
                    )}

                    {currentMode === 'auto' && currentScenario === 'payment' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-5 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                              <iconify-icon icon="solar:wallet-linear" className="text-base" />
                            </div>
                            <span className="text-sm text-slate-800 font-medium tracking-tight">Нова оплата</span>
                          </div>
                          <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">Успішно</span>
                        </div>
                        <div className="flex flex-col gap-1 mb-4 border-b border-slate-100 pb-4">
                          <span className="text-3xl text-slate-900 font-medium tracking-tighter">₴ 15,000</span>
                          <span className="text-sm text-slate-400 tracking-wide font-light">Курс: &quot;Продажі в Instagram&quot;</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <iconify-icon icon="solar:user-linear" className="text-sm text-slate-300" />
                            <span className="text-xs text-slate-400 font-light">Клієнт з воронки</span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">14:23</span>
                        </div>
                      </div>
                    )}

                    {currentMode === 'manual' && currentScenario === 'message' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-5 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                            <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                            </span>
                            <iconify-icon icon="solar:chat-round-line-linear" className="text-base" />
                          </div>
                          <span className="text-sm text-slate-800 font-medium tracking-tight">Instagram Direct</span>
                        </div>
                        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                          <p className="text-sm text-slate-600 leading-relaxed">
                            У вас <span className="text-orange-600 font-medium">12 невідповідей</span> запитів. Клієнти очікують на інформацію про ціни.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentMode === 'manual' && currentScenario === 'response' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-5 fade-in absolute text-left bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex flex-col gap-3">
                          <div className="bg-slate-50 rounded-xl rounded-tl-sm p-4 border border-slate-100 self-start w-[85%]">
                            <p className="text-sm text-slate-500 font-light">А можна детальніше про формат? Які є модулі? І куди платити?</p>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-100 rounded-xl rounded-tr-sm p-3 border border-slate-200 self-end w-[85%] mt-2">
                            <div className="flex gap-1 items-center px-1">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                            <p className="text-sm text-slate-400 ml-2 font-light">Ви друкуєте...</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentMode === 'manual' && currentScenario === 'payment' && (
                      <div key={viewKey} className="w-full max-w-[320px] rounded-2xl p-6 fade-in absolute text-center bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-[0_4px_12px_rgba(15,23,42,0.03),inset_0_1px_2px_rgba(255,255,255,1)]">
                        <div className="flex flex-col items-center justify-center gap-4">
                          <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 bg-slate-50">
                            <iconify-icon icon="solar:gallery-linear" className="text-2xl" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-sm text-slate-800 font-medium tracking-tight">Очікування скріншоту</span>
                            <p className="text-sm text-slate-400 leading-relaxed font-light">
                              Ви скинули реквізити карти. Тепер чекаєте скрін про оплату, щоб вручну видати доступ.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Tabs */}
                  <div className="grid grid-cols-3 gap-2 z-10 w-full mt-auto pt-6 max-w-xl mx-auto">
                    {['message', 'response', 'payment'].map((tab) => {
                      const icons = { message: 'solar:chat-square-linear', response: 'solar:reply-outline', payment: 'solar:card-linear' };
                      const labels = { message: 'Повідомлення', response: 'Відповідь', payment: 'Оплата' };
                      const isActive = currentScenario === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setCurrentScenario(tab)}
                          className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-slate-100 border border-slate-200 text-slate-700 shadow-sm'
                              : 'bg-white/50 border border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <iconify-icon icon={icons[tab]} className="text-xl" />
                          <span className="text-xs font-medium tracking-tight truncate w-full text-center">{labels[tab]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[124px] h-[4px] bg-slate-900/10 rounded-full z-40" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
