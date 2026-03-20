const PILLARS = [
  {
    title: "Food",
    body: "Cook from scratch. Use whole ingredients. Share what you make. The way we eat shapes everything else.",
  },
  {
    title: "Movement",
    body: "Daily motion woven into real life — not a gym routine you'll quit, but a disposition you'll keep.",
  },
  {
    title: "Sleep",
    body: "Rest is the most underrated habit there is. Simple, evidence-backed practices to protect it.",
  },
  {
    title: "Connection",
    body: "Loneliness is a health crisis. A shared meal is one of the oldest cures. Show up for the people you love.",
  },
  {
    title: "Purpose",
    body: "People who know why they get up in the morning live longer. LIFE gives you a reason to show up for others.",
  },
  {
    title: "Stress Regulation",
    body: "Chronic stress is invisible and cumulative. Daily tools that don't require a retreat or a subscription.",
  },
];

export function LandingGuideSection() {
  return (
    <section id="guide" className="bg-[var(--earth)] px-6 py-20 text-white md:px-16">
      <span className="stag text-[rgba(255,255,255,0.45)]">The LIFE Guide</span>
      <h2 className="sh text-white">Six pillars. Habits you can actually live.</h2>
      <p className="sb text-[rgba(255,255,255,0.65)]">Every guest leaves with a guide built around six foundations of long-term health. Not a diet plan. Not a program. Just simple habits worth sharing.</p>
      <div className="mt-10 grid gap-px rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)] md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="bg-[var(--earth)] p-6">
            <div className="mb-3 h-8 w-8 rounded-full border border-[rgba(255,255,255,0.2)]" />
            <h3 className="text-[0.95rem] font-semibold text-white">{pillar.title}</h3>
            <p className="mt-2 text-[0.85rem] text-[rgba(255,255,255,0.55)]">{pillar.body}</p>
          </div>
        ))}
      </div>
      <p className="guide-note mt-6 text-center text-[0.9rem] text-[rgba(255,255,255,0.4)]">These aren&apos;t rules. They&apos;re habits — meant to be shared, practiced, and passed on.</p>
    </section>
  );
}
