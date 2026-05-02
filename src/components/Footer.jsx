const year = new Date().getFullYear();

const links = [
  { label: 'Для кого', href: '#pain-points' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Кейс', href: '#case-study' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 lg:py-20 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-slate-950 text-slate-300">
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1220_0%,#070A14_100%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)' }}>
          <defs>
            <pattern id="footer-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.5)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      <div className="absolute -top-24 -left-24 w-[40%] h-[40%] rounded-full bg-indigo-500/[0.14] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[40%] h-[40%] rounded-full bg-orange-500/[0.10] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <div className="flex w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md items-center justify-center">
                <iconify-icon icon="solar:layers-linear" width="16" height="16" className="text-orange-400" />
              </div>
              <span className="text-lg font-medium tracking-tight">LOGO</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-[1.7]">
              Допомагаю експертам перетворити знання на автоматизовану систему продажів.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-1">Розділи</span>
            {links.slice(0, 2).map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-1">Більше</span>
            {links.slice(2).map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-t border-white/10 pt-8 gap-4 items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">© {year} Усі права захищені.</p>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Назви та логотипи Telegram, Instagram, WhatsApp, TikTok, Messenger та ManyChat — торговельні знаки відповідних власників.
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <a href="#" className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
              <iconify-icon icon="solar:letter-linear" width="18" height="18" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
