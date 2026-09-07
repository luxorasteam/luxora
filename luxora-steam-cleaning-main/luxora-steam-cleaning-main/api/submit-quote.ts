import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { notifyAll } from "../lib/notify.js";

// Notifications are awaited below, so give the function room to finish them.
export const config = { maxDuration: 30 };

const quoteSchema = z.object({
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email(),
  service: z.string().optional(),
  address: z.string().optional(),
  message: z.string().min(1),
});

/** Reference number for the enquiry, e.g. 260822-A3K9. */
function makeRef(): string {
  const ymd = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${ymd}-${rnd}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = quoteSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid input", details: result.error.flatten() });
    }

    const { name, phone, email, service, address, message } = result.data;
    const id = makeRef();

    console.log(`New quote from ${name} <${email}> - Ref #${id}`);

    // Must be awaited: the function is frozen as soon as the response is sent,
    // so fire-and-forget notifications would never actually be delivered.
    await notifyAll({ id, name, phone, email, service, address, message });

    return res.status(200).json({ success: true, id });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
