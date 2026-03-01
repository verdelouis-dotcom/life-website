import Reveal from "@/components/ui/reveal";

const PROGRAM_POINTS = [
  "Community education on longevity fundamentals (six pillars framework)",
  "Hands-on cooking skills using fresh, accessible ingredients",
  "Hosted tables that model shared meals and connection",
  "Toolkits that make it easy to repeat at home",
  "Participation tracking through registered tables",
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Program Model</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">What We Do</h2>
          <p className="text-lg text-[var(--muted)]">
            L.I.F.E. is an educational public-benefit initiative that makes longevity fundamentals practical, measurable, and repeatable.
          </p>
          <ul className="space-y-3 text-base text-[var(--text)]">
            {PROGRAM_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-[var(--terracotta)]">•</span>
                <span className="flex-1 text-[var(--muted)]">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
