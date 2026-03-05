import Reveal from "@/components/ui/reveal";

export default function SectionWhat() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-4 text-center">
          <h2 className="section-heading">The Program</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            L.I.F.E. recruits, trains, and supports community hosts to lead monthly shared meals. Through Mediterranean cooking and shared
            tables, the program reinforces practical longevity habits and social connection. Impact is measured through registered tables.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
