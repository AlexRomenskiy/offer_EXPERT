import useOneAtATimeSwipe from '../../hooks/useOneAtATimeSwipe';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

/* ============================================================
   EN-adapted pain framing per project_unified_synthesis_2026-05-17:
   - Drop UA-trauma phrasing (тону в DM, etc.) — keep universal pains
   - Add operator/metrics tone (+30%) — pills lean on concrete numbers
   - Trim bruise (-30%) — less piling, sharper observations
   ============================================================ */

const cards = [
  {
    id: 'PNT-01',
    title: 'Audience grows. Sales don’t.',
    slogan: 'Leads die somewhere between the DM and the checkout.',
    pill: { label: 'Conv. 5%', tone: 'blue', dot: true },
    accent: 'rgba(96,165,250,0.22)',
    accent2: 'rgba(147,197,253,0.16)',
  },
  {
    id: 'PNT-02',
    title: 'Every customer eats your day.',
    slogan: 'One client = three hours of you on a call.',
    pill: { label: '12 unread', tone: 'blue', dot: true, pulse: true },
    accent: 'rgba(125,140,255,0.20)',
    accent2: 'rgba(96,165,250,0.14)',
  },
  {
    id: 'PNT-03',
    title: 'Step away — sales stop.',
    slogan: 'Take a day off, and revenue takes it with you.',
    pill: { label: '23:47 · Offline', tone: 'slate', dot: false },
    accent: 'rgba(100,116,180,0.22)',
    accent2: 'rgba(148,163,184,0.14)',
  },
  {
    id: 'PNT-04',
    title: 'Stitching the stack is its own job.',
    slogan: 'Five subscriptions, no one to wire them together.',
    pill: { label: 'Stack 5+', tone: 'blue', dot: false },
    accent: 'rgba(139,92,246,0.18)',
    accent2: 'rgba(96,165,250,0.14)',
  },
  {
    id: 'PNT-05',
    title: 'Revenue hits a hard ceiling.',
    slogan: 'More clients = less of you for each one.',
    pill: { label: 'Plateau', tone: 'blue', dot: true },
    accent: 'rgba(96,165,250,0.20)',
    accent2: 'rgba(147,197,253,0.12)',
  },
];

const CARD_COUNT = cards.length;

export default function PainSectionEN() {
  const { activeIndex, goTo, onTouchStart, onTouchEnd, trackRef, trackStyle } =
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
              className="anim-trigger overflow-hidden -mx-6 pb-6 sm:mx-0 lg:overflow-visible lg:pb-0"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
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

/* ============================================================ PainCard — same as UA, just locale-agnostic copy ============================================================ */
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
      className="group relative rounded-[28px] overflow-hidden bg-white/35 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up shrink-0 w-[88vw] sm:w-[68%] lg:w-auto lg:shrink aspect-[3/4] lg:aspect-video"
      style={{ transitionDelay: delay }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 72% 28%, ${card.accent}, transparent 48%), radial-gradient(circle at 22% 78%, ${card.accent2}, transparent 45%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.5) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/85 via-white/45 to-transparent pointer-events-none"
      />

      <div className="relative z-10 p-6 lg:p-7 h-full flex flex-col justify-between">
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
