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

          <section className={`${CARD} text-center`}>
            <p className="text-xs uppercase tracking-[0.45em] text-[var(--olive)]">Governance &amp; Transparency</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Protecting Trust at Every Table</h2>
            <div className={`${TEXT} text-center`}>
              <p>
                L.I.F.E. is a Georgia nonprofit stewarded by a volunteer board that oversees strategy, finances, and compliance so every shared table stays
                mission-aligned, community-funded, and accountable.
              </p>
              <p>We operate with transparency, fiscal responsibility, and measurable program data that keep donors and hosts informed.</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#394930]"
              >
                Register a Table
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)]/60 px-6 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white/70"
              >
                Support the Mission
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

          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Accountability Practices</h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-[var(--muted)]">
              <li>• Quarterly board reviews covering program data, financial reports, and risk assessment.</li>
              <li>• Expense approvals require dual sign-off from the Treasurer and one additional officer.</li>
              <li>• Program metrics (tables hosted, participants, replication rate) published via the LIFE register portal.</li>
              <li>• Donor receipts issued within 48 hours with transparent use-of-funds summaries.</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Documentation requests: <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="text-[var(--olive)] underline-offset-4 hover:underline">info@longevityinitiativeforfoodandeducation.com</a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
