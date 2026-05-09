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
      className="relative px-3 sm:px-4 pt-3 sm:pt-4 pb-6 sm:pb-8"
    >
      {/* Hero card — Header lives INSIDE this card */}
      <div
        className="relative max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 32px)',
          boxShadow: '0 30px 80px rgba(2,15,45,0.18)',
        }}
      >
        {/* Background image — pre-rendered atmospheric composition (orange smoke + dark navy + blue accents) */}
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-[110px] pb-12 lg:pt-[120px] lg:pb-16 min-h-[inherit] flex flex-col justify-center">
          <div className="anim-trigger is-visible">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left column */}
              <div className="lg:col-span-7">
                {/* Headline */}
                <h1
                  className="text-[2.5rem] sm:text-[3.2rem] lg:text-[4.2rem] leading-[1.04] tracking-[-0.035em] font-light mb-6 text-white"
                  style={{ fontFamily: fontStack, textWrap: 'balance' }}
                >
                  <span className="anim-wrap">
                    <span className="anim-line" style={{ transitionDelay: '0.1s' }}>
                      Система продажу
                    </span>
                  </span>{' '}
                  <span className="anim-wrap">
                    <span className="anim-line" style={{ transitionDelay: '0.18s' }}>
                      для експертів-підприємців
                    </span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p
                  className="max-w-[36rem] text-[1rem] sm:text-[1.1rem] leading-[1.65] font-normal mb-7 text-slate-200/85 anim-fade-up"
                  style={{ transitionDelay: '0.28s', fontFamily: fontStack }}
                >
                  Перетворюю твою експертизу на систему, що працює без тебе:
                  ловить ліди, веде до оплати, видає продукт. Поки система продає —
                  ти займаєшся клієнтами.
                </p>

                {/* Channels */}
                <div
                  className="mb-9 anim-fade-up"
                  style={{ transitionDelay: '0.34s' }}
                >
                  <p className="text-[0.9rem] text-slate-300/80 mb-3" style={{ fontFamily: fontStack }}>
                    Один бот працює з усіма твоїми каналами:
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

                {/* Single CTA */}
                <a
                  href="#request-access"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-gradient-to-r from-white to-slate-100 px-7 text-[14px] font-medium text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_14px_38px_rgba(255,255,255,0.25)] anim-fade-up"
                  style={{ transitionDelay: '0.42s', fontFamily: fontStack }}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full opacity-90 bg-[radial-gradient(circle_at_25%_20%,rgba(0,0,0,0.10),transparent_28%)]" />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Записатися на безкоштовний розбір
                    <iconify-icon
                      icon="solar:arrow-right-linear"
                      width="16"
                      height="16"
                      class="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>

              {/* Right column — image placeholder (will be replaced by Higgsfield video animation) */}
              <div className="lg:col-span-5 relative">
                <div
                  className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[24px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden anim-fade-up"
                  style={{ transitionDelay: '0.50s' }}
                >
                  {/* The hero image (system command center) */}
                  <img
                    src="/Img_for_hero.png"
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
