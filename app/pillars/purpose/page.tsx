import PillarPage from "../_components/pillar-page";

const WHY = [
  "Health behaviors become stronger when they are tied to meaning. People are more likely to keep going when their actions feel connected to family, community, tradition, or contribution.",
  "LIFE gives people a practical form of purpose: host a table, teach something useful, pass something on, and help someone else do the same.",
];

const RESEARCH = [
  {
    title: "Purpose is linked to healthier aging",
    body: "Research reviews have found that a stronger sense of purpose in life is associated with better health outcomes in older adults.",
    sourceLabel: "Source: NIH / PubMed",
  },
  {
    title: "Higher purpose is associated with lower mortality risk",
    body: "Multiple longitudinal studies have found that stronger purpose in life is associated with reduced risk of death across adulthood and older age.",
    sourceLabel: "Source: NIH / PubMed",
  },
  {
    title: "Purpose may support healthier behavior patterns",
    body: "Research suggests that people with a stronger sense of purpose are more likely to maintain behaviors that support long-term health.",
    sourceLabel: "Source: NIH / PubMed",
  },
];

const LIFE_TIE_IN = [
  "LIFE does not just ask people to eat better. It invites them to contribute. Teaching a meal, opening your home, or passing on a family recipe gives health a human reason to matter.",
  "That is part of the model’s power. Hosting creates ownership. Repeating it creates identity. Over time, healthy action becomes something people participate in, not just something they are told to do.",
];

const TAKEAWAYS = [
  "Attach one health habit to a deeper reason",
  "Teach something you know to someone else",
  "Host one meal with intention",
  "Let contribution become part of your routine",
];

const REFERENCES = [
  { label: "Systematic Review on Purpose in Life", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9141815/" },
  { label: "Purpose and Mortality Among Older Persons", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2740716/" },
  { label: "Purpose Across Adulthood and Mortality", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4224996/" },
  { label: "Purpose and Health Behaviors", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7494628/" },
];

export default function PurposePillarPage() {
  return (
    <PillarPage
      title="Purpose"
      subtitle="People are more likely to thrive when they feel their life has meaning, direction, and contribution."
      intro="Purpose gives shape to healthy living. It is easier to sustain better habits when they are connected to identity, responsibility, service, or something worth showing up for."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
