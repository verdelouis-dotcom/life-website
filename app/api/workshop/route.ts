import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const redirectSuccess = () =>
    NextResponse.redirect(new URL("/workshops?success=1", req.url), { status: 303 });

  const redirectError = () =>
    NextResponse.redirect(new URL("/workshops?error=1", req.url), { status: 303 });

  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const organization = formData.get("organization")?.toString() || "";
    const city = formData.get("city")?.toString() || "";
    const preferredDate = formData.get("preferredDate")?.toString() || "";
    const attendees = formData.get("attendees")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const to = process.env.LIFE_TO_EMAIL;
    const from = process.env.LIFE_FROM_EMAIL;

    if (!name || !email || !to || !from) return redirectError();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Workshop Request - ${name}`,
      html: `
        <h2>Workshop Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Estimated Attendees:</strong> ${attendees}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) return redirectError();

    return redirectSuccess();
  } catch {
    return redirectError();
  }
}
