import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createCanvas, loadImage } from "canvas";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGET_URL  = "https://www.phytoingredients.com/brochure";
const QR_SIZE     = 400;   // QR grid size (px)
const PADDING     = 44;    // white border around QR
const STRIP_H     = 64;    // URL strip height
const TOTAL_W     = QR_SIZE + PADDING * 2;
const TOTAL_H     = QR_SIZE + PADDING * 2 + STRIP_H;

// Center logo dimensions
const LOGO_D      = 88;    // circle diameter
const LOGO_BORDER = 7;     // white ring border around logo
const LOGO_FULL   = LOGO_D + LOGO_BORDER * 2;

async function generate() {
  /* 1 ─ Render QR to buffer (dark green modules, white bg) */
  const qrBuf = await QRCode.toBuffer(TARGET_URL, {
    errorCorrectionLevel: "H",   // H = 30% can be obscured – needed for logo
    type: "png",
    width: QR_SIZE,
    margin: 0,
    color: { dark: "#1a4d2e", light: "#ffffff" },
  });

  const qrImage = await loadImage(qrBuf);

  /* 2 ─ Output canvas */
  const canvas = createCanvas(TOTAL_W, TOTAL_H);
  const ctx    = canvas.getContext("2d");

  // White full background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, TOTAL_W, TOTAL_H);

  /* 3 ─ Tint QR with green→gold gradient */
  const tmp  = createCanvas(QR_SIZE, QR_SIZE);
  const tCtx = tmp.getContext("2d");
  tCtx.drawImage(qrImage, 0, 0);
  const imgData = tCtx.getImageData(0, 0, QR_SIZE, QR_SIZE);

  const gCv  = createCanvas(QR_SIZE, QR_SIZE);
  const gCtx = gCv.getContext("2d");
  const grad = gCtx.createLinearGradient(0, 0, QR_SIZE, QR_SIZE);
  grad.addColorStop(0,    "#1a4d2e");
  grad.addColorStop(0.45, "#1e6b30");
  grad.addColorStop(0.75, "#2e7d32");
  grad.addColorStop(1,    "#c8922a");
  gCtx.fillStyle = grad;
  gCtx.fillRect(0, 0, QR_SIZE, QR_SIZE);
  const gData = gCtx.getImageData(0, 0, QR_SIZE, QR_SIZE);

  const out = tCtx.createImageData(QR_SIZE, QR_SIZE);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const isLight = imgData.data[i] > 180;
    if (isLight) {
      out.data[i] = out.data[i+1] = out.data[i+2] = 255;
      out.data[i+3] = 255;
    } else {
      out.data[i]   = gData.data[i];
      out.data[i+1] = gData.data[i+1];
      out.data[i+2] = gData.data[i+2];
      out.data[i+3] = 255;
    }
  }
  tCtx.putImageData(out, 0, 0);

  /* 4 ─ Paste tinted QR onto output */
  ctx.drawImage(tmp, PADDING, PADDING);

  /* 5 ─ Gold corner brackets */
  const GOLD = "#c8922a"; const BLEN = 24; const BTHICK = 5;
  ctx.strokeStyle = GOLD; ctx.lineWidth = BTHICK; ctx.lineCap = "square";
  const px = PADDING - 8;
  const py = PADDING - 8;
  const qx = PADDING + QR_SIZE + 8;
  const qy = PADDING + QR_SIZE + 8;

  // TL
  ctx.beginPath(); ctx.moveTo(px + BLEN, py); ctx.lineTo(px, py); ctx.lineTo(px, py + BLEN); ctx.stroke();
  // TR
  ctx.beginPath(); ctx.moveTo(qx - BLEN, py); ctx.lineTo(qx, py); ctx.lineTo(qx, py + BLEN); ctx.stroke();
  // BL
  ctx.beginPath(); ctx.moveTo(px + BLEN, qy); ctx.lineTo(px, qy); ctx.lineTo(px, qy - BLEN); ctx.stroke();
  // BR
  ctx.beginPath(); ctx.moveTo(qx - BLEN, qy); ctx.lineTo(qx, qy); ctx.lineTo(qx, qy - BLEN); ctx.stroke();

  /* 6 ─ Center logo overlay */
  const logoPath = path.join(__dirname, "..", "public", "images", "image.png");
  const logoImg  = await loadImage(logoPath);

  const cx = PADDING + QR_SIZE / 2;   // center X of QR
  const cy = PADDING + QR_SIZE / 2;   // center Y of QR

  // White circle (outer ring)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, LOGO_D / 2 + LOGO_BORDER, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0,0,0,0.25)";
  ctx.shadowBlur  = 10;
  ctx.fill();
  ctx.restore();

  // Clip to circle and draw logo (use left square portion of the wide logo)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, LOGO_D / 2, 0, Math.PI * 2);
  ctx.clip();

  // Logo is ~4:1 wide. The icon (leaf+capsule) occupies the leftmost ~28% of width.
  const lw = logoImg.width;
  const lh = logoImg.height;
  const cropW = Math.round(lw * 0.28);   // just the icon portion
  const cropH = lh;                       // full height
  ctx.drawImage(
    logoImg,
    0, 0, cropW, cropH,                                           // source: icon slice
    cx - LOGO_D / 2, cy - LOGO_D / 2, LOGO_D, LOGO_D             // dest: circle
  );
  ctx.restore();

  // Thin green border on circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, LOGO_D / 2 + LOGO_BORDER * 0.5, 0, Math.PI * 2);
  ctx.strokeStyle = "#2e7d32";
  ctx.lineWidth   = 2;
  ctx.stroke();
  ctx.restore();

  /* 7 ─ Green URL strip */
  const sg = ctx.createLinearGradient(0, TOTAL_H - STRIP_H, TOTAL_W, TOTAL_H);
  sg.addColorStop(0, "#1a4d2e");
  sg.addColorStop(1, "#2e7d32");
  ctx.fillStyle = sg;
  ctx.fillRect(0, TOTAL_H - STRIP_H, TOTAL_W, STRIP_H);

  /* 8 ─ URL text */
  ctx.fillStyle    = "#ffffff";
  ctx.font         = "bold 17px Arial, sans-serif";
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("www.phytoingredients.com/brochure", TOTAL_W / 2, TOTAL_H - STRIP_H / 2);

  /* 9 ─ Save */
  const outPath = path.join(__dirname, "..", "public", "images", "phyto-brochure-qr.png");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outPath, buffer);
  console.log("✅  QR image saved:", outPath);
  console.log("    Size:", (buffer.length / 1024).toFixed(1), "KB |", TOTAL_W + "×" + TOTAL_H + "px");
}

generate().catch(err => { console.error("❌ Error:", err.message); process.exit(1); });
