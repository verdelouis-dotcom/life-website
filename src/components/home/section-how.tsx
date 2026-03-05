import Reveal from "@/components/ui/reveal";

const STEPS = [
  { title: "Host", description: "Invite a small group to cook and share a meal." },
  { title: "Cook", description: "Learn longevity fundamentals while preparing the meal." },
  { title: "Pass It On", description: "One guest hosts the next table within 30 days." },
  { title: "Register", description: "Record the table to track community impact." },
];

export default function SectionHow() {
  return (
    <section className="bg-[#f8f4ec] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">How It Works</h2>
        </Reveal>
        <div className="grid gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 70} className="rounded-[24px] border border-[var(--border)] bg-white p-5 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Step {index + 1}</p>
              <p className="mt-2 text-lg font-semibold">{step.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">The “workshop” is a hosted cooking table in a home—where guests learn by doing.</p>
      </div>
    </section>
  );
}
