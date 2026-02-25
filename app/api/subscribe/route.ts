import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString() || "";

    if (!email) {
      return NextResponse.json({ error: "Email required." }, { status: 400 });
    }

    const to = process.env.LIFE_TO_EMAIL;
    const from = process.env.LIFE_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json({ error: "Email not configured." }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: "L.I.F.E. Newsletter Signup",
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.redirect(new URL("/?subscribed=1", req.url));
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
