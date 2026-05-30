// U-Brand (Craft Lions × Tania) — single source of truth for the joint-product
// event landing at /u-brand. Tweak the discount + deadline here in one place;
// every block (hero ribbon, urgency countdown, booking note) reads from this.

// ── Discount mechanic (fast-decider bonus from the live event) ────────────────
export const UBRAND_DISCOUNT_PCT = 20;
// "Decide today" offer: the spot is held 48h from the event (May 30) → June 1 EOD.
export const UBRAND_DEADLINE = '2026-06-01T23:59:59';
export const UBRAND_DEADLINE_LABEL = 'June 1'; // human-readable, used in copy

// Discount is live only until the deadline. After it, the page auto-reverts to
// full prices and the ribbon/urgency/strikethrough disappear — no manual edit.
export const isDiscountActive = () => new Date() < new Date(UBRAND_DEADLINE);

// ── Intro video (Tania recap, shown at the top of the page) ───────────────────
// Placeholder = existing EN testimonial clip. Swap for the recorded recap video.
export const UBRAND_INTRO_VIDEO = '/tania-testimonial-en.mp4'; // TODO swap for recap
export const UBRAND_INTRO_POSTER = '/tania-lav.jpg'; // her headshot as the still frame

// ── People ────────────────────────────────────────────────────────────────────
export const TANIA_NAME = 'Tania Lav';
export const TANIA_PHOTO = '/tania-lav.jpg';
export const TANIA_TAGLINE = 'Co-founder, Craft Lions · 10+ yrs on screen';
export const OLEXANDR_NAME = 'Olexandr';
export const OLEXANDR_PHOTO = '/olexandr.jpg';
export const OLEXANDR_TAGLINE = 'Co-founder, Craft Lions · 7+ yrs in digital marketing';
