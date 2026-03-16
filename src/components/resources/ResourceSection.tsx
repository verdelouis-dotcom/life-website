import type { ReactNode } from "react";

interface ResourceSectionProps {
  title: string;
  children: ReactNode;
}

export default function ResourceSection({ title, children }: ResourceSectionProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-[var(--life-forest)]">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--text)]">{children}</div>
    </article>
  );
}
