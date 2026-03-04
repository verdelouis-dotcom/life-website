import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function IdeaImpact() {
  return (
    <section className="bg-[#fff8ef] py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Idea + Impact</p>
          <h2 className="text-3xl font-semibold">Monthly tables. Measurable change.</h2>
          <p className="text-lg text-[var(--muted)]">
            We recruit, train, and support neighborhood hosts so monthly shared meals become a normal rhythm again. Each table is supplied
            with Mediterranean-inspired recipes, conversational prompts, and a 30-day replication challenge so connection spreads household
            by household.
          </p>
          <p className="text-base text-[var(--muted)]">
            Impact is verified through simple, disciplined metrics—not assumptions. Explore the full pilot blueprint in our{" "}
            <Link href="/what-we-do#pilot" className="font-semibold text-[var(--olive)] underline-offset-4 hover:underline">
              Monthly Table Model
            </Link>
            .
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Who We Help</p>
            <h3 className="mt-4 text-2xl font-semibold">Neighbors Ready to Lead</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              L.I.F.E. equips community hosts, multi-generational families, and partner organizations that want to rebuild face-to-face
              connection through the table. We focus first on Metro Atlanta neighborhoods where social isolation, diet-related illness, and
              single-parent households signal the need for a stronger rhythm.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>• Volunteer LIFE Hosts who open their homes</li>
              <li>• Families seeking healthier routines</li>
              <li>• Schools, faith communities, and civic groups requesting workshops</li>
              <li>• Donors underwriting tools, ingredients, and data tracking</li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">How We Measure Success</p>
            <h3 className="mt-4 text-2xl font-semibold">Proof from Every Table</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              Hosts log each gathering through our register so we can see exactly how the pilot is progressing. Quarterly reviews synthesize
              the numbers and guide adjustments.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>• Households hosted per month</li>
              <li>• 30-day replication rate</li>
              <li>• Shared meal frequency (before / after snapshots)</li>
              <li>• Screen-free meal consistency + qualitative connection notes</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)]">
              When metrics don’t improve, we adjust inputs—curriculum, coaching, or support—until the table makes a measurable difference.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
