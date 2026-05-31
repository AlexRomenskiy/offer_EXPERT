import { useState } from 'react';
import {
  TANIA_NAME,
  OLEXANDR_NAME,
  UBRAND_DISCOUNT_PCT,
  isDiscountActive,
} from '../../config/ubrand';
import { useUBrandForm } from './UBrandFormModal';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

const formatUSD = (n) => '$' + n.toLocaleString('en-US');
const discountedPrice = (n) => Math.round(n * (1 - UBRAND_DISCOUNT_PCT / 100));

// Each U-Brand package bundles BOTH halves: Tania's on-camera work + Olexandr's
// system. Features carry a `tip` (hover on desktop, tap on mobile) so cold
// visitors understand jargon (lead magnet, tripwire…). Testimonials are
// team-voiced. Note on scripts: the client brings their own script; Tania
// refines it and directs delivery — she doesn't write it for them, and we never
// frame script-writing as a deliverable.
const pricingUBrand = [
  {
    key: 'foundation',
    title: 'Foundation',
    badge: 'START',
    priceNum: 1247,
    timeline: '5–7 days',
    supportDays: 30,
    tagline: 'Your first confident presence and a clear offer.',
    taniaSessions: 2,
    forWhom: 'You have the expertise but freeze on camera and have no real online presence yet.',
    onCamera: [
      { label: 'On-camera positioning & presence', tip: 'We define how you come across on camera — who you are and who you help — so you look like the expert you already are.' },
      { label: 'Confident delivery on your first videos', tip: 'You bring your script; Tania refines it with you and directs your delivery so your first videos feel natural, not stiff.' },
    ],
    system: [
      { label: 'Strategy & positioning', tip: 'Who you are, who you sell to, why you — we pin down your position in the market.' },
      { label: 'Landing page (mobile-ready)', tip: 'A single landing page for your service or product, built to work on phones.' },
      { label: 'Lead magnet + messenger chatbot', tip: 'A free material (PDF, checklist, quiz or short video) given in exchange for a contact. A bot delivers it on Instagram / WhatsApp / Messenger and keeps the person in your base.' },
    ],
    outcome: 'You show up with confidence and a clear offer — ready ground for the system.',
    testimonial: {
      quote:
        'I used to freeze the second a camera turned on. Tania got me speaking like myself — and Olexandr turned that into a landing and positioning that finally fit. Now clients message me saying “it’s like you’re describing me.”',
      attribution: 'Olena · Nutritionist',
    },
  },
  {
    key: 'generator',
    title: 'Generator',
    badge: 'OPTIMAL',
    highlight: true,
    priceNum: 2490,
    timeline: '14 days',
    supportDays: 30,
    tagline: 'The whole system — from first hello to repeat sales.',
    taniaSessions: 2,
    forWhom: 'You want a personal brand plus an automated funnel that sells without your constant presence.',
    onCamera: [
      { label: 'A repeatable on-camera content routine', tip: 'Presence that builds trust — we shape the scripts you bring and coach your delivery so you can show up consistently without the dread.' },
      { label: 'On-camera content that feeds the funnel', tip: 'Your videos are tied to the funnel below, so attention turns into leads — not just views.' },
    ],
    system: [
      { label: 'Everything in Foundation', tip: 'Positioning, landing page, lead magnet and chatbot — all included as the base.' },
      { label: 'Full product packaging', tip: 'Not one business-card page but a full structure: sales, material delivery, and separate touchpoints to collect contacts.' },
      { label: 'Lead magnet + tripwire', tip: 'The lead magnet catches the contact for free. The tripwire is a low-cost paid product that lifts the average order and gives the first paid experience with you.' },
      { label: 'Warm-up bot, payments, funnel analytics', tip: 'An automated warm-up sequence, payment processing with instant access after purchase, and clear numbers across the whole funnel.' },
    ],
    outcome: 'An automated sales system that converts attention into clients — and works without you.',
    testimonial: {
      quote:
        'I didn’t deal with a big agency — just Tania and Olexandr. She put me in front of the camera, he built the system behind it. The first payment came in at 7 a.m. and I just sat there with my coffee. It runs without me.',
      attribution: 'Maryna · Therapist, course author',
    },
  },
  {
    key: 'premium',
    title: 'Premium',
    badge: 'VIP · PRIVATE',
    scarcity: 'Only 2 Premium builds open each month',
    priceNum: 4247,
    timeline: '14–21 days',
    supportDays: 90,
    tagline: 'Private and done-with-you. You lead on camera — the system finds and converts buyers behind you.',
    taniaSessions: 4,
    forWhom: 'For those who want the most professional, hands-on build — bespoke and private, with both founders directly in it.',
    onCamera: [
      { label: 'Full on-camera coaching — lead your brand like a pro', tip: 'Private 1:1 sessions with Tania: she directs your delivery and refines the scripts you bring until you carry your brand — on camera and on stage — like a pro.' },
      { label: 'Personal content day — a bank of ready assets', tip: 'A focused shoot that stocks weeks of content, so you’re never staring at a blank camera.' },
    ],
    system: [
      { label: 'Everything in Generator', tip: 'The full packaged funnel — packaging, tripwire, bot, payments, analytics.' },
      { label: 'Active client-finding — paid ads: creative, launch & management', tip: 'We create the images, video and copy and go find your buyers across Meta, Google, YouTube and TikTok — the focus is real potential clients, not vanity reach. The first month’s ad budget is included.' },
      { label: 'Full-funnel analytics — first touch to repeat sale', tip: 'Live reporting across the entire funnel: which channels, creatives and steps actually produce clients — so every dollar goes where it works.' },
      { label: 'Bespoke strategy, run 1:1 by both founders', tip: 'A private, custom build led personally by Tania and Olexandr — with priority delivery and a 90-day optimization window after launch.' },
    ],
    note: 'First month’s ad budget is included — you only fund ad spend from month 2.',
    guarantee:
      'If your system isn’t live and taking test traffic by day 21, you don’t pay the balance. The build risk is on us, not you.',
    outcome: 'A premium brand that actively brings in clients — you lead on camera, the system finds and converts buyers behind you.',
    testimonial: {
      quote:
        'For two years my ad budget burned and I couldn’t see why. The problem wasn’t the ads — it was how I showed up and where they led. Tania fixed the on-camera part, Olexandr built the funnel and the traffic. Now I finally see the payback.',
      attribution: 'Steve · Finance advisor',
    },
  },
];

// Click-to-expand explanation — inline (no overlay), so it never overlaps or
// sticks on touch. Re-tap closes; the chevron signals it's expandable.
function FeatureItem({ feature }) {
  const [open, setOpen] = useState(false);
  const hasTip = !!feature.tip;
  return (
    <li>
      <button
        type="button"
        onClick={() => hasTip && setOpen((o) => !o)}
        aria-expanded={hasTip ? open : undefined}
        className={`w-full flex items-start gap-2.5 text-left ${hasTip ? '' : 'cursor-default'}`}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-[#175ae8] shrink-0"
          style={{ marginTop: '0.55em', boxShadow: '0 0 6px rgba(23,90,232,0.45)' }}
        />
        <span className="flex-1 text-[0.88rem] text-slate-800 leading-[1.45]" style={{ fontFamily: fontStack }}>
          {feature.label}
        </span>
        {hasTip && (
          <iconify-icon
            icon="solar:alt-arrow-down-linear"
            width="15"
            height="15"
            class="shrink-0 transition-transform duration-200"
            style={{ color: '#94a3b8', marginTop: '0.35em', transform: open ? 'rotate(180deg)' : 'none' }}
          />
        )}
      </button>
      {hasTip && open && (
        <p
          className="mt-1.5 ml-[18px] pl-2.5 border-l-2 border-[#175ae8]/30 text-[0.8rem] text-slate-600 leading-[1.5]"
          style={{ fontFamily: fontStack }}
        >
          {feature.tip}
        </p>
      )}
    </li>
  );
}

function PartList({ label, name, icon, items, meta }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <iconify-icon icon={icon} width="16" height="16" style={{ color: '#175ae8' }} />
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500" style={{ fontFamily: monoStack }}>
          {label} · <span className="text-brand-gradient">{name}</span>
          {meta && <span className="text-slate-400"> · {meta}</span>}
        </p>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <FeatureItem key={i} feature={it} />
        ))}
      </ul>
    </div>
  );
}

function PackageCard({ p, discount }) {
  const { open } = useUBrandForm();
  return (
    <div
      className={`relative flex flex-col p-6 lg:p-7 rounded-[28px] bg-white/55 backdrop-blur-xl anim-fade-up h-full ${
        p.highlight ? 'border-2 border-[#175ae8]/40' : 'border border-white/60'
      }`}
      style={{
        boxShadow: p.highlight
          ? '0 32px 90px rgba(23,90,232,0.18), 0 8px 24px rgba(15,23,42,0.06)'
          : '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
      />
      <div className="relative z-10 flex flex-col h-full">
        {/* Badge */}
        <div
          className={`inline-flex self-start items-center px-2.5 py-1 rounded-full text-[10px] tracking-[0.16em] uppercase mb-4 ${
            p.highlight ? 'text-white' : 'text-slate-600 bg-slate-100 border border-slate-200'
          }`}
          style={{
            fontFamily: monoStack,
            background: p.highlight ? 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)' : undefined,
          }}
        >
          {p.badge}
        </div>

        {/* Title */}
        <h3 className="text-[1.4rem] text-slate-900 font-semibold leading-tight mb-2" style={{ fontFamily: fontStack }}>
          {p.title}
        </h3>

        {/* Scarcity (Premium only) — real capacity limit, not a discount clock */}
        {p.scarcity && (
          <div
            className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full mb-2.5"
            style={{ background: 'rgba(251,146,60,0.10)', border: '1px solid rgba(251,146,60,0.35)' }}
          >
            <iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="13" height="13" style={{ color: '#ea580c' }} />
            <span className="text-[10px] tracking-[0.1em] uppercase text-orange-700 font-semibold" style={{ fontFamily: monoStack }}>
              {p.scarcity}
            </span>
          </div>
        )}

        {/* Price (strikethrough full + discounted while the offer is live) */}
        {discount ? (
          <>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[1.25rem] text-slate-400 line-through font-light" style={{ fontFamily: fontStack }}>
                {formatUSD(p.priceNum)}
              </span>
              <span className="text-[2.2rem] tracking-[-0.03em] text-slate-950 font-light leading-none" style={{ fontFamily: fontStack }}>
                {formatUSD(discountedPrice(p.priceNum))}
              </span>
            </div>
            <div className="text-[10px] tracking-[0.14em] uppercase text-orange-500 mt-1.5 font-semibold" style={{ fontFamily: monoStack }}>
              −{UBRAND_DISCOUNT_PCT}% if you make a decision
            </div>
          </>
        ) : (
          <span className="text-[2.2rem] tracking-[-0.03em] text-slate-950 font-light leading-none" style={{ fontFamily: fontStack }}>
            {formatUSD(p.priceNum)}
          </span>
        )}

        <div className="text-[10px] tracking-[0.16em] uppercase text-slate-500 mt-2 mb-4" style={{ fontFamily: monoStack }}>
          {p.timeline} delivery · {p.supportDays} days support
        </div>

        <p className="text-[0.92rem] text-slate-800 leading-[1.5] font-medium mb-4" style={{ fontFamily: fontStack }}>
          {p.tagline}
        </p>

        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" style={{ fontFamily: monoStack }}>
            Who it’s for
          </p>
          <p className="text-[0.86rem] text-slate-700 leading-[1.5]" style={{ fontFamily: fontStack }}>
            {p.forWhom}
          </p>
        </div>

        {/* The two halves */}
        <PartList label="On camera" name={TANIA_NAME} icon="solar:videocamera-record-linear" items={p.onCamera} meta={`${p.taniaSessions} live sessions`} />
        <PartList label="The system" name={OLEXANDR_NAME} icon="solar:layers-minimalistic-linear" items={p.system} />

        {p.note && (
          <p className="text-[11px] text-slate-500 italic leading-[1.45] mb-4" style={{ fontFamily: fontStack }}>
            {p.note}
          </p>
        )}

        {/* Outcome */}
        <div className="mb-5 p-3 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05]">
          <p className="text-brand-gradient text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ fontFamily: monoStack }}>
            Outcome
          </p>
          <p className="text-[0.86rem] text-slate-800 leading-[1.5]" style={{ fontFamily: fontStack }}>
            {p.outcome}
          </p>
        </div>

        {/* Launch guarantee (Premium only) — risk reversal, navy block for weight */}
        {p.guarantee && (
          <div
            className="mb-5 p-3.5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #020f2d 0%, #0c2a6b 100%)',
              boxShadow: '0 14px 34px rgba(2,15,45,0.22)',
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <iconify-icon icon="solar:shield-check-bold" width="16" height="16" style={{ color: '#60a5fa' }} />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#7fb0ff]" style={{ fontFamily: monoStack }}>
                Launch guarantee
              </p>
            </div>
            <p className="text-[0.84rem] text-white/90 leading-[1.5]" style={{ fontFamily: fontStack }}>
              {p.guarantee}
            </p>
          </div>
        )}

        {/* CTA → in-page lead form */}
        <button
          type="button"
          onClick={open}
          className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full text-white text-[0.9rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
          style={{
            fontFamily: fontStack,
            background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
            boxShadow: '0 14px 38px rgba(23,90,232,0.28), inset 0 1px 0 rgba(255,255,255,0.20)',
          }}
        >
          Reserve your spot
          <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
        </button>

        {/* Team-voiced testimonial */}
        <blockquote className="mt-6 pt-5 border-t border-slate-200/70">
          <p className="text-[0.86rem] leading-[1.55] font-light text-slate-600 italic mb-2" style={{ fontFamily: fontStack }}>
            «{p.testimonial.quote}»
          </p>
          <cite className="not-italic text-[10px] uppercase tracking-[0.16em] text-slate-500" style={{ fontFamily: monoStack }}>
            {p.testimonial.attribution}
          </cite>
        </blockquote>
      </div>
    </div>
  );
}

export default function UBrandPricingSection() {
  const discount = isDiscountActive();
  const [activeKey, setActiveKey] = useState('generator');
  const active = pricingUBrand.find((p) => p.key === activeKey);

  return (
    <section id="pricing" className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[460px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(23,90,232,0.10), transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="relative text-center mb-10 lg:mb-14 anim-trigger">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: monoStack }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Packages · from {formatUSD(discount ? discountedPrice(1247) : 1247)}
            <span className="h-px w-6 bg-slate-300" />
          </div>
          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.18, transitionDelay: '0.08s' }}
          >
            Every package includes{' '}
            <span className="italic-accent">both of us</span>
          </h2>
          <p
            className="max-w-[36rem] mx-auto mt-5 text-[0.98rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline-mobile-only"
            style={{ fontFamily: fontStack, transitionDelay: '0.14s' }}
          >
            {TANIA_NAME}’s on-camera work and {OLEXANDR_NAME}’s system come bundled in
            every tier — one team, one price, from being seen to being booked.
          </p>
          <p
            className="inline-flex items-center gap-2 mt-5 text-[12px] text-slate-500 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.18s' }}
          >
            <iconify-icon icon="solar:check-circle-line-duotone" width="16" height="16" style={{ color: '#175ae8' }} />
            A direct line to both founders is included in every package.
          </p>
        </div>

        {/* Desktop: 3 cards side by side */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-7 items-stretch anim-trigger">
          {pricingUBrand.map((p) => (
            <PackageCard key={p.key} p={p} discount={discount} />
          ))}
        </div>

        {/* Mobile: tabbed single card (switch package to see its details) */}
        <div className="lg:hidden anim-trigger">
          <div className="inline-flex p-1 rounded-full bg-white/60 border border-white/70 shadow-sm w-full gap-1 mb-7 backdrop-blur-md">
            {pricingUBrand.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setActiveKey(p.key)}
                className={`flex-1 px-2 py-2.5 rounded-full text-[12px] font-semibold tracking-[-0.01em] transition-all ${
                  activeKey === p.key ? 'text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
                style={{
                  fontFamily: fontStack,
                  background: activeKey === p.key ? 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)' : undefined,
                }}
              >
                {p.title}
              </button>
            ))}
          </div>
          <PackageCard p={active} discount={discount} />
        </div>
      </div>
    </section>
  );
}
