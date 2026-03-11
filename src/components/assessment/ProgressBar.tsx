interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[var(--olive)]">
        <span>Progress</span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[var(--surface)]">
        <div className="h-full rounded-full bg-[var(--olive)] transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
