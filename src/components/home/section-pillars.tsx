import Link from "next/link";
import Reveal from "@/components/ui/reveal";
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
        <div className="grid gap-5 text-left md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)]/90 p-5 text-left shadow-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{pillar.title}</p>
                <p className="mt-2 text-base text-[var(--muted)]">{pillar.summary}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/pillars/${pillar.slug}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-5 py-2 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Each pillar stands alone—and hosts weave them together across the year.</p>
      </div>
    </section>
  );
}
