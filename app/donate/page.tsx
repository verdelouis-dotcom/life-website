import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { DONATION_LINKS, PRIMARY_DONATION_LINK } from "@/lib/donate-links";

const TIERS = [
  {
    amount: "$50",
    title: "One Shared Table",
    description:
      "Provides ingredients and basic tools for one L.I.F.E. table where people gather to cook, learn, and share a Mediterranean meal together.",
    key: 50,
  },
  {
    amount: "$100",
    title: "Two Shared Tables",
    description: "Provides ingredients and tools for two L.I.F.E. tables, helping more families experience the power of cooking and eating together.",
    key: 100,
  },
  {
    amount: "$500",
    title: "Host a Year of Tables",
    description: "Funds a L.I.F.E. host with the equipment, tools, and educational resources needed to lead shared meals throughout the year.",
    key: 500,
  },
  {
    amount: "$1,000",
    title: "Community Impact",
    description: "Helps fund multiple months of L.I.F.E. tables and supports the launch of new hosts in the community.",
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
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6b7a46]">Nonprofit Support</p>
          <h1 className="mt-4 text-4xl font-semibold">Donate</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Your support underwrites tools, ingredients, materials, and community education.
          </p>
          <a
            href={PRIMARY_DONATION_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#556236]"
          >
            Give Online
          </a>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div key={tier.amount} className="flex flex-col rounded-3xl border border-[#dfd4c6] bg-white p-6 shadow-sm">
              <p className="text-3xl font-serif">{tier.amount}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{tier.title}</p>
              <p className="mt-3 text-sm text-[#5b5149]">{tier.description}</p>
              <a
                href={DONATION_LINKS[tier.key as 50 | 100 | 500 | 1000]}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#6b7a46] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#556236]"
              >
                Give {tier.amount}
              </a>
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
