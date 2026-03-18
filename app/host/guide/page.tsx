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
    title: "1. Plan Your Gathering",
    details: [
      "Invite 6–10 people you know from family, neighbors, work, or faith communities.",
      "Choose a simple date and time. Weeknight dinners or Saturday afternoons both work.",
      "Aim for 90 minutes total: 45 minutes to cook or plate food, 30 minutes for the LIFE conversation, and 15 minutes to wrap up.",
    ],
  },
  {
    title: "2. Prepare a Fresh, Shared Meal",
    details: [
      "Cook what you already know—Italian, Mexican, Japanese, or a favorite family recipe—as long as it uses fresh ingredients.",
      "Ask guests to help prep vegetables, stir sauces, or set the table so the experience stays collaborative.",
      "Serve water or unsweetened beverages and encourage everyone to sit down together before the conversation begins.",
    ],
  },
  {
    title: "3. Share the Six LIFE Pillars",
    details: [
      "Introduce the pillars: Food, Movement, Sleep, Connection, Purpose, and Stress Regulation.",
      "Use your own language—share why each habit matters to you and ask guests what works in their homes.",
      "Pass around a printed or digital version of the pillars so guests can follow along.",
    ],
  },
  {
    title: "4. Close with the LIFE Assessment & Next Steps",
    details: [
      "Invite guests to take the LIFE Longevity Assessment within the next week to see their potential lifespan based on current habits.",
      "Encourage one guest to volunteer as the next host. Offer to mentor them through their first table.",
      "Register your gathering using the LIFE register form so attendance and stories are captured.",
    ],
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
