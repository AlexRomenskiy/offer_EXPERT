import { useState } from 'react';

export default function HeroSection() {
  const [currentMode, setCurrentMode] = useState('auto');
  const [currentScenario, setCurrentScenario] = useState('message');

  const viewKey = `${currentMode}-${currentScenario}`;

  return (
    <div className="flex-grow z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6 relative md:px-8 lg:pb-24 lg:pt-13">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 gap-x-12 gap-y-12 items-center">

        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left w-full">
          {/* Social Proof Pill */}
          <div className="inline-flex glass-pill w-max rounded-full mb-8 pt-1.5 pr-5 pb-1.5 pl-1.5 items-center border border-zinc-200/50">
            <div className="flex -space-x-2 mr-3">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/578a5bc5-2c9f-4285-8ae6-0d7dafefba84_320w.webp" alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a99aa12-9c50-44fe-bb7d-5dfef28b7d59_320w.webp" alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e91b8c7-be64-41b5-8bd8-75efab28bdbe_320w.webp" alt="User" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" />
              <div className="w-7 h-7 rounded-full border-2 border-white bg-zinc-800 text-white flex items-center justify-center text-xs font-normal tracking-tight shadow-sm">
                50+
              </div>
            </div>
            <span className="text-xs font-light text-zinc-600 tracking-wide uppercase">
              <span className="text-zinc-900 font-normal">експертів</span> вже автоматизували продажі
            </span>
          </div>

          {/* Headline */}
          <h1 className="lg:text-[4.5rem] leading-[1.05] text-5xl font-normal text-zinc-900 tracking-tighter max-w-2xl mb-8">
            Збираю систему продажів <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-light">для експертів</span>
          </h1>

          {/* Action Area */}
          <div className="flex flex-col items-start gap-5 mb-10 lg:mb-14 max-w-md w-full">
            <button className="btn-glow hover:bg-orange-500 transition-all duration-300 flex group hover:-translate-y-0.5 text-base font-normal text-zinc-900 rounded-full py-3.5 px-6 items-center w-full sm:w-auto">
              <span className="text-base font-normal tracking-tight text-zinc-900 pr-8">
                Записатися на розбір
              </span>
              <span className="flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm w-8 h-8 shrink-0 ml-auto">
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-900"></iconify-icon>
              </span>
            </button>

            <div className="flex items-center justify-start gap-3 text-zinc-500">
              <iconify-icon icon="solar:info-circle-linear" className="text-xl text-zinc-400 shrink-0 opacity-70"></iconify-icon>
              <p className="text-base font-light leading-relaxed tracking-wide text-left">
                <span className="text-zinc-700 font-normal">20-30 хвилин.</span> Без тиску, без зобов'язань.
              </p>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="flex flex-wrap justify-start gap-8 lg:gap-12 items-center pt-8 border-t border-zinc-200/60 w-full max-w-2xl">
            <div className="flex flex-col items-start gap-1 group cursor-default">
              <p className="text-xs font-normal text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Запуск</p>
              <p className="text-base text-zinc-900 font-normal tracking-tight">від 7 днів</p>
            </div>
            <div className="w-px h-8 bg-zinc-200 hidden sm:block"></div>
            <div className="flex flex-col items-start gap-1 group cursor-default">
              <p className="text-xs font-normal text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Платформи</p>
              <p className="text-base text-zinc-900 font-normal tracking-tight">Telegram / Insta</p>
            </div>
            <div className="w-px h-8 bg-zinc-200 hidden sm:block"></div>
            <div className="flex flex-col items-start gap-1 group cursor-default hidden sm:flex">
              <p className="text-xs font-normal text-zinc-400 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">Оплати</p>
              <p className="text-base text-zinc-900 font-normal tracking-tight">Будь-які системи</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="w-full max-w-md mx-auto lg:max-w-none lg:ml-auto h-[550px] lg:h-[650px] relative group perspective-1000">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 transition-all duration-700 ease-out border border-white">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abe6309a-283e-40d6-9cb0-b1ccf86a9f2b_1600w.jpg" alt="Smartphone with vibrant gradient screen in hand" className="transition-transform duration-[2s] ease-in-out group-hover:scale-105 filter w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 saturate-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/50"></div>

            <div className="flex flex-col sm:px-6 pt-6 pr-4 pb-6 pl-4 absolute top-0 right-0 bottom-0 left-0">
              {/* Mode Toggle */}
              <div className="flex p-1 dark-glass rounded-full w-max mx-auto z-10 shadow-lg mb-8">
                <button
                  onClick={() => setCurrentMode('manual')}
                  className={currentMode === 'manual'
                    ? "px-5 py-2 rounded-full text-xs font-normal text-white bg-white/20 shadow-sm transition-all duration-300"
                    : "px-5 py-2 rounded-full text-xs font-normal text-white/60 hover:text-white transition-all duration-300"
                  }
                >
                  Вручну
                </button>
                <button
                  onClick={() => setCurrentMode('auto')}
                  className={currentMode === 'auto'
                    ? "px-5 py-2 rounded-full text-xs font-normal text-white bg-white/20 shadow-sm transition-all duration-300"
                    : "px-5 py-2 rounded-full text-xs font-normal text-white/60 hover:text-white transition-all duration-300"
                  }
                >
                  З автоматизацією
                </button>
              </div>

              {/* Views */}
              <div className="flex-grow flex items-center justify-center relative w-full h-full">
                {/* Auto - Message */}
                {currentMode === 'auto' && currentScenario === 'message' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-5 shadow-2xl shadow-black/50 fade-in absolute text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <iconify-icon icon="solar:user-linear" className="text-base"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-white font-normal tracking-tight">Новий лід</span>
                        <span className="text-xs text-white/50 tracking-wide">Через Telegram Бот</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <p className="text-sm text-white/70 leading-relaxed font-light">
                        <span className="text-emerald-400 font-normal">@alex_new</span> запустив воронку та переглядає перший відео-урок.
                      </p>
                    </div>
                  </div>
                )}

                {/* Auto - Response */}
                {currentMode === 'auto' && currentScenario === 'response' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-5 shadow-2xl shadow-black/50 fade-in absolute text-left">
                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <iconify-icon icon="solar:bolt-linear" className="text-base"></iconify-icon>
                      </div>
                      <span className="text-sm text-white font-normal tracking-tight">Автовідповідь</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-blue-500/10 rounded-xl rounded-tr-sm p-4 border border-blue-500/20 self-end w-[90%]">
                        <p className="text-sm text-white/80 font-light">Ось посилання на матеріали курсу! Доступ відкрито на 30 днів. 🚀</p>
                      </div>
                      <span className="text-xs text-white/40 font-mono text-right pr-1">Миттєво</span>
                    </div>
                  </div>
                )}

                {/* Auto - Payment */}
                {currentMode === 'auto' && currentScenario === 'payment' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-5 shadow-2xl shadow-black/50 fade-in absolute text-left">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <iconify-icon icon="solar:wallet-linear" className="text-base"></iconify-icon>
                        </div>
                        <span className="text-sm text-white font-normal tracking-tight">Нова оплата</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-normal bg-emerald-500/10 px-2 py-1 rounded-md">Успішно</span>
                    </div>
                    <div className="flex flex-col gap-1 mb-4 border-b border-white/10 pb-4">
                      <span className="text-3xl text-white font-normal tracking-tighter">₴ 15,000</span>
                      <span className="text-sm text-white/50 tracking-wide font-light">Курс: &quot;Продажі в Instagram&quot;</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <iconify-icon icon="solar:user-linear" className="text-sm text-white/40"></iconify-icon>
                        <span className="text-xs text-white/60 font-light">Клієнт з воронки</span>
                      </div>
                      <span className="text-xs text-white/40 font-mono">14:23</span>
                    </div>
                  </div>
                )}

                {/* Manual - Message */}
                {currentMode === 'manual' && currentScenario === 'message' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-5 shadow-2xl shadow-black/50 fade-in absolute text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                        <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                        </span>
                        <iconify-icon icon="solar:chat-round-line-linear" className="text-base"></iconify-icon>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-white font-normal tracking-tight">Instagram Direct</span>
                      </div>
                    </div>
                    <div className="bg-orange-500/5 rounded-xl p-4 border border-orange-500/20">
                      <p className="text-sm text-white/70 leading-relaxed font-normal">
                        У вас <span className="text-orange-400">12 невідповідей</span> запитів. Клієнти очікують на інформацію про ціни.
                      </p>
                    </div>
                  </div>
                )}

                {/* Manual - Response */}
                {currentMode === 'manual' && currentScenario === 'response' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-5 shadow-2xl shadow-black/50 fade-in absolute text-left">
                    <div className="flex flex-col gap-3">
                      <div className="bg-white/5 rounded-xl rounded-tl-sm p-4 border border-white/5 self-start w-[85%]">
                        <p className="text-sm text-white/60 font-light">А можна детальніше про формат? Які є модулі? І куди платити?</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-xl rounded-tr-sm p-3 border border-white/20 self-end w-[85%] mt-2">
                        <div className="flex gap-1 items-center px-1">
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <p className="text-sm text-white/60 ml-2 font-light">Ви друкуєте...</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Manual - Payment */}
                {currentMode === 'manual' && currentScenario === 'payment' && (
                  <div key={viewKey} className="dark-glass w-full max-w-[320px] rounded-2xl p-6 shadow-2xl shadow-black/50 fade-in absolute text-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 bg-white/5">
                        <iconify-icon icon="solar:gallery-linear" className="text-2xl"></iconify-icon>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-white font-normal tracking-tight">Очікування скріншоту</span>
                        <p className="text-sm text-white/50 leading-relaxed font-light">
                          Ви скинули реквізити карти. Тепер чекаєте скрін про оплату, щоб вручну видати доступ.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Tabs */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 z-10 w-full mt-auto pt-8 max-w-xl mx-auto">
                {['message', 'response', 'payment'].map((tab) => {
                  const icons = { message: 'solar:chat-square-linear', response: 'solar:reply-outline', payment: 'solar:card-linear' };
                  const labels = { message: 'Повідомлення', response: 'Відповідь', payment: 'Оплата' };
                  return (
                    <button
                      key={tab}
                      onClick={() => setCurrentScenario(tab)}
                      className={currentScenario === tab
                        ? "dark-glass bg-white/10 border-white/20 text-white flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl transition-all duration-300"
                        : "dark-glass border-transparent text-white/50 hover:text-white/80 flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl transition-all duration-300"
                      }
                    >
                      <iconify-icon icon={icons[tab]} className="text-xl"></iconify-icon>
                      <span className="text-xs font-normal tracking-tight truncate w-full text-center">{labels[tab]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
