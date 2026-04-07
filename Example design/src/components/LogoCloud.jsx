import React from 'react'

const logos = [
  {
    name: 'Acme Corp',
    path: 'M12 2L1 21h22L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z',
  },
  {
    name: 'DataFlow',
    path: 'M12 2l10 6-10 6-10-6 10-6zm0 15.5l-10-6v4.5l10 6 10-6v-4.5l-10 6z',
  },
  {
    name: 'Nexus AI',
    path: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15H9v10h2V7zm4 0h-2v10h2V7z',
  },
  {
    name: 'CloudSync',
    path: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z',
  },
  {
    name: 'Sentinel',
    path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
  },
  {
    name: 'Quantum',
    path: 'M12 2L2 12l10 10 10-10L12 2zm0 4.8l5.2 5.2-5.2 5.2L6.8 12 12 6.8z',
  },
]

function LogoItem({ name, path }) {
  return (
    <div className="flex items-center gap-3 text-slate-400 opacity-60 transition-all duration-300 hover:opacity-100 hover:text-slate-800 cursor-pointer">
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
        <path d={path}></path>
      </svg>
      <span className="text-2xl font-semibold tracking-tight">{name}</span>
    </div>
  )
}

export default function LogoCloud() {
  return (
    <section className="flex flex-col w-full max-w-[1400px] border-slate-200/30 border-t mx-auto pt-20 pb-20 items-center justify-center overflow-hidden">
      <p className="text-sm text-slate-400 font-semibold tracking-wide uppercase mb-12 px-6 text-center">
        Trusted by engineering teams at scale
      </p>

      <div
        className="w-full relative flex items-center overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
          {/* First Set */}
          <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
            {logos.map((logo, i) => (
              <LogoItem key={`a-${i}`} name={logo.name} path={logo.path} />
            ))}
          </div>
          {/* Second Set (Duplicate) */}
          <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
            {logos.map((logo, i) => (
              <LogoItem key={`b-${i}`} name={logo.name} path={logo.path} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}