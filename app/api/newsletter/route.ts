import { NextResponse } from "next/server";

const FRIENDLY_FAILURE_MESSAGE =
  "We couldn’t connect to The Shared Table newsletter. Please try again soon or email info@longevityinitiativeforfoodandeducation.com.";

const INVALID_CREDENTIAL_HINTS = ["invalid api key", "unauthorized", "missing api key", "forbidden", "not allowed"];
const DUPLICATE_HINTS = ["already", "exists", "duplicate"];

function resolveEnv(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return undefined;
}

function collectMessages(payload: unknown): string[] {
  if (typeof payload === "string") {
    return [payload];
  }

  if (Array.isArray(payload)) {
    return payload.flatMap((item) => collectMessages(item));
  }

  if (typeof payload === "object" && payload !== null) {
    return Object.values(payload).flatMap((value) => collectMessages(value));
  }

  return [];
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const apiKey = resolveEnv("BEEHIIV_API_KEY", "NEXT_PUBLIC_BEEHIIV_API_KEY");
    const publicationId = resolveEnv("BEEHIIV_PUBLICATION_ID", "NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID");

    if (!apiKey || !publicationId) {
      console.error("BEEHIIV_CONFIG_MISSING", { hasApiKey: Boolean(apiKey), hasPublicationId: Boolean(publicationId) });
      return NextResponse.json(
        {
          ok: false,
          error: "Newsletter configuration is missing. Please alert info@longevityinitiativeforfoodandeducation.com.",
        },
        { status: 503 },
      );
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
      }),
    });

    if (!response.ok) {
      const raw = await response.text();
      let normalized = raw.toLowerCase();

      try {
        const parsed = JSON.parse(raw);
        const flattened = collectMessages(parsed).join(" ");
        normalized += ` ${flattened.toLowerCase()}`;
      } catch {
        // ignore JSON parse issues
      }

      console.error("BEEHIIV_ERROR", response.status, raw);

      const alreadySubscribed = DUPLICATE_HINTS.some((hint) => normalized.includes(hint));

      if (alreadySubscribed) {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }

      const credentialIssue =
        response.status === 401 || INVALID_CREDENTIAL_HINTS.some((hint) => normalized.includes(hint));

      if (credentialIssue) {
        return NextResponse.json({ ok: false, error: FRIENDLY_FAILURE_MESSAGE }, { status: 502 });
      }

      return NextResponse.json({ ok: false, error: "Subscription failed. Please try again soon." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NEWSLETTER_API_ERROR", error);
    return NextResponse.json({ ok: false, error: FRIENDLY_FAILURE_MESSAGE }, { status: 500 });
  }
}
