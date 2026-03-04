import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const ACTIONS = [
  {
    title: "Donate",
    description: "Fuel neighborhood tables and data tracking.",
    href: "/donate",
  },
  {
    title: "Become a Host",
    description: "Lead a monthly table with a ready-made kit.",
    href: "/host",
  },
  {
    title: "Workshops",
    description: "Bring the conversation to your campus or company.",
    href: "/workshops",
  },
  {
    title: "Contact",
    description: "Ask a question or schedule a quick call.",
    href: "/contact",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-white py-12 text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {ACTIONS.map((action, index) => (
            <Reveal
              key={action.title}
              delay={index * 80}
              className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)]/90 p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{action.title}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{action.description}</p>
              <Link
                href={action.href}
                className="mt-4 inline-flex text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline"
              >
                Go
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
