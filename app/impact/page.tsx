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
    "See how LIFE measures the reach of free longevity education, the LIFE Assessment, practical resources, cooking experiences, and community participation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE measures the reach of free longevity education, the LIFE Assessment, practical resources, cooking experiences, and community participation.",
    url: PAGE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "LIFE Impact | Longevity Initiative for Food & Education",
    description:
      "See how LIFE measures the reach of free longevity education, the LIFE Assessment, practical resources, cooking experiences, and community participation.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

const TRACKING_POINTS = [
  "People reached through free longevity education",
  "Longevity Assessment completions tied to the six pillars",
  "Educational resources and LIFE Guide access",
  "Fresh Pasta Cooking Classes and future LIFE experiences held",
  "Optional LIFE Tables registered and community participation",
  "Donations and funds raised when appropriate",
  "Future behavior-change outcomes when reliable data exists",
];

const PILOT_METRICS = [
  {
    title: "Education Reach",
    detail: "LIFE is building the systems needed to understand how many people use its free website education, LIFE Guide, and practical resources without presenting estimates as established results.",
  },
  {
    title: "People Reached",
    detail: "Assessment completions, resource access, classes, registered LIFE Tables, and community participation will provide a fuller picture as reliable data becomes available.",
  },
  {
    title: "Assessment Learning",
    detail: "Aggregated, anonymized LIFE Assessment data can help identify which of the six pillars need clearer education while protecting individual privacy.",
  },
  {
    title: "Mission Funding",
    detail: "Classes and donations fund LIFE's free educational mission. Financial and program outcomes will be reported as verified information becomes available.",
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
              LIFE began in Georgia and is now based in the Washington, DC metro area. As the initiative grows, impact measurement is expanding beyond hosted experiences
              to include free education, LIFE Assessments, resource access, classes, optional LIFE Tables, community participation, and mission funding.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">Why We Measure Impact</h2>
            <p className="mt-3 body-md text-[var(--text)]">
              Honest measurement keeps the nonprofit mission accountable and helps LIFE improve what it teaches. LIFE will report verified reach and outcomes as real data becomes available—without turning pilot observations into unsupported claims.
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
            <p className="body-sm text-[var(--muted)]">These categories show what LIFE is measuring or preparing to measure. No sample numbers are presented as established impact.</p>
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
            <h2 className="heading-lg">Community participation adds context</h2>
            <p className="mt-3 body-sm text-[var(--text)]">
              Optional LIFE Tables and registered community experiences help LIFE understand where its free education is being put into practice. Hosting is one way to participate—not a required step or the primary measure of growth.
            </p>
            <p className="mt-3 label-text text-[var(--muted)]">Registration is optional and helps document community reach.</p>
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
          title="How LIFE is building an accountable education model"
          items={IMPACT_PROOF}
          background="surface"
        />

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Help grow the impact</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/assessment" className="btn-solid px-8 text-base">
                Take the LIFE Assessment
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
