const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', url: 'https://www.linkedin.com/in/alex-romenskyi/' },
  { label: 'Instagram (EN)', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.pro/' },
  { label: 'Instagram (UA)', icon: 'simple-icons:instagram', url: 'https://www.instagram.com/romensky.ua/' },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: 'https://www.facebook.com/Alex.Romenskyi' },
];

export default function AboutSection() {
  const scrollToFinal = (e) => {
    e.preventDefault();
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="about"
      className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EEF4FA] scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="about-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="absolute top-[-8%] right-[-12%] w-[40%] h-[40%] blur-[110px] rounded-full pointer-events-none bg-orange-300/[0.14]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-14 lg:mb-16 anim-trigger">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{ transitionDelay: '0s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-700">
              Про мене
            </span>
          </div>

          <h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-3">
            <span className="block sm:inline anim-wrap">
              <span className="anim-line" style={{ transitionDelay: '0.1s' }}>Олександр Роменський</span>
            </span>
          </h2>

          <p className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up" style={{ transitionDelay: '0.3s' }}>
            7 років збираю воронки продажів. AI робить це точніше і швидше.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 anim-trigger">

          {/* === LEFT: Photo card (sticky on lg) === */}
          <div className="lg:col-span-5 order-2 lg:order-1 anim-fade-up">
            <div className="lg:sticky lg:top-24">
              <div className="group relative aspect-[4/5] max-h-[600px] rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,247,237,0.45))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(254,215,170,0.40),transparent_55%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

                <div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Profile</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/65 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-orange-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      Active
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center my-6 gap-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_18px_40px_rgba(249,115,22,0.30)] ring-4 ring-white/40">
                      <span className="text-white font-semibold text-4xl tracking-wider">AR</span>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Фото буде додано</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-slate-950">Олександр Роменський</h3>
                    <p className="text-sm text-slate-600 leading-[1.6]">Funnel architect · 7+ років · 5 країн</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT: Bio + chips + CTA === */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-7">

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 anim-fade-up" style={{ transitionDelay: '0.05s' }}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/60 bg-white/60 backdrop-blur-xl text-sm text-slate-700 shadow-sm">
                <iconify-icon icon="solar:calendar-linear" width="16" height="16" className="text-orange-500" />
                <span className="font-semibold text-slate-900">7+ років</span>
                <span className="text-slate-500">у воронках продажів</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/60 bg-white/60 backdrop-blur-xl text-sm text-slate-700 shadow-sm">
                <iconify-icon icon="solar:global-linear" width="16" height="16" className="text-orange-500" />
                <span className="font-semibold text-slate-900">5 країн</span>
                <span className="text-slate-500">UA · US · CA · EG · GE</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/60 bg-white/60 backdrop-blur-xl text-sm text-slate-700 shadow-sm">
                <iconify-icon icon="solar:users-group-rounded-linear" width="16" height="16" className="text-orange-500" />
                <span className="text-slate-700">Коучи · B2B · e-commerce</span>
              </span>
            </div>

            {/* Bio paragraphs in glass card */}
            <div className="relative rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_18px_50px_rgba(148,163,184,0.10)] anim-fade-up" style={{ transitionDelay: '0.15s' }}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/70 to-transparent opacity-80" />

              <div className="relative z-10 p-7 lg:p-8 space-y-5 text-[1rem] sm:text-[1.04rem] leading-[1.75] text-slate-700 border-l-2 border-orange-200/0">
                <p>
                  <span className="text-slate-950 font-medium">За освітою — актор театру.</span> Сцена цікавила мене менше, ніж режисура: розкладати мотивацію, відчувати аудиторію, бачити, що людині насправді потрібно. У маркетингу ці навички працюють як ніде.
                </p>
                <p>
                  Збираю воронки продажів — <span className="text-slate-950 font-medium">вебінарні, лід-магнітні, під високий чек</span>. Лендинги, копірайтинг, таргет, чат-боти — це інструменти всередині. AI у мене не замість досвіду, а його <span className="text-slate-950 font-medium">підсилювач</span>: робить кожен крок швидше і точніше.
                </p>
                <p>
                  Багато сильних експертів застрягають не на експертизі, а на упаковці. Знання є, аудиторія є — а системи, яка з'єднує з людьми, що чекають саме на них, нема. <span className="text-slate-950 font-medium">Будую цей міст.</span>
                </p>
              </div>
            </div>

            {/* Social row */}
            <div className="flex flex-wrap items-center gap-3 anim-fade-up" style={{ transitionDelay: '0.25s' }}>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Більше про мене</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="w-10 h-10 rounded-xl border border-white/60 bg-white/65 hover:border-orange-300/80 hover:bg-orange-50 flex items-center justify-center text-slate-500 hover:text-orange-600 transition-all shadow-sm backdrop-blur-md"
                  >
                    <iconify-icon icon={link.icon} width="16" height="16" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#final-cta"
              onClick={scrollToFinal}
              className="group relative rounded-[20px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 hover:border-orange-300/70 transition-all duration-300 shadow-[0_12px_36px_rgba(148,163,184,0.10)] flex items-center justify-between gap-4 p-5 lg:p-6 anim-fade-up"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-base lg:text-lg font-medium text-slate-950 tracking-tight">Поговоримо напряму</span>
                <span className="text-sm text-slate-600">Розберемо твою ситуацію за 30 хв — безкоштовно.</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-slate-900 group-hover:bg-orange-500 text-white px-5 py-3 rounded-xl font-medium text-sm shadow-md transition-all">
                <span className="hidden sm:inline">Записатись на розбір</span>
                <span className="sm:hidden">Записатись</span>
                <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
