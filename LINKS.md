# 🔗 Quick Links — CRAFT LIONS

Quick-copy reference for all external URLs used across the project.
Keep in sync with `src/data/legal-meta.js` and any hardcoded constants.

---

## 📅 Booking (Calendly)

| Audience | URL |
|---|---|
| 🇺🇦 UA | `https://calendly.com/alex-romenskii/craft-lions` |
| 🇬🇧 EN | `https://calendly.com/alexander-romenskii/30min` |

**Wired in:**
- `src/data/legal-meta.js` → `calendlyUrl` + `calendlyUrlEn`
- `src/sections/FinalCTASection.jsx` → `BOOKING_URL`
- `src/sections/en/FinalCTASectionEN.jsx` → `BOOKING_URL`

---

## 💬 Secondary contact (next to Book free call)

| Audience | Channel | URL |
|---|---|---|
| 🇺🇦 UA | Telegram | `https://t.me/alexander_romenskyi` |
| 🇬🇧 EN | LinkedIn | `https://www.linkedin.com/in/alex-romenskyi/` |

**Wired in:**
- `src/sections/FinalCTASection.jsx` → `TELEGRAM_URL` (UA)
- `src/sections/en/FinalCTASectionEN.jsx` → `LINKEDIN_URL` (EN)

**Rationale:** UA-audience converts via Telegram (default messenger). NA-audience expects LinkedIn (professional channel). Don't unify — region-appropriate trust signal.

---

## 📱 Social

| Platform | URL |
|---|---|
| LinkedIn | `https://www.linkedin.com/in/alex-romenskyi/` |
| Instagram (UA) | `https://www.instagram.com/romensky.ua/` |
| Instagram (EN) | `https://www.instagram.com/romensky.pro/` |
| Facebook | `https://www.facebook.com/Alex.Romenskyi` |

**Wired in:** `src/sections/FinalCTASection.jsx` → `socialLinks[]`

---

## 📧 Email (current)

| Role | Email |
|---|---|
| All (general / legal / privacy / refund) | `alex.romenskii@gmail.com` |

**TODO when domain email is set up:**
- `legal@craftlions.ca`
- `privacy@craftlions.ca`
- `refund@craftlions.ca`

---

## 🌐 Domain

| Status | URL |
|---|---|
| Purchased | `https://www.craftlions.ca/` |
| Vercel binding | ❌ Pending |

---

## 🛠 Internal

| Resource | URL |
|---|---|
| GitHub repo | `https://github.com/AlexRomenskiy/offer_EXPERT` (verify) |
| Vercel dashboard | TBD |
