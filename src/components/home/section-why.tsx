import Reveal from "@/components/ui/reveal";

export default function SectionWhy() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 rounded-[32px] border border-[var(--border)] bg-[#fff8ef] card-padding text-center shadow-sm">
        <Reveal>
          <p className="label-text text-[var(--olive)]">Why it matters</p>
        </Reveal>
        <Reveal>
          <h2 className="heading-lg">Life expectancy is dropping because daily habits are drifting.</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">
            Shared meals fade, people eat alone, and no one tracks what happens. LIFE keeps the table measurable so healthier routines actually stick.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
