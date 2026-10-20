export type Recipe = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  yield: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  steps: { title: string; body: string; tip?: string }[];
};

export const RECIPES: Recipe[] = [
  {
    slug: "fresh-pasta",
    title: "Homemade Fresh Pasta",
    description: "One simple formula: 100 grams of flour and one egg per person.",
    eyebrow: "The LIFE Pasta Formula",
    yield: "Scale for any number of people",
    prepTime: "45 minutes, plus 30 minutes resting",
    cookTime: "2–3 minutes",
    ingredients: [
      "50g “00” flour per person",
      "50g semolina flour per person",
      "1 large egg per person",
      "A pinch of salt per person",
    ],
    steps: [
      { title: "Make the well", body: "Pile the flour on a clean counter and shape a deep well in the center, like a volcano. Crack in the egg and add the salt.", tip: "Let each person mix their own 100 grams. It’s the best part." },
      { title: "Bring it together", body: "With a fork, beat the egg gently, slowly pulling flour in from the walls. Go slowly. If the wall breaks and egg escapes, push it back with a bench scraper." },
      { title: "Knead for 10 minutes", body: "Once the dough is shaggy, knead by hand—push, fold, and turn—for a full 10 minutes. It will go from rough to smooth to silky.", tip: "Sticky? Dust lightly with 00 flour. Dry and cracking? Wet your hands and keep going." },
      { title: "Rest for 30 minutes", body: "Wrap the dough tightly or cover it with a bowl, then rest at room temperature. Don’t skip this—the gluten needs to relax." },
      { title: "Roll it out", body: "Cut off a piece and flatten it. Start at the widest setting, moving one click thinner at a time until you can see your hand through the sheet.", tip: "Keep the remaining dough covered so it doesn’t dry out. If it tears, fold and roll it again." },
      { title: "Cut and rest", body: "Dust both sides of the sheet, then run it through the cutter for fettuccine or spaghetti. Flour the strands lightly and rest them on a drying rack." },
      { title: "Cook", body: "Boil in well-salted water for 2–3 minutes. The pasta will float when it is ready. Lift it directly into your prepared sauce with tongs.", tip: "Have your sauce ready first. Fresh pasta waits for no one." },
    ],
  },
  {
    slug: "tomato-sauce",
    title: "Simple Tomato Sauce",
    description: "A dependable, unfussy sauce made from tomatoes, olive oil, garlic, and basil.",
    eyebrow: "A Sauce Worth Knowing",
    yield: "Serves 4",
    prepTime: "10 minutes",
    cookTime: "25–30 minutes",
    ingredients: [
      "1 can (28 oz) whole peeled tomatoes",
      "2 tablespoons extra-virgin olive oil",
      "2 garlic cloves, lightly crushed",
      "½ teaspoon kosher salt, plus more to taste",
      "A small handful of fresh basil leaves",
    ],
    steps: [
      { title: "Crush the tomatoes", body: "Pour the tomatoes and their juices into a bowl. Crush them by hand, leaving a little texture." },
      { title: "Warm the garlic", body: "Heat the olive oil in a wide saucepan over medium-low heat. Add the garlic and cook gently until fragrant, without letting it brown." },
      { title: "Simmer", body: "Add the tomatoes and salt. Bring to a gentle simmer and cook uncovered for 25–30 minutes, stirring occasionally, until the sauce thickens." },
      { title: "Finish", body: "Remove the garlic if desired. Tear in the basil, taste, and adjust the salt. Toss the sauce with hot pasta and a splash of pasta water." },
    ],
  },
  {
    slug: "tiramisu",
    title: "Simple Tiramisu",
    description: "Espresso-soaked ladyfingers layered with traditional egg-and-mascarpone cream and cocoa.",
    eyebrow: "Make Dessert Ahead",
    yield: "Serves 8",
    prepTime: "25 minutes, plus at least 6 hours chilling",
    cookTime: "No baking required",
    ingredients: [
      "1½ cups strong espresso or coffee, cooled",
      "4 large pasteurized eggs, separated",
      "½ cup granulated sugar, divided",
      "16 oz mascarpone, softened slightly",
      "24 crisp Italian ladyfingers",
      "Unsweetened cocoa powder, for dusting",
    ],
    steps: [
      { title: "Prepare the coffee", body: "Pour the cooled espresso into a shallow dish and set it aside." },
      { title: "Whip the yolks", body: "Beat the egg yolks with half of the sugar until pale, thick, and ribbon-like. Add the mascarpone and mix gently until smooth." },
      { title: "Whip and fold", body: "In a clean bowl, beat the egg whites to soft peaks. Gradually add the remaining sugar and continue beating to firm, glossy peaks. Fold the whites gently into the mascarpone mixture in three additions." },
      { title: "Build the first layer", body: "Dip each ladyfinger quickly into the coffee—do not soak—and arrange a snug layer in an 8-inch square dish. Spread half of the mascarpone cream over the top." },
      { title: "Repeat", body: "Add a second layer of dipped ladyfingers and cover with the remaining mascarpone cream. Smooth the top." },
      { title: "Chill and serve", body: "Cover and refrigerate for at least 6 hours, preferably overnight. Dust generously with cocoa just before serving." },
    ],
  },
  {
    slug: "rigatoni-alla-vodka",
    title: "Rigatoni alla Vodka",
    description: "Rigatoni tossed in a glossy tomato, vodka, cream, and Parmigiano sauce.",
    eyebrow: "A Pasta-Night Favorite",
    yield: "Serves 4",
    prepTime: "10 minutes",
    cookTime: "About 25 minutes",
    ingredients: [
      "1 lb rigatoni",
      "2 tablespoons butter",
      "1 tablespoon olive oil",
      "1 shallot, finely minced",
      "2 garlic cloves, minced",
      "½ teaspoon chili flakes",
      "6 oz tomato paste",
      "¼ cup vodka",
      "¾ cup heavy cream",
      "1 cup grated Parmigiano, plus more to finish",
      "Fresh basil",
      "Salt",
    ],
    steps: [
      { title: "Boil the rigatoni", body: "Boil the rigatoni in well-salted water. Save 1 cup of pasta water before draining." },
      { title: "Build the base", body: "Melt the butter with the olive oil over medium heat. Cook the shallot for 3 minutes, then add the garlic and chili flakes for 30 seconds." },
      { title: "Cook the tomato paste", body: "Add the tomato paste. Stir and cook for 4–5 minutes, until it darkens to brick red." },
      { title: "Add the vodka", body: "Pour in the vodka and cook for 1–2 minutes, until the sharp smell fades." },
      { title: "Add the cream", body: "Lower the heat and stir in the cream until the sauce is smooth and blush-colored." },
      { title: "Toss", body: "Add the pasta, Parmigiano, and a splash of pasta water. Toss until glossy." },
      { title: "Finish", body: "Finish with fresh basil and more Parmigiano." },
    ],
  },
  {
    slug: "basil-pesto",
    title: "Basic Basil Pesto",
    description: "A bright basil pesto with toasted pine nuts, lemon, garlic, olive oil, and optional Parmesan.",
    eyebrow: "Fresh, Fast, and Flexible",
    yield: "Makes about 1 cup",
    prepTime: "10 minutes",
    cookTime: "No cooking required",
    ingredients: [
      "½ cup toasted pine nuts",
      "2 tablespoons fresh lemon juice",
      "1 small garlic clove",
      "¼ teaspoon sea salt",
      "Freshly ground black pepper",
      "2 cups basil leaves",
      "¼ cup extra-virgin olive oil, plus more for a smoother pesto",
      "¼ cup freshly grated Parmesan, optional",
    ],
    steps: [
      { title: "Chop the base", body: "In a food processor, combine the pine nuts, lemon juice, garlic, salt, and pepper. Pulse until well chopped." },
      { title: "Add the basil", body: "Add the basil and pulse until combined." },
      { title: "Drizzle in the oil", body: "With the processor running, drizzle in the olive oil and pulse until combined." },
      { title: "Add the Parmesan", body: "Add the Parmesan, if using, and pulse briefly to combine." },
      { title: "Toss with pasta", body: "Toss with hot farfalle and a splash of pasta water until glossy.", tip: "Want it smoother? Just add more olive oil." },
    ],
  },
];

export const getRecipe = (slug: string) => RECIPES.find((recipe) => recipe.slug === slug);
