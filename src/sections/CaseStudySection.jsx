import UnicornBackground from '../components/UnicornBackground';

export default function CaseStudySection() {
  return (
    <section className="relative overflow-hidden w-full py-20 lg:py-28 text-white selection:bg-amber-500/30 selection:text-amber-100">
      <UnicornBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/70 via-[#0a0f1c]/50 to-[#0a0f1c]/80 pointer-events-none z-[1]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
            <span className="text-xs font-medium text-amber-400/90 uppercase tracking-widest">Кейс</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-white mb-6">
            Як це працює <span className="text-white/45 font-medium">на практиці</span>
          </h2>
          <p className="text-lg lg:text-xl font-light text-white/55 leading-relaxed tracking-tight">
            Tania Lav — експерт з Reels. Мала досвід і аудиторію, але не мала системи продажів.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Video Card */}
          <div className="lg:col-span-5 relative rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col group min-h-[420px] lg:min-h-[450px] cursor-pointer shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0598941-97b9-43d5-8007-56fa92437c3c_1600w.webp"
              alt="Відео-відгук Tania Lav"
              className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-overlay group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/95 via-[#0a0f1c]/25 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white shadow-xl group-hover:bg-amber-500/25 group-hover:border-amber-400/40 group-hover:text-amber-200 transition-all duration-500 group-hover:scale-110">
                <iconify-icon icon="solar:play-linear" className="w-6 h-6 ml-1 text-2xl"></iconify-icon>
              </div>
            </div>

            <div className="relative mt-auto p-6 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">Відео-відгук</span>
              </div>
              <h3 className="text-xl font-heading font-medium text-white tracking-tight">Історія Tania</h3>
              <p className="text-sm text-white/45 font-light mt-1">Місце для відео-відгуку · 04:12</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between glass-pill-dark rounded-2xl p-4 w-full gap-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden ring-2 ring-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
                    alt="Tania Lav"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <h3 className="text-sm font-heading font-semibold text-white tracking-tight leading-none">Tania Lav</h3>
                  <p className="text-xs font-light text-white/45 leading-none">Експерт з Reels</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10 bg-white/[0.03] shrink-0">
                <iconify-icon icon="solar:target-linear" className="w-3.5 h-3.5 text-amber-400/90"></iconify-icon>
                <span className="text-xs font-light text-white/50">Точка А: досвід без системи</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
              <div className="rounded-2xl p-6 flex flex-col border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <h4 className="text-xs uppercase tracking-widest font-medium text-white/40 mb-6 flex items-center gap-2">
                  <iconify-icon icon="solar:clock-circle-linear" className="w-4 h-4 text-amber-400/80"></iconify-icon>
                  Що зроблено за 5 днів
                </h4>

                <div className="flex flex-col gap-3">
                  {['Стратегія та позиціонування', 'Посадкова сторінка', 'Чат-бот воронка', 'Автоматичний прийом оплат'].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300 rounded-xl p-3 border border-white/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/25">
                        <iconify-icon icon="solar:check-circle-linear" className="w-4 h-4"></iconify-icon>
                      </div>
                      <span className="text-sm text-white/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col justify-between border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                <h4 className="text-xs uppercase tracking-widest font-medium text-white/40 mb-8 flex items-center gap-2 relative z-10">
                  <iconify-icon icon="solar:chart-square-linear" className="w-4 h-4 text-amber-400/80"></iconify-icon>
                  За перші 2-3 тижні
                </h4>

                <div className="flex flex-col gap-6 relative z-10">
                  <div>
                    <span className="text-5xl font-heading font-semibold tracking-tighter text-white mb-1 block">12</span>
                    <span className="text-sm text-white/45 font-light">клієнтів на інтенсив</span>
                  </div>
                  <div>
                    <span className="text-5xl font-heading font-semibold tracking-tighter text-white mb-1 block">3</span>
                    <span className="text-sm text-white/45 font-light">клієнти на інд. роботу</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 relative z-10 text-emerald-400/95">
                  <iconify-icon icon="solar:verified-check-linear" className="w-5 h-5"></iconify-icon>
                  <span className="text-xs font-light tracking-wide">Система повністю окупилась</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/95 to-amber-700/95 rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.12)] flex flex-col gap-3 group border border-amber-400/30">
              <div className="absolute -right-6 -bottom-6 text-black/10 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                <iconify-icon icon="solar:quote-right-bold" className="w-32 h-32 text-8xl opacity-20 text-amber-950"></iconify-icon>
              </div>

              <p className="text-lg lg:text-xl font-light text-white tracking-tight leading-relaxed max-w-[92%] relative z-10">
                &quot;Тепер я можу просто робити контент і не переживати, що забула комусь відповісти або відправити посилання. Система працює за мене.&quot;
              </p>

              <div className="flex items-center gap-3 mt-4 relative z-10 border-t border-white/25 pt-4">
                <span className="text-xs font-medium text-white/75 uppercase tracking-widest">З відгуку клієнта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
