import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SupportBand() {
  return (
    <section className="bg-[var(--terracotta)] py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="space-y-3 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Support</p>
          <h2 className="text-3xl font-semibold">Keep the tables set.</h2>
          <p className="text-base text-white/90">
            Every contribution sustains neighborhood hosts, cooking stipends, and the education that surrounds each meal.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/support"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[var(--terracotta)] shadow-sm transition hover:bg-[#ffe9df]"
          >
            Give to L.I.F.E.
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
