import Link from "next/link";

type FactCard = {
  title: string;
  body: string;
  sourceLabel: string;
};

type ReferenceLink = {
  label: string;
  href: string;
};

interface PillarPageProps {
  title: string;
  subtitle: string;
  intro: string;
  why: string[];
  research: FactCard[];
  lifeTieIn: string[];
  takeaways: string[];
  references: ReferenceLink[];
}

export default function PillarPage({ title, subtitle, intro, why, research, lifeTieIn, takeaways, references }: PillarPageProps) {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <Link href="/" className="inline-flex text-sm font-semibold text-neutral-500 transition hover:text-neutral-900">
              ← Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-neutral-700 md:text-xl">{subtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">{intro}</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Why It Matters</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
              {why.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">What Research Shows</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {research.map((fact) => (
                <article key={fact.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h3 className="text-lg font-semibold text-neutral-900">{fact.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{fact.body}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">{fact.sourceLabel}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">How This Ties to LIFE</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg">
              {lifeTieIn.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Practical Takeaways</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              {takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">References</h2>
            <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6">
              <ul className="space-y-3 text-sm text-neutral-600">
                {references.map((ref) => (
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noreferrer" className="font-semibold text-neutral-900 underline underline-offset-4">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
