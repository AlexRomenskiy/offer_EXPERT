import { TANIA_NAME, TANIA_TAGLINE, OLEXANDR_NAME, OLEXANDR_TAGLINE } from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";

const taniaPoints = [
  'Befriend the camera — film from the first take, no tension',
  'Become the face & voice of your brand, on screen',
  'Confident delivery — body, voice and pacing that hold attention',
];

const olexandrPoints = [
  'Product packaging — landing, offer, structure that sells',
  'Funnel & automation — lead magnet, bot, payments',
  'Traffic & analytics — ads that scale what works',
];

function DuoCard({ tag, name, tagline, icon, points, accent }) {
  return (
    <div
      className="relative p-7 lg:p-8 rounded-[28px] bg-white/55 backdrop-blur-xl border border-white/60 anim-fade-up h-full"
      style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[28px]"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
              boxShadow: '0 12px 30px rgba(23,90,232,0.28), inset 0 1px 0 rgba(255,255,255,0.20)',
            }}
          >
            <iconify-icon icon={icon} width="22" height="22" style={{ color: '#fff' }} />
          </div>
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.22em] mb-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: accent }}
            >
              {tag}
            </p>
            <p className="text-[1.05rem] text-slate-900 font-semibold leading-tight" style={{ fontFamily: fontStack }}>
              {name}
            </p>
            <p className="text-[12px] text-slate-500" style={{ fontFamily: fontStack }}>
              {tagline}
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <iconify-icon
                icon="solar:check-circle-line-duotone"
                width="18"
                height="18"
                style={{ color: '#175ae8', marginTop: '1px', flexShrink: 0 }}
              />
              <span className="text-[0.92rem] text-slate-700 leading-[1.5]" style={{ fontFamily: fontStack }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function UBrandDuoSection() {
  return (
    <section className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="relative text-center mb-12 lg:mb-16 anim-trigger">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-5 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="h-px w-6 bg-slate-300" />
            What is U-Brand
            <span className="h-px w-6 bg-slate-300" />
          </div>
          <h2
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] tracking-[-0.02em] text-slate-950 font-light anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.18, transitionDelay: '0.08s' }}
          >
            Two halves of{' '}
            <span className="italic-accent">one system</span>
          </h2>
          <p
            className="max-w-[34rem] mx-auto mt-5 text-[0.98rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline-mobile-only"
            style={{ fontFamily: fontStack, transitionDelay: '0.14s' }}
          >
            Most experts master one half and stall — visible but unsold, or built
            but unseen. U-Brand is both, under one roof.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 anim-trigger items-stretch">
          <DuoCard
            tag="Front of camera"
            name={TANIA_NAME}
            tagline={TANIA_TAGLINE}
            icon="solar:videocamera-record-linear"
            points={taniaPoints}
            accent="#175ae8"
          />
          <DuoCard
            tag="The system behind it"
            name={OLEXANDR_NAME}
            tagline={OLEXANDR_TAGLINE}
            icon="solar:layers-minimalistic-linear"
            points={olexandrPoints}
            accent="#175ae8"
          />
        </div>

        {/* Bridge line */}
        <p
          className="text-center max-w-[40rem] mx-auto mt-10 text-[1.05rem] sm:text-[1.15rem] leading-[1.55] text-slate-800 font-light anim-trigger anim-fade-up"
          style={{ fontFamily: fontStack }}
        >
          You become the expert people{' '}
          <span className="text-brand-gradient font-medium">see</span> — and the
          business they{' '}
          <span className="text-brand-gradient font-medium">buy from</span>.
        </p>
      </div>
    </section>
  );
}
