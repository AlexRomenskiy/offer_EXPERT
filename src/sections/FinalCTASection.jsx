const TELEGRAM_PLACEHOLDER = 'https://t.me/your_username';
const BOOKING_URL = '#';

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative flex flex-col text-center min-h-[60vh] px-6 items-center justify-center scroll-mt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none" />
      <div className="w-64 h-64 rounded-full bg-amber-400/15 blur-[100px] absolute pointer-events-none" />

      <h2 className="text-5xl md:text-7xl font-heading font-medium text-slate-900 tracking-tighter mb-6 relative z-10">
        Готові прибрати<br />хаос з продажів?
      </h2>
      <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 relative z-10 font-light">
        Запишіться на розбір — за 20–30 хвилин зрозумієте, чи підходить вам автоматизована воронка і з чого почати.
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
        <a href={BOOKING_URL} className="btn-amber text-lg py-4 px-10">
          <span className="btn-amber-glow" />
          Записатися на розбір
        </a>
        <a
          href={TELEGRAM_PLACEHOLDER}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 text-sm font-medium transition-colors py-3 px-2"
        >
          <iconify-icon icon="solar:chat-round-dots-linear" className="text-xl shrink-0" />
          Написати в Telegram
        </a>
      </div>
    </section>
  );
}
