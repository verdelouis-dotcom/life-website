import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { DONATION_LINKS, PRIMARY_DONATION_LINK } from "@/lib/donate-links";

const TIERS = [
  {
    amount: "$50",
    title: "One Shared Table",
    description:
      "Provides ingredients and basic tools for one LIFE table where people gather to cook, learn, and share a meal prepared with fresh ingredients.",
    key: 50,
  },
  {
    amount: "$100",
    title: "Two Shared Tables",
    description: "Provides ingredients and tools for two LIFE tables, helping more families experience the power of cooking and eating together.",
    key: 100,
  },
  {
    amount: "$500",
    title: "Host a Year of Tables",
    description: "Funds a LIFE host with the equipment, tools, and educational resources needed to lead shared meals throughout the year.",
    key: 500,
  },
  {
    amount: "$1,000",
    title: "Community Impact",
    description: "Helps fund multiple months of LIFE tables and supports the launch of new hosts in the community.",
    key: 1000,
  },
];

const USE_OF_FUNDS = [
  "Educational materials and toolkits",
  "Ingredients and table supplies",
  "Program measurement and reporting",
  "Local outreach and awareness",
];

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[var(--text)]">
        <section className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-10 text-center shadow-sm">
          <p className="type-eyebrow">Nonprofit Support</p>
          <h1 className="section-heading">Donate</h1>
          <p className="mt-4 type-body-muted">Your support underwrites tools, ingredients, materials, and community education.</p>
          <a href={PRIMARY_DONATION_LINK} target="_blank" rel="noreferrer" className="btn-solid mt-6 px-6 text-base">
            Give Online
          </a>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div key={tier.amount} className="flex flex-col rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="text-3xl font-serif text-[var(--life-forest)]">{tier.amount}</p>
              <p className="mt-2 type-detail uppercase tracking-[0.3em] text-[var(--olive)]">{tier.title}</p>
              <p className="mt-3 type-detail">{tier.description}</p>
              <a
                href={DONATION_LINKS[tier.key as 50 | 100 | 500 | 1000]}
                target="_blank"
                rel="noreferrer"
                className="btn-outline mt-6 w-full justify-center"
              >
                Give {tier.amount}
              </a>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[var(--border)] bg-white p-10 shadow-sm">
          <p className="type-eyebrow">Use of Funds</p>
          <ul className="mt-4 space-y-2 type-detail">
            {USE_OF_FUNDS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 type-detail">
            Contributions help LIFE pilot a replicable model that advances public awareness and measurable participation.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
