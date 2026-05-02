import { useState } from 'react';

const ITEMS = [
  {
    q: 'Що таке розбір і чи це справді безкоштовно?',
    a: 'Так, безкоштовно. Це коротка зустріч 20–30 хвилин: дивимось на твій продукт, аудиторію та як зараз проходять продажі. Я підкажу, де «втікають» гроші та що варто автоматизувати в першу чергу. Без зобов’язань — ти вирішуєш, чи рухатись далі.',
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
    a: 'Так — у пакеті Преміум вже включено налаштування Meta Pixel + CAPI, цільові аудиторії, перші 3 креативи і ведення кампаній перший місяць. Як окрема послуга поза пакетом — теж можливо: setup ~$300–500, ведення від $200/міс або 10–15% від рекламного бюджету. На розборі дивимось, чи варто запускати у твоїй ніші, і який бюджет потрібен.',
  },
  {
    q: 'Чи пишеш ти великі тексти — курси, книги, контент-плани під ключ?',
    a: 'Ні, я не беруся за копірайтинг великих форматів і не записую курси замість тебе. Контент продукту — твоя експертиза; я відповідаю за структуру, упаковку, посадкові, скрипти бота і автоматизацію. Якщо потрібен сильний копірайтер під твою нішу — можу порадити.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-white scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,244,250,0.4),rgba(255,255,255,1)_24%,rgba(255,255,255,1)_100%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="faq-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 lg:mb-16 anim-trigger">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{ transitionDelay: '0s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
              FAQ
            </span>
          </div>

          <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light">
            <span className="block sm:inline anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Питання, які задають</span>
            </span>{' '}
            <span className="block anim-wrap">
              <span className="anim-line text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600" style={{ transitionDelay: '0.2s' }}>найчастіше</span>
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="relative rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-trigger">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

          <div className="relative z-10 flex flex-col divide-y divide-slate-200/50">
            {ITEMS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q} className="anim-fade-up" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-white/50 transition-colors"
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[11px] uppercase tracking-[0.18em] shrink-0 ${open ? 'text-orange-600' : 'text-slate-400'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium text-slate-900 text-base lg:text-[1.05rem] tracking-tight pr-2">
                        {item.q}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                        open
                          ? 'bg-orange-50 border-orange-200 text-orange-600'
                          : 'bg-white/65 border-slate-200 text-slate-400'
                      }`}
                    >
                      <iconify-icon
                        icon={open ? 'solar:minus-circle-linear' : 'solar:add-circle-linear'}
                        width="18"
                        height="18"
                      />
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pt-0 text-slate-600 leading-[1.75] border-t border-slate-200/40 ml-12">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
