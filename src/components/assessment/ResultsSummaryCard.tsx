interface ResultsSummaryCardProps {
  label: string;
  value: string;
  detail: string;
}

export default function ResultsSummaryCard({ label, value, detail }: ResultsSummaryCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/80 p-6 text-left shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--olive)]">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-[var(--life-forest)]">{value}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
    </article>
  );
}
