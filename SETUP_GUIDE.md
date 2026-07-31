# 🌿 Phyto Ingredients — Lead Capture System Setup Guide

This guide walks you through setting up the lead capture system: Google Sheets integration, Gmail SMTP emails, and the Vercel serverless backend.

---

## 📋 Table of Contents

1. [Gmail App Password Setup](#1-gmail-app-password-setup)
2. [Google Cloud Project & Sheets API](#2-google-cloud-project--sheets-api)
3. [Create Service Account](#3-create-service-account)
4. [Create & Share Google Spreadsheet](#4-create--share-google-spreadsheet)
5. [Configure Environment Variables](#5-configure-environment-variables)
6. [Update Code with Spreadsheet ID](#6-update-code-with-spreadsheet-id)
7. [Test Locally](#7-test-locally)
8. [Deploy to Vercel](#8-deploy-to-vercel)

---

## 1. Gmail App Password Setup

> **Required for:** Sending notification and auto-reply emails via SMTP

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select app: **Mail**
5. Select device: **Other** → type "Phyto Website"
6. Click **Generate**
7. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
8. Save this — you'll use it as `GMAIL_PASS`

---

## 2. Google Cloud Project & Sheets API

> **Required for:** Writing lead data to Google Sheets

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Create Project** (or select an existing one)
   - Project name: `phyto-leads` (or anything you want)
3. In the left menu, go to **APIs & Services → Library**
4. Search for **Google Sheets API**
5. Click it → Click **Enable**

---

## 3. Create Service Account

> **Required for:** Server-to-server authentication (no user login needed)

1. In Google Cloud Console, go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → Service Account**
3. Fill in:
   - Name: `phyto-sheets-writer`
   - ID: auto-generated (e.g., `phyto-sheets-writer@your-project.iam.gserviceaccount.com`)
4. Click **Done** (skip optional steps)
5. Click on the service account you just created
6. Go to the **Keys** tab
7. Click **Add Key → Create new key → JSON**
8. A JSON file will download — **rename it to `service-account.json`**
9. Place it in the **project root**: `phyto/service-account.json`

> ⚠️ **IMPORTANT:** This file is in `.gitignore` and must NEVER be committed to Git.

---

## 4. Create & Share Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet → Name it: `Phyto Ingredients - Leads`
3. Rename the first sheet tab to **`Leads`** (click the tab at the bottom → rename)
4. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_IS_HERE/edit
   ```
5. **Share the spreadsheet** with the service account:
   - Click **Share** (top-right)
   - Paste the service account email (from step 3.3 above, e.g., `phyto-sheets-writer@your-project.iam.gserviceaccount.com`)
   - Set permission to **Editor**
   - Uncheck "Notify people"
   - Click **Share**

---

## 5. Configure Environment Variables

### Local Development

Edit the file `.env.local` in the project root:

```env
GMAIL_USER=your-actual-gmail@gmail.com
GMAIL_PASS=abcdefghijklmnop
```

Replace with:
- `GMAIL_USER`: The Gmail address that will send emails
- `GMAIL_PASS`: The 16-character App Password from Step 1

### Vercel Production

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings → Environment Variables**
3. Add:
   - `GMAIL_USER` = your Gmail address
   - `GMAIL_PASS` = your App Password
4. For the `service-account.json`, you have two options:
   - **Option A (Recommended):** Upload the file during deployment via Vercel CLI
   - **Option B:** Convert the JSON to a single environment variable `GOOGLE_SERVICE_ACCOUNT_JSON` and parse it in code

> For simplicity, Option A works if you deploy via `vercel --prod` from your local machine.

---

## 6. Update Code with Spreadsheet ID

Open `lib/google-sheets.js` and replace the placeholder:

```js
// Line ~11 — Replace this:
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";

// With your actual ID:
const SPREADSHEET_ID = "1ABC123def456_your_actual_id";
```

Also update the Sheet URL in `lib/mailer.js` (for the "View Google Sheet" link in notification emails):

```js
// Line ~18 — Replace this:
const SHEET_URL = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID";

// With your actual URL:
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ABC123def456_your_actual_id";
```

---

## 7. Test Locally

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (if not already)
npm install -g vercel

# Run the dev server with serverless functions
vercel dev
```

This starts both the Vite frontend AND the serverless API functions.

### Option B: Test API Separately

You can test the API endpoint using curl or Postman:

```bash
curl -X POST http://localhost:3000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "company": "Test Corp",
    "message": "Testing the form"
  }'
```

### What to Verify

- ✅ Form submits successfully (success message appears)
- ✅ Internal notification email arrives at `websiteleadscapturer@gmail.com`
- ✅ Auto-reply email arrives at the test email address
- ✅ New row appears in the Google Sheet with all data + timestamp
- ✅ Header row is auto-created on first submission (bold white text, green background)
- ✅ Auto-reply does NOT land in spam folder

---

## 8. Deploy to Vercel

```bash
# Deploy to production
vercel --prod
```

Or push to your Git repository — Vercel will auto-deploy.

### Post-Deploy Checklist

- [ ] Environment variables are set in Vercel dashboard
- [ ] `service-account.json` is accessible to the serverless function
- [ ] Test a real submission on the live site
- [ ] Verify emails arrive correctly
- [ ] Verify Google Sheet updates correctly

---

## 🔧 Troubleshooting

### "Authentication failed" / Gmail not sending
- Ensure 2-Step Verification is enabled
- Regenerate the App Password
- Check `GMAIL_USER` and `GMAIL_PASS` are correct (no spaces)

### "The caller does not have permission" / Sheets error
- Ensure the spreadsheet is shared with the service account email
- Ensure the Service Account has **Editor** access
- Check the Spreadsheet ID is correct

### "Service account key file not found"
- Ensure `service-account.json` is in the project root (same level as `package.json`)
- For Vercel production: ensure the file is included in the deployment

### "CORS error" in browser console
- The API route includes CORS headers for `*`
- If using `vercel dev`, it handles CORS automatically

### Auto-reply going to spam
- Both `html` and `text` versions are included (already implemented)
- Ensure `GMAIL_USER` is a legitimate Gmail address
- Consider setting up SPF/DKIM records if using a custom domain

---

## 📁 File Reference

| File | Purpose |
|------|---------|
| `api/submit.js` | Vercel serverless function (POST handler) |
| `lib/mailer.js` | Email sending logic (cached SMTP, 2 emails in parallel) |
| `lib/google-sheets.js` | Google Sheets append logic (cached auth, auto-header) |
| `service-account.json` | Google Cloud SA key (DO NOT COMMIT) |
| `.env.local` | Gmail credentials (DO NOT COMMIT) |
| `vercel.json` | Vercel config with API rewrites |
