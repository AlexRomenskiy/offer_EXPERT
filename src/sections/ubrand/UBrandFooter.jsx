import { Link } from 'react-router-dom';

const fontStack = "'Manrope', sans-serif";

const legalLinks = [
  { label: 'Privacy', to: '/en/privacy' },
  { label: 'Terms', to: '/en/terms' },
  { label: 'Refund', to: '/en/refund' },
  { label: 'Cookies', to: '/en/cookies' },
  { label: 'Contacts', to: '/en/contacts' },
];

export default function UBrandFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-8 lg:px-12 py-8 border-t border-slate-200/60">
      <div
        className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500"
        style={{ fontFamily: fontStack }}
      >
        <div className="flex items-center gap-2.5">
          <img src="/logo/mark-on-light.png" alt="Craft Lions" className="w-6 h-6 object-contain" />
          <span className="text-[12.5px]">© {year} Craft Lions · U-Brand</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px]">
          {legalLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-slate-800 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
