import nodemailer from "nodemailer";

export interface QuoteData {
  id: string;
  name: string;
  phone?: string;
  email: string;
  service?: string;
  address?: string;
  message: string;
}

function formatMessage(data: QuoteData): string {
  const now = new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  return `
╔══════════════════════════════════╗
       LUXORA STEAM CLEANING
        New Quote Request
╚══════════════════════════════════╝

  Ref No   : #${data.id}
  Received : ${now}

──────────────────────────────────
  CLIENT DETAILS
──────────────────────────────────
  Name     : ${data.name}
  Phone    : ${data.phone || "Not provided"}
  Email    : ${data.email}

──────────────────────────────────
  SERVICE DETAILS
──────────────────────────────────
  Service  : ${data.service || "Not specified"}
  Address  : ${data.address || "Not provided"}

──────────────────────────────────
  MESSAGE
──────────────────────────────────
  ${data.message}

══════════════════════════════════
  Please respond within 2 hours.
  07543 958332 | luxorasteamcleaning.co.uk
══════════════════════════════════`.trim();
}

// ── WhatsApp via Green API (failover — 8 accounts) ───────────────────────────
async function notifyWhatsApp(data: QuoteData): Promise<void> {
  const to = process.env.GREEN_API_TO;
  if (!to) return;

  const accounts = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((n) => ({
      instance: process.env[`GREEN_API_${n}_INSTANCE`],
      token: process.env[`GREEN_API_${n}_TOKEN`],
    }))
    .filter((a) => a.instance && a.token);

  if (accounts.length === 0) return;

  const message = formatMessage(data);
  const chatId  = to.includes("@") ? to : `${to}@c.us`;

  for (let i = 0; i < accounts.length; i++) {
    const { instance, token } = accounts[i];
    try {
      const url = `https://api.green-api.com/waInstance${instance}/sendMessage/${token}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId, message }),
      });
      const json = await res.json() as { idMessage?: string };
      if (res.ok && json.idMessage) {
        console.log(`✅ WhatsApp sent via account ${i + 1}`);
        return;
      }
      console.warn(`⚠️  Account ${i + 1} failed — trying next...`);
    } catch (err) {
      console.warn(`⚠️  Account ${i + 1} error — trying next...`);
    }
  }
  console.error("❌ All Green API accounts failed");
}

// ── Gmail ─────────────────────────────────────────────────────────────────────
async function notifyEmail(data: QuoteData): Promise<void> {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  const to   = process.env.GMAIL_TO || user;
  if (!user || !pass) return;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Luxora Steam Cleaning" <${user}>`,
    to,
    subject: `New Quote Request — ${data.name} | Ref #${data.id}`,
    text: formatMessage(data),
    html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
      <div style="background:#1d4ed8;padding:24px;text-align:center">
        <h1 style="color:white;margin:0;font-size:20px;letter-spacing:1px">LUXORA STEAM CLEANING</h1>
        <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px">New Quote Request</p>
      </div>
      <div style="padding:24px;background:#f8fafc">
        <table style="width:100%;border-collapse:collapse">
          <tr><td colspan="2" style="padding:8px 0;border-bottom:2px solid #1d4ed8;font-weight:bold;color:#1d4ed8;font-size:13px;letter-spacing:1px">CLIENT DETAILS</td></tr>
          <tr><td style="padding:10px 0;color:#64748b;font-size:13px;width:120px">Name</td><td style="padding:10px 0;font-weight:600;font-size:14px">${data.name}</td></tr>
          <tr><td style="padding:10px 0;color:#64748b;font-size:13px">Phone</td><td style="padding:10px 0;font-weight:600;font-size:14px">${data.phone || "Not provided"}</td></tr>
          <tr><td style="padding:10px 0;color:#64748b;font-size:13px">Email</td><td style="padding:10px 0;font-weight:600;font-size:14px">${data.email}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 8px;border-bottom:2px solid #1d4ed8;font-weight:bold;color:#1d4ed8;font-size:13px;letter-spacing:1px">SERVICE DETAILS</td></tr>
          <tr><td style="padding:10px 0;color:#64748b;font-size:13px">Service</td><td style="padding:10px 0;font-weight:600;font-size:14px">${data.service || "Not specified"}</td></tr>
          <tr><td style="padding:10px 0;color:#64748b;font-size:13px">Address</td><td style="padding:10px 0;font-weight:600;font-size:14px">${data.address || "Not provided"}</td></tr>
          <tr><td colspan="2" style="padding:16px 0 8px;border-bottom:2px solid #1d4ed8;font-weight:bold;color:#1d4ed8;font-size:13px;letter-spacing:1px">MESSAGE</td></tr>
          <tr><td colspan="2" style="padding:10px 0;font-size:14px;line-height:1.6">${data.message}</td></tr>
        </table>
      </div>
      <div style="background:#1e293b;padding:16px;text-align:center">
        <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0">Ref #${data.id} &nbsp;·&nbsp; Please respond within 2 hours</p>
        <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:4px 0 0">07543 958332 &nbsp;·&nbsp; Steamcleaningserviceltd@gmail.com</p>
      </div>
    </div>`,
  });
  console.log("✅ Gmail sent");
}

// ── Slack ─────────────────────────────────────────────────────────────────────
async function notifySlack(data: QuoteData): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "🧹 New Quote Request — Luxora Steam Cleaning" },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name*\n${data.name}` },
            { type: "mrkdwn", text: `*Phone*\n${data.phone || "Not provided"}` },
            { type: "mrkdwn", text: `*Email*\n${data.email}` },
            { type: "mrkdwn", text: `*Service*\n${data.service || "Not specified"}` },
            { type: "mrkdwn", text: `*Address*\n${data.address || "Not provided"}` },
            { type: "mrkdwn", text: `*Ref No*\n#${data.id}` },
          ],
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message*\n${data.message}` },
        },
        { type: "divider" },
      ],
    }),
  });
  console.log("✅ Slack sent");
}

// ── Telegram ──────────────────────────────────────────────────────────────────
async function notifyTelegram(data: QuoteData): Promise<void> {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      parse_mode: "HTML",
      text: `<b>🧹 New Quote — Luxora Steam Cleaning</b>\n<b>Ref:</b> #${data.id}\n\n<b>Name:</b> ${data.name}\n<b>Phone:</b> ${data.phone || "Not provided"}\n<b>Email:</b> ${data.email}\n\n<b>Service:</b> ${data.service || "Not specified"}\n<b>Address:</b> ${data.address || "Not provided"}\n\n<b>Message:</b>\n${data.message}`,
    }),
  });
  console.log("✅ Telegram sent");
}

// ── Discord ───────────────────────────────────────────────────────────────────
async function notifyDiscord(data: QuoteData): Promise<void> {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "🧹 New Quote Request — Luxora Steam Cleaning",
        color: 0x1d4ed8,
        fields: [
          { name: "Name",    value: data.name,                    inline: true },
          { name: "Phone",   value: data.phone || "Not provided",  inline: true },
          { name: "Email",   value: data.email,                   inline: false },
          { name: "Service", value: data.service || "Not specified", inline: true },
          { name: "Address", value: data.address || "Not provided", inline: true },
          { name: "Message", value: data.message,                 inline: false },
        ],
        footer: { text: `Ref #${data.id} · Please respond within 2 hours` },
        timestamp: new Date().toISOString(),
      }],
    }),
  });
  console.log("✅ Discord sent");
}

// ── Run all ───────────────────────────────────────────────────────────────────
export async function notifyAll(data: QuoteData): Promise<void> {
  const channels = [
    { name: "WhatsApp", fn: () => notifyWhatsApp(data) },
    { name: "Gmail",    fn: () => notifyEmail(data)    },
    { name: "Slack",    fn: () => notifySlack(data)    },
    { name: "Telegram", fn: () => notifyTelegram(data) },
    { name: "Discord",  fn: () => notifyDiscord(data)  },
  ];
  const results = await Promise.allSettled(channels.map((c) => c.fn()));
  results.forEach((r, i) => {
    if (r.status === "rejected")
      console.error(`❌ ${channels[i].name} failed:`, r.reason);
  });
}
