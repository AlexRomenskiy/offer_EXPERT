import { useState } from 'react';
import { BOOKING_URL_EN } from '../../config/booking';

const fontStack = "'Manrope', sans-serif";
const monoStack = "'JetBrains Mono', monospace";

const faqs = [
  {
    q: 'How are you different from an agency that takes a cut of revenue? Why a flat fee?',
    a: 'We’re not producers. A fixed price, full ownership of files and campaigns, zero % of revenue. You don’t have to share the growth you’re holding yourself. You pay for the system — from then on it works only for you.',
  },
  {
    q: 'I already tried an automated funnel and burned my budget. Any guarantees?',
    a: 'Three criteria: a fixed timeline in the contract, full ownership of files and campaigns from day 1, 30 days of post-launch support. In the Premium package — an ad guarantee: if within 7 days we don’t hit the target cost per lead, I redo the creatives at my own expense.',
  },
  {
    q: 'What if I don’t have a large audience yet?',
    a: 'Foundation at $1,247 is exactly for this — an entry point for testing even with a few hundred followers. Don’t scale empty space: first the structure, then real numbers, then an upgrade to Generator.',
  },
  {
    q: 'I’m not a technical person. How do I manage this?',
    a: 'After launch — instructions so you don’t depend on me daily, plus 30 days of tech support from me. What I DON’T do: course content, content plans, lesson copy — that’s your expertise. Need a copywriter — I’ll recommend one.',
  },
  {
    q: 'What about support and costs after launch?',
    a: 'The first 30 days of support are included in every package: edits, tech support, answers. After that — $375/mo for Foundation, $625/mo for Generator and $875/mo for Premium. If you separately need an ad campaign — we’ll discuss it personally based on your needs.',
  },
];

export default function FAQSectionEN() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const toggleMobile = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
    <section
      id="faq"
      className="relative pt-20 pb-12 lg:py-24 px-6 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative max-w-3xl mb-12 lg:mb-14 anim-trigger text-center md:text-left">
          <span aria-hidden="true" className="header-decor-dots header-decor-dots--center" />

          <div
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-6 anim-fade-up"
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: '0.05s' }}
          >
            <span className="h-px w-6 bg-slate-300" />
            Details · before the call
            <span className="h-px w-6 bg-slate-300" />
          </div>

          <h2
            className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.45rem] tracking-[-0.02em] text-slate-950 font-light mb-5"
            style={{ fontFamily: fontStack, lineHeight: 1.2 }}
          >
            <span className="anim-wrap" style={{ display: 'block' }}>
              <span className="anim-line font-medium" style={{ transitionDelay: '0.10s' }}>
                Questions we get
              </span>
            </span>
            <span className="anim-italic" style={{ display: 'block', transitionDelay: '0.20s' }}>
              <span className="italic-accent">
                most often
              </span>
            </span>
          </h2>
        </div>

        {/* === Desktop — 2-col docs (right panel sticky, left scrolls) === */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 anim-trigger">

          <nav className="md:col-span-5">
            <ul className="flex flex-col gap-1">
              {faqs.map((faq, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <li
                    key={idx}
                    className="anim-fade-up"
                    style={{ transitionDelay: `${0.04 + idx * 0.025}s` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`w-full text-left pl-5 pr-3 py-3 rounded-r-lg border-l-2 transition-all duration-300 ${
                        isActive
                          ? 'border-[#175ae8] bg-[#175ae8]/[0.07] text-slate-950'
                          : 'border-slate-200/60 text-slate-600 hover:text-slate-950 hover:border-slate-400/70 hover:bg-white/35'
                      }`}
                    >
                      <span
                        className={`block text-[10px] uppercase tracking-[0.18em] mb-0.5 transition-colors ${
                          isActive ? 'text-brand-gradient' : 'text-slate-400'
                        }`}
                        style={{ fontFamily: monoStack }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`block text-[0.95rem] leading-snug tracking-[-0.005em] ${
                          isActive ? 'font-medium' : 'font-normal'
                        }`}
                        style={{ fontFamily: fontStack }}
                      >
                        {faq.q}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="md:col-span-7">
            <div
              className="md:sticky md:top-28 relative rounded-[28px] bg-white/40 backdrop-blur-xl border border-white/60 p-8 lg:p-10 anim-fade-up"
              style={{
                transitionDelay: '0.10s',
                boxShadow:
                  '0 18px 50px rgba(148,163,184,0.12), 0 6px 18px rgba(15,23,42,0.04)',
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_55%)] pointer-events-none rounded-[28px]"
              />
              <div className="relative z-10" key={activeIdx}>
                <p
                  className="text-brand-gradient text-[10px] uppercase tracking-[0.22em] mb-4"
                  style={{ fontFamily: monoStack }}
                >
                  {String(activeIdx + 1).padStart(2, '0')} · Answer
                </p>
                <h3
                  className="text-[1.3rem] lg:text-[1.5rem] font-medium text-slate-950 tracking-[-0.02em] leading-tight mb-5"
                  style={{ fontFamily: fontStack }}
                >
                  {faqs[activeIdx].q}
                </h3>
                <p
                  className="text-[1rem] leading-[1.7] text-slate-700"
                  style={{ fontFamily: fontStack }}
                >
                  {faqs[activeIdx].a}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Mobile — hairline accordion === */}
        <div className="md:hidden anim-trigger border-t border-slate-300/55">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-slate-300/55 anim-fade-up"
                style={{ transitionDelay: `${0.04 + idx * 0.025}s` }}
              >
                <button
                  type="button"
                  onClick={() => toggleMobile(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left"
                >
                  <span
                    className={`text-[1rem] leading-snug ${
                      isOpen
                        ? 'text-slate-950 font-medium'
                        : 'text-slate-700 font-normal'
                    }`}
                    style={{ fontFamily: fontStack }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 w-6 h-6 inline-flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'text-[#175ae8]' : 'text-slate-400'
                    }`}
                  >
                    <iconify-icon
                      icon={isOpen ? 'solar:minus-linear' : 'solar:plus-linear'}
                      width="18"
                      height="18"
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p
                    className="text-[0.95rem] leading-[1.7] text-slate-600 pb-6 pr-6"
                    style={{ fontFamily: fontStack }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div
          className="mt-10 text-center anim-fade-up"
          style={{ transitionDelay: `${0.05 + faqs.length * 0.04}s`, fontFamily: fontStack }}
        >
          <p className="text-[0.95rem] text-slate-600">
            Didn’t find your answer?{' '}
            <a
              href={BOOKING_URL_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#175ae8] font-medium hover:text-[#0e47c8] transition-colors underline decoration-[#175ae8]/30 underline-offset-4 hover:decoration-[#175ae8]"
            >
              Ask on the call
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
