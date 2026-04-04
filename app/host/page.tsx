import type { Metadata } from "next";
import Link from "next/link";

const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";

export const metadata: Metadata = {
  title: "Host a LIFE Cooking Experience",
  description: "Open your kitchen and pass on the LIFE cooking experience movement.",
  alternates: {
    canonical: HOST_URL,
  },
  openGraph: {
    title: "Host a LIFE Cooking Experience",
    description: "Open your kitchen and pass on the LIFE cooking experience movement.",
    url: HOST_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    title: "Host a LIFE Cooking Experience",
    description: "Open your kitchen and pass on the LIFE cooking experience movement.",
  },
};

const FAQ_ITEMS = [
  {
    question: "Where does a LIFE cooking experience happen?",
    answer:
      "At someone's home — a kitchen, a backyard, an apartment. Not a classroom, church hall, or conference room. The point is that it feels like a neighbor's house, because it is.",
  },
  {
    question: "How do I get started?",
    answer:
      "Attend a LIFE cooking experience first — Lou and Kara's Fresh Pasta Cooking Class is a great place to start. From there, open your own kitchen and invite the people you already know.",
  },
  {
    question: "What should I cook?",
    answer:
      "Anything made from fresh ingredients. It doesn't have to be pasta. It just has to be real. The host provides ingredients and the recipe. Keep it simple — the connection is the point, not the complexity of the dish.",
  },
  {
    question: "How many people should I invite?",
    answer: "2 to 6 people is the sweet spot. Small enough that everyone gets to talk.",
  },
  {
    question: "Do my guests have to host one after?",
    answer: "No one will force them. But once they've experienced it, most people want to. That's how the table keeps growing.",
  },
];

export default function HostPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="section-spacing bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6]">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <p className="label-text">Host a LIFE Cooking Experience</p>
          <h1 className="heading-xl">You experienced it. Now pass it on.</h1>
          <p className="body-lg text-[var(--muted)]">
            Hosting a LIFE cooking experience is how the movement grows. You don&apos;t need to be a chef. You don&apos;t need a big house. You just need a kitchen, fresh ingredients, and people you want to feed.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
          <div className="text-center">
            <p className="type-eyebrow text-[var(--olive)]">How it works</p>
            <h2 className="heading-lg">How it works</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: "01",
                title: "You attended a LIFE cooking experience",
                body: "Something clicked. The food was real. The conversation was real. You want to bring that to the people in your life.",
              },
              {
                label: "02",
                title: "Open your kitchen",
                body: "Pick a date. Invite friends, neighbors, or family — 2 to 6 people is the sweet spot. Pick a recipe. Cook together. Share the LIFE Guide with everyone at your table.",
              },
            ].map((step) => (
              <article key={step.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6">
                <p className="text-sm font-semibold text-[var(--olive)]">{step.label}</p>
                <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text)]">{step.body}</p>
              </article>
            ))}
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6">
              <p className="text-sm font-semibold text-[var(--olive)]">03</p>
              <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">Register your table</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">Log your cooking experience so it counts toward the movement. Every registered table helps LIFE measure impact and report to donors.</p>
              <Link href="/register" className="btn-outline mt-4 inline-flex">
                Register Your Table →
              </Link>
            </article>
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6">
              <p className="text-sm font-semibold text-[var(--olive)]">04</p>
              <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">Pass it on</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">Encourage your guests to host their own table. That&apos;s how one kitchen becomes many.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <p className="label-text">LIFE Host Champions</p>
          <h2 className="heading-lg">Become a LIFE Host Champion</h2>
          <p className="body-md text-[var(--muted)]">
            Host three or more cooking experiences a year. Mentor new hosts. Help the movement grow beyond your neighborhood.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:info@longevityinitiativeforfoodandeducation.com?subject=LIFE%20Host%20Champion" className="btn-outline px-8 text-base">
              Tell us you&apos;re interested →
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Common Questions</p>
          <h2 className="heading-lg mt-1">Common Questions</h2>
          <div className="mt-6 space-y-5">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question} className="border-b border-[var(--border)] pb-4 last:border-b-0">
                <h3 className="label-text text-[var(--olive)]">{item.question}</h3>
                <p className="mt-2 body-sm text-[var(--text)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="label-text text-[var(--olive)]">Keep the ripple going</p>
            <h3 className="heading-md">Next steps</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/register" className="btn-solid px-8 text-base">
              Register Your Table →
            </Link>
            <a href="/downloads/life-guide.html" className="btn-outline px-8 text-base" target="_blank" rel="noreferrer">
              Download the LIFE Guide →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
