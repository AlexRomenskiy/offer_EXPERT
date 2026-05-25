import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import { BOOKING_URL_EN } from '../../config/booking';

// EN channel set — drop Telegram (UA/RU), keep Instagram/WhatsApp/Email/SMS/Messenger/TikTok, add LinkedIn (B2B)
const channels = [
  { name: 'Instagram', icon: 'simple-icons:instagram' },
  { name: 'WhatsApp', icon: 'simple-icons:whatsapp' },
  { name: 'Email', icon: 'solar:letter-linear' },
  { name: 'SMS', icon: 'solar:chat-round-line-linear' },
  { name: 'LinkedIn', icon: 'simple-icons:linkedin' },
  { name: 'Messenger', icon: 'simple-icons:messenger' },
  { name: 'TikTok', icon: 'simple-icons:tiktok' },
];

const fontStack = "'Manrope', sans-serif";

const heroTypewriterPhrases = ['creators', 'experts', 'coaches'];

export default function HeroSectionEN() {
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
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 40px)',
          boxShadow: [
            '0 30px 50px rgba(15,23,42,0.35)',
            '0 70px 120px rgba(15,23,42,0.22)',
          ].join(', '),
        }}
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero-bg_17.png" />
          <img
            src="/hero-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </picture>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(2,15,45,0.45) 0%, rgba(2,15,45,0.25) 35%, transparent 60%)',
          }}
        />

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 60%, rgba(2,15,45,0.30) 100%)',
          }}
        />

        <Header />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-[128px] pb-8 lg:pt-[140px] lg:pb-10 min-h-[inherit] flex flex-col justify-start lg:justify-center">
          <div className="anim-trigger is-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <h1
                  className="max-w-[40rem] font-light mb-5 text-white"
                  style={{ fontFamily: fontStack, lineHeight: 1.18 }}
                >
                  <span className="anim-wrap" style={{ display: 'block' }}>
                    <span
                      className="anim-line font-medium text-[2rem] sm:text-[3.3rem] lg:text-[4rem] tracking-[0.01em]"
                      style={{ transitionDelay: '0.1s' }}
                    >
                      Sales system
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
                      for{' '}
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

                <p
                  className="max-w-[28rem] text-[0.8rem] sm:text-[0.95rem] leading-[1.5] font-normal mb-6 text-slate-200/75 anim-fade-up pl-5"
                  style={{
                    transitionDelay: '0.28s',
                    fontFamily: fontStack,
                    borderLeft: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  I turn your expertise into an operating system: it captures leads,
                  warms them up, takes payment, and delivers the product.
                  <span className="block mt-3 text-slate-300/55">
                    While the system sells — you focus on the craft. No DM chaos, no burnout, no guesswork.
                  </span>
                </p>

                <div
                  className="mb-7 anim-fade-up"
                  style={{ transitionDelay: '0.34s' }}
                >
                  <p
                    className="text-[0.78rem] text-slate-300/65 mb-2 tracking-[0.02em]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Captures leads wherever your audience already is:
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
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

                <div className="flex justify-center lg:justify-start">
                  <a
                    href={BOOKING_URL_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-wide rounded-full px-10 relative items-center justify-center anim-fade-up"
                    style={{
                      transitionDelay: '0.42s',
                      fontFamily: fontStack,
                      height: '60px',
                    }}
                  >
                    <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px] pointer-events-none">
                      <div
                        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#fb923c_320deg,#f97316_360deg)]"
                        style={{ animation: 'beam-spin 3s linear infinite' }}
                      />
                      <div className="absolute inset-[1px] rounded-full bg-zinc-950" />
                    </div>

                    <div className="-z-10 overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-zinc-950 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/40 via-orange-700/15 to-transparent" />
                      <div
                        className="opacity-30 mix-blend-overlay absolute inset-0"
                        style={{
                          backgroundImage:
                            'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                          backgroundSize: '12px 12px',
                          animation: 'dots-move 8s linear infinite',
                        }}
                      />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-500/30 blur-2xl rounded-full transition-colors duration-500 group-hover:bg-orange-400/55" />
                    </div>

                    <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                      Book a free strategy call
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

              {/* PREVIEW: bottom mobile image hidden temporarily for design review.
                  Mirror of the UA Hero change. Restore by reinstating the
                  <div className="lg:col-span-5 lg:hidden">...</div> block. */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
