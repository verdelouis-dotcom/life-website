import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SupportBand() {
  return (
    <section className="bg-[var(--terracotta)] py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="space-y-3 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Fund</p>
          <h2 className="text-3xl font-semibold">Underwrite the pilot.</h2>
          <p className="text-base text-white/90">
            Gifts underwrite community education, resource toolkits, and measurable outreach so more tables can register.
          </p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-2xl border border-white/90 bg-white/25 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Donate
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-2xl border border-white/90 bg-white/15 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Register a Table
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
