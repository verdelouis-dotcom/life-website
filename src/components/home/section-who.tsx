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
            The Longevity Initiative for Food &amp; Education (LIFE) is a public-benefit effort focused on community education, skill-building,
            and cultural restoration.
          </p>
          <p className="type-body-muted">
            We help neighbors cook with fresh ingredients, share meals, and learn practical longevity habits together.
          </p>
          <p className="type-body-muted">The Metro Atlanta pilot proves a measurable, replicable structure designed for national scale.</p>
        </Reveal>
      </div>
    </section>
  );
}
