import Reveal from "@/components/ui/reveal";
import IconSharedMeals from "@/components/icons/icon-shared-meals";
import IconRealFood from "@/components/icons/icon-real-food";
import IconCommunity from "@/components/icons/icon-community";

const PROGRAMS = [
  {
    title: "Shared Meals",
    description: "Monthly hosted tables with a simple guide, conversation prompts, and ingredients sourced responsibly.",
    Icon: IconSharedMeals,
  },
  {
    title: "Real Food",
    description: "Seasonal menus rooted in nutrient-dense staples — teaching people how to shop, prep, and stretch budgets.",
    Icon: IconRealFood,
  },
  {
    title: "Belonging",
    description: "Training hosts to facilitate dialogue so every guest feels seen, heard, and compelled to continue the rhythm.",
    Icon: IconCommunity,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">What we do</p>
          <h2 className="text-3xl font-semibold text-[var(--text)]">Structures that make the healthy choice the default.</h2>
          <p className="text-lg text-[var(--muted)]">
            L.I.F.E. builds kitchen-table infrastructure — rituals, resources, and skilled neighbors who can steward them.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <Reveal
              key={program.title}
              delay={index * 120}
              className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-sm"
            >
              <program.Icon className="mb-4 h-12 w-12 text-[var(--terracotta)]" />
              <h3 className="text-2xl font-semibold text-[var(--text)]">{program.title}</h3>
              <p className="mt-3 text-base text-[var(--muted)]">{program.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
