export type PillarDetail = {
  slug: string;
  title: string;
  color: string;
  summary: string;
  intro: string;
  reasons: { heading: string; text: string }[];
  references: { label: string; detail: string }[];
};

export const PILLARS: PillarDetail[] = [
  {
    slug: "food",
    title: "Food",
    color: "#5e7d5a",
    summary: "Mediterranean-style meals rich in plants, healthy fats, and minimal ultra-processed foods reduce chronic disease risk.",
    intro:
      "LIFE teaches hosts how to center every table on Mediterranean eating patterns that prioritize vegetables, legumes, olive oil, and seafood while limiting added sugars and refined oils.",
    reasons: [
      {
        heading: "Cardiometabolic protection",
        text: "The PREDIMED randomized trial showed a 31% reduction in major cardiovascular events among adults following a Mediterranean dietary pattern supplemented with extra-virgin olive oil or nuts compared with a low-fat control diet.",
      },
      {
        heading: "Longevity-linked nutrients",
        text: "High intake of polyphenols, fiber, and omega-3 fats correlates with lower inflammation and healthier aging trajectories in cohorts studied by Harvard T.H. Chan School of Public Health.",
      },
      {
        heading: "Practicality at home",
        text: "Simple pantry staples—beans, tomatoes, greens, citrus, and whole grains—allow hosts to repeat the model monthly without industrial ingredients.",
      },
    ],
    references: [
      { label: "PREDIMED Trial, NEJM 2013", detail: "Mediterranean diet for primary prevention of cardiovascular disease." },
      { label: "Harvard T.H. Chan School of Public Health, 2022", detail: "Mediterranean diet overview." },
    ],
  },
  {
    slug: "movement",
    title: "Movement",
    color: "#7fa064",
    summary: "Low-intensity, frequent movement during cooking, hosting, and cleanup improves metabolic health without requiring a gym.",
    intro:
      "The host flow bakes in walking, chopping, lifting cookware, and standing conversations—meeting the World Health Organization’s recommendation for regular moderate movement.",
    reasons: [
      {
        heading: "Metabolic boosts",
        text: "WHO guidelines show that 150 minutes of moderate activity weekly lowers all-cause mortality by 20–30%. LIFE tables encourage cumulative movement bursts every month.",
      },
      {
        heading: "Functional strength",
        text: "Handling ingredients, stirring, kneading dough, and setting tables train grip strength and balance—predictors of independence in longevity research.",
      },
      {
        heading: "Social accountability",
        text: "Guests move together—shopping at farmers markets, prepping ingredients, or taking post-meal walks—which increases adherence compared with exercising alone.",
      },
    ],
    references: [
      { label: "World Health Organization, 2020", detail: "Physical Activity Guidelines for Adults." },
      { label: "British Journal of Sports Medicine, 2022", detail: "Grip strength as a mortality predictor." },
    ],
  },
  {
    slug: "connection",
    title: "Connection",
    color: "#4b82b3",
    summary: "Shared meals combat isolation—a risk factor comparable to smoking 15 cigarettes per day, according to the U.S. Surgeon General.",
    intro:
      "The LIFE table requires eye contact, gratitude rituals, and intentional prompts so every guest is seen and heard.",
    reasons: [
      {
        heading: "Reduced loneliness",
        text: "The 2023 Surgeon General advisory on social connection highlighted regular, meaningful interactions as protective for heart disease, dementia, and depression.",
      },
      {
        heading: "Neurochemical benefits",
        text: "Face-to-face meals increase oxytocin and serotonin, which buffer stress hormones that accelerate aging.",
      },
      {
        heading: "Resilience network",
        text: "Hosts log every table so neighbors can be re-invited, building a reliable micro-community for future caregiving or emergencies.",
      },
    ],
    references: [
      { label: "U.S. Surgeon General Advisory, 2023", detail: "Our Epidemic of Loneliness and Isolation." },
      { label: "Journal of Psychosomatic Research, 2021", detail: "Oxytocin release during communal eating." },
    ],
  },
  {
    slug: "community",
    title: "Community",
    color: "#6ea1d4",
    summary: "Scaling from one host to neighborhoods multiplies the impact—78 tables per year from one pilot becomes hundreds across zip codes.",
    intro:
      "The replication math invites guests to host the next table within 30 days, creating a daisy chain of shared meals measured through the register portal.",
    reasons: [
      {
        heading: "Civic trust",
        text: "Robert Putnam’s research shows that dining with neighbors increases civic participation and mutual aid, both linked to longer, healthier lives.",
      },
      {
        heading: "Resource sharing",
        text: "Communities trade garden produce, heirloom recipes, and caregiving time, lowering total program cost per household.",
      },
      {
        heading: "Data transparency",
        text: "Each registered table logs people, cities, and invitations, creating public-benefit evidence for funders and policymakers.",
      },
    ],
    references: [
      { label: "Putnam, Bowling Alone, 2000", detail: "Social capital and public health." },
      { label: "LIFE Register Data (internal)", detail: "Monthly replication logs." },
    ],
  },
  {
    slug: "purpose",
    title: "Purpose",
    color: "#d17a4e",
    summary: "Hosts anchor their month around the table, giving them a role, schedule, and tangible contribution to community health.",
    intro:
      "Purpose is one of the strongest predictors of longevity in Blue Zones research. Hosting provides a clear mission and the accountability of guests expecting the next meal.",
    reasons: [
      {
        heading: "Psychological buffering",
        text: "The Rush Memory and Aging Project found that higher purpose scores reduced Alzheimer’s risk by 30%.", 
      },
      {
        heading: "Identity and pride",
        text: "Hosts collect stories, metrics, and photos, reinforcing that their kitchen is a neighborhood health asset.",
      },
      {
        heading: "Intergenerational impact",
        text: "Purposeful hosts involve children and elders in prep, passing down cultural rituals while learning new ones.",
      },
    ],
    references: [
      { label: "Rush Memory and Aging Project, 2015", detail: "Purpose in life and Alzheimer’s risk." },
      { label: "Blue Zones, Dan Buettner", detail: "Purpose (Ikigai) in longevity hotspots." },
    ],
  },
  {
    slug: "stress-regulation",
    title: "Stress Regulation",
    color: "#f0ad63",
    summary: "Slow cooking, mindful eating, and guided conversation regulate cortisol and improve digestion.",
    intro:
      "Hosts facilitate breathing prompts, gratitude questions, and screen-free dining so guests downshift from chronic stress.",
    reasons: [
      {
        heading: "Parasympathetic activation",
        text: "Chewing slowly, savoring herbs, and engaging senses stimulates the vagus nerve, which lowers heart rate and blood pressure.",
      },
      {
        heading: "Digestive health",
        text: "Mindful eating decreases irritable bowel symptoms and improves glucose control, per a 2020 meta-analysis in Nutrients.",
      },
      {
        heading: "Sleep readiness",
        text: "Evening tables end with reflective prompts and herbal teas, improving sleep onset per American Academy of Sleep Medicine guidance.",
      },
    ],
    references: [
      { label: "Nutrients Journal, 2020", detail: "Mindful eating and metabolic markers." },
      { label: "American Academy of Sleep Medicine, 2021", detail: "Stress management practices for better sleep." },
    ],
  },
];

export function getPillarBySlug(slug: string) {
  return PILLARS.find((pillar) => pillar.slug === slug);
}
