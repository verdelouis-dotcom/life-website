import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EngagementForm from "@/components/forms/engagement-form";

const SECTION_CLASS = "mx-auto max-w-5xl px-6 pb-16 text-[#2e2a26]";
const CARD_CLASS = "rounded-3xl border border-[#dfd4c6] bg-white p-10";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-[#e8decd] bg-[#f4efe6]">
          <div className="absolute inset-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/images/hero-table4.jpeg')] bg-cover bg-center opacity-30"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#fff5eb]/85 backdrop-blur-sm" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="rounded-[32px] border border-[#e7dac8] bg-[#fff8ef]/90 p-8 shadow-sm backdrop-blur">
                <h1 className="font-serif text-4xl leading-tight text-[#2e2a26] md:text-5xl">
                  Longevity Starts at the Table
                </h1>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#5b5149]">
                  <p>We are the first generation with the knowledge to live longer — and the habits to live shorter.</p>
                  <p>Chronic disease is rising.<br />Life expectancy is declining.</p>
                  <p>This is not a failure of medicine.<br />It is a failure of environment.</p>
                  <p>
                    L.I.F.E. exists to rebuild the daily structures that shape health — how we eat, gather, move, and
                    connect.
                  </p>
                </div>
              </div>
              <div className="rounded-[36px] border border-[#e7dac8] bg-[#fff8ef]/80 p-6 shadow-xl">
                <Image
                  priority
                  src="/images/hero-table4.jpeg"
                  width={900}
                  height={700}
                  alt="Community preparing a shared meal"
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS.replace("bg-white", "bg-[#fff8ef]")}>
            <h2 className="text-3xl font-semibold">Our Environment Changed</h2>
            <div className="mt-4 space-y-3 text-lg text-[#5b5149]">
              <p>In one generation, daily life shifted:</p>
              <p>Less natural movement.<br />Fewer shared meals.<br />More screens.<br />More stimulation.<br />Less face-to-face conversation.</p>
              <p>We engineered convenience.<br />But we lost rhythm.</p>
              <p>Longevity is patterned.<br />And patterns can erode.</p>
            </div>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS}>
            <h2 className="text-3xl font-semibold">The Longest-Living Communities Share a Pattern</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              Communities with unusually high rates of people living into their 90s and 100s tend to:
            </p>
            <ul className="mt-6 grid gap-3 text-[#5b5149] sm:grid-cols-2">
              {[
                "Move naturally",
                "Live with purpose",
                "Downshift daily",
                "Eat mostly plant-based foods",
                "Stop before full",
                "Prioritize faith or community",
                "Center family",
                "Cultivate supportive social circles",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-4 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#5b5149]">Longevity is not accidental.<br />It is environmental.</p>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS.replace("bg-white", "bg-[#fff8ef]")}>
            <h2 className="text-3xl font-semibold">Where the Pattern Once Lived</h2>
            <div className="mt-4 space-y-3 text-lg text-[#5b5149]">
              <p>There used to be one place where movement, food, purpose, conversation, and belonging naturally intersected.</p>
              <p>The table.</p>
              <p>
                At the table we slowed down, ate real food, faced one another, strengthened family, and built belonging.
              </p>
              <p>We didn&apos;t remove furniture. We dismantled a system.</p>
            </div>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS}>
            <h2 className="text-3xl font-semibold">The Monthly Table Model</h2>
            <div className="mt-4 space-y-4 text-lg text-[#5b5149]">
              <p>Once a month, we host.</p>
              <p>Family. Friends. Neighbors.</p>
              <p>
                We cook together using simple, affordable ingredients.<br />We eat at the table. Phones off.<br />We clean up
                together.
              </p>
              <p>Before guests leave, they receive the recipe and ingredients.</p>
              <p>They are challenged to host within 30 days.</p>
              <p>One table becomes another.<br />Another becomes a rhythm.<br />Rhythms become culture.</p>
            </div>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS.replace("bg-white", "bg-[#fff8ef]")}>
            <h2 className="text-3xl font-semibold">Year One Pilot — Metro Atlanta</h2>
            <div className="mt-4 space-y-4 text-lg text-[#5b5149]">
              <p>L.I.F.E. begins locally.</p>
              <p>
                Over a 12-month pilot in Metro Atlanta, we will implement the Monthly Table Model through disciplined,
                measurable growth.
              </p>
              <div>
                <p className="font-semibold text-[#2e2a26]">Founder commitment:</p>
                <ul className="mt-2 space-y-2 text-[#5b5149] text-base">
                  <li>• Host one new household each month</li>
                  <li>• Initiate a one-to-one 30-day replication challenge</li>
                </ul>
              </div>
              <p>Each hosted household is invited to host one new household within 30 days. Each new household is challenged to do the same.</p>
              <p>Under this conservative one-to-one replication model, a single monthly seed can reach:</p>
              <p className="text-2xl font-semibold text-[#2e2a26]">78 households in one year.</p>
              <p className="text-sm text-[#5b5149]">
                This projection assumes:<br />• One new household hosted per month<br />• One-to-one replication<br />• No exponential expansion<br />• Consistent monthly participation
              </p>
              <p>Our goal is steady, sustainable growth — not viral spikes.</p>
              <div className="mt-6">
                <p className="text-xl font-semibold text-[#2e2a26]">What We Measure</p>
                <ul className="mt-3 space-y-2 text-[#5b5149]">
                  <li>• Number of households reached</li>
                  <li>• 30-day replication rate</li>
                  <li>• Shared meal frequency (before and after participation)</li>
                  <li>• Screen-free meal consistency</li>
                  <li>• Plant-forward meal adoption</li>
                </ul>
              </div>
              <p>Impact is not assumed.<br />It is measured.</p>
              <p>
                By beginning locally and tracking outcomes over 12 months, L.I.F.E. will refine the model before broader
                expansion.
              </p>
            </div>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className={CARD_CLASS}>
            <h2 className="text-3xl font-semibold">Bring This Conversation to Your Organization</h2>
            <p className="mt-4 text-lg text-[#5b5149]">
              L.I.F.E. provides local keynotes and interactive workshops for:
            </p>
            <ul className="mt-4 space-y-2 text-[#5b5149]">
              <li>• Schools</li>
              <li>• Faith communities</li>
              <li>• Civic groups</li>
              <li>• Healthcare organizations</li>
              <li>• Businesses</li>
            </ul>
            <p className="mt-4 text-[#5b5149]">
              We share the science of longevity — and the practical model communities can implement immediately.
            </p>
            <p className="mt-2 text-[#5b5149]">Change begins with awareness.<br />It grows through action.</p>
          </div>
        </section>

        <section className={`${SECTION_CLASS}`}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className={CARD_CLASS.replace("bg-white", "bg-[#fff8ef]")}>
              <h2 className="text-3xl font-semibold">Support the Movement</h2>
              <div className="mt-4 space-y-3 text-lg text-[#5b5149]">
                <p>This work is community-funded.</p>
                <p>Your support helps:</p>
                <ul className="space-y-2 text-base">
                  <li>• Sponsor workshops</li>
                  <li>• Provide table kits</li>
                  <li>• Equip hosts</li>
                  <li>• Expand outreach</li>
                  <li>• Keep participation affordable</li>
                </ul>
                <p>Longevity should not depend on income.<br />It should depend on culture.</p>
                <p>Support L.I.F.E. and help rebuild the rhythm.</p>
              </div>
            </div>
            <div className={CARD_CLASS}>
              <h2 className="text-3xl font-semibold">Get Involved</h2>
              <div className="mt-4 space-y-3 text-[#5b5149]">
                <p>Rebuild the rhythm locally.</p>
                <p>Tell us how you&apos;d like to engage and we&apos;ll follow up directly.</p>
              </div>
              <div className="mt-6">
                <EngagementForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
