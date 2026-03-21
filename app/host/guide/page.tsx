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

const BEFORE_YOU_GATHER = [
  "Pick a date within the next 30 days.",
  "Invite 4–8 people you already know — neighbors, friends, family.",
  "Choose a recipe you're comfortable cooking from scratch.",
  "Download or bookmark this page so you have it on the day.",
];

const DAY_OF_FLOW = [
  "Welcome guests and cook together — make it participatory, not a performance.",
  "Sit down and share the meal.",
  "Guide a short conversation using the prompts below — let it flow naturally.",
  "Share the recipe so guests can cook it at home.",
  "Play a simple game or just keep talking — cards, bocce, whatever fits.",
  "Capture a photo or two if guests are comfortable.",
  "Before everyone leaves, ask: who's ready to host their own table within 30 days?",
];

const CONVERSATION_TOPICS = [
  { pillar: "Food", prompt: "What are you eating more or less of lately?" },
  { pillar: "Movement", prompt: "How are you staying active each day?" },
  { pillar: "Sleep", prompt: "What helps you rest well?" },
  { pillar: "Connection", prompt: "Who are you spending time with?" },
  { pillar: "Purpose", prompt: "What gives your day meaning?" },
  { pillar: "Stress", prompt: "How do you reset and slow down?" },
];

export default function HostGuidePage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6] py-16">
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Host Guide</p>
            <h1 className="type-display">How to Lead a LIFE Workshop</h1>
            <p className="type-lede text-[var(--muted)]">
              Use this guide to plan and run your gathering. Follow the flow, use the prompts, and register when you&apos;re done.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-4xl space-y-8 px-6">

            {/* Before you gather */}
            <article className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
              <h2 className="heading-md mb-4">Before You Gather</h2>
              <ol className="space-y-3">
                {BEFORE_YOU_GATHER.map((item, i) => (
                  <li key={item} className="flex gap-3 body-sm text-[var(--text)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--terra-pale)] text-xs font-semibold text-[var(--terra)]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </article>

            {/* Day-of flow */}
            <article className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
              <h2 className="heading-md mb-4">On the Day</h2>
              <ol className="space-y-3">
                {DAY_OF_FLOW.map((item, i) => (
                  <li key={item} className="flex gap-3 body-sm text-[var(--text)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sage-pale)] text-xs font-semibold text-[var(--sage)]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </article>

            {/* Conversation prompts */}
            <article className="rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
              <h2 className="heading-md mb-1">Conversation Prompts</h2>
              <p className="body-sm text-[var(--muted)] mb-4">You don&apos;t need to cover all six — pick what fits and let the table lead.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CONVERSATION_TOPICS.map(({ pillar, prompt }) => (
                  <div key={pillar} className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
                    <p className="label-text text-[var(--olive)] mb-1">{pillar}</p>
                    <p className="body-sm text-[var(--text)]">{prompt}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Make it your own */}
            <article className="rounded-[32px] border border-dashed border-[var(--border)] bg-white/70 p-6 shadow-sm">
              <h2 className="heading-md mb-3">Make It Your Own</h2>
              <ul className="space-y-2 body-sm text-[var(--text)]">
                <li>Play a simple game — cards, bocce, dice, or something you grew up with.</li>
                <li>Set screens aside. The whole point is being present with people.</li>
                <li>Keep it small and real. Most great LIFE tables are 4–8 people.</li>
                <li>Don&apos;t worry about perfection. Your guests came for you, not a performance.</li>
              </ul>
            </article>

          </div>
        </section>

        {/* Post-gathering CTAs */}
        <section className="pb-16">
          <div className="mx-auto max-w-4xl space-y-6 px-6">
            <div className="rounded-[36px] border border-[var(--border)] bg-[var(--terra-pale)] p-8 text-center shadow-sm">
              <p className="type-eyebrow text-[var(--terra)]">You did it</p>
              <h2 className="heading-md mt-2">Now register your gathering</h2>
              <p className="body-sm text-[var(--text)] mt-3 max-w-md mx-auto">
                Log who came, when you hosted, and share a photo if you&apos;d like it on the website.
                It takes 2 minutes and makes your table count.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/register" className="btn-solid px-8 text-base">
                  Register Your Table
                </Link>
              </div>
            </div>
            <div className="text-center space-y-1 text-sm text-[var(--muted)]">
              <p>
                Need support?{" "}
                <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Support" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
                  Email the LIFE team
                </a>
                .
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
