import type { PillarScore } from "@/components/assessment/AssessmentTypes";

interface ShareableLongevityCardProps {
  yearsGained: number;
  lifeHabitsScore: number;
  strongestPillar?: PillarScore;
  weakestPillar?: PillarScore;
}

export default function ShareableLongevityCard({
  yearsGained,
  lifeHabitsScore,
  strongestPillar,
  weakestPillar,
}: ShareableLongevityCardProps) {
  const strongestLabel = strongestPillar?.label ?? "Top LIFE Pillar";
  const weakestLabel = weakestPillar?.label ?? "Growth Pillar";
  const formattedYears = yearsGained >= 0 ? `+${yearsGained}` : `${yearsGained}`;

  return (
    <div className="flex flex-col gap-5 rounded-[36px] border border-[var(--border)] bg-white/95 p-6 text-[var(--text)] shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">My LIFE Longevity Snapshot</p>
        <p className="mt-1 text-sm text-[var(--muted)]">Share a quick look at your progress.</p>
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Years You Could Gain</p>
        <p className="mt-3 text-5xl font-semibold text-[var(--life-forest)]">{formattedYears} yrs</p>
        <p className="mt-2 text-sm text-[var(--muted)]">Educational estimate from your LIFE assessment</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <InfoTile label="LIFE Habits Score" value={`${Math.round(lifeHabitsScore)}%`} />
        <InfoTile label="Strongest Pillar" value={strongestLabel} />
        <InfoTile label="Growth Pillar" value={weakestLabel} />
      </div>

      <div className="flex flex-col items-start gap-2 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-sm">
        <p className="font-semibold text-[var(--life-forest)]">Take the LIFE Longevity Assessment</p>
        <p className="text-[var(--muted)]">www.longevityinitiativeforfoodandeducation.com</p>
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--olive)]">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[var(--life-forest)]">{value}</p>
    </div>
  );
}
