import { useEffect, useRef, useState } from 'react';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

/* ============================================================
   ASSET PIPELINE (pending — placeholder gradients in use):
   Each card has a background "image slot" that currently shows an
   atmospheric blue/violet radial gradient + dot mesh. When real
   illustrations / product UI mockups arrive, swap the placeholder
   block with:
     <img
       src="/illustrations/pain-XX.png"
       alt=""
       aria-hidden="true"
       className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-multiply"
     />
   Keep the bottom-vignette gradient — it ensures text legibility
   regardless of how busy the underlying image becomes.
   ============================================================ */

const cards = [
  {
    id: 'PNT-01',
    title: 'Аудиторія є — продаж замало',
    slogan: 'Лід губиться між DM і чеком.',
    pill: { label: 'Conv. 5%', tone: 'blue', dot: true },
    accent: 'rgba(96,165,250,0.22)',
    accent2: 'rgba(147,197,253,0.16)',
  },
  {
    id: 'PNT-02',
    title: 'Кожен клієнт — на твоїх плечах',
    slogan: 'Один клієнт = години твого часу.',
    pill: { label: '12 непрочитаних', tone: 'blue', dot: true, pulse: true },
    accent: 'rgba(125,140,255,0.20)',
    accent2: 'rgba(96,165,250,0.14)',
  },
  {
    id: 'PNT-03',
    title: 'Без тебе система зупиняється',
    slogan: 'Не вийшов — продажі стали.',
    pill: { label: '23:47 · Офлайн', tone: 'slate', dot: false },
    accent: 'rgba(100,116,180,0.22)',
    accent2: 'rgba(148,163,184,0.14)',
  },
  {
    id: 'PNT-04',
    title: 'Технічно зібрати — окрема професія',
    slogan: 'Купа інструментів — і нікого, хто все це зв\'яже.',
    pill: { label: 'Stack 5+', tone: 'blue', dot: false },
    accent: 'rgba(139,92,246,0.18)',
    accent2: 'rgba(96,165,250,0.14)',
  },
  {
    id: 'PNT-05',
    title: 'Дохід упирається в стелю',
    slogan: 'Більше клієнтів = менше тебе для них.',
    pill: { label: 'Плато', tone: 'blue', dot: true },
    accent: 'rgba(96,165,250,0.20)',
    accent2: 'rgba(147,197,253,0.12)',
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
              className="anim-trigger flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-pl-6 sm:mx-0 sm:px-0 sm:scroll-pl-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:snap-none lg:pb-0 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {cards.map((card, i) => (
                <PainCard key={card.id} card={card} delay={`${0.05 + i * 0.05}s`} />
              ))}
            </div>

            {/* Mobile-only dot pagination */}
            <div className="flex lg:hidden justify-center gap-2 mt-3">
              {Array.from({ length: CARD_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Перейти до картки ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIndex
                      ? 'w-6 bg-[#175ae8]'
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
   PainCard — glass card with bg-image slot + vignette
   ============================================================ */
function PainCard({ card, delay }) {
  const pillStyles = {
    blue: 'border-blue-200/70 bg-white/65 text-blue-700',
    slate: 'border-slate-200/70 bg-white/65 text-slate-700',
  };
  const dotColor = {
    blue: 'bg-[#175ae8]',
    slate: 'bg-slate-500',
  };

  return (
    <div
      className="group relative rounded-[28px] overflow-hidden bg-white/35 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up snap-start shrink-0 w-[88vw] sm:w-[68%] lg:w-auto lg:shrink aspect-[3/4] lg:aspect-video"
      style={{ transitionDelay: delay }}
    >
      {/* Atmospheric gradient placeholder (swap with <img/> when assets arrive) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 72% 28%, ${card.accent}, transparent 48%), radial-gradient(circle at 22% 78%, ${card.accent2}, transparent 45%)`,
        }}
      />

      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)] pointer-events-none"
      />

      {/* Subtle dot mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.5) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Bottom vignette — ensures text contrast over any future image */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/85 via-white/45 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-7 h-full flex flex-col justify-between">
        {/* Top row — ID tag + status pill */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="text-[10.5px] uppercase tracking-[0.18em] text-slate-500"
            style={{ fontFamily: monoStack }}
          >
            {card.id}
          </span>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.16em] ${pillStyles[card.pill.tone]}`}
            style={{ fontFamily: monoStack }}
          >
            {card.pill.dot && (
              <span
                className={`w-1.5 h-1.5 rounded-full ${dotColor[card.pill.tone]} ${card.pill.pulse ? 'animate-pulse' : ''}`}
              />
            )}
            {card.pill.label}
          </span>
        </div>

        {/* Bottom — heading + slogan */}
        <div className="mt-auto pt-10">
          <h3
            className="text-[1.3rem] lg:text-[1.45rem] leading-[1.15] tracking-[-0.02em] text-slate-950 mb-2 font-medium"
            style={{ fontFamily: fontStack }}
          >
            {card.title}
          </h3>
          <p
            className="text-[0.95rem] leading-[1.55] text-slate-700 max-w-[32ch]"
            style={{ fontFamily: fontStack }}
          >
            {card.slogan}
          </p>
        </div>
      </div>
    </div>
  );
}
