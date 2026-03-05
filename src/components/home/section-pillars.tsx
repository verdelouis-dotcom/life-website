import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import SixPillarsWheel from "@/components/six-pillars-wheel";
import { PILLARS } from "@/data/pillars";

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
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Select a pillar to learn why it matters for longevity.</p>
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--olive)]/70">The shared table naturally activates all six pillars.</p>
        <div className="mx-auto grid max-w-4xl gap-4 text-left sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/pillars/${pillar.slug}`}
              className="rounded-3xl border border-[var(--border)] bg-white/90 p-4 shadow-sm transition hover:border-[var(--olive)]"
            >
              <p className="text-base font-semibold text-[var(--life-forest)]">{pillar.title}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{pillar.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
