import NewsletterSignup from "@/components/forms/newsletter-signup";

const VALUE_POINTS = [
  "Founder notes and movement updates",
  "Stories from shared tables and community hosts",
  "Practical ideas on food, longevity, and connection",
];

export default function SectionNewsletter() {
  return (
    <section id="newsletter" className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-8 rounded-[36px] border border-[var(--border)] bg-white/80 px-6 py-10 shadow-sm">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">The Shared Table</p>
          <h2 className="section-heading">The Shared Table</h2>
          <p className="text-base text-[var(--muted)]">
            A monthly letter from L.I.F.E. sharing stories, ideas, and updates about food, connection, and the movement to bring people back to the table.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-[var(--muted)] md:grid-cols-3">
          {VALUE_POINTS.map((point) => (
            <div key={point} className="rounded-3xl border border-[var(--border)] bg-white/90 p-4">
              {point}
            </div>
          ))}
        </div>
        <NewsletterSignup buttonLabel="Join the Newsletter" description="" />
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--olive)]">No spam. Just thoughtful updates from the table.</p>
      </div>
    </section>
  );
}
