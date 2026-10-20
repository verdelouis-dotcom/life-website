import type { Metadata } from "next";
import RecipePage from "@/components/recipes/RecipePage";
import { getRecipe } from "@/data/recipes";

const recipe = getRecipe("tiramisu")!;
export const metadata: Metadata = { title: `${recipe.title} | LIFE Recipes`, description: recipe.description };
export default function TiramisuRecipePage() { return <RecipePage recipe={recipe} />; }
