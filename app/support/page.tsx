import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const SUPPORT_OPTIONS = [
  {
    title: "Sponsor a seat",
    body: "Cover the $50 tuition for a neighbor who needs this education but can't afford it yet.",
  },
  {
    title: "Underwrite ingredients",
    body: "Fresh produce, beans, and olive oil add up. Help us buy the staples that make workshops possible.",
  },
  {
    title: "Partner locally",
    body: "Bring L.I.F.E. into your school, congregation, or workplace as part of your wellness strategy.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Support</p>
          <h1 className="mt-3 text-4xl font-semibold">Fuel nonprofit education at the table.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Longevity Initiative for Food &amp; Education is a Georgia-based nonprofit corporation with 501(c)(3) status pending.
            Contributions sustain curriculum development, fresh ingredients, and sliding-scale access for community partners.
          </p>
          <div className="mt-6 rounded-2xl border border-[#dfd4c6] bg-white p-6 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">Sponsor a Seat</p>
            <p className="mt-2 text-[#2e2a26] font-semibold">Sponsor a seat.</p>
            <p className="mt-2 text-[#5b5149]">
              {"Cover the $50 tuition for a neighbor who needs this education but can't afford it yet."}
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {SUPPORT_OPTIONS.map((option) => (
            <div key={option.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6b7a46]">{option.title}</p>
              <p className="mt-3 text-[#5b5149]">{option.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Funding tiers</h2>
          <p className="mt-3 text-[#5b5149]">Choose the gift that keeps workshops running and accessible.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { amount: "$100", impact: "Funds a full cooking class for a family." },
              { amount: "$500", impact: "Covers a 30-minute keynote that sparks a school or workplace to act." },
              { amount: "$1,000", impact: "Underwrites a 60-minute interactive workshop with hands-on cooking." },
            ].map((tier) => (
              <div key={tier.amount} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-6">
                <p className="text-3xl font-serif text-[#2e2a26]">{tier.amount}</p>
                <p className="mt-3 text-sm text-[#5b5149]">{tier.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="support-form" className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Tell us how you&apos;d like to help</h2>
          <p className="mt-3 text-[#5b5149]">
            No payment is taken here. We&apos;ll follow up with contribution instructions, documentation, and any acknowledgments required for your records.
          </p>
          <div className="mt-6 space-y-4 text-[#5b5149]">
            <p>Tell us how you&apos;d like to help by using the Get Involved form on the homepage. We&apos;ll follow up with contribution instructions, acknowledgement letters, and reporting.</p>
            <a
              href="/#get-involved"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-[#6b7a46] px-5 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
            >
              Share my interest
            </a>
            <p className="text-xs">
              A portion of contributions connected to in-person programming may not be tax-deductible due to goods or services received. Final documentation will clarify the deductible amount, if any.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
