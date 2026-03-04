import Reveal from "@/components/ui/reveal";

const PILLARS = [
  { label: "Food", description: "Real ingredients" },
  { label: "Movement", description: "Cooking as natural movement" },
  { label: "Connection", description: "Face-to-face conversation" },
  { label: "Community", description: "Gathering neighbors" },
  { label: "Purpose", description: "Passing traditions" },
  { label: "Stress regulation", description: "Slow rhythms" },
];

export default function SectionPillars() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-5 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Pillars</Reveal>
        <p className="text-sm text-[var(--muted)]">L.I.F.E. teaches fundamentals across these pillars in a practical, home-based way.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 80} className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center shadow-sm">
              <p className="text-sm font-semibold text-[var(--text)]">{pillar.label}</p>
              <p className="text-xs text-[var(--muted)]">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
