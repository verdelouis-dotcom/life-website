import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LIFE Expectancy Methodology",
  description: "Sources, factor mappings, formulas, limits, and privacy details for the LIFE Expectancy calculator.",
};

const factors = [
  ["Cigarette smoking", "Never, former by time since quitting, or current; Li et al. plus a U.S. smoking-cessation cohort."],
  ["BMI", "Calculated from height and weight; Li et al. table 2 categories."],
  ["Physical activity", "Weekly moderate-to-vigorous minutes mapped to Li et al. activity categories."],
  ["Alcohol", "Standard drinks converted to grams per day and mapped to sex-specific study ranges."],
  ["Sleep", "Typical nightly duration using the U-shaped dose-response estimate from Yin et al."],
];

export default function MethodologyPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <article className="mx-auto max-w-4xl space-y-8 px-6 py-16">
        <header className="rounded-[40px] border border-[var(--border)] bg-white/95 p-8 shadow-sm sm:p-10">
          <p className="type-eyebrow text-[var(--olive)]">Research and methodology</p>
          <h1 className="mt-3 type-display">How LIFE Expectancy is estimated</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">The calculator starts with the U.S. Social Security Administration period life table for your exact age and sex, then adjusts annual mortality probabilities using only published factor estimates.</p>
          <p className="mt-4 text-sm text-[var(--muted)]">Version 2.0 · October 2026 · Statistical estimate for education only. Not a medical prediction or diagnosis.</p>
        </header>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-[var(--life-forest)]">What changes the number</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {factors.map(([title, body]) => <div key={title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5"><h3 className="font-semibold text-[var(--life-forest)]">{title}</h3><p className="mt-2 text-sm text-[var(--muted)]">{body}</p></div>)}
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">Diet, connection, purpose, stress, broader nicotine use, and other health-context answers inform your six-pillar guidance but do not change the estimate.</p>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-[var(--life-forest)]">Formula and safeguards</h2>
          <p className="mt-4 leading-7">For every future age, the published annual probability is adjusted as <code className="rounded bg-[var(--surface)] px-2 py-1">1 − (1 − q)^HR</code>. The resulting survival curve is integrated to estimate remaining years.</p>
          <p className="mt-3 leading-7">Combined effects are capped to the joint range reported by Li et al., and the total age shift cannot exceed the study’s published 14.0-year female or 12.2-year male comparison. Individual “Add years” estimates change one factor at a time and recompute the full curve.</p>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-[var(--life-forest)]">Primary sources</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm">
            <li><a className="text-[var(--olive)] underline" href="https://www.ssa.gov/policy/docs/statcomps/supplement/2025/4c.html#table4.c6">SSA Annual Statistical Supplement 2025, table 4.C6</a></li>
            <li><a className="text-[var(--olive)] underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6207481/">Li et al., Circulation (2018)</a></li>
            <li><a className="text-[var(--olive)] underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9593233/">Thomson et al., JAMA Network Open (2022)</a></li>
            <li><a className="text-[var(--olive)] underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5634263/">Yin et al., Journal of the American Heart Association (2017)</a></li>
          </ul>
          <p className="mt-5 text-sm text-[var(--muted)]">The repository also includes the complete technical specification at <code>docs/life-expectancy-methodology.md</code>.</p>
        </section>

        <div className="text-center"><Link href="/assessment" className="btn-solid px-8">Find My Number</Link></div>
      </article>
    </main>
  );
}
