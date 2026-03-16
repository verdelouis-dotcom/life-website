import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ProofHighlightList from "@/components/proof/ProofHighlightList";
import PhotoStrip from "@/components/proof/PhotoStrip";
import { IMPACT_PROOF } from "@/data/proof";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/impact";

export const metadata: Metadata = {
  title: "LIFE Impact | Longevity Initiative for Food & Education",
  description:
    "See how LIFE tracks community impact through shared meals, workshops, and longevity education designed to improve health and connection.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE tracks community impact through shared meals, workshops, and longevity education designed to improve health and connection.",
    url: PAGE_URL,
  },
  twitter: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE tracks community impact through shared meals, workshops, and longevity education designed to improve health and connection.",
  },
};

const TRACKING_POINTS = [
  "Tables hosted and attendance by neighborhood",
  "Workshop participation and host readiness",
  "Longevity Assessment completions tied to the six pillars",
  "Stories and qualitative feedback from families",
  "Donor-supported toolkits and ingredients distributed",
];

const PILOT_METRICS = [
  {
    title: "Tables Registered",
    detail: "Every Metro Atlanta table is logged with date, host, and attendance so trend lines can be published during quarterly reviews.",
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
    detail: "Hosts who advance from attendee → host → multi-table champion signal that the replication model is working. This cohort is currently in early collection.",
  },
];

const RIPPLE_POINTS = [
  "Fresh ingredient shopping becomes a shared responsibility instead of an individual burden.",
  "Children and teens learn to cook alongside adults, normalizing healthier defaults.",
  "Neighbors start informal walking groups or shared garden plots after a LIFE table.",
  "Assessment reflections motivate doctor visits, preventive screenings, or sleep upgrades.",
];

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Impact</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">LIFE Impact</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              LIFE began in Metro Atlanta so the model could be tracked, reported, and responsibly scaled. We publish pilot-stage categories now so
              partners can see what will be measured as tables expand.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Why We Measure Impact</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              Grants, donors, and public schools need proof that a shared table movement moves real numbers. Measurement keeps the nonprofit mission
              accountable, protects families who volunteer their time, and ensures the LIFE framework remains replicable nationwide.
            </p>
          </article>

          <article className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What We Track</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
              {TRACKING_POINTS.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Early Pilot Metrics</h2>
            <p className="text-sm text-[var(--muted)]">Values are reported quarterly. Categories below show what is being logged today.</p>
            <div className="grid gap-5 md:grid-cols-2">
              {PILOT_METRICS.map((metric) => (
                <article key={metric.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-5">
                  <p className="type-eyebrow text-[var(--olive)]">{metric.title}</p>
                  <p className="mt-2 text-sm text-[var(--text)]">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">How a Table Creates Ripple Effects</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
              {RIPPLE_POINTS.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Pilot observations • Metro Atlanta</p>
          </div>
        </section>

        <PhotoStrip
          eyebrow="Pilot photos"
          title="How the shared table looks in practice"
          description="Images from Metro Atlanta show small, measurable gatherings where meals become a framework for accountability."
          photos={[
            { src: "/images/table/IMG_9433.jpeg", alt: "Families preparing a LIFE meal", caption: "Cooking together" },
            { src: "/images/table/table3.jpeg", alt: "Neighbors sharing dinner", caption: "Registered LIFE table" },
            { src: "/images/workshops/pasta-lesson-4.jpeg", alt: "Workshop leader guiding participants", caption: "Pilot workshop coaching" },
          ]}
        />

        <ProofHighlightList
          eyebrow="What early proof looks like"
          title="How LIFE is validating the shared table model"
          items={IMPACT_PROOF}
          background="surface"
        />

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Help grow the impact</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/host" className="btn-solid px-8 text-base">
                Host a Table
              </Link>
              <Link href="/donate" className="btn-outline px-8 text-base">
                Donate
              </Link>
              <Link href="/contact" className="btn-outline px-8 text-base">
                Contact LIFE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
