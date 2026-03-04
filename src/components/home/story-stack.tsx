import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const CARDS = [
  {
    eyebrow: "Why It Matters",
    title: "Our environment changed.",
    body: [
      "Convenience removed shared meals, natural movement, and unhurried conversation from daily life.",
      "Declining life expectancy and rising loneliness are signals we can no longer ignore.",
    ],
    link: { label: "See the context", href: "/why-this-matters" },
  },
  {
    eyebrow: "How We Respond",
    title: "Monthly Table Model.",
    body: [
      "Once a month a LIFE Host gathers neighbors, cooks fresh food, and issues a 30-day replication challenge.",
      "Simple, measurable steps turn one consistent table into dozens over a year.",
    ],
    link: { label: "View the model", href: "/what-we-do" },
  },
  {
    eyebrow: "Teach & Equip",
    title: "Workshops + education.",
    body: [
      "Interactive demos bring longevity fundamentals to schools, civic groups, and employers.",
      "Every session ends with practical next steps people can start that same week.",
    ],
    link: { label: "Book a workshop", href: "/workshops" },
  },
];

export default function StoryStack() {
  return (
    <section className="bg-[#fff8ef] py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Story in three beats</p>
          <h2 className="text-3xl font-semibold">Problem. Model. Tools.</h2>
          <p className="text-lg text-[var(--muted)]">Skim the highlights or click through for the full narrative.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 80} className="flex h-full flex-col rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{card.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                {card.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <Link href={card.link.href} className="text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline">
                  {card.link.label}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
