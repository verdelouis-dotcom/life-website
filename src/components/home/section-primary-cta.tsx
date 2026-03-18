import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionPrimaryCta() {
  return (
    <section className="section-spacing bg-white text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-4 rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/80 px-6 py-10 text-center shadow-sm">
        <Reveal>
          <p className="label-text text-[var(--olive)]">Next Step</p>
        </Reveal>
        <Reveal>
          <h2 className="heading-lg">Start with the LIFE Assessment</h2>
        </Reveal>
        <Reveal>
          <p className="body-md text-[var(--muted)]">See where your habits are heading before you host or support a table.</p>
        </Reveal>
        <Reveal>
          <Link href="/assessment" className="btn-solid px-8 text-base">
            Take the Assessment
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
