import Reveal from "@/components/ui/reveal";

const IMPACT_CARDS = [
  { label: "Host-Led", tables: "12 Tables / Year", people: "Personally led by each LIFE Host" },
  { label: "Activated Cycle", tables: "78 Tables / Year", people: "Total shared meal experiences sparked" },
  { label: "10 Hosts", tables: "780 Tables / Year", people: "≈ 3,120 People engaged" },
];

export default function SectionImpact() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Impact Model</h2>
        </Reveal>
        <Reveal>
          <p className="text-base text-[var(--muted)]">
            Every host personally leads 12 monthly tables. Because each gathering equips a guest to host the next, the invite cycle activates
            a minimum of 78 shared meal experiences per host each year. Scaling to 10 hosts produces 780 registered tables annually.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {IMPACT_CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{card.label}</p>
              <p className="mt-3 text-xl font-semibold">{card.tables}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{card.people}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Impact is measured through registered tables—not assumptions.</p>
      </div>
    </section>
  );
}
