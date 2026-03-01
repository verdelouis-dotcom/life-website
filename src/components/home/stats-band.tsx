import Reveal from "@/components/ui/reveal";

const IMPACT_METRICS = [
  { label: "Tables Registered", value: "128" },
  { label: "People Reached", value: "1,040" },
  { label: "Cities Represented", value: "12" },
];

export default function StatsBand() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Impact</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Measured Impact</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {IMPACT_METRICS.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 120} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 text-center">
              <p className="text-4xl font-serif text-[var(--text)]">{metric.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[var(--olive)]">{metric.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">
          L.I.F.E. measures community participation through table registrations and reported attendance.
        </p>
      </div>
    </section>
  );
}
