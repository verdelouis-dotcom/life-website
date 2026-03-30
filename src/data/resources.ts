export type ResourceEntry = {
  slug?: string;
  title: string;
  description: string;
  category?: string;
  type?: string;
  downloadUrl?: string;
  featured?: boolean;
};

export const RESOURCE_ENTRIES: ResourceEntry[] = [
  {
    slug: "why-shared-meals-matter",
    title: "Why Shared Meals Matter",
    description: "Understand why cooking experience at the LIFE workshop supports healthier habits, relationships, and the LIFE model.",
  },
  {
    slug: "mediterranean-cooking-for-longevity",
    title: "Mediterranean Cooking for Longevity",
    description: "Learn how simple Mediterranean-inspired cooking routines can make longevity habits easier at home.",
  },
  {
    slug: "the-six-pillars-of-life",
    title: "The Six Pillars of LIFE",
    description: "Explore how Food, Movement, Sleep, Connection, Purpose, and Stress Regulation work together.",
  },
  {
    slug: "social-connection-and-longevity",
    title: "Social Connection and Longevity",
    description: "See why belonging, shared meals, and mutual support are central to long-term wellbeing.",
  },
  {
    slug: "how-life-creates-community-health",
    title: "How LIFE Creates Community Health",
    description: "Follow the LIFE workshop → host → register cycle and how it builds measurable community health.",
  },
  {
    title: "The Six Pillars Framework — LIFE Pilot Overview",
    description:
      "The research foundation behind LIFE's approach to longevity education. Covers the Six Pillars Framework, peer-reviewed citations for each pillar, the LIFE cooking experience model, and pilot results from Atlanta and Austin.",
    category: "Research",
    type: "PDF",
    downloadUrl: "/downloads/LIFE_Six_Pillars_Framework.pdf",
    featured: true,
  },
];
