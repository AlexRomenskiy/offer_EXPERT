import { BOOKING_URL_EN } from '../../config/booking';
import { UBRAND_DISCOUNT_PCT, UBRAND_DEADLINE_LABEL, isDiscountActive } from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";

export default function UBrandFinalCTA() {
  const discount = isDiscountActive();
  return (
    <section className="relative py-20 lg:py-28 px-6 md:px-8 lg:px-12">
      <div className="relative z-10 max-w-[760px] mx-auto text-center anim-trigger">
        <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

        <p
          className="text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-5 anim-fade-up"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Ready when you are
        </p>

        <h2
          className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem] text-slate-950 font-light mb-5 anim-fade-up"
          style={{ fontFamily: fontStack, lineHeight: 1.16, transitionDelay: '0.08s' }}
        >
          Let’s build your{' '}
          <span className="italic-accent">U-Brand</span>
        </h2>

        <p
          className="max-w-[32rem] mx-auto text-[1rem] leading-[1.6] text-slate-600 mb-8 anim-fade-up"
          style={{ fontFamily: fontStack, transitionDelay: '0.14s' }}
        >
          You don’t have to do it alone. One free 30-minute strategy call — we’ll map
          your fastest path from showing up to getting booked
          {discount ? `, and lock your −${UBRAND_DISCOUNT_PCT}% if you’re in by ${UBRAND_DEADLINE_LABEL}.` : '.'}
        </p>

        <div className="anim-fade-up" style={{ transitionDelay: '0.2s' }}>
          <a
            href={BOOKING_URL_EN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[58px] items-center justify-center gap-2 rounded-full px-10 text-white text-[0.98rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98]"
            style={{
              fontFamily: fontStack,
              background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
              boxShadow: '0 18px 44px rgba(23,90,232,0.32), inset 0 1px 0 rgba(255,255,255,0.20)',
            }}
          >
            Book your strategy call
            <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" />
          </a>
        </div>

        <div className="flex items-center justify-center mt-10">
          <img src="/logo/horizontal-on-light.svg" alt="Craft Lions" className="h-7 w-auto opacity-70" />
        </div>
      </div>
    </section>
  );
}
