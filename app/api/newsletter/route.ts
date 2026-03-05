import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    // Placeholder: swap this block with Beehiiv or another ESP integration later.
    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NEWSLETTER_API_ERROR", error);
    return NextResponse.json({ ok: false, error: "Unable to subscribe at the moment." }, { status: 500 });
  }
}
