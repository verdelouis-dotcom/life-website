import PillarPage from "../_components/pillar-page";

const WHY = [
  "Modern life often fragments connection. Many people are busy, isolated, or surrounded by interaction that feels fast but not meaningful.",
  "The LIFE gathering slows people down long enough to listen, learn, and build relationships that can actually support healthier living.",
];

const RESEARCH = [
  {
    title: "Social connection affects physical health",
    body: "The U.S. Surgeon General’s advisory says poor social relationships, social isolation, and loneliness are linked to increased risk of heart disease and stroke.",
    sourceLabel: "Source: HHS Surgeon General",
  },
  {
    title: "Connection supports community health",
    body: "The Surgeon General’s advisory emphasizes that social connection improves both individual well-being and the resilience of communities.",
    sourceLabel: "Source: HHS Surgeon General",
  },
  {
    title: "Lack of connection has serious consequences",
    body: "The Surgeon General’s report warns that insufficient social connection is associated with poorer health outcomes and broader social harms.",
    sourceLabel: "Source: HHS Surgeon General",
  },
];

const LIFE_TIE_IN = [
  "LIFE is built on the idea that health sticks better when it is relational. A recipe taught face-to-face carries more weight than advice delivered in isolation.",
  "Shared meals turn health into a social experience. That helps people feel seen, supported, and more likely to repeat what they learned with someone else.",
];

const TAKEAWAYS = [
  "Share meals with other people more often",
  "Use the LIFE gathering for real conversation, not just eating",
  "Learn and teach recipes across generations",
  "Build healthier routines through community, not willpower alone",
];

const REFERENCES = [
  { label: "HHS Social Connection Overview", href: "https://www.hhs.gov/surgeongeneral/reports-and-publications/connection/index.html" },
  { label: "Surgeon General Advisory PDF", href: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" },
  { label: "NIH Bookshelf Version", href: "https://www.ncbi.nlm.nih.gov/books/NBK595227/" },
];

export default function ConnectionPillarPage() {
  return (
    <PillarPage
      title="Connection"
      subtitle="Strong relationships are one of the clearest and most consistent predictors of long-term well-being."
      intro="People live better when they feel known, supported, and connected. LIFE centers the shared LIFE gathering because meals create one of the simplest and most human spaces for conversation, belonging, and trust."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
