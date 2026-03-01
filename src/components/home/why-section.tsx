import Image from "next/image";
import Reveal from "@/components/ui/reveal";

export default function WhySection() {
  return (
    <section className="bg-[#fff8ef] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Why Now</p>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Longevity Crisis</h2>
            <div className="space-y-3 text-lg text-[var(--muted)]">
              <p>For the first time in modern history, U.S. life expectancy is declining.</p>
              <p>Chronic disease is rising. Isolation is increasing. Family meals are disappearing.</p>
              <p>
                L.I.F.E. exists to restore practical, evidence-informed patterns that strengthen connection, improve food habits, and
                support long-term health.
              </p>
            </div>
          </Reveal>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-[var(--border)]">
            <Image src="/images/why-table.jpg" alt="Neighbors sharing a long table meal" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 p-6 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Field Note</p>
              <p className="mt-3 text-lg leading-relaxed">Shared meals remain the most local public-health lever we can measure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
