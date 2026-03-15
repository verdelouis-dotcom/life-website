import type { LongevityMetrics } from "@/components/assessment/AssessmentTypes";

interface LifeTimelineProps {
  metrics: LongevityMetrics;
}

export default function LifeTimeline({ metrics }: LifeTimelineProps) {
  const { currentExpectedAge, potentialExpectedAge, yearsGained, currentExpectedYear, potentialExpectedYear } = metrics;

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">LIFE Longevity Timeline</p>
      <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">LIFE Longevity Timeline</h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        This educational estimate shows how your current habits and your potential LIFE habits may influence long-term health over time. It is
        not a medical prediction, but a simple way to visualize how daily choices can shape your future.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <TimelineCard
          title="Current trajectory"
          age={currentExpectedAge}
          year={currentExpectedYear}
          description="Where your current habits are pointing today."
        />
        <TimelineCard
          title="Potential with LIFE habits"
          age={potentialExpectedAge}
          year={potentialExpectedYear}
          description="A realistic target if LIFE pillars stay consistent."
        />
        <TimelineCard
          title="Potential years gained"
          age={yearsGained}
          year={undefined}
          description="Additional healthy years you could work toward."
          isGain
        />
      </div>
    </section>
  );
}

function TimelineCard({
  title,
  age,
  year,
  description,
  isGain = false,
}: {
  title: string;
  age: number;
  year?: number;
  description: string;
  isGain?: boolean;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-5 text-left">
      <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${isGain ? "text-[var(--terracotta)]" : "text-[var(--olive)]"}`}>
        {title}
      </p>
      <p className="mt-3 text-3xl font-semibold text-[var(--life-forest)]">{isGain ? `+${age}` : `${age}`} yrs</p>
      {typeof year === "number" && (
        <p className="text-sm font-semibold text-[var(--olive)]">≈ Year {year}</p>
      )}
      <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
    </article>
  );
}
