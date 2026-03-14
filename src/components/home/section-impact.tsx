import Reveal from "@/components/ui/reveal";

const IMPACT_CARDS = [
  { label: "Gather", tables: "One evening per month", people: "Hosts bring neighbors together around a shared meal." },
  { label: "Pass It Forward", tables: "Simple invitation", people: "A guest agrees to host the next table within 30 days." },
  { label: "Register Growth", tables: "Log each table", people: "Registrations show where participation is growing." },
];

export default function SectionImpact() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Impact Model</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">
            LIFE grows through shared meals and relationships. Each gathering creates an opportunity for someone else to open their home,
            share a meal, and pass it forward. When tables are registered, we can see how participation expands from one household to the
            next across homes, families, and neighborhoods. LIFE begins with a simple shared meal. People gather around the table to cook,
            eat, and talk about practical habits that support long and healthy lives. At the end of the evening, there is one simple
            invitation: pass it forward. Within the next 30 days, invite someone to your own table and share a meal together. Each table is
            registered so we can understand participation and see where the movement is growing.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {IMPACT_CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="type-eyebrow">{card.label}</p>
              <p className="mt-3 text-xl font-semibold">{card.tables}</p>
              <p className="mt-1 type-detail">{card.people}</p>
            </Reveal>
          ))}
        </div>
        <p className="type-detail">1 evening per month. 90 minutes together. One simple invitation to pass it forward.</p>
      </div>
    </section>
  );
}
