import { useState, useEffect, useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const packages = [
  {
    name: 'Стратегія',
    description: 'Глибокий аналіз точки «А», розробка позиціонування та план масштабування.',
    price: '$150',
    period: null,
    icon: 'solar:pen-linear',
    cta: 'Обрати пакет',
    featured: false,
    result: 'Чітка дорожня карта розвитку на 3 місяці.',
    features: [
      { text: 'Аналіз точки «А»', included: true },
      { text: 'Позиціонування', included: true },
      { text: 'Стратегія на 3 місяці', included: true },
      { text: 'Посадкова сторінка', included: false },
      { text: 'Чат-бот воронка', included: false },
      { text: 'Автоматичний прийом оплат', included: false },
    ],
  },
  {
    name: 'Фундамент',
    description: 'Стратегія + посадкова сторінка + бот для видачі безкоштовного матеріалу.',
    price: '$495',
    period: '5–7 робочих днів',
    icon: 'solar:rocket-linear',
    cta: 'Обрати пакет',
    featured: false,
    result: 'Зрозуміла точка входу, збір контактів потенційних клієнтів.',
    features: [
      { text: 'Аналіз точки «А»', included: true },
      { text: 'Позиціонування', included: true },
      { text: 'Стратегія на 3 місяці', included: true },
      { text: 'Посадкова сторінка', included: true },
      { text: 'Чат-бот воронка', included: true },
      { text: 'Автоматичний прийом оплат', included: false },
    ],
  },
  {
    name: 'Генератор',
    description: 'Стратегія + комплекс сторінок + бот + автоматичний прийом оплат + повна воронка.',
    price: 'від $990',
    period: '14 днів',
    icon: 'solar:crown-linear',
    cta: 'Почати зараз',
    featured: true,
    result: 'Пасивний дохід. Система окупується з 2-3 продажів.',
    badge: 'Популярний',
    features: [
      { text: 'Аналіз точки «А»', included: true },
      { text: 'Позиціонування', included: true },
      { text: 'Стратегія на 3 місяці', included: true },
      { text: 'Посадкова сторінка', included: true },
      { text: 'Чат-бот воронка', included: true },
      { text: 'Автоматичний прийом оплат', included: true },
    ],
  },
];

export default function PricingSection() {
  const [typewriterText, setTypewriterText] = useState('');
  const sectionRef = useRef(null);
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
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-2 mt-2">
              <iconify-icon icon="solar:bolt-linear" width="14" height="14" className="text-orange-500" />
              <span className="text-sm text-orange-700 font-medium tracking-wide">Я працюю одночасно лише з 4-5 клієнтами.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px overflow-hidden bg-slate-100 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`bg-white p-8 flex flex-col reveal-on-scroll relative ${
              pkg.featured ? 'bg-gradient-to-b from-orange-50/40 to-white' : ''
            }`}
          >
            {pkg.featured && (
              <div className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
                {pkg.badge}
              </div>
            )}

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-sm ${
                pkg.featured ? 'bg-orange-50 border-orange-200 text-orange-500' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                <iconify-icon icon={pkg.icon} width="18" height="18" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">{pkg.name}</h3>
            </div>

            <div className="mb-4">
              <span className="text-3xl font-semibold text-slate-900 tracking-tight">{pkg.price}</span>
              {pkg.period && <span className="text-slate-400 ml-2 text-sm font-light">{pkg.period}</span>}
            </div>

            <p className="text-sm text-slate-500 mb-8 font-normal leading-relaxed">{pkg.description}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f, j) => (
                <li key={j} className={`flex items-center gap-3 text-sm ${f.included ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
                  <iconify-icon
                    icon={f.included ? 'solar:check-circle-linear' : 'solar:close-circle-linear'}
                    width="16"
                    height="16"
                    className={f.included ? 'text-orange-500' : 'text-slate-200'}
                  />
                  {f.text}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                pkg.featured
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
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

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm text-slate-500 shadow-sm">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:server-linear" width="16" height="16" className="text-slate-400" />
          <span className="font-normal">Утримання платформ: <span className="font-medium text-slate-700">від $30–60/міс</span></span>
        </div>
        <div className="hidden sm:block w-px h-5 bg-slate-200" />
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" width="16" height="16" className="text-slate-400" />
          <span className="font-normal">Техпідтримка: <span className="font-medium text-slate-700">$150/міс</span> або <span className="font-medium text-slate-700">$250/міс</span></span>
        </div>
      </div>
    </section>
  );
}
