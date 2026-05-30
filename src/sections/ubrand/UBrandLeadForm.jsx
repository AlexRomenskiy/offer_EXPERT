import { useState } from 'react';
import { UBRAND_DISCOUNT_PCT, isDiscountActive } from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe', required: true },
  { name: 'occupation', label: 'What you do', type: 'text', placeholder: 'Nutritionist · coach · founder…', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 555 123 4567', required: true },
  { name: 'link', label: 'Website or social page', type: 'text', placeholder: 'instagram.com/you', required: false },
];

const EMPTY = { name: '', occupation: '', phone: '', link: '', company: '' };

export default function UBrandLeadForm() {
  const discount = isDiscountActive();
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, page: 'craftlions.ca/u-brand' }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="book" className="relative py-20 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(23,90,232,0.10), transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[560px] mx-auto anim-trigger">
        {/* Header */}
        <div className="text-center mb-8">
          <p
            className="text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-4 anim-fade-up"
            style={{ fontFamily: monoStack }}
          >
            Reserve your spot
          </p>
          <h2
            className="text-[1.9rem] sm:text-[2.4rem] text-slate-950 font-light mb-4 anim-fade-up"
            style={{ fontFamily: fontStack, lineHeight: 1.16, transitionDelay: '0.06s' }}
          >
            Hold your place{' '}
            <span className="italic-accent">today</span>
          </h2>
          <p
            className="text-[0.98rem] leading-[1.6] text-slate-600 anim-fade-up"
            style={{ fontFamily: fontStack, transitionDelay: '0.12s' }}
          >
            {discount
              ? `No payment now — just leave your contact. Booking today locks your −${UBRAND_DISCOUNT_PCT}%, and we reach out personally to plan your build.`
              : 'No payment now — just leave your contact and we’ll reach out personally to plan your build.'}
          </p>
        </div>

        {status === 'done' ? (
          <div
            className="relative p-8 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/60 text-center anim-fade-up"
            style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.16)' }}
          >
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)' }}
            >
              <iconify-icon icon="solar:check-circle-line-duotone" width="28" height="28" style={{ color: '#fff' }} />
            </div>
            <h3 className="text-[1.3rem] text-slate-900 font-semibold mb-2" style={{ fontFamily: fontStack }}>
              Your spot is reserved
            </h3>
            <p className="text-[0.95rem] text-slate-600 leading-[1.6]" style={{ fontFamily: fontStack }}>
              We’ve got your details — Tania &amp; Olexandr will reach out personally,
              very soon. {discount ? `Your −${UBRAND_DISCOUNT_PCT}% is locked.` : ''}
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="relative p-6 sm:p-8 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/60 anim-fade-up"
            style={{ boxShadow: '0 28px 80px rgba(148,163,184,0.16)', transitionDelay: '0.16s' }}
          >
            {/* Honeypot — hidden from humans */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={values.company}
              onChange={update('company')}
              className="hidden"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-4">
              {FIELDS.map((f) => (
                <label key={f.name} className="block">
                  <span
                    className="block text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                    style={{ fontFamily: monoStack }}
                  >
                    {f.label}
                    {f.required && <span className="text-[#175ae8]"> *</span>}
                  </span>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={values[f.name]}
                    onChange={update(f.name)}
                    className="w-full h-12 px-4 rounded-xl bg-white/80 border border-slate-200 text-slate-900 text-[0.95rem] placeholder:text-slate-400 focus:outline-none focus:border-[#175ae8] focus:ring-2 focus:ring-[#175ae8]/20 transition"
                    style={{ fontFamily: fontStack }}
                  />
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-full text-white text-[0.98rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                fontFamily: fontStack,
                background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
                boxShadow: '0 14px 38px rgba(23,90,232,0.30), inset 0 1px 0 rgba(255,255,255,0.20)',
              }}
            >
              {status === 'sending' ? 'Sending…' : 'Reserve my spot'}
              {status !== 'sending' && <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" />}
            </button>

            {status === 'error' && (
              <p className="text-center text-[0.85rem] text-red-500 mt-3" style={{ fontFamily: fontStack }}>
                Something went wrong. Please try again in a moment.
              </p>
            )}

            <p
              className="text-center text-[11px] text-slate-400 mt-4 tracking-[0.02em]"
              style={{ fontFamily: monoStack }}
            >
              No payment required · we reach out personally
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
