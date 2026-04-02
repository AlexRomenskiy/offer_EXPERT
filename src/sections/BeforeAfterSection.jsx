export default function BeforeAfterSection() {
  return (
    <section className="flex overflow-hidden text-zinc-900 font-sans bg-white w-full border-zinc-200/60 border-t pt-20 pb-24 relative items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-2xl text-left">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">Від хаосу до системи</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card: До */}
          <div
            className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-2 w-full h-[450px] rounded-[2rem] relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #fff1f2 100%)',
              boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 32px 48px 64px rgba(0,0,0,0.04), 80px 120px 160px rgba(244, 63, 94, 0.05), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'
            }}
          >
            <div className="p-8 relative z-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-zinc-900 tracking-tight">До</h3>
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100 shadow-sm">
                  <iconify-icon icon="solar:danger-triangle-linear" className="text-xl"></iconify-icon>
                </div>
              </div>
              <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-sm">
                Ручні продажі, головний біль та нерозуміння наступного кроку.
              </p>
            </div>

            <div className="relative z-10 flex-1 flex flex-col gap-4 items-center justify-end p-8 pb-10">
              <div className="w-[85%] bg-white/60 backdrop-blur-md border border-rose-100/50 rounded-2xl p-5 shadow-sm transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500 translate-y-4 group-hover:translate-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-rose-100/50 flex items-center justify-center text-rose-400">
                    <iconify-icon icon="solar:close-circle-linear" className="text-sm"></iconify-icon>
                  </div>
                  <div className="h-2 w-24 bg-rose-100 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full"></div>
                  <div className="h-1.5 w-4/5 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
              <div className="w-[90%] bg-white/80 backdrop-blur-md border border-rose-100/80 rounded-2xl p-5 shadow-md transform rotate-1 group-hover:rotate-2 transition-transform duration-500 z-10 animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                    <iconify-icon icon="solar:chat-round-line-linear" className="text-sm"></iconify-icon>
                  </div>
                  <div className="h-2 w-32 bg-zinc-100 rounded-full"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Після */}
          <div
            className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-2 w-full h-[450px] rounded-[2rem] relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)',
              boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 32px 48px 64px rgba(0,0,0,0.04), 80px 120px 160px rgba(16, 185, 129, 0.05), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'
            }}
          >
            {/* Glow effect */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-emerald-300/20 rounded-full blur-[80px] group-hover:bg-emerald-300/30 transition-colors duration-700 animate-pulse" style={{ animationDuration: '4s' }}></div>

            <div className="p-8 relative z-20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-zinc-900 tracking-tight">Після</h3>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                  <iconify-icon icon="solar:rocket-linear" className="text-xl"></iconify-icon>
                </div>
              </div>
              <p className="text-lg text-zinc-600 font-light leading-relaxed max-w-md">
                Зрозумілі смисли, чіткий напрямок розвитку, автоматична видача продуктів та стабільний дохід.
              </p>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-end p-8 pb-10">
              <div className="w-full bg-white/90 backdrop-blur-md border border-emerald-100/80 rounded-2xl p-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-700 animate-float" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100/50">
                      <iconify-icon icon="solar:chart-square-linear" className="text-lg"></iconify-icon>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 uppercase tracking-widest font-normal mb-1">Статус</div>
                      <div className="text-sm text-zinc-900 font-medium tracking-tight">Стабільний дохід</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100 flex items-center gap-1.5 shadow-sm">
                    <iconify-icon icon="solar:bolt-linear" className="text-emerald-500"></iconify-icon> Автоматизовано
                  </span>
                </div>
                <div className="h-px w-full bg-zinc-100 mb-5"></div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500 text-sm"></iconify-icon>
                    <div className="h-1.5 w-3/4 bg-emerald-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-full rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500 text-sm"></iconify-icon>
                    <div className="h-1.5 w-2/3 bg-emerald-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
