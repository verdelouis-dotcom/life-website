import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/workshops";

export const metadata: Metadata = {
  title: "Longevity Cooking Workshops | LIFE Community Program",
  description:
    "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Longevity Cooking Workshops | LIFE Community Program",
    description:
      "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
    url: PAGE_URL,
  },
  twitter: {
    title: "Longevity Cooking Workshops | LIFE Community Program",
    description:
      "Learn longevity principles through Mediterranean cooking workshops and shared meals designed to improve health and connection.",
  },
};

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Workshops</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">LIFE Workshops</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Workshops are the front door to the LIFE movement. Participants cook together, learn the six-pillars framework, and leave
              prepared to host their own table.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-12 md:grid-cols-2">
          <article className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What We Teach</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Every session covers fresh ingredient prep, the LIFE Longevity Assessment, and real stories from Metro Atlanta pilots. We link
              daily routines to measurable health improvements.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Who Workshops Are For</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Neighbors, families, faith communities, and community health partners who want to restore shared meals and adopt practical
              longevity habits—no culinary degree required.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">What&apos;s Included</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
              <li>• Fresh ingredient cooking demo tailored to local budgets.</li>
              <li>• Guided LIFE Longevity Assessment conversation.</li>
              <li>• Host guide and follow-up checklist.</li>
              <li>• Commitment to register the next table.</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--life-forest)]">Workshop Outcomes</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text)]">
              Participants leave with a plan to host, a deeper understanding of the six pillars, and renewed connection with others around
              the table.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Bring a workshop to your community</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/keynote" className="btn-solid px-8 text-base">
                Request a Workshop or Keynote
              </Link>
              <Link href="/contact" className="btn-outline px-8 text-base">
                Contact LIFE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
