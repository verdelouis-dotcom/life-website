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
          <p className="type-body-muted">
            The Georgia pilot now informs early hosts in Atlanta, Rochester, and Austin so the structure can stay measurable as it travels.
          </p>
          <div className="pt-2">
            <a href="/about" className="btn-outline px-6 text-sm">
              Learn More About LIFE
            </a>
          </div>
          <p className="type-detail">
            Looking for educational guides? Visit the {" "}
            <a href="/resources" className="text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4">
              LIFE Resources hub
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
