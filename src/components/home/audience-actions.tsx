import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const AUDIENCE_BLOCKS = [
  {
    title: "Donate",
    subtitle: "Support our neighborhood tables",
    body: "Fuel the Metro Atlanta pilot, cover ingredients, and keep the register portal running so every table is tracked.",
    cta: "Give Today",
    href: "/donate",
  },
  {
    title: "Become a Host",
    subtitle: "Lead a monthly L.I.F.E. table",
    body: "Get trained, receive scripts and recipes, and invite neighbors into a 30-day replication journey.",
    cta: "Start Hosting",
    href: "/host",
  },
  {
    title: "Learn More",
    subtitle: "Workshops & educational programming",
    body: "Bring the conversation to your school, company, or faith community with interactive keynotes and demos.",
    cta: "Explore Workshops",
    href: "/workshops",
  },
  {
    title: "Impact",
    subtitle: "See what we’ve accomplished",
    body: "Track our pilot metrics, households reached, and replication progress in the Monthly Table Model update.",
    cta: "View Pilot Plan",
    href: "/what-we-do#pilot",
  },
];

export default function AudienceActions() {
  return (
    <section className="bg-white py-16 text-[var(--text)] md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <Reveal className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Take Action</p>
          <h2 className="text-3xl font-semibold">Choose the role that fits you.</h2>
          <p className="text-lg text-[var(--muted)]">Four clear pathways help donors, hosts, learners, and data-minded partners plug in fast.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCE_BLOCKS.map((block, index) => (
            <Reveal
              key={block.title}
              delay={index * 80}
              className="flex h-full flex-col rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">{block.title}</p>
                <h3 className="text-2xl font-semibold">{block.subtitle}</h3>
                <p className="text-base leading-relaxed text-[var(--muted)]">{block.body}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={block.href}
                  className="inline-flex items-center rounded-2xl bg-[var(--olive)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#394930]"
                >
                  {block.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
