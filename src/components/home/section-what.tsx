import IconEducation from "@/components/icons/icon-education";
import IconRealFood from "@/components/icons/icon-real-food";
import IconSharedMeals from "@/components/icons/icon-shared-meals";
import IconToolkit from "@/components/icons/icon-toolkit";
import Reveal from "@/components/ui/reveal";

const CARDS = [
  {
    title: "Teach",
    description: "Longevity fundamentals people can practice at home.",
    Icon: IconEducation,
  },
  {
    title: "Cook",
    description: "Mediterranean-style meals with simple ingredients.",
    Icon: IconRealFood,
  },
  {
    title: "Gather",
    description: "Shared meals that rebuild connection.",
    Icon: IconSharedMeals,
  },
  {
    title: "Equip",
    description: "Tools and recipes designed to be passed on.",
    Icon: IconToolkit,
  },
];

export default function SectionWhat() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">The Program</p>
          <h2 className="section-heading">The Program</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ title, description, Icon }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/95 p-6 text-left shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--olive)]/10">
                <Icon className="h-6 w-6 text-[var(--olive)]" />
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--text)]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
