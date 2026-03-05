import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionFunding() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
        <Reveal className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Funding</Reveal>
        <Reveal>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Hosting 12 tables per year requires ingredients, tools, and materials. Donations underwrite education, resources, and measurable
            reporting—so the program can grow responsibly.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930]"
          >
            Donate
          </Link>
        </Reveal>
        <p className="text-xs text-[var(--muted)]">
          Funding streams include individual donations, local sponsorships, keynote honoraria, and grants.
        </p>
      </div>
    </section>
  );
}
