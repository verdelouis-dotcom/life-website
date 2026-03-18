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
          <p>Each table is a shared meal.</p>
          <p>People cook together, learn something they can take home, and pass it on.</p>
          <p>A host invites someone over—they cook, eat, and share something meaningful.</p>
          <p>A recipe. A tradition. A simple habit.</p>
          <p>That person leaves ready to host their own table within 30 days.</p>
          <p>Then it continues.</p>
          <p>One table becomes another.</p>
          <p className="pt-2">That’s how LIFE grows.</p>
        </Reveal>
      </div>
    </section>
  );
}
