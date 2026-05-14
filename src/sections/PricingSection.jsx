import { useEffect, useRef, useState } from 'react';

const fontStack = "'Manrope', sans-serif";

const phrases = ['формат роботи', 'шлях до масштабу', 'рівень системи'];

const pricing = [
  {
    key: 'фундамент',
    icon: 'solar:home-2-linear',
    title: 'Фундамент',
    mobileBadge: 'СТАРТ',
    price: '$495',
    timeline: '5–7 днів · точка входу',
    timelineShort: '5–7 днів',
    description: 'Цифрова присутність експерта.',
    mobileDescription: 'Точка входу для реклами і збір контактів. Якщо продукт є, але немає посадки і збору.',
    features: [
      'Стратегія і позиціонування',
      'Посадкова сторінка',
      'Чат-бот для збору лідів',
    ],
    metrics: { days: '5–7', modules: '3', ads: '—' },
    highlight: false,
  },
  {
    key: 'генератор',
    icon: 'solar:bolt-linear',
    title: 'Генератор',
    badge: 'ОПТИМАЛЬНИЙ',
    mobileBadge: 'ОПТИМАЛЬНИЙ',
    price: '$990',
    timeline: '14 днів · під ключ',
    timelineShort: '14 днів',
    description: 'Повна воронка — від кліку до оплати.',
    mobileDescription: 'Повна воронка під ключ — від рекламного кліку до автоматичної видачі продукту.',
    features: [
      'Все з «Фундамент»',
      'Упаковка продукту',
      'Автоматичний прийом оплат',
      'Автоматична видача',
      'Підключені інтеграції',
    ],
    metrics: { days: '14', modules: '7', ads: '—' },
    highlight: true,
  },
  {
    key: 'преміум',
    icon: 'solar:rocket-2-linear',
    title: 'Преміум',
    mobileBadge: 'МАХ',
    price: '$1,690',
    timeline: '14–21 днів · з трафіком',
    timelineShort: '14–21 днів',
    description: 'Повна воронка + рекламний трафік.',
    mobileDescription: 'Повна воронка + ведення реклами перший місяць. Без двох підрядників.',
    features: [
      'Все з «Генератор»',
      'Meta Pixel + CAPI',
      'Цільові аудиторії',
      'Рекламні креативи (3)',
      'Кампанії — перший місяць',
    ],
    metrics: { days: '14–21', modules: '11', ads: '✓' },
    highlight: false,
  },
];

export default function PricingSection() {
  // ============== Typewriter effect ==============
  const [displayText, setDisplayText] = useState('');
  const phraseIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeoutId;
    const tick = () => {
      const current = phrases[phraseIdxRef.current];

      if (isDeletingRef.current) {
        setDisplayText(current.substring(0, charIdxRef.current - 1));
        charIdxRef.current -= 1;
      } else {
        setDisplayText(current.substring(0, charIdxRef.current + 1));
        charIdxRef.current += 1;
      }

      let speed = isDeletingRef.current ? 40 : 80;

      if (!isDeletingRef.current && charIdxRef.current === current.length) {
        speed = 2500;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && charIdxRef.current === 0) {
        isDeletingRef.current = false;
        phraseIdxRef.current = (phraseIdxRef.current + 1) % phrases.length;
        speed = 500;
      }

      timeoutId = setTimeout(tick, speed);
    };
    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  // ============== Dot highlight loop (icon cluster) ==============
  const [activeDotIdx, setActiveDotIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveDotIdx((prev) => (prev + 1) % 3);
    }, 300);
    return () => clearInterval(id);
  }, []);

  const scrollToCTA = (e) => {
    e.preventDefault();
    document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-28 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden"
    >
      {/* === Lamp glow above cards (premium spotlight) === */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.55), transparent 60%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(23,90,232,0.10), transparent 65%)' }}
      />

      {/* === Side chips + animated traces (md+ only) === */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-[5.5rem] lg:top-[6.5rem] left-1/2 -translate-x-1/2 pointer-events-none z-[1]"
        style={{ width: '1400px' }}
      >
        <svg width="1400" height="240" viewBox="0 0 1400 240" fill="none">
          <defs>
            <linearGradient id="chipGradPricing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f4f4f5" />
            </linearGradient>
            <filter id="chipShadowPricing" x="-100%" y="-100%" width="300%" height="300%">
              <feDropShadow dx="0" dy="20" stdDeviation="15" floodColor="#000" floodOpacity="0.10" />
            </filter>
            <filter id="dotGlowPricing" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* === LEFT side: 3 entry lines + chip + animated trace inward === */}
          <g>
            <line x1="100" y1="50" x2="140" y2="50" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="100" y1="60" x2="140" y2="60" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="100" y1="70" x2="140" y2="70" stroke="#d4d4d8" strokeWidth="1.5" />

            <rect
              x="140"
              y="35"
              width="70"
              height="50"
              rx="6"
              fill="url(#chipGradPricing)"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="1"
              filter="url(#chipShadowPricing)"
            />
            <circle cx="150" cy="45" r="1.5" fill="#a1a1aa">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="195" cy="60" r="2.5" fill="#175ae8" filter="url(#dotGlowPricing)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>

            <path d="M 210 60 H 400 L 520 170" stroke="#d4d4d8" strokeWidth="1.5" fill="none" />
            <path
              d="M 210 60 H 400 L 520 170"
              stroke="#175ae8"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="50 400"
              strokeDashoffset="400"
            >
              <animate attributeName="stroke-dashoffset" values="400;-50" dur="3s" repeatCount="indefinite" />
            </path>
          </g>

          {/* === RIGHT side: mirrored === */}
          <g>
            <line x1="1300" y1="50" x2="1260" y2="50" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="1300" y1="60" x2="1260" y2="60" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="1300" y1="70" x2="1260" y2="70" stroke="#d4d4d8" strokeWidth="1.5" />

            <rect
              x="1190"
              y="35"
              width="70"
              height="50"
              rx="6"
              fill="url(#chipGradPricing)"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="1"
              filter="url(#chipShadowPricing)"
            />
            <circle cx="1250" cy="45" r="1.5" fill="#a1a1aa">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="1205" cy="60" r="2.5" fill="#175ae8" filter="url(#dotGlowPricing)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" repeatCount="indefinite" />
            </circle>

            <path d="M 1190 60 H 1000 L 880 170" stroke="#d4d4d8" strokeWidth="1.5" fill="none" />
            <path
              d="M 1190 60 H 1000 L 880 170"
              stroke="#175ae8"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="50 400"
              strokeDashoffset="400"
            >
              <animate attributeName="stroke-dashoffset" values="400;-50" dur="3.5s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ============== Header cluster ============== */}
        <div className="text-center mb-14 lg:mb-16 anim-trigger">

          {/* Icon cluster: 3 dots + rounded icon + 3 dots */}
          <div
            className="flex items-center justify-center gap-5 mb-8 anim-fade-up"
            style={{ transitionDelay: '0s' }}
          >
            {/* Left 3 dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={`l${i}`}
                  className="w-1 h-1 rounded-full bg-slate-700 transition-all duration-300"
                  style={{
                    opacity: activeDotIdx === i ? 0.8 : 0.2,
                    boxShadow: activeDotIdx === i ? '0 0 6px rgba(23,90,232,0.55)' : 'none',
                  }}
                />
              ))}
            </div>

            {/* Center icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%)',
                boxShadow:
                  'inset 0 2px 5px rgba(0,0,0,0.02), inset 0 0 0 1px rgba(0,0,0,0.04), 0 10px 15px -3px rgba(0,0,0,0.05), 0 25px 30px -5px rgba(0,0,0,0.08), 0 50px 60px -10px rgba(0,0,0,0.10)',
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
                  backgroundSize: '4px 4px',
                }}
              />
              <iconify-icon
                icon="solar:layers-minimalistic-linear"
                width="24"
                height="24"
                style={{
                  color: '#175ae8',
                  filter: 'drop-shadow(0 0 6px rgba(23,90,232,0.40))',
                  position: 'relative',
                  zIndex: 10,
                }}
              />
            </div>

            {/* Right 3 dots (mirrored highlight: outer→inner symmetry) */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={`r${i}`}
                  className="w-1 h-1 rounded-full bg-slate-700 transition-all duration-300"
                  style={{
                    opacity: activeDotIdx === 2 - i ? 0.8 : 0.2,
                    boxShadow: activeDotIdx === 2 - i ? '0 0 6px rgba(23,90,232,0.55)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.1] tracking-[-0.04em] text-slate-950 font-light mb-4 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.10s' }}
          >
            <span className="block">Обери свій</span>
            <span className="block text-[#175ae8] font-medium min-h-[1.15em]">
              {displayText}
              <span
                className="inline-block w-[2px] h-[0.8em] bg-[#175ae8] ml-1 animate-pulse align-baseline"
                style={{ transform: 'translateY(2px)' }}
              />
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.20s' }}
          >
            Три рівні системи продажу. Вище — більше зроблено за тебе.
          </p>
        </div>

        {/* ============== Mobile: single tab-switching glass card ============== */}
        <div className="md:hidden anim-trigger">
          <MobilePricingCard onCTA={scrollToCTA} />
        </div>

        {/* ============== Desktop: 3 dark cards side-by-side ============== */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 anim-trigger">
          {pricing.map((tier, i) => (
            <PricingCard
              key={tier.key}
              tier={tier}
              delay={`${0.05 + i * 0.08}s`}
              onCTA={scrollToCTA}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   Single pricing card (dark — premium island on light page)
   ============================================================================ */
function PricingCard({ tier, delay, onCTA }) {
  const { icon, title, badge, price, timeline, description, features, highlight } = tier;

  return (
    <div
      className={`group relative p-7 lg:p-8 rounded-[28px] flex flex-col anim-fade-up transition-all duration-500 ease-out hover:-translate-y-2 ${
        highlight ? 'md:-translate-y-4 md:hover:-translate-y-6' : ''
      }`}
      style={{
        transitionDelay: delay,
        background: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
        boxShadow: highlight
          ? 'inset 0 1px 0 rgba(255,255,255,0.10), inset 0 0 0 1px rgba(23,90,232,0.40), 0 25px 60px -10px rgba(23,90,232,0.20), 0 60px 100px -20px rgba(23,90,232,0.30)'
          : 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -10px rgba(0,0,0,0.30), 0 40px 80px -20px rgba(0,0,0,0.40)',
      }}
    >
      {/* Corner pulse dots — highlight card only */}
      {highlight && (
        <>
          <div className="absolute top-4 left-4 w-1 h-1 rounded-full bg-[#175ae8]/45 shadow-[0_0_4px_rgba(23,90,232,0.45)] animate-pulse" />
          <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-[#175ae8]/45 shadow-[0_0_4px_rgba(23,90,232,0.45)] animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-[#175ae8]/45 shadow-[0_0_4px_rgba(23,90,232,0.45)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-[#175ae8]/45 shadow-[0_0_4px_rgba(23,90,232,0.45)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <iconify-icon
          icon={icon}
          width="22"
          height="22"
          style={{ color: highlight ? '#175ae8' : '#a1a1aa' }}
        />
        <h3 className="text-[1.1rem] font-normal text-white" style={{ fontFamily: fontStack }}>
          {title}
        </h3>
        {badge && (
          <span
            className="ml-auto px-2.5 py-0.5 rounded-full bg-[#175ae8]/15 text-[#60a5fa] text-[10px] font-medium tracking-wider border border-[#175ae8]/30"
            style={{ fontFamily: fontStack }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div
        className="text-[2.6rem] lg:text-[2.9rem] tracking-[-0.04em] font-light text-white mb-1.5 leading-none"
        style={{ fontFamily: fontStack }}
      >
        {price}
      </div>
      <p className="text-[0.8rem] text-zinc-500 mb-2" style={{ fontFamily: fontStack }}>
        {timeline}
      </p>
      <p
        className="text-[0.92rem] text-zinc-400 font-light mb-7 lg:mb-8 leading-snug"
        style={{ fontFamily: fontStack }}
      >
        {description}
      </p>

      {/* CTA */}
      <a
        href="#request-access"
        onClick={onCTA}
        className={`w-full text-center rounded-xl py-3 text-[0.92rem] font-medium transition-all active:scale-[0.98] mb-7 lg:mb-8 text-white ${
          highlight
            ? 'bg-gradient-to-b from-[#175ae8] to-[#0e47c8] hover:from-[#1f6df0] hover:to-[#175ae8]'
            : 'bg-gradient-to-b from-[#27272a] to-[#18181b] hover:from-[#3f3f46] hover:to-[#27272a]'
        }`}
        style={{
          fontFamily: fontStack,
          boxShadow: highlight
            ? 'inset 0 1px 1px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.30), 0 10px 25px -5px rgba(23,90,232,0.40), 0 0 0 1px rgba(14,71,200,0.6)'
            : 'inset 0 1px 1px rgba(255,255,255,0.10), inset 0 -1px 2px rgba(0,0,0,0.20), 0 5px 12px -3px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        Записатись на розбір
      </a>

      {/* Divider */}
      <div
        className={`h-px w-full mb-7 ${
          highlight
            ? 'bg-gradient-to-r from-transparent via-[#175ae8]/30 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }`}
      />

      {/* Features list */}
      <ul className="space-y-3.5 flex-1">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[0.9rem] font-light text-zinc-400"
            style={{ fontFamily: fontStack }}
          >
            <iconify-icon
              icon={highlight ? 'solar:bolt-linear' : 'solar:alt-arrow-right-linear'}
              width="16"
              height="16"
              style={{
                color: highlight ? '#175ae8' : '#71717a',
                marginTop: '3px',
                flexShrink: 0,
              }}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================================
   Mobile pricing card with tab switcher (light glass — concept-aligned)
   ============================================================================ */
function MobilePricingCard({ onCTA }) {
  const [activeKey, setActiveKey] = useState('генератор');
  const active = pricing.find((p) => p.key === activeKey);

  return (
    <div className="relative anim-fade-up">
      {/* Subtle blue glow blob behind card */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-blue-200/25 blur-[80px] pointer-events-none"
      />

      <div
        className="relative p-6 sm:p-7 rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/60 flex flex-col"
        style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
      >
        {/* Glass highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
        />

        <div className="relative z-10">

          {/* Title + active badge */}
          <div className="flex justify-between items-center gap-3 mb-5">
            <h3
              className="text-[1.35rem] tracking-tight text-slate-950 font-medium"
              style={{ fontFamily: fontStack }}
            >
              Тариф
            </h3>
            <span
              className="px-3 py-1 rounded-full border border-[#175ae8]/30 bg-white/70 text-[10px] tracking-wider text-[#175ae8] font-medium"
              style={{ fontFamily: fontStack }}
            >
              {active.mobileBadge}
            </span>
          </div>

          {/* Tab switcher */}
          <div
            className="inline-flex p-1 rounded-full bg-white/50 border border-white/70 shadow-sm w-full gap-1 backdrop-blur-md mb-7"
          >
            {pricing.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setActiveKey(p.key)}
                className={`flex-1 px-3 py-2 rounded-full text-[11px] tracking-wide transition-all ${
                  activeKey === p.key
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                style={{ fontFamily: fontStack }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Price + timeline */}
          <div className="flex items-baseline gap-2 mb-3">
            <span
              className="text-[3.4rem] tracking-[-0.04em] text-slate-950 font-light leading-none"
              style={{ fontFamily: fontStack }}
            >
              {active.price}
            </span>
            <span
              className="text-[10px] tracking-wider text-slate-500 uppercase"
              style={{ fontFamily: fontStack }}
            >
              / {active.timelineShort}
            </span>
          </div>

          <p
            className="text-[0.92rem] text-slate-600 leading-[1.6] mb-7"
            style={{ fontFamily: fontStack }}
          >
            {active.mobileDescription}
          </p>

          {/* Metrics: Терміни / Модулі / Реклама */}
          <div className="grid grid-cols-3 gap-2 mb-7">
            <MetricCell label="Терміни" value={active.metrics.days} />
            <MetricCell label="Модулі" value={active.metrics.modules} />
            <MetricCell label="Реклама" value={active.metrics.ads} />
          </div>

          {/* Features */}
          <div className="space-y-3 mb-7">
            {active.features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[0.93rem] text-slate-700"
                style={{ fontFamily: fontStack }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#175ae8] shrink-0 mt-[7px]" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#request-access"
            onClick={onCTA}
            className="w-full inline-flex h-12 items-center justify-center rounded-full bg-slate-950 hover:bg-[#175ae8] text-white text-[0.92rem] font-medium transition-colors shadow-[0_10px_30px_rgba(15,23,42,0.14)]"
            style={{ fontFamily: fontStack }}
          >
            Записатись на розбір
          </a>
        </div>
      </div>
    </div>
  );
}

function MetricCell({ label, value }) {
  return (
    <div
      className="rounded-2xl bg-white/60 border border-white/70 p-3 shadow-sm backdrop-blur-md"
    >
      <div
        className="text-[9px] tracking-wider text-slate-500 mb-1 uppercase"
        style={{ fontFamily: fontStack }}
      >
        {label}
      </div>
      <div
        className="text-[1.1rem] font-medium text-slate-950 tracking-tight"
        style={{ fontFamily: fontStack }}
      >
        {value}
      </div>
    </div>
  );
}
