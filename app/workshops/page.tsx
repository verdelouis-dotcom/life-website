import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 text-[#2e2a26]">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Educational Programming</p>
          <h1 className="mt-3 text-4xl font-semibold">Workshops &amp; Presentations</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            Educational programming that turns evidence-informed principles into practical routines people can repeat.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-3xl font-semibold">Community Cooking Workshops</h2>
          <p className="mt-4 text-lg text-[#5b5149]">
            Small-group nonprofit educational workshops combining practical instruction with discussion on longevity, shared meals, and connection.
          </p>
          <p className="mt-3 text-[#5b5149]">
            Participants support our educational mission through a suggested contribution (commonly $50 per participant).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#workshop-interest"
              className="inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-5 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6b7a46]/40 focus:ring-offset-2"
            >
              Attend a Workshop
            </a>
            <Link
              href="/contact"
              className="rounded-2xl border border-[#c46a3a] px-5 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
            >
              Request a Presentation
            </Link>
          </div>
          <p className="mt-6 text-xs text-[#5b5149]">
            A portion of contributions associated with in-person programming may not be tax-deductible due to goods or services received.
          </p>
        </section>

        <section id="workshop-interest" className="mt-12 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <h2 className="text-2xl font-semibold">Workshop interest</h2>
          <p className="mt-3 text-[#5b5149]">Seats are limited to keep instruction personal. Share your details and we&apos;ll follow up with scheduling and contribution information.</p>
          <a
            href="/contact#get-involved"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-[#6b7a46] px-6 py-3 text-base font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6b7a46]/40 focus:ring-offset-2"
          >
            Use the Get Involved form
          </a>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-3xl font-semibold">Bring L.I.F.E. to Your Organization</h2>
          <p className="mt-4 text-[#5b5149]">Structured nonprofit offerings for civic groups, employers, schools, and healthcare partners:</p>
          <ul className="mt-4 space-y-3 text-[#5b5149]">
            <li>• 30-minute educational keynote (suggested program support contribution: $500)</li>
            <li>• 3-hour interactive workshop (suggested program support contribution: $1,000)</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl border border-[#c46a3a] px-6 py-3 text-[#c46a3a] transition hover:bg-[#fbe8df]"
          >
            Request a Presentation
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
