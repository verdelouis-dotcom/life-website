import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ResourceCard({ title, description, href }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Resource</p>
      <h2 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">{title}</h2>
      <p className="mt-3 text-sm text-[var(--text)]">{description}</p>
      <div className="mt-auto pt-4">
        <Link href={href} className="text-sm font-semibold text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4">
          Read article
        </Link>
      </div>
    </article>
  );
}
