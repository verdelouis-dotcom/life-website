import Reveal from "@/components/ui/reveal";

const PILLARS = ["Food", "Movement", "Sleep", "Connection", "Purpose", "Stress", "Light", "Nature", "Routine"];

export default function WorkshopsCard() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Framework</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text)]">9 Pillars</h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            L.I.F.E. teaches evidence-informed fundamentals across these pillars—designed to be practical at home.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar}
                className="flex h-20 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/80 text-lg font-semibold text-[var(--text)]"
              >
                {pillar}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
