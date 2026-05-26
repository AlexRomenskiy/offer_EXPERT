import useOneAtATimeSwipe from '../../hooks/useOneAtATimeSwipe';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

/* ============================================================
   EN-adapted pain framing (image-based, mirrors UA architecture):
     PNT-01  Audience  → /Images/2. Pain - Audience - ENG.png
     PNT-02  Client    → /Images/2. Pain - Client weight - ENG.png
     PNT-03  Time      → /Images/2. Pain - Time.png           (universal — shared with UA)
     PNT-04  Stack     → /Images/2. Pain - Technical stack.png (universal — shared with UA)
     PNT-05  Revenue   → /Images/2. Pain - Revenue block - UKR.png (UKR placeholder until ENG ships)
   Copy keeps EN tone (operator/metrics +30%, trim bruise -30%).
   ============================================================ */

const cards = [
  {
    id: 'PNT-01',
    title: 'Audience grows. Sales don’t.',
    slogan: 'Leads die somewhere between the DM and the checkout.',
    img: '/Images/2. Pain - Audience - ENG.png',
  },
  {
    id: 'PNT-02',
    title: 'Every customer eats your day.',
    slogan: 'One client = three hours of you on a call.',
    img: '/Images/2. Pain - Client weight - ENG.png',
  },
  {
    id: 'PNT-03',
    title: 'Step away — sales stop.',
    slogan: 'Take a day off, and revenue takes it with you.',
    img: '/Images/2. Pain - Time.png',
  },
  {
    id: 'PNT-04',
    title: 'Stitching the stack is its own job.',
    slogan: 'Five subscriptions, no one to wire them together.',
    img: '/Images/2. Pain - Technical stack.png',
  },
  {
    id: 'PNT-05',
    title: 'Revenue hits a hard ceiling.',
    slogan: 'More clients = less of you for each one.',
    img: '/Images/2. Pain - Revenue block - UKR.png',
  },
];

const CARD_COUNT = cards.length;

export default function PainSectionEN() {
  const { activeIndex, goTo, containerRef, trackRef, trackStyle } =
    useOneAtATimeSwipe(CARD_COUNT);

  return (
    <section
      id="pain"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 items-start">

          {/* ===================================================== LEFT — sticky header ===================================================== */}
          <div className="relative lg:col-span-5 lg:sticky lg:top-24 lg:self-start anim-trigger text-center lg:text-left">
            <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

            <div
              className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
              style={{ fontFamily: monoStack, transitionDelay: '0.05s' }}
            >
              <span className="h-px w-6 bg-slate-300" />
              Diagnostic · manual mode
              <span className="h-px w-6 bg-slate-300" />
            </div>

            <h2
              className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
              style={{ fontFamily: fontStack, lineHeight: 1.2 }}
            >
              <span className="block anim-wrap">
                <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                  How much of this
                </span>
              </span>
              <span className="block anim-italic" style={{ transitionDelay: '0.20s' }}>
                sounds
                <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                  familiar?
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
              Five places experts get stuck the moment their business depends on doing everything by hand.
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

          {/* ===================================================== RIGHT — controlled one-step swipe (mobile) / vertical stack (desktop) ===================================================== */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="anim-trigger overflow-hidden touch-pan-y -mx-6 pb-6 sm:mx-0 lg:overflow-visible lg:pb-0 lg:touch-auto"
            >
              <div
                ref={trackRef}
                className="flex gap-4 px-6 sm:px-0 lg:flex-col lg:gap-6 lg:px-0"
                style={trackStyle}
              >
                {cards.map((card, i) => (
                  <PainCard key={card.id} card={card} delay={`${0.05 + i * 0.05}s`} />
                ))}
              </div>
            </div>

            {/* Mobile-only dot pagination */}
            <div className="flex lg:hidden justify-center gap-2 mt-3">
              {Array.from({ length: CARD_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to card ${i + 1}`}
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
   PainCard — image-based (mirrors UA). Full-bleed hyperreal image
   + bottom dark vignette for white text legibility.
   ============================================================ */
function PainCard({ card, delay }) {
  return (
    <div
      className="group relative rounded-[28px] overflow-hidden bg-slate-950 shadow-none lg:shadow-[0_14px_36px_rgba(15,23,42,0.10)] anim-fade-up shrink-0 w-[88vw] sm:w-[68%] lg:w-auto lg:shrink aspect-[4/3] lg:aspect-video"
      style={{ transitionDelay: delay }}
    >
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
          className="text-[0.95rem] leading-[1.55] text-slate-200/95 max-w-[55ch]"
          style={{ fontFamily: fontStack, textWrap: 'balance' }}
        >
          {card.slogan}
        </p>
      </div>
    </div>
  );
}
