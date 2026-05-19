import { useEffect, useRef, useState } from 'react';
import { pricing } from './PricingSection';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

// Flatten all testimonials from all packages into one ordered pool.
// Order: Фундамент (4) → Генератор (4, Tania first) → Преміум (4) = 12 total.
const allTestimonials = pricing.flatMap((p) => p.testimonials);

export default function TestimonialsSection() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const first = el.firstElementChild;
      if (!first) return;
      const step = first.offsetWidth + 16; // gap-4 = 16px
      if (step <= 0) return;
      const idx = Math.round(el.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(idx, allTestimonials.length - 1)));
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
      id="testimonials"
      className="relative py-20 lg:hidden px-6 md:px-8 scroll-mt-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header — centered, mobile-style */}
        <div className="relative mb-10 anim-trigger text-center">
          {/* Decorative dot-mesh background — Pricing-style base center */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: monoStack, transitionDelay: '0s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Що кажуть
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] tracking-[-0.02em] text-slate-950 font-light"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              Голоси тих, з ким уже
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                спрацювало
              </span>
            </span>
          </h2>
        </div>

        {/* Horizontal swipe carousel — mobile native */}
        <div
          ref={carouselRef}
          className="anim-trigger flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-pl-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {allTestimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              testimonial={t}
              delay={`${0.05 + (i % 4) * 0.05}s`}
            />
          ))}
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-1.5 mt-3 flex-wrap max-w-[260px] mx-auto">
          {allTestimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Перейти до відгуку ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                i === activeIndex
                  ? 'w-6 bg-[#175ae8]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TestimonialCard — glass card with border-l (matches desktop testimonials)
   ============================================================ */
function TestimonialCard({ testimonial, delay }) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden bg-white/55 backdrop-blur-xl border border-white/60 anim-fade-up snap-start shrink-0 w-[85vw] sm:w-[420px] flex flex-col"
      style={{
        boxShadow: '0 20px 50px rgba(148,163,184,0.14), 0 6px 18px rgba(15,23,42,0.05)',
        transitionDelay: delay,
        minHeight: '320px',
      }}
    >
      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[24px]"
      />

      <div className="relative z-10 flex flex-col h-full p-6 sm:p-7">
        {/* Blue accent bar — visual cousin to desktop testimonials border-l */}
        <span
          aria-hidden="true"
          className="absolute left-6 top-6 bottom-6 w-[2px] rounded-full"
          style={{ background: 'linear-gradient(180deg, #175ae8 0%, rgba(23,90,232,0.15) 100%)' }}
        />

        <div className="pl-5 flex flex-col h-full">
          <iconify-icon
            icon="solar:quote-up-square-linear"
            width="22"
            height="22"
            style={{ color: '#175ae8', opacity: 0.65 }}
            class="block mb-3"
          />

          <blockquote
            className="text-[0.97rem] leading-[1.65] text-slate-700 italic font-light mb-5 flex-1"
            style={{ fontFamily: fontStack }}
          >
            «{testimonial.quote}»
          </blockquote>

          <cite
            className="not-italic block text-[10px] uppercase tracking-[0.18em] text-slate-500 pt-4 border-t border-slate-200/60"
            style={{ fontFamily: monoStack }}
          >
            {testimonial.attribution}
          </cite>
        </div>
      </div>
    </div>
  );
}
