import PillarPage from "../_components/pillar-page";

export default function ConnectionPillarPage() {
  return (
    <PillarPage
      title="Connection"
      tagline="Loneliness is killing us. The table is the cure."
      paragraphs={[
        "The Harvard Study of Adult Development followed 700 men for over 80 years and reached one conclusion above all others — the quality of our relationships determines the quality and length of our lives. Not wealth. Not fitness. Not fame. Relationships.",
        "The antidote is not complicated. It starts at home — with the people sitting across from you at dinner, the conversations you make time for, the phones you put down. Then it grows outward — to the neighbor you know by name, the friend you call instead of text, the community that knows you're there.",
      ]}
      researchStat={{
        body: "Individuals with strong social relationships had a 50% increased likelihood of survival compared to those with weaker social ties — a survival advantage comparable to quitting smoking.",
        sourceLabel: "Source: PLOS Medicine, 300,000+ participants",
      }}
    />
  );
}
