import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  city?: string;
  message?: string;
  interestType?: string;
  source?: string;
};

const FRIENDLY_ERROR =
  "Sorry — something went wrong. Please try again or email us at info@longevityinitiativeforfoodandeducation.com.";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 400 });
    }

    const name = typeof body.name === "string" && body.name.trim() ? body.name.trim() : "N/A";
    const city = typeof body.city === "string" && body.city.trim() ? body.city.trim() : "N/A";
    const interestType =
      typeof body.interestType === "string" && body.interestType.trim()
        ? body.interestType.trim()
        : "General inquiry";
    const message =
      typeof body.message === "string" && body.message.trim()
        ? body.message.trim()
        : "No additional message provided.";
    const source = typeof body.source === "string" ? body.source.trim() : undefined;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 503 });
    }

    const to = process.env.LIFE_TO_EMAIL || "verde.louis@gmail.com";
    const configuredFrom = process.env.LIFE_FROM_EMAIL;
    const fallbackFrom = "L.I.F.E. <onboarding@resend.dev>";
    const resend = new Resend(apiKey);

    const subject = `L.I.F.E. Inquiry — ${interestType}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `City: ${city}`,
      `Interest: ${interestType}`,
      source ? `Source: ${source}` : undefined,
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    async function send(fromAddress: string) {
      return resend.emails.send({
        from: fromAddress,
        to: [to],
        replyTo: email,
        subject,
        text,
      });
    }

    const primaryFrom = configuredFrom || fallbackFrom;
    let result = await send(primaryFrom);

    if (result.error && configuredFrom) {
      console.error("Resend send error with configured from", result.error);
      result = await send(fallbackFrom);
    }

    if (result.error) {
      console.error("Resend send error", result.error);
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 500 });
  }
}
