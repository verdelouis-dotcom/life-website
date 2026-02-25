import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
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
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/join?donation=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/join?donation=cancel`,
    });

    return NextResponse.redirect(session.url as string, { status: 303 });
  } catch {
    return NextResponse.json({ error: "Unable to start donation session" }, { status: 500 });
  }
}
