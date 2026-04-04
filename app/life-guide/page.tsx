import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/life-guide";
const GUIDE_ITEMS = [
  { title: "Recipes", body: "Simple meal ideas built around real, fresh ingredients." },
  { title: "Daily Habit Tracker", body: "A printable list of habits participants can check off throughout the week." },
  { title: "Practical Tips", body: "Easy ways to build healthier routines into busy family life." },
  { title: "At-Home Momentum", body: "A simple structure that helps people keep going after the cooking experience ends." },
];

const STEPS = [
  {
    title: "Attend a LIFE cooking experience",
    body: "Participants gather around the LIFE cooking experience, share a meal, and experience the LIFE model firsthand.",
  },
  {
    title: "Take the guide home",
    body: "Each participant receives the full LIFE Guide with recipes, tips, and the full list of habits.",
  },
  {
    title: "Put it into practice",
    body: "The guide helps individuals and families begin checking off small daily actions that support a healthier, more connected life.",
  },
];

const WORKSHOP_LINK = "/pasta-class";
const GUIDE_PDF = "/life-7-day-challenge.pdf";

export const metadata: Metadata = {
  title: "The LIFE Guide — A Habit Library for Your Family",
  description: "Browse the LIFE habit library — simple habits across six longevity pillars. Something for every member of your family.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "The LIFE Guide — A Habit Library for Your Family",
    description: "Browse the LIFE habit library — simple habits across six longevity pillars. Something for every member of your family.",
    url: PAGE_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "The LIFE Guide — A Habit Library for Your Family",
    description: "Browse the LIFE habit library — simple habits across six longevity pillars. Something for every member of your family.",
  },
};

export default function LifeGuidePage() {
  return (
    <>
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="space-y-5 rounded-[40px] border border-[var(--border)] bg-white/95 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">TAKE IT HOME</p>
            <h1 className="text-4xl font-semibold text-[var(--life-forest)]">The LIFE Guide</h1>
            <p className="text-lg text-[var(--muted)]">
              After attending a LIFE cooking experience, participants receive the complete LIFE Guide — a practical take-home resource filled with recipes, simple tips, and daily habits that help bring healthier, more connected living into the home.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={WORKSHOP_LINK} className="btn-solid px-8 text-base">
                Book the Fresh Pasta Cooking Class
              </Link>
              <a href={GUIDE_PDF} className="btn-outline px-8 text-base" target="_blank" rel="noreferrer">
                Download the 7-Day Challenge
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="space-y-4 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-[var(--life-forest)]">What’s inside the guide</h2>
            <p className="text-sm leading-6 text-[var(--text)]">
              The LIFE Guide is designed to help people take what they experienced at the LIFE cooking experience and continue it at home. It turns the cooking experience into something practical, repeatable, and easy to share with others.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {GUIDE_ITEMS.map((item) => (
                <article key={item.title} className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-[var(--life-forest)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <div className="space-y-4 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-[var(--life-forest)]">Why it matters</h2>
            <p className="text-sm leading-6 text-[var(--text)]">
              The goal of LIFE is not just to create a meaningful cooking experience experience. It is to help people bring healthier habits, stronger connection, and a more intentional way of living into their everyday routine.
            </p>
            <p className="text-sm leading-6 text-[var(--text)]">The guide helps turn one experience into repeated action.</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="space-y-6 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-[var(--life-forest)]">What happens after the cooking experience</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <article key={step.title} className="rounded-3xl border border-[var(--border)] bg-[#fffdf9] p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[var(--olive)]">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--life-forest)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-12">
          <div className="space-y-4 rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-[var(--life-forest)]">Built for real life</h2>
            <p className="text-sm leading-6 text-[var(--text)]">
              The LIFE Guide is meant to work in real homes, with real schedules, and real families. The habits are simple, practical, and designed to fit into daily life one step at a time.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="space-y-4 rounded-[40px] border border-[var(--border)] bg-white/95 p-10 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Keep Going</p>
            <h2 className="text-3xl font-semibold text-[var(--life-forest)]">Start with the LIFE cooking experience. Keep it going at home.</h2>
            <p className="text-sm leading-6 text-[var(--text)]">
              Attend a LIFE cooking experience and receive the complete guide designed to help you carry the experience into everyday life.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={WORKSHOP_LINK} className="btn-solid px-8 text-base">
                Book the Fresh Pasta Cooking Class
              </Link>
              <a href={GUIDE_PDF} className="btn-outline px-8 text-base" target="_blank" rel="noreferrer">
                Download the 7-Day Challenge
              </a>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
