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
      <div className="mx-auto max-w-6xl space-y-8 px-6 py-24 text-center md:py-32">
        <Reveal className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-700 md:text-base">Framework</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">The Six Pillars of LIFE</h2>
          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">Each pillar represents a simple foundation of long-term health. Click to explore how it shows up at a LIFE cooking experience.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 60}>
              <Link
                href={pillar.href}
                className="group block h-full rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[var(--olive)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--life-forest)]">{pillar.title}</h3>
                  <span className="text-2xl text-[var(--terracotta)] transition group-hover:translate-x-1">→</span>
                </div>
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
