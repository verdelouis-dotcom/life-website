import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const ok = () =>
    NextResponse.redirect(new URL("/join?sponsor=success", req.url), { status: 303 });

  const bad = () =>
    NextResponse.redirect(new URL("/join?sponsor=error", req.url), { status: 303 });

  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const organization = formData.get("organization")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const to = process.env.LIFE_TO_EMAIL;
    const from = process.env.LIFE_FROM_EMAIL;

    if (!name || !email || !to || !from) return bad();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Sponsorship Inquiry - ${name}`,
      html: `
        <h2>Sponsorship Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) return bad();
    return ok();
  } catch {
    return bad();
  }
}
