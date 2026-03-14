import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { PILLARS } from "@/data/pillars";

export default function SectionPillars() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="section-heading">Six Pillars</h2>
          <p className="type-body-muted">LIFE teaches practical longevity fundamentals through six core pillars.</p>
        </Reveal>
        <div className="grid gap-5 text-left md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)]/90 p-5 text-left shadow-sm">
                <p className="type-eyebrow">{pillar.title}</p>
                <p className="mt-2 type-body-muted">{pillar.summary}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/pillars/${pillar.slug}`}
                    className="btn-outline px-5"
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
