import PillarPage from "../_components/pillar-page";

export default function FoodPillarPage() {
  return (
    <PillarPage
      title="Food"
      tagline="Real food. Cooked together. Eaten at the table."
      paragraphs={[
        "Processed food is not just a health problem. It is a connection problem. When we stopped cooking, we stopped gathering — and both our health and our relationships suffered for it. The longest-lived families on earth cook their own food. Not because they have more time. Because the kitchen is where life actually happens.",
        "This is not about perfection or restriction. It is about making one decision — to treat food as something you share together, not something you pick up on the way home.",
      ]}
      researchStat={{
        body: "The highest consumers of ultra-processed food have a 15% increased risk of all-cause mortality across a meta-analysis of over 1.1 million participants.",
        sourceLabel: "Source: PMC, 2025",
      }}
    />
  );
}
