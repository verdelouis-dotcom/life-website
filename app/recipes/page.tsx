import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const RECIPES = [
  {
    title: "Tuscan Bean & Greens Stew",
    description: "Cannellini beans simmered with tomatoes, kale, garlic, and rosemary. Serve with crusty bread and olive oil.",
    highlights: ["Serves 6", "30 minutes", "Vegetarian"],
  },
  {
    title: "Citrus Herb Lentil Salad",
    description: "Brown lentils tossed with orange segments, parsley, mint, toasted almonds, and lemon olive oil dressing.",
    highlights: ["Serve warm or room temp", "Make ahead friendly"],
  },
  {
    title: "Roasted Vegetable Orzo",
    description: "Sheet-pan peppers, zucchini, and red onion folded into lemony orzo with feta and basil.",
    highlights: ["Feeds 8", "Colorful centerpiece"],
  },
  {
    title: "Simple Citrus Olive Oil Cake",
    description: "One-bowl dessert finished with powdered sugar and zest. Not too sweet, perfect with coffee.",
    highlights: ["Optional dessert", "Keeps overnight"],
  },
];

const PRINCIPLES = [
  "Cook once, serve many. Double recipes to feed the whole table without fuss.",
  "Choose dishes that can hold at room temperature so conversation isn\'t rushed.",
  "Lean on herbs, citrus, and olive oil for flavor instead of complicated sauces.",
  "Set water, bread, and olives on the table before guests arrive to signal welcome.",
];

export default function RecipesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">
        <section className="rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7a46]">Host Resources</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#2e2a26]">Recipes for Slow, Shared Meals.</h1>
          <p className="mt-4 text-lg text-[#5b5149]">
            These dishes align with the Mediterranean pattern we teach in workshops: plant-forward, generous with olive oil,
            and easy to multiply. Use them as-is or as inspiration for your own family staples.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold text-[#2e2a26]">Recipe Principles</h2>
          <ul className="mt-4 grid gap-4 text-[#5b5149] md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="rounded-2xl border border-[#dfd4c6] bg-[#fff8ef] p-5">
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-8 rounded-3xl border border-[#dfd4c6] bg-[#fff8ef] p-10 md:grid-cols-2">
          {RECIPES.map((recipe) => (
            <article key={recipe.title} className="rounded-2xl border border-[#dfd4c6] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#2e2a26]">{recipe.title}</h3>
              <p className="mt-3 text-[#5b5149]">{recipe.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-[#6b7a46]">
                {recipe.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-full border border-[#6b7a46] px-3 py-1">{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#dfd4c6] bg-white p-10">
          <h2 className="text-2xl font-semibold text-[#2e2a26]">Need More Guidance?</h2>
          <p className="mt-3 text-[#5b5149]">
            Upcoming workshops share full menus, shopping lists, and prep guides. In the meantime, adapt these templates
            using produce from your region. Share your finished table photo when you register to help us build the
            national gallery.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
