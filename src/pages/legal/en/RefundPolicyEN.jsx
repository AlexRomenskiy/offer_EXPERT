import { Link } from 'react-router-dom';
import LegalLayout from '../../../components/legal/LegalLayout';
import LegalSection from '../../../components/legal/LegalSection';
import { legalMeta } from '../../../data/legal-meta';

const tocItems = [
  { id: 'principle', label: 'Core principle' },
  { id: 'window', label: '14-day full-refund window' },
  { id: 'pro-rated', label: 'Pro-rated refund' },
  { id: 'package-rules', label: 'Package-specific rules' },
  { id: 'non-refundable', label: 'What is not refundable' },
  { id: 'process', label: 'How to request a refund' },
  { id: 'timeline', label: 'Processing timeline' },
  { id: 'chargebacks', label: 'Chargebacks' },
  { id: 'currency-fees', label: 'Currency and bank fees' },
  { id: 'eu-consumers', label: 'EU / UK / US consumer rights' },
  { id: 'contact', label: 'Contact' },
];

export default function RefundPolicyEN() {
  const { refund, refundEmail, policies, brandName } = legalMeta;

  return (
    <LegalLayout
      title="Refund Policy"
      eyebrow="Refund Policy · Fair rules"
      effective={policies.refund.effective}
      version={policies.refund.version}
      tocItems={tocItems}
    >
      <p>
        We take pride in our work and want you to get the full result you paid for. But if
        something goes wrong, you have clear refund mechanisms. This page explains when and
        how you can get your money back, and where we can’t refund (due to the nature of
        our work).
      </p>

      <div className="legal-callout">
        <p>
          <strong>The short version:</strong> you have <strong>{refund.windowDays} days</strong>{' '}
          from payment to get a full refund, <em>if we haven’t started the work yet</em>. If
          work is partially done — pro-rated refund for unfinished stages. If the package is
          fully complete and accepted — no refund possible.
        </p>
      </div>

      <LegalSection id="principle" title="1. Core principle">
        <p>Our Refund Policy is built on three simple rules:</p>
        <ol>
          <li>
            <strong>Haven’t started the work</strong> → 100% refund within 14 days.
          </li>
          <li>
            <strong>Work partially done</strong> → pro-rated refund for unfinished stages
            (minus spent ad budgets, third-party licenses, and other non-recoverable costs).
          </li>
          <li>
            <strong>Work fully completed and accepted</strong> → no refund (exception —
            material defects we couldn’t fix).
          </li>
        </ol>
        <p>
          We apply these rules <strong>in good faith</strong> — not looking for reasons to
          decline. If your situation falls in a "gray zone" — we resolve in your favor.
        </p>
      </LegalSection>

      <LegalSection id="window" title="2. 14-day full-refund window">
        <p>
          If within <strong>{refund.windowDays} calendar days</strong> of payment you decide
          to abandon the service — we refund <strong>100% of the paid amount</strong> (no
          deductions), <em>provided that</em>:
        </p>
        <ul>
          <li>we have not yet started active work on your project (no discovery call with approved strategy, no production handoffs);</li>
          <li>you have not received unique materials from us (strategic recommendations, ready funnel elements, etc.).</li>
        </ul>
        <p>
          If both conditions are met — refund proceeds without questions and without
          requiring a reason.
        </p>
        <p>
          If work has partially begun — see Section 3 (pro-rated refund).
        </p>
      </LegalSection>

      <LegalSection id="pro-rated" title="3. Pro-rated refund">
        <p>
          If work is partially done, we refund for <strong>unfinished stages</strong>. For
          clarity, each package is broken down into clearly defined stages with their
          corresponding percentage:
        </p>

        <p><strong>3.1. Foundation package ($1,247)</strong></p>
        <ul>
          <li>Strategy + positioning — <strong>30%</strong></li>
          <li>Landing site — <strong>30%</strong></li>
          <li>Lead magnet — <strong>15%</strong></li>
          <li>Chatbot — <strong>25%</strong></li>
        </ul>

        <p><strong>3.2. Generator package ($2,490)</strong></p>
        <ul>
          <li>Strategy + positioning — <strong>15%</strong></li>
          <li>Product packaging (course/intensive structure) — <strong>20%</strong></li>
          <li>Landing + magnet + tripwire — <strong>20%</strong></li>
          <li>Warm-up bot with custom logic — <strong>25%</strong></li>
          <li>Payments + auto-delivery + analytics — <strong>20%</strong></li>
        </ul>

        <p><strong>3.3. Premium package ($4,247)</strong></p>
        <ul>
          <li>Everything in Generator — <strong>60%</strong> (distributed pro-rata per 3.2 if needed)</li>
          <li>Ad creatives + copy preparation — <strong>15%</strong></li>
          <li>Ad campaign launch + audience targeting — <strong>15%</strong></li>
          <li>End-to-end analytics setup — <strong>10%</strong></li>
        </ul>

        <p>
          <strong>3.4.</strong> A stage is considered "accepted" when you confirm it in
          writing (including email or messenger) or fail to provide feedback within 3
          business days (per <Link to="/en/terms">Terms</Link> § 5.3).
        </p>
        <p>
          <strong>3.5. Deductions.</strong> In a pro-rated refund, we deduct:
        </p>
        <ul>
          <li>the value of completed and accepted stages per the percentages above;</li>
          <li>actually incurred non-recoverable costs: licenses, plugins, stock content, designer fees, tool subscriptions — when documented;</li>
          <li>ad budget you spent (for Premium) — that money is on the ad platform, not our payment;</li>
          <li>payment processor fees (typically 2.9–4%) if the processor doesn’t reverse them on refund.</li>
        </ul>
      </LegalSection>

      <LegalSection id="package-rules" title="4. Package-specific rules">
        <p>
          <strong>4.1. Foundation</strong> — fastest package (5–7 days). We typically begin
          work within 2–3 business days of payment. If you request a refund right after
          payment, there’s a high chance work hasn’t started (full refund applies).
        </p>
        <p>
          <strong>4.2. Generator</strong> — core package (14 days). This is where pro-rated
          refund is most often relevant, since work proceeds in stages.
        </p>
        <p>
          <strong>4.3. Premium</strong> — the most complex package with paid ads. Your{' '}
          <strong>ad budget</strong> is paid directly into the ad platform (Meta / Google) —
          those funds are <strong>not included</strong> in our package price, and we don’t
          refund them (returning those is between you and the platform).
        </p>
        <p>
          <strong>4.4. Premium guarantee</strong> (for Premium clients): if after 90 days
          post-launch of funnel + ads, you haven’t received a single inquiry/sale — we
          rebuild the ad campaign for free and re-audit the funnel until result. Details of
          this guarantee are in your individual addendum agreement.
        </p>
      </LegalSection>

      <LegalSection id="non-refundable" title="5. What is not refundable">
        <p>Refund is not issued in the following cases:</p>
        <ul>
          <li>
            <strong>Package fully complete and accepted.</strong> Acceptance = signing of
            acceptance document or no objections within 3 business days of delivery.
          </li>
          <li>
            <strong>14-day window expired</strong> while work hadn’t started <em>due to your
            fault</em> (you didn’t provide brief, access, or attend discovery call). Here{' '}
            <Link to="/en/terms">Terms</Link> §12.3 applies: automatic closure after 60 days
            with 20% admin fee deduction.
          </li>
          <li>
            <strong>Change in your life or business plan</strong> after work is fully done
            (e.g. "changed my mind about launching the product").
          </li>
          <li>
            <strong>Dissatisfaction with commercial result</strong> (low inquiries, low
            conversion) — we guarantee work delivery per package, not financial result (see{' '}
            <Link to="/en/terms">Terms</Link> §9.2). Exception — Premium guarantee (§4.4).
          </li>
          <li>
            <strong>Third-party interference:</strong> Telegram/Meta account blocked through
            your fault, hosting suspended for non-payment, legal issues with your product,
            etc.
          </li>
          <li>
            <strong>Your breach</strong> of these Terms or{' '}
            <Link to="/en/terms">Terms of Service</Link>: e.g. using services for unlawful
            activity.
          </li>
          <li>
            <strong>Spent ad budget</strong> on your ad accounts (not refunded by us; ask
            the ad platform).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="process" title="6. How to request a refund">
        <p>The process is simple and takes 1–2 business days until we send a decision:</p>
        <ol>
          <li>
            <strong>Email us</strong> at <a href={`mailto:${refundEmail}`}>{refundEmail}</a>{' '}
            with subject <strong>"Refund Request"</strong>.
          </li>
          <li>
            <strong>In the email, include:</strong>
            <ul>
              <li>name and email used for payment;</li>
              <li>payment date;</li>
              <li>chosen package;</li>
              <li>briefly — reason for refund (does <em>not</em> affect our decision, but helps us improve).</li>
            </ul>
          </li>
          <li>
            <strong>We respond within 3 business days.</strong> The response confirms refund
            amount (full or pro-rated per §3).
          </li>
          <li>
            <strong>Funds appear in your account</strong> within 5–14 business days of our
            confirmation (depends on your bank and payment processor).
          </li>
        </ol>
        <p>
          <strong>6.5. Identity verification.</strong> If the request comes from a different
          email than payment, we’ll ask for additional identity verification (photo of ID
          or other method). This is for your protection — so no one else can refund your
          payment.
        </p>
      </LegalSection>

      <LegalSection id="timeline" title="7. Processing timeline">
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="text-left py-2 pr-4 text-[12px] uppercase tracking-[0.18em] text-slate-500 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Stage</th>
              <th className="text-left py-2 text-[12px] uppercase tracking-[0.18em] text-slate-500 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Time</th>
            </tr>
          </thead>
          <tbody className="text-[0.95rem] text-slate-700">
            <tr className="border-b border-slate-200/70">
              <td className="py-2 pr-4">Review of your refund request</td>
              <td className="py-2">up to 3 business days</td>
            </tr>
            <tr className="border-b border-slate-200/70">
              <td className="py-2 pr-4">Refund initiated by us</td>
              <td className="py-2">same day after confirmation</td>
            </tr>
            <tr className="border-b border-slate-200/70">
              <td className="py-2 pr-4">Funds arrive in your account</td>
              <td className="py-2">5–14 business days</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">International transfers (Wise, bank)</td>
              <td className="py-2">up to 21 business days</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">
          If funds don’t arrive within the stated timeframe — first check with your bank
          (international transfers sometimes take longer). If nothing turns up — let us
          know, we’ll provide a PSP transaction ID to trace.
        </p>
      </LegalSection>

      <LegalSection id="chargebacks" title="8. Chargebacks (bank disputes)">
        <p>
          A <strong>chargeback</strong> is a refund mechanism where you go directly to your
          bank / card issuer, bypassing us.
        </p>
        <p>
          <strong>Please don’t use chargebacks as a first option.</strong> If you have a
          problem — write to us first: we’ll resolve faster and without bureaucracy.
          Chargebacks create significant costs for us (processor fines, account-block risk)
          — and those costs fall on you if the claim is unfounded.
        </p>
        <p>
          <strong>8.1.</strong> If you initiate a chargeback on a fully completed package,
          we’ll provide the bank with all proof of work done (briefs, correspondence, stage
          deliveries). In most cases we win such chargebacks.
        </p>
        <p>
          <strong>8.2.</strong> If a chargeback is won by the bank in your favor on
          unfounded grounds — we reserve the right to file suit for compensation of actual
          damages (value of work performed, processor fines, legal fees).
        </p>
        <p>
          <strong>8.3. Chargeback filing window</strong> depends on your bank — typically{' '}
          <strong>{refund.chargebackPolicyDays} days</strong> from payment. After this
          window, the only refund path is via our Refund Policy.
        </p>
      </LegalSection>

      <LegalSection id="currency-fees" title="9. Currency and bank fees">
        <p>
          <strong>9.1. Refund currency.</strong> We refund in the same currency we received
          payment in (typically USD). If your bank converted to your local currency at
          payment, it’ll convert back at refund — possibly at a different rate. Exchange
          differences are not compensated.
        </p>
        <p>
          <strong>9.2. Fees.</strong> Bank and payment-processor fees (typically 2.9–4% of
          amount) <strong>may be deducted</strong> from the refund if the processor doesn’t
          return them on refund. We always try to minimize these deductions.
        </p>
        <p>
          <strong>9.3. Crypto conversion.</strong> If you paid in cryptocurrency, refund is
          issued in USD-equivalent at refund-time rate, to a bank card or in cryptocurrency
          per your choice.
        </p>
      </LegalSection>

      <LegalSection id="eu-consumers" title="10. Additional rights for EU / UK / US consumers">
        <p>
          If you are a consumer in the EU, UK, Switzerland, USA, or Canada, and you use our
          services <strong>not for business purposes</strong>, you have additional rights:
        </p>

        <p><strong>10.1. EU / UK — Directive 2011/83/EU on Consumer Rights:</strong></p>
        <ul>
          <li>
            <strong>14-day right of withdrawal</strong> without giving reasons — <em>fully
            covered</em> by our 14-day window (Section 2).
          </li>
          <li>
            <strong>Digital-content exception:</strong> if you expressly consent to begin
            services before the 14-day window expires and acknowledge losing the
            withdrawal right (Art. 16(m) Directive) — this right may be limited. We always
            request this consent explicitly in the brief.
          </li>
          <li>
            <strong>Complaints</strong> to your country’s consumer authorities or via the
            EU ODR platform:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            .
          </li>
        </ul>

        <p><strong>10.2. US — FTC Act and state consumer-protection laws:</strong></p>
        <ul>
          <li>You retain all rights under the FTC Act regardless of any contractual provisions.</li>
          <li>State-specific protections (California’s CLRA, etc.) apply where applicable.</li>
        </ul>

        <p><strong>10.3. Canada — provincial consumer-protection acts:</strong></p>
        <ul>
          <li>Provincial laws (Ontario Consumer Protection Act, BC BPCPA, Quebec CPA, etc.) apply alongside this Policy.</li>
        </ul>

        <p>
          In all cases — mandatory consumer-protection rules of your country/state prevail
          over this Policy where they grant stronger protection.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="11. Contact">
        <p>
          Refund questions:{' '}
          <a href={`mailto:${refundEmail}`}>{refundEmail}</a> with subject{' '}
          <strong>"Refund Request"</strong>.
        </p>
        <p>
          If you have feedback — what we could have done better, what went wrong in your
          case — we welcome it. It won’t affect the refund decision, but it helps us make{' '}
          {brandName} better.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
