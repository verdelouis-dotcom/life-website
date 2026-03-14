import Reveal from "@/components/ui/reveal";

export default function SectionWhat() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-4 text-center">
          <h2 className="section-heading">The Program</h2>
          <p className="type-body-muted">
            LIFE recruits, trains, and supports community hosts to lead monthly shared meals. Through Mediterranean cooking and shared
            tables, the program reinforces practical longevity habits and social connection. Tracking registered tables shows where momentum
            is building in homes, families, and neighborhoods.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
