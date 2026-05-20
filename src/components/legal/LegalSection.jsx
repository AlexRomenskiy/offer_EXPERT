const fontStack = "'Manrope', sans-serif";

/**
 * One section inside a legal page.
 * Renders id-anchored H2 + body, in line with `.legal-prose` styling.
 */
export default function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="mb-12 lg:mb-14 scroll-mt-24">
      <h2
        className="text-[1.35rem] lg:text-[1.55rem] tracking-[-0.01em] text-slate-950 font-semibold mb-4"
        style={{ fontFamily: fontStack }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-[0.95rem] lg:text-[0.98rem] leading-[1.7] text-slate-700">
        {children}
      </div>
    </section>
  );
}
