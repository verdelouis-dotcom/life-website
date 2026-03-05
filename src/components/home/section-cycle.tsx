import Reveal from "@/components/ui/reveal";

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function SectionCycle() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">12-Month Pilot</Reveal>
        <p className="text-base text-[var(--muted)]">Each L.I.F.E. host leads one hosted cooking table per month for one year.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {MONTHS.map((month, index) => (
            <Reveal key={month} delay={index * 40} className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Month {month}</p>
              <p className="mt-2 text-3xl font-serif text-[var(--text)]">{month}</p>
              <p className="text-xs text-[var(--muted)]">Tables this month</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Total annual shared meal experiences: 78 (1+2+…+12).</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {MONTHS.map((month, index) => (
            <Reveal
              key={`dot-${month}`}
              delay={index * 30}
              className="flex flex-col items-center text-[11px] uppercase tracking-[0.3em] text-[var(--olive)]"
            >
              <span className="mb-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-[var(--olive)]"></span>
              <span>{month}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
