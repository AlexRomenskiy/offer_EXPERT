const year = new Date().getFullYear();

const links = [
  { label: 'Для кого', href: '#pain-points' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Кейс', href: '#case-study' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="z-10 w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
        <div className="flex flex-col gap-4">
          {links.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-normal">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {links.slice(2).map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-normal">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 col-span-1 lg:col-span-2 text-right">
          <p className="text-sm text-slate-500 font-normal">
            Допомагаю експертам перетворити знання на автоматизовану систему продажів.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border-slate-200 border-t pt-8 gap-4 items-center justify-between">
        <p className="text-slate-400 text-xs font-normal">© {year} Усі права захищені.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">
            <iconify-icon icon="solar:letter-linear" width="18" height="18" />
          </a>
        </div>
      </div>
    </footer>
  );
}
