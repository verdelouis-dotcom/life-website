import type { Metadata } from "next";
import RecipePage from "@/components/recipes/RecipePage";
import { getRecipe } from "@/data/recipes";

const recipe = getRecipe("fresh-pasta")!;
export const metadata: Metadata = { title: `${recipe.title} | LIFE Recipes`, description: recipe.description };
export default function FreshPastaRecipePage() { return <RecipePage recipe={recipe} />; }
