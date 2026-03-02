import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { BOARD } from "@/data/board";

const CONTAINER = "mx-auto w-full max-w-[760px] px-6";
const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm";
const TEXT = "mt-4 space-y-4 text-base leading-relaxed text-[var(--muted)]";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12 text-[var(--text)]">
        <div className={`${CONTAINER} space-y-16 md:space-y-20`}>
          <section className={CARD}>
            <h1 className="text-3xl font-semibold md:text-4xl">About L.I.F.E.</h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
              <p>The Longevity Initiative for Food &amp; Education (L.I.F.E.) exists to rebuild the daily structures that support long-term health and human connection.</p>
              <p>We focus on the environmental patterns that shape longevity — how we eat, move, gather, and belong — and translate them into practical, community-based action.</p>
            </div>
          </section>

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Our Mission</h2>
            <div className={TEXT}>
              <p>Communities where shared meals, natural movement, purpose, and belonging are not exceptions — but norms.</p>
              <p>We believe longevity is not accidental. It is patterned. And patterns can be rebuilt.</p>
            </div>
          </section>

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Our Approach</h2>
            <div className={TEXT}>
              <p>L.I.F.E. operates through a structured, measurable Monthly Table Model.</p>
              <p>By encouraging one-to-one household hosting and 30-day replication, we seed sustainable cultural rhythms that strengthen:</p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>• Shared meal frequency</li>
                <li>• Face-to-face conversation</li>
                <li>• Fresh food preparation</li>
                <li>• Community connection</li>
                <li>• Intergenerational engagement</li>
              </ul>
              <p>We begin locally in Metro Atlanta to refine the model before broader expansion.</p>
            </div>
          </section>

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Governance</h2>
            <div className={TEXT}>
              <p>L.I.F.E. is a Georgia nonprofit organization governed by a volunteer Board of Directors committed to advancing preventative, community-based health initiatives.</p>
              <p>The organization operates with transparency, fiscal responsibility, and a commitment to measurable impact.</p>
              <Link href="/governance" className="inline-flex text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline">
                View Governance & Transparency
              </Link>
            </div>
          </section>

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Board of Directors</h2>
            <div className="mt-6 space-y-6 text-sm text-[var(--muted)] md:text-base">
              {BOARD.map((member) => (
                <div key={member.name}>
                  <p className="font-semibold text-[var(--text)]">
                    {member.name} — {member.role}
                  </p>
                  <p className="mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Organizational Status</h2>
            <div className={TEXT}>
              <p>L.I.F.E. is organized as a Georgia nonprofit organization.</p>
              <p>501(c)(3) status: Pending.</p>
              <p>EIN (Employer Identification Number): <span className="font-semibold text-[var(--text)]">41-4525299</span>.</p>
              <p>The organization is community-funded and operates through volunteer leadership.</p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
