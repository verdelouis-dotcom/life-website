import Link from "next/link";

type TopicItem = {
  title: string;
  href: string;
  description?: string;
};

type TopicGridProps = {
  items: TopicItem[];
};

export default function TopicGrid({ items }: TopicGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="flex h-full flex-col rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
          {item.description ? (
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
          ) : null}
          <div className="mt-6">
            <Link
              href={item.href}
              className="inline-flex items-center justify-center rounded-2xl border border-[#6b7a46] px-4 py-2 text-sm font-semibold text-[#6b7a46] transition hover:bg-[#6b7a46] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6b7a46]/40 focus:ring-offset-2"
            >
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
