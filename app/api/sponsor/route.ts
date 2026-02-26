import { NextResponse } from "next/server";
import { Resend } from "resend";

// Optional, but can help ensure it's treated as dynamic at runtime
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // READ ENV INSIDE THE HANDLER (never at module scope)
  const apiKey = process.env.RESEND_API_KEY;

  // If you want sponsor emails disabled until configured:
  if (!apiKey) {
    // If your frontend expects redirects, you can redirect instead of JSON:
    // return NextResponse.redirect(new URL("/join?error=email_not_configured", req.url));
    return NextResponse.json(
      { ok: false, error: "Email is not configured yet." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  // Parse request safely
  const body = await req.json().catch(() => ({}));
  const name = String((body as any)?.name ?? "");
  const email = String((body as any)?.email ?? "");
  const amount = String((body as any)?.amount ?? "");
  const message = String((body as any)?.message ?? "");

  // Send email (adjust to your desired recipient)
  await resend.emails.send({
    from: "L.I.F.E. <onboarding@resend.dev>",
    to: ["louverde@your-email.com"], // <-- put your real receiving email here
    subject: `New sponsor inquiry${name ? ` from ${name}` : ""}`,
    replyTo: email || undefined,
    text: `Name: ${name}\nEmail: ${email}\nAmount: ${amount}\n\nMessage:\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
