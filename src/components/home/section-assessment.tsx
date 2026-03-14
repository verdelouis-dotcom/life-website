import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionAssessment() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-10 text-center shadow-sm">
        <Reveal className="space-y-3">
          <h2 className="section-heading">Assessment</h2>
          <p className="type-body-muted">
            This short assessment provides an educational estimate of lifespan potential, and lifestyle opportunities associated with healthy aging.
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/assessment"
            className="btn-solid px-8 text-base"
          >
            Take the Assessment
          </Link>
          <Link href="/assessment/methodology" className="text-sm font-semibold text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
            Review Methodology
          </Link>
        </div>
      </div>
    </section>
  );
}
