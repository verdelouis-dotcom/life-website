import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackResendKey = "re_7MG8vGd7_B21EYN7crXL2LVrbjpyqnLzY";

type SponsorFields = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  budget?: string;
  message?: string;
};

type ParsedPayload = SponsorFields & { amount?: string };

async function parsePayload(req: Request): Promise<ParsedPayload> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    return {
      name: String(body?.name ?? ""),
      email: String(body?.email ?? ""),
      phone: String(body?.phone ?? ""),
      organization: String(body?.organization ?? ""),
      budget: String(body?.budget ?? body?.amount ?? ""),
      message: String(body?.message ?? ""),
      amount: String(body?.amount ?? ""),
    };
  }

  const formData = await req.formData();
  return {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    organization: formData.get("organization")?.toString() ?? "",
    budget: formData.get("budget")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };
}

export async function POST(req: Request) {
  const ok = () =>
    NextResponse.redirect(new URL("/join?sponsor=success", req.url), { status: 303 });

  const bad = () =>
    NextResponse.redirect(new URL("/join?sponsor=error", req.url), { status: 303 });

  const apiKey = process.env.RESEND_API_KEY || fallbackResendKey;
  const fallbackEmail = "verde.louis@gmail.com";
  const to = process.env.LIFE_TO_EMAIL || fallbackEmail;
  const from = process.env.LIFE_FROM_EMAIL || fallbackEmail;

  const resend = new Resend(apiKey);

  try {
    const { name, email, phone, organization, budget, message, amount } = await parsePayload(req);

    if (!name || !email) {
      return bad();
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Sponsorship Inquiry - ${name}`,
      html: `
        <h2>Sponsorship Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? ""}</p>
        <p><strong>Organization:</strong> ${organization ?? ""}</p>
        <p><strong>Budget:</strong> ${budget || amount || ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message ?? ""}</p>
      `,
    });

    if (error) {
      return bad();
    }

    return ok();
  } catch {
    return bad();
  }
}
