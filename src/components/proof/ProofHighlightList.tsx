import type { ProofHighlight } from "@/data/proof";

interface ProofHighlightListProps {
  items: ProofHighlight[];
  title?: string;
  eyebrow?: string;
  background?: "surface" | "accent";
  className?: string;
}

export default function ProofHighlightList({ items, title, eyebrow, background = "surface", className }: ProofHighlightListProps) {
  if (!items.length) return null;
  const bgClass = background === "accent" ? "bg-[#fff8ef]" : "bg-white/90";

  return (
    <section className={["mx-auto max-w-5xl px-6 py-12", className].filter(Boolean).join(" ")}>
      <div className={`rounded-[36px] border border-[var(--border)] ${bgClass} p-8 shadow-sm`}>
        {eyebrow && <p className="type-eyebrow text-[var(--olive)]">{eyebrow}</p>}
        {title && <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">{title}</h2>}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[var(--border)] bg-white/80 p-5">
              {item.tag && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{item.tag}</p>}
              <p className="mt-2 text-xl font-semibold text-[var(--life-forest)]">{item.title}</p>
              <p className="mt-2 text-sm text-[var(--text)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
