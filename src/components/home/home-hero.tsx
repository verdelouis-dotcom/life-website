import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-[#fff1e2] via-[#fffdf7] to-[#f4efe6]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Public-Benefit Initiative</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--life-forest)] md:text-5xl">Longevity starts at the table.</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 text-lg text-[var(--muted)]">And it’s disappearing.</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/host" className="btn-solid px-8 text-base">
              Host a LIFE Workshop
            </Link>
            <Link href="/donate" className="btn-outline px-8 text-base">
              Support Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
