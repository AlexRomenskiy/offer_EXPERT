const TELEGRAM_PLACEHOLDER = 'https://t.me/your_username';
const BOOKING_URL = '#';

const reassurances = [
  { icon: 'solar:clock-circle-linear', text: '30 хвилин' },
  { icon: 'solar:gift-linear', text: 'безкоштовно' },
  { icon: 'solar:shield-check-linear', text: 'без зобов’язань' },
];

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative py-28 lg:py-36 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EAF2F8] scroll-mt-24"
    >
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.18)_0%,rgba(234,242,248,0.34)_24%,rgba(234,242,248,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(254,215,170,0.18),transparent_28%),radial-gradient(circle_at_76%_34%,rgba(249,115,22,0.08),transparent_28%)]" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="cta-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="absolute -top-32 -right-32 w-[40%] h-[40%] rounded-full bg-orange-300/[0.18] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[40%] h-[40%] rounded-full bg-orange-400/[0.14] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center anim-trigger">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-7 anim-fade-up" style={{ transitionDelay: '0s' }}>
          <iconify-icon icon="solar:bolt-linear" width="14" height="14" className="text-orange-500" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
            Розбір · 30 хв
          </span>
        </div>

        <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.6rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-6">
          <span className="block sm:inline anim-wrap">
            <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Поговоримо про</span>
          </span>{' '}
          <span className="block anim-wrap">
            <span className="anim-line text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600" style={{ transitionDelay: '0.22s' }}>твою воронку?</span>
          </span>
        </h2>

        <p className="text-[1.05rem] sm:text-[1.12rem] leading-[1.75] text-slate-600 font-normal mb-10 max-w-xl mx-auto anim-fade-up" style={{ transitionDelay: '0.35s' }}>
          Подивимось на твій продукт, аудиторію і де зараз «втікають» гроші. Без презентацій — конкретно по твоїй ситуації.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 anim-fade-up" style={{ transitionDelay: '0.45s' }}>
          {/* Primary white pill (master template) */}
          <a
            href={BOOKING_URL}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border bg-gradient-to-r px-7 text-[15px] font-medium transition-all duration-300 border-slate-900 from-slate-900 to-slate-800 text-white shadow-[0_14px_38px_rgba(15,23,42,0.30)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.40)] hover:-translate-y-0.5"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_55%)]" />
            <span className="relative z-10 inline-flex items-center gap-3">
              <span>Записатися на безкоштовний розбір</span>
              <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md group-hover:bg-orange-400 transition-colors">
                <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </span>
          </a>

          {/* Secondary glass pill */}
          <a
            href={TELEGRAM_PLACEHOLDER}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/60 backdrop-blur-xl px-5 text-sm font-medium text-slate-700 hover:bg-white/85 hover:text-orange-600 transition-colors shadow-sm"
          >
            <iconify-icon icon="solar:chat-round-dots-linear" width="18" height="18" />
            Або напиши в Telegram
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 anim-fade-up" style={{ transitionDelay: '0.55s' }}>
          {reassurances.map((r) => (
            <div key={r.text} className="flex items-center gap-1.5">
              <iconify-icon icon={r.icon} width="14" height="14" className="text-orange-500/85" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
