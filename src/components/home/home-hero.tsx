import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-[#fff1e2] via-[#fffdf7] to-[#f4efe6]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-[1.1fr,0.9fr] md:items-stretch md:py-24">
        <div className="flex h-full flex-col gap-6 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-lg">
          <Reveal className="type-eyebrow text-[var(--olive)]">Nonprofit Initiative</Reveal>
          <Reveal>
            <h1 className="type-display">Longevity Starts at the Table</h1>
          </Reveal>
          <Reveal>
            <p className="type-lede text-[var(--text)]">
              The Longevity Initiative for Food &amp; Education brings people together to cook, share meals, and practice the habits that support
              longer, healthier lives.
            </p>
          </Reveal>
          <Reveal>
            <p className="type-body max-w-2xl text-[var(--text)]">
              Launching in Metro Atlanta in 2026, L.I.F.E. restores the table as a place to learn, gather, and build everyday longevity habits.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-4">
            <Link
              href="/host"
              className="btn-outline"
            >
              Host a Table
            </Link>
            <Link
              href="/register"
              className="btn-outline"
            >
              Register a Table
            </Link>
            <Link
              href="/donate"
              className="btn-outline"
            >
              Donate
            </Link>
            <Link
              href="/keynote"
              className="btn-outline"
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
