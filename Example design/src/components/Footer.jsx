import React from 'react'

const footerLinks = {
  Product: ['Platform', 'AIOps', 'Automation'],
  Resources: ['Documentation', 'API Reference', 'Case Studies'],
  Company: ['About Us', 'Careers', 'Security'],
}

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 pt-20 pb-10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group">
              <span className="text-lg font-medium text-slate-900 tracking-tight uppercase">Orion</span>
            </a>
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm text-sm font-light">
              An AI-powered operational intelligence platform helping engineering teams maintain critical system uptime through automation and insights.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <div key={title} className={`md:col-span-2 ${i === 0 ? 'md:col-start-7' : ''}`}>
              <h4 className="font-medium text-slate-900 mb-6 tracking-tight">{title}</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-blue-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-light">© 2024 Orion Intelligence. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Twitter">
              <iconify-icon icon="solar:twitter-linear" width="20" height="20"></iconify-icon>
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="GitHub">
              <iconify-icon icon="solar:code-circle-linear" width="20" height="20"></iconify-icon>
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="LinkedIn">
              <iconify-icon icon="solar:link-circle-linear" width="20" height="20"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}