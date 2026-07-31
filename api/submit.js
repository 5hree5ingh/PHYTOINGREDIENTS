// ============================================================
// PHYTO INGREDIENTS — SUBMIT API ROUTE
// Vercel Serverless Function (POST handler)
// Runs email + sheets writes in parallel via Promise.all
// ============================================================

const { sendEmail } = require("../lib/mailer");
const { writeToSheets } = require("../lib/google-sheets");

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // CORS headers (for Vite dev server on different port)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { name, email, phone, company, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and phone are required.",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // Generate IST timestamp
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ── Run email + sheets in PARALLEL ──
    // Both tasks fire simultaneously — saves ~2-3 seconds
    await Promise.all([
      sendEmail(name, email, phone, company, message, timestamp),
      writeToSheets(name, email, phone, company, message, timestamp),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Submit error:", err);
    return res.status(500).json({
      success: false,
      error: "Something went wrong. Please try again.",
    });
  }
};
