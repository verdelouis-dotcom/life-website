import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h1 className="text-4xl font-semibold">About L.I.F.E.</h1>
          <div className="mt-6 space-y-4 text-lg text-[#5b5149]">
            <p>Across generations and cultures, shared meals quietly synchronized nutrition, daily activity, belonging, and purpose.</p>
            <p>When that rhythm breaks, health and connection break with it.</p>
            <p>L.I.F.E. exists to restore the pattern through practical education that is repeatable, local, and scalable.</p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p className="mt-4 text-[#5b5149]">We teach what works in real life:</p>
          <ul className="mt-4 space-y-3 text-[#5b5149]">
            <li>• Simple, fresh meals people can repeat</li>
            <li>• Shared meal practices that strengthen connection</li>
            <li>• Lifestyle habits associated with long-term health</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Community Impact Pilot – Fayette County</h2>
          <p className="mt-4 text-[#5b5149]">
            L.I.F.E. is launching a local pilot initiative in Fayette County focused on expanding access to practical, community-based health education.
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-semibold text-[#2e2a26]">Pilot includes:</p>
              <ul className="mt-2 space-y-2 text-[#5b5149]">
                <li>• Six small-group workshops</li>
                <li>• 8–12 participants per workshop</li>
                <li>• Education on fresh food preparation and shared meal practices</li>
                <li>• A voluntary 30-day follow-up hosting commitment</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#2e2a26]">Intended outcomes:</p>
              <ul className="mt-2 space-y-2 text-[#5b5149]">
                <li>• Increased frequency of shared meals</li>
                <li>• Increased confidence preparing fresh meals</li>
                <li>• Increased reported social connection</li>
                <li>• Replication through participant-hosted gatherings</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-[#5b5149]">
            This pilot model is designed for measurable local impact and scalable expansion. Small community grants between $2,000 and $10,000 directly underwrite workshops, host coaching, and measurement.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <p className="mt-4 text-[#5b5149]">
            Longevity Initiative for Food &amp; Education is governed by a Board of Directors and operates as a nonprofit corporation organized under the laws of the State of Georgia. We are committed to fiscal responsibility, transparency, and alignment with our charitable and educational purpose.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Institutional Partnerships</h2>
          <p className="mt-4 text-[#5b5149]">
            L.I.F.E. collaborates with community organizations, healthcare systems, civic groups, and foundations to expand access to practical health education. Ideal partners provide flexible grants or program-related support that allow local pilots to launch quickly and report outcomes with rigor.
          </p>
          <p className="mt-3 text-[#5b5149]">
            Partnership inquiries: <a className="underline" href="mailto:hello@longevityinitiativeforfoodandeducation.com">hello@longevityinitiativeforfoodandeducation.com</a>
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold">Our Beginning</h2>
          <p className="mt-4 text-[#5b5149]">
            L.I.F.E. was created in response to a simple observation: when the table disappears, more than food is lost. This organization translates what many communities once practiced naturally into practical education for modern life—so the benefits can be restored and shared.
          </p>
        </section>

        <section className="mt-12 flex flex-wrap gap-3">
          <Link href="/host" className="rounded-2xl bg-[#6b7a46] px-6 py-3 text-white transition hover:bg-[#566236]">
            Host a Table
          </Link>
          <Link
            href="/workshops"
            className="rounded-2xl border border-[#6b7a46] px-6 py-3 text-[#6b7a46] transition hover:bg-[#f5f1e6]"
          >
            Attend a Workshop
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
