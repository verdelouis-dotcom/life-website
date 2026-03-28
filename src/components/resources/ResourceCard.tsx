import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  label?: string;
  ctaLabel?: string;
  external?: boolean;
}

export default function ResourceCard({ title, description, href, label = "Resource", ctaLabel = "Read article", external = false }: ResourceCardProps) {
  const ctaClasses = "text-sm font-semibold text-[var(--terracotta)] underline decoration-[rgba(182,106,74,0.4)] underline-offset-4";

  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
      <p className="label-text">{label}</p>
      <h2 className="mt-2 heading-md">{title}</h2>
      <p className="mt-3 body-sm text-[var(--text)]">{description}</p>
      <div className="mt-auto pt-4">
        {external ? (
          <a href={href} target="_blank" rel="noreferrer" className={ctaClasses}>
            {ctaLabel}
          </a>
        ) : (
          <Link href={href} className={ctaClasses}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
