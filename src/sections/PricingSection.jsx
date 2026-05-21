import { useEffect, useRef, useState } from 'react';

const fontStack = "'Manrope', sans-serif";

const phrases = ['формат роботи', 'шлях до масштабу', 'рівень системи'];

export const pricing = [
  {
    key: 'фундамент',
    title: 'Фундамент',
    badge: 'СТАРТ',
    price: '$495',
    timeline: '5–7 днів',
    timelineShort: '5–7 днів',
    supportDays: 30,
    tagline: 'Перший крок до системи та чіткий оффер.',
    forWhom:
      'Якщо у тебе є експертиза, але немає чіткого позиціонування і проф. присутності в online.',
    metrics: { days: '5–7', ads: '—' },
    features: [
      { label: 'Стратегія і позиціонування', tip: 'Хто ти, кому продаєш та чому саме до тебе. Формулюємо позицію на ринку.' },
      { label: 'Лендинг-візитка', tip: 'Одна посадкова сторінка про твою послугу або продукт. Mobile-ready.' },
      { label: 'Лід-магніт', tip: 'Безкоштовний матеріал в обмін на контакт людини. PDF, чек-лист, квіз або відео.' },
      { label: 'Чат-бот у месенджері', tip: 'Видає магніт у Telegram, Instagram, WhatsApp — там, де клієнту зручно. Людина лишається у твоїй базі підписників.' },
    ],
    outcome:
      'Чіткий оффер та професійна онлайн-присутність — готова база для системи.',
    note: 'Точка входу в систему',
    cta: 'Записатись на розбір',
    testimonials: [
      {
        quote:
          'Олександр, дякую. Я 2 роки писала пости «для всіх, хто хоче схуднути» і не розуміла, чому немає клієнтів, бо проблема доволі популярна. Тепер маю чітке позиціонування і розуміння своєї аудиторії — і клієнтки кажуть «ой, це наче ви про мене». Класне відчуття бути корисною, мати фідбек, який надихає, і, звісно, заробляти цим',
        attribution: 'Олена · нутриціологиня',
      },
      {
        quote:
          'Саша, ти зміг написати про мою послугу краще за мене. Серйозно — я кожному клієнту по 40 хвилин пояснював, що роблю. Тепер просто скидаю лендинг і людям все ясно, залишається обговорити деталі.',
        attribution: 'Андрій · бізнес-коуч для підприємців',
      },
      {
        quote:
          'Чесно, я не дуже вірив у ці магніти-боти. Але тепер у мене в Telegram збирається база людей, які явно цікавляться темою. Під кінець тижня, коли планую, вже не сиджу й не пригадую, кому що обіцяв. Супер, рекомендую.',
        attribution: 'Юрій · експерт із B2B-продажів',
      },
      {
        quote:
          'Заходила з відчуттям «ну всім же треба психолог». Виходжу з розумінням, кому саме потрібна я — а кому ні. Дивно, але це навіть більше про мене, ніж про маркетинг. Закрила свій гештальт))))',
        attribution: 'Юлія · психотерапевтка',
      },
    ],
  },
  {
    key: 'генератор',
    title: 'Генератор',
    badge: 'ОПТИМАЛЬНИЙ',
    price: '$990',
    timeline: '14 днів',
    timelineShort: '14 днів',
    supportDays: 30,
    tagline: 'Уся система — від першого кроку до повторних продажів.',
    forWhom:
      'Якщо хочеш автоматизовану систему продажів, яка замінює роботу великої команди — підігріває лідів і веде їх до продажу продукту без твоєї участі.',
    metrics: { days: '14', ads: '—' },
    features: [
      { label: 'Усе з «Фундаменту»', tip: null },
      { label: 'Упаковка всього продукту (структура під курс або інтенсив)', tip: 'Не одна сторінка-візитка, а повна структура: продаж, видача матеріалів, окремі точки збору контактів.' },
      { label: 'Лід-магніт + Тріпваєр', tip: 'Лід-магніт ловить контакт безкоштовно. Тріпваєр — недорогий платний продукт, який підвищує середній чек і дає перший платний досвід з тобою.' },
      { label: 'Прогріваючий бот з авторською логікою', tip: 'Схема прогріву на основний продукт або тріпваєр. Нагадування про події, дедлайни. Логіка проектується під твою воронку.' },
      { label: 'Оплати, автовидача, аналітика воронки', tip: 'Прийом оплат, миттєвий доступ до продукту після оплати, прозорі цифри по всій воронці.' },
    ],
    outcome:
      'Автоматизована система продажу, готова до масштабування. Конвертує зацікавлених у клієнтів, піднімає середній чек і працює без тебе.',
    note: 'Для тих, хто будує системний бізнес',
    cta: 'Записатись на розбір',
    highlight: true,
    testimonials: [
      {
        quote:
          'Я люблю, коли гроші мають лік. З підписниками те саме: рада, що система турбується про кожного, а мені видає безпосередньо тих, хто хоче працювати. Для мене, як для дівчини з бізнес-проектом, найкраще оновлення гардеробу — це упаковка продукту.',
        attribution: 'Таня · On-Camera коуч для експертів',
      },
      {
        quote:
          'Олександре, вибач, що тоді одразу не подякувала. Перший раз побачила оплату о 7 ранку — просто сиділа з кавою і дивилась на телефон. Мала перетравити, що це працює без мене.',
        attribution: 'Марина · психологиня, авторка онлайн-курсу',
      },
      {
        quote:
          'Ти мене переконав на той тріпваер, хоч я був проти і взагалі не розумів шо то таке до кінця. «Ну хто заплатить $19, давай одразу основне»... Виявилось — багато людей. І ті самі потім беруть основну програму, вже без зайвих питань. Дякую за наполегливість.',
        attribution: 'Ігор · наставник з продажів',
      },
      {
        quote:
          'Найдивніше — я ні з ким, окрім тебе, не контактувала. Я думала, буде «знайди собі дизайнера, копірайтера, ми тільки координуємо». А вийшло, що я просто відповідала на твої питання — і поступово народжувався цілий продукт. ДЯКУЮ, БУДУ РЕКОМЕНДУВАТИ ДРУЗЯМ І НЕ ТІЛЬКИ',
        attribution: 'Катерина · дієтологиня, авторка інтенсиву',
      },
    ],
  },
  {
    key: 'преміум',
    title: 'Преміум',
    badge: 'З ТРАФІКОМ',
    price: '$1,690',
    timeline: '14–21 днів',
    timelineShort: '14–21 днів',
    supportDays: 30,
    tagline: 'Авторська система + реклама, що приводить клієнтів.',
    forWhom: 'Якщо хочеш не просто упаковку продукту, а ще й масштабування.',
    metrics: { days: '14–21', ads: '✓' },
    features: [
      { label: 'Усе з «Генератора»', tip: null },
      { label: 'Таргетована реклама — повна кампанія (креативи, тексти, запуск)', tip: 'Створення зображень, відео і текстів. Запуск кампаній на каналах під твою аудиторію — Meta, Google, YouTube, TikTok.' },
      { label: 'Точкове націлювання на твою аудиторію', tip: 'Тестуємо вузькі сегменти аудиторії: те, що реагує — масштабуємо; що ні — вимикаємо. Реклама йде на твоїх покупців, не на «всіх, кому може бути цікаво».' },
      { label: 'Наскрізна аналітика — від першого кліку до повторних продаж', tip: 'Весь шлях клієнта: перший клік → воронка → оплата → повторна покупка. Розумієш, скільки коштує клієнт і скільки він тобі приносить.' },
    ],
    outcome:
      'Масштабувана система продажів. Збільшуєш рекламний бюджет — пропорційно ростуть продажі.',
    note: 'Готове рішення з рекламою — без збору команди',
    cta: 'Записатись на розбір',
    testimonials: [
      {
        quote:
          'Алекс, спасибі за гру. Я два роки пробував різну рекламу — то таргетолог, то агенство — бюджет згорав, і я не розумів чому. Виявилось, проблема була не в рекламі, а в тому, куди вона веде. Тепер у мене зібрана воронка плюс трафік на неї — нарешті бачу окупність.',
        attribution: 'Steve · finance advisor',
      },
      {
        quote:
          'У мене вже була своя програма, але я не уявляла, як її розкручувати. Зараз — лендинг, бот, оплати, аналітика, і зверху ще реклама, яка все це крутить. Я лише раз на тиждень дивлюсь звіт. Уперше за довгий час маю вихідні. Задоволена',
        attribution: 'Albina · fitness coach, course author',
      },
      {
        quote:
          'До цього у мене все трималось на сарафанці і моїй активності в LinkedIn. Хаос: то 8 заявок за тиждень, то жодної місяць. Зараз у мене воронка плюс реклама, що крутить її щодня — я нарешті можу планувати рік, а не один місяць.',
        attribution: 'Назар · наставник для IT-експертів',
      },
      {
        quote:
          'Саша, супер! Все працює. Дякую! Даю відгук: найбільше мене вразило, що ми спершу зібрали воронку, а реклама прийшла потім. Я роками лила гроші в Facebook і не розуміла, чому в когось працює, а в мене ні. Тепер у мене обидві частини, і є нарешті система, яка працює. А я займаюсь тим, що люблю',
        attribution: 'Софія · лікарка-косметологиня',
      },
    ],
  },
];

export default function PricingSection() {
  // ============== Typewriter ==============
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

  // ============== Dot highlight loop ==============
  const [activeDotIdx, setActiveDotIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveDotIdx((prev) => (prev + 1) % 3), 300);
    return () => clearInterval(id);
  }, []);

  // ============== Active tier ==============
  const [activeKey, setActiveKey] = useState('генератор');
  const active = pricing.find((p) => p.key === activeKey);

  const scrollToCTA = (e) => {
    e.preventDefault();
    document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden"
    >
      {/* === Lamp glow === */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.55), transparent 60%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(23,90,232,0.10), transparent 65%)' }}
      />

      {/* === Side chip traces (lg+, with fade-out gradient on inward ends) === */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-[5.5rem] left-1/2 -translate-x-1/2 pointer-events-none z-[1]"
        style={{ width: '1500px' }}
      >
        <svg width="1500" height="240" viewBox="0 0 1500 240" fill="none">
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

            {/* === Line fade-out gradients (solid near chip, transparent at center end) === */}
            <linearGradient id="leftLineFadeGrey" gradientUnits="userSpaceOnUse" x1="170" y1="60" x2="420" y2="170">
              <stop offset="0%" stopColor="#d4d4d8" stopOpacity="1" />
              <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="leftLineFadeBlue" gradientUnits="userSpaceOnUse" x1="170" y1="60" x2="420" y2="170">
              <stop offset="0%" stopColor="#175ae8" stopOpacity="1" />
              <stop offset="100%" stopColor="#175ae8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rightLineFadeGrey" gradientUnits="userSpaceOnUse" x1="1330" y1="60" x2="1080" y2="170">
              <stop offset="0%" stopColor="#d4d4d8" stopOpacity="1" />
              <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rightLineFadeBlue" gradientUnits="userSpaceOnUse" x1="1330" y1="60" x2="1080" y2="170">
              <stop offset="0%" stopColor="#175ae8" stopOpacity="1" />
              <stop offset="100%" stopColor="#175ae8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* LEFT */}
          <g>
            <line x1="60" y1="50" x2="100" y2="50" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="60" y1="60" x2="100" y2="60" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="60" y1="70" x2="100" y2="70" stroke="#d4d4d8" strokeWidth="1.5" />
            <rect x="100" y="35" width="70" height="50" rx="6" fill="url(#chipGradPricing)" stroke="rgba(0,0,0,0.12)" strokeWidth="1" filter="url(#chipShadowPricing)" />
            <circle cx="110" cy="45" r="1.5" fill="#a1a1aa">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="155" cy="60" r="2.5" fill="#175ae8" filter="url(#dotGlowPricing)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M 170 60 H 320 L 420 170" stroke="url(#leftLineFadeGrey)" strokeWidth="1.5" fill="none" />
            <path d="M 170 60 H 320 L 420 170" stroke="url(#leftLineFadeBlue)" strokeWidth="1.5" fill="none" strokeDasharray="50 400" strokeDashoffset="400">
              <animate attributeName="stroke-dashoffset" values="400;-50" dur="3s" repeatCount="indefinite" />
            </path>
          </g>

          {/* RIGHT */}
          <g>
            <line x1="1440" y1="50" x2="1400" y2="50" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="1440" y1="60" x2="1400" y2="60" stroke="#d4d4d8" strokeWidth="1.5" />
            <line x1="1440" y1="70" x2="1400" y2="70" stroke="#d4d4d8" strokeWidth="1.5" />
            <rect x="1330" y="35" width="70" height="50" rx="6" fill="url(#chipGradPricing)" stroke="rgba(0,0,0,0.12)" strokeWidth="1" filter="url(#chipShadowPricing)" />
            <circle cx="1390" cy="45" r="1.5" fill="#a1a1aa">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="1345" cy="60" r="2.5" fill="#175ae8" filter="url(#dotGlowPricing)">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" repeatCount="indefinite" />
            </circle>
            <path d="M 1330 60 H 1180 L 1080 170" stroke="url(#rightLineFadeGrey)" strokeWidth="1.5" fill="none" />
            <path d="M 1330 60 H 1180 L 1080 170" stroke="url(#rightLineFadeBlue)" strokeWidth="1.5" fill="none" strokeDasharray="50 400" strokeDashoffset="400">
              <animate attributeName="stroke-dashoffset" values="400;-50" dur="3.5s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* ============== HEADER ============== */}
        <div className="relative text-center mb-12 lg:mb-16 anim-trigger">
          {/* Decorative dot-mesh background — premium fade texture behind header */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          {/* Dot cluster + center icon */}
          <div
            className="flex items-center justify-center gap-5 mb-7 anim-fade-up"
            style={{ transitionDelay: '0s' }}
          >
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

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Пакети · від $495
            <span className="h-px w-6 bg-slate-300" />
          </div>

          {/* Heading (subtitle intentionally removed) */}
          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.10s', lineHeight: 1.18 }}
          >
            <span className="block">Обери свій</span>
            <span className="block min-h-[1.2em]" style={{ paddingTop: '0.18em', paddingBottom: '0.45em' }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {displayText}
              </span>
              <span
                className="inline-block w-[2px] h-[0.8em] bg-[#175ae8] ml-1 animate-pulse align-baseline"
                style={{ transform: 'translateY(2px)' }}
              />
            </span>
          </h2>
        </div>

        {/* ============== DESKTOP (lg+): 2-col with sticky right ============== */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16 items-start">

          {/* LEFT — testimonials, scrolls with page */}
          <div className="anim-trigger lg:pt-2">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-9 anim-fade-up"
              style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0s' }}
            >
              Що кажуть
            </p>
            <div
              className="flex flex-col gap-8"
              style={{ fontFamily: fontStack }}
            >
              {active.testimonials.map((t, i) => (
                <blockquote
                  key={`${active.key}-${i}`}
                  className="relative pl-6 border-l border-[#175ae8]/30 group"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-[#175ae8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: '0 0 8px rgba(23,90,232,0.6)' }}
                  />
                  <p
                    className="text-[0.92rem] lg:text-[0.95rem] leading-[1.6] font-light text-slate-700 italic mb-2 transition-opacity duration-300"
                  >
                    «{t.quote}»
                  </p>
                  <cite
                    className="not-italic text-[10px] uppercase tracking-[0.18em] text-slate-500"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.attribution}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>

          {/* RIGHT — sticky card with tabs INSIDE + tagline UNDER tabs */}
          <div className="relative anim-trigger lg:sticky lg:top-24 lg:self-start">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-200/25 blur-[90px] pointer-events-none"
            />

            <div
              className="relative p-6 lg:p-7 rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/60 anim-fade-up"
              style={{
                boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)',
                transitionDelay: '0.15s',
                minHeight: '540px',
              }}
            >
              {/* Glass highlight */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Big tab buttons (inside card, on top) */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {pricing.map((p) => {
                    const isActive = activeKey === p.key;
                    return (
                      <button
                        key={p.key}
                        type="button"
                        onClick={() => setActiveKey(p.key)}
                        className={`flex items-center justify-center h-11 sm:h-12 rounded-full text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-slate-700 bg-white/65 border border-slate-200/70 hover:bg-white/85 hover:border-slate-300 backdrop-blur-md'
                        }`}
                        style={{
                          fontFamily: fontStack,
                          background: isActive
                            ? 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)'
                            : undefined,
                          boxShadow: isActive
                            ? '0 12px 30px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)'
                            : undefined,
                        }}
                      >
                        {p.title}
                      </button>
                    );
                  })}
                </div>

                {/* Tagline UNDER tabs — eyebrow + body (в ритмі решти блоків) */}
                <div className="mb-4 min-h-[3em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Про пакет
                  </p>
                  <p
                    className="text-[0.95rem] text-slate-800 leading-[1.5] font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.tagline}
                  </p>
                </div>

                {/* Price + timeline + support */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span
                      className="text-[2.2rem] sm:text-[2.5rem] lg:text-[2.7rem] tracking-[-0.04em] text-slate-950 font-light leading-none"
                      style={{ fontFamily: fontStack }}
                    >
                      {active.price}
                    </span>
                  </div>
                  <div
                    className="text-[10px] tracking-[0.16em] uppercase text-slate-500"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {active.timeline} реалізації · {active.supportDays} днів підтримки
                  </div>
                </div>

                {/* Для кого */}
                <div className="mb-4 min-h-[4em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Для кого
                  </p>
                  <p
                    className="text-[0.86rem] text-slate-700 leading-[1.5]"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.forWhom}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4 min-h-[9em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Що входить
                  </p>
                  <ul className="space-y-1.5">
                    {active.features.map((f, i) => (
                      <FeatureItem key={i} feature={f} variant="dot" />
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="mb-4 p-3 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05] min-h-[4em]">
                  <p
                    className="text-brand-gradient text-[10px] uppercase tracking-[0.22em] mb-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Результат
                  </p>
                  <p
                    className="text-[0.86rem] text-slate-800 leading-[1.5]"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.outcome}
                  </p>
                </div>

                {/* CTA pinned bottom */}
                <div className="mt-auto">
                  <a
                    href="#request-access"
                    onClick={scrollToCTA}
                    className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full text-white text-[0.92rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
                    style={{
                      fontFamily: fontStack,
                      background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                      boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
                    }}
                  >
                    {active.cta}
                    <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                  </a>
                  <p
                    className="text-center text-[10px] uppercase tracking-[0.16em] text-slate-500 mt-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {active.note}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============== MOBILE (< lg): original single tab-switching card ============== */}
        <div className="lg:hidden anim-trigger">
          <MobilePricingCard
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            active={active}
            onCTA={scrollToCTA}
          />
        </div>

      </div>
    </section>
  );
}

/* ============================================================================
   Mobile pricing card — single light glass with tab switcher (original variant)
   ============================================================================ */
function MobilePricingCard({ activeKey, setActiveKey, active, onCTA }) {
  return (
    <div className="relative anim-fade-up">
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-blue-200/25 blur-[80px] pointer-events-none"
      />

      <div
        className="relative p-6 sm:p-7 rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/60 flex flex-col"
        style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
        />

        <div className="relative z-10">
          {/* Tab switcher */}
          <div className="inline-flex p-1 rounded-full bg-white/50 border border-white/70 shadow-sm w-full gap-1 backdrop-blur-md mb-7">
            {pricing.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setActiveKey(p.key)}
                className={`flex-1 px-3 py-2 rounded-full text-[11px] tracking-wide transition-all ${
                  activeKey === p.key
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                style={{
                  fontFamily: fontStack,
                  background:
                    activeKey === p.key
                      ? 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)'
                      : undefined,
                }}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Price + timeline */}
          <div className="flex items-baseline gap-2 mb-3">
            <span
              className="text-[3.2rem] tracking-[-0.04em] text-slate-950 font-light leading-none"
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

          {/* Про пакет — eyebrow + body */}
          <div className="mb-5">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Про пакет
            </p>
            <p
              className="text-[0.95rem] text-slate-800 leading-[1.55] font-medium"
              style={{ fontFamily: fontStack }}
            >
              {active.tagline}
            </p>
          </div>

          {/* Для кого — eyebrow + body */}
          <div className="mb-6">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Для кого
            </p>
            <p
              className="text-[0.88rem] text-slate-700 leading-[1.55]"
              style={{ fontFamily: fontStack }}
            >
              {active.forWhom}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Що входить
            </p>
            <ul className="space-y-2.5">
              {active.features.map((f, i) => (
                <FeatureItem key={i} feature={f} variant="check" />
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="mb-7 p-4 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05]">
            <p
              className="text-brand-gradient text-[10px] uppercase tracking-[0.22em] mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Результат
            </p>
            <p
              className="text-[0.92rem] text-slate-700 leading-[1.55]"
              style={{ fontFamily: fontStack }}
            >
              {active.outcome}
            </p>
          </div>

          {/* CTA */}
          <a
            href="#request-access"
            onClick={onCTA}
            className="w-full inline-flex h-12 items-center justify-center rounded-full text-white text-[0.92rem] font-medium transition-all hover:translate-y-[-1px]"
            style={{
              fontFamily: fontStack,
              background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
              boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
            }}
          >
            {active.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   FeatureItem — feature line with optional hover tooltip (desktop variant only)
   variant: 'dot' (desktop) | 'check' (mobile)
   ============================================================================ */
function FeatureItem({ feature, variant }) {
  const isDot = variant === 'dot';
  const hasTip = isDot && !!feature.tip;

  return (
    <li className={`relative ${hasTip ? 'group' : ''}`}>
      <div
        className={`flex items-start gap-3 leading-snug ${
          isDot ? 'text-[0.9rem] text-slate-800' : 'text-[0.92rem] text-slate-700'
        }`}
        style={{ fontFamily: fontStack }}
      >
        {isDot ? (
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#175ae8] shrink-0"
            style={{ marginTop: '0.55em', boxShadow: '0 0 6px rgba(23,90,232,0.45)' }}
          />
        ) : (
          <iconify-icon
            icon="solar:check-circle-line-duotone"
            width="17"
            height="17"
            style={{ color: '#175ae8', marginTop: '1px', flexShrink: 0 }}
          />
        )}
        <span
          className={
            hasTip
              ? 'cursor-help border-b border-dashed border-slate-300 group-hover:border-[#175ae8]/60 transition-colors duration-200'
              : ''
          }
        >
          {feature.label}
        </span>
      </div>

      {hasTip && (
        <div
          className="absolute z-50 left-7 right-0 top-full mt-2 max-w-[300px] p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/70 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none"
          style={{ boxShadow: '0 20px 50px rgba(15,23,42,0.12), 0 4px 14px rgba(15,23,42,0.06)' }}
        >
          <p
            className="text-[0.82rem] text-slate-700 leading-[1.55]"
            style={{ fontFamily: fontStack }}
          >
            {feature.tip}
          </p>
        </div>
      )}
    </li>
  );
}

