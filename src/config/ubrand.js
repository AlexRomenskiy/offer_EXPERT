// U-Brand (Craft Lions × Tania) — single source of truth for the joint-product
// event landing at /u-brand. Tweak the discount + deadline here in one place;
// every block (hero ribbon, urgency countdown, booking note) reads from this.

// ── Discount mechanic (fast-decider bonus from the live event) ────────────────
export const UBRAND_DISCOUNT_PCT = 20; // TODO confirm with Olexandr
// Local deadline. Event is 2026-05-30; default = 72h after, end of day Jun 2.
export const UBRAND_DEADLINE = '2026-06-02T23:59:59';
export const UBRAND_DEADLINE_LABEL = 'June 2'; // human-readable, used in copy

// ── Intro video (Tania recap, shown at the top of the page) ───────────────────
// Placeholder = existing EN testimonial clip. Swap for the recorded recap video.
export const UBRAND_INTRO_VIDEO = '/tania-testimonial-en.mp4'; // TODO swap for recap
export const UBRAND_INTRO_POSTER = '/tania-lav.jpg'; // her headshot as the still frame

// ── People ────────────────────────────────────────────────────────────────────
export const TANIA_NAME = 'Tania Lav';
export const TANIA_PHOTO = '/tania-lav.jpg';
export const TANIA_TAGLINE = 'Co-founder, Craft Lions · 15 yrs on screen';
export const OLEXANDR_NAME = 'Olexandr';
export const OLEXANDR_PHOTO = '/olexandr.jpg';
export const OLEXANDR_TAGLINE = 'Co-founder, Craft Lions · systems & funnels';
