import type { Metadata } from "next";
import { PRIMARY_DONATION_LINK } from "@/lib/donate-links";
import { DonationEmbedPanel } from "@/components/donate/DonationEmbedPanel";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const TIERS = [
  {
    amount: "$150",
    title: "Two Seats",
    description: "Sponsors 2 guests at a Fresh Pasta Cooking Class",
  },
  {
    amount: "$225",
    title: "Three Seats",
    description: "Sponsors 3 guests at a Fresh Pasta Cooking Class",
  },
  {
    amount: "$300",
    title: "Four Seats",
    description: "Sponsors 4 guests at a Fresh Pasta Cooking Class",
  },
  {
    amount: "$375",
    title: "Five Seats",
    description: "Sponsors 5 guests at a Fresh Pasta Cooking Class",
  },
  {
    amount: "$450",
    title: "Six Seats",
    description: "Sponsors a full class of 6 guests",
  },
];

const DONATE_URL = "https://www.longevityinitiativeforfoodandeducation.com/donate";

export const metadata: Metadata = {
  title: "Support LIFE — Bring Back the Table",
  description: "Every dollar helps LIFE host community cooking experiences and share the habit library with families who need it most.",
  alternates: {
    canonical: DONATE_URL,
  },
  openGraph: {
    title: "Support LIFE — Bring Back the Table",
    description: "Every dollar helps LIFE host community cooking experiences and share the habit library with families who need it most.",
    url: DONATE_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Support LIFE — Bring Back the Table",
    description: "Every dollar helps LIFE host community cooking experiences and share the habit library with families who need it most.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function DonatePage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
          <p className="type-eyebrow text-center">Support LIFE</p>
          <h1 className="section-heading text-center">Bring Back the Table</h1>
          <div className="mt-4 space-y-3 text-center text-base text-[var(--text)]">
            <p>We&apos;ve lost the table.</p>
            <p>Families don&apos;t eat together anymore. Connection has been replaced with convenience. Cooking skills are fading. And chronic disease, loneliness, and disconnection continue to rise.</p>
            <p>LIFE exists to bring it back — one table, one family, one habit at a time.</p>
            <p>You&apos;re not funding a cooking class. You&apos;re helping rebuild the way families live.</p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white p-8 text-center shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Our Goal This Year</p>
          <p className="mt-3 text-3xl font-serif text-[var(--life-forest)]">We&apos;re raising $10,000 to bring 35 families to the table.</p>
          <p className="mt-4 text-base text-[var(--text)]">
            Every dollar goes directly toward building community-based cooking experiences, longevity education, and access for families who wouldn&apos;t otherwise have it.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div key={tier.amount} className="flex flex-col rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="text-3xl font-serif text-[var(--life-forest)]">{tier.amount}</p>
              <p className="mt-2 type-detail uppercase tracking-[0.3em] text-[var(--olive)]">{tier.title}</p>
              <p className="mt-3 type-detail">{tier.description}</p>
              <a href={PRIMARY_DONATION_LINK} target="_blank" rel="noreferrer" className="btn-outline mt-6 w-full justify-center">
                Give {tier.amount}
              </a>
            </div>
          ))}
        </section>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          Donations directly fund free and subsidized experiences for families who wouldn&apos;t otherwise have access. Your gift is not the cost of a class — it is the reason one more family gets to be there.
        </p>

        <section className="mt-12 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <blockquote className="text-2xl font-serif text-[var(--life-forest)]">“I watched my grandparents live into their 90s — not because of trends, but because of how they lived. The food. The table. The connection. We&apos;re bringing that back — for this generation and the next.”</blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Lou Verde · Founder</p>
        </section>

        <section className="mt-10 space-y-6 rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 text-center shadow-sm">
          <p className="text-base text-[var(--text)]">Every dollar goes directly toward ingredients, education, and access. Lou and Kara donate their time and their kitchen. Your gift does the rest.</p>
          <div className="flex flex-col items-center gap-4">
            <a href={PRIMARY_DONATION_LINK} target="_blank" rel="noreferrer" className="btn-solid px-8 text-base">
              Bring Back the Table →
            </a>
            <div className="text-sm text-[var(--muted)]">
              <p>Want to experience it yourself?</p>
              <a href="/pasta-class" className="btn-outline mt-3 inline-flex justify-center px-6">
                Book the Fresh Pasta Cooking Class →
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <DonationEmbedPanel />
        </section>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">Prefer to discuss a grant or in-kind gift? Email info@longevityinitiativeforfoodandeducation.com.</p>
      </main>
</>
  );
}
