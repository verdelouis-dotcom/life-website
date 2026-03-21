import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import FaqSchema from "@/components/seo/FaqSchema";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/how-it-works";

export const metadata: Metadata = {
  title: "How LIFE Workshops Work | Longevity Initiative",
  description: "See how the LIFE shared LIFE workshop model spreads longevity habits through community meals, cooking education, and connection.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "How LIFE Workshops Work | Longevity Initiative",
    description: "See how the LIFE shared LIFE workshop model spreads longevity habits through community meals, cooking education, and connection.",
    url: PAGE_URL,
  },
  twitter: {
    title: "How LIFE Workshops Work | Longevity Initiative",
    description: "See how the LIFE shared LIFE workshop model spreads longevity habits through community meals, cooking education, and connection.",
  },
};

const STEP_CONTENT = [
  {
    title: "1. Attend a LIFE Workshop",
    body: "Sit down, share a meal, and take part in real conversation so you can see how LIFE feels.",
  },
  {
    title: "2. Host a LIFE Workshop",
    body: "Within 30 days, host a simple LIFE workshop of your own. Teach a favorite recipe or family tradition while sharing the LIFE pillars.",
  },
  {
    title: "3. Register a LIFE Workshop",
    body: "Log the gathering, attendance, and stories. Each registration keeps the movement measurable and ready for the next host.",
  },
];

const HOW_IT_WORKS_FAQ = [
  {
    question: "Do I need experience to host a LIFE workshop?",
    answer:
      "No. Hosts receive the LIFE guide, ingredient templates, and facilitation prompts. Any cuisine works as long as it uses fresh ingredients and includes a seated conversation.",
  },
  {
    question: "What happens after I host?",
    answer: "You register the LIFE workshop online, submit attendance, and note any stories. The LIFE team follows up with resources so you can host again or mentor another host.",
  },
  {
    question: "Is registering a LIFE workshop required?",
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
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm">
            <p className="label-text">The Model</p>
            <h1 className="heading-xl mt-2">How LIFE Works</h1>
            <p className="label-text mt-3 text-[var(--muted)]">Simple. Shared. Meant to be repeated.</p>
            <p className="mt-4 body-lg text-[var(--muted)]">LIFE is built around one idea: bring people together around the LIFE workshop.</p>
            <p className="mt-3 body-md text-[var(--text)]">A LIFE workshop is a simple, shared meal where people cook, learn, and connect.</p>
          </div>
        </section>

        <FaqSchema items={HOW_IT_WORKS_FAQ} />

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {STEP_CONTENT.map((step) => (
              <article key={step.title} className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
                <h2 className="heading-md text-[var(--life-forest)]">{step.title}</h2>
                <p className="mt-3 body-sm text-[var(--text)]">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center body-md text-[var(--text)]">
            LIFE grows one LIFE workshop at a time: people attend, host within 30 days, teach what they know, and register so every gathering adds proof.
          </p>
          <div className="mt-8 text-center">
            <Link href="/host" className="btn-solid px-8 text-base">
              Host a LIFE Workshop
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-8">
          <div className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <h3 className="heading-md">Some hosts continue beyond their first LIFE workshop.</h3>
            <p className="mt-3 body-sm text-[var(--text)]">
              After hosting once, many neighbors choose to become <strong>LIFE Host Champions</strong>—volunteers who host multiple LIFE workshops each year,
              mentor new hosts, and keep their community’s momentum going. Their commitment is grounded in the same generational habits LIFE is built on,
              now reinforced by modern longevity research and measured through simple registration.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">How We Measure Impact</h2>
            <p className="mt-3 body-md text-[var(--text)]">
              Registration data, LIFE workshop attendance, and host follow-up allow LIFE to report on reach, repeat gatherings, and qualitative
              stories. During the pilot we share quarterly summaries with donors and partners so replication decisions stay rooted in data.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <h2 className="heading-lg">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="label-text text-[var(--olive)]">Do I need experience to host a LIFE workshop?</h3>
                <p className="mt-2 body-sm text-[var(--text)]">No. Hosts receive the LIFE guide, ingredient templates, and facilitation prompts. Any cuisine works as long as it uses fresh ingredients and includes a seated conversation.</p>
              </div>
              <div>
                <h3 className="label-text text-[var(--olive)]">What happens after I host?</h3>
                <p className="mt-2 body-sm text-[var(--text)]">You register the LIFE workshop online, submit attendance, and note any stories. The LIFE team follows up with resources so you can host again or mentor another host.</p>
              </div>
              <div>
                <h3 className="label-text text-[var(--olive)]">Is registering a LIFE workshop required?</h3>
                <p className="mt-2 body-sm text-[var(--text)]">Yes. Registration is how LIFE proves impact to grants and keeps ingredients flowing to the next host. Without it, we can’t responsibly expand.</p>
              </div>
              <div>
                <h3 className="label-text text-[var(--olive)]">Who can participate?</h3>
                <p className="mt-2 body-sm text-[var(--text)]">We focus on communities where LIFE hosts are active. Reach out if you’d like to bring the model to your area and we’ll share what it takes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Ready to participate?</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/host" className="btn-solid px-8 text-base">
                Host a LIFE Workshop
              </Link>
              <Link href="/register" className="btn-outline px-8 text-base">
                Register a LIFE Workshop
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
