import Reveal from "@/components/ui/reveal";

export default function SectionWhy() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 rounded-[32px] border border-[var(--border)] bg-[#fff8ef] card-padding text-center shadow-sm">
        <Reveal>
          <p className="label-text text-[var(--olive)]">Gut Check</p>
        </Reveal>
        <Reveal>
          <h2 className="heading-lg">Where are your habits taking you?</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">Most people don’t know until they see it clearly.</p>
        </Reveal>
      </div>
    </section>
  );
}
