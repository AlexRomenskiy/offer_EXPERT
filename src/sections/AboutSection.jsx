import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

// Portrait: /Alexander Romenskyi.JPG — tight 1:1 close-up, dark turtleneck.
// object-[center_28%] keeps eyes in the upper third on the locked 4:5 crop.

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
];

// 3 principles distilled from bio + memory canon.
// Format: short bold title (the rule), one-line explanation (the why).
const principles = [
  {
    title: 'Упаковка продає експертизу',
    description: 'Клієнти купують не твій диплом, а те, як ти себе подаєш.',
  },
  {
    title: 'Єдина система, а не хаос',
    description: 'Лендінг, бот та оплати працюють як єдиний механізм, а не набір милиць.',
  },
  {
    title: 'Масштаб без вигоряння',
    description: 'Продажі йдуть автоматично. Тобі не потрібно тримати всю рутину на собі.',
  },
];

export default function AboutSection() {
  const [bioExpanded, setBioExpanded] = useState(false);

  const scrollToCTA = (e) => {
    e.preventDefault();
    document.querySelector('#request-access')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative max-w-3xl mb-12 lg:mb-14 anim-trigger text-center md:text-left">
          {/* Decorative dot-mesh background — Pricing-style base center */}
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          {/* Mono eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: monoStack, transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Автор · Funnel architect
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-wrap heading-wrap-mobile-stack">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Олександр
              </span>
            </span>{' '}
            <span className="anim-italic heading-wrap-mobile-stack" style={{ transitionDelay: '0.20s' }}>
              <span className="italic-accent">
                Роменський
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up subtitle-hairline"
            style={{
              transitionDelay: '0.30s',
              fontFamily: fontStack,
            }}
          >
            Маркетинг-архітектор · 7+ років
          </p>
        </div>

        {/* 2-col layout — natural heights, photo stretches to match right column via items-stretch (grid default) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 anim-trigger">

          {/* ===========================================
              LEFT — Photo card. Locked 4:5 aspect, sticks to top so it never stretches past one screen.
              =========================================== */}
          <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-24 anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)]">

              {/* Portrait */}
              <img
                src="/Alexander Romenskyi.JPG"
                alt="Олександр Роменський — Funnel architect"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[center_28%] select-none"
                draggable="false"
              />

              {/* Subtle bottom fade — anchors the card and lifts the role pill area on hover with depth */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020f2d]/35 via-[#020f2d]/10 to-transparent pointer-events-none"
              />

              {/* Top-left brand wash — keeps the role pill readable against bright window light */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020f2d]/25 to-transparent pointer-events-none"
              />

              {/* Top-right role pill */}
              <div className="absolute top-5 right-5 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-white/80 px-3 py-1.5 shadow-sm">
                  <iconify-icon icon="solar:cup-star-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                  <span className="text-[11px] font-medium text-slate-700" style={{ fontFamily: fontStack }}>
                    Funnel architect
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ===========================================
              RIGHT — About glass card + chips + socials + CTA
              =========================================== */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">

            {/* About glass card — eyebrow + bio + pull-quote + separator + principles */}
            <div
              className="relative rounded-[28px] bg-white/40 backdrop-blur-xl border border-white/60 p-6 lg:p-7 anim-fade-up overflow-hidden"
              style={{
                transitionDelay: '0.15s',
                boxShadow: '0 18px 50px rgba(148,163,184,0.12), 0 6px 18px rgba(15,23,42,0.04)',
              }}
            >
              {/* Glass highlight — canon */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_55%)] pointer-events-none rounded-[28px]"
              />

              <div className="relative z-10">
                {/* Eyebrow — Спеціалізація */}
                <p
                  className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-3"
                  style={{ fontFamily: monoStack }}
                >
                  Спеціалізація
                </p>

                {/* Bio paragraphs — mobile collapsed (mask-fade after ~first sentence,
                    before "в Україні, Грузії..." enumeration). md+ always fully visible. */}
                <div className="relative">
                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-out md:!max-h-none ${
                      bioExpanded ? 'max-h-[1600px]' : 'max-h-[140px] bio-mask-collapsed'
                    }`}
                  >
                    <div className="space-y-4">
                      <p
                        className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                        style={{ fontFamily: fontStack }}
                      >
                        За 7 років у маркетингу я побудував десятки систем
                        продажів для різних сфер бізнесу: від e-commerce до
                        інфобізу в Україні, Грузії, Єгипті, США та Канаді.
                      </p>
                      <p
                        className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                        style={{ fontFamily: fontStack }}
                      >
                        Головний інсайт для експертів, підприємців, коучів та
                        крієйторів: ти втрачаєш свої можливості і, як результат,
                        гроші, не тому, що не отримав ще один «диплом», який
                        дасть дозвіл йти в масштаб. Ти втрачаєш їх через слабке
                        позиціонування (намагаючись бути корисним усім і
                        продавати всім), слабку систему продажів (або взагалі
                        її відсутність), упаковку та хаос у процесах.
                      </p>
                      <p
                        className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                        style={{ fontFamily: fontStack }}
                      >
                        Я застосую свій досвід та навички, щоб повністю
                        реалізувати твій справжній потенціал.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile-only Читати далі / Згорнути */}
                <button
                  type="button"
                  onClick={() => setBioExpanded(!bioExpanded)}
                  aria-expanded={bioExpanded}
                  className="md:hidden mt-3 inline-flex items-center gap-1.5 text-[14px] text-[#175ae8] font-medium hover:text-[#0e47c8] transition-colors"
                  style={{ fontFamily: fontStack }}
                >
                  {bioExpanded ? 'Згорнути' : 'Читати далі'}
                  <iconify-icon
                    icon={bioExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                    width="14"
                    height="14"
                  />
                </button>

                {/* Separator — hairline gradient (matches site canon) */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent my-6" />

                {/* Принципи */}
                <p
                  className="text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-3"
                  style={{ fontFamily: monoStack }}
                >
                  Принципи
                </p>

                <ul className="space-y-3">
                  {principles.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[#175ae8] shrink-0"
                        style={{ marginTop: '0.6em', boxShadow: '0 0 6px rgba(23,90,232,0.45)' }}
                      />
                      <div className="flex-1 leading-[1.5]">
                        <span
                          className="text-[0.95rem] text-slate-900 font-medium"
                          style={{ fontFamily: fontStack }}
                        >
                          {p.title}
                        </span>
                        <span
                          className="text-[0.9rem] text-slate-600"
                          style={{ fontFamily: fontStack }}
                        >
                          {' '}— {p.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-2 anim-fade-up flex-wrap justify-center md:justify-start"
              style={{ transitionDelay: '0.28s' }}
            >
              <span
                className="text-[12px] text-slate-500 mr-1"
                style={{ fontFamily: fontStack }}
              >
                Більше про мене:
              </span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/55 backdrop-blur-md border border-white/60 hover:bg-gradient-to-br hover:from-[#020f2d] hover:to-[#175ae8] hover:border-transparent transition-all group"
                >
                  <iconify-icon
                    icon={link.icon}
                    width="16"
                    height="16"
                    style={{ color: '#1e293b' }}
                    class="group-hover:!text-white transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#request-access"
              onClick={scrollToCTA}
              className="self-center lg:self-start inline-flex items-center gap-2.5 rounded-full text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-300 hover:translate-y-[-1px] anim-fade-up"
              style={{
                transitionDelay: '0.35s',
                fontFamily: fontStack,
                background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
              }}
            >
              Записатись на розбір
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
