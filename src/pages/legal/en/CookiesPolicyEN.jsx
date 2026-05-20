import { Link } from 'react-router-dom';
import LegalLayout from '../../../components/legal/LegalLayout';
import LegalSection from '../../../components/legal/LegalSection';
import { reopenCookiePreferences } from '../../../components/CookieConsentBanner';
import { legalMeta } from '../../../data/legal-meta';

const tocItems = [
  { id: 'what-are-cookies', label: 'What cookies are' },
  { id: 'categories', label: 'Categories we use' },
  { id: 'specific-cookies', label: 'Specific cookies and their duration' },
  { id: 'third-party', label: 'Third-party cookies' },
  { id: 'manage', label: 'How to manage cookies' },
  { id: 'do-not-track', label: 'Do Not Track and Global Privacy Control' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

export default function CookiesPolicyEN() {
  const { contactEmail, policies } = legalMeta;

  return (
    <LegalLayout
      title="Cookies Policy"
      eyebrow="Cookies · GDPR Art. 7 · ePrivacy · CCPA"
      effective={policies.cookies.effective}
      version={policies.cookies.version}
      tocItems={tocItems}
    >
      <p>
        This page explains which cookies and similar technologies we use, what they do, and
        how you can control your choice. It should be read alongside our{' '}
        <Link to="/en/privacy">Privacy Policy</Link>.
      </p>

      <div className="legal-callout">
        <p>
          <strong>Want to change your settings right now?</strong>{' '}
          <button
            type="button"
            onClick={reopenCookiePreferences}
            className="text-[#175ae8] underline hover:no-underline"
          >
            Open cookie panel →
          </button>
        </p>
      </div>

      <LegalSection id="what-are-cookies" title="1. What cookies are">
        <p>
          <strong>Cookies</strong> are small text files a website stores in your browser
          when you visit it. They let the site remember you on your next visit, store your
          settings, count visitors, and other things that improve the experience.
        </p>
        <p>
          On this site we also use <strong>similar technologies</strong>:{' '}
          <code>localStorage</code> (to remember your cookie choice), <code>sessionStorage</code>{' '}
          (for temporary data within a visit), and <strong>tracking pixels</strong> (for
          marketing purposes — only with your consent).
        </p>
      </LegalSection>

      <LegalSection id="categories" title="2. Cookie categories we use">
        <p>
          We split cookies into 4 categories. <strong>Only "Necessary"</strong> are enabled
          automatically — everything else requires your explicit consent.
        </p>

        <p><strong>2.1. Necessary — always active</strong></p>
        <p>
          Without these, the site can’t function correctly. They don’t require consent
          (legal basis — <em>legitimate interest</em>, Art. 6(1)(f) GDPR), because without
          them we can’t deliver the service you explicitly requested.
        </p>
        <ul>
          <li>Storing your cookie choice (otherwise we’d ask every visit).</li>
          <li>Security and fraud-prevention technical cookies.</li>
          <li>Server load-balancing.</li>
        </ul>

        <p><strong>2.2. Functional — with your consent</strong></p>
        <p>Remember your preferences so the site works more conveniently:</p>
        <ul>
          <li>Saved form-field values.</li>
          <li>Chosen language (UA / EN).</li>
          <li>UI state (open/closed FAQ, selected pricing tier).</li>
        </ul>

        <p><strong>2.3. Analytics — with your consent</strong></p>
        <p>
          Anonymous statistics about how people use the site. Help us understand what works
          and what doesn’t. Analytics cookies <em>don’t</em> identify you personally.
        </p>
        <ul>
          <li>Visit counts, unique visitors.</li>
          <li>Pages viewed, time spent.</li>
          <li>Referrer (where you came from).</li>
          <li>Device type (mobile / desktop).</li>
        </ul>

        <p><strong>2.4. Marketing — with your consent</strong></p>
        <p>
          Allow us to show you more relevant ads on other sites (retargeting) and measure ad
          campaign effectiveness.
        </p>
        <ul>
          <li>Meta Pixel (Facebook/Instagram ads).</li>
          <li>Google Ads conversion tracking.</li>
          <li>Other ad-tracking pixels as needed.</li>
        </ul>
        <p>
          If you haven’t given consent — we don’t set any marketing cookies.
        </p>
      </LegalSection>

      <LegalSection id="specific-cookies" title="3. Specific cookies and duration">
        <p>
          Below is the detailed list. We update it whenever we add new tools.
        </p>

        <p><strong>Category: Necessary</strong></p>
        <ul>
          <li>
            <code>craftlions_cookie_consent_v1</code> (<em>localStorage</em>) — stores your
            cookie choice. <strong>Duration:</strong> until you clear it or reset your
            browser settings. <strong>Provider:</strong> us.
          </li>
        </ul>

        <p><strong>Category: Functional</strong></p>
        <p>None currently set — will be added when functionality requiring them ships.</p>

        <p><strong>Category: Analytics</strong></p>
        <ul>
          <li>
            <code>_vercel_*</code> — anonymous Vercel Analytics (when active).{' '}
            <strong>Duration:</strong> session. <strong>Provider:</strong> Vercel Inc.
          </li>
          <li>
            <span className="legal-placeholder">[TODO: if Google Analytics is added — list _ga, _gid, etc.]</span>
          </li>
        </ul>

        <p><strong>Category: Marketing</strong></p>
        <ul>
          <li>
            <span className="legal-placeholder">[TODO: Meta Pixel — _fbp, fr — add after ad launch]</span>
          </li>
          <li>
            <span className="legal-placeholder">[TODO: Google Ads — _gcl_au — add after ad launch]</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="third-party" title="4. Third-party cookies">
        <p>
          Some cookies are set not by us, but by third parties whose services we use:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — hosting and CDN. May set service cookies for load
            balancing.{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Calendly</strong> — when you click "Book a strategy call", you’re
            redirected to Calendly, which sets its own cookies under{' '}
            <a href="https://calendly.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer">
              Calendly’s cookie policy
            </a>
            .
          </li>
          <li>
            <span className="legal-placeholder">[TODO: add Meta / Google Ads after launch]</span>
          </li>
        </ul>
        <p>
          We don’t directly control third-party cookies. To manage them, see those
          companies’ policies or your browser settings.
        </p>
      </LegalSection>

      <LegalSection id="manage" title="5. How to manage cookies">
        <p>You have several ways to manage cookies:</p>

        <p><strong>5.1. On our site</strong></p>
        <ul>
          <li>
            <strong>First-visit banner</strong> — pick "Accept all", "Necessary only", or
            "Customize" for detailed control.
          </li>
          <li>
            <strong>Change anytime:</strong>{' '}
            <button
              type="button"
              onClick={reopenCookiePreferences}
              className="text-[#175ae8] underline hover:no-underline"
            >
              open cookie panel
            </button>
            . There’s also a "Cookie settings" link in every page footer.
          </li>
        </ul>

        <p><strong>5.2. In your browser</strong></p>
        <p>
          Most browsers let you block cookies entirely or delete already-stored ones.
          Instructions:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari (macOS)</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>
          </li>
        </ul>
        <p>
          <strong>Note:</strong> if you block all cookies, parts of the site may not work
          properly (e.g. forms won’t remember entered values between pages).
        </p>
      </LegalSection>

      <LegalSection id="do-not-track" title="6. Do Not Track and Global Privacy Control">
        <p>
          <strong>Do Not Track (DNT)</strong> is a deprecated standard we don’t currently
          honor as a consent signal — the industry hasn’t agreed on a consistent
          interpretation.
        </p>
        <p>
          <strong>Global Privacy Control (GPC)</strong> is a modern browser signal that means
          "don’t sell or share my data". We <strong>respect</strong> this signal — if your
          browser sends it, we automatically treat it as a rejection of "Analytics" and
          "Marketing" cookie categories.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="7. Changes to this policy">
        <p>
          We update this policy when we add new analytics/marketing tools or when laws
          change. The "Effective from" date is at the top of the page. For material changes,
          your consent is reset and the banner appears again — so you can review the new
          terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact">
        <p>
          Questions about cookies: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
