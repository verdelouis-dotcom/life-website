import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PILLARS, getPillarBySlug } from "@/data/pillars";

export function generateStaticParams() {
  return PILLARS.map((pillar) => ({ slug: pillar.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) {
    return { title: "Pillar not found" };
  }
  return {
    title: `${pillar.title} Pillar | L.I.F.E.`,
    description: pillar.summary,
  };
}

export default function PillarPage({ params }: { params: { slug: string } }) {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) {
    notFound();
  }

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="bg-[#fff8ef] py-16">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--olive)]">Longevity Pillar</p>
          <h1 className="text-4xl font-semibold text-[var(--life-forest)]">{pillar.title}</h1>
          <p className="text-base leading-relaxed text-[var(--muted)]">{pillar.summary}</p>
          <div className="flex justify-center gap-4 text-sm">
            <Link href="/" className="underline">
              Home
            </Link>
            <span>•</span>
            <Link href="/host" className="underline">
              Become a Host
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl space-y-6 px-6">
          <p className="text-lg leading-relaxed text-[var(--text)]">{pillar.intro}</p>
          <div className="space-y-6">
            {pillar.reasons.map((reason) => (
              <article key={reason.heading} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--life-forest)]">{reason.heading}</h2>
                <p className="mt-2 text-[var(--muted)]">{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6">
            <h3 className="text-sm uppercase tracking-[0.35em] text-[var(--olive)]">References</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {pillar.references.map((ref) => (
                <li key={ref.label}>
                  <span className="font-semibold text-[var(--text)]">{ref.label}:</span> {ref.detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Link
              href="/host"
              className="inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-6 py-3 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
