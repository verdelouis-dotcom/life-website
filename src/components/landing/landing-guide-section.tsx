import Link from "next/link";

const PILLARS = [
  {
    title: "Food",
    slug: "food",
    body: "Cook from scratch. Use whole ingredients. Share what you make. The way we eat shapes everything else.",
  },
  {
    title: "Movement",
    slug: "movement",
    body: "Daily motion woven into real life — not a gym routine you'll quit, but a disposition you'll keep.",
  },
  {
    title: "Sleep",
    slug: "sleep",
    body: "Rest is the most underrated habit there is. Simple, evidence-backed practices to protect it.",
  },
  {
    title: "Connection",
    slug: "connection",
    body: "Loneliness is a health crisis. A shared meal is one of the oldest cures. Show up for the people you love.",
  },
  {
    title: "Purpose",
    slug: "purpose",
    body: "People who know why they get up in the morning live longer. LIFE gives you a reason to show up for others.",
  },
  {
    title: "Stress Regulation",
    slug: "stress",
    body: "Chronic stress is invisible and cumulative. Daily tools that don't require a retreat or a subscription.",
  },
];

export function LandingGuideSection() {
  return (
    <section id="guide" className="bg-[#3a2a1d] px-6 py-20 text-white md:px-16">
      <span className="stag text-[rgba(255,255,255,0.45)]">The LIFE Guide</span>
      <h2 className="sh text-[#fdf8f1]">Six pillars. Habits you can actually live.</h2>
      <p className="sb text-[rgba(253,248,241,0.8)]">Every guest leaves with a guide built around six foundations of long-term health. Not a diet plan. Not a program. Just simple habits worth sharing.</p>
      <div className="mt-10 grid gap-px rounded-2xl border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.08)] md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <Link
            key={pillar.title}
            href={`/pillars/${pillar.slug}`}
            className="block bg-[#402f21] p-6 transition hover:bg-[rgba(255,255,255,0.04)]"
          >
            <h3 className="text-[0.95rem] font-semibold text-[rgba(255,243,230,0.95)]">{pillar.title}</h3>
            <p className="mt-2 text-[0.85rem] text-[rgba(255,255,255,0.7)]">{pillar.body}</p>
          </Link>
        ))}
      </div>
      <p className="guide-note mt-6 text-center text-[0.9rem] text-[rgba(255,255,255,0.45)]">These aren&apos;t rules. They&apos;re habits — meant to be shared, practiced, and passed on.</p>
    </section>
  );
}
