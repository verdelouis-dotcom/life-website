import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PageShell from "@/components/page-shell";

const CARD = "rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/90 p-8 shadow-sm";
const TEXT = "mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]";

export default function WhyThisMattersPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 pt-16 text-[var(--text)] space-y-16">
        <PageShell>
          <section className={`${CARD} bg-white/70`}>
            <h2 className="text-2xl font-semibold md:text-3xl">Our Environment Changed</h2>
            <div className={TEXT}>
              <p>In one generation, daily life shifted:</p>
              <p>Less natural movement.<br />Fewer shared meals.<br />More screens.<br />More stimulation.<br />Less face-to-face conversation.</p>
              <p>We engineered convenience.<br />But we lost rhythm.</p>
            </div>
          </section>
        </PageShell>

        <PageShell>
          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">The Longest-Living Communities Share a Pattern</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Communities with unusually high rates of people living into their 90s and 100s tend to:
            </p>
            <ul className="mt-6 grid gap-3 text-[var(--muted)]">
              {[
                "Move naturally",
                "Live with purpose",
                "Cultivate supportive social circles",
                "Eat mostly fresh foods",
                "Stop before full",
                "Center family",
                "Prioritize faith or community",
                "Slow Down Daily",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-[var(--muted)]">Longevity is not accidental.<br />It is environmental.</p>
          </section>
        </PageShell>

        <PageShell>
          <section className="rounded-[32px] border border-[var(--border)] bg-transparent p-8 text-center shadow-sm">
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              If we want longer lives, we must rebuild the systems that once supported them.
            </p>
            <p className="mt-4 text-base font-medium uppercase tracking-[0.25em] text-[var(--olive)]">
              One of the most powerful was the shared table.
            </p>
          </section>
        </PageShell>

        <PageShell>
          <section className={CARD}>
            <h2 className="text-2xl font-semibold md:text-3xl">Where the Pattern Once Lived</h2>
            <div className={TEXT}>
              <p>There used to be one place where movement, food, purpose, conversation, and belonging naturally intersected.</p>
              <p>The table.</p>
              <p>At the table we slowed down, ate real food, faced one another, strengthened family, and built belonging.</p>
              <p>We didn’t remove the table. We dismantled a system.</p>
            </div>
          </section>
        </PageShell>

        <PageShell>
          <section aria-label="Workshop table image">
            <figure className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white/80 shadow-sm">
              <div className="aspect-[4/3] md:aspect-[16/10]">
                <Image
                  src="/images/workshops/pasta-lesson-2.jpg"
                  alt="Workshop table from the Metro Atlanta pilot"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <figcaption className="px-6 py-4 text-sm text-[var(--muted)]">Workshop moment from the Metro Atlanta pilot.</figcaption>
            </figure>
          </section>
        </PageShell>
      </main>
      <SiteFooter />
    </>
  );
}
