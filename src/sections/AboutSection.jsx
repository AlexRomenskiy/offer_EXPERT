import { useState } from 'react';

const fontStack = "'Manrope', sans-serif";

/* ============================================================
   ASSET PIPELINE (pending):
   - Olexandr Romenskyi portrait photo (4:5 or 1:1) — swap placeholder.
   When asset arrives, replace the photo placeholder div with:
     <img src="/photos/olexandr.jpg" className="absolute inset-0 w-full h-full object-cover" />
   ============================================================ */

const stats = [
  { icon: 'solar:case-minimalistic-linear', text: '7+ років у воронках' },
  { icon: 'solar:globe-linear', text: '5 країн · UA · US · CA · EG · GE' },
  { icon: 'solar:users-group-rounded-linear', text: 'Коучи · B2B · e-commerce' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Instagram UA', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.ua/' },
  { label: 'Instagram EN', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.pro/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
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
        <div className="max-w-3xl mb-12 lg:mb-14 anim-trigger">
          <h2
            className="text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, textWrap: 'balance' }}
          >
            <span className="anim-wrap">
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Олександр
              </span>
            </span>{' '}
            <span className="anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.20s' }}>
                Роменський
              </span>
            </span>
          </h2>

          <p
            className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.6] text-slate-600 anim-fade-up"
            style={{ transitionDelay: '0.30s', fontFamily: fontStack }}
          >
            7 років збираю воронки продажів. AI робить це точніше і швидше.
          </p>
        </div>

        {/* 2-col layout — equal heights on lg+, fits one screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 anim-trigger">

          {/* ===========================================
              LEFT — Photo card (col-5, h-[540px] on lg)
              =========================================== */}
          <div className="lg:col-span-5 lg:h-[540px] anim-fade-up" style={{ transitionDelay: '0.10s' }}>
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full max-h-[540px] rounded-[28px] overflow-hidden bg-white/25 backdrop-blur-xl border border-white/40">

              {/* PHOTO PLACEHOLDER — swap with <img src="/photos/olexandr.jpg" /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(23,90,232,0.10),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(96,165,250,0.08),transparent_45%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/60 border border-white/80 backdrop-blur-md flex items-center justify-center shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                    <iconify-icon
                      icon="solar:user-rounded-linear"
                      width="56"
                      height="56"
                      style={{ color: '#94a3b8' }}
                    />
                  </div>
                </div>
              </div>

              {/* Top-right role pill */}
              <div className="absolute top-5 right-5 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-white/80 px-3 py-1.5 shadow-sm">
                  <iconify-icon icon="solar:cup-star-linear" width="14" height="14" style={{ color: '#175ae8' }} />
                  <span className="text-[11px] font-medium text-slate-700" style={{ fontFamily: fontStack }}>
                    Funnel architect
                  </span>
                </div>
              </div>

              {/* Bottom identity overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 bg-gradient-to-t from-white/90 via-white/50 to-transparent backdrop-blur-sm">
                <div
                  className="text-[1.3rem] lg:text-[1.45rem] text-slate-950 font-medium tracking-[-0.02em] leading-tight"
                  style={{ fontFamily: fontStack }}
                >
                  Олександр Роменський
                </div>
                <div
                  className="text-[0.9rem] text-slate-600 mt-0.5"
                  style={{ fontFamily: fontStack }}
                >
                  Маркетинг-архітектор · 7+ років
                </div>
              </div>
            </div>
          </div>

          {/* ===========================================
              RIGHT — Bio + chips + socials + CTA
              col-7, h-540px on lg, CTA pinned to bottom
              =========================================== */}
          <div className="lg:col-span-7 lg:h-[540px] flex flex-col gap-6 lg:gap-7">

            {/* Bio — collapsed-with-fade on mobile, fully visible on desktop */}
            <div className="relative">
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-out md:!max-h-none ${
                  bioExpanded ? 'max-h-[1200px]' : 'max-h-[180px]'
                }`}
              >
                <div className="space-y-4 anim-fade-up" style={{ transitionDelay: '0.15s' }}>
                  <p
                    className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Освіта — актор театру. Сцена цікавила менше, ніж режисура:
                    розкладати мотивацію, відчувати аудиторію, бачити, що людині
                    насправді потрібно. В маркетингу ці навички працюють як ніде.
                  </p>
                  <p
                    className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    7 років збираю воронки — лендинги, чат-боти, оплати,
                    аналітика. AI у мене не замість досвіду, а його підсилювач:
                    робить кожен крок швидше і точніше.
                  </p>
                  <p
                    className="text-[1rem] lg:text-[1.05rem] leading-[1.6] text-slate-700"
                    style={{ fontFamily: fontStack }}
                  >
                    Сильні експерти застрягають не на експертизі, а на упаковці.
                    Знання є, аудиторія є — а системи, що з'єднує з людьми,
                    нема. Будую цей міст.
                  </p>
                </div>
              </div>

              {/* Fade-out gradient at bottom — mobile only, fades to page bg */}
              <div
                aria-hidden="true"
                className={`md:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EEF4FA] via-[#EEF4FA]/85 to-transparent pointer-events-none transition-opacity duration-500 ${
                  bioExpanded ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>

            {/* Mobile-only text link with arrow (NOT a button-pill) */}
            <button
              type="button"
              onClick={() => setBioExpanded(!bioExpanded)}
              aria-expanded={bioExpanded}
              className="md:hidden self-start inline-flex items-center gap-1.5 text-[14px] text-[#175ae8] font-medium hover:text-[#0e47c8] transition-colors -mt-2"
              style={{ fontFamily: fontStack }}
            >
              {bioExpanded ? 'Згорнути' : 'Читати далі'}
              <iconify-icon
                icon={bioExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                width="14"
                height="14"
              />
            </button>

            {/* Stats chips */}
            <div
              className="flex flex-wrap gap-2 anim-fade-up"
              style={{ transitionDelay: '0.22s' }}
            >
              {stats.map((s) => (
                <span
                  key={s.text}
                  className="inline-flex items-center gap-2 rounded-full bg-white/55 backdrop-blur-md border border-white/60 px-3.5 py-1.5 text-[12px] text-slate-700"
                  style={{ fontFamily: fontStack }}
                >
                  <iconify-icon icon={s.icon} width="14" height="14" style={{ color: '#175ae8' }} />
                  {s.text}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-2 anim-fade-up flex-wrap"
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
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/55 backdrop-blur-md border border-white/60 hover:bg-[#175ae8] hover:border-[#175ae8] transition-colors group"
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

            {/* CTA — pinned to bottom on lg, flows on mobile */}
            <a
              href="#request-access"
              onClick={scrollToCTA}
              className="self-start lg:mt-auto inline-flex items-center gap-2.5 rounded-full bg-[#175ae8] hover:bg-[#0e47c8] text-white px-7 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] shadow-[0_12px_30px_-8px_rgba(23,90,232,0.45)] transition-all duration-300 hover:translate-y-[-1px] anim-fade-up"
              style={{ transitionDelay: '0.35s', fontFamily: fontStack }}
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
