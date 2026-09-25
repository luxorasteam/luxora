import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { notifyAll } from "@/lib/notify";

export const maxDuration = 30;

const quoteSchema = z.object({
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().email(),
  service: z.string().optional(),
  address: z.string().optional(),
  message: z.string().min(1),
});

function makeRef(): string {
  const ymd = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${ymd}-${rnd}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = quoteSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, email, service, address, message } = result.data;
    const id = makeRef();

    console.log(`New quote from ${name} <${email}> - Ref #${id}`);

    await notifyAll({ id, name, phone, email, service, address, message });

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
