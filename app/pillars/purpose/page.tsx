import PillarPage from "../_components/pillar-page";

export default function PurposePillarPage() {
  return (
    <PillarPage
      title="Purpose"
      tagline="People who know why they get up in the morning live longer."
      paragraphs={[
        "In Japan they call it ikigai — the reason you get up in the morning. In every long-lived community on earth researchers find people who feel they are needed, that their presence matters, that there is something meaningful left to do. Purpose is not a luxury or a philosophical exercise. It is a measurable biological force.",
        "LIFE gives people a practical form of purpose: host a LIFE cooking experience, teach something useful, pass something on, and help someone else do the same.",
      ]}
      researchStat={{
        body: "People who could articulate their sense of purpose had a 15% lower risk of dying, according to a study that followed 6,000 people for 14 years.",
        sourceLabel: "Source: NCBI",
      }}
    />
  );
}
