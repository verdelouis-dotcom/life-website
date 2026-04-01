import PillarPage from "../_components/pillar-page";

export default function StressPillarPage() {
  return (
    <PillarPage
      title="Stress Regulation"
      tagline="Chronic stress is invisible, cumulative, and killing you slowly."
      paragraphs={[
        "Acute stress is normal. Chronic stress — the kind that never fully switches off — silently damages your cardiovascular system, suppresses your immune function, accelerates cellular aging, and erodes your brain over time. Most American families are living in a state of chronic stress so constant they have forgotten what it feels like to not be stressed.",
        "The families that live longest experience stress like everyone else. What is different is that they have daily built-in rituals for releasing it. They cook slowly. They rest deliberately. They spend time outside. They talk to people they trust. They let go of things they cannot control.",
      ]}
      researchStat={{
        body: "Higher levels of cortisol were associated with a 60% increased risk of cardiovascular disease across a meta-analysis of 43,641 participants.",
        sourceLabel: "Source: ScienceDirect, 2024",
      }}
    />
  );
}
