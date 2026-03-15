import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    if (!gmailUser || !gmailPass) {
      console.error("Missing Gmail credentials for contact form.");
      return NextResponse.json({ ok: false, error: FRIENDLY_ERROR }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const to = process.env.LIFE_TO_EMAIL || gmailUser;

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

    try {
      await transporter.sendMail({
        from: `"LIFE" <${gmailUser}>`,
        to,
        replyTo: email,
        subject,
        text,
        attachments: attachments?.map((attachment) => ({
          filename: attachment.filename,
          content: attachment.content,
          encoding: "base64",
        })),
      });
    } catch (error) {
      console.error("CONTACT_EMAIL_SEND_ERROR", error);
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
