// ============================================================
// PHYTO INGREDIENTS — GOOGLE SHEETS MODULE
// Cached GoogleAuth + headerVerified flag + single batchUpdate
// ============================================================

const { google } = require("googleapis");
const path = require("path");

// ── Configuration ───────────────────────────────────────────
// IMPORTANT: Replace this with your actual Spreadsheet ID
// (found in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
const SHEET_NAME = "Leads";
const BRAND_COLOR_HEX = "#2d7a2d";

// Convert hex to RGB object for Sheets API
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { red: r, green: g, blue: b };
}

const BRAND_RGB = hexToRgb(BRAND_COLOR_HEX);

// ── Module-level singletons ─────────────────────────────────
// Cached GoogleAuth: avoids re-reading the service account JSON on every request
let authClient = null;
// Header verified flag: skip header check after first successful verification
let headerVerified = false;

async function getAuthClient() {
  if (!authClient) {
    const keyFilePath = path.resolve(process.cwd(), "service-account.json");
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    authClient = await auth.getClient();
  }
  return authClient;
}

async function getSheetsApi() {
  const auth = await getAuthClient();
  return google.sheets({ version: "v4", auth });
}

// ── Header row setup (runs only once per server lifecycle) ──
const HEADERS = ["Timestamp", "Name", "Email", "Phone", "Company", "Message"];
const COLUMN_WIDTHS = [180, 180, 250, 150, 200, 350]; // pixel widths

async function ensureHeaderRow(sheets) {
  if (headerVerified) return;

  try {
    // Check if the sheet exists and has a header
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:F1`,
    });

    const firstRow = response.data.values?.[0];
    if (firstRow && firstRow[0] === HEADERS[0]) {
      // Header already exists
      headerVerified = true;
      return;
    }
  } catch (err) {
    // Sheet might not exist yet, or range is empty — proceed to create header
    console.log("Header check info:", err.message);
  }

  // Write header row
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A1:F1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [HEADERS],
    },
  });

  // Get the sheet ID (needed for formatting requests)
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  });

  const sheet = spreadsheet.data.sheets.find(
    (s) => s.properties.title === SHEET_NAME
  );
  const sheetId = sheet ? sheet.properties.sheetId : 0;

  // ── Single batchUpdate: formatting + column widths + freeze ──
  // Combines ALL formatting into one API call for efficiency
  const requests = [
    // 1. Header row styling: bold white text on brand-colour background
    {
      repeatCell: {
        range: {
          sheetId,
          startRowIndex: 0,
          endRowIndex: 1,
          startColumnIndex: 0,
          endColumnIndex: HEADERS.length,
        },
        cell: {
          userEnteredFormat: {
            backgroundColor: BRAND_RGB,
            textFormat: {
              bold: true,
              fontSize: 11,
              foregroundColor: { red: 1, green: 1, blue: 1 },
            },
            horizontalAlignment: "CENTER",
            verticalAlignment: "MIDDLE",
            padding: { top: 6, bottom: 6, left: 8, right: 8 },
          },
        },
        fields:
          "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment,padding)",
      },
    },
    // 2. Set column widths
    ...COLUMN_WIDTHS.map((pixelSize, i) => ({
      updateDimensionProperties: {
        range: {
          sheetId,
          dimension: "COLUMNS",
          startIndex: i,
          endIndex: i + 1,
        },
        properties: { pixelSize },
        fields: "pixelSize",
      },
    })),
    // 3. Freeze the header row
    {
      updateSheetProperties: {
        properties: {
          sheetId,
          gridProperties: { frozenRowCount: 1 },
        },
        fields: "gridProperties.frozenRowCount",
      },
    },
    // 4. Set header row height
    {
      updateDimensionProperties: {
        range: {
          sheetId,
          dimension: "ROWS",
          startIndex: 0,
          endIndex: 1,
        },
        properties: { pixelSize: 40 },
        fields: "pixelSize",
      },
    },
  ];

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: { requests },
  });

  headerVerified = true;
  console.log("✅ Google Sheet header row created and styled.");
}

// ── Main export: write a lead row to the sheet ──────────────
async function writeToSheets(name, email, phone, company, message, timestamp) {
  const sheets = await getSheetsApi();

  // Ensure header row exists (runs only once)
  await ensureHeaderRow(sheets);

  // Append the new lead row
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A:F`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[timestamp, name, email, phone, company || "", message || ""]],
    },
  });
}

module.exports = { writeToSheets };
