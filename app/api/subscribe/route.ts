import { NextResponse } from "next/server";

const API_KEY = process.env.BEEHIIV_API_KEY ?? process.env.BEHIV_API_KEY;
const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID ?? process.env.BEHIV_PUBLICATION_ID;

const BASE_URL = PUBLICATION_ID ? `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}` : null;

type Payload = {
  email?: string;
  tag?: string;
};

async function addTag(subscriptionId: string, tag: string) {
  if (!BASE_URL || !API_KEY) return;
  await fetch(`${BASE_URL}/subscriptions/${subscriptionId}/tags`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tags: [tag] }),
  });
}

async function lookupSubscriptionId(email: string) {
  if (!BASE_URL || !API_KEY) return null;
  const response = await fetch(`${BASE_URL}/subscriptions/by_email/${encodeURIComponent(email)}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { data?: { id?: string } };
  return payload.data?.id ?? null;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const email = body.email?.trim().toLowerCase();
  const tag = body.tag?.trim();

  if (!email || !tag) {
    return NextResponse.json({ error: "Email and tag are required." }, { status: 400 });
  }

  if (!API_KEY || !BASE_URL) {
    console.warn("Beehiiv credentials missing; skipping remote sync.");
    return NextResponse.json({ success: true, skipped: true });
  }

  let subscriptionId: string | null = null;

  try {
    const createResponse = await fetch(`${BASE_URL}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: false,
        double_opt_override: "off",
      }),
    });

    if (createResponse.ok) {
      const payload = (await createResponse.json()) as { data?: { id?: string } };
      subscriptionId = payload.data?.id ?? null;
    } else if (createResponse.status === 409 || createResponse.status === 400 || createResponse.status === 422) {
      subscriptionId = await lookupSubscriptionId(email);
    } else {
      const errorText = await createResponse.text();
      console.error("Beehiiv subscription error:", errorText);
    }

    if (subscriptionId) {
      await addTag(subscriptionId, tag);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to sync with Beehiiv:", error);
    return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
  }
}
