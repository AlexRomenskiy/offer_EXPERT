import { useState } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';
import {
  TANIA_NAME,
  OLEXANDR_NAME,
  UBRAND_DISCOUNT_PCT,
  UBRAND_DEADLINE_LABEL,
  isDiscountActive,
} from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

const formatUSD = (n) => '$' + n.toLocaleString('en-US');
const discountedPrice = (n) => Math.round(n * (1 - UBRAND_DISCOUNT_PCT / 100));

// Each U-Brand package bundles BOTH halves: Tania's on-camera work + Olexandr's
// system. Testimonials are team-voiced (they credit both, not one founder).
const pricingUBrand = [
  {
    key: 'foundation',
    title: 'Foundation',
    badge: 'START',
    priceNum: 1247,
    timeline: '5–7 days',
    supportDays: 30,
    tagline: 'Your first confident presence and a clear offer.',
    forWhom: 'You have the expertise but freeze on camera and have no real online presence yet.',
    onCamera: [
      'Find your on-camera voice — positioning & presence',
      'Your first confident videos: script → delivery',
    ],
    system: [
      'Strategy & positioning',
      'Landing page (mobile-ready)',
      'Lead magnet + messenger chatbot',
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
    forWhom: 'You want a personal brand plus an automated funnel that sells without your constant presence.',
    onCamera: [
      'Personal-brand content system — presence that builds trust',
      'On-camera scripts that feed the funnel',
    ],
    system: [
      'Everything in Foundation',
      'Full product packaging (course / intensive structure)',
      'Lead magnet + tripwire',
      'Warm-up bot, payments, funnel analytics',
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
    badge: 'WITH TRAFFIC',
    priceNum: 4247,
    timeline: '14–21 days',
    supportDays: 30,
    tagline: 'A custom system + ads that bring the clients.',
    forWhom: 'You want not just packaging but scale — paid traffic on top of a system that converts.',
    onCamera: [
      'Full on-camera coaching — become the magnetic face of your brand',
      'Content & ad-creative direction, with you on camera',
    ],
    system: [
      'Everything in Generator',
      'Paid ads — full campaign (creative, copy, launch)',
      'Precise targeting + end-to-end analytics',
    ],
    outcome: 'A scalable system — increase the ad budget, and sales grow with it.',
    testimonial: {
      quote:
        'For two years my ad budget burned and I couldn’t see why. The problem wasn’t the ads — it was how I showed up and where they led. Tania fixed the on-camera part, Olexandr built the funnel and the traffic. Now I finally see the payback.',
      attribution: 'Steve · Finance advisor',
    },
  },
];

function PartList({ label, name, icon, items }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <iconify-icon icon={icon} width="16" height="16" style={{ color: '#175ae8' }} />
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500" style={{ fontFamily: monoStack }}>
          {label} · <span className="text-brand-gradient">{name}</span>
        </p>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#175ae8] shrink-0"
              style={{ marginTop: '0.5em', boxShadow: '0 0 6px rgba(23,90,232,0.45)' }}
            />
            <span className="text-[0.88rem] text-slate-800 leading-[1.45]" style={{ fontFamily: fontStack }}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PackageCard({ p, discount }) {
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
              −{UBRAND_DISCOUNT_PCT}% until {UBRAND_DEADLINE_LABEL}
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
        <PartList label="On camera" name={TANIA_NAME} icon="solar:videocamera-record-linear" items={p.onCamera} />
        <PartList label="The system" name={OLEXANDR_NAME} icon="solar:layers-minimalistic-linear" items={p.system} />

        {/* Outcome */}
        <div className="mb-5 p-3 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05]">
          <p className="text-brand-gradient text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ fontFamily: monoStack }}>
            Outcome
          </p>
          <p className="text-[0.86rem] text-slate-800 leading-[1.5]" style={{ fontFamily: fontStack }}>
            {p.outcome}
          </p>
        </div>

        {/* CTA */}
        <a
          href={BOOKING_URL_EN}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full text-white text-[0.9rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
          style={{
            fontFamily: fontStack,
            background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
            boxShadow: '0 14px 38px rgba(23,90,232,0.28), inset 0 1px 0 rgba(255,255,255,0.20)',
          }}
        >
          Book a call
          <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
        </a>

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
        <div className="relative text-center mb-12 lg:mb-16 anim-trigger">
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
