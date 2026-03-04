import Reveal from "@/components/ui/reveal";

const METRICS = [
  { label: "Households hosted in pilot", value: "26" },
  { label: "Average replication rate", value: "1.4x" },
  { label: "Shared meals logged", value: "312" },
];

export default function ImpactSnapshot() {
  return (
    <section className="bg-white py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Impact Snapshot</p>
          <h2 className="text-3xl font-semibold">We track what changes after every table.</h2>
          <p className="text-base text-[var(--muted)]">
            Hosts log their gathering, households reached, and follow-up actions inside the LIFE register. Quarterly reviews keep the pilot honest.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {METRICS.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 100}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-sm"
            >
              <p className="text-4xl font-serif">{metric.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--olive)]">{metric.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Full metrics and methodology → Monthly Table Model update.</p>
      </div>
    </section>
  );
}
