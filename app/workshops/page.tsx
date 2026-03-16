import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FaqSchema from "@/components/seo/FaqSchema";
import ProofHighlightList from "@/components/proof/ProofHighlightList";
import PhotoStrip from "@/components/proof/PhotoStrip";
import { WORKSHOP_PROOF } from "@/data/proof";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/workshops";

export const metadata: Metadata = {
  title: "Longevity Cooking Workshops | LIFE Community Program",
  description:
    "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Longevity Cooking Workshops | LIFE Community Program",
    description:
      "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Longevity Cooking Workshops | LIFE Community Program",
    description:
      "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
  },
};

const WORKSHOPS_FAQ = [
  {
    question: "What does a LIFE workshop include?",
    answer:
      "Each session involves cooking together, the LIFE Longevity Assessment, and facilitation practice so attendees feel confident hosting the next table.",
  },
  {
    question: "Who are workshops for?",
    answer:
      "We currently serve households, churches, nonprofits, and corporate wellness teams in Atlanta, Rochester, and Austin who want a shared-meal service project rooted in real food.",
  },
  {
    question: "Can LIFE lead workshops for organizations?",
    answer:
      "Yes. Organizations can request hosted workshops or private cohorts through the keynote/contact forms so we can align goals, audiences, and budgets.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Workshops</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">LIFE Workshops</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Workshops are the front door to the LIFE movement. They began in Georgia and now give early hosts in Atlanta, Rochester, and Austin a chance to
              practice the six pillars before launching their own tables.
            </p>
          </div>
        </section>

        <FaqSchema items={WORKSHOPS_FAQ} />

        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-12 md:grid-cols-2">
          <article className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What We Teach</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Every session covers fresh ingredient prep, the LIFE Longevity Assessment, and real stories from the Georgia pilot and early host cities. We link
              daily routines to measurable health improvements.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Who Workshops Are For</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Neighbors, families, clinics, and community health partners who want to restore shared meals and adopt practical longevity
              habits—no culinary degree required. Cities beyond Atlanta, Rochester, and Austin can request future cohorts via the keynote inquiry form.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What&apos;s Included</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
              <li>• Fresh ingredient cooking demo tailored to local budgets.</li>
              <li>• Guided LIFE Longevity Assessment conversation.</li>
              <li>• Host guide and follow-up checklist.</li>
              <li>• Commitment to register the next table.</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Workshop Outcomes</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Participants leave with a plan to host, a deeper understanding of the six pillars, and renewed connection with others around
              the table.
            </p>
          </article>
        </section>

        <PhotoStrip
          eyebrow="Workshop snapshots"
          title="Hands-on cooking moments"
          description="Pilot gatherings focus on cooking with fresh ingredients, practicing the LIFE assessment, and equipping new hosts to lead the next table."
          photos={[
            { src: "/images/workshops/IMG_8060.jpeg", alt: "Volunteers preparing vegetables", caption: "Fresh ingredient prep" },
            { src: "/images/workshops/pasta-lesson-2.jpg", alt: "Workshop participants rolling pasta", caption: "Hands-on learning" },
            { src: "/images/workshops/IMG_8145.JPG", alt: "Group meal at a LIFE workshop", caption: "Shared table reflection" },
          ]}
        />

        <ProofHighlightList
          eyebrow="Ready for partners"
          title="Why organizations book LIFE workshops"
          items={WORKSHOP_PROOF}
          background="accent"
        />

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What does a LIFE workshop include?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Each session involves cooking together, the LIFE Longevity Assessment, and facilitation practice so attendees feel confident hosting the next table.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Who are workshops for?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">We currently serve households, churches, nonprofits, and corporate wellness teams in Atlanta, Rochester, and Austin looking for a service project rooted in real food.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Can LIFE lead workshops for organizations?</h3>
                <p className="mt-2 text-sm text-[var(--text)]">Yes. Organizations can request hosted workshops or private cohorts through the keynote/contact forms so we can align goals, audiences, and budgets.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Bring a workshop to your community</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-solid px-8 text-base">
                Contact LIFE
              </Link>
              <Link href="/keynote" className="btn-outline px-8 text-base">
                Request a Workshop or Keynote
              </Link>
              <Link href="/host" className="btn-outline px-8 text-base">
                Host a Table
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
