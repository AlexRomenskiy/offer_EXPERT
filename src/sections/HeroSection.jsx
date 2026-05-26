import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import { BOOKING_URL_UA } from '../config/booking';

const channels = [
  { name: 'Telegram', icon: 'simple-icons:telegram' },
  { name: 'Instagram', icon: 'simple-icons:instagram' },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp' },
  { name: 'TikTok', icon: 'simple-icons:tiktok' },
  { name: 'Messenger', icon: 'simple-icons:messenger' },
  { name: 'Email', icon: 'solar:letter-linear' },
  { name: 'SMS', icon: 'solar:chat-round-line-linear' },
];

const fontStack = "'Manrope', sans-serif";

const heroTypewriterPhrases = ['експертів', 'підприємців'];

export default function HeroSection() {
  // ============== Typewriter effect for headline line 2 ==============
  const [typedWord, setTypedWord] = useState('');
  const phraseIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeoutId;
    const tick = () => {
      const current = heroTypewriterPhrases[phraseIdxRef.current];

      if (isDeletingRef.current) {
        setTypedWord(current.substring(0, charIdxRef.current - 1));
        charIdxRef.current -= 1;
      } else {
        setTypedWord(current.substring(0, charIdxRef.current + 1));
        charIdxRef.current += 1;
      }

      let speed = isDeletingRef.current ? 55 : 95;

      if (!isDeletingRef.current && charIdxRef.current === current.length) {
        speed = 2000;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && charIdxRef.current === 0) {
        isDeletingRef.current = false;
        phraseIdxRef.current = (phraseIdxRef.current + 1) % heroTypewriterPhrases.length;
        speed = 400;
      }

      timeoutId = setTimeout(tick, speed);
    };
    timeoutId = setTimeout(tick, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="hero"
      className="relative p-2 sm:p-5"
    >
      {/* Hero card — full-width with thin symmetric light-bg frame around it (~8px mobile, ~20px sm+). Header lives INSIDE this card.
          Mobile: NO min-height — card sizes naturally to its content + padding,
          so there's never an empty dark band below the channels strip.
          From sm+ it pins to (almost) full viewport for desktop drama. */}
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden sm:min-h-[calc(100vh-40px)]"
        style={{
          boxShadow: [
            '0 30px 50px rgba(15,23,42,0.35)',
            '0 70px 120px rgba(15,23,42,0.22)',
          ].join(', '),
        }}
      >
        {/* Background image — desktop has dashboard baked into the right side; mobile uses original atmospheric-only bg */}
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero-bg_17.png" />
          <img
            src="/hero-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </picture>

        {/* Subtle dark overlay on left for text readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(2,15,45,0.45) 0%, rgba(2,15,45,0.25) 35%, transparent 60%)',
          }}
        />

        {/* Subtle bottom darken for content depth */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 60%, rgba(2,15,45,0.30) 100%)',
          }}
        />

        {/* Header — INSIDE the card */}
        <Header />

        {/* Card content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-[112px] pb-10 lg:pt-[140px] lg:pb-10 min-h-[inherit] flex flex-col lg:justify-center">
          <div className="anim-trigger is-visible flex-1 flex flex-col lg:block lg:flex-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1 lg:flex-none">
              {/* Left column — flex on all breakpoints so the mobile reorder
                  (via `order-*`) also works. Desktop visual order is preserved
                  by `lg:order-*` overrides on the reordered items. */}
              <div className="lg:col-span-7 flex flex-col h-full lg:h-auto">
                {/* Headline */}
                <h1
                  className="order-1 max-w-[40rem] font-light mb-5 text-white"
                  style={{ fontFamily: fontStack, lineHeight: 1.18 }}
                >
                  <span className="anim-wrap" style={{ display: 'block' }}>
                    <span
                      className="anim-line font-medium text-[2rem] sm:text-[3.3rem] lg:text-[4rem] tracking-[0.01em]"
                      style={{ transitionDelay: '0.1s' }}
                    >
                      Система продажу
                    </span>
                  </span>
                  <span
                    className="anim-italic font-medium text-[2rem] sm:text-[3.3rem] lg:text-[4rem] tracking-[0.01em] whitespace-nowrap"
                    style={{
                      display: 'block',
                      transitionDelay: '0.18s',
                      lineHeight: 1.18,
                    }}
                  >
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 70%, #175ae8 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        для{' '}
                      </span>
                      <span
                        className="inline-block align-baseline"
                        style={{ minHeight: '1em', lineHeight: 1.18 }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: 'italic',
                            fontWeight: 500,
                            background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 70%, #175ae8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {typedWord || '​'}
                        </span>
                        <span
                          aria-hidden="true"
                          className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.85em] ml-1 align-baseline animate-pulse"
                          style={{
                            backgroundColor: '#60a5fa',
                            transform: 'translateY(2px)',
                          }}
                        />
                      </span>
                    </span>
                </h1>

                {/* Subtitle with thin vertical accent line on the LEFT —
                    single statement now (the "поки система продає…" soft line
                    was cut to reduce noise). Slightly larger type to give the
                    remaining sentence the weight it deserves. */}
                <p
                  className="order-2 max-w-[28rem] text-[0.95rem] sm:text-[1rem] leading-[1.55] font-normal mb-6 text-slate-200/80 anim-fade-up pl-5"
                  style={{
                    transitionDelay: '0.28s',
                    fontFamily: fontStack,
                    borderLeft: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  Упаковую твою експертизу та продукт у систему,
                  яка залучає клієнтів і генерує продажі.
                </p>

                {/* Channels — on mobile rendered LAST (order-5), right after the CTA
                    with a tight `mt-5` gap (no flex spacer — card height is now
                    content-driven). On desktop reverts to its original position
                    above the CTA (lg:order-3) with the normal lg:mb-7. */}
                <div
                  className="order-5 lg:order-3 mt-5 lg:mt-0 lg:mb-7 anim-fade-up"
                  style={{ transitionDelay: '0.34s' }}
                >
                  <p
                    className="text-[0.78rem] text-slate-300/65 mb-2 tracking-[0.02em]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Підхоплює клієнтів звідусіль, де ти є:
                  </p>
                  <div className="flex items-center gap-4">
                    {channels.map((ch) => (
                      <iconify-icon
                        key={ch.name}
                        icon={ch.icon}
                        width="22"
                        height="22"
                        title={ch.name}
                        style={{ color: 'rgba(255,255,255,0.70)' }}
                        class="hover:!text-white transition-colors"
                      />
                    ))}
                  </div>
                </div>

                {/* Single CTA — orange spinning beam.
                    Mobile order-3 (right after subtitle = decision point).
                    Desktop lg:order-4 (after channels = original layout). */}
                <div className="order-3 lg:order-4 flex justify-center lg:justify-start">
                <a
                  href={BOOKING_URL_UA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-wide rounded-full px-10 relative items-center justify-center anim-fade-up"
                  style={{
                    transitionDelay: '0.42s',
                    fontFamily: fontStack,
                    height: '60px',
                  }}
                >
                  {/* Spinning orange beam border — DECORATIVE; pointer-events:none so
                      every tap (including a fast 2nd one on Android) lands on the <a>. */}
                  <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px] pointer-events-none">
                    <div
                      className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#fb923c_320deg,#f97316_360deg)]"
                      style={{ animation: 'beam-spin 3s linear infinite' }}
                    />
                    <div className="absolute inset-[1px] rounded-full bg-zinc-950" />
                  </div>

                  {/* Inner orange-tinted bg — DECORATIVE; pointer-events:none. */}
                  <div className="-z-10 overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-zinc-950 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/40 via-orange-700/15 to-transparent" />
                    {/* Animated dots */}
                    <div
                      className="opacity-30 mix-blend-overlay absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                        animation: 'dots-move 8s linear infinite',
                      }}
                    />
                    {/* Orange glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-500/30 blur-2xl rounded-full transition-colors duration-500 group-hover:bg-orange-400/55" />
                  </div>

                  {/* Content */}
                  <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                    Записатися на безкоштовний розбір
                  </span>
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    width="16"
                    height="16"
                    class="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: '#fff' }}
                  />
                </a>
                </div>
              </div>

              {/* Mobile bottom image hidden — Hero is text-only on mobile.
                  To restore: re-insert the <div className="lg:col-span-5 lg:hidden">...</div>
                  block wired to /Img_for_hero_mobile_v2.png. */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
