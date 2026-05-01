import UnicornBackground from '../components/UnicornBackground';

export default function CaseStudySection() {
  const scrollToFinal = (e) => {
    e.preventDefault();
    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="case-study"
      className="relative overflow-hidden w-full py-16 lg:py-24 text-white selection:bg-orange-500/30 selection:text-orange-100 rounded-[2rem] mt-16 lg:mt-24 scroll-mt-24"
    >
      {/* Background animation — behind content */}
      <UnicornBackground className="!z-[0]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/70 via-[#0a0f1c]/50 to-[#0a0f1c]/80 pointer-events-none z-[1]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-[1]" />

      <div className="max-w-full mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-start max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]" />
            <span className="text-xs font-medium text-orange-400/90 uppercase tracking-widest">Кейс</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-white mb-6">
            Як це працює{' '}
            <span className="text-white/40 font-light">на практиці</span>
          </h2>
          <p className="text-base lg:text-lg font-light text-white/50 leading-relaxed tracking-wide">
            Tania Lav — On-Camera Brand для експертів та засновників. 10K+ аудиторія, досвід — але не було системи продажів.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Video Card — placeholder until video added */}
          <div className="lg:col-span-5 relative rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 overflow-hidden flex flex-col group min-h-[420px] lg:min-h-[450px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
            {/* Subtle pattern bg */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-orange-500/15 blur-[80px]" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-orange-400/10 blur-[60px]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/60">
                <iconify-icon icon="solar:videocamera-record-linear" width="26" height="26" />
              </div>
            </div>

            <div className="relative mt-auto p-6 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white/30" />
                </span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">Відео-відгук</span>
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight">Скоро буде додано</h3>
              <p className="text-sm text-white/40 font-light mt-1">Tania Lav · підготовка контенту</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between glass-pill-dark rounded-2xl p-4 w-full gap-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center ring-2 ring-white/10">
                  <span className="text-white font-semibold text-sm tracking-wider">TL</span>
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <h3 className="text-sm font-medium text-white tracking-tight leading-none">Tania Lav</h3>
                  <a
                    href="https://instagram.com/lav_tania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-light text-white/40 leading-none hover:text-orange-300 transition-colors flex items-center gap-1"
                  >
                    @lav_tania
                    <iconify-icon icon="solar:arrow-right-up-linear" width="11" height="11" />
                  </a>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10 bg-white/[0.03] shrink-0">
                <iconify-icon icon="solar:target-linear" width="14" height="14" className="text-orange-400/90" />
                <span className="text-xs font-light text-white/50">Точка А: 10K+ аудиторія, але без системи продажів</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
              <div className="rounded-2xl p-6 flex flex-col border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <h4 className="text-xs uppercase tracking-widest font-medium text-white/40 mb-2 flex items-center gap-2">
                  <iconify-icon icon="solar:clock-circle-linear" width="16" height="16" className="text-orange-400/80" />
                  Що зроблено за 7 робочих днів
                </h4>
                <p className="text-[10px] font-light text-white/30 mb-5 ml-6">Пакет Генератор · стандартний термін 14 днів</p>
                <div className="flex flex-col gap-3">
                  {[
                    'Стратегія і позиціонування',
                    'Посадкова сторінка інтенсиву',
                    'Чат-бот воронка',
                    'Автоматичний прийом оплат',
                    'Автоматична видача матеріалів',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300 rounded-xl p-3 border border-white/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/25">
                        <iconify-icon icon="solar:check-circle-linear" width="16" height="16" />
                      </div>
                      <span className="text-sm text-white/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col justify-between border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                <h4 className="text-xs uppercase tracking-widest font-medium text-white/40 mb-8 flex items-center gap-2 relative z-10">
                  <iconify-icon icon="solar:chart-square-linear" width="16" height="16" className="text-orange-400/80" />
                  За 2–3 тижні після запуску
                </h4>
                <div className="flex flex-col gap-6 relative z-10">
                  <div>
                    <span className="text-5xl font-semibold tracking-tighter text-white mb-1 block">18</span>
                    <span className="text-sm text-white/40 font-light">клієнтів на інтенсив</span>
                  </div>
                  <div>
                    <span className="text-5xl font-semibold tracking-tighter text-white mb-1 block">4</span>
                    <span className="text-sm text-white/40 font-light">клієнти на індивідуальну роботу</span>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 relative z-10 text-orange-400/95">
                  <iconify-icon icon="solar:verified-check-linear" width="20" height="20" />
                  <span className="text-xs font-light tracking-wide">Інвестиція $990 окупилась з перших продажів</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/95 to-orange-700/95 rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.18)] flex flex-col gap-3 group border border-orange-400/30">
              <div className="absolute -right-6 -bottom-6 text-black/10 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                <iconify-icon icon="solar:quote-right-bold" width="128" height="128" className="opacity-20 text-orange-950" />
              </div>
              <p className="text-lg lg:text-xl font-light text-white tracking-tight leading-relaxed max-w-[92%] relative z-10">
                &quot;Тепер я можу просто робити контент і не переживати, що забула комусь відповісти або відправити посилання. Система працює за мене.&quot;
              </p>
              <div className="flex items-center gap-2 mt-4 relative z-10 border-t border-white/25 pt-4">
                <span className="text-sm font-medium text-white tracking-tight">— Tania Lav</span>
                <span className="text-xs font-light text-white/70">· через 3 тижні після запуску</span>
              </div>
            </div>

            {/* CTA — drives momentum to action after seeing case results */}
            <a
              href="#final-cta"
              onClick={scrollToFinal}
              className="group flex items-center justify-between gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-orange-400/40 rounded-2xl p-5 lg:p-6 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1">
                <span className="text-base lg:text-lg font-medium text-white tracking-tight">Хочеш такий же результат?</span>
                <span className="text-sm text-white/50 font-light">Розберемо твою ситуацію за 30 хв — безкоштовно.</span>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-400 group-hover:bg-orange-400 text-white px-5 py-3 rounded-xl font-medium text-sm shadow-lg shadow-orange-500/30 transition-all">
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
