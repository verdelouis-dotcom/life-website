import type { Metadata } from "next";
import { PRIMARY_DONATION_LINK } from "@/lib/donate-links";
import { DonationEmbedPanel } from "@/components/donate/DonationEmbedPanel";

const TIERS = [
  {
    amount: "$150",
    title: "Two Seats",
    description: "Sponsors two guests at a Fresh Pasta Cooking Class.",
  },
  {
    amount: "$225",
    title: "Three Seats",
    description: "Sponsors three guests at a Fresh Pasta Cooking Class.",
  },
  {
    amount: "$300",
    title: "Four Seats",
    description: "Sponsors four guests at a Fresh Pasta Cooking Class.",
  },
  {
    amount: "$375",
    title: "Five Seats",
    description: "Sponsors five guests at a Fresh Pasta Cooking Class.",
  },
  {
    amount: "$450",
    title: "Six Seats",
    description: "Sponsors six guests at a Fresh Pasta Cooking Class.",
  },
];

const DONATE_URL = "https://www.longevityinitiativeforfoodandeducation.com/donate";

export const metadata: Metadata = {
  title: "Support LIFE — Longevity Initiative for Food & Education",
  description: "Your donation keeps ingredients on the table and the habit library in families' hands.",
  alternates: {
    canonical: DONATE_URL,
  },
  openGraph: {
    title: "Support LIFE — Longevity Initiative for Food & Education",
    description: "Your donation keeps ingredients on the table and the habit library in families' hands.",
    url: DONATE_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "Support LIFE — Longevity Initiative for Food & Education",
    description: "Your donation keeps ingredients on the table and the habit library in families' hands.",
  },
};

export default function DonatePage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
          <p className="type-eyebrow text-center">Sponsor a Seat</p>
          <h1 className="section-heading text-center">Sponsor a Seat at the Table</h1>
          <p className="mt-4 type-body-muted text-center">
            Every dollar goes directly to LIFE. Your gift sponsors a seat at Lou and Kara&apos;s Fresh Pasta Cooking Class — bringing real food, real connection,
            and real health to one more family.
          </p>
          <p className="mt-5 body-sm text-[var(--text)] text-center">
            Your gift sponsors seats at Lou and Kara&apos;s Fresh Pasta Cooking Class — covering ingredients, wine, and the LIFE Guide for every guest. 100% of
            proceeds support LIFE&apos;s mission to bring real food, real connection, and real health back to American families.
          </p>
          <div className="mt-6 flex justify-center">
            <a href={PRIMARY_DONATION_LINK} target="_blank" rel="noreferrer" className="btn-solid px-6 text-base">
              Give Online
            </a>
          </div>
          <p className="mt-3 text-center text-sm text-[var(--muted)]">Prefer to discuss a grant or in-kind gift? Email info@longevityinitiativeforfoodandeducation.com.</p>
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

        <section className="mt-12 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <p className="type-eyebrow">Accountability</p>
          <p className="type-detail">
            LIFE is a Georgia nonprofit. Registered cooking experiences, board reviews, and public reporting keep donors informed about how these seats at the Fresh
            Pasta Cooking Class are translating into more shared meals and stronger families.
          </p>
        </section>

        <section className="mt-12">
          <DonationEmbedPanel />
        </section>
      </main>
</>
  );
}
