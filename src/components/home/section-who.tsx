import Reveal from "@/components/ui/reveal";

export default function SectionWho() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Who We Are</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">
            The Longevity Initiative for Food &amp; Education (LIFE) is a public-benefit initiative focused on community education,
            skill-building, and cultural restoration—grounded in evidence-informed longevity principles. We are piloting in Metro Atlanta with
            a replicable model designed for national scalability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
