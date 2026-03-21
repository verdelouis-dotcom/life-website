import type { Metadata } from "next";
import Link from "next/link";

const GUIDE_URL = "https://www.longevityinitiativeforfoodandeducation.com/host/guide";

export const metadata: Metadata = {
  title: "LIFE Host Guide | How to Lead a LIFE Workshop",
  description:
    "Step-by-step guidance for hosting a LIFE workshop: invite, prepare, share the pillars, and register the gathering so it counts toward the movement.",
  alternates: {
    canonical: GUIDE_URL,
  },
  openGraph: {
    title: "LIFE Host Guide | How to Lead a LIFE Workshop",
    description:
      "Learn how to plan, cook, facilitate, and register a LIFE workshop so your gathering supports the six pillars of healthy aging.",
    url: GUIDE_URL,
  },
  twitter: {
    title: "LIFE Host Guide | How to Lead a LIFE Workshop",
    description:
      "Learn how to plan, cook, facilitate, and register a LIFE workshop so your gathering supports the six pillars of healthy aging.",
  },
};

const CORE_FLOW = [
  "Prepare and cook together.",
  "Share a meal.",
  "Use simple prompts to guide conversation. Share what works for you and listen to others.",
  "Clean up together.",
  "Share the recipe.",
  "Capture the moment.",
  "Register your LIFE workshop.",
];

const CONVERSATION_TOPICS = [
  "Food — What are you eating more or less of?",
  "Movement — How are you staying active each day?",
  "Sleep — What helps you rest well?",
  "Connection — Who are you spending time with?",
  "Purpose — What gives your day meaning?",
  "Stress — How do you reset and slow down?",
];

export default function HostGuidePage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-16">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Host Guide</p>
            <h1 className="type-display">How to Lead a LIFE Workshop</h1>
            <p className="type-lede text-[var(--muted)]">
              Use this guide after you attend a LIFE workshop. It covers how to plan the meal, share the six pillars, and register the gathering so it
              supports the movement.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-4xl space-y-8 px-6">
            <article className="space-y-4 rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm text-left">
              <div className="text-center space-y-2">
                <h2 className="heading-lg">The LIFE Workshop Guide</h2>
                <p className="body-md text-[var(--muted)]">Hosting is simple, personal, and driven by the people you invite.</p>
              </div>
              <div className="space-y-3">
                <p className="label-text text-[var(--olive)]">Core Flow</p>
                <ol className="space-y-2 body-sm text-[var(--text)] list-decimal pl-5">
                  {CORE_FLOW.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <div className="space-y-3">
                <p className="label-text text-[var(--olive)]">Conversation ideas (optional)</p>
                <p className="body-sm text-[var(--text)]">You can naturally explore topics like:</p>
                <ul className="space-y-1 body-sm text-[var(--text)] list-disc pl-5">
                  {CONVERSATION_TOPICS.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <p className="body-sm text-[var(--muted)]">There’s no need to cover everything—let the conversation flow.</p>
              </div>
              <div className="space-y-2">
                <p className="label-text text-[var(--olive)]">Make it your own</p>
                <p className="body-sm text-[var(--text)]">Play a simple game—cards, bocce, dice, or something you grew up with.</p>
                <p className="body-sm text-[var(--text)]">Set screens aside and enjoy time together—talking, moving, and having fun.</p>
                <p className="body-sm text-[var(--text)]">Most LIFE hosts start with friends or family. Keep it small, grounded, and real.</p>
                <p className="body-sm text-[var(--text)]">Share what you learn so the next host feels ready.</p>
              </div>
            </article>
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
</>
  );
}
