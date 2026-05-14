import Header from '../components/Header';

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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative p-2 sm:p-5"
    >
      {/* Hero card — full-width with thin symmetric light-bg frame around it (~8px mobile, ~20px sm+). Header lives INSIDE this card. */}
      <div
        className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 40px)',
          boxShadow: '0 30px 80px rgba(2,15,45,0.18)',
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-[128px] pb-8 lg:pt-[140px] lg:pb-10 min-h-[inherit] flex flex-col justify-start lg:justify-center">
          <div className="anim-trigger is-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left column */}
              <div className="lg:col-span-7">
                {/* Headline */}
                <h1
                  className="max-w-[40rem] text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.04] tracking-[-0.04em] font-light mb-5 text-white"
                  style={{ fontFamily: fontStack, textWrap: 'balance' }}
                >
                  <span className="anim-wrap">
                    <span className="anim-line font-medium" style={{ transitionDelay: '0.1s' }}>
                      Система продажу
                    </span>
                  </span>{' '}
                  <span className="anim-wrap">
                    <span className="anim-line" style={{ transitionDelay: '0.18s' }}>
                      <span className="sm:hidden">для експертів</span>
                      <span className="hidden sm:inline">для експертів‑підприємців</span>
                    </span>
                  </span>
                </h1>

                {/* Subtitle with thin vertical accent line on the LEFT */}
                <p
                  className="max-w-[28rem] text-[0.8rem] sm:text-[0.95rem] leading-[1.5] font-normal mb-4 sm:mb-5 text-slate-200/75 anim-fade-up pl-5"
                  style={{
                    transitionDelay: '0.28s',
                    fontFamily: fontStack,
                    borderLeft: '1px solid rgba(255,255,255,0.20)',
                  }}
                >
                  Перетворюю твою експертизу на систему, що працює без тебе:
                  ловить ліди, веде до оплати, видає продукт.
                  <br />
                  Поки система продає — ти займаєшся клієнтами.
                </p>

                {/* Channels */}
                <div
                  className="mb-7 anim-fade-up"
                  style={{ transitionDelay: '0.34s' }}
                >
                  <p className="text-[0.9rem] text-slate-300/80 mb-3" style={{ fontFamily: fontStack }}>
                    Підхоплює ліди звідусіль, де ти є:
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

                {/* Single CTA — orange spinning beam */}
                <a
                  href="#request-access"
                  className="group inline-flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-wide rounded-full px-10 relative items-center justify-center anim-fade-up"
                  style={{
                    transitionDelay: '0.42s',
                    fontFamily: fontStack,
                    height: '60px',
                  }}
                >
                  {/* Spinning orange beam border */}
                  <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                    <div
                      className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#fb923c_320deg,#f97316_360deg)]"
                      style={{ animation: 'beam-spin 3s linear infinite' }}
                    />
                    <div className="absolute inset-[1px] rounded-full bg-zinc-950" />
                  </div>

                  {/* Inner orange-tinted bg */}
                  <div className="-z-10 overflow-hidden rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] bg-zinc-950">
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
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-500/30 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-400/55" />
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

              {/* Right column — embedded dashboard card. Visible on mobile/tablet (Path B: separate card under text); hidden on lg+ (desktop has dashboard baked into hero-bg_17.png). Eventually replaceable with looping video showing dashboard state cycles. */}
              <div className="lg:col-span-5 relative lg:hidden">
                <div
                  className="relative aspect-square lg:aspect-[4/3] rounded-[24px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden anim-fade-up"
                  style={{ transitionDelay: '0.50s' }}
                >
                  {/* The hero image (system command center) */}
                  <img
                    src="/Img_for_hero_mobile_v2.png"
                    alt="Командний центр системи продажу"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Subtle glass highlight on top edge */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

                  {/* Soft inner gradient for premium framing */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)] pointer-events-none z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
