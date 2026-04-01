import PillarPage from "../_components/pillar-page";

export default function MovementPillarPage() {
  return (
    <PillarPage
      title="Movement"
      tagline="Not a gym routine. A way of living."
      paragraphs={[
        "The world's longest-lived people do not exercise. They move — constantly, naturally, as part of daily life. They walk to the market. They tend their gardens. They climb stairs. They cook on their feet. Movement is not something they schedule. It is woven into everything they do.",
        "For a busy family this is good news. You do not need a gym membership or an hour you do not have. You need to stop thinking of movement as a workout and start thinking of it as a disposition — a default way of moving through the world that adds years to your life without ever requiring willpower.",
      ]}
      researchStat={{
        body: "Walking as little as two to five minutes after a meal reduces blood sugar by an average of 17% compared to prolonged sitting.",
        sourceLabel: "Source: Sports Medicine, 2022",
      }}
    />
  );
}
