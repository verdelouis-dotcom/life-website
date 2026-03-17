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
    <section id="model" className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-center">
        <Reveal className="space-y-3">
          <h2 className="heading-lg">The Model</h2>
          <p className="body-md text-[var(--muted)]">LIFE grows through a simple three-step cycle.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {MODEL_STEPS.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 80}
              className="h-full rounded-[28px] border border-[var(--border)] bg-white/90 card-padding text-left shadow-sm"
            >
              <p className="label-text">{step.title}</p>
              <p className="mt-3 body-sm text-[var(--text)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <a href="/how-it-works" className="btn-outline px-6 text-sm">
            Explore the Model
          </a>
        </div>
      </div>
    </section>
  );
}
