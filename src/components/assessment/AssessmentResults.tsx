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
  const formatPercent = (value: number) => `${Math.round(value)}%`;

  const metricCards = [
    {
      label: "LIFE Habits Score",
      value: formatPercent(results.metrics.lifeHabitsScore),
      detail: "Average of Food, Movement, Sleep, Connection, Purpose, Stress Regulation pillars.",
    },
    {
      label: "Health Context Score",
      value: formatPercent(results.metrics.healthContextScore),
      detail: "Body composition, alcohol/nicotine patterns, preventive care, family longevity, optional markers.",
    },
    {
      label: "Current Longevity Baseline",
      value: formatPercent(results.metrics.currentLongevityBaseline),
      detail: "70% LIFE habits + 30% health context—your modeled trajectory today.",
    },
    {
      label: "Longevity Potential",
      value: formatPercent(results.metrics.longevityPotential),
      detail: "Where your trajectory can go if consistent LIFE habits keep compounding.",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 text-center shadow-sm">
        <p className="type-eyebrow">Results</p>
        <h2 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">{firstName}, here is your longevity report</h2>
        <p className="mt-3 text-base text-[var(--muted)]">
          These scores translate your answers into the LIFE framework—showing how daily habits, background context, and future headroom work together.
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-6 inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
        >
          Retake Assessment
        </button>
      </div>

      <LifeTimeline metrics={results.metrics} />

      <section className="space-y-4">
        <p className="text-sm text-[var(--muted)]">
          LIFE Habits reflects the six pillars you can influence each day. Health Context summarizes the risk factors you carry right now. Your
          Current Longevity Baseline blends the two, while Longevity Potential shows how far consistent LIFE habits can move the trajectory.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {metricCards.map((card) => (
            <ResultsSummaryCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <OpportunityCard
            title="Current trajectory"
            value={`${results.metrics.currentExpectedAge} yrs`}
            detail={`≈ Year ${results.metrics.currentExpectedYear}`}
          />
          <OpportunityCard
            title="With consistent LIFE habits"
            value={`${results.metrics.potentialExpectedAge} yrs`}
            detail={`≈ Year ${results.metrics.potentialExpectedYear}`}
          />
          <OpportunityCard title="Years you could gain" value={`+${results.metrics.yearsGained} yrs`} detail="Educational estimate" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Habits that could drive the biggest improvement</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            These habits represent the areas with the most room for improvement across the LIFE pillars.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
            {results.metrics.habitOpportunities.map((item) => (
              <li key={item.questionId} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <p className="font-semibold text-[var(--life-forest)]">{item.prompt}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {results.pillarScores.find((pillar) => pillar.key === item.pillar)?.label ?? item.pillar}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {(results.metrics.strongestPillar || results.metrics.weakestPillar) && (
        <section className="grid gap-6 md:grid-cols-2">
          {results.metrics.strongestPillar ? (
            <article className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Strongest pillar</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--life-forest)]">
                {results.metrics.strongestPillar.label} • {Math.round(results.metrics.strongestPillar.score)}%
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Keep reinforcing the habits that make this pillar feel dependable—share them with others at the table.
              </p>
            </article>
          ) : null}
          {results.metrics.weakestPillar ? (
            <article className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Growth pillar</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--life-forest)]">
                {results.metrics.weakestPillar.label} • {Math.round(results.metrics.weakestPillar.score)}%
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                This is where consistent LIFE habits can add the most momentum. Focus here first to unlock the next phase of longevity
                potential.
              </p>
            </article>
          ) : null}
        </section>
      )}

      {results.metrics.habitOpportunities.length ? (
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Habit opportunities</p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">Three places to focus next</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">Each cue below points to a single behavior that can raise your LIFE Habits Score.</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
            {results.metrics.habitOpportunities.map((item) => (
              <li key={item.questionId} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <p className="font-semibold text-[var(--life-forest)]">{item.prompt}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {results.pillarScores.find((pillar) => pillar.key === item.pillar)?.label ?? item.pillar} • current score{" "}
                  {Math.round(item.score)}%
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

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
interface OpportunityCardProps {
  title: string;
  value: string;
  detail: string;
}

function OpportunityCard({ title, value, detail }: OpportunityCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-[var(--life-forest)]">{value}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
    </article>
  );
}
