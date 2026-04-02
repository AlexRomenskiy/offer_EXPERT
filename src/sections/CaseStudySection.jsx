export default function CaseStudySection() {
  return (
    <section className="bg-zinc-950 text-white py-20 lg:py-28 relative overflow-hidden w-full border-t border-zinc-900/50 flex-grow selection:bg-orange-500/30 selection:text-orange-200">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start max-w-2xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
            <span className="text-xs font-light text-orange-400 uppercase tracking-widest">Кейс</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-white mb-6">
            Як це працює <span className="text-white/40">на практиці</span>
          </h2>
          <p className="text-xl font-thin text-zinc-400 leading-relaxed tracking-tight">
            Таня Лав — експерт з Reels. Мала досвід і аудиторію, але не мала системи продажів.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Video Card */}
          <div className="lg:col-span-5 relative rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden flex flex-col group min-h-[450px] cursor-pointer shadow-2xl">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0598941-97b9-43d5-8007-56fa92437c3c_1600w.webp" alt="Відео-відгук Тані" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:bg-orange-500/20 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-500 group-hover:scale-110">
                <iconify-icon icon="solar:play-linear" className="w-6 h-6 ml-1 text-2xl"></iconify-icon>
              </div>
            </div>

            <div className="relative mt-auto p-6 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-light text-white/70 uppercase tracking-widest">Відео-відгук</span>
              </div>
              <h3 className="text-xl font-light text-white tracking-tight">Історія Тані</h3>
              <p className="text-base text-zinc-400 font-thin mt-1">Місце для відео-відгуку · 04:12</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6">
            {/* Profile Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-zinc-900/50 border border-white/5 rounded-[20px] p-4 w-full gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 shrink-0">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="Таня Лав" className="w-full h-full object-cover rounded-full shadow-sm border border-white/10" />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <h3 className="text-sm font-normal text-white tracking-tight leading-none">Таня Лав</h3>
                  <p className="text-xs font-light text-zinc-400 leading-none">Експерт з Reels</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/5 bg-transparent shrink-0">
                <iconify-icon icon="solar:target-linear" className="w-3.5 h-3.5 text-sm text-orange-500/80"></iconify-icon>
                <span className="text-xs font-light text-zinc-400">Точка А: досвід без системи</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-grow">
              {/* What was done */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col backdrop-blur-md">
                <h4 className="text-xs uppercase tracking-widest font-light text-zinc-500 mb-6 flex items-center gap-2">
                  <iconify-icon icon="solar:clock-circle-linear" className="w-4 h-4 text-base text-zinc-400"></iconify-icon>
                  Що зроблено за 5 днів
                </h4>

                <div className="flex flex-col gap-3 z-10">
                  {["Стратегія та позиціонування", "Посадкова сторінка", "Чат-бот воронка", "Автоматичний прийом оплат"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 rounded-xl p-3 border border-white/5">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                        <iconify-icon icon="solar:check-circle-linear" className="w-4 h-4 text-base"></iconify-icon>
                      </div>
                      <span className="text-sm text-white/90 font-thin">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 rounded-3xl p-6 flex flex-col backdrop-blur-md justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50 pointer-events-none"></div>

                <h4 className="text-xs uppercase tracking-widest font-light text-zinc-500 mb-8 flex items-center gap-2 relative z-10">
                  <iconify-icon icon="solar:chart-square-linear" className="w-4 h-4 text-base text-zinc-400"></iconify-icon>
                  За перші 2-3 тижні
                </h4>

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-5xl font-light tracking-tighter text-white mb-1">12</span>
                    <span className="text-sm text-zinc-400 font-thin">клієнтів на інтенсив</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-5xl font-light tracking-tighter text-white mb-1">3</span>
                    <span className="text-sm text-zinc-400 font-thin">клієнти на інд. роботу</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-2 relative z-10 text-emerald-400/90">
                  <iconify-icon icon="solar:verified-check-linear" className="w-5 h-5 text-xl"></iconify-icon>
                  <span className="text-xs font-light tracking-wide">Система повністю окупилась</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-orange-500/90 to-orange-700/90 rounded-3xl p-6 lg:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col gap-3 group border border-orange-400/30">
              <div className="absolute -right-6 -bottom-6 text-black/10 transition-transform duration-700 group-hover:scale-110">
                <iconify-icon icon="solar:quote-right-bold" className="w-32 h-32 text-8xl opacity-20 text-orange-950"></iconify-icon>
              </div>

              <p className="text-lg lg:text-xl font-light text-white tracking-tight leading-relaxed max-w-[90%] relative z-10">
                &quot;Тепер я можу просто робити контент і не переживати, що забула комусь відповісти або відправити посилання. Система працює за мене.&quot;
              </p>

              <div className="flex items-center gap-3 mt-4 relative z-10 border-t border-white/20 pt-4">
                <span className="text-xs font-light text-white/70 uppercase tracking-widest">
                  З відгуку клієнта
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
