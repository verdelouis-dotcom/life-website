import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import NewsletterSignup from "@/components/forms/newsletter-signup";

const CARDS = [
  {
    title: "Founder Letters",
    description: "Short reflections from Lou Verde on the mission, the table, and the movement.",
  },
  {
    title: "Table Stories",
    description: "Real stories from gatherings, hosts, and shared meals in the community.",
  },
  {
    title: "Practical Longevity",
    description: "Simple, evidence-informed ideas on food, connection, and healthier living.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-16 text-[var(--text)]">
        <section className="space-y-4 text-center">
          <p className="type-eyebrow">The Shared Table</p>
          <h1 className="type-display">The Shared Table</h1>
          <p className="type-body-muted">Restoring connection and longevity through shared meals and the power of the table.</p>
        </section>

        <section className="mt-10 space-y-4 type-body-muted">
          <p>
            The Shared Table is the monthly publication of LIFE It shares founder letters, community stories, and reflections on food,
            connection, and practical longevity. It is designed for donors, hosts, supporters, and anyone who believes meaningful change can
            begin around a shared meal.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="section-heading text-center">What You’ll Receive</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {CARDS.map((card) => (
              <article key={card.title} className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-5 text-left shadow-sm">
                <p className="type-eyebrow">{card.title}</p>
                <p className="mt-2 type-detail">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-[var(--border)] bg-white/80 p-8 text-center shadow-sm">
          <NewsletterSignup title="Subscribe to The Shared Table" description="" buttonLabel="Subscribe" />
        </section>

        <section className="mt-12 space-y-2 text-center type-lede text-[var(--muted)]">
          <p className="font-semibold text-[var(--life-forest)]">It starts with one table.</p>
          <p>A meal. A conversation. A community.</p>
          <p>The Shared Table exists to help restore what matters most.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
