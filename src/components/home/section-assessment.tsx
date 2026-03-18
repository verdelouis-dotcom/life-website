import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionAssessment() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-10 text-center shadow-sm">
        <Reveal className="space-y-3">
          <p className="label-text text-[var(--olive)]">Where are your habits taking you?</p>
          <h2 className="heading-lg">The LIFE Assessment shows your current path—and how much it could change.</h2>
          <p className="body-md text-[var(--muted)]">
            Most people don’t know their trajectory until they see it clearly. The assessment projects today’s path and the potential if LIFE pillars stay
            consistent.
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/assessment" className="btn-solid px-8 text-base">
            Take the Assessment
          </Link>
        </div>
        <Reveal>
          <Link href="/assessment/methodology" className="text-sm text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
            View methodology
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
