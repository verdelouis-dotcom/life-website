import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const REASSURANCES = [
  {
    title: "Keep it simple",
    detail: "Invite a handful of people, serve one main dish, and print the LIFE prompts. The goal is conversation, not culinary perfection.",
  },
  {
    title: "Use what you have",
    detail: "Apartments, church kitchens, break rooms, and back patios all work. Hosts get a guide, ingredient ideas, and the LIFE Assessment flow.",
  },
  {
    title: "Create a ripple effect",
    detail: "After you host, you register the table, share what worked, and help the next host feel ready. That’s how reach becomes measurable.",
  },
];

export default function SectionHostReassurance() {
  return (
    <section className="bg-[#fff8ef] py-16 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <p className="type-eyebrow text-[var(--olive)]">Hosting support</p>
          <h2 className="section-heading">Hosting a LIFE Table Is Simpler Than You Think</h2>
          <p className="type-body-muted">
            You do not need to be a chef, nutrition expert, or event planner. A LIFE table starts with a shared meal, the six pillars, and a short conversation about everyday habits.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {REASSURANCES.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="rounded-[28px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
              <p className="text-lg font-semibold text-[var(--life-forest)]">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center space-y-2">
          <Link href="/host" className="btn-solid px-8 text-base">
            Host a LIFE Table
          </Link>
          <p className="text-sm text-[var(--muted)]">Simple, guided, and repeatable.</p>
        </Reveal>
      </div>
    </section>
  );
}
