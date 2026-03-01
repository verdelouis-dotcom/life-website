import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const TIERS = [
  {
    amount: "$50",
    title: "Sponsor a Table",
    description: "Helps fund host toolkits and ingredients for community education tables.",
  },
  {
    amount: "$100",
    title: "Fund Toolkits",
    description: "Supports multiple host toolkits and resource distribution.",
  },
  {
    amount: "$500",
    title: "Underwrite Outreach",
    description: "Helps underwrite a local keynote and educational materials for a community group.",
  },
];

const USE_OF_FUNDS = [
  "Educational materials and toolkits",
  "Community tables and ingredient support",
  "Program measurement and reporting",
  "Local awareness and outreach",
];

const DONATION_LINK = "https://donorbox.org/life-initiative";

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Nonprofit Support</p>
          <h1 className="mt-4 text-4xl font-semibold">Donate</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Your support underwrites community education, cooking toolkits, and measurable program expansion.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={DONATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#556236]"
            >
              Give Online
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-6 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white"
            >
              Register a Table
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div key={tier.amount} className="rounded-3xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-3xl font-serif">{tier.amount}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{tier.title}</p>
              <p className="mt-3 text-sm text-[#5b5149]">{tier.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Use of Funds</p>
          <ul className="mt-4 space-y-2 text-sm text-[#5b5149]">
            {USE_OF_FUNDS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#5b5149]">
            Contributions help L.I.F.E. pilot a replicable model that advances public awareness and measurable participation.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
