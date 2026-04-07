const year = new Date().getFullYear();

const links = [
  { label: 'Про мене', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Розбір', href: '#final-cta' },
];

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 pt-16 pb-10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="md:max-w-sm">
            <span className="text-lg font-heading font-medium text-slate-900 tracking-tight uppercase">LOGO</span>
            <p className="mt-4 text-slate-500 leading-relaxed text-sm font-light">
              Допомагаю експертам перетворити знання на автоматизовану систему продажів, яка працює 24/7.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Футер">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-light">
            © {year} Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
