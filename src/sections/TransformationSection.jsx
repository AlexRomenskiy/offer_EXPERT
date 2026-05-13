import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

const transitions = [
  {
    icon: 'solar:chat-round-dots-linear',
    title: 'Миттєвий відгук',
    body: 'Замість годин у DM — бот веде до оплати 24/7.',
  },
  {
    icon: 'solar:card-linear',
    title: 'Автомат оплат + видачі',
    body: 'Гроші зайшли — клієнт одразу отримує доступ.',
  },
  {
    icon: 'solar:bolt-linear',
    title: 'Стабільність',
    body: 'Система працює, коли ти на консультаціях або у відпустці.',
  },
  {
    icon: 'solar:sun-linear',
    title: 'Час на головне',
    body: 'Тобі лишається експертиза. Решта — система.',
  },
];

export default function TransformationSection() {
  const [mode, setMode] = useState('auto');

  return (
    <section
      id="transformation"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading + subtitle */}
        <div className="max-w-3xl mb-12 lg:mb-14 anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Від хаосу
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                до системи
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.7] text-slate-600 anim-fade-up"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Перемкни режим і подивись, як один і той самий екран виглядає
            вручну і коли працює як система.
          </p>
        </div>

        {/* 2-col grid: content LEFT / iPhone RIGHT (desktop). Mobile: iPhone above, content below. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center anim-trigger">

          {/* === Content list — col-span-5, order-2 on mobile (below phone) === */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex flex-col gap-5 lg:gap-6">
              {transitions.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 anim-fade-up"
                  style={{ transitionDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center shrink-0 mt-1">
                    <iconify-icon
                      icon={t.icon}
                      width="18"
                      height="18"
                      style={{ color: '#175ae8' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[1.2rem] lg:text-[1.3rem] leading-[1.2] tracking-[-0.02em] text-slate-950 font-medium mb-1.5"
                      style={{ fontFamily: fontStack }}
                    >
                      {t.title}
                    </h3>
                    <p
                      className="text-[0.95rem] leading-[1.55] text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === iPhone mockup — col-span-7, order-1 on mobile (centerpiece) === */}
          <div className="lg:col-span-7 order-1 lg:order-2 anim-fade-up flex justify-center">
            <div
              className="relative w-[270px] sm:w-[290px]"
              style={{ aspectRatio: '0.49' }}
            >
              {/* Side buttons */}
              <div className="absolute -left-[5px] top-[18%] w-[5px] h-[6%] bg-slate-300 rounded-l-md z-0" />
              <div className="absolute -left-[5px] top-[26%] w-[5px] h-[10%] bg-slate-300 rounded-l-md z-0" />
              <div className="absolute -right-[5px] top-[24%] w-[5px] h-[12%] bg-slate-300 rounded-r-md z-0" />

              {/* Phone body */}
              <div className="absolute inset-0 bg-slate-200 rounded-[3rem] shadow-[0_25px_60px_rgba(15,23,42,0.14)] border-[3px] border-slate-100 z-0" />

              {/* Screen */}
              <div className="absolute inset-[7px] bg-[#f8fafc] rounded-[2.75rem] overflow-hidden flex flex-col z-10 shadow-[inset_0_0_14px_rgba(15,23,42,0.03)] border border-slate-200/70">

                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-slate-950 rounded-full z-50 flex items-center justify-between px-2">
                  <div className="w-2 h-2 bg-slate-800 rounded-full" />
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                      mode === 'auto' ? 'bg-[#60a5fa]' : 'bg-slate-500'
                    }`}
                  />
                </div>

                {/* Status bar */}
                <div className="h-11 pt-3 px-5 flex justify-between items-center text-[10px] font-semibold text-slate-800 z-40">
                  <span className="ml-1 tracking-tight" style={{ fontFamily: fontStack }}>9:41</span>
                  <div className="flex gap-1 items-center opacity-75 mr-1">
                    <iconify-icon icon="solar:wifi-minimalistic-linear" width="12" height="12" />
                    <iconify-icon icon="solar:battery-full-minimalistic-linear" width="14" height="14" />
                  </div>
                </div>

                {/* Toggle pill */}
                <div className="mx-4 mt-1 mb-3 flex p-0.5 rounded-full bg-slate-100 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setMode('manual')}
                    className={`flex-1 px-2 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
                      mode === 'manual'
                        ? 'bg-white text-slate-800 shadow-sm'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                    style={{ fontFamily: fontStack }}
                  >
                    Вручну
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('auto')}
                    className={`flex-1 px-2 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300 ${
                      mode === 'auto'
                        ? 'bg-[#175ae8] text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                    style={{ fontFamily: fontStack }}
                  >
                    Автоматизація
                  </button>
                </div>

                {/* Content card — swaps based on mode */}
                <div className="flex-1 px-4 pt-2 relative">

                  {/* MANUAL mode card */}
                  <div
                    className={`absolute inset-x-4 transition-all duration-500 ${
                      mode === 'manual'
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <iconify-icon icon="solar:chat-round-line-linear" width="14" height="14" style={{ color: '#64748b' }} />
                          </div>
                          <span className="text-[11px] text-slate-700 font-medium" style={{ fontFamily: fontStack }}>Direct</span>
                        </div>
                        <span className="text-[9px] text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
                          12 нових
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                          <p className="text-[10px] text-slate-600 leading-tight" style={{ fontFamily: fontStack }}>
                            @alex_new: А скільки коштує?
                          </p>
                          <span className="text-[9px] text-slate-400 mt-0.5 inline-block" style={{ fontFamily: fontStack }}>15 хв</span>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                          <p className="text-[10px] text-slate-600 leading-tight" style={{ fontFamily: fontStack }}>
                            @maria_z: Доброго дня, цікавить курс
                          </p>
                          <span className="text-[9px] text-slate-400 mt-0.5 inline-block" style={{ fontFamily: fontStack }}>38 хв</span>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                          <p className="text-[10px] text-slate-600 leading-tight" style={{ fontFamily: fontStack }}>
                            @ihor_e: Можна записатися?
                          </p>
                          <span className="text-[9px] text-slate-400 mt-0.5 inline-block" style={{ fontFamily: fontStack }}>1 год</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-rose-500">
                        <iconify-icon icon="solar:clock-circle-linear" width="12" height="12" />
                        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Чекають на відповідь</span>
                      </div>
                    </div>
                  </div>

                  {/* AUTO mode card */}
                  <div
                    className={`absolute inset-x-4 transition-all duration-500 ${
                      mode === 'auto'
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center">
                            <iconify-icon icon="solar:wallet-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                          </div>
                          <span className="text-[11px] text-slate-900 font-medium" style={{ fontFamily: fontStack }}>Нова оплата</span>
                        </div>
                        <span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full font-medium" style={{ fontFamily: fontStack }}>
                          Успіх
                        </span>
                      </div>

                      <div className="mb-3 pb-3 border-b border-slate-100">
                        <div className="text-[1.7rem] text-slate-950 font-semibold tracking-tight leading-none mb-1" style={{ fontFamily: fontStack }}>
                          $497
                        </div>
                        <div className="text-[10px] text-slate-500" style={{ fontFamily: fontStack }}>
                          Курс «Експерт-Системи»
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <iconify-icon icon="solar:user-rounded-linear" width="12" height="12" style={{ color: '#94a3b8' }} />
                        <span className="text-[10px] text-slate-600" style={{ fontFamily: fontStack }}>Олена К. · через бот</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[#175ae8] pt-2.5 border-t border-slate-100">
                        <iconify-icon icon="solar:check-circle-linear" width="12" height="12" />
                        <span className="text-[10px] font-medium" style={{ fontFamily: fontStack }}>Доступ видано автоматично</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-slate-950/15 rounded-full z-40" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
