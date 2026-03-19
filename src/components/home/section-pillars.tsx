import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const PILLARS = [
  { title: "Food", href: "/pillars/food" },
  { title: "Movement", href: "/pillars/movement" },
  { title: "Sleep", href: "/pillars/sleep" },
  { title: "Connection", href: "/pillars/connection" },
  { title: "Purpose", href: "/pillars/purpose" },
  { title: "Stress Regulation", href: "/pillars/stress" },
];

export function SectionPillars() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-20 md:py-28">
        <Reveal className="space-y-3 text-center">
          <p className="label-text text-[var(--olive)]">The LIFE Framework</p>
          <h2 className="heading-lg">The 6 Pillars of LIFE</h2>
          <p className="body-md text-[var(--muted)]">Each pillar represents a simple foundation of long-term health. Click to explore how it shows up at a LIFE table.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 60}>
              <Link
                href={pillar.href}
                className="group block h-full rounded-[32px] border border-neutral-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--life-forest)] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--olive)]"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--life-forest)]">{pillar.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center body-sm text-[var(--muted)]">These are not rules to follow. They are habits to share and pass on.</p>
        </Reveal>
      </div>
    </section>
  );
}
