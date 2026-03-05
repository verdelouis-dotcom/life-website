import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0e1511]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-table-family.jpg"
          alt="Neighbors sharing a long table meal"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl rounded-3xl bg-[var(--surface)]/90 p-8 text-[var(--text)] shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="flex flex-col gap-6">
            <Reveal className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">Public-Benefit Initiative</Reveal>
            <Reveal>
              <h1 className="text-4xl font-semibold leading-tight text-[var(--life-forest)] sm:text-5xl lg:text-6xl">
                Longevity Starts Here
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg font-medium text-[var(--text)]">Restoring the table as a foundation for healthier, longer lives.</p>
            </Reveal>
            <Reveal className="space-y-3 text-lg leading-snug text-[var(--text)]">
              <p>L.I.F.E. is a nonprofit initiative piloting in Metro Atlanta.</p>
              <p>We teach longevity fundamentals through Mediterranean cooking and shared meals.</p>
            </Reveal>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--olive)]">
                Each L.I.F.E. host leads one table per month, creating 78 shared meal experiences annually.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#394930]"
              >
                Register a Table
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15"
              >
                Donate
              </Link>
              <Link
                href="/keynote"
                className="text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline"
              >
                Request a Keynote
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
