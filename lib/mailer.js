// ============================================================
// PHYTO INGREDIENTS — MAILER MODULE
// Cached SMTP transporter + parallel email sends
// ============================================================

const nodemailer = require("nodemailer");

// ── Module-level singleton: cached transporter ──────────────
// Avoids a fresh TLS handshake on every request (~1-2s saved)
let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      pool: true,            // Keep persistent TCP connections
      maxConnections: 3,     // Allow up to 3 parallel sends
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
  }
  return transporter;
}

// ── Brand constants ─────────────────────────────────────────
const BRAND_NAME = "Phyto Ingredients";
const BRAND_COLOR = "#2d7a2d";
const BRAND_COLOR_DARK = "#1a5c1a";
const BRAND_COLOR_LIGHT = "#4caf50";
const TEAM_EMAIL = "websiteleadscapturer@gmail.com";
const CONTACT_PHONE = "+91-8766358288";
const WEBSITE_URL = "https://phytoingredients.com";
const SHEET_URL = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID";

// ── Internal team notification email ────────────────────────
function buildInternalEmail(name, email, phone, company, message, timestamp) {
  const subject = `🌿 New Lead — ${name}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f4f7f4;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,${BRAND_COLOR_DARK},${BRAND_COLOR});padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">
        🌿 New Lead Received
      </h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">
        ${BRAND_NAME} Website — ${timestamp}
      </p>
    </div>
    
    <!-- Content -->
    <div style="padding:28px 32px;">
      <p style="margin:0 0 20px;color:#333;font-size:15px;line-height:1.5;">
        A new lead has been submitted through the website contact form:
      </p>
      
      <!-- Details Table -->
      <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;border:1px solid #e8f0e8;">
        <tr style="background:${BRAND_COLOR};color:#fff;">
          <td style="padding:10px 16px;font-size:13px;font-weight:600;width:35%;">Field</td>
          <td style="padding:10px 16px;font-size:13px;font-weight:600;">Details</td>
        </tr>
        <tr style="background:#f8fdf8;">
          <td style="padding:12px 16px;font-size:14px;color:#555;border-bottom:1px solid #e8f0e8;font-weight:600;">Name</td>
          <td style="padding:12px 16px;font-size:14px;color:#1a2e1a;border-bottom:1px solid #e8f0e8;">${name}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-size:14px;color:#555;border-bottom:1px solid #e8f0e8;font-weight:600;">Email</td>
          <td style="padding:12px 16px;font-size:14px;color:#1a2e1a;border-bottom:1px solid #e8f0e8;">
            <a href="mailto:${email}" style="color:${BRAND_COLOR};text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr style="background:#f8fdf8;">
          <td style="padding:12px 16px;font-size:14px;color:#555;border-bottom:1px solid #e8f0e8;font-weight:600;">Phone</td>
          <td style="padding:12px 16px;font-size:14px;color:#1a2e1a;border-bottom:1px solid #e8f0e8;">
            <a href="tel:${phone}" style="color:${BRAND_COLOR};text-decoration:none;">${phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-size:14px;color:#555;border-bottom:1px solid #e8f0e8;font-weight:600;">Company</td>
          <td style="padding:12px 16px;font-size:14px;color:#1a2e1a;border-bottom:1px solid #e8f0e8;">${company || "—"}</td>
        </tr>
        <tr style="background:#f8fdf8;">
          <td style="padding:12px 16px;font-size:14px;color:#555;font-weight:600;">Message</td>
          <td style="padding:12px 16px;font-size:14px;color:#1a2e1a;line-height:1.6;">${message || "—"}</td>
        </tr>
      </table>
      
      <!-- Action -->
      <div style="margin-top:24px;text-align:center;">
        <a href="${SHEET_URL}" style="display:inline-block;background:${BRAND_COLOR};color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
          📊 View Google Sheet
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="padding:16px 32px;background:#f8fdf8;border-top:1px solid #e8f0e8;text-align:center;">
      <p style="margin:0;color:#999;font-size:12px;">
        Auto-generated by ${BRAND_NAME} Lead Capture System
      </p>
    </div>
  </div>
</body>
</html>`;

  const text = `NEW LEAD — ${BRAND_NAME}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "—"}
Message: ${message || "—"}
Timestamp: ${timestamp}

View all leads: ${SHEET_URL}`;

  return {
    from: `"${BRAND_NAME} Website" <${process.env.GMAIL_USER}>`,
    to: TEAM_EMAIL,
    replyTo: email,
    subject,
    html,
    text,
  };
}

// ── Auto-reply email to the lead ────────────────────────────
function buildAutoReplyEmail(name, email, phone, company, message, timestamp) {
  const firstName = name.split(" ")[0];
  const subject = `Hi ${firstName}, we received your message — ${BRAND_NAME}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f4f7f4;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,${BRAND_COLOR_DARK},${BRAND_COLOR},${BRAND_COLOR_LIGHT});padding:36px 32px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:-0.3px;">
        🌿 ${BRAND_NAME}
      </h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;font-weight:400;">
        Thank you for reaching out!
      </p>
    </div>
    
    <!-- Content -->
    <div style="padding:32px;">
      <h2 style="margin:0 0 16px;color:#1a2e1a;font-size:20px;font-weight:700;">
        Hello ${firstName}! 👋
      </h2>
      
      <p style="margin:0 0 16px;color:#4a5568;font-size:15px;line-height:1.7;">
        Thank you for contacting <strong>${BRAND_NAME}</strong>. We've received your message and our team will review it promptly.
      </p>
      
      <p style="margin:0 0 24px;color:#4a5568;font-size:15px;line-height:1.7;">
        You can expect a response from us within <strong style="color:${BRAND_COLOR};">24 hours</strong>. If your inquiry is urgent, feel free to reach us directly.
      </p>
      
      <!-- Submission Summary -->
      <div style="background:#f8fdf8;border:1px solid #e8f0e8;border-radius:10px;padding:20px;margin-bottom:24px;">
        <h3 style="margin:0 0 14px;color:${BRAND_COLOR_DARK};font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
          📋 Your Submission Summary
        </h3>
        <table style="width:100%;">
          <tr>
            <td style="padding:6px 0;color:#888;font-size:13px;width:30%;">Name</td>
            <td style="padding:6px 0;color:#1a2e1a;font-size:14px;font-weight:500;">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#888;font-size:13px;">Email</td>
            <td style="padding:6px 0;color:#1a2e1a;font-size:14px;font-weight:500;">${email}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#888;font-size:13px;">Phone</td>
            <td style="padding:6px 0;color:#1a2e1a;font-size:14px;font-weight:500;">${phone}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding:6px 0;color:#888;font-size:13px;">Company</td>
            <td style="padding:6px 0;color:#1a2e1a;font-size:14px;font-weight:500;">${company}</td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding:6px 0;color:#888;font-size:13px;vertical-align:top;">Message</td>
            <td style="padding:6px 0;color:#1a2e1a;font-size:14px;font-weight:500;line-height:1.6;">${message}</td>
          </tr>` : ""}
        </table>
        <p style="margin:12px 0 0;color:#aaa;font-size:11px;">Submitted on ${timestamp}</p>
      </div>
      
      <!-- Contact Box -->
      <div style="background:linear-gradient(135deg,${BRAND_COLOR_DARK},${BRAND_COLOR});border-radius:10px;padding:20px;text-align:center;color:#fff;">
        <p style="margin:0 0 8px;font-size:14px;font-weight:600;">Need immediate assistance?</p>
        <p style="margin:0 0 4px;font-size:15px;">
          📞 <a href="tel:${CONTACT_PHONE}" style="color:#fff;text-decoration:none;font-weight:700;">${CONTACT_PHONE}</a>
        </p>
        <p style="margin:0;font-size:14px;">
          ✉️ <a href="mailto:${TEAM_EMAIL}" style="color:#fff;text-decoration:none;">${TEAM_EMAIL}</a>
        </p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="padding:20px 32px;background:#f8fdf8;border-top:1px solid #e8f0e8;text-align:center;">
      <p style="margin:0 0 8px;">
        <a href="${WEBSITE_URL}" style="color:${BRAND_COLOR};text-decoration:none;font-size:14px;font-weight:600;">
          🌐 Visit ${BRAND_NAME}
        </a>
      </p>
      <p style="margin:0;color:#aaa;font-size:11px;">
        ${BRAND_NAME} Biopharma Pvt. Ltd. — Haridwar, Uttarakhand, India
      </p>
      <p style="margin:4px 0 0;color:#ccc;font-size:10px;">
        This is an automated confirmation. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>`;

  const text = `Hello ${firstName}!

Thank you for contacting ${BRAND_NAME}. We've received your message and our team will review it promptly.

You can expect a response from us within 24 hours. If your inquiry is urgent, feel free to reach us directly.

YOUR SUBMISSION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Phone: ${phone}${company ? `\nCompany: ${company}` : ""}${message ? `\nMessage: ${message}` : ""}
Submitted: ${timestamp}

NEED IMMEDIATE ASSISTANCE?
📞 ${CONTACT_PHONE}
✉️ ${TEAM_EMAIL}
🌐 ${WEBSITE_URL}

—
${BRAND_NAME} Biopharma Pvt. Ltd.
Haridwar, Uttarakhand, India

This is an automated confirmation. Please do not reply to this email.`;

  return {
    from: `"${BRAND_NAME}" <${process.env.GMAIL_USER}>`,
    to: email,
    replyTo: TEAM_EMAIL,
    subject,
    html,
    text,
  };
}

// ── Main export: sends both emails in parallel ──────────────
async function sendEmail(name, email, phone, company, message, timestamp) {
  const transport = getTransporter();

  const internalMail = buildInternalEmail(name, email, phone, company, message, timestamp);
  const autoReplyMail = buildAutoReplyEmail(name, email, phone, company, message, timestamp);

  // Fire both emails simultaneously — saves ~2-3 seconds
  await Promise.all([
    transport.sendMail(internalMail),
    transport.sendMail(autoReplyMail),
  ]);
}

module.exports = { sendEmail };
