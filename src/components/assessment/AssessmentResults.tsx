"use client";

import Link from "next/link";
import type { AssessmentAnswers, AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";
import ResultsSummaryCard from "@/components/assessment/ResultsSummaryCard";
import EmailCaptureCard from "@/components/assessment/EmailCaptureCard";
import DonationSupportCard from "@/components/assessment/DonationSupportCard";
import { LIFE_HABIT_LIBRARY } from "@/lib/assessment/lifeHabitLibrary";

interface AssessmentResultsProps {
  answers: AssessmentAnswers;
  results: AssessmentResultsPayload;
  onRestart: () => void;
}

export default function AssessmentResults({ answers, results, onRestart }: AssessmentResultsProps) {
  const firstName = answers.firstName?.trim() || "Friend";
  const formatPercent = (value: number) => `${Math.round(value)}%`;

  const heroCards = [
    {
      title: "Current Path",
      value: `${results.metrics.currentExpectedAge} yrs`,
      detail: `≈ Year ${results.metrics.currentExpectedYear}`,
    },
    {
      title: "With Consistent LIFE Habits",
      value: `${results.metrics.potentialExpectedAge} yrs`,
      detail: `≈ Year ${results.metrics.potentialExpectedYear}`,
    },
    {
      title: "Years You Could Gain",
      value: `+${results.metrics.yearsGained} yrs`,
      detail: "Educational estimate",
    },
  ];

  const supportingCards = [
    {
      label: "LIFE Habits Score",
      value: formatPercent(results.metrics.lifeHabitsScore),
      detail: "Average across Food, Movement, Sleep, Connection, Purpose, Stress Regulation.",
    },
    {
      label: "Health Context Score",
      value: formatPercent(results.metrics.healthContextScore),
      detail: "Body composition, alcohol/nicotine, preventive care, family longevity, biomarkers.",
    },
  ];

  const topHabits = results.metrics.habitOpportunities.slice(0, 3);
  const pillarGuidance = results.pillarScores.map((pillar) => {
    const guide = LIFE_HABIT_LIBRARY[pillar.key];
    const habitCue = guide?.habits[0];
    return {
      key: pillar.key,
      label: pillar.label,
      score: Math.round(pillar.score),
      summary: guide?.summary,
      habit: habitCue?.title,
    };
  });

  return (
    <div className="space-y-10">
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 text-center shadow-sm">
        <p className="type-eyebrow">Results</p>
        <h2 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">{firstName}, here is your longevity report</h2>
        <p className="mt-3 text-base text-[var(--muted)]">Your daily habits are the biggest factor you can change. This report shows where you are now and where more consistent LIFE habits could take you.</p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-6 inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
        >
          Retake Assessment
        </button>
      </div>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          {heroCards.map((card) => (
            <SummaryCard key={card.title} title={card.title} value={card.value} detail={card.detail} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {supportingCards.map((card) => (
          <ResultsSummaryCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
        ))}
      </section>

      {topHabits.length ? (
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Top Habits to Improve First</p>
          <p className="mt-2 text-sm text-[var(--muted)]">These habits represent the areas with the most room for improvement across the LIFE pillars.</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
            {topHabits.map((item) => (
              <li key={item.questionId} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <p className="font-semibold text-[var(--life-forest)]">{item.prompt}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {results.pillarScores.find((pillar) => pillar.key === item.pillar)?.label ?? item.pillar}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Pillar Breakdown</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillarGuidance.map((pillar) => (
            <PillarCard key={pillar.key} label={pillar.label} score={pillar.score} summary={pillar.summary} habit={pillar.habit} />
          ))}
        </div>
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
function SummaryCard({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-[var(--life-forest)]">{value}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
    </article>
  );
}

function PillarCard({
  label,
  score,
  summary,
  habit,
}: {
  label: string;
  score: number;
  summary?: string;
  habit?: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--life-forest)]">{label}</p>
        <span className="text-2xl font-semibold text-[var(--life-forest)]">{score}%</span>
      </div>
      {summary && <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>}
      {habit && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Try: <span className="normal-case text-[var(--text)]">{habit}</span>
        </p>
      )}
    </article>
  );
}
