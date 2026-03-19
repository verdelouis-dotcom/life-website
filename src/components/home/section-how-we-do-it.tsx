const CARDS = [
  { title: "Attend", body: "Join a shared meal where people cook, learn, and connect." },
  { title: "Practice", body: "Use the LIFE Guide to practice simple habits in daily life." },
  { title: "Host", body: "Use the Host Guide to lead your own LIFE workshop and bring others together." },
];

export default function SectionHowWeDoIt() {
  return (
    <section className="bg-white text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--life-forest)] md:text-5xl">How We Do It</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <article key={card.title} className="rounded-3xl border border-[var(--border)] bg-[#fffdf9] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--life-forest)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{card.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          People come together for a shared meal, practice what they’ve learned in their own lives through the LIFE Guide, and pass it on by hosting others—growing the movement one table at a time.
        </p>
      </div>
    </section>
  );
}
