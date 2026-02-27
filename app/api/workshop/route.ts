import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : undefined;
    const dietary = typeof body.dietary === "string" ? body.dietary.trim() : undefined;

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    console.log("WORKSHOP_REGISTRATION", { name, email, phone, dietary });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WORKSHOP_REGISTRATION_ERROR", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
