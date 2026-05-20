import { Link } from 'react-router-dom';
import LegalLayout from '../../../components/legal/LegalLayout';
import LegalSection from '../../../components/legal/LegalSection';
import { legalMeta } from '../../../data/legal-meta';

const tocItems = [
  { id: 'parties', label: 'Parties and acceptance' },
  { id: 'definitions', label: 'Definitions' },
  { id: 'services', label: 'Description of services' },
  { id: 'order-process', label: 'Order and payment' },
  { id: 'delivery', label: 'Timing and delivery' },
  { id: 'client-obligations', label: 'Client obligations' },
  { id: 'our-obligations', label: 'Our obligations' },
  { id: 'ip-rights', label: 'Intellectual property' },
  { id: 'warranties', label: 'Warranties' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'termination', label: 'Termination' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'force-majeure', label: 'Force majeure' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'disputes', label: 'Dispute resolution' },
  { id: 'changes', label: 'Changes to terms' },
  { id: 'misc', label: 'Miscellaneous' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsOfServiceEN() {
  const { entity, brandName, contactEmail, legalEmail, policies, governingLaw } = legalMeta;

  return (
    <LegalLayout
      title="Terms of Service"
      eyebrow="Terms of Service · Service agreement"
      effective={policies.terms.effective}
      version={policies.terms.version}
      tocItems={tocItems}
    >
      <p>
        These Terms are a public offer (adhesion contract) we propose for you to accept.
        Payment of any service package (Foundation / Generator / Premium) means you have
        read, understood, and fully accepted these Terms. If you don’t agree with any
        provision — please don’t pay for the service.
      </p>

      <div className="legal-callout">
        <p>
          <strong>The short version:</strong> we provide a clearly defined service package
          for a fixed price and within a fixed timeline. You get the work described in the
          package you chose. We guarantee delivery at agreed quality; you commit to
          providing everything needed (access, materials, feedback). Disputes resolved first
          through good-faith negotiation, then through the courts of your jurisdiction (for
          consumers) or per the contract (for businesses). Full version below.
        </p>
      </div>

      <LegalSection id="parties" title="1. Parties and acceptance">
        <p>
          <strong>Service provider (hereinafter "we", "us", "{brandName}"):</strong>{' '}
          {entity.publicName}.
        </p>
        {entity.registrationStatus === 'pending' && (
          <div className="legal-callout">
            <p>
              <strong>Current operator status:</strong> the site is run by an individual as
              a private project; business registration is in progress. Once registered, this
              section will be updated with full corporate details:{' '}
              <span className="legal-placeholder">{entity.legalName}</span>, registration
              number <span className="legal-placeholder">{entity.registrationId}</span>,
              registered address{' '}
              <span className="legal-placeholder">{entity.registeredAddress}</span>. This
              does not affect the validity of the Parties’ obligations under this contract.
            </p>
          </div>
        )}
        <p>
          <strong>Client (hereinafter "you"):</strong> an adult individual, sole proprietor,
          or legal entity that accepts these Terms by paying for the services.
        </p>
        <p>You confirm that:</p>
        <ul>
          <li>you are at least <strong>18 years old</strong>;</li>
          <li>you have legal capacity to enter into contracts in your jurisdiction;</li>
          <li>all data you provide at order is true and current;</li>
          <li>accepting these Terms is <strong>legally equivalent to signing a written contract</strong> in your jurisdiction.</li>
        </ul>
      </LegalSection>

      <LegalSection id="definitions" title="2. Definitions">
        <ul>
          <li><strong>"Services"</strong> — work described in your chosen package: strategy, product packaging, funnel setup, chatbot, payments, analytics, ads (depending on the package).</li>
          <li><strong>"Package"</strong> — one of three options: Foundation ($1,247) · Generator ($2,490) · Premium ($4,247). The exact scope of each package is locked at the time of your payment.</li>
          <li><strong>"Discovery call"</strong> — a free 30-minute online meeting before work begins, where we clarify your goals, product format, and target audience.</li>
          <li><strong>"Deadline"</strong> — the final date for delivery, counted from <em>work start</em> (not from payment — see 5.2).</li>
          <li><strong>"Work start"</strong> — the date when you have provided all source materials and access (brief, content, accounts to messengers / ad cabinets). The deadline doesn’t begin counting until this point.</li>
          <li><strong>"Result"</strong> — a ready-to-use system as described in the package.</li>
        </ul>
      </LegalSection>

      <LegalSection id="services" title="3. Description of services">
        <p>
          We provide services to create and configure automated sales funnels for experts
          and online-product founders. The exact scope is defined by the package chosen at
          payment time:
        </p>

        <p><strong>3.1. Foundation package ($1,247)</strong></p>
        <ul>
          <li>Strategy and positioning.</li>
          <li>One-page landing site.</li>
          <li>Lead magnet (PDF / checklist / quiz).</li>
          <li>Lead-capture chatbot on the chosen channel (Instagram / WhatsApp / LinkedIn).</li>
        </ul>
        <p>Delivery time: 5–7 business days from work start. Support period: 30 days.</p>

        <p><strong>3.2. Generator package ($2,490)</strong></p>
        <ul>
          <li>Everything in Foundation.</li>
          <li>Full product packaging (course / intensive structure).</li>
          <li>Lead magnet + tripwire at the top of funnel.</li>
          <li>Warm-up bot with custom logic.</li>
          <li>Payments, auto-delivery of the product, funnel analytics.</li>
        </ul>
        <p>Delivery time: 14 business days from work start. Support period: 30 days.</p>

        <p><strong>3.3. Premium package ($4,247)</strong></p>
        <ul>
          <li>Everything in Generator.</li>
          <li>Paid ads — full campaign (creatives, copy, launch) on one platform by agreement.</li>
          <li>Precise audience targeting (narrow segment testing).</li>
          <li>End-to-end analytics — from first click to repeat sale.</li>
        </ul>
        <p>Delivery time: 14–21 business days from work start. Support period: 30 days.</p>

        <p>
          <strong>3.4. NOT included</strong> (available separately by agreement): video
          content for shoots involving you; main course content (we do packaging, not
          content); legal advice; ongoing monthly retainers after the package is complete.
        </p>
        <p>
          <strong>3.5. Ad budget</strong> (Premium) is paid by you separately into the ad
          platform account (Meta / Google), and is not included in the package price.
        </p>
      </LegalSection>

      <LegalSection id="order-process" title="4. Order and payment">
        <ol>
          <li>
            <strong>Inquiry.</strong> You submit an inquiry through the site form or
            messenger bot.
          </li>
          <li>
            <strong>Discovery call.</strong> We run a free 30-minute strategy call where we
            clarify scope, agree on the package, and roughly schedule the start.
          </li>
          <li>
            <strong>Invoice.</strong> After agreement, we send an invoice by email.
          </li>
          <li>
            <strong>Payment.</strong> Paid in full before work begins. Currently, this site
            has no integrated payment processor — the specific payment method (bank transfer,
            Wise, Stripe invoice, etc.) is chosen individually after the discovery call.
            Settlement currency: USD (or equivalent in the client’s currency at the chosen
            payment method’s rate).
          </li>
          <li>
            <strong>Work start.</strong> After payment, you receive a brief form. As soon as
            you complete the brief and provide access — work begins.
          </li>
        </ol>
        <p>
          <strong>4.6. Installments / partial payment:</strong> not currently offered.
          Payment is one-time, in full.
        </p>
        <p>
          <strong>4.7. Closing documents:</strong> upon completion, we provide a work
          acceptance certificate or equivalent document in your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="delivery" title="5. Timing and delivery">
        <p>
          <strong>5.1. Calendar vs business time.</strong> All timelines stated in the
          packages are in <em>business</em> days (Mon–Fri, excluding generally recognized
          public holidays). Business day: 10:00 to 19:00 Eastern European Time (UTC+2/+3).
        </p>
        <p>
          <strong>5.2. Deadline trigger.</strong> The deadline begins counting not from
          payment, but from <strong>work start</strong> (see Section 2). If you haven’t
          provided the brief or access, the deadline is paused.
        </p>
        <p>
          <strong>5.3. Stage delivery.</strong> Work is delivered in stages: we send
          intermediate results, you give feedback. If feedback is not received within{' '}
          <strong>3 business days</strong>, the stage is considered accepted by default.
        </p>
        <p>
          <strong>5.4. Revisions.</strong> Within the package — unlimited small revisions;
          conceptual scope changes (target audience pivot, strategy rewrite after approval)
          are negotiated separately and may require additional payment.
        </p>
        <p>
          <strong>5.5. Delays on your side.</strong> If you don’t send materials or
          feedback for 14 days from request — we reserve the right to pause the project.
          After 30 days of silence without response — the project may be closed with partial
          refund for unfinished stages (see <Link to="/en/refund">Refund Policy</Link>).
        </p>
        <p>
          <strong>5.6. Delays on our side.</strong> If we miss the deadline due to our fault
          (not force majeure) and the delay exceeds <strong>5 business days</strong>, you
          have the right to:
        </p>
        <ul>
          <li>receive compensation of 5% of package price for each full week of delay (max 20% of package price);</li>
          <li>or, if delay exceeds 30 business days — terminate the contract and receive full refund for unfinished stages.</li>
        </ul>
      </LegalSection>

      <LegalSection id="client-obligations" title="6. Client obligations">
        <p>You commit to:</p>
        <ul>
          <li>pay for services in full before work begins;</li>
          <li>provide truthful, complete information about your product, target audience, and goals;</li>
          <li>provide <strong>access</strong> needed for the work: messenger profiles, ad cabinets (Premium), domain hosting (if applicable);</li>
          <li>provide feedback within reasonable timeframes (see 5.3);</li>
          <li>not use our services for unlawful activity, disinformation, fraud, MLM, financial pyramids, or illegal products/services;</li>
          <li>comply with the rules of the platforms your funnel runs on (Meta, Google, Telegram, etc.);</li>
          <li>independently bear responsibility for your product’s legality, content quality, and fulfillment of your obligations to your end-customers.</li>
        </ul>
      </LegalSection>

      <LegalSection id="our-obligations" title="7. Our obligations">
        <p>We commit to:</p>
        <ul>
          <li>complete the work as described in the chosen package;</li>
          <li>meet the agreed timelines (or compensate if missed, see 5.6);</li>
          <li>provide 30-day post-launch support — at no additional charge, covering minor defect fixes and Q&A;</li>
          <li>maintain confidentiality of your information (see Section 11);</li>
          <li>process your personal data per <Link to="/en/privacy">Privacy Policy</Link>.</li>
        </ul>
      </LegalSection>

      <LegalSection id="ip-rights" title="8. Intellectual property">
        <p>
          <strong>8.1. The finished result — yours.</strong> Exclusive rights to the unique
          materials created for you under the package (landing copy, design, bot
          configuration, ad creatives) transfer to you{' '}
          <strong>upon full payment and signing of the acceptance document</strong>.
        </p>
        <p>
          <strong>8.2. Our methodology — ours.</strong> The general methodology, templates,
          processes, and know-how we use to perform the work{' '}
          <strong>remain our intellectual property</strong>. You receive the deliverable
          but not the right to resell our methodology as your own product.
        </p>
        <p>
          <strong>8.3. Third-party materials.</strong> If licensed third-party materials are
          used in the work (stock images, fonts, plugins) — we obtain a license for use in
          your project, but you must comply with its terms after handover.
        </p>
        <p>
          <strong>8.4. Portfolio rights.</strong> We reserve the right to publish the fact of
          our collaboration in our portfolio / marketing materials, including screenshots of
          results and public metrics (without disclosing confidential details). You may
          opt out by notifying us in writing before or during the work.
        </p>
        <p>
          <strong>8.5. Logos and trademarks.</strong> All logos, names, and trademarks
          referenced (Telegram, Instagram, Meta, Google, etc.) belong to their respective
          owners. We integrate with their APIs under standard terms of use.
        </p>
      </LegalSection>

      <LegalSection id="warranties" title="9. Warranties">
        <p>
          <strong>9.1. Quality warranty.</strong> We warrant that the delivered work matches
          the description of the chosen package and your approved brief. Any defects found
          within 30 days of handover we fix free of charge.
        </p>
        <p>
          <strong>9.2. What we DO NOT warrant.</strong> We warrant <em>delivery of work</em>,
          but <strong>not</strong> a specific financial result for your business (sales,
          conversion, ROI), because those depend on factors outside our control: product
          quality, price, market demand, your activity in customer comms, brand reputation,
          seasonality, competition.
        </p>
        <p>
          <strong>9.3. Forecasts</strong> we cite in communications (case studies, numbers)
          are <em>actual</em> results of other clients in <em>specific</em> conditions. They
          are <strong>not</strong> a promise of equivalent result for you.
        </p>
        <p>
          <strong>9.4. Technical warranty.</strong> We warrant the system works correctly at
          handover. Continued operability depends on platform providers (Telegram, Meta,
          your hosting), pricing changes, API updates — for which we don’t bear
          responsibility.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limitation of liability">
        <p>
          <strong>10.1.</strong> To the extent permitted by law, our maximum aggregate
          liability for any claims (contract, tort, or otherwise) is limited to{' '}
          <strong>the amount you actually paid us for the relevant service package</strong>.
        </p>
        <p>
          <strong>10.2.</strong> We are not liable for:
        </p>
        <ul>
          <li>indirect, consequential, punitive, or exemplary damages;</li>
          <li>lost profits, lost sales, loss of business reputation;</li>
          <li>actions or inactions of third parties (platforms, ad networks, payment processors);</li>
          <li>damages caused by your own failure to perform obligations (e.g. not providing access);</li>
          <li>problems arising from platform regulation changes after handover.</li>
        </ul>
        <p>
          <strong>10.3. Exceptions.</strong> No limitation in this Section excludes our
          liability for: willful misconduct or gross negligence; data-protection violations
          that caused harm; other cases where law doesn’t allow limitation.
        </p>
        <p>
          <strong>10.4. Indemnification.</strong> You agree to indemnify us against damages
          arising from your breach of these Terms, misuse of services, or violation of
          third-party rights.
        </p>
      </LegalSection>

      <LegalSection id="confidentiality" title="11. Confidentiality">
        <p>
          Both parties commit to keep secret any non-public information received from the
          other party during the collaboration: financial data, strategies, client lists,
          personal information, technical specifics.
        </p>
        <p>
          The confidentiality obligation lasts <strong>3 years</strong> after work
          completion. Exception — public facts of collaboration in portfolio (see 8.4) and
          cases where disclosure is required by law.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="12. Termination">
        <p>
          <strong>12.1. By the client:</strong> you may terminate in writing (email to{' '}
          <a href={`mailto:${legalEmail}`}>{legalEmail}</a>) at any time. Refund terms — per{' '}
          <Link to="/en/refund">Refund Policy</Link>.
        </p>
        <p>
          <strong>12.2. By the service provider:</strong> we may terminate (refunding
          unused payment) in cases where:
        </p>
        <ul>
          <li>you go silent for 30 days without good cause;</li>
          <li>you breach these Terms (e.g. submit materials for an unlawful product);</li>
          <li>our collaboration becomes impossible due to insurmountable disagreements on vision;</li>
          <li>you display aggressive / abusive behavior in communications.</li>
        </ul>
        <p>
          <strong>12.3. Automatic project closure:</strong> if within{' '}
          <strong>60 days</strong> of payment you haven’t provided brief/access for work
          start and don’t respond to our requests — the project is closed, money refunded
          minus a <strong>20% administrative fee</strong>.
        </p>
      </LegalSection>

      <LegalSection id="refunds" title="13. Refunds">
        <p>
          Refund terms are detailed in our{' '}
          <strong><Link to="/en/refund">Refund Policy</Link></strong>, which is part of
          this contract. In short:
        </p>
        <ul>
          <li>14-day full refund if work has not started;</li>
          <li>pro-rated refund for unfinished stages if work is partially done;</li>
          <li>no refund for fully completed and accepted stages.</li>
        </ul>
      </LegalSection>

      <LegalSection id="force-majeure" title="14. Force majeure">
        <p>
          Both parties are excused from liability for non-performance or improper
          performance of obligations if caused by force-majeure events: war, occupation,
          natural disasters, pandemic, large-scale power or internet outages, cyberattacks,
          government restrictions, regulator actions on platforms (ad cabinet block, API
          shutdown, etc.), if such events were not the fault of the affected party.
        </p>
        <p>
          The party facing force majeure must notify the other within <strong>7 days</strong>.
          If force majeure lasts more than <strong>60 days</strong> — either party may
          terminate the contract with pro-rated refund.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="15. Governing law">
        {governingLaw.status === 'pending' ? (
          <p>
            Because the operator is in the process of business registration, these Terms are
            governed by <strong>the mandatory consumer-protection rules of the client’s
            country of habitual residence</strong>, and in all other respects by the general
            principles of good faith and fairness. After the operator’s registration is
            complete, this clause will be updated with a specific jurisdiction, and the new
            version will apply only to contracts entered into after the update.
          </p>
        ) : (
          <p>
            These Terms are governed by the law of{' '}
            <strong><span className="legal-placeholder">{governingLaw.jurisdiction}</span></strong>,
            without regard to conflict-of-law rules.
          </p>
        )}
        <p>
          <strong>Regardless of registration status</strong>, if you are a consumer in the
          EU, UK, Canada, USA, or another jurisdiction whose law grants you mandatory
          consumer rights (right of withdrawal, consumer protection, GDPR rights, etc.) —
          those rights are <em>fully preserved</em> and cannot be limited by these Terms.
        </p>
      </LegalSection>

      <LegalSection id="disputes" title="16. Dispute resolution">
        <p>
          <strong>16.1. Negotiation first.</strong> All disputes are first addressed through
          good-faith negotiation. The aggrieved party sends a written demand to the other.
          The other party must respond within <strong>14 days</strong>.
        </p>
        <p>
          <strong>16.2. Mediation.</strong> If negotiation doesn’t produce a result — the
          parties engage an independent mediator (by mutual agreement).
        </p>
        <p>
          <strong>16.3. Court / arbitration.</strong>{' '}
          {governingLaw.status === 'pending' ? (
            <>
              Because the operator is mid-registration, a specific arbitration body is not
              yet fixed. If pre-trial mechanisms (16.1–16.2) fail, disputes are heard by the
              competent court at the consumer’s place of habitual residence (for consumer
              clients) or by mutual agreement of the parties.
            </>
          ) : (
            <>
              If mediation fails — the dispute is referred to{' '}
              <span className="legal-placeholder">{governingLaw.arbitrationVenue}</span>.
              Proceedings language: {governingLaw.languageOfProceedings}.
            </>
          )}
        </p>
        <p>
          <strong>16.4. EU/UK consumers</strong> have an additional right to use the online
          dispute resolution (ODR) platform:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>{' '}
          — without losing other rights.
        </p>
        <p>
          <strong>16.5. US consumers</strong> retain all rights under state and federal
          consumer-protection law, including those of the FTC Act, regardless of any
          contractual choice of forum.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="17. Changes to these Terms">
        <p>
          We may update these Terms. The <strong>version in effect</strong> for existing
          contracts is the one that applied at the time of payment. <strong>Updates</strong>{' '}
          apply only to new orders.
        </p>
        <p>
          If you’re subscribed to marketing emails and we make material changes — we’ll
          notify you at least 14 days in advance.
        </p>
      </LegalSection>

      <LegalSection id="misc" title="18. Miscellaneous">
        <p>
          <strong>18.1. Entire agreement.</strong> These Terms together with{' '}
          <Link to="/en/privacy">Privacy Policy</Link>,{' '}
          <Link to="/en/cookies">Cookies Policy</Link>, and{' '}
          <Link to="/en/refund">Refund Policy</Link> constitute the entire agreement between
          us.
        </p>
        <p>
          <strong>18.2. Severability.</strong> If any provision of these Terms is held
          invalid by a court / arbitrator, the rest remains in full force.
        </p>
        <p>
          <strong>18.3. No waiver.</strong> If we don’t exercise a right under this
          contract, it doesn’t mean we waive it in the future.
        </p>
        <p>
          <strong>18.4. Assignment.</strong> You may not assign your rights under this
          contract to a third party without our written consent. We may assign our rights
          in case of business reorganization/sale — provided your rights are fully preserved.
        </p>
        <p>
          <strong>18.5. Notices.</strong> All official notices — by email to the client’s
          stated address, or to <a href={`mailto:${legalEmail}`}>{legalEmail}</a> for the
          service provider.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="19. Contact information">
        <p>
          Questions about these Terms: <a href={`mailto:${legalEmail}`}>{legalEmail}</a>.
        </p>
        <p>
          General questions: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
        <p>
          Full contact info: <Link to="/en/contacts">/en/contacts</Link>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
