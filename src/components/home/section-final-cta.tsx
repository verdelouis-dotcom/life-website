import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionFinalCTA() {
  return (
    <section className="bg-[#fff1e2] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Ready to start a LIFE table?</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">The movement grows one shared meal at a time. Take the assessment to see where to focus next.</p>
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
