const CARDS = [
  { title: "Attend", body: "Join a shared meal experience." },
  { title: "Apply", body: "Take simple habits into daily life." },
  { title: "Host", body: "Pass them on by gathering others." },
];

export default function SectionHowWeDoIt() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">How We Do It</p>
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[var(--life-forest)] md:text-4xl">Attend. Apply. Host.</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-3xl border border-[var(--border)] bg-[#fffdf9] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--life-forest)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
          People come together for a shared meal, learn simple habits they can apply in their own lives, and pass them on by hosting others—growing the movement one LIFE workshop at a time.
        </p>
      </div>
    </section>
  );
}
