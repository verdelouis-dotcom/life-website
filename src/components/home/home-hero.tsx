import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const DECLARATION_LINES = [
  "We are the first generation equipped with the knowledge to live longer — but the habits to live shorter.",
  "Chronic disease is rising. Life expectancy is declining.",
  "This is not a failure of medicine. It is a failure of environment.",
  "L.I.F.E. exists to rebuild the daily structures that shape health — how we eat, gather, move, and connect.",
];

// TODO: Replace placeholder imagery with final photography (hero-table.jpg).

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0e1511] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-table.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-28 text-white sm:py-36">
        <Reveal className="text-xs uppercase tracking-[0.4em] text-[rgba(255,255,255,0.75)]">
          Longevity Initiative for Food &amp; Education
        </Reveal>
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Rebuild the system. Start at the table.
          </h1>
        </Reveal>
        <Reveal className="space-y-4 text-lg leading-relaxed text-white/90">
          {DECLARATION_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Reveal>
        <Reveal className="flex flex-wrap gap-4">
          <Link
            href="/host#engagement-form"
            className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-base font-semibold text-[#1f2a22] shadow-lg shadow-black/20 transition hover:bg-white"
          >
            Host a Table
          </Link>
          <Link
            href="/workshops#engagement-form"
            className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Explore Workshops
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
