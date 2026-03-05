import Reveal from "@/components/ui/reveal";

const GROUPS = [
  {
    title: "Physical",
    pillars: ["Food", "Movement"],
  },
  {
    title: "Social",
    pillars: ["Connection", "Community"],
  },
  {
    title: "Psychological",
    pillars: ["Purpose", "Stress Regulation"],
  },
];

export default function SectionPillars() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">6 Pillars</Reveal>
        <p className="text-sm text-[var(--muted)]">
          L.I.F.E. teaches evidence-informed fundamentals across these six pillars through home-based cooking tables.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--olive)]">{group.title}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {group.pillars.map((pillar) => (
                  <span key={pillar} className="rounded-full border border-[var(--border)] bg-white px-4 py-1 text-sm font-semibold text-[var(--text)]">
                    {pillar}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
