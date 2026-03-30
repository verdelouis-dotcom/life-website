import Reveal from "@/components/ui/reveal";

export default function SectionWho() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
        <Reveal>
          <p className="label-text text-[var(--olive)]">The LIFE approach</p>
        </Reveal>
        <Reveal>
          <h2 className="heading-lg">Shared meals that stay measurable</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">
            LIFE helps neighbors host simple LIFE cooking experiences, teach practical habits, and register what happens so healthier routines spread city by city.
          </p>
        </Reveal>
        <Reveal className="grid gap-4 text-left body-sm text-[var(--text)] md:grid-cols-3">
          {[
            "Fresh ingredients and family traditions make healthier defaults feel doable.",
            "Hosts commit to register each LIFE cooking experience within 24 hours so progress stays visible.",
            "Shared data keeps donors, partners, and new hosts confident the model works.",
          ].map((detail) => (
            <div key={detail} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-center">
              {detail}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
