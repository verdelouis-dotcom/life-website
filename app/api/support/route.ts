import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const amount = typeof body.amount === "string" ? body.amount.trim() : undefined;

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    console.log("SUPPORT_INTEREST", { name, email, amount });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SUPPORT_INTEREST_ERROR", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
