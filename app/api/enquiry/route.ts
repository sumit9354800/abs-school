import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const s = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const d = {
    parent: s(body.parent, 100),
    child: s(body.child, 100),
    mobile: s(body.mobile, 10),
    email: s(body.email, 150),
    cls: s(body.cls, 30),
    msg: s(body.msg, 1000),
    consent: body.consent === true,
  };

  const valid =
    d.parent &&
    d.child &&
    /^[6-9]\d{9}$/.test(d.mobile) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    d.cls &&
    d.consent;

  if (!valid) {
    return NextResponse.json({ ok: false, error: "Please check the form fields." }, { status: 422 });
  }

  /**
   * Enquiry kahan jayegi?
   * .env.local mein ENQUIRY_WEBHOOK_URL set karo (Google Apps Script / Make / Zapier / n8n webhook).
   * Set nahi hai to forwarded=false jayega aur form user ko WhatsApp se bhejne ka option dega.
   */
  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  let forwarded = false;
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, submittedAt: new Date().toISOString() }),
      });
      forwarded = r.ok;
    } catch {
      forwarded = false;
    }
  }

  return NextResponse.json({ ok: true, forwarded });
}
