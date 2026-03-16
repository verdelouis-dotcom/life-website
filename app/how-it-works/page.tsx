import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/how-it-works";

export const metadata: Metadata = {
  title: "How LIFE Tables Work | Longevity Initiative",
  description: "See how the LIFE shared table model spreads longevity habits through community meals, cooking education, and connection.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How LIFE Tables Work | Longevity Initiative",
    description: "See how the LIFE shared table model spreads longevity habits through community meals, cooking education, and connection.",
    url: PAGE_URL,
  },
  twitter: {
    title: "How LIFE Tables Work | Longevity Initiative",
    description: "See how the LIFE shared table model spreads longevity habits through community meals, cooking education, and connection.",
  },
};

const STEP_CONTENT = [
  {
    title: "Step 1: Attend a Workshop",
    body: "Participants cook together, learn the six LIFE pillars, and see the rhythm first-hand. Workshops prioritize fresh ingredients, shared preparation, and accountability.",
  },
  {
    title: "Step 2: Host a LIFE Table",
    body: "After attending, participants host a meal for friends or neighbors using the LIFE host guide. Any cuisine works—as long as it emphasizes real food and conversation.",
  },
  {
    title: "Step 3: Register the Table",
    body: "Every table is registered online so participation, attendance, and reach can be measured. This keeps the model grant-ready and transparent.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Program Overview</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">How LIFE Works</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              LIFE keeps the movement simple: Attend a workshop, host a table, register the gathering. The Metro Atlanta pilot is where each
              step is field-tested before expanding to additional regions.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-12 md:grid-cols-3">
          {STEP_CONTENT.map((step) => (
            <article key={step.title} className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[var(--life-forest)]">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">{step.body}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">How We Measure Impact</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              Registration data, workshop attendance, and host follow-up allow LIFE to report on reach, repeat gatherings, and qualitative
              stories. During the pilot we share quarterly summaries with donors and partners so replication decisions stay rooted in data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Do I need experience to host a LIFE table?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">No. Hosts receive the LIFE guide, ingredient templates, and facilitation prompts. Any cuisine works as long as it uses fresh ingredients and includes a seated conversation.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What happens after I host?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">You register the table online, submit attendance, and note any stories. The LIFE team follows up with resources so you can host again or mentor another host.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Is registering a table required?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Yes. Registration is how LIFE proves impact to grants and keeps ingredients flowing to the next host. Without it, we can’t responsibly expand.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Who can participate?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Workshops currently focus on Metro Atlanta neighborhoods, churches, and nonprofit partners. We welcome inquiries from other regions for future phases.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Ready to participate?</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the Assessment
              </Link>
              <Link href="/host" className="btn-outline px-8 text-base">
                Host a Table
              </Link>
              <Link href="/register" className="btn-outline px-8 text-base">
                Register a Table
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
