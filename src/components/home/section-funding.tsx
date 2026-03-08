import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const SUPPORT_ITEMS = [
  "ingredients and cooking materials for hosted tables",
  "educational resources and host toolkits",
  "program measurement and impact reporting",
  "research and development to refine and expand the model",
];

export default function SectionFunding() {
  return (
    <section className="bg-[#fff8ef] py-14 text-[var(--text)]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-8 rounded-[40px] border border-[var(--border)] bg-white/90 px-8 py-10 text-center shadow-sm">
          <Reveal className="space-y-3">
            <h2 className="section-heading">Funding</h2>
            <p className="type-body-muted">
              Gifts support community education, host resources, and outreach that helps more people gather around the table.
            </p>
          </Reveal>
          <Reveal>
            <p className="type-detail uppercase tracking-[0.3em] text-[var(--olive)]">Donations support</p>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 text-left type-detail md:grid-cols-2">
              {SUPPORT_ITEMS.map((item) => (
                <div key={item} className="rounded-3xl border border-[var(--border)] bg-[#fffaf4] p-4">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="type-body-muted">
              Your support helps the program grow responsibly while maintaining a simple, replicable structure.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/donate"
              className="btn-outline px-8"
            >
              Donate
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
