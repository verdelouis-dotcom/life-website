import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionAssessment() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-10 text-center shadow-sm">
        <Reveal className="space-y-3">
          <h2 className="section-heading">Assessment</h2>
          <p className="type-body-muted">See your potential lifespan based on your current habits.</p>
          <p className="type-body-muted text-sm">Understand how your daily habits influence your long-term health—and where you can improve.</p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/assessment" className="btn-solid px-8 text-base">
            Take the Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
