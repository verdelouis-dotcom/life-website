import Reveal from "@/components/ui/reveal";

const CARDS = [
  {
    title: "Teach",
    description: "Longevity fundamentals based on 9 pillars, translated into practical daily habits.",
  },
  {
    title: "Cook",
    description: "Mediterranean-style home cooking using fresh, accessible ingredients.",
  },
  {
    title: "Gather",
    description: "A structured shared-meal experience that restores connection and routine.",
  },
  {
    title: "Equip",
    description: "Tools, recipes, prompts, and materials designed to be repeated at home.",
  },
];

export default function SectionWhat() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)] text-center">What We Do</Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 80}
              className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/95 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--olive)]/15 text-sm font-semibold text-[var(--olive)]">
                  {card.title[0]}
                </span>
                <p className="text-lg font-semibold">{card.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
