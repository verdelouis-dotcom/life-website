import Reveal from "@/components/ui/reveal";

export default function SectionWho() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Who We Are</h2>
        </Reveal>
        <Reveal className="space-y-3">
          <p className="type-body-muted">
            The Longevity Initiative for Food &amp; Education (LIFE) is a public-benefit initiative focused on community education,
            skill-building, and cultural restoration.
          </p>
          <p className="type-body-muted">We believe many of the habits associated with long, healthy lives were once reinforced through shared meals.</p>
          <p className="type-body-muted">LIFE restores those patterns through cooking, conversation, and practical longevity education.</p>
          <p className="type-body-muted">
            The program is currently piloting in Metro Atlanta while building a model designed to be measurable, replicable, and scalable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
