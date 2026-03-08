import Reveal from "@/components/ui/reveal";

const SPREAD_CARDS = [
  { label: "Start Local", value: "One Host", detail: "Invite neighbors into your kitchen." },
  { label: "Shared Meal", value: "Monthly Rhythm", detail: "Cook, learn, and connect together." },
  { label: "Pass It Forward", value: "Next Table", detail: "A guest hosts within 30 days." },
  { label: "Register Growth", value: "Track Tables", detail: "Log gatherings so we see participation." },
];

export default function SectionSpread() {
  return (
    <section className="bg-[#f8f4ec] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Pass It Forward.</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-4">
          {SPREAD_CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="type-eyebrow">{card.label}</p>
              <p className="mt-3 text-4xl font-serif text-[var(--life-forest)]">{card.value}</p>
              <p className="mt-2 type-detail">{card.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="type-detail">Participation starts locally. Registered tables help us understand how the experience is spreading across homes, families, and neighborhoods.</p>
      </div>
    </section>
  );
}
