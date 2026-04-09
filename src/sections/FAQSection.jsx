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
    <section id="faq" className="w-full max-w-[900px] mx-auto scroll-mt-24" ref={sectionRef}>
      <div className="text-center mb-12 reveal-on-scroll">
        <div className="flex items-center justify-center gap-2 mb-4">
          <iconify-icon icon="solar:chat-round-dots-linear" width="14" height="14" className="text-orange-500" />
          <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">FAQ</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mb-4">
          Питання, які задають
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-600"> найчастіше</span>
        </h2>
      </div>

      <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/50">
        {ITEMS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.q}
              className="bg-white reveal-on-scroll"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-slate-50/50 transition-colors"
                aria-expanded={open}
              >
                <span className="font-medium text-slate-800 text-base lg:text-lg tracking-tight pr-2">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                    open
                      ? 'bg-orange-50 border-orange-200 text-orange-600'
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}
                >
                  <iconify-icon
                    icon={open ? 'solar:minus-circle-linear' : 'solar:add-circle-linear'}
                    width="18"
                    height="18"
                  />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pt-0 text-slate-500 font-normal leading-relaxed border-t border-slate-100">
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
