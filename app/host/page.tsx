import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const HOST_URL = "https://www.longevityinitiativeforfoodandeducation.com/host";

export const metadata: Metadata = {
  title: "Host a LIFE Table — An Optional Way to Participate",
  description: "Gather people around your table and optionally use LIFE's free resources to make food, connection, and conversation part of everyday life.",
  alternates: {
    canonical: HOST_URL,
  },
  openGraph: {
    title: "Host a LIFE Table — An Optional Way to Participate",
    description: "Gather people around your table and optionally use LIFE's free resources to make food, connection, and conversation part of everyday life.",
    url: HOST_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Host a LIFE Table — An Optional Way to Participate",
    description: "Gather people around your table and optionally use LIFE's free resources to make food, connection, and conversation part of everyday life.",
    images: DEFAULT_TWITTER_IMAGES,
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
      "Invite people you care about, choose something simple to cook, and make time to eat together. You do not need to attend a LIFE class first.",
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
    question: "Do my guests have to host another table afterward?",
    answer: "No. A LIFE Table is a meaningful experience on its own. Guests are welcome to host someday, but there is no required sequence or commitment.",
  },
];

export default function HostPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="section-spacing bg-gradient-to-br from-[#fff7ee] via-[#fefcf8] to-[#f5efe6]">
        <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
          <p className="label-text">An Optional Way to Participate</p>
          <h1 className="heading-xl">Bring LIFE to your table.</h1>
          <p className="body-lg text-[var(--muted)]">
            Gather family, friends, neighbors, or people you want to know better. Cook together, put the phones away, and make room for real conversation.
          </p>
          <p className="body-md font-semibold text-[var(--life-forest)]">You don&apos;t need to attend a LIFE class first. You don&apos;t need to be a chef. You just need a table and people to share it with.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[36px] border border-[var(--border)] bg-white p-10 shadow-sm">
          <div className="text-center">
            <p className="type-eyebrow text-[var(--olive)]">How a LIFE Table Works</p>
            <h2 className="heading-lg">Four simple, flexible steps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: "01",
                title: "Gather your people",
                body: "Invite family, friends, neighbors, or people you want to know better. A small group makes it easier for everyone to connect.",
              },
              {
                label: "02",
                title: "Share the table",
                body: "Cook together, eat together, put the phones away, and make time for conversation and connection.",
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
              <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">Bring LIFE to the table</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">Use LIFE&apos;s free educational resources, recipes, LIFE Guide, or conversation material if it adds value to your gathering.</p>
              <Link href="/resources" className="btn-outline mt-4 inline-flex">Explore Free Resources →</Link>
            </article>
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6">
              <p className="text-sm font-semibold text-[var(--olive)]">04</p>
              <h3 className="mt-2 text-2xl font-serif text-[var(--life-forest)]">Register your table</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text)]">Optionally register the experience so LIFE can understand its community reach and impact. Registration is appreciated, not required.</p>
              <Link href="/register" className="btn-outline mt-4 inline-flex">Register Your Table →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <p className="label-text">For Those Who Want to Do More</p>
          <h2 className="heading-lg">Host again—or simply enjoy the table you shared.</h2>
          <p className="body-md text-[var(--muted)]">
            There is no obligation to create a chain of hosts. If hosting becomes meaningful to you, LIFE can help you use the free resources and welcome others in your community.
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
            <p className="label-text text-[var(--olive)]">Optional next steps</p>
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
