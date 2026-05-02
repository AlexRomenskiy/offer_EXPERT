import { useState, useEffect, useRef } from 'react';

const STRATEGY_FEATURE = 'Стратегія і позиціонування (повний склад)';

const TRAFFIC_FEATURES = [
  'Meta Pixel + CAPI',
  'Цільові аудиторії і look-alike',
  'Рекламні креативи (3 шт)',
  'Запуск і ведення кампаній — перший місяць',
];

const packages = [
  {
    name: 'Фундамент',
    description: 'Цифрова присутність експерта: точка входу для реклами і збір клієнтської бази.',
    price: '$495',
    duration: '5–7 робочих днів',
    icon: 'solar:rocket-linear',
    cta: 'Обговорити на безкоштовному розборі',
    featured: false,
    fit: 'Якщо продукт вже є, але немає точки входу і збору контактів.',
    result: 'Готова точка входу для реклами і збір контактів.',
    tone: 'light',
    features: [
      { text: STRATEGY_FEATURE, included: true, group: true },
      { text: 'Посадкова сторінка (цифрова візитка)', included: true },
      { text: 'Чат-бот для збору лідів', included: true },
      { text: 'Упаковка продукту', included: false },
      { text: 'Комплекс продуктових сторінок', included: false },
      { text: 'Автоматизація після покупки', included: false },
      { text: 'Автоматичний прийом оплат', included: false },
      { text: TRAFFIC_FEATURES[0], included: false },
      { text: TRAFFIC_FEATURES[1], included: false },
      { text: TRAFFIC_FEATURES[2], included: false },
      { text: TRAFFIC_FEATURES[3], included: false },
    ],
  },
  {
    name: 'Генератор',
    description: 'Повна упаковка продукту експерта: від ідеї до запуску продажів.',
    price: '$990',
    duration: '14 робочих днів',
    icon: 'solar:crown-linear',
    cta: 'Забронювати слот на розбір',
    featured: true,
    badge: 'Оптимальний вибір',
    fit: 'Якщо готовий запустити повну воронку під ключ і прибрати ручні процеси.',
    result: 'Воронка продає продукт без твоєї участі — від рекламного кліку до оплати.',
    tone: 'featured',
    features: [
      { text: STRATEGY_FEATURE, included: true, group: true },
      { text: 'Посадкова сторінка (цифрова візитка)', included: true },
      { text: 'Чат-бот для збору лідів', included: true },
      { text: 'Упаковка продукту', included: true },
      { text: 'Комплекс продуктових сторінок', included: true },
      { text: 'Автоматизація після покупки', included: true },
      { text: 'Автоматичний прийом оплат', included: true },
      { text: TRAFFIC_FEATURES[0], included: false },
      { text: TRAFFIC_FEATURES[1], included: false },
      { text: TRAFFIC_FEATURES[2], included: false },
      { text: TRAFFIC_FEATURES[3], included: false },
    ],
  },
  {
    name: 'Преміум',
    description: 'Повна воронка + рекламний трафік. Запускаю кампанії і веду до перших продажів через рекламу.',
    price: '$1,690',
    duration: '14–21 робочих днів',
    icon: 'solar:diamond-linear',
    cta: 'Обговорити на безкоштовному розборі',
    featured: false,
    fit: 'Якщо хочеш одразу запустити воронку з рекламним трафіком, без двох підрядників.',
    result: 'Перші продажі через рекламу — без твого занурення в ads-manager.',
    tone: 'dark',
    features: [
      { text: STRATEGY_FEATURE, included: true, group: true },
      { text: 'Посадкова сторінка (цифрова візитка)', included: true },
      { text: 'Чат-бот для збору лідів', included: true },
      { text: 'Упаковка продукту', included: true },
      { text: 'Комплекс продуктових сторінок', included: true },
      { text: 'Автоматизація після покупки', included: true },
      { text: 'Автоматичний прийом оплат', included: true },
      { text: TRAFFIC_FEATURES[0], included: true },
      { text: TRAFFIC_FEATURES[1], included: true },
      { text: TRAFFIC_FEATURES[2], included: true },
      { text: TRAFFIC_FEATURES[3], included: true },
    ],
  },
];

const strategyPackage = {
  name: 'Стратегія',
  price: '$150',
  duration: 'до 3 робочих днів',
  fit: 'Якщо ще не визначився з продуктом і потрібен напрямок.',
  format: 'PDF-документ + 30-хв обговорення',
  refund: 'Вартість $150 повертається знижкою при переході на Фундамент, Генератор або Преміум протягом 30 днів.',
  result: 'Розумієш, які кроки і в якому порядку дають продажі — без здогадок.',
  features: [
    'Аудит точки А — продукт, аудиторія, поточні канали',
    'Аналіз конкурентів і позиціонування',
    'План розвитку на 3 місяці — по тижнях, з пріоритетами',
    'Які інструменти й канали запускати і в якому порядку',
  ],
};

const supportRows = [
  { label: 'Технічний моніторинг (бот, оплати, інтеграції живі)', basic: true, pro: true },
  { label: 'Дрібні правки (тексти, ціни, банери)', basic: 'до 3 / міс', pro: 'до 8 / міс' },
  { label: 'Швидкість відповіді', basic: 'до 24 год', pro: 'до 4 год у робочий час' },
  { label: 'Аналітика воронки і звіт', basic: false, pro: 'щомісячний звіт + 1 консультація' },
];

const SLOT_CYCLE = [2, 3, 2, 1, 2, 3, 2];

function getSlotsForToday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return SLOT_CYCLE[dayOfYear % SLOT_CYCLE.length];
}

function StrategyFeatureRow({ feature, packageFeatures, tone }) {
  const [open, setOpen] = useState(false);
  const isDark = tone === 'dark';
  return (
    <li className="text-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center gap-3 text-left transition-colors ${isDark ? 'text-white/85 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
        aria-expanded={open}
      >
        <iconify-icon icon="solar:check-circle-linear" width="16" height="16" className={isDark ? 'text-orange-400 shrink-0' : 'text-orange-500 shrink-0'} />
        <span className="flex-1">{feature.text}</span>
        <iconify-icon
          icon="solar:alt-arrow-down-linear"
          width="14"
          height="14"
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''} ${isDark ? 'text-slate-400' : 'text-slate-400'}`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <ul className={`mt-2 ml-7 space-y-1.5 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {packageFeatures.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function PricingSection() {
  const [typewriterText, setTypewriterText] = useState('');
  const [slots, setSlots] = useState(null);
  const [showStrategy, setShowStrategy] = useState(false);
  const strategyWrapperRef = useRef(null);

  useEffect(() => {
    const phrases = ['формат роботи', 'шлях до масштабу', 'рівень системи'];
    let pIdx = 0, cIdx = 0, isDeleting = false, timeoutId;
    function type() {
      const current = phrases[pIdx];
      setTypewriterText(isDeleting ? current.substring(0, cIdx - 1) : current.substring(0, cIdx + 1));
      cIdx = isDeleting ? cIdx - 1 : cIdx + 1;
      let speed = isDeleting ? 40 : 80;
      if (!isDeleting && cIdx === current.length) { speed = 2500; isDeleting = true; }
      else if (isDeleting && cIdx === 0) { isDeleting = false; pIdx = (pIdx + 1) % phrases.length; speed = 500; }
      timeoutId = setTimeout(type, speed);
    }
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setSlots(getSlotsForToday()), 1100);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!showStrategy || !strategyWrapperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setShowStrategy(false); },
      { threshold: 0 }
    );
    observer.observe(strategyWrapperRef.current);
    return () => observer.disconnect();
  }, [showStrategy]);

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-white scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,244,250,0.4),rgba(255,255,255,1)_24%,rgba(255,255,255,1)_100%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="pricing-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-14 lg:mb-20 text-center mx-auto anim-trigger">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{ transitionDelay: '0s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
              Тарифи · 3 пакети
            </span>
          </div>

          <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5">
            <span className="block anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Обери свій</span>
            </span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{typewriterText}</span>
              <span className="animate-pulse text-orange-500">_</span>
            </span>
          </h2>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50/80 px-4 py-2 mt-2 min-h-[36px] anim-fade-up" style={{ transitionDelay: '0.3s' }}>
            {slots === null ? (
              <>
                <iconify-icon icon="solar:refresh-linear" width="14" height="14" className="text-orange-500 animate-spin" />
                <span className="text-sm text-orange-700/70 font-medium">Перевіряю доступність…</span>
              </>
            ) : (
              <>
                <iconify-icon icon="solar:bolt-linear" width="14" height="14" className="text-orange-500" />
                <span className="text-sm text-orange-700 font-medium">
                  {slots === 1 ? 'Залишився лише 1 слот цього тижня' : `Зараз вільно: ${slots} слоти з 5`}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Plans grid (mockup pattern: 3-up, middle elevated, third dark) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 anim-trigger items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, i) => {
            const isFeatured = pkg.tone === 'featured';
            const isDark = pkg.tone === 'dark';
            const baseCard = isDark
              ? 'bg-[#1a1c23] border-2 border-[#2a2d36] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5),0_16px_32px_-8px_rgba(0,0,0,0.3)] text-white'
              : isFeatured
                ? 'bg-white border-2 border-orange-100 shadow-[0_40px_80px_-20px_rgba(249,115,22,0.25),0_16px_32px_-8px_rgba(249,115,22,0.15)] md:-translate-y-4'
                : 'bg-white border-2 border-slate-50 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15),0_12px_24px_-6px_rgba(15,23,42,0.08)]';

            return (
              <div
                key={i}
                className={`group relative rounded-[32px] p-8 flex flex-col transition-transform duration-500 hover:-translate-y-2 anim-fade-up ${baseCard} ${isFeatured ? 'z-20 hover:-translate-y-6' : 'z-10'}`}
                style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/70 bg-orange-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-orange-700 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      {pkg.badge}
                    </span>
                  </div>
                )}
                {isDark && (
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Tier label */}
                  <div className={`inline-flex self-start px-5 py-2 rounded-full text-[13px] font-semibold mb-6 tracking-wide ${
                    isDark
                      ? 'bg-slate-800 text-white shadow-[0_8px_16px_rgba(0,0,0,0.3)] border border-slate-700/50'
                      : isFeatured
                        ? 'bg-orange-500 text-white shadow-[0_8px_16px_rgba(249,115,22,0.30)]'
                        : 'bg-slate-900 text-white shadow-[0_8px_16px_rgba(15,23,42,0.20)]'
                  }`}>
                    {pkg.name}
                  </div>

                  {/* Price */}
                  <h3 className={`font-display text-[2.4rem] tracking-tight font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {pkg.price}
                  </h3>

                  {/* Description with left border */}
                  <div className={`pl-4 border-l-[3px] mb-6 ${isDark ? 'border-slate-700' : isFeatured ? 'border-orange-200' : 'border-slate-200'}`}>
                    <p className={`text-[0.95rem] leading-[1.5] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Duration row */}
                  <div className={`flex items-center gap-1.5 text-xs mb-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <iconify-icon icon="solar:clock-circle-linear" width="14" height="14" />
                    <span>Реалізація: <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>{pkg.duration}</span></span>
                  </div>

                  {/* Fit hint */}
                  <div className={`mb-6 flex items-start gap-2 rounded-lg px-3 py-2 ${
                    isDark ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-slate-50/70 border border-slate-100'
                  }`}>
                    <iconify-icon icon="solar:user-check-linear" width="14" height="14" className={`shrink-0 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
                    <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{pkg.fit}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, j) =>
                      f.group ? (
                        <StrategyFeatureRow key={j} feature={f} packageFeatures={strategyPackage.features} tone={pkg.tone} />
                      ) : (
                        <li
                          key={j}
                          className={`flex items-center gap-3 text-sm ${
                            f.included
                              ? isDark
                                ? 'text-slate-300'
                                : 'text-slate-700'
                              : isDark
                                ? 'text-slate-600 line-through'
                                : 'text-slate-300 line-through'
                          }`}
                        >
                          <iconify-icon
                            icon={f.included ? 'solar:check-circle-linear' : 'solar:close-circle-linear'}
                            width="16"
                            height="16"
                            className={f.included ? (isDark ? 'text-orange-400' : 'text-orange-500') : (isDark ? 'text-slate-700' : 'text-slate-200')}
                          />
                          {f.text}
                        </li>
                      )
                    )}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full inline-flex items-center justify-center h-14 rounded-full font-semibold text-[1rem] transition-all duration-300 hover:scale-[1.02] ${
                      isDark
                        ? 'border border-slate-700/50 bg-gradient-to-b from-[#2a2d36] to-[#1a1c23] text-white shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_-4px_0_rgba(0,0,0,0.3)]'
                        : isFeatured
                          ? 'border border-transparent bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-[0_12px_24px_rgba(249,115,22,0.35),inset_0_-4px_0_rgba(0,0,0,0.15)]'
                          : 'border border-slate-200 bg-gradient-to-b from-white to-slate-50 text-slate-900 shadow-[0_12px_24px_rgba(15,23,42,0.10),inset_0_-4px_0_rgba(15,23,42,0.05)]'
                    }`}
                  >
                    {pkg.cta}
                  </button>

                  {/* Result */}
                  <div className={`mt-5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                    <div className="flex items-start gap-2.5">
                      <iconify-icon icon="solar:star-fall-linear" width="16" height="16" className={`shrink-0 mt-0.5 ${isFeatured ? 'text-orange-500' : isDark ? 'text-orange-400' : 'text-slate-400'}`} />
                      <span className={`text-sm font-light ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                        <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>Результат:</span> {pkg.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategy soft entry — collapsible */}
        <div className="mt-12 anim-trigger" ref={strategyWrapperRef}>
          <button
            type="button"
            onClick={() => setShowStrategy((v) => !v)}
            className="group flex items-center gap-2 mx-auto text-sm text-slate-500 hover:text-slate-800 transition-colors anim-fade-up"
            aria-expanded={showStrategy}
          >
            <span className="border-b border-dashed border-slate-300 group-hover:border-slate-500 transition-colors">
              Не готовий на повний пакет? Є м'якший варіант старту
            </span>
            <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" className={`transition-transform ${showStrategy ? 'rotate-180' : ''}`} />
          </button>

          <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${showStrategy ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className="rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] p-7 lg:p-8 relative">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-orange-50 border-orange-200 text-orange-500 shadow-sm">
                        <iconify-icon icon="solar:pen-linear" width="20" height="20" />
                      </div>
                      <h3 className="font-display text-[1.4rem] tracking-[-0.02em] text-slate-950 font-medium">{strategyPackage.name}</h3>
                    </div>

                    <div className="mb-2">
                      <span className="font-display text-[2.4rem] tracking-tight text-slate-950 font-semibold">{strategyPackage.price}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                      <iconify-icon icon="solar:clock-circle-linear" width="14" height="14" className="text-slate-400" />
                      <span>Доставка плану: <span className="font-medium text-slate-700">{strategyPackage.duration}</span></span>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-slate-50/70 border border-slate-100 px-3 py-2 mb-4">
                      <iconify-icon icon="solar:user-check-linear" width="14" height="14" className="text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed">{strategyPackage.fit}</span>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-orange-50/60 border border-orange-100 px-3 py-2.5">
                      <iconify-icon icon="solar:shield-check-linear" width="14" height="14" className="text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-orange-800 leading-relaxed">{strategyPackage.refund}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex flex-col">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-3">Що ти отримаєш</div>
                    <ul className="space-y-3 mb-6">
                      {strategyPackage.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <iconify-icon icon="solar:check-circle-linear" width="16" height="16" className="text-orange-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                      <iconify-icon icon="solar:document-text-linear" width="14" height="14" className="text-slate-400" />
                      <span>Формат: <span className="font-medium text-slate-700">{strategyPackage.format}</span></span>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                      <div className="flex items-start gap-2.5">
                        <iconify-icon icon="solar:star-fall-linear" width="16" height="16" className="text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-500 font-light">
                          <span className="font-medium text-slate-800">Результат:</span> {strategyPackage.result}
                        </span>
                      </div>
                      <button className="shrink-0 inline-flex items-center justify-center h-12 rounded-full px-6 font-medium text-sm border border-slate-200 bg-gradient-to-b from-white to-slate-50 text-slate-900 hover:bg-slate-50 transition-all shadow-sm">
                        Обговорити на безкоштовному розборі
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support table */}
        <div className="mt-14 rounded-[24px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_rgba(148,163,184,0.10)] anim-trigger">
          <div className="px-6 py-4 border-b border-slate-200/70 flex items-center gap-2 anim-fade-up">
            <iconify-icon icon="solar:shield-check-linear" width="18" height="18" className="text-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700">Техпідтримка після запуску</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3 font-medium">Що входить</th>
                  <th className="px-6 py-3 font-medium">
                    <div className="font-display text-base text-slate-700 normal-case tracking-normal">$150 / міс</div>
                    <div className="text-[11px] text-slate-400 font-normal normal-case">для Фундамента</div>
                  </th>
                  <th className="px-6 py-3 font-medium">
                    <div className="font-display text-base text-slate-700 normal-case tracking-normal">$250 / міс</div>
                    <div className="text-[11px] text-slate-400 font-normal normal-case">для Генератора і Преміума</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="px-6 py-3 text-slate-600">{row.label}</td>
                    <td className="px-6 py-3 text-slate-700">
                      {row.basic === true ? (
                        <iconify-icon icon="solar:check-circle-linear" width="18" height="18" className="text-orange-500" />
                      ) : row.basic === false ? (
                        <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-medium">{row.basic}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-slate-700">
                      {row.pro === true ? (
                        <iconify-icon icon="solar:check-circle-linear" width="18" height="18" className="text-orange-500" />
                      ) : row.pro === false ? (
                        <span className="text-slate-300">—</span>
                      ) : (
                        <span className="font-medium">{row.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 bg-slate-50/50">
            <iconify-icon icon="solar:server-linear" width="14" height="14" className="text-slate-400" />
            <span>Окремо: утримання платформ <span className="font-medium text-slate-700">$30–60 / міс</span> (хостинг, домен, сервіси). Подальше ведення реклами після першого місяця обговорюється окремо.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
