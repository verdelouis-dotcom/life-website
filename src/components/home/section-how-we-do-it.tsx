const CARDS = [
  { title: "Attend", body: "Join a shared meal experience." },
  { title: "Apply", body: "Take simple habits into daily life." },
  { title: "Host", body: "Pass them on by gathering others." },
];

export default function SectionHowWeDoIt() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-700 md:mb-8 md:text-base">How We Do It</p>
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">Simple habits. Shared meals. Repeated.</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-3xl border border-[var(--border)] bg-[#fffdf9] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--life-forest)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          People come together for a shared meal, learn simple habits they can apply in their own lives, and pass them on by hosting others—growing the movement one table at a time.
        </p>
      </div>
    </section>
  );
}
