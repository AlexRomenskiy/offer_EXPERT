import { useEffect, useRef, useState } from 'react';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

/* ============================================================
   ASSET PIPELINE — hyperreal Pain images wired as full-bleed
   backgrounds. UA-locale variants used now; EN variants will be
   threaded once i18n is implemented (roadmap item #3).
     PNT-01  /Images/2. Pain - Audience - UKR.png (EN: ... - ENG.png)
     PNT-02  /Images/2. Pain - Client weight - UKR.png (EN: ... .png)
     PNT-03  /Images/2. Pain - Time.png (universal)
     PNT-04  /Images/2. Pain - Technical stack.png (universal)
     PNT-05  /Images/2. Pain - Revenue block - UKR.png (EN pending)
   Will be swapped for looping videos in a later step.
   ============================================================ */

const cards = [
  {
    id: 'PNT-01',
    title: 'Аудиторія є — продаж замало',
    slogan: 'Лід губиться між DM і чеком.',
    img: '/Images/2. Pain - Audience - UKR.png',
  },
  {
    id: 'PNT-02',
    title: 'Кожен клієнт — на твоїх плечах',
    slogan: 'Один клієнт = години твого часу.',
    img: '/Images/2. Pain - Client weight - UKR.png',
  },
  {
    id: 'PNT-03',
    title: 'Без тебе система зупиняється',
    slogan: 'Ти спиш — каса теж.',
    img: '/Images/2. Pain - Time.png',
  },
  {
    id: 'PNT-04',
    title: 'Технічно зібрати — окрема професія',
    slogan: 'Інструменти є — інтеграції нема.',
    img: '/Images/2. Pain - Technical stack.png',
  },
  {
    id: 'PNT-05',
    title: 'Дохід упирається в стелю',
    slogan: 'Більше клієнтів — менше тебе.',
    img: '/Images/2. Pain - Revenue block - UKR.png',
  },
];

const CARD_COUNT = cards.length;

export default function PainSection() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const first = el.firstElementChild;
      if (!first) return;
      const step = first.offsetWidth + 16;
      if (step <= 0) return;
      const idx = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(idx, CARD_COUNT - 1)));
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (i) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[i];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <section
      id="pain"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-start">

          {/* =====================================================
              LEFT — sticky header
              ===================================================== */}
          <div className="relative lg:col-span-5 lg:sticky lg:top-24 lg:self-start anim-trigger text-center lg:text-left">
            {/* Decorative dot-mesh background — Pricing-style base center */}
            <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

            {/* Mono eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
              style={{ fontFamily: monoStack, transitionDelay: '0.05s' }}
            >
              <span className="h-px w-6 bg-slate-300" />
              Діагностика · ручний режим
              <span className="h-px w-6 bg-slate-300" />
            </div>

            <h2
              className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
              style={{ fontFamily: fontStack, lineHeight: 1.2 }}
            >
              <span className="block anim-wrap">
                <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                  Скільки з цього
                </span>
              </span>
              <span className="block anim-italic" style={{ transitionDelay: '0.20s' }}>
                у тебе
                <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                  зараз?
                </span>
              </span>
            </h2>

            <p
              className="max-w-[34rem] text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 mb-8 anim-fade-up subtitle-hairline"
              style={{
                transitionDelay: '0.30s',
                fontFamily: fontStack,
              }}
            >
              5 ситуацій, у яких застрягають експерти на ручному режимі.
            </p>

            {/* progress counter */}
            <div
              className="hidden lg:flex items-center gap-3 text-[12px] text-slate-500 anim-fade-up"
              style={{ transitionDelay: '0.40s', fontFamily: fontStack }}
            >
              <span className="text-brand-gradient font-medium">01</span>
              <span className="flex-1 h-px bg-gradient-to-r from-[#175ae8]/45 via-slate-300/60 to-transparent" />
              <span className="text-slate-400">05</span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — carousel (mobile) / stack (desktop)
              ===================================================== */}
          <div className="lg:col-span-7">
            <div
              ref={carouselRef}
              className="anim-trigger flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scroll-pl-6 sm:mx-0 sm:px-0 sm:scroll-pl-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:snap-none [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {cards.map((card, i) => (
                <PainCard key={card.id} card={card} delay={`${0.05 + i * 0.05}s`} />
              ))}
            </div>

            {/* Mobile-only dot pagination — sits below the carousel on light page bg */}
            <div className="flex lg:hidden justify-center gap-2 mt-4">
              {Array.from({ length: CARD_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Перейти до картки ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIndex
                      ? 'w-6 bg-gradient-to-br from-[#020f2d] to-[#175ae8]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PainCard — full-bleed hyperreal image + dark bottom vignette
   for white text legibility. Top metadata (ID + status pill)
   intentionally removed to keep the image uncluttered; the only
   on-card content is the slogan group at the bottom.
   ============================================================ */
function PainCard({ card, delay }) {
  return (
    <div
      className="group relative rounded-[28px] overflow-hidden bg-slate-950 shadow-none lg:shadow-[0_14px_36px_rgba(15,23,42,0.10)] anim-fade-up snap-start shrink-0 w-[88vw] sm:w-[68%] lg:w-auto lg:shrink aspect-[4/3] lg:aspect-video"
      style={{ transitionDelay: delay }}
    >
      {/* Hyperreal background image — full-bleed */}
      <img
        src={card.img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom dark vignette — guarantees white-text contrast over any image */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#020f2d]/95 via-[#020f2d]/55 to-transparent pointer-events-none"
      />

      {/* Content — slogan group, bottom-anchored */}
      <div className="relative z-10 p-6 lg:p-7 h-full flex flex-col justify-end">
        <h3
          className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-white mb-2 font-medium"
          style={{ fontFamily: fontStack, textWrap: 'balance' }}
        >
          {card.title}
        </h3>
        <p
          className="text-[0.95rem] leading-[1.55] text-slate-200/95 max-w-[32ch]"
          style={{ fontFamily: fontStack, textWrap: 'balance' }}
        >
          {card.slogan}
        </p>
      </div>
    </div>
  );
}
