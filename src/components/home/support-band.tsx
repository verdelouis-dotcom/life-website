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
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[var(--terracotta)] shadow-sm transition hover:bg-[#ffe9df]"
          >
            Donate
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white/20"
          >
            Register a Table
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
