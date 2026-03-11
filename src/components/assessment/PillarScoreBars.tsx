import type { PillarScore } from "@/components/assessment/AssessmentTypes";

interface PillarScoreBarsProps {
  scores: PillarScore[];
}

export default function PillarScoreBars({ scores }: PillarScoreBarsProps) {
  return (
    <div className="space-y-4">
      {scores.map((pillar) => (
        <div key={pillar.key} className="rounded-3xl border border-[var(--border)] bg-white/80 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{pillar.label}</p>
              <p className="text-sm text-[var(--muted)]">{pillar.description}</p>
            </div>
            <span className="text-2xl font-semibold text-[var(--life-forest)]">{pillar.score}</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-[var(--surface)]">
            <div className="h-full rounded-full bg-[var(--olive)]" style={{ width: `${pillar.score}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
