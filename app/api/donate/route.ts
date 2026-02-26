import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "Donations are not configured yet." },
      { status: 503 },
    );
  }

  const envBase = process.env.NEXT_PUBLIC_BASE_URL;
  const baseUrl = envBase && envBase.trim().length > 0 ? envBase : new URL(req.url).origin;

  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "L.I.F.E. Donation",
            },
            unit_amount: 5000, // $50 default
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl.replace(/\/$/, "")}/join?donation=success`,
      cancel_url: `${baseUrl.replace(/\/$/, "")}/join?donation=cancel`,
    });

    return NextResponse.redirect(session.url as string, { status: 303 });
  } catch {
    return NextResponse.json({ error: "Unable to start donation session" }, { status: 500 });
  }
}
