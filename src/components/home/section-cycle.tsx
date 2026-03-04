import Reveal from "@/components/ui/reveal";

const MONTHS = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);

export default function SectionCycle() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">12-Month Pilot</Reveal>
        <p className="text-base text-[var(--muted)]">Each L.I.F.E. host leads one hosted cooking table per month for one year.</p>
        <div className="mt-8 grid grid-cols-4 gap-4 text-center sm:grid-cols-6 md:grid-cols-12">
          {MONTHS.map((month, index) => (
            <Reveal key={month} delay={index * 40} className="flex flex-col items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--olive)] text-xs font-semibold text-[var(--olive)]">
                {index + 1}
              </span>
              <span className="text-xs text-[var(--muted)]">{month}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
