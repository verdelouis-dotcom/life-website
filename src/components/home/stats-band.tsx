import Reveal from "@/components/ui/reveal";

const STATS = [
  {
    title: "Meals became modular.",
    detail: "Most households now eat in shifts — convenience replaced ritual.",
  },
  {
    title: "Ultra-processed became default.",
    detail: "Access is easy, but nourishment is scarce without shared culture.",
  },
  {
    title: "Loneliness fuels decline.",
    detail: "Belonging is the unseen ingredient that keeps people well.",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.title}
              delay={index * 100}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--olive)]">Signal</p>
              <p className="mt-4 text-lg font-semibold text-[var(--text)]">{stat.title}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
