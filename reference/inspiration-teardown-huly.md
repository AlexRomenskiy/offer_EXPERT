# Inspiration Teardown — huly.io

Reference for design adaptation. We keep our content; we adopt their visual DNA.

## Visual DNA — what makes huly distinctive

### 1. Color system
- **Dark card base:** `#303236` (very dark charcoal, slight warm tint, NOT pure black)
- **Light card:** white / `#f8f9fa`
- **Accent (warm light-leaks):** orange `#ff6b35` to red, used as gradient blobs
- **Text on dark:** pure white / off-white
- Site uses MIX of dark + light cards on same page (not all-dark, not all-light) — creates rhythm.

### 2. Typography
- Modern sans-serif, likely Inter or system stack
- **Heading:** ~48–56px, semi-bold, slight letter-spacing
- **Subheading:** 18–24px, regular
- **Card label:** 14–16px, medium weight
- **Body:** 14–16px, light/regular
- Pattern: **bold label + regular description** in card paragraphs (`<strong>Title.</strong> Body text.`)

### 3. Card styles — THE signature
Two card types, tightly designed:

**Dark card:**
- Background: `#303236`
- **Grain/noise overlay:** SVG-based, NOT raster. ~5–8% opacity. Adds texture, doesn't muddy.
- **Light-leak gradient:** Warm orange → red blob, positioned at corner/edge of card. Heavy blur (~40–60px). Looks like a lens flare bleeding from outside the card.
- Border-radius: ~16px
- Subtle shadow: `0 20px 40px rgba(0,0,0,0.3)` or similar
- Inner padding: generous, ~32–48px

**Light card:**
- Background: white
- 1px subtle gray border or borderless
- Same `~16px` radius
- Same generous padding

### 4. Bento grid layout
- 3-column desktop with **variable spans**: some cards span 2 cols
- Gap: `20–24px`
- Cards have different heights — natural masonry feel
- Mixed dark + light cards in same grid

### 5. Floating UI mockups inside cards
- Each card has a "real-looking" UI element inside (calendar widget, chat bubble, task list item, etc.)
- Mockups have their OWN dark-card treatment (mini grain + glow)
- These give cards purpose and concreteness
- We already do this in Hero (stack-cards: AuditCard, BuildCard, SalesCard)

### 6. Decorative accents
- **Thin vertical accent lines** at very top of sections (~1px, faint)
- **Lens-flare halos** on dark cards — subtle backlit effect
- **Pill/rounded buttons** — orange filled for primary, ghost for secondary

### 7. Motion vocabulary
- Scroll-triggered fade-up on cards (intersection observer)
- Subtle parallax on hero illustration
- Hover: lift + slight shadow grow on cards
- No flashy animations — restrained, premium feel

### 8. Tech stack
- Next.js + Vercel
- Likely Framer Motion or pure Intersection Observer
- SVG-heavy (icons inline, noise texture inline)
- Custom illustrations and product mockups

---

## Mapping huly patterns to our sections

| Section | huly pattern to adopt |
|---|---|
| Hero | Mixed-card hero block (bento on right replaces stacked cards), big headline left, dark grain card with light-leak as primary visual |
| PainPoints | Already a bento — refit cards with dark/light mix + grain + light-leaks. Keep existing content + visuals, restyle visual layer. |
| BeforeAfter | Phone mockup + comparison cards — the "Manual vs Auto" cards become dark/light card pair with grain |
| CaseStudy | Already dark with UnicornBackground — easy match. Add noise overlay + better light-leak instead of current static glow blobs |
| Pricing | Cards become alternating dark/light? Or keep light + add subtle grain on featured? Decision needed. |
| About | Photo card stays light. Body text card light. But add light-leak accent in corner. |
| FAQ | Currently light cards stacked — could stay light, or alternate dark/light per item. Decision. |
| FinalCTA | Strong candidate for dark card with prominent light-leak — focal point |

---

## What we adopt vs. what we leave

### ADOPT
- Dark card aesthetic (#303236 base)
- Grain/noise SVG overlay
- Warm orange light-leak gradients (matches our existing orange-500 brand)
- 16px border-radius standard
- Bento layout with mixed dark/light
- Bold label + regular body pattern in card text
- Thin vertical accent lines at section tops
- Pill-shaped buttons with orange primary
- Scroll-fade-up motion on cards
- Hover: subtle lift + shadow grow

### DON'T ADOPT (irrelevant to our offer)
- Their Slack/Linear/Jira/Notion comparison framing — we're not replacing tools
- Multi-product feature focus — we have a service offer
- Their team-collaboration UI mockups (we have our own: AuditCard, BuildCard, SalesCard etc.)
- Their navigation structure (resources/community menus)

### CAUTION (legal)
- Don't copy their exact illustrations, exact icons, exact UI mockup designs verbatim
- Their fonts may be proprietary — use Inter (open) or system as substitute
- Adopt the LANGUAGE of design, not exact pixel composition

---

## Implementation primitives we need to build

1. **`<NoiseOverlay />`** — React component or Tailwind utility for SVG noise texture
2. **`<LightLeak />`** — gradient blob component with positioning/color/blur props
3. **`<DarkCard />`** — base dark card with built-in grain + optional light-leak slot
4. **Tailwind config additions** — possibly add `huly-dark: #303236` color, custom shadow variants
5. **Maybe install Framer Motion** for smooth scroll animations (currently we use raw CSS in `useRevealOnScroll`)

---

## Implementation phases

**Phase 1 — Primitives (~1 day)**
Build NoiseOverlay, LightLeak, DarkCard. Test on storybook page or one section.

**Phase 2 — Section-by-section visual rebuild (~5–7 days)**
Apply primitives to each section. Two variants where decision is non-trivial. Order:
1. Hero (highest impact)
2. PainPoints (already bento — fits naturally)
3. CaseStudy (already dark — easy upgrade)
4. FinalCTA (focal CTA card)
5. Pricing (decision point — full mix vs accent only)
6. BeforeAfter
7. About
8. FAQ

**Phase 3 — Motion polish (~1–2 days)**
Add Framer Motion or refine CSS scroll animations. Hover states on all cards. Mobile checks.

**Phase 4 — Final polish (~1 day)**
Spacing audit, mobile fixes (deferred items from `project_deferred_design.md`), performance.

Total estimate: **8–11 days** of focused work.
