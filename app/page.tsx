import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EngagementForm from "@/components/forms/engagement-form";

const CONTAINER = "mx-auto w-full max-w-3xl px-6";
const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm";
const TEXT = "mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-12 text-[var(--text)]">
        <div className="space-y-16 md:space-y-24">
          <section className="pt-0">
            <div className={CONTAINER}>
              <div className={CARD}>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Declaration</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Longevity Starts at the Table</h1>
                <div className={TEXT}>
                  <p>We are the first generation with the knowledge to live longer — and the habits to live shorter.</p>
                  <p>Chronic disease is rising.<br />Life expectancy is declining.</p>
                  <p>This is not a failure of medicine.<br />It is a failure of environment.</p>
                  <p>L.I.F.E. exists to rebuild the daily structures that shape health — how we eat, gather, move, and connect.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={`${CARD} bg-white/70`}>
                <h2 className="text-2xl font-semibold md:text-3xl">Our Environment Changed</h2>
                <div className={TEXT}>
                  <p>In one generation, daily life shifted:</p>
                  <p>Less natural movement.<br />Fewer shared meals.<br />More screens.<br />More stimulation.<br />Less face-to-face conversation.</p>
                  <p>We engineered convenience.<br />But we lost rhythm.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={CARD}>
                <h2 className="text-2xl font-semibold md:text-3xl">The Longest-Living Communities Share a Pattern</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Communities with unusually high rates of people living into their 90s and 100s tend to:
                </p>
                <ul className="mt-6 grid gap-3 text-[var(--muted)]">
                  {[
                    "Move naturally",
                    "Live with purpose",
                    "Cultivate supportive social circles",
                    "Eat mostly fresh foods",
                    "Stop before full",
                    "Center family",
                    "Prioritize faith or community",
                    "Slow Down Daily",
                  ].map((item) => (
                    <li key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base text-[var(--muted)] md:text-lg">Longevity is not accidental.<br />It is environmental.</p>
              </div>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className="rounded-[32px] border border-[var(--border)] bg-transparent p-8 text-center shadow-sm">
                <p className="font-serif text-2xl leading-snug md:text-3xl">
                  If we want longer lives, we must rebuild the systems that once supported them.
                </p>
                <p className="mt-4 text-base font-medium uppercase tracking-[0.25em] text-[var(--olive)]">
                  One of the most powerful was the shared table.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={CARD}>
                <h2 className="text-2xl font-semibold md:text-3xl">Where the Pattern Once Lived</h2>
                <div className={TEXT}>
                  <p>There used to be one place where movement, food, purpose, conversation, and belonging naturally intersected.</p>
                  <p>The table.</p>
                  <p>At the table we slowed down, ate real food, faced one another, strengthened family, and built belonging.</p>
                  <p>We didn’t remove the table. We dismantled a system.</p>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Peachtree City workshop image">
            <div className={CONTAINER}>
              <figure className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white/80 shadow-sm">
                <div className="aspect-[4/3] md:aspect-[16/10]">
                  <Image
                    src="/images/workshops/pasta-lesson-2.jpg"
                    alt="Workshop table in Peachtree City"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-6 py-4 text-sm text-[var(--muted)]">
                  Peachtree City workshop — Metro Atlanta pilot
                </figcaption>
              </figure>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={CARD}>
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
              </div>
            </div>
          </section>

          <section aria-label="Pasta lesson image">
            <div className={CONTAINER}>
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
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={CARD}>
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
              </div>
            </div>
          </section>

          <section>
            <div className={CONTAINER}>
              <div className={CARD}>
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
              </div>
            </div>
          </section>

          <section>
            <div className={`${CONTAINER} space-y-10`} id="support">
              <div className={CARD}>
                <h2 className="text-2xl font-semibold md:text-3xl">Support the Movement</h2>
                <div className={TEXT}>
                  <p>This work is community-funded.</p>
                  <p>Your support helps:</p>
                  <ul className="space-y-2 text-sm text-[var(--muted)]">
                    <li>• Sponsor workshops</li>
                    <li>• Provide table kits</li>
                    <li>• Equip hosts</li>
                    <li>• Expand outreach</li>
                    <li>• Keep participation affordable</li>
                  </ul>
                  <p>Longevity should not depend on income. It should depend on culture.</p>
                  <p>Support L.I.F.E. and help rebuild the rhythm.</p>
                </div>
              </div>

              <div id="get-involved" className={CARD}>
                <h2 className="text-2xl font-semibold md:text-3xl">Get Involved</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Rebuild the rhythm locally. Tell us how you’d like to engage and we’ll follow up directly.
                </p>
                <div className="mt-6">
                  <EngagementForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
