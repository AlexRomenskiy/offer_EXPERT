import { useState, useEffect, useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

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

function StrategyFeatureRow({ feature, packageFeatures }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="text-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 text-left text-slate-700 hover:text-slate-900 transition-colors"
        aria-expanded={open}
      >
        <iconify-icon icon="solar:check-circle-linear" width="16" height="16" className="text-orange-500 shrink-0" />
        <span className="flex-1">{feature.text}</span>
        <iconify-icon
          icon="solar:alt-arrow-down-linear"
          width="14"
          height="14"
          className={`text-slate-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mt-2 ml-7 space-y-1.5 text-xs text-slate-500">
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
  const sectionRef = useRef(null);
  const strategyWrapperRef = useRef(null);
  useRevealOnScroll(sectionRef);

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
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowStrategy(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(strategyWrapperRef.current);
    return () => observer.disconnect();
  }, [showStrategy]);

  return (
    <section id="pricing" className="w-full scroll-mt-24" ref={sectionRef}>
      <div className="mb-12 reveal-on-scroll">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="md:text-5xl text-3xl font-normal text-slate-900 tracking-tight mb-4">
              Обери свій{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-normal">
                {typewriterText}
              </span>
              <span className="animate-pulse text-orange-500">_</span>
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-2 mt-2 min-h-[36px]">
              {slots === null ? (
                <>
                  <iconify-icon
                    icon="solar:refresh-linear"
                    width="14"
                    height="14"
                    className="text-orange-500 animate-spin"
                  />
                  <span className="text-sm text-orange-700/70 font-medium tracking-wide">
                    Перевіряю доступність…
                  </span>
                </>
              ) : (
                <>
                  <iconify-icon icon="solar:bolt-linear" width="14" height="14" className="text-orange-500" />
                  <span className="text-sm text-orange-700 font-medium tracking-wide">
                    {slots === 1
                      ? 'Залишився лише 1 слот цього тижня'
                      : `Зараз вільно: ${slots} слоти з 5`}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`relative rounded-[2rem] p-8 flex flex-col reveal-on-scroll transition-all ${
              pkg.featured
                ? 'bg-gradient-to-b from-orange-50/60 via-white to-white border-2 border-orange-300 shadow-2xl shadow-orange-200/40 lg:scale-[1.02]'
                : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50'
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1.5 rounded-full shadow-md shadow-orange-300/40">
                {pkg.badge}
              </div>
            )}

            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-sm ${
                pkg.featured ? 'bg-orange-50 border-orange-200 text-orange-500' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                <iconify-icon icon={pkg.icon} width="20" height="20" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 tracking-tight">{pkg.name}</h3>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-semibold text-slate-900 tracking-tight">{pkg.price}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
              <iconify-icon icon="solar:clock-circle-linear" width="14" height="14" className="text-slate-400" />
              <span>Реалізація: <span className="font-medium text-slate-700">{pkg.duration}</span></span>
            </div>

            <p className="text-sm text-slate-500 mb-3 font-normal leading-relaxed">{pkg.description}</p>

            <div className="mb-6 flex items-start gap-2 rounded-lg bg-slate-50/70 border border-slate-100 px-3 py-2">
              <iconify-icon icon="solar:user-check-linear" width="14" height="14" className="text-slate-400 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-600 leading-relaxed">{pkg.fit}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f, j) =>
                f.group ? (
                  <StrategyFeatureRow key={j} feature={f} packageFeatures={strategyPackage.features} />
                ) : (
                  <li key={j} className={`flex items-center gap-3 text-sm ${f.included ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
                    <iconify-icon
                      icon={f.included ? 'solar:check-circle-linear' : 'solar:close-circle-linear'}
                      width="16"
                      height="16"
                      className={f.included ? 'text-orange-500' : 'text-slate-200'}
                    />
                    {f.text}
                  </li>
                )
              )}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                pkg.featured
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {pkg.cta}
            </button>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5">
                <iconify-icon icon="solar:star-fall-linear" width="16" height="16" className={`shrink-0 mt-0.5 ${pkg.featured ? 'text-orange-500' : 'text-slate-400'}`} />
                <span className="text-sm text-slate-500 font-light">
                  <span className="font-medium text-slate-800">Результат:</span> {pkg.result}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 reveal-on-scroll" ref={strategyWrapperRef}>
        <button
          type="button"
          onClick={() => setShowStrategy((v) => !v)}
          className="group flex items-center gap-2 mx-auto text-sm text-slate-500 hover:text-slate-800 transition-colors"
          aria-expanded={showStrategy}
        >
          <span className="border-b border-dashed border-slate-300 group-hover:border-slate-500 transition-colors">
            Не готовий на повний пакет? Є м'якший варіант старту
          </span>
          <iconify-icon
            icon="solar:alt-arrow-down-linear"
            width="14"
            height="14"
            className={`transition-transform ${showStrategy ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            showStrategy ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-slate-50 border-slate-200 text-slate-500 shadow-sm">
                      <iconify-icon icon="solar:pen-linear" width="20" height="20" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 tracking-tight">{strategyPackage.name}</h3>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl font-semibold text-slate-900 tracking-tight">{strategyPackage.price}</span>
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
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Що ти отримаєш</div>
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
                    <button className="shrink-0 px-5 py-3 rounded-xl font-medium text-sm border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                      Обговорити на безкоштовному розборі
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden reveal-on-scroll">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" width="18" height="18" className="text-orange-500" />
          <span className="font-medium text-slate-800 text-sm">Техпідтримка після запуску</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                <th className="px-6 py-3 font-medium">Що входить</th>
                <th className="px-6 py-3 font-medium">
                  <div className="text-slate-700 normal-case tracking-normal">$150 / міс</div>
                  <div className="text-[11px] text-slate-400 font-normal normal-case">для Фундамента</div>
                </th>
                <th className="px-6 py-3 font-medium">
                  <div className="text-slate-700 normal-case tracking-normal">$250 / міс</div>
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
    </section>
  );
}
