import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="section-spacing bg-gradient-to-br from-[#fff1e2] via-[#fffdf7] to-[#f4efe6]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[1.1fr,0.9fr] md:items-stretch">
        <div className="flex h-full flex-col gap-6 rounded-[32px] border border-[var(--border)] bg-white/90 card-padding shadow-lg">
          <Reveal>
            <h1 className="heading-xl">Longevity starts at the table.</h1>
          </Reveal>
          <Reveal>
            <p className="body-lg text-[var(--text)]">
              LIFE tables are simple, shared meals where people cook, learn, and register what happens so healthier habits spread.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <Link href="/assessment" className="btn-solid px-8 text-base">
              Take the Assessment
            </Link>
            <Link href="/host" className="btn-outline px-8 text-base">
              Host a LIFE Table
            </Link>
          </Reveal>
          <Reveal>
            <p className="text-sm text-[var(--muted)]">Every table is registered so the movement stays measurable.</p>
          </Reveal>
        </div>
        <Reveal
          delay={120}
          className="relative w-full overflow-hidden rounded-[36px] border border-[var(--border)] shadow-xl min-h-[360px] md:min-h-[520px]"
        >
          <Image
            src="/images/farm/farm3.jpg"
            alt="Community members preparing ingredients at a LIFE table"
            fill
            className="object-cover object-center"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
