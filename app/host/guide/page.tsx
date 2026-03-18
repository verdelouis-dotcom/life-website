import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const GUIDE_URL = "https://www.longevityinitiativeforfoodandeducation.com/host/guide";

export const metadata: Metadata = {
  title: "LIFE Host Guide | How to Lead a Table",
  description:
    "Step-by-step guidance for hosting a LIFE table: invite, prepare, share the pillars, and register the gathering so it counts toward the movement.",
  alternates: {
    canonical: GUIDE_URL,
  },
  openGraph: {
    title: "LIFE Host Guide | How to Lead a Table",
    description:
      "Learn how to plan, cook, facilitate, and register a LIFE table so your gathering supports the six pillars of healthy aging.",
    url: GUIDE_URL,
  },
  twitter: {
    title: "LIFE Host Guide | How to Lead a Table",
    description:
      "Learn how to plan, cook, facilitate, and register a LIFE table so your gathering supports the six pillars of healthy aging.",
  },
};

const GUIDE_SECTIONS = [
  {
    title: "1. Plan Your Table",
    details: ["Invite family, friends, or neighbors over for dinner."],
  },
  {
    title: "2. Share the Meal",
    details: ["Cook your favorite recipe or something you learned at a LIFE table.", "Prepare, cook, and eat together."],
  },
  {
    title: "3. Talk About What Matters",
    details: ["Share why LIFE matters to you.", "Ask others what works in their lives."],
  },
  {
    title: "4. Pass It Forward",
    details: ["Invite someone to host next."],
  },
];

export default function HostGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-16">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Host Guide</p>
            <h1 className="type-display">How to Lead a LIFE Table</h1>
            <p className="type-lede text-[var(--muted)]">
              Use this guide after you attend a LIFE table. It covers how to plan the meal, share the six pillars, and register the gathering so it
              supports the movement.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-4xl space-y-8 px-6">
            {GUIDE_SECTIONS.map((section) => (
              <article key={section.title} className="space-y-3 rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--life-forest)]">{section.title}</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text)]">
                  {section.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="text-center">
              <p className="text-sm text-[var(--muted)]">Optional: Play a game, take a walk, or spend a little more time together.</p>
              <p className="mt-1 type-body-muted">That’s how LIFE grows.</p>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-4xl space-y-4 rounded-[36px] border border-[var(--border)] bg-white/80 p-8 text-center shadow-sm">
            <p className="type-body-muted">Need support or want a printable PDF?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support" className="btn-outline px-6 text-sm">
                Email the LIFE Team
              </Link>
              <Link href="/host" className="btn-solid px-6 text-sm">
                Return to Host Page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
