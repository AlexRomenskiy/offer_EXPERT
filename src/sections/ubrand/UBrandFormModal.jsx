import { createContext, useContext, useState, useEffect } from 'react';
import { UBRAND_DISCOUNT_PCT, isDiscountActive } from '../../config/ubrand';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

// Context lets any CTA on the page open the lead form as a popup.
const FormCtx = createContext({ open: () => {} });
export const useUBrandForm = () => useContext(FormCtx);

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe', required: true },
  { name: 'occupation', label: 'What you do', type: 'text', placeholder: 'Nutritionist · coach · founder…', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 555 123 4567', required: true },
  { name: 'link', label: 'Website or social page', type: 'text', placeholder: 'instagram.com/you', required: false },
];

const EMPTY = { name: '', occupation: '', phone: '', link: '', company: '' };

function LeadForm() {
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
        body: JSON.stringify({ ...values, page: 'www.craftlions.ca/u-brand' }),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="text-center py-4">
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
          We’ve got your details — Tania &amp; Olexandr will reach out personally, very soon.
          {discount ? ` Your −${UBRAND_DISCOUNT_PCT}% is locked.` : ''}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-6">
        <p className="text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-3" style={{ fontFamily: monoStack }}>
          Reserve your spot
        </p>
        <h3 className="text-[1.5rem] sm:text-[1.7rem] text-slate-950 font-light mb-2" style={{ fontFamily: fontStack }}>
          Hold your place
        </h3>
        <p className="text-[0.92rem] leading-[1.55] text-slate-600" style={{ fontFamily: fontStack }}>
          {discount
            ? `No payment now — just leave your contact. Booking now locks your −${UBRAND_DISCOUNT_PCT}%.`
            : 'No payment now — just leave your contact and we’ll reach out personally.'}
        </p>
      </div>

      <form onSubmit={submit}>
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

        <div className="flex flex-col gap-3.5">
          {FIELDS.map((f) => (
            <label key={f.name} className="block">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-500 mb-1.5" style={{ fontFamily: monoStack }}>
                {f.label}
                {f.required && <span className="text-[#175ae8]"> *</span>}
              </span>
              <input
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name]}
                onChange={update(f.name)}
                className="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-[0.95rem] placeholder:text-slate-400 focus:outline-none focus:border-[#175ae8] focus:ring-2 focus:ring-[#175ae8]/20 transition"
                style={{ fontFamily: fontStack }}
              />
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full mt-5 inline-flex h-[52px] items-center justify-center gap-2 rounded-full text-white text-[0.98rem] font-medium transition-all hover:translate-y-[-1px] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
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

        <p className="text-center text-[11px] text-slate-400 mt-4 tracking-[0.02em]" style={{ fontFamily: monoStack }}>
          No payment required · we reach out personally
        </p>
      </form>
    </>
  );
}

export function UBrandFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <FormCtx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-full max-w-[460px] max-h-[92vh] overflow-y-auto rounded-[28px] bg-white p-6 sm:p-8"
            style={{ boxShadow: '0 40px 100px rgba(2,15,45,0.40)' }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <iconify-icon icon="solar:close-circle-linear" width="20" height="20" style={{ color: '#475569' }} />
            </button>
            <LeadForm />
          </div>
        </div>
      )}
    </FormCtx.Provider>
  );
}
