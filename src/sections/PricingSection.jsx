import { useState, useEffect, useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const packages = [
  {
    tag: 'Пакет',
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
    tag: 'Пакет',
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
    tag: 'Пакет',
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
    <section id="pricing" className="max-w-[1200px] mx-auto px-6 pb-32 scroll-mt-24" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-heading font-medium text-slate-900 tracking-tight mb-4">
          Обери свій{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-medium">
            {typewriterText}
          </span>
          <span className="animate-pulse text-amber-500">_</span>
        </h2>
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-2 mt-3">
          <iconify-icon icon="solar:bolt-linear" className="text-amber-500 text-base" />
          <span className="text-sm text-amber-700 font-medium tracking-wide">Я працюю одночасно лише з 4-5 клієнтами.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`glass-panel p-10 rounded-[2rem] reveal-on-scroll flex flex-col ${
              pkg.featured
                ? 'bg-white/70 border-amber-200/60 shadow-xl relative overflow-hidden'
                : 'border border-white/60'
            }`}
          >
            {pkg.featured && (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px]" />
                <div className="text-xs font-semibold tracking-wider uppercase text-amber-600 mb-2">{pkg.badge}</div>
              </>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-sm ${
                pkg.featured ? 'bg-amber-50 border-amber-200 text-amber-500' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                <iconify-icon icon={pkg.icon} className="text-lg" />
              </div>
              <h3 className="text-xl font-heading font-medium text-slate-900">{pkg.name}</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-heading font-semibold text-slate-900">{pkg.price}</span>
              {pkg.period && <span className="text-slate-500 ml-2 text-sm">{pkg.period}</span>}
            </div>
            <p className="text-sm text-slate-500 mb-8 font-light">{pkg.description}</p>
            <ul className="space-y-4 mb-10 flex-1">
              {pkg.features.map((f, j) => (
                <li key={j} className={`flex items-center gap-3 text-sm ${f.included ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
                  <iconify-icon
                    icon={f.included ? 'solar:check-circle-linear' : 'solar:close-circle-linear'}
                    className={f.included ? 'text-amber-500' : 'text-slate-200'}
                  />
                  {f.text}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-medium transition-all ${
                pkg.featured
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                  : 'border border-slate-300 text-slate-700 hover:bg-white/50'
              }`}
            >
              {pkg.cta}
            </button>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5">
                <iconify-icon icon="solar:star-fall-linear" className={`text-base shrink-0 mt-0.5 ${pkg.featured ? 'text-amber-500' : 'text-slate-400'}`} />
                <span className="text-sm text-slate-600 font-light">
                  <span className="font-medium text-slate-800">Результат:</span> {pkg.result}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-white/60 backdrop-blur-md border border-white/60 rounded-xl px-6 py-4 text-sm text-slate-500 shadow-sm">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:server-linear" className="text-base text-slate-400" />
          <span className="font-light">Утримання платформ: <span className="font-medium text-slate-700">від $30–60/міс</span></span>
        </div>
        <div className="hidden sm:block w-px h-5 bg-slate-200" />
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" className="text-base text-slate-400" />
          <span className="font-light">Техпідтримка: <span className="font-medium text-slate-700">$150/міс</span> або <span className="font-medium text-slate-700">$250/міс</span></span>
        </div>
      </div>
    </section>
  );
}
