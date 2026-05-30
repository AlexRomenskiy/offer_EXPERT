import { useEffect, useState } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';
import { UBRAND_DISCOUNT_PCT, UBRAND_DEADLINE, UBRAND_DEADLINE_LABEL } from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";

function getRemaining() {
  const diff = new Date(UBRAND_DEADLINE).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[64px] sm:w-[76px] h-[64px] sm:h-[76px] rounded-2xl flex items-center justify-center bg-white/8 border border-white/15"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <span
          className="text-[1.7rem] sm:text-[2.1rem] font-light text-white tabular-nums leading-none"
          style={{ fontFamily: fontStack }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span
        className="mt-2 text-[10px] tracking-[0.18em] uppercase text-white/55"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function UBrandUrgencySection() {
  const [remaining, setRemaining] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-12 lg:py-16 px-6 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-[980px] mx-auto anim-trigger">
        <div
          className="relative overflow-hidden rounded-[28px] p-8 sm:p-10 anim-fade-up"
          style={{
            background: 'linear-gradient(135deg, #020f2d 0%, #0a1a3d 55%, #0c2a6b 100%)',
            boxShadow: '0 28px 80px rgba(2,15,45,0.30)',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-10 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgba(251,146,60,0.22), transparent 65%)' }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.40)' }}
            >
              <iconify-icon icon="solar:gift-linear" width="15" height="15" style={{ color: '#fb923c' }} />
              <span
                className="text-[11px] tracking-[0.10em] uppercase text-orange-200"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Today’s room only
              </span>
            </div>

            <h2
              className="text-[1.7rem] sm:text-[2.2rem] text-white font-light mb-3"
              style={{ fontFamily: fontStack, lineHeight: 1.2 }}
            >
              <span className="font-medium">−{UBRAND_DISCOUNT_PCT}% on any package</span>{' '}
              <span className="text-white/70">— if you decide fast</span>
            </h2>
            <p
              className="max-w-[34rem] text-[0.95rem] leading-[1.6] text-slate-300/85 mb-7"
              style={{ fontFamily: fontStack }}
            >
              Everyone from today’s talk gets {UBRAND_DISCOUNT_PCT}% off — but only if
              you book your call before {UBRAND_DEADLINE_LABEL}. After that, standard pricing.
            </p>

            {remaining ? (
              <div className="flex items-center gap-3 sm:gap-4 mb-8">
                <Unit value={remaining.days} label="Days" />
                <Unit value={remaining.hours} label="Hrs" />
                <Unit value={remaining.minutes} label="Min" />
                <Unit value={remaining.seconds} label="Sec" />
              </div>
            ) : (
              <p className="text-orange-200/80 text-sm mb-8" style={{ fontFamily: fontStack }}>
                The event bonus window has closed — book a call and let’s talk anyway.
              </p>
            )}

            <a
              href={BOOKING_URL_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-white text-[0.95rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
              style={{
                fontFamily: fontStack,
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                boxShadow: '0 14px 38px rgba(249,115,22,0.34), inset 0 1px 0 rgba(255,255,255,0.20)',
              }}
            >
              Lock my −{UBRAND_DISCOUNT_PCT}%
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
