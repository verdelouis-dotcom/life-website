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
          <p>It starts with one table.</p>
          <p>One shared meal.</p>
          <p>One conversation.</p>
          <p className="pt-2">Someone attends.</p>
          <p>Then they host.</p>
          <p className="pt-2">That’s how it grows.</p>
        </Reveal>
        <Reveal className="rounded-[28px] border border-[var(--border)] bg-white/90 card-padding text-center shadow-sm">
          <p className="heading-md text-[var(--life-forest)]">Start simple. Stay consistent.</p>
          <p className="body-md mt-3 text-[var(--text)]">
            Host a small table. Cook a real meal. Share the experience.
            <br />That’s how the model grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
