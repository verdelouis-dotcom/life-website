import PillarPage from "../_components/pillar-page";

const WHY = [
  "Many people think of exercise as something separate from daily life, which makes it easier to skip and harder to sustain.",
  "LIFE values repeatable movement built into everyday routines because what happens consistently is often more powerful than what happens occasionally.",
];

const RESEARCH = [
  {
    title: "Adults need regular weekly movement",
    body: "WHO recommends that adults get at least 150 minutes of moderate-intensity physical activity per week, or 75 minutes of vigorous activity, plus muscle-strengthening activity.",
    sourceLabel: "Source: WHO",
  },
  {
    title: "Inactivity is still widespread",
    body: "WHO reports that about 31% of adults globally do not meet the recommended physical activity levels.",
    sourceLabel: "Source: WHO",
  },
  {
    title: "Some movement is better than none",
    body: "CDC guidance emphasizes that adults benefit from regular movement and that the weekly recommendation can be broken into manageable sessions across the week.",
    sourceLabel: "Source: CDC",
  },
];

const LIFE_TIE_IN = [
  "LIFE treats movement as something woven into the rhythm of the LIFE cooking experience. Shopping, prepping, cooking, serving, cleaning up, and cooking experience all reduce sedentary habits.",
  "This matters because the model is practical. Instead of asking families to overhaul their lives overnight, LIFE helps them practice healthier patterns through ordinary activities they can actually maintain.",
];

const TAKEAWAYS = [
  "Walk daily, even in short sessions",
  "Spend more time standing, cooking, and moving at home",
  "Pair social time with movement whenever possible",
  "Focus on consistency over intensity",
];

const REFERENCES = [
  { label: "WHO Physical Activity Fact Sheet", href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" },
  { label: "WHO BeHealthy Physical Activity", href: "https://www.who.int/initiatives/behealthy/physical-activity" },
  { label: "CDC Physical Activity for Adults", href: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html" },
];

export default function MovementPillarPage() {
  return (
    <PillarPage
      title="Movement"
      subtitle="Long-term health is supported by movement that happens consistently, not perfectly."
      intro="Movement does not have to mean an intense fitness routine. LIFE supports the kind of daily movement that naturally fits into real life: walking, cooking, standing, cleaning, carrying, hosting, and staying engaged."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
