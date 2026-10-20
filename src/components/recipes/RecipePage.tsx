import Link from "next/link";
import type { Recipe } from "@/data/recipes";

export default function RecipePage({ recipe }: { recipe: Recipe }) {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="section-spacing">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/recipes" className="text-sm font-semibold text-[var(--terracotta)] underline underline-offset-4">
            ← All recipes
          </Link>
          <div className="mt-6 rounded-[40px] border border-[var(--border)] bg-white/90 p-8 shadow-sm md:p-12">
            <p className="type-eyebrow text-[var(--olive)]">{recipe.eyebrow}</p>
            <h1 className="mt-3 heading-xl">{recipe.title}</h1>
            <p className="mt-4 max-w-3xl body-lg text-[var(--muted)]">{recipe.description}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Makes", recipe.yield],
                ["Prep", recipe.prepTime],
                ["Cook", recipe.cookTime],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <dt className="type-eyebrow text-[var(--olive)]">{label}</dt>
                  <dd className="mt-2 text-sm leading-6">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-20 lg:grid-cols-[0.8fr,1.2fr]">
        <aside className="h-fit rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-8 shadow-sm">
          <p className="type-eyebrow text-[var(--olive)]">Ingredients</p>
          <ul className="mt-5 space-y-4">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="border-b border-[var(--border)] pb-4 text-sm leading-6 last:border-0 last:pb-0">
                {ingredient}
              </li>
            ))}
          </ul>
        </aside>

        <div className="rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-sm md:p-10">
          <p className="type-eyebrow text-[var(--olive)]">Method</p>
          <ol className="mt-6 space-y-8">
            {recipe.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.5rem,1fr] gap-4">
                <span className="font-serif text-2xl text-[var(--terracotta)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl font-serif text-[var(--life-forest)]">{step.title}</h2>
                  <p className="mt-2 text-sm leading-7">{step.body}</p>
                  {step.tip && <p className="mt-3 text-sm italic leading-6 text-[var(--muted)]">Tip: {step.tip}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
