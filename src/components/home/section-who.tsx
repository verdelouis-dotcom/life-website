import Reveal from "@/components/ui/reveal";

const LINES = [
  "We believe health starts at the table.",
  "We believe in simple habits, practiced daily.",
  "We believe in doing it together.",
  "",
  "What was once normal is now rare.",
  "LIFE brings it back.",
];

export default function SectionWho() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <Reveal className="space-y-4">
          {LINES.map((line, index) => (
            <p
              key={`${line}-${index}`}
              className={`${index < 3 ? "text-2xl font-semibold" : "type-body-muted"}`}
            >
              {line || "\u00A0"}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
