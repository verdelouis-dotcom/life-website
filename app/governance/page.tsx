import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { BOARD } from "@/data/board";

const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/95 p-8 shadow-sm";

export default function GovernancePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[860px] px-6 pb-20 pt-12 text-[var(--text)]">
        <section className={`${CARD} text-center`}>
          <p className="text-xs uppercase tracking-[0.45em] text-[var(--olive)]">Governance &amp; Transparency</p>
          <h1 className="mt-4 text-4xl font-semibold">Protecting Trust at Every Table</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            LIFE is stewarded by a volunteer board that oversees strategy, finances, and compliance so every shared table stays mission-aligned,
            community-funded, and accountable.
          </p>
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

        <section className="mt-12 space-y-6">
          <div className={CARD}>
            <h2 className="text-2xl font-semibold">Board of Directors</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.4em] text-[var(--olive)]">Strategic Oversight</p>
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
          </div>

          <div className={CARD}>
            <h2 className="text-2xl font-semibold">Organizational Status</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-[var(--muted)]">
              <p>LIFE is incorporated in the State of Georgia as a nonprofit organization.</p>
              <p>
                EIN (Employer Identification Number):{" "}
                <span className="font-semibold text-[var(--text)]">41-4525299</span>
              </p>
              <p>501(c)(3) status: Pending final IRS determination.</p>
              <p>The initiative is community-funded and operates through volunteer leadership and pro-bono advisors.</p>
            </div>
          </div>

          <div className={CARD}>
            <h2 className="text-2xl font-semibold">Accountability Practices</h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-[var(--muted)]">
              <li>• Quarterly board reviews covering program data, financial reports, and risk assessment.</li>
              <li>• Expense approvals require dual sign-off from the Treasurer and one additional officer.</li>
              <li>• Program metrics (tables hosted, participants, replication rate) published via LIFE’s register portal.</li>
              <li>• Donor receipts issued within 48 hours with transparent use-of-funds summaries.</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)]">
              For documentation requests, email{" "}
              <a href="mailto:info@longevityinitiativeforfoodandeducation.com" className="text-[var(--olive)] underline-offset-4 hover:underline">
                info@longevityinitiativeforfoodandeducation.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
