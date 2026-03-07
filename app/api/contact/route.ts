import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type AttachmentPayload = {
  name?: string;
  dataUrl?: string;
  base64?: string;
};

type Payload = {
  name?: string;
  email?: string;
  city?: string;
  message?: string;
  interestType?: string;
  source?: string;
  attachment?: AttachmentPayload | string | null;
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
    const attachment = normalizeAttachment(body.attachment);
    const attachments = attachment ? [{ filename: attachment.filename, content: attachment.content }] : undefined;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 503 });
    }

    const to = process.env.LIFE_TO_EMAIL || "verde.louis@gmail.com";
    const configuredFrom = process.env.LIFE_FROM_EMAIL;
    const fallbackFrom = "LIFE <onboarding@resend.dev>";
    const resend = new Resend(apiKey);

    const subject = `LIFE Inquiry — ${interestType}`;
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
      try {
        const response = await resend.emails.send({
          from: fromAddress,
          to: [to],
          replyTo: email,
          subject,
          text,
          attachments,
        });

        if (response.error) {
          throw response.error;
        }

        return true;
      } catch (error) {
        console.error("RESEND_SEND_ERROR", { fromAddress, error });
        return false;
      }
    }

    const primaryFrom = configuredFrom || fallbackFrom;
    let sent = await send(primaryFrom);

    if (!sent && configuredFrom) {
      sent = await send(fallbackFrom);
    }

    if (!sent) {
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);
    return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 500 });
  }
}

function normalizeAttachment(raw: unknown): { filename: string; content: string } | null {
  if (!raw) return null;

  const fallbackName = `attachment-${Date.now()}.jpg`;
  let dataUrl: string | undefined;
  let name: string | undefined;

  if (typeof raw === "string") {
    dataUrl = raw.trim();
  } else if (typeof raw === "object" && raw !== null) {
    const payload = raw as AttachmentPayload;
    name = typeof payload.name === "string" && payload.name.trim() ? payload.name.trim() : undefined;
    dataUrl = typeof payload.base64 === "string" && payload.base64
      ? payload.base64
      : typeof payload.dataUrl === "string"
        ? payload.dataUrl
        : undefined;
  }

  if (!dataUrl) {
    return null;
  }

  let content = dataUrl;
  let mime: string | undefined;

  const match = dataUrl.match(/^data:(.*?);base64,(.+)$/);
  if (match) {
    mime = match[1];
    content = match[2];
  }

  if (!content) {
    return null;
  }

  let filename = name || fallbackName;
  if (mime && !filename.includes(".")) {
    const extension = mime.split("/")[1] || "jpg";
    filename = `${filename}.${extension}`;
  }

  return { filename, content };
}
