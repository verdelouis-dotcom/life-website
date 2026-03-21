import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/seo/FaqSchema";
import PhotoStrip from "@/components/proof/PhotoStrip";
import NewsletterSignup from "@/components/forms/newsletter-signup";
import { PILOT_QUOTES } from "@/data/proof";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/workshops";

export const metadata: Metadata = {
  title: "LIFE Gatherings | What Happens at a LIFE Workshop",
  description:
    "A LIFE gathering is a shared meal at someone's home. Neighbors cook together, eat together, and talk about the habits that help people live longer.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "LIFE Gatherings | What Happens at a LIFE Workshop",
    description:
      "A LIFE gathering is a shared meal at someone's home. Neighbors cook together, eat together, and talk about the habits that help people live longer.",
    url: PAGE_URL,
  },
  twitter: {
    title: "LIFE Gatherings | What Happens at a LIFE Workshop",
    description:
      "A LIFE gathering is a shared meal at someone's home. Neighbors cook together, eat together, and talk about the habits that help people live longer.",
  },
};

const WHAT_TO_EXPECT = [
  {
    label: "You cook together",
    detail: "The host picks a recipe — usually something simple made with fresh ingredients. Everyone helps. No skill required.",
  },
  {
    label: "You sit down and eat",
    detail: "A real meal, at a real table, with people you know or are about to know. Phones away.",
  },
  {
    label: "You talk about what matters",
    detail: "The conversation naturally covers food, sleep, movement, connection, purpose, and stress — not as a lecture, just as honest talk between neighbors.",
  },
  {
    label: "You leave with something",
    detail: "The LIFE Guide — a short set of habits to try at home. And an invitation: host your own table within 30 days if you're ready.",
  },
];

const ATTEND_FAQ = [
  {
    question: "Where does a LIFE gathering happen?",
    answer:
      "At someone's home — a kitchen, a backyard, an apartment. Not a classroom, church hall, or conference room. The point is that it feels like a neighbor's house, because it is.",
  },
  {
    question: "How do I get invited?",
    answer:
      "LIFE works through personal invitation — a host invites people they already know. If you haven't been invited yet, join the newsletter and we'll let you know when a table opens near you, or reach out and we'll connect you with a host in your area.",
  },
  {
    question: "What should I bring?",
    answer:
      "Just yourself. The host provides ingredients and the recipe. Offer to help cook — that's the whole point.",
  },
  {
    question: "How many people are usually there?",
    answer: "Most LIFE gatherings are 4–8 people. Small enough that everyone gets to talk.",
  },
  {
    question: "Do I have to host one after?",
    answer:
      "No one will force you. But the host will ask — and most people say yes. That's how the table keeps growing.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">

        {/* Hero */}
        <section className="section-spacing">
          <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-[#fff8ef] p-10 shadow-sm px-6 md:px-10">
            <p className="label-text">LIFE Gatherings</p>
            <h1 className="heading-xl mt-2">A meal at someone&apos;s home.</h1>
            <p className="body-lg text-[var(--muted)] mt-4">
              That&apos;s what a LIFE gathering is. A neighbor opens their kitchen, everyone cooks together, and the conversation turns to the habits
              that actually help people live longer and feel better.
            </p>
            <p className="body-md text-[var(--text)] mt-3">
              No agenda. No slides. No sign-up fee. Just a table, a recipe, and real people talking about real life.
            </p>
          </div>
        </section>

        {/* What to expect */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <h2 className="heading-lg mb-6">What to expect</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {WHAT_TO_EXPECT.map((item) => (
              <article key={item.label} className="rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
                <p className="label-text text-[var(--olive)] mb-2">{item.label}</p>
                <p className="body-sm text-[var(--text)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Photo strip */}
        <PhotoStrip
          eyebrow="From the pilot"
          title="Real kitchens. Real neighbors."
          description="Every gathering looks a little different. Same idea every time."
          imageAspect="portrait"
          photos={[
            { src: "/images/workshops/IMG_6709.jpeg", alt: "Hosts guiding pasta at the stove", caption: "Fresh ingredient prep" },
            { src: "/images/workshops/pasta-lesson-2.jpg", alt: "Participants rolling pasta", caption: "Cooking together" },
            { src: "/images/workshops/31926/austin-6.jpeg", alt: "Kim's neighbors having fun making fresh pasta in Austin", caption: "Having fun making fresh pasta" },
          ]}
        />

        {/* Quotes */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {PILOT_QUOTES.map((q) => (
              <blockquote key={q.attribution} className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
                <p className="body-sm text-[var(--text)] italic">&ldquo;{q.quote}&rdquo;</p>
                <footer className="mt-4">
                  <p className="label-text text-[var(--olive)]">{q.attribution}</p>
                  {q.context && <p className="type-detail mt-0.5">{q.context}</p>}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FaqSchema items={ATTEND_FAQ} />
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
            <h2 className="heading-lg">Common questions</h2>
            <div className="mt-4 space-y-4">
              {ATTEND_FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="label-text text-[var(--olive)]">{item.question}</h3>
                  <p className="mt-2 body-sm text-[var(--text)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 pb-16 space-y-6">
          <div className="rounded-[36px] border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Haven&apos;t been invited yet?</p>
            <h2 className="heading-md mt-2">Get notified when a table opens near you.</h2>
            <p className="body-sm text-[var(--muted)] mt-2 mb-6">
              We&apos;ll let you know when a host near you is gathering, or connect you directly.
            </p>
            <NewsletterSignup
              buttonLabel="Notify me"
              compact
            />
          </div>
          <div className="text-center text-sm text-[var(--muted)]">
            Ready to host instead?{" "}
            <Link href="/host" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
              Open the host guide
            </Link>
            .
          </div>
        </section>

      </main>
    </>
  );
}
