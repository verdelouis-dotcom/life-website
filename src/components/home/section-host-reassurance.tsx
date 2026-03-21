import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionHostReassurance() {
  return (
    <section className="section-spacing bg-[#fff8ef] text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <Reveal className="space-y-3 text-center">
          <p className="label-text">Hosting support</p>
          <h2 className="heading-lg">Hosting a LIFE Gathering Is Simpler Than You Think</h2>
          <p className="body-md text-[var(--muted)]">
            You do not need to be a chef, nutrition expert, or event planner. A LIFE gathering starts with a shared meal, the six pillars, and a short conversation about everyday habits.
          </p>
        </Reveal>

        <Reveal className="text-center space-y-2">
          <Link href="/host" className="btn-solid px-8 text-base">
            Host a LIFE Gathering
          </Link>
          <p className="text-sm text-[var(--muted)]">Simple, guided, and repeatable.</p>
        </Reveal>
      </div>
    </section>
  );
}
