import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionHostReassurance() {
  return (
    <section className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <p className="label-text">Hosting support</p>
          <h2 className="heading-lg">Hosting a LIFE Table Is Simpler Than You Think</h2>
          <p className="body-md text-[var(--muted)]">
            You do not need to be a chef, nutrition expert, or event planner. A LIFE table starts with a shared meal, the six pillars, and a short conversation about everyday habits.
          </p>
        </Reveal>

        <Reveal className="rounded-[28px] border border-[var(--border)] bg-white/90 p-6 text-center shadow-sm">
          <p className="heading-md text-[var(--life-forest)]">Start simple. Stay consistent.</p>
          <p className="body-md mt-3 text-[var(--text)]">
            Host a small table. Cook a real meal. Share the experience.
            <br />That’s how the model grows.
          </p>
        </Reveal>

        <Reveal className="text-center space-y-2">
          <Link href="/host" className="btn-solid px-8 text-base">
            Host a LIFE Table
          </Link>
          <p className="text-sm text-[var(--muted)]">Simple, guided, and repeatable.</p>
        </Reveal>
      </div>
    </section>
  );
}
