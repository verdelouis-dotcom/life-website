import Reveal from "@/components/ui/reveal";

const PILLARS = ["Food", "Movement", "Sleep", "Connection", "Purpose", "Stress", "Light", "Nature", "Routine"];

export default function SectionPillars() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-5 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">9 Pillars</Reveal>
        <p className="text-sm text-[var(--muted)]">L.I.F.E. teaches fundamentals across these pillars in a practical, home-based way.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar}
              delay={index * 60}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text)]"
            >
              {pillar}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
