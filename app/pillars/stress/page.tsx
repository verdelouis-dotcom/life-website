import PillarPage from "../_components/pillar-page";

const WHY = [
  "When stress becomes constant, it affects sleep, mood, appetite, focus, and the ability to follow through on healthy choices.",
  "Stress regulation does not always require something complicated. In many cases, the most helpful patterns are the ones people can return to regularly: cooking, gathering, breathing, slowing down, and being present.",
];

const RESEARCH = [
  {
    title: "Chronic stress affects multiple body systems",
    body: "NCCIH says long-term stress can contribute to or worsen digestive problems, headaches, sleep problems, anxiety, depression, and other health issues.",
    sourceLabel: "Source: NCCIH",
  },
  {
    title: "Stress can make coping harder",
    body: "WHO notes that stress can make it difficult to relax, concentrate, and sleep, and chronic stress can worsen existing health problems.",
    sourceLabel: "Source: WHO",
  },
  {
    title: "Managing stress daily matters",
    body: "CDC guidance says long-term stress can worsen health problems and that managing stress regularly can help prevent chronic stress from taking hold.",
    sourceLabel: "Source: CDC",
  },
];

const LIFE_TIE_IN = [
  "LIFE creates conditions that can reduce overwhelm: shared meals, calmer rhythms, meaningful conversation, hands-on cooking, and time away from constant distraction.",
  "The LIFE gathering is not a cure-all, but it is a practical setting for nervous-system-friendly habits. It gives people a repeatable way to slow down, connect, and reset.",
];

const TAKEAWAYS = [
  "Protect moments of calm each day",
  "Use cooking and shared meals as grounding rituals",
  "Notice what raises stress and what lowers it",
  "Build simple reset practices you can repeat consistently",
];

const REFERENCES = [
  { label: "NCCIH Stress Overview", href: "https://www.nccih.nih.gov/health/stress" },
  { label: "WHO Stress Q&A", href: "https://www.who.int/news-room/questions-and-answers/item/stress" },
  { label: "CDC Managing Stress", href: "https://www.cdc.gov/mental-health/living-with/index.html" },
];

export default function StressPillarPage() {
  return (
    <PillarPage
      title="Stress Regulation"
      subtitle="A healthier life requires rhythms that help the body and mind slow down, recover, and reset."
      intro="Stress is part of life, but chronic stress can wear down both mental and physical health. LIFE values practices that are simple, social, and repeatable because healthier living has to be sustainable."
      why={WHY}
      research={RESEARCH}
      lifeTieIn={LIFE_TIE_IN}
      takeaways={TAKEAWAYS}
      references={REFERENCES}
    />
  );
}
