import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const LINKS = [
  { label: "About LIFE", href: "/about" },
  { label: "Impact & Accountability", href: "/impact" },
  { label: "Resources & Pillars", href: "/resources" },
  { label: "Support Us", href: "/donate" },
  { label: "Newsletter", href: "/newsletter" },
];

export default function SectionNextSteps() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Keep Exploring LIFE</h2>
        </Reveal>
        <Reveal>
          <p className="type-body-muted">Dive deeper into the mission, impact, and ways to get involved.</p>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="btn-outline px-6 text-sm">
              {link.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
