import type { LongevityMetrics } from "@/components/assessment/AssessmentTypes";

interface LifeTimelineProps {
  age: number;
  metrics: LongevityMetrics;
}

export default function LifeTimeline({ age, metrics }: LifeTimelineProps) {
  const baseline = clampPercent(metrics.currentLongevityBaseline);
  const potential = clampPercent(metrics.longevityPotential);

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/80 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Longevity trajectory</p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Current age: <span className="font-semibold text-[var(--life-forest)]">{Math.round(age)} yrs</span>
      </p>
      <div className="mt-4 h-3 rounded-full bg-[var(--surface)]">
        <div className="relative h-full rounded-full bg-[var(--border)]" />
        <div className="relative -mt-3 h-3">
          <div className="absolute left-0 top-0 h-3 rounded-full bg-[var(--olive)]/70" style={{ width: `${baseline}%` }} />
          <div
            className="absolute top-0 h-3 rounded-full bg-[var(--terracotta)]/50"
            style={{ left: `${baseline}%`, width: `${Math.max(potential - baseline, 0)}%` }}
          />
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <TimelineLegend label="Current longevity baseline" value={`${Math.round(metrics.currentLongevityBaseline)}%`} color="text-[var(--olive)]" />
        <TimelineLegend label="Longevity potential" value={`${Math.round(metrics.longevityPotential)}%`} color="text-[var(--terracotta)]" />
      </div>
    </section>
  );
}

function TimelineLegend({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{label}</p>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}

function clampPercent(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), 100);
}
