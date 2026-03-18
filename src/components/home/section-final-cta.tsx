import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionFinalCTA() {
  return (
    <section className="section-spacing bg-[#fff1e2] text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="heading-lg">Choose your next step</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">Pick the action that keeps LIFE tables moving.</p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/host" className="btn-solid px-8 text-base">
              Host a LIFE Table
            </Link>
            <Link href="/donate" className="btn-outline px-8 text-base">
              Donate
            </Link>
          </div>
          <p className="mt-3 text-sm text-[var(--muted)]">Most hosts start with friends or family. It takes just one table to begin.</p>
        </Reveal>
      </div>
    </section>
  );
}
