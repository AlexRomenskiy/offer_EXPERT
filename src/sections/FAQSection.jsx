import { useState, useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const ITEMS = [
  {
    q: 'Що таке розбір і чи це справді безкоштовно?',
    a: 'Це коротка зустріч 20\u201330 хвилин: дивимось на ваш продукт, аудиторію та як зараз проходять продажі. Я підкажу, де \u00abвтікають\u00bb гроші та що варто автоматизувати в першу чергу. Без зобов\u2019язань \u2014 ви вирішуєте, чи рухатись далі.',
  },
  {
    q: 'Я не технар і не розуміюся на ботах. Це проблема?',
    a: 'Ні. Воронку ми будуємо разом: ви даєте зміст (пропозиція, уроки, ціни), я \u2014 структуру та технічну реалізацію. Після запуску залишаються зрозумілі інструкції, щоб ви могли користуватися системою без щоденної залежності від розробника.',
  },
  {
    q: 'Скільки часу займає запуск?',
    a: 'Залежить від обсягу матеріалів і обраного рівня. Як орієнтир \u2014 від кількох днів для базової автоматизації до 2\u20133 тижнів для повного \u00abгенератора\u00bb з контентом та інтеграціями. Точні терміни фіксуємо після розбору.',
  },
  {
    q: 'На яких платформах це працює?',
    a: 'Зазвичай це Telegram та Instagram: бот, посилання в профілі, розсилки та прийом оплат через зручні для вас сервіси. Якщо потрібен інший канал \u2014 обговорюємо на розборі.',
  },
  {
    q: 'Що якщо мені потрібна підтримка після запуску?',
    a: 'У тарифах передбачені варіанти супроводу: від разових правок до регулярної підтримки. Деталі та суми \u2014 у блоці з тарифами; після запуску ви не залишаєтесь \u00abнаодинці з ботом\u00bb.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="faq" className="max-w-[900px] mx-auto px-6 pb-32 scroll-mt-24" ref={sectionRef}>
      <div className="text-center mb-16 reveal-on-scroll">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white/70 text-[11px] tracking-[0.2em] uppercase text-slate-500 mb-5">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-slate-900 tracking-tight mb-4">
          Питання, які задають найчастіше
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {ITEMS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.q}
              className="glass-panel-static rounded-2xl overflow-hidden reveal-on-scroll hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                aria-expanded={open}
              >
                <span className="font-heading font-medium text-slate-800 text-base lg:text-lg tracking-tight pr-2">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                    open
                      ? 'bg-amber-100 border-amber-200 text-amber-900'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <iconify-icon
                    icon={open ? 'solar:minus-circle-linear' : 'solar:add-circle-linear'}
                    className="text-xl"
                  />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pt-0 text-slate-500 font-light leading-relaxed border-t border-slate-100">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
