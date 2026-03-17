import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const HOST_PRIMARY_LINK = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=Host%20a%20LIFE%20Workshop";
const HOST_GUIDE_LINK = "/host/guide";
const REGISTER_LINK = "/register";
const CONTACT_EMAIL = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support";
const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";

export const metadata: Metadata = {
  title: "Host a LIFE Table | Lead a Longevity Dinner in Your Community",
  description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
  alternates: {
    canonical: HOST_URL,
  },
  openGraph: {
    title: "Host a LIFE Table | Lead a Longevity Dinner in Your Community",
    description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
    url: HOST_URL,
  },
  twitter: {
    title: "Host a LIFE Table | Lead a Longevity Dinner in Your Community",
    description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
  },
};

const HOST_STEPS = [
  "Invite friends, neighbors, or family once you have attended a LIFE workshop.",
  "Prepare a meal together using fresh ingredients and the LIFE host guide.",
  "Share the six LIFE pillars and longevity principles in your own words.",
  "Register the workshop afterward so participation can be measured.",
];

export default function HostPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-20">
          <div className="mx-auto max-w-4xl space-y-6 px-6 text-center text-[var(--text)]">
            <h1 className="type-display">Host a LIFE Table</h1>
            <p className="text-lg font-semibold text-[var(--muted)]">We’ll guide you through it. Hosting a LIFE table is simple—but it’s done with intention.</p>
            <div className="space-y-3 text-base text-[var(--text)]">
              <p>You don’t need prior experience—but you do need a willingness to bring people together.</p>
              <p>We provide the structure, prompts, and guidance to help you do it well.</p>
              <p>Most LIFE hosts start with friends or family.</p>
              <p>Most tables are simple, relaxed, and hosted at home.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">LIFE Host Champions</p>
            <h2 className="type-display text-3xl">Become a LIFE Host Champion</h2>
            <p className="type-body-muted">
              Host Champions are volunteer leaders who commit to hosting at least three LIFE tables per year, mentoring new hosts, and helping LIFE
              measure reach in their city. Champions keep ingredients simple, register every gathering, and share feedback so future tables are
              even stronger.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Champion" className="btn-solid px-8 text-base">
                Become a Host Champion
              </a>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-4xl space-y-4 rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/80 p-10 text-center shadow-sm">
            <h2 className="section-heading">What happens when I host?</h2>
            <p className="type-body-muted">Hosting a LIFE table is simple:</p>
            <ul className="grid gap-3 text-left text-sm text-[var(--text)] md:grid-cols-2">
              {[
                "Prepare and cook together",
                "Share a meal",
                "Use simple prompts to guide conversation. Share what works for you and listen to others.",
                "Clean up together",
                "Share the recipe",
                "Capture the moment",
                "Register your table",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-2 rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-left text-sm text-[var(--muted)]">
              <p className="font-semibold text-[var(--text)]">Conversation Ideas (optional)</p>
              <p>You can naturally explore topics like:</p>
              <ul className="list-disc space-y-1 pl-5 text-[var(--text)]">
                <li>Food — What are you eating more or less of?</li>
                <li>Movement — How are you staying active each day?</li>
                <li>Sleep — What helps you rest well?</li>
                <li>Connection — Who are you spending time with?</li>
                <li>Purpose — What gives your day meaning?</li>
                <li>Stress — How do you reset and slow down?</li>
              </ul>
              <p>There’s no need to cover everything—let the conversation flow.</p>
            </div>
            <div className="space-y-2 rounded-2xl border border-dashed border-[var(--border)] bg-white/70 px-5 py-4 text-left text-sm text-[var(--muted)]">
              <p className="font-semibold text-[var(--text)]">Make it your own</p>
              <p className="text-[var(--text)]">Play a simple game—cards, bocce, dice, or something you grew up with.</p>
              <p>Set screens aside and enjoy time together—talking, moving, and having fun.</p>
              <p>Most LIFE hosts start with friends or family. Keep it small, grounded, and real.</p>
            </div>
            <p className="type-body-muted">That’s it. Share what you learn so the next host feels ready.</p>
            <a href="/life-table-guide.pdf" className="btn-outline inline-flex px-8 text-base">
              Download the LIFE Table Guide
            </a>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-3xl space-y-8 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
            <div className="space-y-2 text-center">
              <h2 className="section-heading text-xl">How Hosting Works</h2>
              <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">Attend → Host → Register</p>
            </div>
            <ul className="space-y-4 text-left type-body-muted">
              {HOST_STEPS.map((step) => (
                <li key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                  {step}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={HOST_PRIMARY_LINK} className="btn-solid px-8 text-base">
                Host a LIFE Table
              </a>
              <a href={HOST_GUIDE_LINK} className="btn-outline px-8 text-base">
                Download the LIFE Table Guide
              </a>
              <a href={REGISTER_LINK} className="btn-outline px-8 text-base">
                Share Your Table
              </a>
            </div>
            <p className="type-detail text-center">
              Need support?{" "}
              <a href={CONTACT_EMAIL} className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                Email the LIFE team
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
