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
    summary: "Meals prepared with fresh ingredients, rich in plants and whole foods, support long-term health and reduce chronic disease risk.",
    intro:
      "LIFE teaches hosts how to center every table on cooking with fresh ingredients—vegetables, legumes, olive oil, and seafood—while limiting added sugars and refined oils.",
    reasons: [
      {
        heading: "Cardiometabolic protection",
        text: "The PREDIMED randomized trial showed a 31% reduction in major cardiovascular events among adults following a whole-food dietary pattern supplemented with extra-virgin olive oil or nuts compared with a low-fat control diet.",
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
      { label: "PREDIMED Trial, NEJM 2013", detail: "Whole-food dietary pattern for primary prevention of cardiovascular disease." },
      { label: "Harvard T.H. Chan School of Public Health, 2022", detail: "Whole-food dietary pattern overview." },
    ],
  },
  {
    slug: "movement",
    title: "Movement",
    color: "#7fa064",
    summary:
      "Regular movement, strength, and everyday physical activity support metabolic health, mobility, and healthy aging.",
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
    slug: "sleep",
    title: "Sleep",
    color: "#b4c4d9",
    summary: "Consistent, restorative sleep supports metabolic function, mental wellbeing, recovery, and long-term health.",
    intro:
      "Hosts treat sleep routines as part of the longevity curriculum: finishing evening meals earlier, dimming lights, and encouraging guests to use rest as the recovery window that makes every healthy change stick.",
    reasons: [
      {
        heading: "Hormone and glucose balance",
        text: "CDC sleep guidance notes that adults who regularly obtain 7+ hours show healthier insulin sensitivity, blood pressure, and weight maintenance than chronically sleep-deprived peers.",
      },
      {
        heading: "Cognitive resilience",
        text: "Sleep consolidates memory and clears metabolic waste; longitudinal cohorts such as the Harvard Aging Brain Study tie shorter sleep to faster cognitive decline.",
      },
      {
        heading: "Recovery ritual",
        text: "LIFE tables end with calming tea, breathwork, and screen-free commitments so the nervous system can downshift before bed and make the next day’s routines easier to sustain.",
      },
    ],
    references: [
      { label: "CDC Sleep and Sleep Disorders, 2024", detail: "Adults should obtain at least 7 hours of quality sleep for optimal health." },
      { label: "Harvard Medical School, 2023", detail: "Sleep and memory consolidation in aging populations." },
    ],
  },
  {
    slug: "connection",
    title: "Connection",
    color: "#4b82b3",
    summary:
      "Strong relationships, shared meals, and social support help reduce isolation and reinforce healthier, longer lives.",
    intro:
      "Every LIFE table is facilitated eye contact, gratitude rituals, and intentional prompts so each guest is seen, heard, and encouraged to invite the next table—creating a replicating, community-powered network of care.",
    reasons: [
      {
        heading: "Reduced loneliness",
        text: "The 2023 Surgeon General advisory on social connection highlighted regular, meaningful interactions as protective for heart disease, dementia, and depression.",
      },
      {
        heading: "Civic trust and reciprocity",
        text: "Robert Putnam’s social capital research found that dining with neighbors strengthens civic participation and mutual aid, both linked to longer, healthier lives.",
      },
      {
        heading: "Shared-resource safety net",
        text: "Hosts log each table, trade produce and caregiving time, and keep invitations circulating so neighbors have a reliable micro-community for future support or emergencies.",
      },
    ],
    references: [
      { label: "U.S. Surgeon General Advisory, 2023", detail: "Our Epidemic of Loneliness and Isolation." },
      { label: "Robert Putnam, Bowling Alone", detail: "Social capital and public health." },
      { label: "Journal of Psychosomatic Research, 2021", detail: "Oxytocin release during communal eating." },
    ],
  },
  {
    slug: "purpose",
    title: "Purpose",
    color: "#d17a4e",
    summary:
      "A clear sense of meaning, contribution, and direction is associated with resilience, wellbeing, and healthy aging.",
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
    summary:
      "Daily practices that calm the nervous system support emotional wellbeing, digestion, recovery, and long-term health.",
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
