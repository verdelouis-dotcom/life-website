import Reveal from "@/components/ui/reveal";
import SixPillarsWheel from "@/components/six-pillars-wheel";

export default function SectionPillars() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="section-heading">Six Pillars of Longevity</h2>
          <p className="text-sm text-[var(--muted)]">
            L.I.F.E. teaches evidence-informed fundamentals across these six pillars through home-based cooking tables.
          </p>
        </Reveal>
        <Reveal>
          <SixPillarsWheel />
        </Reveal>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">The shared table naturally activates all six pillars.</p>
      </div>
    </section>
  );
}
