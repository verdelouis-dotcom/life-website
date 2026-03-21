import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";

const HOST_PRIMARY_LINK = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=Host%20a%20LIFE%20Table";
const REGISTER_LINK = "/register";
const CONTACT_EMAIL = "mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support";
const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";

export const metadata: Metadata = {
  title: "Host a LIFE Workshop | Lead a Longevity Dinner in Your Community",
  description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
  alternates: {
    canonical: HOST_URL,
  },
  openGraph: {
    title: "Host a LIFE Workshop | Lead a Longevity Dinner in Your Community",
    description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
    url: HOST_URL,
  },
  twitter: {
    title: "Host a LIFE Workshop | Lead a Longevity Dinner in Your Community",
    description: "Become a LIFE host and lead a shared meal that teaches longevity habits through food, connection, and conversation.",
  },
};

const HOST_STEPS = [
  "Attend a LIFE workshop and commit to hosting your own within 30 days.",
  "Invite friends, neighbors, or family once you have a date confirmed.",
  "Cook together, teach a favorite recipe or family tradition, and share the LIFE pillars in your own words.",
  "Register the LIFE workshop afterward so participation and stories can be measured.",
];

export default function HostPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="section-spacing bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6]">
          <div className="mx-auto max-w-4xl space-y-6 px-6 text-center text-[var(--text)]">
            <h1 className="heading-xl">Host a LIFE Workshop</h1>
            <p className="body-lg text-[var(--muted)]">
              A LIFE workshop is a shared meal where you cook what you know, guide a short conversation, and register what happens.
            </p>
            <ul className="body-md text-[var(--text)] space-y-2 text-left md:text-center md:inline-block">
              <li>• Invite people you already know.</li>
              <li>• Cook a favorite recipe or family tradition.</li>
              <li>• Follow the guide—we stay with you from invite to registration.</li>
            </ul>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href={HOST_PRIMARY_LINK} className="btn-solid px-8 text-base">
                Host a LIFE Workshop
              </a>
            </div>
            <p className="text-sm text-[var(--muted)]">Attend a LIFE workshop first, then host within 30 days so the movement keeps momentum.</p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="label-text">LIFE Host Champions</p>
            <h2 className="heading-lg">Become a LIFE Host Champion</h2>
            <p className="body-md text-[var(--muted)]">
              Champions commit to at least three LIFE workshops per year, mentor new hosts, and share data after every gathering. If you love bringing people together,
              this is how you multiply the movement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Champion" className="btn-outline px-8 text-base">
                Tell us you’re interested
              </a>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="mx-auto max-w-4xl space-y-4 rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/80 p-10 text-center shadow-sm">
            <h2 className="heading-lg">What happens when I host?</h2>
            <p className="body-md text-[var(--muted)]">Hosting a LIFE workshop is simple:</p>
            <ul className="grid gap-3 text-left body-sm text-[var(--text)] md:grid-cols-2">
              {[
                "Prepare and cook together",
                "Share a meal",
                "Keep it simple. Share what works for you and listen to others.",
                "Clean up together",
                "Teach a favorite recipe or family tradition",
                "Capture the moment",
                "Register your LIFE workshop",
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
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-3xl space-y-6 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
            <div className="space-y-2 text-center">
              <h2 className="section-heading text-xl">Attend → Host → Register</h2>
              <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">One LIFE workshop at a time</p>
            </div>
            <ul className="space-y-4 text-left type-body-muted">
              {HOST_STEPS.map((step) => (
                <li key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                  {step}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <a href={HOST_PRIMARY_LINK} className="btn-solid px-8 text-base">
                Host a LIFE Workshop
              </a>
            </div>
            <div className="space-y-1 text-center text-sm text-[var(--muted)]">
              <p>
                Need the walkthrough?{" "}
                <a href="/life-workshop-guide.pdf" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Download the LIFE Workshop Guide
                </a>
                .
              </p>
              <p>
                Already hosted?{" "}
                <a href={REGISTER_LINK} className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Register your LIFE workshop
                </a>
                .
              </p>
              <p>
                Need support?{" "}
                <a href={CONTACT_EMAIL} className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Email the LIFE team
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
