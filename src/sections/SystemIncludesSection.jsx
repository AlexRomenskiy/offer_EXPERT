const fontStack = "'Manrope', sans-serif";

const channels = [
  { name: 'Telegram', icon: 'simple-icons:telegram', active: true },
  { name: 'Instagram', icon: 'simple-icons:instagram', active: true },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp', active: false },
  { name: 'TikTok', icon: 'simple-icons:tiktok', active: false },
  { name: 'Messenger', icon: 'simple-icons:messenger', active: false },
  { name: 'Email', icon: 'solar:letter-linear', active: true },
  { name: 'SMS', icon: 'solar:chat-round-line-linear', active: false },
];

const botActivity = [
  { user: 'Олена К.', text: 'Оплата $497 · доступ видано', time: '14:23', icon: 'simple-icons:telegram', accent: '#2ca5e0' },
  { user: 'Ihor B.', text: 'Кваліфіковано · готовий до оплати', time: '14:08', icon: 'simple-icons:instagram', accent: '#e1306c' },
  { user: 'Anna B.', text: 'Записалась на безкоштовний розбір', time: '13:45', icon: 'solar:letter-linear', accent: '#64748b' },
];

const funnelStages = [
  { label: 'Ліди', value: 100, pct: 100 },
  { label: 'Діалоги', value: 45, pct: 45 },
  { label: 'Оплати', value: 18, pct: 18 },
];

const leadMagnetTypes = [
  { icon: 'solar:document-text-linear', name: 'PDF · «5 помилок експерта»', meta: 'Магніт', active: true },
  { icon: 'solar:checklist-linear', name: 'Чек-лист запуску', meta: 'Магніт', active: false },
  { icon: 'solar:gift-linear', name: 'Mini-курс · $19', meta: 'Тріпваєр', active: false },
];

export default function SystemIncludesSection() {
  return (
    <section
      id="system-includes"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* === Header === */}
        <div className="relative max-w-3xl mb-14 lg:mb-16 anim-trigger text-center md:text-left">
          {/* Decorative dot-mesh background — Pricing-style base center */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Архітектура · під ключ
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              Що входить у
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                систему
              </span>
            </span>
          </h2>

          <p
            className="max-w-[46ch] text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Шість елементів — один потік: від чіткого позиціонування до
            повторних продажів.
          </p>
        </div>

        {/* === 6 panels === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 anim-trigger items-stretch">

          <Panel
            icon="solar:target-linear"
            title="Стратегія і позиціонування"
            description="Хто ти, кому продаєш та чому саме до тебе."
            pillLabel="Брифінг"
            mockup={<ImageMockup src="/Images/4. 1 audit - UA.png" alt="Стратегічна сесія: позиціонування експерта" />}
            delay="0.05s"
          />

          <Panel
            icon="solar:document-linear"
            title="Лендинг"
            description="Від однієї сторінки до повної структури під твій продукт."
            pillLabel="Mobile-ready"
            mockup={<ImageMockup src="/Images/4. 2 Landing page - UA.png" alt="Лендинг з УТП і живою заявкою" />}
            delay="0.10s"
          />

          <Panel
            icon="solar:magnet-linear"
            title="Лід-магніт + Тріпваєр"
            description="Ловить контакт і підвищує середній чек."
            pillLabel="Вхід"
            mockup={<ImageMockup src="/Images/4. 3 lead magnet_tripwire - UA.png" alt="Лід-магніт і тріпваєр з живою оплатою" />}
            delay="0.15s"
          />

          <Panel
            icon="solar:chat-round-dots-linear"
            title="Чат-бот"
            description="Єдина база клієнтів, діалог 24/7 та прогрів до покупки."
            pillLabel="Live"
            pillVariant="green"
            mockup={<ImageMockup src="/Images/4. 4 chatbot - UA.png" alt="Чат-бот з живою заявкою на розбір" />}
            delay="0.20s"
          />

          <Panel
            icon="solar:chart-2-linear"
            title="Аналітика"
            description="Прозорі цифри від першого кліку до повторних продажів."
            pillLabel="Sync"
            mockup={<ImageMockup src="/Images/4. 5 analytics - UA.png" alt="Аналітика з donut-атрибуцією по каналах" />}
            delay="0.25s"
          />

          <Panel
            icon="solar:rocket-2-linear"
            title="Трафік"
            description="Реклама в місцях, де є твоя аудиторія."
            pillLabel="Активна"
            mockup={<ImageMockup src="/Images/4. 6 Advertising - UA.png" alt="Реклама Meta Ads з живим лічильником заявок" />}
            premium
            delay="0.30s"
          />
        </div>

      </div>
    </section>
  );
}

/* ============================================================================
   Panel wrapper — consistent shell for all 6 cards
   ============================================================================ */
function Panel({ icon, title, description, pillLabel, pillVariant = 'blue', mockup, premium, delay }) {
  const pillStyles = pillVariant === 'green'
    ? { container: 'bg-emerald-50 border-emerald-200 text-emerald-700', dot: 'bg-emerald-500' }
    : { container: 'bg-[#175ae8]/10 border-[#175ae8]/25 text-[#175ae8]', dot: 'bg-[#175ae8]' };

  return (
    <div
      className="relative rounded-[28px] p-6 lg:p-7 flex flex-col gap-5 overflow-hidden bg-white/35 backdrop-blur-2xl border border-white/55 anim-fade-up h-full"
      style={{
        boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)',
        transitionDelay: delay,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)] pointer-events-none rounded-[28px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-blue-200/[0.18] blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center shrink-0">
              <iconify-icon icon={icon} width="18" height="18" style={{ color: '#175ae8' }} />
            </div>
            <h3
              className="text-[1.05rem] lg:text-[1.15rem] tracking-tight text-slate-950 font-medium leading-tight"
              style={{ fontFamily: fontStack }}
            >
              {title}
            </h3>
          </div>
          <p
            className="text-[0.88rem] text-slate-600 leading-[1.5]"
            style={{ fontFamily: fontStack }}
          >
            {description}
          </p>
        </div>
        {pillLabel && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium shrink-0 ${pillStyles.container}`}
            style={{ fontFamily: fontStack }}
          >
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${pillStyles.dot}`} />
            {pillLabel}
          </span>
        )}
      </div>

      <div className="relative z-10 flex-1 rounded-[18px] overflow-hidden border border-white/55 bg-white/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(148,163,184,0.10)] ring-1 ring-white/40 flex flex-col min-h-[280px]">
        {mockup}
      </div>

      {premium && (
        <div
          className="relative z-10 flex items-center gap-2 text-[12px] italic"
          style={{ fontFamily: fontStack }}
        >
          <span className="block w-6 h-px bg-[#175ae8]/40" />
          <span className="text-brand-gradient">У пакеті «Преміум»</span>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   Reusable mockup chrome
   ============================================================================ */
function TopBar({ left, right }) {
  return (
    <div className="px-4 py-2.5 border-b border-white/45 bg-white/[0.22] flex items-center justify-between shrink-0">
      <span className="text-[10.5px] text-slate-600 tracking-wide" style={{ fontFamily: fontStack }}>
        {left}
      </span>
      <span className="text-[9.5px] text-slate-500 tracking-wider uppercase" style={{ fontFamily: fontStack }}>
        {right}
      </span>
    </div>
  );
}

function BottomBar({ left, right }) {
  return (
    <div className="px-4 py-2.5 border-t border-white/45 bg-white/[0.18] flex items-center justify-between shrink-0">
      <span className="text-[10.5px] text-slate-600" style={{ fontFamily: fontStack }}>
        {left}
      </span>
      <span className="text-[9.5px] text-slate-500 tracking-wider uppercase" style={{ fontFamily: fontStack }}>
        {right}
      </span>
    </div>
  );
}

/* ============================================================================
   MOCKUPS — 6 unique inner UIs
   ============================================================================ */

/* ============================================================================
   ImageMockup — full-bleed PNG inside a panel slot.
   Used when a hyperreal-render replaces the JSX mockup entirely.
   ============================================================================ */
function ImageMockup({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

function LandingMockup() {
  return (
    <>
      <TopBar left="Сторінка" right="Конверсійна" />
      <div className="px-4 py-4 flex-1 flex flex-col gap-3 bg-white/[0.08]">
        <div className="rounded-lg bg-white/75 border border-slate-200/70 p-3 shadow-sm">
          <div className="flex items-center gap-1 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 bg-slate-300/60 rounded-sm" />
            <div className="h-2 w-1/2 bg-slate-300/40 rounded-sm" />
          </div>
          <div className="h-3 w-24 rounded-full mt-3" style={{ background: 'linear-gradient(90deg,#175ae8,#60a5fa)' }} />
        </div>
        <div className="space-y-1.5 px-1">
          <div className="h-1.5 w-full bg-slate-200/60 rounded-sm" />
          <div className="h-1.5 w-5/6 bg-slate-200/50 rounded-sm" />
          <div className="h-1.5 w-2/3 bg-slate-200/40 rounded-sm" />
        </div>
      </div>
      <BottomBar left="Конверсія 3.2%" right="Mobile-ready" />
    </>
  );
}

function LeadMagnetMockup() {
  return (
    <>
      <TopBar left="Лід-магніт + Тріпваєр" right="3 типи" />
      <div className="px-3 py-3 flex-1 flex flex-col gap-1.5 bg-white/[0.08]">
        {leadMagnetTypes.map((t, i) => (
          <div
            key={i}
            className={`flex items-center gap-2.5 p-2.5 rounded-xl ${
              t.active
                ? 'bg-[#175ae8]/10 border border-[#175ae8]/25'
                : 'bg-white/70 border border-slate-200/60'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${
                t.active
                  ? 'bg-[#175ae8]/15 border-[#175ae8]/30'
                  : 'bg-slate-100 border-slate-200'
              }`}
            >
              <iconify-icon
                icon={t.icon}
                width="13"
                height="13"
                style={{ color: t.active ? '#175ae8' : '#64748b' }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-slate-900 truncate" style={{ fontFamily: fontStack }}>
                {t.name}
              </div>
              <div className="text-[9.5px] text-slate-500" style={{ fontFamily: fontStack }}>
                {t.meta}
              </div>
            </div>
            {t.active && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"
                style={{ boxShadow: '0 0 4px rgba(16,185,129,0.5)' }}
              />
            )}
          </div>
        ))}
      </div>
      <BottomBar left="Контакт + чек" right="Auto" />
    </>
  );
}

function ChatBotMockup() {
  return (
    <>
      <TopBar left="7 каналів · інбокс" right="В роботі" />
      <div className="px-4 py-3 border-b border-white/45 flex items-center justify-between bg-white/[0.10] shrink-0">
        {channels.map((ch) => (
          <div key={ch.name} className="relative" title={ch.name}>
            <iconify-icon
              icon={ch.icon}
              width="18"
              height="18"
              style={{ color: ch.active ? '#1e293b' : '#94a3b8', opacity: ch.active ? 1 : 0.6 }}
            />
            {ch.active && (
              <span
                className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                style={{ boxShadow: '0 0 4px rgba(16,185,129,0.5)' }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-3 flex-1 flex flex-col gap-2.5">
        {botActivity.map((m, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/70 border border-slate-200/70 flex items-center justify-center shrink-0">
              <iconify-icon icon={m.icon} width="11" height="11" style={{ color: m.accent }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-900 font-medium truncate" style={{ fontFamily: fontStack }}>
                  {m.user}
                </span>
                <span className="text-[9.5px] text-slate-400 shrink-0 tabular-nums" style={{ fontFamily: fontStack }}>
                  {m.time}
                </span>
              </div>
              <p className="text-[10px] text-slate-600 truncate" style={{ fontFamily: fontStack }}>
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <BottomBar left="1,247 повідомлень" right="24/7" />
    </>
  );
}

function AnalyticsMockup() {
  return (
    <>
      <TopBar left="Цей тиждень" right="Auto · 2 хв" />
      <div className="px-4 py-3 border-b border-white/45 shrink-0">
        <div className="text-[10px] text-slate-500 mb-0.5" style={{ fontFamily: fontStack }}>
          Дохід
        </div>
        <div className="flex items-baseline gap-2">
          <span
            className="text-[2rem] tracking-[-0.04em] font-light text-slate-950 leading-none"
            style={{ fontFamily: fontStack }}
          >
            $4,891
          </span>
          <span
            className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 rounded-full px-1.5 py-0.5"
            style={{ fontFamily: fontStack }}
          >
            <iconify-icon icon="solar:arrow-up-linear" width="9" height="9" />
            +24%
          </span>
        </div>
      </div>

      <div className="px-4 py-3 flex-1 flex flex-col gap-2">
        <div className="text-[9.5px] text-slate-500 uppercase tracking-wider mb-0.5" style={{ fontFamily: fontStack }}>
          Воронка
        </div>
        {funnelStages.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span
              className="text-[10.5px] text-slate-700 font-medium w-[50px] shrink-0"
              style={{ fontFamily: fontStack }}
            >
              {f.label}
            </span>
            <div className="flex-1 h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${f.pct}%`, background: 'linear-gradient(90deg, #175ae8, #60a5fa)' }}
              />
            </div>
            <span
              className="text-[10.5px] text-slate-700 font-medium tabular-nums w-6 text-right shrink-0"
              style={{ fontFamily: fontStack }}
            >
              {f.value}
            </span>
          </div>
        ))}
      </div>
      <BottomBar left="Conv 18% · стабільно" right="✓" />
    </>
  );
}

function TrafficMockup() {
  return (
    <>
      <TopBar left="Кампанія · реклама" right="Live" />
      <div className="px-3 py-3 flex-1 flex flex-col gap-2.5 bg-white/[0.08]">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/70 border border-slate-200/60 p-2.5">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5" style={{ fontFamily: fontStack }}>
              Охоплення
            </div>
            <div className="text-[1rem] font-medium text-slate-950 tracking-tight" style={{ fontFamily: fontStack }}>
              1.2M
            </div>
          </div>
          <div className="rounded-lg bg-white/70 border border-slate-200/60 p-2.5">
            <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-0.5" style={{ fontFamily: fontStack }}>
              CTR
            </div>
            <div className="text-[1rem] font-medium text-slate-950 tracking-tight" style={{ fontFamily: fontStack }}>
              2.8%
            </div>
          </div>
        </div>

        <div className="mt-1">
          <div className="text-[9.5px] text-slate-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: fontStack }}>
            Креативи · 3
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300 border border-slate-300/60" />
            <div
              className="aspect-square rounded-md border relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,#175ae8,#60a5fa)',
                borderColor: 'rgba(23,90,232,0.3)',
              }}
            >
              <span
                className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse"
                style={{ boxShadow: '0 0 4px rgba(255,255,255,0.6)' }}
              />
            </div>
            <div className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300 border border-slate-300/60" />
          </div>
        </div>
      </div>
      <BottomBar left="CPM $4.20 · стабільно" right="A/B test" />
    </>
  );
}
