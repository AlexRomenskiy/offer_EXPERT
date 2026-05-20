import { Link } from 'react-router-dom';
import LegalLayout from '../../../components/legal/LegalLayout';
import LegalSection from '../../../components/legal/LegalSection';
import { legalMeta } from '../../../data/legal-meta';

const tocItems = [
  { id: 'controller', label: 'Who we are (data controller)' },
  { id: 'data-we-collect', label: 'What we collect' },
  { id: 'how-we-use', label: 'How we use it' },
  { id: 'legal-basis', label: 'Legal basis' },
  { id: 'sharing', label: 'Who we share with' },
  { id: 'international', label: 'International transfers' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'marketing', label: 'Marketing communications' },
  { id: 'your-rights', label: 'Your rights (GDPR / CCPA / PIPEDA)' },
  { id: 'security', label: 'How we protect your data' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact' },
];

export default function PrivacyPolicyEN() {
  const { entity, contactEmail, dpoEmail, policies, processors, dataRetention } = legalMeta;

  return (
    <LegalLayout
      title="Privacy Policy"
      eyebrow="Privacy · GDPR · CCPA · PIPEDA"
      effective={policies.privacy.effective}
      version={policies.privacy.version}
      tocItems={tocItems}
    >
      <p>
        This Policy explains what personal data we collect, why, how we use it, and what
        rights you have over it. We wrote it in plain English, without legal clichés — but
        it has full legal force and is built to align with{' '}
        <strong>GDPR (EU Regulation 2016/679)</strong>, <strong>UK GDPR</strong>,{' '}
        <strong>CCPA/CPRA (California, USA)</strong>, and{' '}
        <strong>PIPEDA (Canada)</strong>.
      </p>

      <div className="legal-callout">
        <p>
          <strong>The short version:</strong> we collect the minimum data we need to provide
          the service; we don’t sell your data to anyone; you can ask for access, correction,
          or full deletion at any time — write to{' '}
          <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a>.
        </p>
      </div>

      <LegalSection id="controller" title="1. Who we are (data controller)">
        <p>
          The controller of your personal data (the party that determines the purpose and
          means of processing) is <strong>{entity.publicName}</strong>.
        </p>
        {entity.registrationStatus === 'pending' && (
          <div className="legal-callout">
            <p>
              <strong>Current status:</strong> the operator is acting as an individual.
              Business registration (Sole Proprietorship / LLC / Corporation) is in progress.
              Once registration is complete, this Policy will be updated with full legal
              entity details, and we’ll notify all active clients.
            </p>
          </div>
        )}
        <ul>
          <li>
            <strong>Legal name (post-registration):</strong>{' '}
            <span className="legal-placeholder">{entity.legalName}</span>
          </li>
          <li>
            <strong>Registration number:</strong>{' '}
            <span className="legal-placeholder">{entity.registrationId}</span>
          </li>
          <li>
            <strong>Registered address:</strong>{' '}
            <span className="legal-placeholder">{entity.registeredAddress}</span>
          </li>
          <li>
            <strong>Privacy contact (DPO):</strong>{' '}
            <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a>
          </li>
        </ul>
        <p>
          Throughout this policy, "we", "us", and "our" refer to the controller above.
          "You" and "your" refer to you — a site visitor or client.
        </p>
      </LegalSection>

      <LegalSection id="data-we-collect" title="2. What we collect">
        <p>
          We collect only the data we need to provide the service or meet legal obligations.
          The categories:
        </p>

        <p><strong>2.1. Data you give us directly</strong></p>
        <ul>
          <li>
            <strong>Contact data from the inquiry form:</strong> name, email, phone, links to
            social profiles or website, brief description of your task.
          </li>
          <li>
            <strong>Chatbot data:</strong> messenger handle, user ID (Instagram / WhatsApp /
            LinkedIn / Messenger), answers to bot questions, chosen package.
          </li>
          <li>
            <strong>Project delivery data:</strong> materials you provide for the work
            (text content, images, credentials/access to your services, briefs).
          </li>
          <li>
            <strong>Payment data:</strong> at present, there is <em>no</em> integrated
            payment processor on this site. Payment is arranged individually after a free
            discovery call. We do not store payment-card data. Once a processor is connected
            in the future, this section will be updated and active clients notified.
          </li>
        </ul>

        <p><strong>2.2. Data collected automatically</strong></p>
        <ul>
          <li>
            <strong>Technical data:</strong> IP address, browser type, operating system,
            device type, visit timestamp, referrer URL.
          </li>
          <li>
            <strong>Interaction data:</strong> pages viewed, time on page, clicks —
            <em> only if you consent to analytics cookies</em>.
          </li>
          <li>
            <strong>Cookies:</strong> detailed in our{' '}
            <Link to="/en/cookies">Cookies Policy</Link>.
          </li>
        </ul>

        <p>
          We <strong>do not</strong> collect special categories of data (race/ethnicity,
          religious beliefs, health data, biometrics, etc.) unless you knowingly provide them
          in the context of a service delivery.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="3. How we use your data">
        <p>We use your data only for specific, defined purposes:</p>
        <ol>
          <li>
            <strong>Service delivery:</strong> contact you about your inquiry, run the
            discovery call, prepare and deliver your chosen package (Foundation / Generator /
            Premium), set up the funnel.
          </li>
          <li>
            <strong>Contract performance:</strong> issue invoices, process payment, deliver
            closing documents, grant product access.
          </li>
          <li>
            <strong>Communication:</strong> answer your questions, send deadline reminders,
            ship status notifications for your project.
          </li>
          <li>
            <strong>Marketing (only with your consent):</strong> send useful materials, case
            studies, announcements of new services. You can unsubscribe at any time via the
            link in any email or by writing to us.
          </li>
          <li>
            <strong>Analytics and product improvement:</strong> understand how people use the
            site so we can make it better. Only with your consent to analytics cookies, in
            anonymized form.
          </li>
          <li>
            <strong>Legal obligations:</strong> retain accounting records, respond to lawful
            requests from public authorities.
          </li>
        </ol>
      </LegalSection>

      <LegalSection id="legal-basis" title="4. Legal basis for processing (GDPR Art. 6)">
        <p>For each purpose, we rely on one of these legal bases:</p>
        <ul>
          <li>
            <strong>Contract (Art. 6(1)(b)):</strong> when you submit an inquiry, pay for a
            service, or start delivery — processing is necessary to perform the contract
            between us.
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a)):</strong> for marketing communications, analytics
            cookies, and marketing cookies. You may withdraw consent at any time.
          </li>
          <li>
            <strong>Legitimate interest (Art. 6(1)(f)):</strong> for basic site security,
            fraud prevention, and defending our rights in a dispute. We always weigh this
            interest against your rights.
          </li>
          <li>
            <strong>Legal obligation (Art. 6(1)(c)):</strong> for retention of accounting
            and tax records, as required by the laws of the operator’s jurisdiction (to be
            clarified after business registration).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="5. Who we share data with">
        <p>
          We <strong>do not sell</strong> your data. We share it only with trusted
          sub-processors who help us deliver the service, each of whom has signed a Data
          Processing Agreement (DPA) with us:
        </p>
        <ul>
          {processors.map((p, i) => (
            <li key={i}>
              <strong>{p.name}</strong> — {p.purpose} · storage region:{' '}
              {p.region.startsWith('[TODO') ? (
                <span className="legal-placeholder">{p.region}</span>
              ) : (
                p.region
              )}
              {p.dpa && !p.dpa.startsWith('[TODO') && (
                <> · <a href={p.dpa} target="_blank" rel="noopener noreferrer">DPA</a></>
              )}
              {p.status && p.status !== 'active' && (
                <> · <em>status: {p.status}</em></>
              )}
            </li>
          ))}
        </ul>
        <p>Beyond that, we may disclose your data to:</p>
        <ul>
          <li>
            <strong>Government authorities</strong> — if required by law, under a valid
            request with lawful basis.
          </li>
          <li>
            <strong>Legal advisors and auditors</strong> — where necessary to protect our
            rights, conduct an audit, or handle litigation.
          </li>
          <li>
            <strong>A successor in a business sale</strong> — if our business is ever sold
            or merged, your data may transfer to the acquirer along with this Policy.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="international" title="6. International data transfers">
        <p>
          Some of our sub-processors (e.g. Vercel, our hosting provider) physically store
          data outside the European Economic Area (EEA), primarily in the United States.
          This means your data may transfer to countries with different data-protection
          levels than the EU/UK.
        </p>
        <p>
          To ensure an adequate level of protection, we rely on{' '}
          <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European
          Commission, and other mechanisms under <strong>Chapter V of GDPR</strong>. Copies
          available on request to <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a>.
        </p>
        <p>
          For <strong>Canadian users (PIPEDA)</strong>: transfers outside Canada are covered
          by equivalent contractual protections. We treat all such transfers as if the data
          remained subject to Canadian privacy standards.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. How long we keep your data">
        <p>
          We keep your data only as long as necessary for the purpose it was collected for,
          or as the law requires:
        </p>
        <ul>
          <li>
            <strong>Client data and correspondence:</strong>{' '}
            {dataRetention.customerData} years after your last interaction — so we can re-engage,
            respond to a follow-up, or resolve a dispute.
          </li>
          <li>
            <strong>Accounting and payment records:</strong>{' '}
            {dataRetention.paymentRecords} years — as required by the tax law of the
            operator’s jurisdiction (to be clarified after business registration).
          </li>
          <li>
            <strong>Inquiries that didn’t become contracts:</strong> 12 months from last
            contact, then deleted.
          </li>
          <li>
            <strong>Marketing list:</strong> until you unsubscribe.
          </li>
          <li>
            <strong>Analytics logs:</strong> up to {dataRetention.analyticsLogs} months, in
            anonymized form.
          </li>
        </ul>
        <p>
          After the retention period, data is deleted or anonymized in a way that makes it
          impossible to link it back to a specific person.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="8. Cookies and similar technologies">
        <p>
          We use cookies and similar technologies (localStorage, pixel tags). Details on
          each category, its purpose, and retention — in our{' '}
          <Link to="/en/cookies">Cookies Policy</Link>.
        </p>
        <p>
          On your first visit, you’ll see a consent banner where you can choose which cookie
          categories you allow. You can change your choice at any time via the "Cookie
          settings" link in the footer.
        </p>
      </LegalSection>

      <LegalSection id="marketing" title="9. Marketing communications">
        <p>
          We send marketing emails (case studies, updates, useful materials){' '}
          <strong>only with your explicit consent</strong> (opt-in). If you subscribed —
          you can unsubscribe at any time:
        </p>
        <ul>
          <li>Click "Unsubscribe" at the bottom of any email from us.</li>
          <li>
            Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the subject
            "Unsubscribe" — we’ll process within 5 business days.
          </li>
        </ul>
        <p>
          <strong>Transactional emails</strong> (payment confirmations, work status, product
          access) are sent as part of contract performance and aren’t subject to opt-out
          while the contract is active.
        </p>
        <p>
          <strong>For Canadian recipients (CASL):</strong> we obtain express consent before
          sending commercial electronic messages, identify the sender clearly, and provide an
          unsubscribe mechanism in every message.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="10. Your rights">
        <p>
          Regardless of where you live, we guarantee the following rights over your personal
          data:
        </p>

        <p><strong>10.1. Rights under GDPR (EU / UK residents)</strong></p>
        <ul>
          <li><strong>Right of access</strong> (Art. 15) — get a copy of all your data we hold.</li>
          <li><strong>Right to rectification</strong> (Art. 16) — request correction of inaccurate or outdated data.</li>
          <li><strong>Right to erasure</strong> / "right to be forgotten" (Art. 17) — request deletion of your data.</li>
          <li><strong>Right to restriction</strong> of processing (Art. 18).</li>
          <li><strong>Right to portability</strong> (Art. 20) — receive your data in a machine-readable format.</li>
          <li><strong>Right to object</strong> to processing based on legitimate interest (Art. 21).</li>
          <li><strong>Right to withdraw consent</strong> at any time (Art. 7(3)).</li>
          <li><strong>Right to lodge a complaint</strong> with a supervisory authority (Art. 77) in your country.</li>
        </ul>

        <p><strong>10.2. Rights under CCPA/CPRA (California residents)</strong></p>
        <ul>
          <li><strong>Right to know</strong> what personal information we collect, from what sources, and for what purposes.</li>
          <li><strong>Right to delete</strong> your personal information.</li>
          <li><strong>Right to correct</strong> inaccurate information.</li>
          <li><strong>Right to opt out of sale or "sharing"</strong> of personal information — <em>we do not sell or share your data</em>, but the right still applies.</li>
          <li><strong>Right to limit use</strong> of sensitive personal information (CPRA).</li>
          <li><strong>Right of non-discrimination</strong> for exercising these rights.</li>
        </ul>

        <p><strong>10.3. Rights under PIPEDA (Canadian residents)</strong></p>
        <ul>
          <li><strong>Right of access</strong> to your personal information.</li>
          <li><strong>Right to challenge accuracy</strong> and have it corrected.</li>
          <li><strong>Right to withdraw consent</strong>, subject to legal or contractual restrictions.</li>
          <li><strong>Right to file a complaint</strong> with the Office of the Privacy Commissioner of Canada.</li>
        </ul>

        <p><strong>10.4. How to exercise your rights</strong></p>
        <p>
          Email us at <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a> with the subject
          "Privacy Request". We’ll respond within <strong>30 days</strong> (per GDPR) or
          sooner. We may need to verify your identity before fulfilling the request — to make
          sure it’s actually you sending it.
        </p>
        <p>
          Exercising your rights is free. Exception: if a request is clearly unfounded or
          excessively repetitive, we may charge a reasonable fee or decline.
        </p>
      </LegalSection>

      <LegalSection id="security" title="11. How we protect your data">
        <p>
          We use technical and organizational security measures proportionate to the risks:
        </p>
        <ul>
          <li><strong>Encryption in transit:</strong> all site traffic over HTTPS (TLS 1.2+).</li>
          <li><strong>Encryption at rest:</strong> backups and storage at Vercel and sub-processors — encrypted-at-rest.</li>
          <li><strong>Access control:</strong> data access limited to those who need it to do the work; two-factor authentication required on all admin accounts.</li>
          <li><strong>Regular backups</strong> and incident recovery plan.</li>
          <li><strong>Signed DPAs</strong> with all sub-processors.</li>
        </ul>
        <p>
          Despite all measures, no system is 100% secure. If a data incident creates a risk
          to you, we’ll notify you within <strong>72 hours</strong> (per GDPR Art. 33–34)
          and notify the relevant supervisory authorities.
        </p>
      </LegalSection>

      <LegalSection id="children" title="12. Children">
        <p>
          Our services are intended exclusively for adults (18+) and business operators. We
          do <strong>not knowingly collect</strong> personal data from individuals under 18.
          If you are a parent or guardian and believe your child has provided us data without
          your permission — email <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a> and we’ll
          delete the data immediately.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to this policy">
        <p>
          We may update this Policy over time — for example, when laws change, when we add
          new services, or when we onboard new sub-processors. The "Effective from" date at
          the top of the page always reflects the latest version.
        </p>
        <p>
          For <strong>material changes</strong> (e.g. new processing purposes, new categories
          of sub-processors, or changes in legal basis) we’ll email you at least{' '}
          <strong>14 days</strong> before they take effect. Cosmetic changes (wording
          improvements) we update without separate notice.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. How to contact us">
        <p>
          For any questions about this policy, your data processing, or exercising your
          rights:
        </p>
        <ul>
          <li><strong>General email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
          <li><strong>Privacy / DPO:</strong> <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a></li>
          <li>
            <strong>Postal address:</strong>{' '}
            <span className="legal-placeholder">{entity.registeredAddress}</span>
          </li>
        </ul>
        <p>
          If you believe we process your data in violation of the law, you may file a
          complaint with a supervisory authority:
        </p>
        <ul>
          <li>
            <strong>EU residents:</strong>{' '}
            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">
              your national data-protection authority
            </a>{' '}
            in the EU member state where you live.
          </li>
          <li>
            <strong>UK:</strong>{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">Information Commissioner’s Office (ICO)</a>.
          </li>
          <li>
            <strong>California:</strong>{' '}
            <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer">California Privacy Protection Agency (CPPA)</a>{' '}
            or the{' '}
            <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer">California Attorney General</a>.
          </li>
          <li>
            <strong>Canada:</strong>{' '}
            <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada</a>.
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
