const TELEGRAM_PLACEHOLDER = 'https://t.me/your_username';
const BOOKING_URL = '#';

const reassurances = [
  { icon: 'solar:clock-circle-linear', text: '30 хвилин' },
  { icon: 'solar:gift-linear', text: 'безкоштовно' },
  { icon: 'solar:shield-check-linear', text: 'без зобов’язань' },
];

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="w-full scroll-mt-24">
      <div className="overflow-hidden min-h-[400px] lg:min-h-[500px] shadow-xl shadow-slate-200/50 border border-slate-200 bg-white rounded-[2rem] relative">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-400/10 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 relative h-full">
          <div className="flex flex-col p-10 lg:p-16 justify-center max-w-3xl mx-auto text-center h-full">
            <div className="inline-flex items-center gap-2 mx-auto mb-6 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5">
              <iconify-icon icon="solar:bolt-linear" width="14" height="14" className="text-orange-500" />
              <span className="text-xs font-medium text-orange-700 uppercase tracking-widest">Розбір</span>
            </div>

            <h2 className="text-3xl lg:text-5xl leading-[1.1] font-normal text-slate-900 tracking-tight mb-5">
              Поговоримо про{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                твою воронку
              </span>
              ?
            </h2>

            <p className="text-base lg:text-lg text-slate-500 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Подивимось на твій продукт, аудиторію і де зараз «втікають» гроші. Без презентацій — конкретно по твоїй ситуації.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={BOOKING_URL}
                className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition-all text-white text-sm font-medium rounded-full pl-6 pr-2 py-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Записатися на безкоштовний розбір</span>
                <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:bg-orange-400 transition-colors">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
              <a
                href={TELEGRAM_PLACEHOLDER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 text-sm font-medium transition-colors py-3 px-2"
              >
                <iconify-icon icon="solar:chat-round-dots-linear" width="18" height="18" />
                Або напиши в Telegram
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              {reassurances.map((r) => (
                <div key={r.text} className="flex items-center gap-1.5">
                  <iconify-icon icon={r.icon} width="14" height="14" className="text-orange-500/80" />
                  <span className="font-medium uppercase tracking-wider">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
