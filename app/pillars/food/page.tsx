import PillarPage from "../_components/pillar-page";

const WHY = [
  "Over time, many people have moved away from home cooking and toward convenience foods that are fast, packaged, and disconnected from traditional preparation.",
  "LIFE is not about perfection or restriction. It is about making fresh, repeatable meals more normal again and helping people experience food as something shared, learned, and passed on.",
];

const RESEARCH = [
  {
    title: "Healthy diets center on whole foods",
    body: "The World Health Organization says healthy dietary patterns emphasize vegetables, fruits, legumes, nuts, and whole grains while limiting unhealthy fats, salt, and sugars.",
    sourceLabel: "Source: WHO",
  },
  {
    title: "Variety supports nutrient needs",
    body: "WHO notes that diverse diets built from a wide variety of foods improve the likelihood of meeting vitamin and mineral needs and can reduce diet-related chronic disease risk.",
    sourceLabel: "Source: WHO",
  },
  {
    title: "Highly processed eating patterns are a problem",
    body: "Current federal nutrition guidance emphasizes prioritizing fruits, vegetables, whole grains, and other high-quality foods while avoiding highly processed foods and refined carbohydrates.",
    sourceLabel: "Source: HHS / USDA",
  },
];

const LIFE_TIE_IN = [
  "LIFE brings nutrition out of theory and into the kitchen. When a host teaches one meal at a shared LIFE gathering, healthy eating becomes visible, social, and easier to repeat.",
  "The LIFE gathering helps bridge the gap between information and action. People do not just hear what to eat — they cook it, taste it, and leave with something they can recreate at home.",
];

const TAKEAWAYS = [
  "Cook one simple meal from real ingredients each week",
  "Build meals around vegetables, beans, grains, and healthy proteins",
  "Share meals more often instead of eating in isolation",
  "Learn one recipe you can confidently teach someone else",
];

const REFERENCES = [
  { label: "WHO Healthy Diet", href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
  { label: "WHO Healthy Diet Topic", href: "https://www.who.int/health-topics/healthy-diet" },
  { label: "HHS Nutrition Policy Fact Sheet", href: "https://www.hhs.gov/press-room/fact-sheet-historic-reset-federal-nutrition-policy.html" },
];

export default function FoodPillarPage() {
  return (
    <PillarPage
      title="Food"
      subtitle="Real food, cooked simply, is one of the strongest foundations for long-term health."
      intro="Food is not just fuel. It shapes energy, habits, family routines, and the quality of daily life. LIFE uses the shared LIFE gathering to help people return to meals built from real ingredients, practical cooking, and connection."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
