// One-off generator for the printable QR sheet Tania holds up after her talk.
// Run: node scripts/make-qr-pdf.mjs
// Output: U-Brand-QR.pdf (A4) at repo root. Needs qrcode + pdfkit (installed --no-save).

import fs from 'node:fs';
import path from 'node:path';
import QRCode from 'qrcode';
import PDFDocument from 'pdfkit';

const TARGET_URL = 'https://craftlions.ca/u-brand';
const OUT = path.resolve('U-Brand-QR.pdf');
const MARK = path.resolve('public/logo/mark-on-dark.png');

const navy = '#020f2d';
const blue = '#175ae8';
const blueLight = '#60a5fa';
const slate = '#64748b';

const qrBuffer = await QRCode.toBuffer(TARGET_URL, {
  type: 'png',
  width: 700,
  margin: 1,
  errorCorrectionLevel: 'M',
  color: { dark: navy, light: '#ffffff' },
});

const doc = new PDFDocument({ size: 'A4', margin: 0 });
const stream = fs.createWriteStream(OUT);
doc.pipe(stream);

const W = doc.page.width; // 595.28
const cx = W / 2;
const m = 45;

// Header band
doc.roundedRect(m, 45, W - 2 * m, 72, 16).fill(navy);
if (fs.existsSync(MARK)) {
  try {
    doc.image(MARK, m + 22, 61, { height: 40 });
  } catch {}
}
doc.font('Helvetica-Bold').fontSize(19);
doc.fillColor('#ffffff').text('CRAFT', m + 80, 71, { continued: true });
doc.fillColor(blueLight).text(' LIONS');

// Eyebrow
doc
  .font('Helvetica')
  .fontSize(10)
  .fillColor(slate)
  .text('U-BRAND    ·    TANIA LAV  &  OLEXANDR', 0, 178, {
    align: 'center',
    characterSpacing: 3,
  });

// Title
doc
  .font('Helvetica-Bold')
  .fontSize(34)
  .fillColor(navy)
  .text('From being seen', 0, 206, { align: 'center' })
  .text('to being booked', { align: 'center' });

// Subtitle
doc
  .font('Helvetica')
  .fontSize(13)
  .fillColor(slate)
  .text('Scan to continue what Tania just shared on stage.', 0, 302, {
    align: 'center',
  });

// QR with soft frame
const qrSize = 250;
doc.lineWidth(1);
doc
  .roundedRect(cx - qrSize / 2 - 14, 345, qrSize + 28, qrSize + 28, 18)
  .fillAndStroke('#ffffff', '#e2e8f0');
doc.image(qrBuffer, cx - qrSize / 2, 359, { width: qrSize });

// URL
doc
  .font('Courier-Bold')
  .fontSize(15)
  .fillColor(blue)
  .text('craftlions.ca/u-brand', 0, 638, { align: 'center' });

// Discount pill
const pillW = 392;
const pillH = 38;
const pillY = 672;
doc.roundedRect(cx - pillW / 2, pillY, pillW, pillH, 19).fill('#f97316');
doc
  .font('Helvetica-Bold')
  .fontSize(12.5)
  .fillColor('#ffffff')
  .text('-20% for everyone here  ·  book your call by June 2', cx - pillW / 2, pillY + 12, {
    width: pillW,
    align: 'center',
  });

// Footer
doc
  .font('Helvetica')
  .fontSize(10)
  .fillColor(slate)
  .text('Tania Lav  &  Olexandr — Co-founders, Craft Lions', 0, 792, {
    align: 'center',
  });

doc.end();
await new Promise((resolve) => stream.on('finish', resolve));
console.log('PDF written:', OUT);

// ── Browser-viewable / print-to-PDF fallback (self-contained, inline SVG QR) ──
const qrSvg = await QRCode.toString(TARGET_URL, {
  type: 'svg',
  margin: 1,
  errorCorrectionLevel: 'M',
  color: { dark: navy, light: '#ffffff' },
});
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<title>U-Brand · QR</title>
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: Arial, Helvetica, sans-serif; background: #eef4fa; }
  .sheet { width: 210mm; min-height: 297mm; margin: 0 auto; background: #fff;
    padding: 16mm 18mm; display: flex; flex-direction: column; align-items: center; }
  .bar { width: 100%; background: ${navy}; border-radius: 16px; height: 64px;
    display: flex; align-items: center; gap: 12px; padding: 0 22px; }
  .bar img { height: 38px; }
  .bar b { font-size: 19px; color: #fff; letter-spacing: .3px; }
  .bar b span { color: ${blueLight}; }
  .eyebrow { margin-top: 30px; font-size: 11px; letter-spacing: 3px; color: ${slate}; }
  h1 { margin-top: 14px; font-size: 38px; line-height: 1.15; color: ${navy}; text-align: center; }
  .sub { margin-top: 14px; font-size: 14px; color: ${slate}; text-align: center; }
  .qr { margin-top: 24px; width: 270px; height: 270px; padding: 12px; border: 1px solid #e2e8f0;
    border-radius: 18px; background: #fff; }
  .qr svg { width: 100%; height: 100%; display: block; }
  .url { margin-top: 22px; font-family: "Courier New", monospace; font-weight: 700;
    font-size: 16px; color: ${blue}; }
  .pill { margin-top: 18px; background: #f97316; color: #fff; font-weight: 700; font-size: 13px;
    padding: 11px 22px; border-radius: 20px; }
  .foot { margin-top: auto; padding-top: 24px; font-size: 11px; color: ${slate}; }
</style></head>
<body>
  <div class="sheet">
    <div class="bar"><img src="logo/mark-on-dark.png" alt="" /><b>CRAFT<span> LIONS</span></b></div>
    <div class="eyebrow">U-BRAND&nbsp;&nbsp;·&nbsp;&nbsp;TANIA LAV &amp; OLEXANDR</div>
    <h1>From being seen<br/>to being booked</h1>
    <div class="sub">Scan to continue what Tania just shared on stage.</div>
    <div class="qr">${qrSvg}</div>
    <div class="url">craftlions.ca/u-brand</div>
    <div class="pill">−20% for everyone here&nbsp;&nbsp;·&nbsp;&nbsp;book your call by June 2</div>
    <div class="foot">Tania Lav &amp; Olexandr — Co-founders, Craft Lions</div>
  </div>
</body></html>`;
fs.writeFileSync(path.resolve('public/U-Brand-QR.html'), html);
console.log('HTML written: public/U-Brand-QR.html');
