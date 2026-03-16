import Reveal from "@/components/ui/reveal";

const COMMUNITIES = [
  { city: "Atlanta, GA", note: "Where the first LIFE tables started" },
  { city: "Rochester, NY", note: "Early host families adapting the model" },
  { city: "Austin, TX", note: "Testing LIFE dinners with local organizers" },
];

export default function SectionCommunities() {
  return (
    <section className="bg-white py-16 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <Reveal>
          <p className="type-eyebrow text-[var(--olive)]">Where LIFE Is Taking Root</p>
        </Reveal>
        <Reveal>
          <h2 className="section-heading">A community-led model carried by early hosts</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">
            What began around one table in Georgia is now being introduced by early hosts in new communities. Each city proves that shared meals, fresh ingredients, and the LIFE assessment can travel.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {COMMUNITIES.map((item) => (
            <Reveal key={item.city} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-5">
              <p className="text-lg font-semibold text-[var(--life-forest)]">{item.city}</p>
              <p className="mt-2 text-sm text-[var(--text)]">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
