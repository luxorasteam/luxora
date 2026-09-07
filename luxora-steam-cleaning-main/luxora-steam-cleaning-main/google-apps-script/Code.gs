// ─── Luxora Steam Cleaning — Google Apps Script ───────────────────────────────
// Deploy: Extensions → Apps Script → Deploy → Web App → Execute as Me → Anyone
// Paste the Web App URL in .env as GOOGLE_SCRIPT_URL

var WHATSAPP_PHONE  = "447543958332";  // ← UK number without +
var WHATSAPP_APIKEY = "";              // ← CallMeBot API key yahan daalo
var SHEET_NAME      = "Quotes";        // ← Google Sheet tab name

// ── Receive POST from website ─────────────────────────────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    saveToSheet(data);
    if (WHATSAPP_APIKEY) sendWhatsApp(data);
    return ok();
  } catch (err) {
    Logger.log(err);
    return ok(); // always return ok so website doesn't show error
  }
}

// ── Save to Google Sheet ──────────────────────────────────────────────────────
function saveToSheet(data) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Name", "Phone", "Email", "Service", "Address", "Message"]);
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#1d4ed8").setFontColor("#ffffff");
  }

  sheet.appendRow([
    new Date(),
    data.name    || "",
    data.phone   || "",
    data.email   || "",
    data.service || "",
    data.address || "",
    data.message || ""
  ]);
}

// ── Send WhatsApp via CallMeBot ───────────────────────────────────────────────
function sendWhatsApp(data) {
  var msg = [
    "🧹 New Quote — Luxora Steam Cleaning",
    "─────────────────────────",
    "👤 Name:    " + data.name,
    "📞 Phone:   " + (data.phone   || "Not provided"),
    "📧 Email:   " + data.email,
    "🛠 Service: " + (data.service || "Not specified"),
    "📍 Address: " + (data.address || "Not provided"),
    "💬 Message: " + data.message
  ].join("\n");

  var url = "https://api.callmebot.com/whatsapp.php"
    + "?phone="  + WHATSAPP_PHONE
    + "&text="   + encodeURIComponent(msg)
    + "&apikey=" + WHATSAPP_APIKEY;

  UrlFetchApp.fetch(url, { muteHttpExceptions: true });
}

function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
