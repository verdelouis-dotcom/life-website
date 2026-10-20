import type { Metadata } from "next";
import RecipePage from "@/components/recipes/RecipePage";
import { getRecipe } from "@/data/recipes";

const recipe = getRecipe("tomato-sauce")!;
export const metadata: Metadata = { title: `${recipe.title} | LIFE Recipes`, description: recipe.description };
export default function TomatoSauceRecipePage() { return <RecipePage recipe={recipe} />; }
