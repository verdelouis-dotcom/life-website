import type { LongevityMetrics } from "@/components/assessment/AssessmentTypes";

interface LifeTimelineProps {
  age: number;
  metrics: LongevityMetrics;
}

export default function LifeTimeline({ age, metrics }: LifeTimelineProps) {
  const ceiling = Math.min(100, Math.max(metrics.longevityPotential, metrics.estimatedLifespan) + 5);
  const floor = Math.max(0, Math.min(age - 5, ceiling - 40));
  const range = ceiling - floor || 1;

  const clampPercent = (value: number) => Math.min(Math.max(value, 0), 100);

  const positions = {
    age: clampPercent(((age - floor) / range) * 100),
    estimated: clampPercent(((metrics.estimatedLifespan - floor) / range) * 100),
    potential: clampPercent(((metrics.longevityPotential - floor) / range) * 100),
  };

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/80 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Life timeline</p>
      <div className="mt-4 h-3 rounded-full bg-[var(--surface)]">
        <div className="relative h-full">
          <div className="absolute left-0 top-0 h-full rounded-full bg-[var(--olive)]" style={{ width: `${positions.estimated}%` }} />
          <div
            className="absolute top-0 h-full rounded-full bg-[var(--terracotta)]/50"
            style={{ left: `${positions.estimated}%`, width: `${Math.max(positions.potential - positions.estimated, 0)}%` }}
          />
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <TimelineLegend label="Current age" value={`${Math.round(age)} yrs`} color="text-[var(--life-forest)]" position={positions.age} />
        <TimelineLegend
          label="Estimated lifespan"
          value={`${Math.round(metrics.estimatedLifespan)} yrs`}
          color="text-[var(--olive)]"
          position={positions.estimated}
        />
        <TimelineLegend
          label="Longevity potential"
          value={`${Math.round(metrics.longevityPotential)} yrs`}
          color="text-[var(--terracotta)]"
          position={positions.potential}
        />
      </div>
    </section>
  );
}

function TimelineLegend({
  label,
  value,
  color,
  position,
}: {
  label: string;
  value: string;
  color: string;
  position: number;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{label}</p>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
      <div className="mt-2 h-1 w-full rounded-full bg-[var(--surface)]">
        <div className="h-full rounded-full bg-[var(--olive)]" style={{ width: `${Math.min(Math.max(position, 0), 100)}%` }} />
      </div>
    </div>
  );
}
