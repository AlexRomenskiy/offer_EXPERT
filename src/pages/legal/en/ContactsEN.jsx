import { Link } from 'react-router-dom';
import LegalLayout from '../../../components/legal/LegalLayout';
import LegalSection from '../../../components/legal/LegalSection';
import { legalMeta } from '../../../data/legal-meta';

const tocItems = [
  { id: 'entity', label: 'Operator info' },
  { id: 'addresses', label: 'Contact channels' },
  { id: 'specialized', label: 'Specialized inquiries' },
  { id: 'hours', label: 'Working hours' },
  { id: 'complaints', label: 'How to file a complaint' },
  { id: 'regulators', label: 'Regulatory bodies' },
];

export default function ContactsEN() {
  const { entity, contactEmail, legalEmail, dpoEmail, refundEmail, brandName } = legalMeta;

  return (
    <LegalLayout
      title="Contacts & Legal Info"
      eyebrow="Contacts · Legal info"
      tocItems={tocItems}
    >
      <p>
        Full contact and legal information about {brandName}. For most questions, write to
        the general email — we’ll forward to the right channel.
      </p>

      <LegalSection id="entity" title="1. Site operator">
        {entity.registrationStatus === 'pending' && (
          <div className="legal-callout">
            <p>
              <strong>Current status:</strong> the {brandName} site is currently operated by
              an individual as a private project preparing for formal business registration.
              All legal documents (Privacy / Terms / Refund) are in force and binding —
              however full legal entity details will appear in this section after
              registration is complete.
            </p>
          </div>
        )}

        <div className="rounded-2xl border border-slate-200/70 bg-white/55 p-5 backdrop-blur-sm">
          <ul className="list-none p-0 m-0 space-y-2.5">
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Brand
              </span>
              {brandName}
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Operator
              </span>
              {entity.publicName}
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Legal name (post-registration)
              </span>
              <span className="legal-placeholder">{entity.legalName}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Registration number
              </span>
              <span className="legal-placeholder">{entity.registrationId}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Registered address
              </span>
              <span className="legal-placeholder">{entity.registeredAddress}</span>
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500 block mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Country of registration
              </span>
              <span className="legal-placeholder">{entity.country}</span>
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="addresses" title="2. Contact channels">
        <p><strong>General email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
        <p>
          This is a universal channel — write here for any question. If your topic is
          clearly about a specific area (privacy, legal, refund), use the specialized
          address (see Section 3) to speed things up.
        </p>
      </LegalSection>

      <LegalSection id="specialized" title="3. Specialized inquiries">
        <p><strong>3.1. Privacy / Data Protection</strong></p>
        <p>
          Requests about personal data, exercising rights under GDPR / CCPA / PIPEDA,
          processing questions:{' '}
          <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a> with subject <strong>"Privacy Request"</strong>.
        </p>
        <p>
          Response time: up to <strong>30 calendar days</strong> (per GDPR Art. 12(3)).
        </p>

        <p><strong>3.2. Legal — contract and legal questions</strong></p>
        <p>
          Questions about <Link to="/en/terms">Terms of Service</Link>, instructions from
          lawyers, court notifications:{' '}
          <a href={`mailto:${legalEmail}`}>{legalEmail}</a> with subject <strong>"Legal"</strong>.
        </p>

        <p><strong>3.3. Refunds</strong></p>
        <p>
          Refund requests:{' '}
          <a href={`mailto:${refundEmail}`}>{refundEmail}</a> with subject <strong>"Refund Request"</strong>.
          Process details — in <Link to="/en/refund">Refund Policy</Link>.
        </p>
        <p>
          Response time: up to <strong>3 business days</strong>.
        </p>

        <p><strong>3.4. Media / Press</strong></p>
        <p>
          Interviews, guest posts, quoting:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with subject <strong>"Press"</strong>.
        </p>

        <p><strong>3.5. Partnerships / Collaborations</strong></p>
        <p>
          Partnership proposals, joint projects, referral programs:{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with subject <strong>"Partnership"</strong>.
        </p>
      </LegalSection>

      <LegalSection id="hours" title="4. Working hours">
        <p>
          <strong>Monday – Friday: 10:00 – 19:00</strong> Eastern European Time (UTC+2/+3
          with summer time).
        </p>
        <p>
          On weekends and generally recognized public holidays we typically don’t respond.
          Urgent inquiries about data security — prioritized regardless of time.
        </p>
        <p>
          <strong>Response time</strong> on general email — up to 24 business hours on a
          weekday.
        </p>
      </LegalSection>

      <LegalSection id="complaints" title="5. How to file a complaint">
        <p>
          If you have a complaint about the work, team behavior, or a violation on our side:
        </p>
        <ol>
          <li>
            <strong>Write to us first</strong> at{' '}
            <a href={`mailto:${legalEmail}`}>{legalEmail}</a> with subject{' '}
            <strong>"Complaint"</strong>. Describe the situation, attach screenshots /
            evidence. We respond within <strong>5 business days</strong>.
          </li>
          <li>
            <strong>If our response doesn’t satisfy both of us</strong> — we move to
            mediation (<Link to="/en/terms">Terms</Link> §16.2).
          </li>
          <li>
            <strong>If mediation doesn’t help</strong> — arbitration / court per Terms §16.3.
          </li>
          <li>
            <strong>In parallel</strong> you may always contact the relevant regulatory body
            (see Section 6 below) — this doesn’t limit your rights.
          </li>
        </ol>
      </LegalSection>

      <LegalSection id="regulators" title="6. Regulatory bodies (external channels)">
        <p>
          If you believe we’ve violated your rights, besides contacting us directly, you may
          contact independent regulators:
        </p>

        <p><strong>6.1. European Union</strong></p>
        <ul>
          <li>
            <strong>EDPB (European Data Protection Board)</strong> — list of national authorities:{' '}
            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>
          </li>
          <li>
            <strong>Online Dispute Resolution Platform</strong> (EU consumers):{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>
          </li>
        </ul>

        <p><strong>6.2. United Kingdom</strong></p>
        <ul>
          <li>
            <strong>Information Commissioner’s Office (ICO)</strong>:{' '}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
          </li>
        </ul>

        <p><strong>6.3. United States — California</strong></p>
        <ul>
          <li>
            <strong>California Privacy Protection Agency (CPPA)</strong>:{' '}
            <a href="https://cppa.ca.gov" target="_blank" rel="noopener noreferrer">cppa.ca.gov</a>
          </li>
          <li>
            <strong>California Attorney General</strong> (CCPA enforcement):{' '}
            <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer">oag.ca.gov/privacy/ccpa</a>
          </li>
        </ul>

        <p><strong>6.4. United States — federal</strong></p>
        <ul>
          <li>
            <strong>Federal Trade Commission (FTC)</strong>:{' '}
            <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a>
          </li>
        </ul>

        <p><strong>6.5. Canada</strong></p>
        <ul>
          <li>
            <strong>Office of the Privacy Commissioner of Canada (PIPEDA)</strong>:{' '}
            <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">priv.gc.ca</a>
          </li>
          <li>
            <strong>Canadian Anti-Spam Legislation enforcement (CRTC)</strong>:{' '}
            <a href="https://crtc.gc.ca/eng/internet/anti.htm" target="_blank" rel="noopener noreferrer">crtc.gc.ca</a>
          </li>
          <li>
            <strong>Competition Bureau Canada</strong>:{' '}
            <a href="https://competitionbureau.gc.ca" target="_blank" rel="noopener noreferrer">competitionbureau.gc.ca</a>
          </li>
        </ul>

        <p><strong>6.6. Ukraine</strong></p>
        <ul>
          <li>
            <strong>Ukrainian Parliament Commissioner for Human Rights</strong> (personal data):{' '}
            <a href="https://www.ombudsman.gov.ua/" target="_blank" rel="noopener noreferrer">ombudsman.gov.ua</a>
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
