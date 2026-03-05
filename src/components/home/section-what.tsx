import Reveal from "@/components/ui/reveal";

const CARDS = [
  {
    title: "Teach",
    description: "Longevity fundamentals people can practice at home.",
  },
  {
    title: "Cook",
    description: "Mediterranean-style meals with simple ingredients.",
  },
  {
    title: "Gather",
    description: "Shared meals that rebuild connection.",
  },
  {
    title: "Equip",
    description: "Tools and recipes designed to be passed on.",
  },
];

export default function SectionWhat() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="text-center">
          <h2 className="section-heading">The Program</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/95 p-6 text-left shadow-sm"
            >
              <p className="text-xl font-semibold text-[var(--text)]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
