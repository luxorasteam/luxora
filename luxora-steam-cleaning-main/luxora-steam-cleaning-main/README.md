# Luxora Steam Cleaning Ltd

Marketing site and quote-request form for Luxora Steam Cleaning Ltd (Huddersfield, Halifax, Bradford).

React + TypeScript + Vite on the front end, with a single serverless function handling quote submissions. Deployed on Vercel.

---

## Quick start

```bash
npm install
npm run dev
```

The front end runs at http://localhost:5173.

To run the API locally as well, use the Vercel CLI so the `api/` functions are served alongside Vite:

```bash
vercel dev
```

Copy `.env.example` to `.env` and fill in the values first — without them the notification channels stay silent (each one is skipped when its variables are missing).

---

## Project structure

```
luxora-steam-cleaning/
├── index.html                  # HTML entry point
├── vercel.json                 # SPA rewrites
├── vite.config.ts              # Vite + @/ alias
├── tailwind.config.ts
│
├── api/                        # Vercel serverless functions
│   ├── submit-quote.ts         # POST /api/submit-quote
│   └── health.ts               # GET  /api/health
│
├── lib/
│   └── notify.ts               # WhatsApp, Gmail, Slack, Telegram, Discord
│
├── public/                     # Static images, favicon
└── src/
    ├── components/             # UI components
    ├── pages/                  # HomePage, ServicesPage, ServiceDetailPage
    └── data/services.ts        # Service catalogue
```

---

## How a quote request flows

1. `src/components/Contact.tsx` posts the form to `/api/submit-quote`.
2. `api/submit-quote.ts` validates the payload with Zod and generates a reference number (e.g. `260822-A3K9`).
3. `lib/notify.ts` fans the enquiry out to every configured channel in parallel.
4. The reference number is returned to the browser.

Notifications are awaited before the response is sent. A serverless function is frozen the moment it responds, so anything left running in the background would never be delivered.

Enquiries are not written to a database — the notification channels are the record. If you need them stored, add a hosted database (Vercel Postgres, Turso, Supabase); the local SQLite file used by the old Express server cannot work on Vercel, because the filesystem is ephemeral.

---

## Notification channels

Each channel activates only when its environment variables are set, so you can enable as many or as few as you want.

| Channel  | Variables |
|----------|-----------|
| WhatsApp | `GREEN_API_TO`, `GREEN_API_1_INSTANCE` / `GREEN_API_1_TOKEN` … up to `GREEN_API_8_*` |
| Gmail    | `GMAIL_USER`, `GMAIL_PASS` (app password), `GMAIL_TO` |
| Slack    | `SLACK_WEBHOOK_URL` |
| Telegram | `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` |
| Discord  | `DISCORD_WEBHOOK_URL` |

WhatsApp uses the Green API accounts as a failover chain: account 1 is tried first, and the next is used only if the previous one fails.

---

## Deployment

Pushes to `main` deploy automatically via the Vercel Git integration.

Environment variables live in the Vercel project settings, not in the repository. `.env` is git-ignored; `.env.example` lists the names.

```bash
npm run build      # production build into dist/
npm run typecheck  # tsc, no emit
```
