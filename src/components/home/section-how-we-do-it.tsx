const CARDS = [
  { title: "Attend", body: "Join a shared meal where people cook, learn, and connect." },
  { title: "Practice", body: "Use the LIFE Guide to bring simple habits into daily life." },
  { title: "Host", body: "Use the Host Guide to lead your own LIFE gathering and bring others together." },
];

export default function SectionHowWeDoIt() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Model</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">How LIFE Works</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--olive)]">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--life-forest)]">{card.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          People come together for a shared meal, practice what they’ve learned in daily life, and pass it on by hosting others—growing the movement one table at a time.
        </p>
      </div>
    </section>
  );
}
