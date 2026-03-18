import Reveal from "@/components/ui/reveal";

export default function SectionModel() {
  return (
    <section id="model" className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="heading-lg">The Model</h2>
          <p className="heading-md text-[var(--life-forest)]">Attend. Host. Repeat.</p>
        </Reveal>
        <Reveal className="space-y-2 body-md text-[var(--text)]">
          <p>Each table is a single shared meal where people cook together, learn something useful, and register what happened.</p>
          <p>Hosts teach a favorite recipe or family tradition while creating space for learning, connection, and community.</p>
          <p className="pt-2">Then it continues—LIFE grows one table at a time.</p>
        </Reveal>
        <Reveal className="rounded-[28px] border border-[var(--border)] bg-white/90 card-padding text-center shadow-sm">
          <p className="heading-md text-[var(--life-forest)]">Start simple. Stay consistent.</p>
          <p className="body-md mt-3 text-[var(--text)]">
            Host a small table. Cook a real meal. Share what you know and register it so the next host is ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
