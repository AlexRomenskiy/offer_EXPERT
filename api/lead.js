// Vercel serverless function — receives a U-Brand lead and pings Telegram.
// Endpoint: POST /api/lead
//
// Required env vars (Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
//   TELEGRAM_CHAT_IDS   — comma-separated chat ids to notify, e.g. "293214111,479136664"
//
// (Optional, to also append to a Google Sheet later: GOOGLE_SHEETS_WEBAPP_URL.)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const {
    name = '',
    occupation = '',
    phone = '',
    link = '',
    company = '', // honeypot — real users never see/fill this
    page = '',
  } = body;

  // Bot trap: silently accept so the bot thinks it succeeded, but notify no one.
  if (company) return res.status(200).json({ ok: true });

  if (!name.trim() || !phone.trim()) {
    return res.status(400).json({ ok: false, error: 'Name and phone are required' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    console.error('U-Brand lead: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS env');
    return res.status(500).json({ ok: false, error: 'Server not configured' });
  }

  const text =
    `🦁 <b>New U-Brand lead</b>\n\n` +
    `<b>Name:</b> ${esc(name)}\n` +
    `<b>Does:</b> ${esc(occupation) || '—'}\n` +
    `<b>Phone:</b> ${esc(phone)}\n` +
    `<b>Link:</b> ${esc(link) || '—'}`;

  try {
    const results = await Promise.all(
      chatIds.map((chat_id) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id,
            text,
            parse_mode: 'HTML',
            // Don't turn the link into a clickable preview — show it verbatim.
            disable_web_page_preview: true,
          }),
        }).then((r) => r.ok)
      )
    );
    if (!results.some(Boolean)) throw new Error('all Telegram sends failed');
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('U-Brand lead: Telegram send failed', err);
    return res.status(502).json({ ok: false, error: 'Notification failed' });
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

// HTML-escape for Telegram parse_mode:'HTML'. Only & < > are special there,
// so the user's input (underscores, dots, slashes, @-handles) is preserved
// character-for-character — exactly as they typed it.
function esc(s) {
  return String(s)
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
