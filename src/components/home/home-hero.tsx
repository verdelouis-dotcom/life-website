import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0e1511]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-table7.png)", filter: "brightness(0.55) saturate(0.85)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl rounded-3xl bg-[var(--surface)]/90 p-8 text-[var(--text)] shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="flex flex-col gap-6">
            <Reveal className="text-xs uppercase tracking-[0.4em] text-[var(--olive)]">
              Longevity Initiative for Food &amp; Education
            </Reveal>
            <Reveal>
              <h1 className="text-4xl font-semibold leading-tight text-[var(--life-forest)] sm:text-5xl lg:text-6xl">
                Longevity Starts at the Table
              </h1>
            </Reveal>
            <Reveal className="space-y-3 text-lg leading-snug text-[var(--text)]">
              <p>
                L.I.F.E. is a nonprofit initiative piloting in Metro Atlanta to educate and equip communities with evidence-informed
                fundamentals that support longer, healthier lives.
              </p>
              <p>
                We restore shared meals, teach Mediterranean-style cooking with fresh ingredients, and share longevity principles grounded
                in six pillars.
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/host"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#394930]"
              >
                Host a Table
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)]/60 px-6 py-3 text-base font-semibold text-[var(--olive)] transition hover:bg-white/70"
              >
                Register a Table
              </Link>
              <a
                href="/downloads/LIFE_Host_Guide_BRANDED.pdf"
                className="inline-flex items-center justify-center rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-[var(--olive)] underline-offset-4 hover:underline"
              >
                Download Host Guide
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
