import Image from "next/image";
import Reveal from "@/components/ui/reveal";

// TODO: Replace placeholder imagery with final photography (why-table.jpg).

export default function WhySection() {
  return (
    <section className="bg-[#fff8ef] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Why</p>
            <h2 className="text-3xl font-semibold text-[var(--text)]">Meals are the most local health policy we have.</h2>
            <p className="text-lg text-[var(--muted)]">
              When tables disappear, so does accountability, compassion, and the context that turns knowledge into action.
              We rebuild this structure at neighborhood scale — anchored by monthly shared tables that remind people how
              to nourish one another.
            </p>
            <div className="rounded-3xl border border-[var(--border)] bg-white/80 p-6">
              <p className="text-base text-[var(--text)]">
                We partner with families, community coalitions, and workplaces to reintroduce shared meals as a non-negotiable
                rhythm — not a special event.
              </p>
            </div>
          </Reveal>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-[var(--border)]">
            <Image src="/images/why-table.jpg" alt="Neighbors sharing a long table meal" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 p-6 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Field Note</p>
              <p className="mt-3 text-lg leading-relaxed">
                "People came for recipes and left with new neighbors. That is the multiplier we chase."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
