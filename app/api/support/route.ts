import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const amount = typeof body.amount === "string" ? body.amount.trim() : undefined;

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LIFE_TO_EMAIL || "verde.louis@gmail.com";
    const from = process.env.LIFE_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("SUPPORT_EMAIL_CONFIG_MISSING");
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Support Interest — ${name}`,
      html: `
        <h2>Support Interest</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contribution amount (optional):</strong> ${amount || "Not specified"}</p>
      `,
    });

    if (error) {
      console.error("SUPPORT_EMAIL_ERROR", error);
      return NextResponse.json({ ok: false, error: "Unable to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SUPPORT_INTEREST_ERROR", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
