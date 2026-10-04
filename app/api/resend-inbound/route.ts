import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_INBOUND_WEBHOOK_SECRET;
  const forwardTo = process.env.LIFE_TO_EMAIL;

  if (!apiKey || !webhookSecret || !forwardTo) {
    console.error("RESEND_INBOUND_CONFIG_MISSING");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  const payload = await request.text();
  const resend = new Resend(apiKey);

  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") ?? "",
        timestamp: request.headers.get("svix-timestamp") ?? "",
        signature: request.headers.get("svix-signature") ?? "",
      },
      webhookSecret,
    });
  } catch (error) {
    console.error("RESEND_INBOUND_INVALID_SIGNATURE", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (event.type !== "email.received") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const originalFrom = event.data.from;
  const originalTo = event.data.to.join(", ");
  const subject = event.data.subject || "(no subject)";
  const intro = [
    "Temporarily forwarded from the LIFE mailbox.",
    `From: ${originalFrom}`,
    `To: ${originalTo}`,
    `Subject: ${subject}`,
    "The complete original message is attached.",
  ].join("\n");

  const { error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    to: forwardTo,
    from: "LIFE Mail Forwarder <info@longevityinitiativeforfoodandeducation.com>",
    passthrough: false,
    text: intro,
    html: `<p>Temporarily forwarded from the LIFE mailbox.</p><p><strong>From:</strong> ${escapeHtml(originalFrom)}<br><strong>To:</strong> ${escapeHtml(originalTo)}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><p>The complete original message is attached.</p>`,
  });

  if (error) {
    console.error("RESEND_INBOUND_FORWARD_ERROR", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  console.info("RESEND_INBOUND_FORWARDED", { emailId: event.data.email_id, to: forwardTo });
  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
