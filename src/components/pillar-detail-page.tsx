import Link from "next/link";
import { getPillarBySlug } from "@/data/pillars";

export default function PillarDetailPage({ slug }: { slug: string }) {
  const pillar = getPillarBySlug(slug);
  if (!pillar) {
    return null;
  }

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="bg-[#fff8ef] py-16">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <p className="type-eyebrow">Longevity Pillar</p>
          <h1 className="section-heading">{pillar.title}</h1>
          <p className="type-body-muted">{pillar.summary}</p>
          <div className="flex justify-center gap-4 type-detail">
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
          <p className="type-body">{pillar.intro}</p>
          <div className="space-y-6">
            {pillar.reasons.map((reason) => (
              <article key={reason.heading} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[var(--life-forest)]">{reason.heading}</h2>
                <p className="mt-2 type-body-muted">{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6">
            <h3 className="type-eyebrow">References</h3>
            <ul className="mt-3 space-y-2 type-detail">
              {pillar.references.map((ref) => (
                <li key={ref.label}>
                  <span className="font-semibold text-[var(--text)]">{ref.label}:</span> {ref.detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Link href="/host" className="btn-outline">
              Become a Host
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
