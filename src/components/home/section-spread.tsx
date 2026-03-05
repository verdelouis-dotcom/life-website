import Reveal from "@/components/ui/reveal";

const SPREAD_CARDS = [
  { label: "Pilot Host", value: "1", detail: "Start with one LIFE Host" },
  { label: "Monthly Tables", value: "12", detail: "One hosted cooking table each month" },
  { label: "Annual Tables", value: "78", detail: "Minimum shared meal experiences" },
  { label: "People Reached", value: "≈ 624", detail: "Assumes 8 participants per table" },
];

export default function SectionSpread() {
  return (
    <section className="bg-[#f8f4ec] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">How It Spreads</p>
          <h2 className="section-heading">Pilot math, made visible.</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-4">
          {SPREAD_CARDS.map((card, index) => (
            <Reveal key={card.label} delay={index * 80} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{card.label}</p>
              <p className="mt-3 text-4xl font-serif">{card.value}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">{card.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Impact is measured through registered tables—not assumptions.</p>
      </div>
    </section>
  );
}
