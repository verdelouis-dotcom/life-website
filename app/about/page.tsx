import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26] space-y-12">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h1 className="text-4xl font-semibold">About L.I.F.E.</h1>
          <div className="mt-6 space-y-4 text-lg text-[#5b5149]">
            <p>The Longevity Initiative for Food &amp; Education (L.I.F.E.) exists to rebuild the daily structures that support long-term health and human connection.</p>
            <p>We focus on the environmental patterns that shape longevity — how we eat, move, gather, and belong — and translate them into practical, community-based action.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <div className="mt-4 space-y-4 text-lg text-[#5b5149]">
            <p>Communities where shared meals, natural movement, purpose, and belonging are not exceptions — but norms.</p>
            <p>We believe longevity is not accidental.<br />It is patterned.<br />And patterns can be rebuilt.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <div className="mt-4 space-y-4 text-lg text-[#5b5149]">
            <p>L.I.F.E. operates through a structured, measurable Monthly Table Model.</p>
            <p>
              By encouraging one-to-one household hosting and 30-day replication, we seed sustainable cultural rhythms that strengthen:
            </p>
            <ul className="space-y-2 text-base">
              <li>• Shared meal frequency</li>
              <li>• Face-to-face conversation</li>
              <li>• Plant-forward food preparation</li>
              <li>• Community connection</li>
              <li>• Intergenerational engagement</li>
            </ul>
            <p>We begin locally in Metro Atlanta to refine the model before broader expansion.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <p className="mt-4 text-lg text-[#5b5149]">
            L.I.F.E. is a Georgia nonprofit organization governed by a volunteer Board of Directors committed to advancing preventative, community-based health initiatives.
          </p>
          <p className="mt-3 text-lg text-[#5b5149]">
            The organization operates with transparency, fiscal responsibility, and a commitment to measurable impact.
          </p>
        </section>

        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Board of Directors</h2>
          <div className="mt-4 space-y-4 text-[#5b5149]">
            <div>
              <p className="font-semibold text-[#2e2a26]">Lou Verde — Founder &amp; President</p>
            </div>
            <div>
              <p className="font-semibold text-[#2e2a26]">Dr. Miles Medina — Treasurer</p>
              <p>Emergency Medicine Physician and Associate Director, Piedmont Henry Hospital</p>
            </div>
            <div>
              <p className="font-semibold text-[#2e2a26]">Bob Fabbio — Vice President</p>
              <p>Entrepreneur and Founder, Norrio Capital Partners</p>
            </div>
            <div>
              <p className="font-semibold text-[#2e2a26]">Kara Verde — Secretary</p>
              <p>Accounting Graduate, Rochester Institute of Technology</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Organizational Status</h2>
          <div className="mt-4 space-y-3 text-lg text-[#5b5149]">
            <p>L.I.F.E. is organized as a Georgia nonprofit organization.</p>
            <p>501(c)(3) status: Pending.</p>
            <p>The organization is community-funded and operates through volunteer leadership.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
