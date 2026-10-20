import type { Metadata } from "next";
import Link from "next/link";
import { RECIPES } from "@/data/recipes";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const PAGE_URL = "https://www.longevityinitiativeforfoodandeducation.com/recipes";

export const metadata: Metadata = {
  title: "LIFE Recipes | Real Food for Everyday Life",
  description: "Cook simple LIFE recipes for fresh pasta, sauces, pesto, and tiramisu—made to be shared around the table.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "LIFE Recipes | Real Food for Everyday Life", description: "Simple recipes for cooking and sharing real food.", url: PAGE_URL, images: [DEFAULT_OG_IMAGE] },
  twitter: { title: "LIFE Recipes | Real Food for Everyday Life", description: "Simple recipes for cooking and sharing real food.", images: DEFAULT_TWITTER_IMAGES },
};

export default function RecipesPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="section-spacing">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
          <p className="label-text">Learn with LIFE</p>
          <h1 className="mt-2 heading-xl">Recipes made for real life.</h1>
          <p className="mt-4 max-w-3xl body-md text-[var(--muted)]">
            Simple food, practical techniques, and recipes worth sharing. Start with favorites from the LIFE table.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {RECIPES.map((recipe, index) => (
          <article key={recipe.slug} className="flex h-full flex-col rounded-[32px] border border-[var(--border)] bg-white p-7 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Recipe {String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 text-3xl font-serif text-[var(--life-forest)]">{recipe.title}</h2>
            <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">{recipe.description}</p>
            <Link href={`/recipes/${recipe.slug}`} className="btn-outline mt-6 inline-flex justify-center">
              View recipe →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
