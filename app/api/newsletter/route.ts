import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Missing Beehiiv credentials");
      return NextResponse.json({ ok: false, error: "Configuration error" }, { status: 500 });
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
      const errorText = await response.text();
      console.error("BEEHIIV_ERROR", response.status, errorText);

      let alreadySubscribed = false;
      try {
        const parsed = JSON.parse(errorText);
        const message =
          typeof parsed?.error === "string"
            ? parsed.error
            : typeof parsed?.message === "string"
              ? parsed.message
              : Array.isArray(parsed?.errors) && parsed.errors.length > 0
                ? parsed.errors.join(" ")
                : "";
        if (message.toLowerCase().includes("already")) {
          alreadySubscribed = true;
        }
      } catch (parseError) {
        if (errorText.toLowerCase().includes("already")) {
          alreadySubscribed = true;
        }
      }

      if (alreadySubscribed) {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }

      return NextResponse.json({ ok: false, error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NEWSLETTER_API_ERROR", error);
    return NextResponse.json({ ok: false, error: "Unable to subscribe at the moment." }, { status: 500 });
  }
}
