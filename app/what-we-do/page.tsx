import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PageShell from "@/components/page-shell";

const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm";
const TEXT = "mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]";

export default function WhatWeDoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-16 text-[var(--text)] space-y-16">
        <PageShell>
          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">The Monthly Table Model</h2>
            <div className={TEXT}>
              <p>Once a month, we host.</p>
              <p>Family. Friends. Neighbors.</p>
              <p>We prepare together, we cook together, we eat together, we clean together.</p>
              <p>Before guests leave, they receive the recipe and ingredients.</p>
              <p>They are challenged to host within 30 days.</p>
              <p>
                One table becomes another.<br />Another becomes a rhythm.<br />Rhythms become culture.
              </p>
            </div>
          </section>
        </PageShell>

        <PageShell>
          <section aria-label="Pasta lesson image">
            <figure className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white/80 shadow-sm">
              <div className="aspect-[4/3] md:aspect-[16/10]">
                <Image
                  src="/images/workshops/pasta-lesson-1.jpg"
                  alt="Hands preparing pasta during a workshop"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-6 py-4 text-sm text-[var(--muted)]">
                Peachtree City workshop — Metro Atlanta pilot
              </figcaption>
            </figure>
          </section>
        </PageShell>

        <PageShell>
          <section id="pilot" className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Year One Pilot — Metro Atlanta</h2>
            <div className={TEXT}>
              <p>L.I.F.E. begins locally.</p>
              <p>Over a 12-month pilot in Metro Atlanta, we will implement the Monthly Table Model through disciplined, measurable growth.</p>
              <div>
                <p className="font-semibold text-[var(--text)]">Founder commitment:</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Host one new household each month</li>
                  <li>• Initiate a one-to-one 30-day replication challenge</li>
                </ul>
              </div>
              <p>Each hosted household is invited to host one new household within 30 days. Each new household is challenged to do the same.</p>
              <p>Under this conservative one-to-one replication model, a single monthly seed can reach:</p>
              <p className="text-3xl font-semibold text-[var(--text)]">78 households in one year.</p>
              <p className="text-sm text-[var(--muted)]">
                This projection assumes:<br />• One new household hosted per month<br />• One-to-one replication<br />• No exponential expansion<br />• Consistent monthly participation
              </p>
              <p>Our goal is steady, sustainable growth — not viral spikes.</p>
              <div className="mt-4">
                <p className="text-lg font-semibold text-[var(--text)]">What We Measure</p>
                <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Number of households reached</li>
                  <li>• 30-day replication rate</li>
                  <li>• Shared meal frequency (before and after participation)</li>
                  <li>• Screen-free meal consistency</li>
                  <li>• Fresh food based meal adoption</li>
                </ul>
              </div>
              <p>Impact is not assumed. It is measured.</p>
              <p>By beginning locally and tracking outcomes over 12 months, L.I.F.E. will refine the model before broader expansion.</p>
            </div>
          </section>
        </PageShell>

        <PageShell>
          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Bring This Conversation to Your Organization</h2>
            <div className={TEXT}>
              <p>L.I.F.E. provides local keynotes and interactive workshops for:</p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>• Schools</li>
                <li>• Faith communities</li>
                <li>• Civic groups</li>
                <li>• Healthcare organizations</li>
                <li>• Businesses</li>
              </ul>
              <p>We share the science of longevity — and the practical model communities can implement immediately.</p>
              <p>Change begins with awareness. It grows through action.</p>
            </div>
          </section>
        </PageShell>
      </main>
      <SiteFooter />
    </>
  );
}
