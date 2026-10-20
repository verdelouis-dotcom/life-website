import type { Metadata } from "next";
import RecipePage from "@/components/recipes/RecipePage";
import { getRecipe } from "@/data/recipes";

const recipe = getRecipe("rigatoni-alla-vodka")!;
export const metadata: Metadata = { title: `${recipe.title} | LIFE Recipes`, description: recipe.description };
export default function RigatoniAllaVodkaRecipePage() { return <RecipePage recipe={recipe} />; }
