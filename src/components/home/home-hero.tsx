import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-[#fff1e2] via-[#fffdf7] to-[#f4efe6]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-[1.1fr,0.9fr] md:items-stretch md:py-24">
        <div className="flex h-full flex-col gap-6 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-lg">
          <Reveal className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
            <span>Public-Benefit Initiative</span>
            <Link
              href="/host"
              className="rounded-full border border-[var(--olive)]/40 px-4 py-1 text-[0.7rem] font-semibold tracking-[0.2em] text-[var(--olive)] transition hover:bg-white"
            >
              Host a Table
            </Link>
          </Reveal>
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
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)]/30 px-6 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white"
            >
              Register a Table
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)]/30 px-6 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white"
            >
              Donate
            </Link>
            <Link href="/keynote" className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)]/30 px-6 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white"
            >
              Request a Keynote
            </Link>
          </Reveal>
        </div>
        <Reveal
          delay={120}
          className="relative w-full overflow-hidden rounded-[36px] border border-[var(--border)] shadow-xl min-h-[360px] md:min-h-[520px]"
        >
          <Image
            src="/images/farm/farm3.jpg"
            alt="Fresh produce being prepared for a LIFE table"
            fill
            className="object-cover object-center"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
