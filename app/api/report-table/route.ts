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

  const requestUrl = new URL(req.url);
  const referer = req.headers.get("referer") || "";
  const context = requestUrl.searchParams.get("context") || (referer.includes("/register") ? "register" : "join");

  const redirect = (status: "success" | "error") => {
    if (context === "register") {
      const target = status === "success" ? "/register/thanks" : "/register?error=1";
      return NextResponse.redirect(new URL(target, requestUrl.origin), { status: 303 });
    }
    return NextResponse.redirect(new URL(`/join?report=${status}`, requestUrl.origin), { status: 303 });
  };

  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const city = formData.get("city")?.toString().trim() ?? "";
    const state = formData.get("state")?.toString().trim() ?? "";
    const tableDate = formData.get("tableDate")?.toString().trim() ?? "";
    const notes = formData.get("notes")?.toString().trim() ?? "";
    const totalPeople = formData.get("totalPeople")?.toString().trim() ?? "";
    const hostAgain = formData.get("hostAgain")?.toString().trim() ?? "";
    const orgInterest = formData.get("organizationInterest")?.toString().trim() ?? "";

    if (!name || !email || !tableDate || !totalPeople) {
      return redirect("error");
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `L.I.F.E. Table Report - ${name}`,
      html: `
        <h2>New Table Report</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City / State:</strong> ${city} ${state}</p>
        <p><strong>Date:</strong> ${tableDate}</p>
        <p><strong>Total Guests:</strong> ${totalPeople}</p>
        <p><strong>Would host again:</strong> ${hostAgain || "n/a"}</p>
        <p><strong>Interested in organizational L.I.F.E.:</strong> ${orgInterest || "n/a"}</p>
        <p><strong>Notes:</strong></p>
        <p>${notes}</p>
      `,
    });

    if (error) {
      return redirect("error");
    }

    return redirect("success");
  } catch {
    return redirect("error");
  }
}
