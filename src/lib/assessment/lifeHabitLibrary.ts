import type { PillarKey } from "@/components/assessment/AssessmentTypes";

export interface HabitCue {
  title: string;
  description: string;
  cueExample?: string;
}

export interface LifeHabitGuide {
  key: PillarKey;
  title: string;
  summary: string;
  habits: HabitCue[];
  reinforcementIdeas: string[];
}

export const LIFE_HABIT_LIBRARY: Record<PillarKey, LifeHabitGuide> = {
  food: {
    key: "food",
    title: "Food",
    summary:
      "Meals built from fresh ingredients, plants, and healthy fats stabilize blood sugar, reduce inflammation, and reinforce shared tables.",
    habits: [
      {
        title: "Half-plate produce",
        description: "Aim for vegetables or fruit to cover half the plate, then layer beans, whole grains, or seafood.",
        cueExample: "Prep pre-washed greens or chopped vegetables on Sundays so they’re ready for quick meals.",
      },
      {
        title: "Batch cook anchors",
        description: "Cook a pot of beans, soup, or grains twice a week so home-cooked meals stay simple.",
      },
      {
        title: "Hydrate before sweet",
        description: "Drink water or unsweet tea first, especially when cravings for soda or desserts hit.",
      },
    ],
    reinforcementIdeas: ["Plan shared meals each weekend", "Shop the perimeter of markets first", "Keep fruit visible on the counter"],
  },
  movement: {
    key: "movement",
    title: "Movement",
    summary: "Blend natural movement, strength, and lower sedentary time to protect metabolic health and mobility.",
    habits: [
      {
        title: "Movement snacks",
        description: "Insert short walks, stair laps, or stretches every hour to offset sitting.",
      },
      {
        title: "Two strength anchors",
        description: "Schedule two dedicated muscle-challenging sessions weekly—bodyweight, resistance bands, or carrying loads.",
      },
      {
        title: "Active hosting",
        description: "Turn LIFE meal prep, gardening, or setup into functional movement time.",
      },
    ],
    reinforcementIdeas: ["Pair calls with walks", "Keep a kettlebell or mat visible", "Use a sit-stand or floor workspace"],
  },
  sleep: {
    key: "sleep",
    title: "Sleep",
    summary: "Consistent, restorative nights enable hormone balance, cognitive resilience, and appetite control.",
    habits: [
      {
        title: "Wind-down ritual",
        description: "Protect the final hour before bed with low light, gentle stretches, or reading.",
        cueExample: "Set a cue light or phone reminder 60 minutes before bed.",
      },
      {
        title: "Finish meals earlier",
        description: "Aim to finish dinner 2–3 hours before bed to aid digestion and glucose control.",
      },
      {
        title: "Consistent wake time",
        description: "Hold a wake-time anchor within 30 minutes daily, even on weekends.",
      },
    ],
    reinforcementIdeas: ["Dim lamps after dinner", "Keep bedroom cooler", "Reserve the bed for sleep or intimacy only"],
  },
  connection: {
    key: "connection",
    title: "Connection",
    summary: "Shared meals, supportive relationships, and belonging buffer stress and improve adherence to healthy habits.",
    habits: [
      {
        title: "Standing shared meal",
        description: "Host or attend one planned shared meal each week—phones away, conversation on.",
      },
      {
        title: "Reach-out ritual",
        description: "Text, call, or voice-note someone daily to strengthen reciprocity.",
      },
      {
        title: "Community loop",
        description: "Join or create a simple gathering: walking club, volunteer shift, neighborhood table.",
      },
    ],
    reinforcementIdeas: ["Use the LIFE host guide", "Rotate potluck roles", "Keep a gratitude list for friends and neighbors"],
  },
  purpose: {
    key: "purpose",
    title: "Purpose",
    summary: "A clear sense of meaning ties routines to impact, improving consistency and resilience.",
    habits: [
      {
        title: "Purpose journaling",
        description: "Weekly, note who benefits when you show up energetic—family, students, neighbors.",
      },
      {
        title: "Value-linked routines",
        description: "Tie movement, cooking, and rest to the bigger role you want to play.",
      },
      {
        title: "Contribution calendar",
        description: "Block monthly service, mentoring, or caregiving time to reinforce identity.",
      },
    ],
    reinforcementIdeas: ["Share goals at LIFE tables", "Track purpose wins", "Mentor someone learning the model"],
  },
  stressRegulation: {
    key: "stressRegulation",
    title: "Stress Regulation",
    summary: "Daily decompression protects the nervous system, digestion, and long-term healthspan.",
    habits: [
      {
        title: "Micro resets",
        description: "Use 2–5 minute breathing, prayer, or mindfulness practices throughout the day.",
      },
      {
        title: "Outdoor decompression",
        description: "Schedule time outside—walks, sunlight, gardening, stretching on the porch.",
      },
      {
        title: "Screens-off buffers",
        description: "Add short buffers before/after stressful meetings, news, or social media.",
      },
    ],
    reinforcementIdeas: ["Keep a regulation toolkit (tea, journal, mat)", "Stack breathwork onto existing routines", "Share calming rituals at LIFE tables"],
  },
};
