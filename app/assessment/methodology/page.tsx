import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const NAV_ITEMS = [
  { id: "purpose", label: "Purpose" },
  { id: "pillars", label: "LIFE Pillars" },
  { id: "measures", label: "What It Measures" },
  { id: "scoring", label: "Scoring Approach" },
  { id: "research", label: "Research Foundations" },
  { id: "modifiable", label: "Modifiable Focus" },
  { id: "limitations", label: "Limitations" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "continue", label: "Continue" },
];

const PILLARS = [
  { title: "Food", description: "Dietary quality, meal patterns, and home-prepared meals" },
  { title: "Movement", description: "Physical activity, strength, daily movement, and fitness" },
  { title: "Sleep", description: "Sleep duration, sleep quality, and consistency" },
  { title: "Connection", description: "Social support, time with others, and shared meals" },
  { title: "Purpose", description: "Meaning, direction, and contribution" },
  { title: "Stress Regulation", description: "Stress burden, emotional wellbeing, and resilience" },
];

const MEASURE_CATEGORIES = [
  "Nutrition patterns",
  "Physical activity and fitness",
  "Sleep habits",
  "Social connection",
  "Purpose and emotional wellbeing",
  "Alcohol and nicotine use",
  "Chronic disease status",
  "Optional blood pressure, LDL, and fasting glucose inputs",
];

const RESEARCH_CARDS = [
  {
    title: "Physical Activity",
    body:
      "The assessment’s movement framework is informed by public health guidance emphasizing regular aerobic activity and muscle-strengthening activity as core components of long-term health.",
  },
  {
    title: "Sleep",
    body:
      "Sleep duration and sleep quality are included because insufficient or disrupted sleep is associated with adverse cardiometabolic and mental health outcomes.",
  },
  {
    title: "Connection and Wellbeing",
    body:
      "The assessment includes social connection, shared meals, and psychosocial wellbeing because long-term research has shown that relationships and emotional health are deeply connected to healthy aging.",
  },
  {
    title: "Cardiometabolic Health",
    body:
      "Chronic disease risk, optional blood pressure, cholesterol, and fasting glucose markers are included because cardiovascular and metabolic health remain central to long-term mortality risk.",
  },
];

const REFERENCE_LIST = [
  "CDC guidance on physical activity for adults",
  "CDC guidance on adult sleep and sleep duration",
  "World Health Organization materials on cardiovascular disease risk",
  "Harvard Study of Adult Development",
  "Peer-reviewed research in epidemiology, preventive medicine, and behavioral health",
];

export const metadata: Metadata = {
  title: "LIFE Longevity Assessment Methodology",
  description:
    "Learn how the LIFE Longevity Assessment works, what it measures, and the research areas that inform its survey-based longevity estimates.",
};

export default function AssessmentMethodologyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <header className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Methodology</p>
            <h1 className="mt-3 text-4xl font-semibold text-[var(--life-forest)]">LIFE Longevity Assessment Methodology</h1>
            <p className="mt-3 text-lg text-[var(--muted)]">How the assessment works and the research areas that inform it.</p>
            <p className="mt-4 text-sm text-[var(--muted)]">Version 1.0 • Released 2026 • Educational tool, not a medical diagnosis</p>
            <p className="text-sm text-[var(--muted)]">Last updated: March 2026</p>
            <p className="mt-6 text-base leading-7 text-[var(--text)]">
              The LIFE Longevity Assessment is a survey-based educational tool designed to help users reflect on lifestyle patterns associated with healthy aging. It estimates a Survey-Based Biological Age, an Estimated Lifespan, and a Longevity Potential using self-reported behaviors, health-related habits, and selected risk indicators. It is intended for education and self-reflection, not diagnosis.
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[240px,minmax(0,1fr)]">
            <nav className="hidden lg:block rounded-3xl border border-[var(--border)] bg-white/80 p-5 shadow-sm" aria-label="On this page">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">On this page</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="inline-flex text-[var(--text)] transition hover:text-[var(--olive)]">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-16">
              <div className="rounded-3xl border border-[var(--border)] bg-white/80 p-5 shadow-sm lg:hidden" aria-label="On this page">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">On this page</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {NAV_ITEMS.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--text)]">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <section id="purpose" className="space-y-4 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Purpose of the Assessment</p>
                <p className="text-base text-[var(--text)]">
                  The LIFE Longevity Assessment was created to translate longevity and public health research into an approachable nonprofit tool. It helps participants understand how daily behaviors, social patterns, and stress responses align with healthier or riskier long-term trajectories. Rather than claiming to predict exact lifespan, it surfaces themes associated with more favorable or less favorable healthy-aging profiles.
                </p>
                <p className="text-base text-[var(--text)]">
                  The emphasis on modifiable inputs reflects the evidence that many meaningful drivers of healthy aging live in day-to-day routines, shared meals, physical activity, sleep, relationships, and substance use—not solely in genetics or advanced medical testing.
                </p>
              </section>

              <section id="pillars" className="space-y-4">
                <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">The Six LIFE Pillars</p>
                  <p className="mt-3 text-base text-[var(--text)]">The assessment is organized around six core domains associated with healthy aging and long-term wellbeing.</p>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {PILLARS.map((pillar) => (
                      <article key={pillar.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                        <h3 className="text-xl font-semibold text-[var(--life-forest)]">{pillar.title}</h3>
                        <p className="mt-2 text-sm text-[var(--muted)]">{pillar.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section id="measures" className="space-y-4 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What the Assessment Measures</p>
                <p className="text-base text-[var(--text)]">
                  The assessment includes a combination of lifestyle behaviors, psychosocial factors, selected health-risk indicators, and optional cardiometabolic markers when the user knows them.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--text)]">
                  {MEASURE_CATEGORIES.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </section>

              <section id="scoring" className="space-y-4 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">How the Scoring Works</p>
                <p className="text-base text-[var(--text)]">
                  Each survey response is mapped along a favorable-to-unfavorable range. Inputs that research consistently links to larger shifts in healthy aging—such as nicotine use, chronic disease, physical activity volume, or meaningful sleep deficits—carry more weight than fine-tuning behaviors.
                </p>
                <p className="text-base text-[var(--text)]">
                  Pillar scores are calculated separately and combined into an overall longevity profile. Higher pillar scores indicate patterns more closely aligned with healthy-aging cohorts, while lower scores highlight opportunities for change.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
                  <li>
                    <span className="font-semibold">Survey-Based Biological Age</span> is a modeled educational estimate of how the reported profile compares to generalized healthy-aging patterns.
                  </li>
                  <li>
                    <span className="font-semibold">Estimated Lifespan</span> is a modeled educational estimate that reflects the current response profile and its mix of favorable and unfavorable inputs.
                  </li>
                  <li>
                    <span className="font-semibold">Longevity Potential</span> shows a modeled estimate under realistic improvements to modifiable behaviors, illustrating the possible upside of sustained habit changes.
                  </li>
                </ul>
                <p className="text-sm text-[var(--muted)]">All three outputs are survey-based educational estimates, not clinical diagnoses or guarantees.</p>
              </section>

              <section id="research" className="space-y-6 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Research Foundations</p>
                  <p className="mt-3 text-base text-[var(--text)]">The assessment is informed by public health guidance and research areas consistently associated with healthy aging and mortality risk.</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {RESEARCH_CARDS.map((card) => (
                    <article key={card.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                      <h3 className="text-lg font-semibold text-[var(--life-forest)]">{card.title}</h3>
                      <p className="mt-2 text-sm text-[var(--text)]">{card.body}</p>
                    </article>
                  ))}
                </div>
                <div className="rounded-2xl border border-dashed border-[var(--border)] bg-white/60 p-5">
                  <p className="text-sm font-semibold text-[var(--life-forest)]">Examples of Research and Public Health Sources</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
                    {REFERENCE_LIST.map((reference) => (
                      <li key={reference}>{reference}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="modifiable" className="space-y-4 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Why the Assessment Focuses on Modifiable Factors</p>
                <p className="text-base text-[var(--text)]">
                  The assessment intentionally emphasizes factors people can influence over time, such as physical activity, sleep routines, nutrition quality, stress habits, social connection, and substance use. While not every aspect of longevity is controllable, many important contributors to long-term health are shaped by daily patterns, environments, and supportive relationships.
                </p>
              </section>

              <section id="limitations" className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Important Limitations</p>
                <div className="mt-4 space-y-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--text)]">
                  <p>This is a survey-based educational tool that relies on self-reported answers.</p>
                  <p>It does not replace medical evaluation, diagnosis, or personalized care from qualified professionals.</p>
                  <p>The assessment cannot incorporate every genetic, environmental, or clinical variable.</p>
                  <p>Results should be viewed as reflection prompts, not as precise predictions of individual lifespan.</p>
                </div>
              </section>

              <section id="disclaimer" className="space-y-3 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Disclaimer</p>
                <p className="text-sm text-[var(--text)]">
                  This assessment provides an educational estimate based on lifestyle and health factors associated with healthy aging. It is not a medical diagnosis and should not replace professional medical advice.
                </p>
              </section>

              <section id="continue" className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 text-center shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Continue to the Assessment</p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--life-forest)]">Explore your longevity profile</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">Use the LIFE Longevity Assessment to reflect on your current habits and potential opportunities.</p>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <Link
                    href="/assessment"
                    className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930]"
                  >
                    Take the LIFE Longevity Assessment
                  </Link>
                  <Link href="/assessment" className="text-sm text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4">
                    Back to the LIFE assessment overview
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
