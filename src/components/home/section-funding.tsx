import Link from "next/link";
import Reveal from "@/components/ui/reveal";

export default function SectionFunding() {
  return (
    <section className="bg-white py-14 text-[var(--text)]">
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <Reveal>
          <h2 className="section-heading">Funding</h2>
        </Reveal>
        <Reveal>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Hosting the L.I.F.E. pilot activates 78 shared meal experiences each year through one host cycle.
          </p>
        </Reveal>
        <Reveal className="text-left">
          <div className="mx-auto max-w-xl space-y-3 text-sm leading-relaxed text-[var(--muted)]">
            <p>Donations support:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>ingredients and cooking materials for hosted tables</li>
              <li>educational resources and host toolkits</li>
              <li>program measurement and impact reporting</li>
              <li>research and development to refine and expand the model</li>
            </ul>
            <p>Your support helps the program grow responsibly while maintaining a simple, replicable structure.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930]"
          >
            Donate
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
