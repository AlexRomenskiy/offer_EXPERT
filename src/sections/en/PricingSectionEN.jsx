import { useEffect, useRef, useState } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';

const fontStack = "'Manrope', sans-serif";

const phrases = ['way of working', 'path to scale', 'system level'];

export const pricingEN = [
  {
    key: 'foundation',
    title: 'Foundation',
    badge: 'START',
    price: '$1,247',
    timeline: '5–7 days',
    timelineShort: '5–7 days',
    supportDays: 30,
    tagline: 'The first step to a system and a clear offer.',
    forWhom:
      'If you have expertise but no clear positioning and no proper online presence.',
    metrics: { days: '5–7', ads: '—' },
    features: [
      { label: 'Strategy & positioning', tip: 'Who you are, who you sell to, why you. We define your position in the market.' },
      { label: 'Landing page', tip: 'A single landing page for your service or product. Mobile-ready.' },
      { label: 'Lead magnet', tip: 'Free material in exchange for a contact. PDF, checklist, quiz or short video.' },
      { label: 'Chatbot in a messenger', tip: 'Delivers the magnet on Instagram, WhatsApp, Messenger — wherever the client prefers. The person stays in your subscriber base.' },
    ],
    outcome:
      'A clear offer and professional online presence — ready ground for the system.',
    note: 'Entry point into the system',
    cta: 'Book a call',
    testimonials: [
      {
        quote:
          'Olexandr, thank you. For 2 years I wrote posts «for everyone who wants to lose weight» and couldn’t understand why there were no clients — the problem is popular enough. Now I have clear positioning and an understanding of my audience, and clients say «oh, it’s like you’re writing about me». A great feeling to be useful, to get feedback that inspires, and, of course, to earn from it.',
        attribution: 'Olena · Nutritionist',
      },
      {
        quote:
          'Sasha, you managed to write about my service better than I do. Seriously — I used to spend 40 minutes on every client explaining what I do. Now I just send the landing page, everything is clear, and we just discuss the details.',
        attribution: 'Andriy · Business coach for entrepreneurs',
      },
      {
        quote:
          'Honestly, I didn’t really believe in these magnets and bots. But now there’s a base of people on Instagram who are clearly interested in the topic. By the end of the week, when I’m planning, I’m not sitting and trying to remember what I promised whom. Great, recommend it.',
        attribution: 'Yuriy · B2B sales expert',
      },
      {
        quote:
          'Came in with the feeling «well, everyone needs a therapist». Came out understanding who exactly needs me — and who doesn’t. Strange, but this is more about me than about marketing. Closed my own gestalt))))',
        attribution: 'Julia · Psychotherapist',
      },
    ],
  },
  {
    key: 'generator',
    title: 'Generator',
    badge: 'OPTIMAL',
    price: '$2,490',
    timeline: '14 days',
    timelineShort: '14 days',
    supportDays: 30,
    tagline: 'The whole system — from the first step to repeat sales.',
    forWhom:
      'If you want an automated sales system that replaces the work of a big team — warms up leads and walks them to a purchase without your involvement.',
    metrics: { days: '14', ads: '—' },
    features: [
      { label: 'Everything in Foundation', tip: null },
      { label: 'Full product packaging (course or intensive structure)', tip: 'Not one business-card page but a full structure: sales, material delivery, separate touchpoints to collect contacts.' },
      { label: 'Lead magnet + tripwire', tip: 'The lead magnet catches the contact for free. The tripwire — a low-cost paid product that lifts the average order and gives the first paid experience with you.' },
      { label: 'Warm-up bot with custom logic', tip: 'A warm-up sequence for the main product or the tripwire. Reminders about events and deadlines. The logic is designed around your funnel.' },
      { label: 'Payments, auto-delivery, funnel analytics', tip: 'Payment processing, instant access to the product after purchase, clear numbers across the whole funnel.' },
    ],
    outcome:
      'An automated sales system ready to scale. Converts the interested into clients, lifts the average order and works without you.',
    note: 'For those building a systemic business',
    cta: 'Book a call',
    highlight: true,
    testimonials: [
      {
        quote:
          'I love when money makes sense. Same with subscribers: I’m happy the system takes care of everyone, and routes me directly to the ones who want to work. For me, as a girl with a business project, the best wardrobe upgrade is product packaging.',
        attribution: 'Tania · On-camera coach for experts',
      },
      {
        quote:
          'Olexandr, sorry I didn’t thank you right away. The first time I saw a payment at 7 AM I just sat with my coffee and stared at the phone. Had to digest that it works without me.',
        attribution: 'Maryna · Therapist, online-course author',
      },
      {
        quote:
          'You talked me into that tripwire even though I was against it and didn’t fully understand what it was. «Well, who’s going to pay $19, let’s just go straight to the main thing»… Turned out — plenty of people. And those same people then take the main program, no extra questions. Thanks for being persistent.',
        attribution: 'Igor · Sales mentor',
      },
      {
        quote:
          'The strangest part — I didn’t talk to anyone except you. I thought it would be «find yourself a designer, a copywriter, we just coordinate». And it turned out I just answered your questions — and gradually a whole product was born. THANK YOU, WILL RECOMMEND TO FRIENDS AND BEYOND',
        attribution: 'Kateryna · Nutritionist, intensive author',
      },
    ],
  },
  {
    key: 'premium',
    title: 'Premium',
    badge: 'WITH TRAFFIC',
    price: '$4,247',
    timeline: '14–21 days',
    timelineShort: '14–21 days',
    supportDays: 30,
    tagline: 'A custom system + ads that bring in clients.',
    forWhom: 'If you want not just product packaging but scaling on top of it.',
    metrics: { days: '14–21', ads: '✓' },
    features: [
      { label: 'Everything in Generator', tip: null },
      { label: 'Paid ads — full campaign (creatives, copy, launch)', tip: 'Creating images, video and copy. Running campaigns on the channels suited to your audience — Meta, Google, YouTube, TikTok.' },
      { label: 'Precise targeting on your audience', tip: 'We test narrow audience segments: what reacts — we scale; what doesn’t — we turn off. The ads run to your buyers, not to «everyone who might be interested».' },
      { label: 'End-to-end analytics — from the first click to repeat sales', tip: 'The whole client journey: first click → funnel → payment → repeat purchase. You understand how much a client costs and how much they bring you.' },
    ],
    outcome:
      'A scalable sales system. Increase the ad budget — sales grow proportionally.',
    note: 'Ready solution with ads — no team to assemble',
    cta: 'Book a call',
    testimonials: [
      {
        quote:
          'Alex, thanks for the game. For two years I tried different ads — sometimes a media buyer, sometimes an agency — the budget kept burning and I didn’t understand why. Turned out the problem wasn’t the ads but where they led. Now I have a built funnel plus traffic on it — I finally see the payback.',
        attribution: 'Steve · Finance advisor',
      },
      {
        quote:
          'I already had my own program but I had no idea how to promote it. Now — landing page, bot, payments, analytics, and on top of that ads that drive all of it. I just check the report once a week. For the first time in a long while I have weekends. Pleased.',
        attribution: 'Albina · Fitness coach, course author',
      },
      {
        quote:
          'Before, everything ran on word-of-mouth and my LinkedIn activity. Chaos: 8 inquiries one week, zero the next month. Now I have a funnel plus ads running it every day — I can finally plan a year, not just a month.',
        attribution: 'Nazar · Mentor for IT experts',
      },
      {
        quote:
          'Sasha, awesome! Everything works. Thank you! Leaving a review: what struck me most is that we first built the funnel, and the ads came after. For years I poured money into Facebook and couldn’t understand why it worked for others and not for me. Now I have both parts, and there’s finally a system that works. And I do what I love.',
        attribution: 'Sofia · Aesthetic-medicine doctor',
      },
    ],
  },
];

export default function PricingSectionEN() {
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

  const [activeDotIdx, setActiveDotIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveDotIdx((prev) => (prev + 1) % 3), 300);
    return () => clearInterval(id);
  }, []);

  const [activeKey, setActiveKey] = useState('generator');
  const active = pricingEN.find((p) => p.key === activeKey);


  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden"
    >
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

      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* ============== HEADER ============== */}
        <div className="relative text-center mb-12 lg:mb-16 anim-trigger">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

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

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Packages · from $1,247
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.10s', lineHeight: 1.18 }}
          >
            <span className="block">Pick your</span>
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

          <div className="anim-trigger lg:pt-2">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-9 anim-fade-up"
              style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0s' }}
            >
              What clients say
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
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {pricingEN.map((p) => {
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

                <div className="mb-4 min-h-[3em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    The package
                  </p>
                  <p
                    className="text-[0.95rem] text-slate-800 leading-[1.5] font-medium"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.tagline}
                  </p>
                </div>

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
                    {active.timeline} delivery · {active.supportDays} days support
                  </div>
                </div>

                <div className="mb-4 min-h-[4em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Who it’s for
                  </p>
                  <p
                    className="text-[0.86rem] text-slate-700 leading-[1.5]"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.forWhom}
                  </p>
                </div>

                <div className="mb-4 min-h-[9em]">
                  <p
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    What’s inside
                  </p>
                  <ul className="space-y-1.5">
                    {active.features.map((f, i) => (
                      <FeatureItem key={i} feature={f} variant="dot" />
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05] min-h-[4em]">
                  <p
                    className="text-brand-gradient text-[10px] uppercase tracking-[0.22em] mb-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Outcome
                  </p>
                  <p
                    className="text-[0.86rem] text-slate-800 leading-[1.5]"
                    style={{ fontFamily: fontStack }}
                  >
                    {active.outcome}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href={BOOKING_URL_EN}
                    target="_blank"
                    rel="noopener noreferrer"
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

        {/* ============== MOBILE (< lg) ============== */}
        <div className="lg:hidden anim-trigger">
          <MobilePricingCard
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            active={active}
          />
        </div>

      </div>
    </section>
  );
}

function MobilePricingCard({ activeKey, setActiveKey, active }) {
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
          <div className="inline-flex p-1 rounded-full bg-white/50 border border-white/70 shadow-sm w-full gap-1 backdrop-blur-md mb-7">
            {pricingEN.map((p) => (
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

          <div className="mb-5">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              The package
            </p>
            <p
              className="text-[0.95rem] text-slate-800 leading-[1.55] font-medium"
              style={{ fontFamily: fontStack }}
            >
              {active.tagline}
            </p>
          </div>

          <div className="mb-6">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Who it’s for
            </p>
            <p
              className="text-[0.88rem] text-slate-700 leading-[1.55]"
              style={{ fontFamily: fontStack }}
            >
              {active.forWhom}
            </p>
          </div>

          <div className="mb-6">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              What’s inside
            </p>
            <ul className="space-y-2.5">
              {active.features.map((f, i) => (
                <FeatureItem key={i} feature={f} variant="check" />
              ))}
            </ul>
          </div>

          <div className="mb-7 p-4 rounded-2xl border border-[#175ae8]/15 bg-[#175ae8]/[0.05]">
            <p
              className="text-brand-gradient text-[10px] uppercase tracking-[0.22em] mb-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Outcome
            </p>
            <p
              className="text-[0.92rem] text-slate-700 leading-[1.55]"
              style={{ fontFamily: fontStack }}
            >
              {active.outcome}
            </p>
          </div>

          <a
            href={BOOKING_URL_EN}
            target="_blank"
            rel="noopener noreferrer"
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
