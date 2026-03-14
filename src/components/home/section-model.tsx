import Reveal from "@/components/ui/reveal";

const MODEL_STEPS = [
  {
    title: "Attend",
    description:
      "Participants join a hosted cooking workshop where they prepare a meal together and learn longevity fundamentals.",
  },
  {
    title: "Host",
    description:
      "After attending, participants are encouraged to host a workshop of their own for friends, neighbors, or family members.",
  },
  {
    title: "Register",
    description:
      "Once the meal is hosted, it is registered on the LIFE website so participation and reach can be measured.",
  },
];

export default function SectionModel() {
  return (
    <section id="model" className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="section-heading">The Model</h2>
          <p className="type-body-muted">LIFE grows through a simple three-step cycle.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {MODEL_STEPS.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 80}
              className="h-full rounded-[28px] border border-[var(--border)] bg-white/90 p-6 text-left shadow-sm"
            >
              <p className="type-eyebrow">{step.title}</p>
              <p className="mt-3 text-sm text-[var(--text)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="space-y-2 text-sm text-[var(--muted)]">
          <p>This is how the movement becomes measurable.</p>
          <p>Participation starts locally. Impact is measured through registered workshops.</p>
        </div>
      </div>
    </section>
  );
}
