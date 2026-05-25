import { Link } from 'react-router-dom';
import { reopenCookiePreferences } from '../../components/CookieConsentBanner';
import { BOOKING_URL_EN as BOOKING_URL } from '../../config/booking';

const fontStack = "'Manrope', sans-serif";

const LINKEDIN_URL = 'https://www.linkedin.com/in/alex-romenskyi/';

const legalLinks = [
  { label: 'Privacy Policy', to: '/en/privacy' },
  { label: 'Cookies', to: '/en/cookies' },
  { label: 'Terms of Service', to: '/en/terms' },
  { label: 'Refund Policy', to: '/en/refund' },
  { label: 'Contacts', to: '/en/contacts' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Instagram', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.pro/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
];

const reassurances = [
  { icon: 'solar:clock-circle-linear', text: '30 minutes' },
  { icon: 'solar:gift-linear', text: 'Free' },
  { icon: 'solar:shield-check-linear', text: 'No commitment' },
];

export default function FinalCTASectionEN() {
  const year = new Date().getFullYear();

  return (
    <section
      id="request-access"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24 overflow-x-clip"
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-200/[0.20] blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-blue-300/[0.14] blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div
          className="relative rounded-[32px] bg-white/50 backdrop-blur-xl border border-white/60 p-7 sm:p-9 lg:p-12 overflow-hidden anim-trigger"
          style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.14), 0 8px 24px rgba(15,23,42,0.05)' }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)] pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-200/[0.18] blur-[90px] pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            <div className="relative text-center lg:text-left">
              <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

              <div
                className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
                style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
              >
                <span className="h-px w-6 bg-slate-300" />
                Strategy call · 30 min
                <span className="h-px w-6 bg-slate-300" />
              </div>

              <h2
                className="text-[1.65rem] sm:text-[2.3rem] lg:text-[3.2rem] tracking-[-0.02em] text-slate-950 font-light max-w-[20ch] mx-auto lg:mx-0"
                style={{ fontFamily: fontStack, lineHeight: 1.2 }}
              >
                <span className="anim-wrap" style={{ display: 'block' }}>
                  <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                    How much longer
                  </span>
                </span>
                <span
                  className="anim-italic"
                  style={{ display: 'block', transitionDelay: '0.20s' }}
                >
                  <span className="italic-accent">
                    will you sell by hand?
                  </span>
                </span>
              </h2>

              <p
                className="mt-5 max-w-md text-[0.98rem] sm:text-[1.04rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline"
                style={{
                  transitionDelay: '0.25s',
                  fontFamily: fontStack,
                }}
              >
                One free strategy call — and you’ll know the next step.
              </p>

            </div>

            <div>
              <h3
                className="text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem] text-slate-950 font-medium tracking-[-0.03em] text-center lg:text-left anim-fade-up"
                style={{ transitionDelay: '0.40s', fontFamily: fontStack }}
              >
                Book a strategy call
              </h3>

              <div
                className="mt-6 flex flex-col items-center sm:items-stretch sm:flex-row gap-3 anim-fade-up"
                style={{ transitionDelay: '0.50s' }}
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 w-full max-w-[280px] mx-auto sm:w-auto sm:max-w-none sm:mx-0"
                  style={{
                    fontFamily: fontStack,
                    background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                    boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
                  }}
                >
                  Book free call
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
                    <iconify-icon icon="solar:arrow-right-up-linear" width="13" height="13" />
                  </span>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200/70 bg-white/55 backdrop-blur-md px-5 text-[14px] font-medium text-slate-700 hover:bg-white/85 hover:text-[#175ae8] hover:border-[#175ae8]/30 transition-colors w-full max-w-[280px] mx-auto sm:w-auto sm:max-w-none sm:mx-0"
                  style={{ fontFamily: fontStack }}
                >
                  <iconify-icon icon="simple-icons:linkedin" width="16" height="16" />
                  LinkedIn
                </a>
              </div>

              <div
                className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 justify-center lg:justify-start anim-fade-up"
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

              <div
                className="grid grid-cols-2 gap-6 lg:gap-8 mt-10 anim-fade-up"
                style={{ transitionDelay: '0.65s' }}
              >
                <div>
                  <p
                    className="text-[11px] text-slate-500 tracking-[0.15em] mb-3 uppercase"
                    style={{ fontFamily: fontStack }}
                  >
                    Legal
                  </p>
                  <ul className="space-y-2">
                    {legalLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-[15px] lg:text-[1rem] font-medium tracking-tight text-slate-900 hover:text-[#175ae8] transition-colors"
                          style={{ fontFamily: fontStack }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        onClick={reopenCookiePreferences}
                        className="text-left text-[15px] lg:text-[1rem] font-medium tracking-tight text-slate-900 hover:text-[#175ae8] transition-colors"
                        style={{ fontFamily: fontStack }}
                      >
                        Cookie settings
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    className="text-[11px] text-slate-500 tracking-[0.15em] mb-3 uppercase"
                    style={{ fontFamily: fontStack }}
                  >
                    Social
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
                <span className="text-brand-gradient ml-1">LIONS</span>
              </span>
            </div>

            <p
              className="text-[12px] text-slate-500"
              style={{ fontFamily: fontStack }}
            >
              © {year} CRAFT LIONS · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
