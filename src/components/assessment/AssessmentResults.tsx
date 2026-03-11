"use client";

import Link from "next/link";
import type { AssessmentAnswers, AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";
import LifeTimeline from "@/components/assessment/LifeTimeline";
import PillarScoreBars from "@/components/assessment/PillarScoreBars";
import ResultsSummaryCard from "@/components/assessment/ResultsSummaryCard";
import EmailCaptureCard from "@/components/assessment/EmailCaptureCard";
import DonationSupportCard from "@/components/assessment/DonationSupportCard";

interface AssessmentResultsProps {
  answers: AssessmentAnswers;
  results: AssessmentResultsPayload;
  onRestart: () => void;
}

export default function AssessmentResults({ answers, results, onRestart }: AssessmentResultsProps) {
  const firstName = answers.firstName?.trim() || "Friend";
  const age = answers.age ?? 40;
  const formatYears = (value: number) => `${Math.round(value)} yrs`;

  const metricCards = [
    {
      label: "Survey-Based Biological Age",
      value: formatYears(results.metrics.surveyBiologicalAge),
      detail: "Compared to your chronological age",
    },
    {
      label: "Estimated Lifespan",
      value: formatYears(results.metrics.estimatedLifespan),
      detail: "Based on current lifestyle inputs",
    },
    {
      label: "Longevity Potential",
      value: formatYears(results.metrics.longevityPotential),
      detail: "If realistic habit upgrades stick",
    },
    {
      label: "Years You Could Gain",
      value: formatYears(results.metrics.yearsYouCouldGain),
      detail: "Additional healthy years to work toward",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 text-center shadow-sm">
        <p className="type-eyebrow">Results</p>
        <h2 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">{firstName}, here is your longevity report</h2>
        <p className="mt-3 text-base text-[var(--muted)]">
          These estimates translate your answers into a lifestyle-informed snapshot of biological aging, lifespan, and the possibilities ahead.
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-6 inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
        >
          Retake Assessment
        </button>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {metricCards.map((card) => (
          <ResultsSummaryCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
        ))}
      </section>

      <LifeTimeline age={age} metrics={results.metrics} />

      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Pillar snapshot</p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">How the six LIFE pillars are performing</h3>
        <PillarScoreBars scores={results.pillarScores} />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Strengths to celebrate</p>
          {results.strengths.length ? (
            <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
              {results.strengths.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                  <p className="font-semibold text-[var(--life-forest)]">{item.title}</p>
                  <p className="text-sm text-[var(--muted)]">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-[var(--muted)]">Keep reinforcing the daily habits that already feel sustainable.</p>
          )}
        </div>
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Biggest opportunities</p>
          {results.opportunities.length ? (
            <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
              {results.opportunities.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                  <p className="font-semibold text-[var(--life-forest)]">{item.title}</p>
                  <p className="text-sm text-[var(--muted)]">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-[var(--muted)]">Great work—keep scanning for small experiments to stack on top of what’s working.</p>
          )}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">General recommendations</p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">Practical longevity suggestions</h3>
        {results.recommendations.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-[var(--text)]">
            {results.recommendations.map((tip) => (
              <li key={tip.title}>
                <span className="font-semibold">{tip.title}: </span>
                <span className="text-[var(--muted)]">{tip.detail}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-[var(--muted)]">You’re trending in a positive direction—keep stacking consistent meals, movement, and rest.</p>
        )}
      </section>

      <EmailCaptureCard defaultFirstName={firstName} report={results} />

      <DonationSupportCard />

      <section className="rounded-[32px] border border-[var(--border)] bg-white/80 p-6 text-sm text-[var(--muted)]">
        <p>
          This assessment provides an educational estimate based on lifestyle and health factors associated with healthy aging. It is not a medical diagnosis and should not replace professional medical advice.
        </p>
        <Link href="/assessment/methodology" className="mt-3 inline-flex text-[var(--olive)]">
          Learn about the research behind this assessment
        </Link>
      </section>
    </div>
  );
}
