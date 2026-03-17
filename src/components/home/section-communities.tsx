import Reveal from "@/components/ui/reveal";

const COMMUNITIES = ["Atlanta, GA", "Austin, TX", "Rochester, NY"];

export default function SectionCommunities() {
  return (
    <section className="bg-white py-16 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <Reveal>
          <p className="type-eyebrow text-[var(--olive)]">Where LIFE Is Active</p>
        </Reveal>
        <Reveal>
          <h2 className="section-heading">Community-led tables, growing presence</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">What began around one table in Georgia is now active in a handful of U.S. communities, proving the model can travel.</p>
        </Reveal>
        <Reveal className="flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-5 text-sm font-semibold text-[var(--life-forest)]">
          <span>Currently active in:</span>
          {COMMUNITIES.map((city) => (
            <span key={city} className="rounded-full border border-[var(--border)] bg-white px-4 py-1 text-[var(--text)]">
              {city}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
