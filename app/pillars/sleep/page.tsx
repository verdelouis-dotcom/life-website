import PillarPage from "../_components/pillar-page";

export default function SleepPillarPage() {
  return (
    <PillarPage
      title="Sleep"
      tagline="The most underrated habit in your family's life."
      paragraphs={[
        "Sleep is not a luxury. It is the foundation everything else is built on. While you sleep your brain clears toxins, your cells repair, your memories consolidate, and your immune system recharges. Yet we treat sleep as the first thing we sacrifice when life gets busy.",
        "Your children's brains are developing right now. Every hour of sleep they lose is an hour of growth, healing, and learning they will never get back. The longest-lived families protect sleep the way most Americans protect their work schedule. It is not optional. It is the foundation.",
      ]}
      researchStat={{
        body: "Consistently sleeping six hours or less at age 50, 60, and 70 was associated with a 30% increased dementia risk compared to a normal sleep duration of seven hours.",
        sourceLabel: "Source: Nature Communications, 2021",
      }}
    />
  );
}
