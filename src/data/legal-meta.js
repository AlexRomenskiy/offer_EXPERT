// ============================================================================
// LEGAL METADATA — single source of truth for entity & policy placeholders.
// Update this file when business state changes (registration, domain, etc.).
// Search the codebase for `legalMeta.` to find every usage.
// ============================================================================

export const legalMeta = {
  // Brand
  brandName: 'CRAFT LIONS',
  productName: 'CRAFT LIONS Funnel System',
  domain: 'www.craftlions.ca',
  domainUrl: 'https://www.craftlions.ca',

  // ============================================================================
  // OPERATOR STATUS — 2026-05-19 snapshot
  // Currently: operating as INDIVIDUAL, business entity NOT yet registered.
  // Until registration, governing law defaults to the consumer's jurisdiction
  // (most protective interpretation). Update `entity.registrationStatus` to
  // 'registered' when ФОП / Sole Prop / LLC is created.
  // ============================================================================
  entity: {
    registrationStatus: 'pending', // 'pending' | 'registered'
    operatorMode: 'individual', // 'individual' | 'sole-proprietor' | 'corporation'
    publicName: 'Олександр Роменський (operating under brand "CRAFT LIONS")',
    legalName: '[TODO when registered: e.g. ФОП Романський О.С. / CRAFT LIONS Inc.]',
    registrationId: '[TODO when registered]',
    registrationDate: '[TODO when registered]',
    registeredAddress: '[TODO when registered]',
    country: '[TODO upon registration: UA / Canada / other]',
    countryISO: '[TODO]',
  },

  // ============================================================================
  // Contacts — all currently routed through personal email.
  // Migrate to brand-domain aliases (legal@, privacy@, refund@) when domain
  // email is configured.
  // ============================================================================
  contactEmail: 'alex.romenskii@gmail.com',
  legalEmail: 'alex.romenskii@gmail.com', // [TODO: legal@craftlions.ca after domain email]
  dpoEmail: 'alex.romenskii@gmail.com', // [TODO: privacy@craftlions.ca]
  refundEmail: 'alex.romenskii@gmail.com', // [TODO: refund@craftlions.ca]

  // ============================================================================
  // Calendly (CTA flow) — all CTAs «Записатись на розбір» / «Хочу таку систему»
  // will eventually redirect here.
  // ============================================================================
  calendlyUrl: 'https://calendly.com/alex-romenskii/craft-lions',

  // Policy effective dates / versions
  policies: {
    privacy: { effective: '2026-05-19', version: '1.0' },
    cookies: { effective: '2026-05-19', version: '1.0' },
    terms: { effective: '2026-05-19', version: '1.0' },
    refund: { effective: '2026-05-19', version: '1.0' },
  },

  // Commercial parameters
  refund: {
    windowDays: 14,
    currency: 'USD',
    chargebackPolicyDays: 60,
  },

  // Data retention defaults (in years unless noted)
  dataRetention: {
    customerData: 3,
    paymentRecords: 7,
    marketingConsent: 'until-withdrawn',
    analyticsLogs: 26, // months
  },

  // ============================================================================
  // Third-party processors — list those actually in use.
  // Currently: only hosting. Payment / chatbot / email NOT yet integrated.
  // ============================================================================
  processors: [
    {
      name: 'Vercel Inc.',
      purpose: 'Hosting & CDN',
      region: 'US (with global edge network)',
      dpa: 'https://vercel.com/legal/dpa',
      status: 'active',
    },
    {
      name: 'Calendly LLC',
      purpose: 'Booking discovery calls (form redirect)',
      region: 'US',
      dpa: 'https://calendly.com/legal/dpa',
      status: 'pending integration',
    },
    // [TODO: add when integrated — payment processor / chatbot / email / analytics]
  ],

  // ============================================================================
  // Governing law — until entity is registered, defaults to «consumer's law».
  // When entity is registered, replace with concrete jurisdiction.
  // ============================================================================
  governingLaw: {
    status: 'pending', // 'pending' | 'fixed'
    jurisdiction:
      'до моменту державної реєстрації Оператора — право країни звичайного проживання Клієнта; після реєстрації — право відповідної юрисдикції',
    arbitrationVenue:
      '[TODO upon registration: e.g. Ontario Superior Court / МКАС при ТПП України]',
    languageOfProceedings: 'українська / English (за домовленістю)',
  },
};

export default legalMeta;
