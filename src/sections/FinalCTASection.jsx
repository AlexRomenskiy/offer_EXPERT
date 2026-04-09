const TELEGRAM_PLACEHOLDER = 'https://t.me/your_username';
const BOOKING_URL = '#';

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="w-full scroll-mt-24">
      <div className="overflow-hidden min-h-[400px] lg:min-h-[500px] shadow-xl shadow-slate-200/50 border border-slate-200 bg-white rounded-[2rem] relative">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="grid grid-cols-1 relative h-full">
          <div className="flex flex-col p-12 lg:p-16 justify-center max-w-4xl mx-auto text-center h-full">
            <h2 className="text-3xl lg:text-4xl leading-tight font-normal text-slate-900 tracking-tight mb-8">
              Готові прибрати хаос з продажів та побудувати систему, яка працює за вас?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition-all text-white text-sm font-medium rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Записатися на розбір</span>
                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={TELEGRAM_PLACEHOLDER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-500 text-sm font-medium transition-colors py-3 px-2"
              >
                <iconify-icon icon="solar:chat-round-dots-linear" width="18" height="18" />
                Написати в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
