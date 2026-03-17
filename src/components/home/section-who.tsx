import Reveal from "@/components/ui/reveal";

const WHY_POINTS = [
  "U.S. life expectancy is declining.",
  "Chronic disease and isolation are rising.",
  "The shared table—and the habits it reinforces—are disappearing.",
];

export default function SectionWho() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center md:text-left">
        <Reveal>
          <h2 className="section-heading">We’re living shorter, less connected lives.</h2>
        </Reveal>
        <Reveal className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="type-body-muted">
              The habits that once supported long-term health are disappearing from everyday life. LIFE helps neighbors cook with fresh ingredients, share meals, and learn practical longevity habits together.
            </p>
            <p className="type-body-muted">We turn everyday tables into measurable community education so the model can scale responsibly.</p>
            <ul className="space-y-1 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 px-5 py-4 text-left text-sm text-[var(--text)]">
              {WHY_POINTS.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div>
              <a href="/how-it-works" className="btn-outline px-6 text-sm">
                See the Model
              </a>
            </div>
          </div>
          <div className="space-y-3 rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-6 text-center shadow-sm">
            <p className="type-body-muted">Want the full story?</p>
            <a href="/about" className="btn-outline px-6 text-sm">
              Learn About LIFE
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
