import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

const faqs = [
  {
    q: 'Що таке розбір і чи це справді безкоштовно?',
    a: 'Так, безкоштовно. Це коротка зустріч 20–30 хвилин: дивимось на твій продукт, аудиторію та як зараз проходять продажі. Я підкажу, де «втікають» гроші та що варто автоматизувати в першу чергу. Без зобов\'язань — ти вирішуєш, чи рухатись далі.',
  },
  {
    q: 'Я не технар і не розуміюся на ботах. Це проблема?',
    a: 'Ні. Воронку будуємо разом: ти даєш зміст (пропозиція, уроки, ціни), я — структуру та технічну реалізацію. Після запуску залишаються зрозумілі інструкції, щоб ти міг користуватися системою без щоденної залежності від розробника.',
  },
  {
    q: 'Скільки часу займає запуск?',
    a: 'Залежить від обсягу матеріалів і обраного пакета. Орієнтир: Фундамент — 5–7 робочих днів, Генератор — 14, Преміум (з трафіком) — 14–21. Точні терміни фіксуємо після розбору.',
  },
  {
    q: 'На яких платформах це працює?',
    a: 'Telegram, Instagram, WhatsApp, TikTok, Messenger, Email і SMS — через ManyChat як основну платформу автоматизації. Якщо потрібен інший канал або власна логіка — обговорюємо на розборі.',
  },
  {
    q: 'Що якщо мені потрібна підтримка після запуску?',
    a: 'У тарифах передбачені варіанти супроводу: $150/міс для Фундамента і $250/міс для Генератора чи Преміума. Деталі — у блоці з тарифами; після запуску ти не залишаєшся «наодинці з ботом».',
  },
  {
    q: 'А ти запускаєш таргетовану рекламу?',
    a: 'Так — у пакеті Преміум вже включено налаштування Meta Pixel + CAPI, цільові аудиторії, перші 3 креативи і ведення кампаній перший місяць. Як окрема послуга поза пакетом — теж можливо: setup ~$300–500, ведення від $200/міс або 10–15% від рекламного бюджету.',
  },
  {
    q: 'Чи пишеш ти великі тексти — курси, книги, контент-плани під ключ?',
    a: 'Ні, я не беруся за копірайтинг великих форматів і не записую курси замість тебе. Контент продукту — твоя експертиза; я відповідаю за структуру, упаковку, посадкові, скрипти бота і автоматизацію. Якщо потрібен сильний копірайтер під твою нішу — можу порадити.',
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (idx) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-14 anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Питання, що
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                задають найчастіше
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            Сім найчастіших — від «це безкоштовно?» до «що з рекламою?».
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 anim-trigger">
          {faqs.map((faq, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-[24px] bg-white/30 backdrop-blur-xl border border-white/45 overflow-hidden anim-fade-up transition-colors duration-300 hover:bg-white/40"
                style={{ transitionDelay: `${0.05 + idx * 0.04}s` }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 lg:px-7 py-5 lg:py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span
                    className="text-[1rem] lg:text-[1.08rem] font-medium text-slate-950 leading-snug tracking-[-0.01em]"
                    style={{ fontFamily: fontStack }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#175ae8] text-white rotate-180'
                        : 'bg-white/65 border border-slate-200/60 text-slate-700 group-hover:bg-white/85'
                    }`}
                  >
                    <iconify-icon
                      icon={isOpen ? 'solar:minus-linear' : 'solar:plus-linear'}
                      width="16"
                      height="16"
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 lg:px-7 pb-6 lg:pb-7 pt-1">
                    <p
                      className="text-[0.95rem] lg:text-[1rem] leading-[1.65] text-slate-700 max-w-[68ch]"
                      style={{ fontFamily: fontStack }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div
          className="mt-10 text-center anim-fade-up"
          style={{ transitionDelay: `${0.05 + faqs.length * 0.04}s`, fontFamily: fontStack }}
        >
          <p className="text-[0.95rem] text-slate-600">
            Не знайшов відповіді?{' '}
            <a
              href="#request-access"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-[#175ae8] font-medium hover:text-[#0e47c8] transition-colors underline decoration-[#175ae8]/30 underline-offset-4 hover:decoration-[#175ae8]"
            >
              Запитай на розборі
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
