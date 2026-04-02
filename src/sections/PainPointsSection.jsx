export default function PainPointsSection() {
  return (
    <section className="overflow-hidden bg-[#FAFAFA] border-neutral-200/60 border-t pt-20 pb-24 relative w-full">
      <div className="[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60"></div>

      <div className="container lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <h2 className="md:text-5xl leading-tight text-4xl font-medium text-zinc-900 tracking-tight max-w-3xl mb-5">Досить бути менеджером з продажу свого продукту</h2>
          <p className="text-xl text-zinc-600 font-light tracking-tight max-w-2xl">
            Ти — експерт. Але замість того, щоб робити те, в чому ти найкращий:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="lg:col-span-5 bg-white border-neutral-200 border rounded-[32px] p-8 lg:p-10 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col min-h-[380px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="flex justify-between items-start w-full relative z-20 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <iconify-icon icon="solar:users-group-rounded-linear" className="text-xl"></iconify-icon>
              </div>
              <span className="text-xs font-normal text-neutral-400 uppercase tracking-widest mt-2">Охоплення</span>
            </div>
            <div className="flex-grow flex items-center justify-center relative z-10 w-full mb-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-200 group-hover:rotate-12 transition-transform duration-1000"></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-neutral-100 group-hover:-rotate-12 transition-transform duration-1000"></div>
                <div className="w-10 h-10 bg-white border border-neutral-200 shadow-sm rounded-full z-10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-orange-400 animate-ping opacity-20"></div>
                  <iconify-icon icon="solar:user-circle-linear" className="text-xl text-orange-500"></iconify-icon>
                </div>
                <div className="w-2 h-2 bg-neutral-200 rounded-full absolute top-2 right-4"></div>
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full absolute bottom-4 left-2"></div>
                <div className="w-2 h-2 bg-neutral-200 rounded-full absolute top-10 -left-2"></div>
              </div>
            </div>
            <div className="relative z-20 mt-auto">
              <h3 className="text-xl font-normal tracking-tight text-neutral-900 mb-2">Про тебе мало знають</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-light">Маєш потужний досвід, але через відсутність системи про це знає лише вузьке коло людей.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-7 bg-white border-neutral-200 border rounded-[32px] p-8 lg:p-10 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col min-h-[380px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="flex justify-between items-start w-full relative z-20 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <iconify-icon icon="solar:battery-charge-linear" className="text-xl"></iconify-icon>
              </div>
              <span className="text-xs font-normal text-neutral-400 uppercase tracking-widest mt-2">Ресурс</span>
            </div>
            <div className="flex-grow flex items-center justify-center relative z-10 mb-8 w-full">
              <div className="w-full max-w-sm h-24 flex items-end gap-3 justify-between relative px-4">
                <div className="w-full bg-neutral-100 rounded-t-lg h-[80%] group-hover:bg-neutral-200 transition-colors duration-500"></div>
                <div className="w-full bg-neutral-100 rounded-t-lg h-[60%] group-hover:bg-neutral-200 transition-colors duration-500"></div>
                <div className="w-full bg-neutral-100 rounded-t-lg h-[40%] group-hover:bg-neutral-200 transition-colors duration-500"></div>
                <div className="w-full bg-orange-100 border-t-2 border-orange-400 rounded-t-lg h-[15%] relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-tight">Тиша</div>
                </div>
                <div className="w-full bg-neutral-50 border border-neutral-100 rounded-t-lg h-[5%]"></div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <path d="M20,20 Q120,30 200,60 T320,80 T380,90" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" className="opacity-50"></path>
                </svg>
              </div>
            </div>
            <div className="relative z-20 mt-auto max-w-md">
              <h3 className="text-xl font-normal tracking-tight text-neutral-900 mb-2">Дохід залежить від енергії</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-light">Не було сил сьогодні — значить, не було продажів. Не зняв контент, не відповів у Direct, не провів ефір — и тиша. Без системи ти заробляєш тільки коли є ресурс працювати.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:col-span-7 bg-white border-neutral-200 border rounded-[32px] p-8 lg:p-10 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col min-h-[380px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="flex justify-between items-start w-full relative z-20 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <iconify-icon icon="solar:notes-linear" className="text-xl"></iconify-icon>
              </div>
              <span className="text-xs font-normal text-neutral-400 uppercase tracking-widest mt-2">Монетизація</span>
            </div>
            <div className="flex-grow flex items-center justify-center relative z-10 mb-8 w-full">
              <div className="w-full max-w-[300px] flex flex-col gap-3 relative">
                <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 flex items-center gap-4 opacity-40 blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <iconify-icon icon="solar:wad-of-money-linear" className="text-xl"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-16 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-neutral-200 rounded"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur border border-neutral-200 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-2 z-10 w-max group-hover:scale-105 transition-transform duration-500">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-xs font-normal tracking-tight text-neutral-800">Ви не в мережі - продажів немає</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 flex items-center gap-4 opacity-30 blur-[2px]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <iconify-icon icon="solar:wad-of-money-linear" className="text-xl"></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-16 bg-neutral-200 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-neutral-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-20 mt-auto max-w-md">
              <h3 className="text-xl font-normal tracking-tight text-neutral-900 mb-2">Відсутність пасивного доходу</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-light">Немає продуктів, які продаються самі. Заробіток іде лише тоді, коли ти на зв'язку.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-5 bg-white border-neutral-200 border rounded-[32px] p-8 lg:p-10 relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col min-h-[380px] overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
            <div className="flex justify-between items-start w-full relative z-20 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <iconify-icon icon="solar:server-linear" className="text-xl"></iconify-icon>
              </div>
              <span className="text-xs font-normal text-neutral-400 uppercase tracking-widest mt-2">Рутина</span>
            </div>
            <div className="flex-grow flex items-center justify-center relative z-10 mb-8 w-full">
              <div className="relative w-full h-32 flex items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 absolute top-2 left-8 flex items-center justify-center text-neutral-400 shadow-sm z-10">
                  <iconify-icon icon="solar:chat-square-linear" className="text-xl"></iconify-icon>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 absolute bottom-2 right-12 flex items-center justify-center text-neutral-400 shadow-sm z-10">
                  <iconify-icon icon="solar:folder-open-linear" className="text-xl"></iconify-icon>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 absolute top-6 right-8 flex items-center justify-center text-neutral-400 shadow-sm z-10">
                  <iconify-icon icon="solar:card-linear" className="text-xl"></iconify-icon>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 flex items-center justify-center z-20 shadow-sm relative group-hover:rotate-45 transition-transform duration-700">
                  <iconify-icon icon="solar:settings-linear" className="text-2xl"></iconify-icon>
                  <div className="w-3 h-3 bg-red-400 rounded-full absolute -top-1 -right-1 border-2 border-white shadow-sm"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" preserveAspectRatio="none">
                  <path d="M60,40 Q100,20 160,64 T220,50" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 4"></path>
                  <path d="M160,64 Q140,100 200,90" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 4"></path>
                  <path d="M60,40 Q100,100 200,90" fill="none" stroke="#ef4444" strokeWidth="1.5"></path>
                </svg>
              </div>
            </div>
            <div className="relative z-20 mt-auto">
              <h3 className="text-xl font-normal tracking-tight text-neutral-900 mb-2">Технічний хаос</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-light">Ти класний фахівець, але не розумієш, як усе це втілити технічно. Витрачаєш час на рутину замість того, щоб робити те, що любиш.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
