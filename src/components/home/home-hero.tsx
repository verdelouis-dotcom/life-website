import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-br from-[#fff1e2] via-[#fffdf7] to-[#f4efe6]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-[1.1fr,0.9fr] md:items-stretch md:py-24">
        <div className="flex h-full flex-col gap-6 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-lg">
          <Reveal>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--text)] md:text-5xl">Longevity starts at the table.</h1>
          </Reveal>
          <Reveal>
            <p className="text-lg leading-relaxed text-[var(--text)] md:text-xl">
              Shared meals. Real conversation.
              <br />
              Simple habits—lived, practiced, and passed down through generations.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-4">
            <Link href="/how-it-works" className="btn-solid px-8 text-base">
              How It Works
            </Link>
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
