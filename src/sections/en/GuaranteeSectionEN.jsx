const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

/* ============================================================
   EN-adapted guarantees:
   - #3 «100% твоєї виручки» kept as-is — anti-rev-share is
     universal preference (NA + EU + UA research all confirm).
   - Wording leans on operator vocab («lock-in», «takebacks»,
     «mid-project surprises») that NA buyers recognize.
   ============================================================ */
const guarantees = [
  {
    icon: 'solar:calendar-mark-line-duotone',
    title: 'Fixed timeline',
    description:
      'Start and finish dates locked in writing on day one. No «we’ll see how it goes.»',
  },
  {
    icon: 'solar:key-square-linear',
    title: 'You own everything',
    description:
      'Files, accounts, scripts, integrations — all transfer to you. Work with anyone, anytime. No lock-in, no «we hold the keys.»',
  },
  {
    icon: 'solar:hand-money-line-duotone',
    title: '100% of your revenue',
    description:
      'No rev-share, no partnership %, no hidden takebacks. Whatever the system earns — it earns for you.',
  },
  {
    icon: 'solar:shield-check-linear',
    title: '30 days of support',
    description:
      'One month of free fixes, tech support, and answers after launch — included in every package.',
  },
  {
    icon: 'solar:tag-price-linear',
    title: 'Transparent pricing',
    description:
      'Total cost agreed upfront. Predictable budget — no «one more thing» invoices mid-project.',
  },
];

export default function GuaranteeSectionEN() {
  return (
    <section
      id="guarantees"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative max-w-3xl mx-auto mb-12 lg:mb-14 anim-trigger text-center">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: monoStack, transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Client protection · contract-backed
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-italic font-medium" style={{ transitionDelay: '0.10s' }}>
              In the contract —
              <span className="italic-accent" style={{ marginLeft: '0.20em' }}>
                not just words
              </span>
            </span>
          </h2>

          <p
            className="max-w-[42ch] mx-auto text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline-mobile-only"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            What you get — beyond the sales system itself.
            <span className="block mt-1">Five clauses, written into the contract.</span>
          </p>
        </div>

        {/* Side-by-side hero (image + list) */}
        <div className="anim-trigger anim-fade-up" style={{ transitionDelay: '0.05s' }}>
          <div
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-5 rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/60 items-stretch overflow-hidden"
            style={{
              boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_60%)] pointer-events-none rounded-[32px]"
            />

            {/* LEFT: visual */}
            <div className="relative overflow-hidden rounded-[24px] md:rounded-[26px] min-h-[360px] md:min-h-[520px] z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#020f2d] via-[#0a1a3d] to-[#0e3a8a]" />

              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-400/[0.30] blur-[120px] pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/[0.25] blur-[100px] pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {/* Centered shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-12 rounded-full bg-blue-400/20 blur-3xl" />
                  <div className="relative w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/25 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.30)]">
                    <iconify-icon
                      icon="solar:shield-keyhole-line-duotone"
                      width="68"
                      height="68"
                      style={{ color: 'rgba(255,255,255,0.92)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom-left tag */}
              <div className="absolute left-5 lg:left-6 bottom-5 lg:bottom-6 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl backdrop-blur bg-white/15 text-white border border-white/25 shrink-0">
                  <iconify-icon icon="solar:document-text-line-duotone" width="18" height="18" />
                </span>
                <p
                  className="text-[11px] uppercase tracking-[0.18em] text-slate-200"
                  style={{ fontFamily: monoStack }}
                >
                  Written into the contract
                </p>
              </div>
            </div>

            {/* RIGHT: guarantee list */}
            <div className="relative z-10 flex flex-col p-6 md:p-7 lg:p-8 gap-5 lg:gap-6 justify-center">
              {guarantees.map((g, i) => (
                <GuaranteeItem
                  key={g.title}
                  guarantee={g}
                  delay={`${0.15 + i * 0.07}s`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeItem({ guarantee, delay }) {
  return (
    <div
      className="flex items-start gap-4 anim-fade-up"
      style={{ transitionDelay: delay }}
    >
      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#175ae8]/10 border border-[#175ae8]/25 flex items-center justify-center mt-0.5">
        <iconify-icon
          icon={guarantee.icon}
          width="18"
          height="18"
          style={{ color: '#175ae8' }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className="text-[1.05rem] lg:text-[1.15rem] text-slate-950 font-medium tracking-[-0.02em] mb-1"
          style={{ fontFamily: fontStack }}
        >
          {guarantee.title}
        </h3>
        <p
          className="text-[0.92rem] lg:text-[0.95rem] leading-[1.55] text-slate-600"
          style={{ fontFamily: fontStack }}
        >
          {guarantee.description}
        </p>
      </div>
    </div>
  );
}
