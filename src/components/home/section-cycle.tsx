import Reveal from "@/components/ui/reveal";

const MONTHS = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  tablesImpacted: 1 + i * 7,
}));

export default function SectionCycle() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">12-Month Pilot</Reveal>
        <p className="text-base text-[var(--muted)]">Each L.I.F.E. host leads one hosted cooking table per month for one year.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {MONTHS.map((entry, index) => (
            <Reveal key={entry.month} delay={index * 50} className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Month {entry.month}</p>
              <p className="mt-2 text-3xl font-serif text-[var(--text)]">≥ {entry.tablesImpacted}</p>
              <p className="text-xs text-[var(--muted)]">Tables impacted</p>
            </Reveal>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)]">Assumes each hosted cooking table invites one new table every month—minimum 78 tables per host per year.</p>
      </div>
    </section>
  );
}
