import Reveal from "@/components/ui/reveal";

const IMPACT_CARDS = [
  { label: "1 Host", value: "78 Tables / Year" },
  { label: "10 Hosts", value: "780 Tables / Year" },
  { label: "Measured by Registration", value: "Tables • People • Cities" },
];

export default function SectionImpact() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Impact Model</Reveal>
        <Reveal>
          <p className="text-base text-[var(--muted)]">
            Each hosted table invites one new table. Over 12 months, one L.I.F.E. host produces a minimum of 78 tables per year. 10 L.I.F.E.
            hosts produce 780 tables per year.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {IMPACT_CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{card.label}</p>
              <p className="mt-3 text-xl font-semibold">{card.value}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Impact is measured through registered tables—not assumptions.</p>
      </div>
    </section>
  );
}
