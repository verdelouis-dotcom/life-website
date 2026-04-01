import Link from "next/link";

type ResearchStat = {
  body: string;
  sourceLabel: string;
};

interface PillarPageProps {
  title: string;
  tagline: string;
  paragraphs: string[];
  researchStat: ResearchStat;
}

export default function PillarPage({ title, tagline, paragraphs, researchStat }: PillarPageProps) {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <Link href="/" className="inline-flex text-sm font-semibold text-neutral-500 transition hover:text-neutral-900">
              ← Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-neutral-700 md:text-xl">{tagline}</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Why It Matters</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">What Research Shows</h2>
            <article className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-base leading-relaxed text-neutral-700 md:text-lg">{researchStat.body}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-500">{researchStat.sourceLabel}</p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
