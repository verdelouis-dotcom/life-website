import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import { PILLARS } from "@/data/pillars";

export default function SectionPillars() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="heading-lg">The LIFE Pillars</h2>
          <p className="body-md text-[var(--muted)]">Every table conversation ties back to six everyday habits associated with healthy aging.</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-[var(--life-forest)]">
            {PILLARS.map((pillar) => (
              <span key={pillar.slug} className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-4 py-2 text-[var(--text)]">
                {pillar.title}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">
            See how each pillar works and explore practical recommendations inside{" "}
            <Link href="/resources/the-six-pillars-of-life" className="text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4">
              the LIFE framework
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
