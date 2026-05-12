const channels = [
  { name: 'Telegram', icon: 'simple-icons:telegram' },
  { name: 'Instagram', icon: 'simple-icons:instagram' },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp' },
  { name: 'TikTok', icon: 'simple-icons:tiktok' },
  { name: 'Messenger', icon: 'simple-icons:messenger' },
  { name: 'Email', icon: 'solar:letter-linear' },
  { name: 'SMS', icon: 'solar:chat-round-line-linear' },
];

const fontStack = "'Manrope', sans-serif";

export default function SystemIncludesSection() {
  return (
    <section
      id="system-includes"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* atmospheric section wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)] pointer-events-none" />

      {/* structural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)',
            maskImage: 'radial-gradient(100% 100% at top left, black, transparent)',
          }}
        >
          <defs>
            <pattern id="system-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#system-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-14 lg:mb-16 anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Що входить
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.18s' }}>
                у систему
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up"
            style={{ transitionDelay: '0.28s', fontFamily: fontStack }}
          >
            Шість елементів, що працюють як один потік: від першого торкання до
            оплати і видачі продукту — без твоєї щохвилинної участі.
          </p>
        </div>

        {/* 3-column asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch anim-trigger">
          {/* ===================== Col 1 ===================== */}
          <div className="flex flex-col gap-6 lg:gap-7 min-h-full">
            {/* 1. Лендинг — large visual card */}
            <div
              className="group relative min-h-[320px] rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up"
              style={{ transitionDelay: '0.04s' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.52))]" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,0.22),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.14),transparent_32%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_48%)]" />
              </div>

              {/* Stylized landing mockup (top portion of card) */}
              <div className="absolute inset-x-7 top-7 lg:top-8 h-[56%] rounded-[18px] bg-[#0b1530]/95 overflow-hidden border border-white/10 shadow-[0_18px_40px_rgba(2,15,45,0.25)]">
                <div className="flex items-center gap-1.5 px-4 pt-4">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="ml-auto h-2 w-12 rounded-sm bg-[#175ae8]/55" />
                </div>
                <div className="px-4 mt-4">
                  <div className="h-2.5 w-3/4 rounded-sm bg-white/25 mb-2" />
                  <div className="h-2 w-1/2 rounded-sm bg-white/15" />
                </div>
                <div className="px-4 mt-4">
                  <div className="h-3.5 w-24 rounded-full bg-gradient-to-r from-[#175ae8] to-[#60a5fa] shadow-[0_4px_14px_rgba(23,90,232,0.45)]" />
                </div>
                <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/70" />
                  <span className="w-1 h-1 rounded-full bg-white/25" />
                  <span className="w-1 h-1 rounded-full bg-white/25" />
                </div>
              </div>

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-end">
                <h3
                  className="text-[1.55rem] lg:text-[1.7rem] leading-[1.08] tracking-[-0.03em] text-slate-950 mb-3 font-medium"
                  style={{ fontFamily: fontStack }}
                >
                  Лендинг
                </h3>
                <p
                  className="text-[0.98rem] leading-[1.7] text-slate-700 max-w-[26ch]"
                  style={{ fontFamily: fontStack }}
                >
                  Конверсійна сторінка під твою експертизу — структура, копірайт,
                  оффер. Веде відвідувача від інтересу до заявки.
                </p>
              </div>
            </div>

            {/* 2. Лід-магніт — metric card */}
            <div
              className="group relative min-h-[210px] rounded-[28px] overflow-hidden bg-white/36 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up"
              style={{ transitionDelay: '0.10s' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.50),transparent_52%)]" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.25) 1px, transparent 0)',
                  backgroundSize: '14px 14px',
                }}
              />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <iconify-icon
                    icon="solar:document-text-linear"
                    width="22"
                    height="22"
                    style={{ color: '#175ae8' }}
                  />
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    <span
                      className="rounded-full bg-white/70 border border-slate-200/70 px-2.5 py-0.5 text-[11px] text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      PDF
                    </span>
                    <span
                      className="rounded-full bg-white/70 border border-slate-200/70 px-2.5 py-0.5 text-[11px] text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      Чек-лист
                    </span>
                    <span
                      className="rounded-full bg-white/70 border border-slate-200/70 px-2.5 py-0.5 text-[11px] text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      Квіз
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-[1.55rem] lg:text-[1.7rem] leading-[1.08] tracking-[-0.03em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Лід-магніт
                  </h3>
                  <p
                    className="text-[0.98rem] leading-[1.7] text-slate-700 max-w-[30ch]"
                    style={{ fontFamily: fontStack }}
                  >
                    Безкоштовна цінність, що ловить контакт: PDF, чек-лист або
                    квіз — перший крок до угоди.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== Col 2 ===================== */}
          <div className="flex flex-col gap-6 lg:gap-7 min-h-full">
            {/* 3. Чат-бот — content card */}
            <div
              className="group relative min-h-[250px] rounded-[28px] overflow-hidden bg-white/34 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up"
              style={{ transitionDelay: '0.08s' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#175ae8]/45 to-transparent" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3.5 flex-wrap">
                  {channels.map((ch) => (
                    <iconify-icon
                      key={ch.name}
                      icon={ch.icon}
                      width="18"
                      height="18"
                      title={ch.name}
                      style={{ color: '#1e293b' }}
                    />
                  ))}
                </div>

                <div>
                  <h3
                    className="text-[1.55rem] lg:text-[1.7rem] leading-[1.08] tracking-[-0.03em] text-slate-950 mb-3 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Чат-бот
                  </h3>
                  <p
                    className="text-[1rem] lg:text-[1.05rem] leading-[1.75] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Підхоплює ліди в усіх 7 каналах одразу: відповідає,
                    кваліфікує, веде до оплати — без втрачених повідомлень.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Прийом оплат + видача — visual flow card */}
            <div
              className="group relative min-h-[280px] rounded-[28px] overflow-hidden bg-white/38 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up"
              style={{ transitionDelay: '0.14s' }}
            >
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.78) 1px, transparent 0)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(147,197,253,0.18),transparent_32%)]" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col items-center justify-center text-center">
                {/* flow: Оплата → Доступ */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/85 border border-white/80 shadow-[0_6px_16px_rgba(15,23,42,0.06)] flex items-center justify-center">
                      <iconify-icon
                        icon="solar:card-linear"
                        width="20"
                        height="20"
                        style={{ color: '#175ae8' }}
                      />
                    </div>
                    <span
                      className="mt-1.5 text-[11px] font-medium text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      Оплата
                    </span>
                  </div>
                  <div className="flex items-center -mt-5">
                    <span className="block w-5 h-px bg-[#175ae8]/55" />
                    <iconify-icon
                      icon="solar:arrow-right-linear"
                      width="16"
                      height="16"
                      style={{ color: '#175ae8' }}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#175ae8] to-[#60a5fa] flex items-center justify-center shadow-[0_10px_24px_rgba(23,90,232,0.30)]">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        width="20"
                        height="20"
                        style={{ color: '#ffffff' }}
                      />
                    </div>
                    <span
                      className="mt-1.5 text-[11px] font-medium text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      Доступ
                    </span>
                  </div>
                </div>

                <h3
                  className="text-[1.35rem] lg:text-[1.5rem] leading-[1.15] tracking-[-0.03em] text-slate-950 mb-2 font-medium max-w-[20ch]"
                  style={{ fontFamily: fontStack }}
                >
                  Прийом оплат + видача
                </h3>
                <p
                  className="text-[0.94rem] leading-[1.7] text-slate-700 max-w-[32ch]"
                  style={{ fontFamily: fontStack }}
                >
                  Один автоматизований потік: оплата зайшла — клієнт одразу
                  отримує продукт. Без переписок, без затримок.
                </p>
              </div>
            </div>
          </div>

          {/* ===================== Col 3 ===================== */}
          <div className="flex flex-col gap-6 lg:gap-7 min-h-full">
            {/* 5. Аналітика — compact card */}
            <div
              className="group relative min-h-[190px] rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up"
              style={{ transitionDelay: '0.12s' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.50),transparent_52%)]" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <iconify-icon
                    icon="solar:chart-2-linear"
                    width="22"
                    height="22"
                    style={{ color: '#175ae8' }}
                  />
                  <svg
                    width="72"
                    height="22"
                    viewBox="0 0 72 22"
                    fill="none"
                    className="opacity-90"
                  >
                    <path
                      d="M0 18 L12 14 L22 16 L32 9 L44 12 L56 5 L72 7"
                      stroke="#175ae8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                <div>
                  <h3
                    className="text-[1.35rem] lg:text-[1.5rem] leading-[1.1] tracking-[-0.03em] text-slate-950 mb-2 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Аналітика
                  </h3>
                  <p
                    className="text-[0.94rem] leading-[1.65] text-slate-700 max-w-[28ch]"
                    style={{ fontFamily: fontStack }}
                  >
                    Дашборд конверсій і ROI. Видно, де ллється і де працює —
                    рішення на цифрах, не на здогадках.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Трафік — premium tall dark card */}
            <div
              className="group relative flex-1 min-h-[340px] rounded-[28px] overflow-hidden brand-gradient shadow-[0_24px_70px_rgba(2,15,45,0.30)] border border-white/15 anim-fade-up"
              style={{ transitionDelay: '0.18s' }}
            >
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(96,165,250,0.30),transparent_30%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between text-white">
                <div className="flex items-center gap-2 text-slate-200/80">
                  <iconify-icon
                    icon="simple-icons:meta"
                    width="16"
                    height="16"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  />
                  <iconify-icon
                    icon="simple-icons:instagram"
                    width="16"
                    height="16"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  />
                  <span
                    className="text-[12px] tracking-wide text-slate-300/80 ml-1"
                    style={{ fontFamily: fontStack }}
                  >
                    Платні канали
                  </span>
                </div>

                <div>
                  <h3
                    className="text-[1.8rem] lg:text-[2rem] leading-[1.08] tracking-[-0.03em] text-white mb-4 font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    Трафік
                  </h3>
                  <p
                    className="text-[0.98rem] leading-[1.75] text-slate-300/90 mb-6 max-w-[28ch]"
                    style={{ fontFamily: fontStack }}
                  >
                    Налаштування реклами під твою воронку: Meta Pixel + CAPI,
                    креативи, аудиторії, ретаргетинг. Веду кампанії, щоб ліди
                    йшли стабільно.
                  </p>

                  <div
                    className="flex items-center gap-2 text-[12px] italic text-blue-200/90"
                    style={{ fontFamily: fontStack }}
                  >
                    <span className="block w-6 h-px bg-blue-300/40" />
                    У пакеті «Преміум»
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
