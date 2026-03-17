import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionFinalCTA() {
  return (
    <section className="section-spacing bg-[#fff1e2] text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="heading-lg">Ready to start a LIFE table?</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">The movement grows one shared meal at a time. Take the assessment to see where to focus next.</p>
        </Reveal>
        <Reveal className="space-y-2">
          <Link href="/host" className="btn-solid px-8 text-base">
            Host a LIFE Table
          </Link>
          <p className="text-sm text-[var(--muted)]">It takes just one table to begin.</p>
        </Reveal>
      </div>
    </section>
  );
}
