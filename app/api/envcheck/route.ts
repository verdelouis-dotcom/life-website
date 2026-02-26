import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasLifeTo: !!process.env.LIFE_TO_EMAIL,
    hasLifeFrom: !!process.env.LIFE_FROM_EMAIL,
  });
}
