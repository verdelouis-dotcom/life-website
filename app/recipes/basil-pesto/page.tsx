import type { Metadata } from "next";
import RecipePage from "@/components/recipes/RecipePage";
import { getRecipe } from "@/data/recipes";

const recipe = getRecipe("basil-pesto")!;
export const metadata: Metadata = { title: `${recipe.title} | LIFE Recipes`, description: recipe.description };
export default function BasilPestoRecipePage() { return <RecipePage recipe={recipe} />; }
