import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FaqSchema from "@/components/seo/FaqSchema";

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
    title: "1. Experience a Table",
    body: "Sit down, share a meal, and take part in real conversation.",
  },
  {
    title: "2. Bring People Together",
    body: "Host a simple table with friends, family, or your community. We guide you through it—step by step. Most hosts start small.",
  },
  {
    title: "3. Share What Happened",
    body: "After your table, share your experience. Each gathering helps grow the movement—one table at a time.",
  },
];

const HOW_IT_WORKS_FAQ = [
  {
    question: "Do I need experience to host a LIFE table?",
    answer:
      "No. Hosts receive the LIFE guide, ingredient templates, and facilitation prompts. Any cuisine works as long as it uses fresh ingredients and includes a seated conversation.",
  },
  {
    question: "What happens after I host?",
    answer: "You register the table online, submit attendance, and note any stories. The LIFE team follows up with resources so you can host again or mentor another host.",
  },
  {
    question: "Is registering a table required?",
    answer: "Yes. Registration is how LIFE proves impact to grants and keeps ingredients flowing to the next host. Without it, we can’t responsibly expand.",
  },
  {
    question: "Who can participate?",
    answer:
      "We focus on communities where LIFE hosts are active. If you’d like to bring the model to your area, reach out and we’ll share how the process works.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">The Model</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">How LIFE Works</h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Simple. Shared. Meant to be repeated.</p>
            <p className="mt-4 text-lg text-[var(--muted)]">LIFE is built around one idea: bring people together around the table.</p>
          </div>
        </section>

        <FaqSchema items={HOW_IT_WORKS_FAQ} />

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {STEP_CONTENT.map((step) => (
              <article key={step.title} className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--life-forest)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text)]">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/host" className="btn-solid px-8 text-base">
              Host a LIFE Table
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-8">
          <div className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--life-forest)]">Some hosts continue beyond their first table.</h3>
            <p className="mt-3 text-sm text-[var(--text)]">
              After hosting once, many neighbors choose to become <strong>LIFE Host Champions</strong>—volunteers who host multiple tables each year,
              mentor new hosts, and keep their community’s momentum going. Their commitment is grounded in the same generational habits LIFE is built on,
              now reinforced by modern longevity research and measured through simple registration.
            </p>
          </div>
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
                <p className="mt-2 text-sm text-[var(--text)]">Workshops currently focus on the communities where hosts are active—Atlanta, Rochester, and Austin. We welcome inquiries from other regions for future phases.</p>
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
