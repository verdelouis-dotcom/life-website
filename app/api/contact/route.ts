import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const fallbackResendKey = "re_7MG8vGd7_B21EYN7crXL2LVrbjpyqnLzY";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY || fallbackResendKey;
    const resend = new Resend(apiKey);
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const organization = formData.get("organization")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const fallbackTo = "verde.louis@gmail.com";
    const fallbackFrom = "L.I.F.E. <onboarding@resend.dev>";
    const to = process.env.LIFE_TO_EMAIL || fallbackTo;
    const from = process.env.LIFE_FROM_EMAIL || fallbackFrom;

    const { error } = await resend.emails.send({
      from: from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Contact - ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.redirect(new URL("/contact?success=1", req.url));
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
