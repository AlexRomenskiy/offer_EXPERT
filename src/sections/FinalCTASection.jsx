const fontStack = "'Manrope', sans-serif";

const TELEGRAM_URL = 'https://t.me/your_username'; // TODO: replace with real handle
const BOOKING_URL = '#'; // TODO: replace with real booking URL
const EMAIL = 'alex.romenskii@gmail.com';

const quickLinks = [
  { label: 'Для кого', href: '#pain' },
  { label: 'Що входить', href: '#system-includes' },
  { label: 'Кейс', href: '#case' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Instagram UA', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.ua/' },
  { label: 'Instagram EN', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.pro/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
];

const reassurances = [
  { icon: 'solar:clock-circle-linear', text: '30 хвилин' },
  { icon: 'solar:gift-linear', text: 'Безкоштовно' },
  { icon: 'solar:shield-check-linear', text: 'Без зобовʼязань' },
];

export default function FinalCTASection() {
  const year = new Date().getFullYear();

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="request-access"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-hidden"
    >
      {/* Atmospheric blue glow behind card */}
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-200/[0.20] blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-blue-300/[0.14] blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Combined CTA + Footer glass card */}
        <div
          className="relative rounded-[30px] bg-white/35 backdrop-blur-2xl border border-white/55 p-7 sm:p-9 lg:p-12 overflow-hidden anim-trigger"
          style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
        >
          {/* Glass highlights */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)] pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-200/[0.18] blur-[90px] pointer-events-none"
          />

          {/* Main 2-col grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* =============== LEFT: heading + email =============== */}
            <div>
              <h2
                className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1.04] tracking-[-0.04em] text-slate-950 font-light max-w-[14ch]"
                style={{ fontFamily: fontStack }}
              >
                <span className="block anim-wrap">
                  <span className="anim-line" style={{ transitionDelay: '0.10s' }}>
                    Поговоримо про
                  </span>
                </span>
                <span className="block anim-wrap">
                  <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                    твою воронку?
                  </span>
                </span>
                <span className="block font-medium text-slate-950 mt-2 anim-wrap">
                  <span className="anim-line" style={{ transitionDelay: '0.30s' }}>
                    Без презентацій.
                  </span>
                </span>
              </h2>

              <div
                className="mt-8 lg:mt-10 anim-fade-up"
                style={{ transitionDelay: '0.40s' }}
              >
                <p
                  className="text-[0.9rem] text-slate-500 mb-3"
                  style={{ fontFamily: fontStack }}
                >
                  Або напиши напряму
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center text-[1.45rem] sm:text-[1.7rem] lg:text-[2rem] text-slate-950 font-medium tracking-[-0.03em] hover:text-[#175ae8] transition-colors break-all"
                  style={{ fontFamily: fontStack }}
                >
                  {EMAIL}
                </a>
                <p
                  className="mt-4 text-[12px] text-slate-500 tracking-[0.04em]"
                  style={{ fontFamily: fontStack }}
                >
                  Олександр Роменський · Funnel architect · Розбір 30 хв
                </p>
              </div>
            </div>

            {/* =============== RIGHT: CTAs + footer-links =============== */}
            <div>
              <h3
                className="text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem] text-slate-950 font-medium tracking-[-0.03em] anim-fade-up"
                style={{ transitionDelay: '0.40s', fontFamily: fontStack }}
              >
                Записатися на розбір
              </h3>

              {/* CTAs */}
              <div
                className="mt-6 flex flex-col sm:flex-row gap-3 anim-fade-up"
                style={{ transitionDelay: '0.50s' }}
              >
                {/* Primary — brand-gradient */}
                <a
                  href={BOOKING_URL}
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    fontFamily: fontStack,
                    background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                    boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
                  }}
                >
                  Безкоштовний розбір
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                    <iconify-icon icon="solar:arrow-right-up-linear" width="13" height="13" />
                  </span>
                </a>

                {/* Secondary — Telegram glass pill */}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-white/55 backdrop-blur-md px-5 text-[14px] font-medium text-slate-700 hover:bg-white/85 hover:text-[#175ae8] hover:border-[#175ae8]/30 transition-colors"
                  style={{ fontFamily: fontStack }}
                >
                  <iconify-icon icon="simple-icons:telegram" width="16" height="16" />
                  Telegram
                </a>
              </div>

              {/* Reassurance */}
              <div
                className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 anim-fade-up"
                style={{ transitionDelay: '0.55s' }}
              >
                {reassurances.map((r) => (
                  <div key={r.text} className="flex items-center gap-1.5">
                    <iconify-icon
                      icon={r.icon}
                      width="13"
                      height="13"
                      style={{ color: '#175ae8' }}
                    />
                    <span
                      className="text-[12px] text-slate-600"
                      style={{ fontFamily: fontStack }}
                    >
                      {r.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Links + Соцмережі (2-col within right side) */}
              <div
                className="grid grid-cols-2 gap-6 lg:gap-8 mt-10 anim-fade-up"
                style={{ transitionDelay: '0.65s' }}
              >
                <div>
                  <p
                    className="text-[11px] text-slate-500 tracking-[0.15em] mb-3 uppercase"
                    style={{ fontFamily: fontStack }}
                  >
                    Розділи
                  </p>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => handleAnchorClick(e, link.href)}
                          className="text-[15px] lg:text-[1rem] font-medium tracking-tight text-slate-900 hover:text-[#175ae8] transition-colors"
                          style={{ fontFamily: fontStack }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className="text-[11px] text-slate-500 tracking-[0.15em] mb-3 uppercase"
                    style={{ fontFamily: fontStack }}
                  >
                    Соцмережі
                  </p>
                  <ul className="space-y-2">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[15px] lg:text-[1rem] font-medium tracking-tight text-slate-900 hover:text-[#175ae8] transition-colors group"
                          style={{ fontFamily: fontStack }}
                        >
                          <iconify-icon
                            icon={link.icon}
                            width="14"
                            height="14"
                            style={{ color: '#64748b' }}
                            class="group-hover:!text-[#175ae8] transition-colors"
                          />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip — logo + copyright */}
          <div
            className="mt-10 pt-6 border-t border-white/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 anim-fade-up"
            style={{ transitionDelay: '0.75s' }}
          >
            <div className="flex items-center gap-2.5">
              <img
                src="/logo/mark-on-light.png"
                alt="CRAFT LIONS"
                className="w-8 h-8 object-contain"
              />
              <span
                className="text-[14px] font-semibold tracking-[0.01em]"
                style={{ fontFamily: fontStack }}
              >
                <span className="text-slate-950">CRAFT</span>
                <span className="text-[#175ae8] ml-1">LIONS</span>
              </span>
            </div>

            <p
              className="text-[12px] text-slate-500"
              style={{ fontFamily: fontStack }}
            >
              © {year} CRAFT LIONS · Усі права захищені
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
