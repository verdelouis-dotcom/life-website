import Reveal from "@/components/ui/reveal";

export default function SectionWhy() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Why Now</h2>
        </Reveal>
        <Reveal>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            U.S. life expectancy is declining. Chronic disease is rising. Isolation is increasing.
            <br />
            Shared meals are disappearing—along with routines that once reinforced connection, real food, and healthier daily habits.
            <br />
            L.I.F.E. restores practical fundamentals people can use at home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
