// Quick check that the U-Brand bot can deliver leads to both recipients.
// Reads .env.local, sends a test message to each TELEGRAM_CHAT_IDS. Run:
//   node scripts/test-telegram.mjs
import fs from 'node:fs';
import path from 'node:path';

const env = {};
const p = path.resolve('.env.local');
if (fs.existsSync(p)) {
  for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2];
  }
}

const token = env.TELEGRAM_BOT_TOKEN;
const chatIds = (env.TELEGRAM_CHAT_IDS || '').split(',').map((s) => s.trim()).filter(Boolean);

if (!token || chatIds.length === 0) {
  console.error('Missing TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_IDS in .env.local');
  process.exit(1);
}

const text =
  '🦁 U-Brand — TEST lead\n\n' +
  'Name: Test Person\n' +
  'Does: QA check\n' +
  'Phone: +1 555 000 0000\n' +
  'Link: instagram.com/test\n' +
  'From: local test (ignore me)';

for (const chat_id of chatIds) {
  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text }),
    });
    const j = await r.json();
    console.log(`chat ${chat_id}: HTTP ${r.status} — ${j.ok ? 'DELIVERED ✅' : 'FAIL ❌ ' + (j.description || '')}`);
  } catch (e) {
    console.log(`chat ${chat_id}: request error — ${e.message}`);
  }
}
