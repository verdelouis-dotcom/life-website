import type { ReactNode } from "react";

interface ResourceSectionProps {
  title: string;
  children: ReactNode;
}

export default function ResourceSection({ title, children }: ResourceSectionProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/90 card-padding shadow-sm">
      <h2 className="heading-md">{title}</h2>
      <div className="mt-3 space-y-3 body-md text-[var(--text)]">{children}</div>
    </article>
  );
}
