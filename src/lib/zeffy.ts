const DEFAULT_FORM_ID = process.env.NEXT_PUBLIC_ZEFFY_FORM_ID ?? "donate-to-change-lives-9282";

const BASE_EMBED_URL = `https://www.zeffy.com/embed/donation-form/${DEFAULT_FORM_ID}`;

export function getZeffyEmbedUrl(amount?: number) {
  const params = new URLSearchParams();
  if (amount && amount >= 10) {
    params.set("amount", Math.round(amount).toString());
  }
  params.set("utm_source", "life-site");
  params.set("utm_medium", "donation-widget");

  const query = params.toString();
  return query ? `${BASE_EMBED_URL}?${query}` : BASE_EMBED_URL;
}

export function getZeffyPublicLink() {
  return `https://www.zeffy.com/en-US/donation-form/${DEFAULT_FORM_ID}`;
}
