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
              LIFE is a nonprofit initiative piloting in Metro Atlanta that teaches longevity fundamentals through shared meals,
              fresh-ingredient cooking, and practical community education.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-4">
            <Link href="#model" className="btn-solid px-8 text-base" prefetch={false}>
              Learn the Model
            </Link>
            <Link
              href="/assessment"
              className="btn-outline px-8 text-base"
            >
              Take the Assessment
            </Link>
            <Link href="/keynote" className="text-sm font-semibold text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
              Request a Keynote
            </Link>
          </Reveal>
          <Reveal>
            <p className="type-detail text-[var(--muted)]">Piloting now in Metro Atlanta with a model built for accountable growth.</p>
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
