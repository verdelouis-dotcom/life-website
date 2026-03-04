import Reveal from "@/components/ui/reveal";

const STEPS = ["Host Table", "Teach Meal", "Invite Next", "Register Impact"];

export default function SectionHow() {
  return (
    <section className="bg-[#f8f4ec] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">How It Works</Reveal>
        <div className="grid gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step} delay={index * 70} className="rounded-[24px] border border-[var(--border)] bg-white p-5 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Step {index + 1}</p>
              <p className="mt-2 text-lg font-semibold">{step}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">The “workshop” is a hosted cooking table in a home—where guests learn by doing.</p>
      </div>
    </section>
  );
}
