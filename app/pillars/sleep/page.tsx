import PillarPage from "../_components/pillar-page";

const WHY = [
  "Poor sleep can quietly undermine almost every other health habit. It affects stress, cravings, focus, patience, and the ability to stay consistent.",
  "A longevity model that ignores sleep is incomplete. LIFE treats rest as part of the foundation, not an afterthought.",
];

const RESEARCH = [
  {
    title: "Most adults need at least 7 hours",
    body: "CDC says adults generally need 7 or more hours of sleep each night, with slightly different ranges for older age groups.",
    sourceLabel: "Source: CDC",
  },
  {
    title: "Short sleep is linked to health problems",
    body: "CDC reports that adults sleeping fewer than 7 hours are more likely to report health problems, including heart attack, asthma, and depression.",
    sourceLabel: "Source: CDC",
  },
  {
    title: "Sleep supports long-term health",
    body: "A major sleep consensus statement found that regularly sleeping less than 7 hours is associated with increased risk for obesity, diabetes, hypertension, heart disease, stroke, depression, and increased risk of death.",
    sourceLabel: "Source: NIH / Sleep Consensus Panel",
  },
];

const LIFE_TIE_IN = [
  "LIFE encourages healthier evenings through shared meals, less chaos, more routine, and stronger social rhythms. Consistent routines can support better rest.",
  "The hosted LIFE gathering model also reframes health as a full-life practice. Better meals and better connection can make it easier for people to settle into more restorative patterns overall.",
];

const TAKEAWAYS = [
  "Protect a consistent bedtime",
  "Aim for at least 7 hours of sleep",
  "Reduce late-night overstimulation when possible",
  "Build calming evening rhythms around dinner and connection",
];

const REFERENCES = [
  { label: "CDC About Sleep", href: "https://www.cdc.gov/sleep/about/index.html" },
  { label: "CDC Sleep in Adults FastStats", href: "https://www.cdc.gov/sleep/data-research/facts-stats/adults-sleep-facts-and-stats.html" },
  { label: "NIH / PubMed Sleep Consensus Statement", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4434546/" },
];

export default function SleepPillarPage() {
  return (
    <PillarPage
      title="Sleep"
      subtitle="Sleep is one of the body’s most essential repair and recovery systems."
      intro="Sleep affects energy, mood, judgment, recovery, and long-term health. LIFE includes sleep because healthier living is not just about what happens at the LIFE gathering — it is also about the rhythms that restore the body."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
