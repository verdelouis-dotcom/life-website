import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackResendKey = "re_7MG8vGd7_B21EYN7crXL2LVrbjpyqnLzY";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY || fallbackResendKey;
  const resend = new Resend(apiKey);
  const fallbackTo = "verde.louis@gmail.com";
  const fallbackFrom = "L.I.F.E. <onboarding@resend.dev>";
  const to = process.env.LIFE_TO_EMAIL || fallbackTo;
  const from = process.env.LIFE_FROM_EMAIL || fallbackFrom;

  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const city = formData.get("city")?.toString() ?? "";

    if (!name || !email) {
      return NextResponse.redirect(new URL("/join?host=error", req.url), { status: 303 });
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Host Interest - ${name}`,
      html: `
        <h2>New Host Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
      `,
    });

    if (error) {
      return NextResponse.redirect(new URL("/join?host=error", req.url), { status: 303 });
    }

    return NextResponse.redirect(new URL("/join?host=success", req.url), { status: 303 });
  } catch {
    return NextResponse.redirect(new URL("/join?host=error", req.url), { status: 303 });
  }
}
