import type { ProofQuote } from "@/data/proof";

interface ProofQuoteGridProps {
  quotes: ProofQuote[];
  title?: string;
  eyebrow?: string;
}

export default function ProofQuoteGrid({ quotes, title, eyebrow }: ProofQuoteGridProps) {
  if (!quotes.length) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-[36px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
        {eyebrow && <p className="type-eyebrow text-[var(--olive)]">{eyebrow}</p>}
        {title && <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">{title}</h2>}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {quotes.map((item) => (
            <article key={item.quote.slice(0, 40)} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-5">
              <p className="text-sm leading-6 text-[var(--text)]">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{item.attribution}</p>
              {item.context && <p className="text-xs text-[var(--muted)]">{item.context}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
