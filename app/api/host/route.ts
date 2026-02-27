import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const city = typeof body.city === "string" ? body.city.trim() : "";
    const reason = typeof body.reason === "string" ? body.reason.trim() : undefined;

    if (!name || !email || !city) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    console.log("HOST_INTEREST", { name, email, city, reason });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("HOST_INTEREST_ERROR", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
