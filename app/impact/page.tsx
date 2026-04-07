import type { Metadata } from "next";
import Link from "next/link";
import ProofHighlightList from "@/components/proof/ProofHighlightList";
import PhotoStrip from "@/components/proof/PhotoStrip";
import { IMPACT_PROOF } from "@/data/proof";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/impact";

export const metadata: Metadata = {
  title: "LIFE Impact | Longevity Initiative for Food & Education",
  description:
    "See how LIFE tracks community impact through shared meals, LIFE cooking experiences, and longevity education designed to improve health and connection.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE tracks community impact through shared meals, LIFE cooking experiences, and longevity education designed to improve health and connection.",
    url: PAGE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE tracks community impact through shared meals, LIFE cooking experiences, and longevity education designed to improve health and connection.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const TRACKING_POINTS = [
  "LIFE Cooking Experiences hosted and attendance by neighborhood",
  "LIFE Cooking Experience participation and host readiness",
  "Host Champions who lead multiple LIFE cooking experiences each year and mentor new hosts",
  "Longevity Assessment completions tied to the six pillars",
  "Stories and qualitative feedback from families",
  "Donor-supported toolkits and ingredients distributed",
];

const PILOT_METRICS = [
  {
    title: "LIFE Cooking Experiences Registered",
    detail: "Every LIFE cooking experience hosted in Atlanta, GA and Austin, TX is logged with date, host, and attendance so trend lines can be published during quarterly reviews.",
  },
  {
    title: "People Reached",
    detail: "Contact logs track how many neighbors, faith communities, or partner orgs are touched by the pilot. Public dashboards will expand as the sample grows.",
  },
  {
    title: "Assessment Insights",
    detail: "Aggregated, anonymized LIFE Longevity Assessment data highlights which pillars need more coaching in each community cluster.",
  },
  {
    title: "Host Progression",
    detail: "Hosts who advance from attendee → host → multi-LIFE cooking experience champion signal that the replication model is working. We currently count each Champion who commits to three or more LIFE cooking experiences per year.",
  },
];

const RIPPLE_POINTS = [
  "Fresh ingredient shopping becomes a shared responsibility instead of an individual burden.",
  "Children and teens learn to cook alongside adults, normalizing healthier defaults.",
  "Neighbors start informal walking groups or shared garden plots after a LIFE cooking experience.",
  "Assessment reflections motivate doctor visits, preventive screenings, or sleep upgrades.",
];

export default function ImpactPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="label-text">Impact</p>
            <h1 className="mt-2 heading-xl">LIFE Impact</h1>
            <p className="mt-4 body-lg text-[var(--muted)]">
              LIFE began in Georgia so the model could be tracked, reported, and responsibly scaled. Early hosts in Atlanta, GA and Austin, TX
              now help prove that the same shared-LIFE cooking experience approach can travel while remaining accountable.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">Why We Measure Impact</h2>
            <p className="mt-3 body-md text-[var(--text)]">
              Grants, donors, and public schools need proof that a shared LIFE cooking experience movement moves real numbers. Measurement keeps the nonprofit mission
              accountable, protects families who volunteer their time, and ensures the LIFE framework remains replicable as it reaches new communities.
            </p>
          </article>

          <article className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <h2 className="heading-lg">What We Track</h2>
            <ul className="mt-4 space-y-2 body-sm text-[var(--text)]">
              {TRACKING_POINTS.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">Early Pilot Metrics</h2>
            <p className="body-sm text-[var(--muted)]">Values are reported quarterly. Categories below show what is being logged today.</p>
            <div className="grid gap-5 md:grid-cols-2">
              {PILOT_METRICS.map((metric) => (
                <article key={metric.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-5">
                  <p className="label-text text-[var(--olive)]">{metric.title}</p>
                  <p className="mt-2 body-sm text-[var(--text)]">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] card-padding shadow-sm">
            <h2 className="heading-lg">Host Champions multiply the work</h2>
            <p className="mt-3 body-sm text-[var(--text)]">
              LIFE Host Champions are volunteer leaders who commit to at least three LIFE cooking experiences per year. They mentor new hosts, keep ingredients simple, and
              share data after every cooking experience. Their commitment is what turns a single LIFE cooking experience into a measurable neighborhood movement.
            </p>
            <p className="mt-3 label-text text-[var(--muted)]">Current pilot goal: 12 Champions per city</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">How a LIFE Cooking Experience Creates Ripple Effects</h2>
            <ul className="mt-4 space-y-2 body-sm text-[var(--text)]">
              {RIPPLE_POINTS.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <p className="mt-4 label-text text-[var(--muted)]">Pilot observations • Georgia hosts</p>
          </div>
        </section>

        <PhotoStrip
          eyebrow="Pilot photos"
          title="How a LIFE cooking experience looks in practice"
          description="Images from Georgia and early partner cities show small, measurable cooking experiences where meals become a framework for accountability."
          photos={[
            { src: "/images/table/IMG_9449.JPG", alt: "Families preparing a LIFE meal", caption: "Cooking together" },
            { src: "/images/table/table4.jpeg", alt: "Neighbors sharing dinner", caption: "Registered LIFE cooking experience" },
            { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "LIFE cooking experience host guiding participants", caption: "Pilot LIFE cooking experience coaching" },
          ]}
        />

        <ProofHighlightList
          eyebrow="What early proof looks like"
          title="How LIFE is validating the shared LIFE cooking experience model"
          items={IMPACT_PROOF}
          background="surface"
        />

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Help grow the impact</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/host" className="btn-solid px-8 text-base">
                Host a LIFE Cooking Experience
              </Link>
              <Link href="/donate" className="btn-outline px-8 text-base">
                Support Us
              </Link>
              <Link href="/contact" className="btn-outline px-8 text-base">
                Contact LIFE
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
