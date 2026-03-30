import type { PillarKey } from "@/components/assessment/AssessmentTypes";
import { PILLARS } from "@/data/pillars";

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
      "Meals built from fresh ingredients, plants, and healthy fats stabilize blood sugar, reduce inflammation, and reinforce shared LIFE workshops.",
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
        description: "Join or create a simple cooking experience: walking club, volunteer shift, neighborhood LIFE workshop.",
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
    reinforcementIdeas: ["Share goals at LIFE workshops", "Track purpose wins", "Mentor someone learning the model"],
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
    reinforcementIdeas: ["Keep a regulation toolkit (tea, journal, mat)", "Stack breathwork onto existing routines", "Share calming rituals at LIFE workshops"],
  },
};

export function getPillarBySlug(slug: string) {
  return PILLARS.find((pillar) => pillar.slug === slug);
}

// ────────────────────────────────────────────────────────────────────────────────
// Tracker data (used by the LIFE Habit Tracker)

export type TrackerPillarKey = "food" | "movement" | "sleep" | "connection" | "purpose" | "stress";

export type TrackerHabitDifficulty = "Easy" | "Medium" | "Bold";

export type TrackerHabit = {
  id: string;
  task: string;
  micro: string;
  stack?: string;
  pillars: TrackerPillarKey[];
  points: number;
  difficulty: TrackerHabitDifficulty;
  weekly: boolean;
  minLevel: number;
};

export type TrackerLevel = {
  level: number;
  name: string;
  color: string;
  description: string;
  pointsRequired: number;
  streakRequired: number;
  tablesRequired: number;
  unlocks: string;
  hostPath?: boolean;
};

export const TRACKER_PILLARS: { id: TrackerPillarKey; name: string; color: string; bg: string }[] = [
  { id: "food", name: "Food", color: "#2C5239", bg: "#EAF3DE" },
  { id: "movement", name: "Movement", color: "#A0522D", bg: "#FAECE7" },
  { id: "sleep", name: "Sleep", color: "#3D4A6B", bg: "#E8EAFA" },
  { id: "connection", name: "Connection", color: "#8A6A00", bg: "#FFF3CC" },
  { id: "purpose", name: "Purpose", color: "#6B7A50", bg: "#EEF3E4" },
  { id: "stress", name: "Stress", color: "#5A4B8A", bg: "#EEEDFE" },
];

export const TRACKER_LEVELS: TrackerLevel[] = [
  { level: 1, name: "Beginner", color: "#6B7A50", description: "Starting your LIFE journey", pointsRequired: 0, streakRequired: 0, tablesRequired: 0, unlocks: "Full habit library · Welcome badge" },
  { level: 2, name: "Apprentice", color: "#5A7A50", description: "First week complete", pointsRequired: 100, streakRequired: 7, tablesRequired: 0, unlocks: "Weekly habits · 7-day badge" },
  { level: 3, name: "Practitioner", color: "#2C7A40", description: "One month of daily practice", pointsRequired: 400, streakRequired: 21, tablesRequired: 0, unlocks: "Bold habits · 21-day badge · LIFE Guide PDF" },
  { level: 4, name: "Gatherer", color: "#A0522D", description: "Habits becoming routine", pointsRequired: 900, streakRequired: 30, tablesRequired: 0, unlocks: "Community challenges · 30-day badge" },
  { level: 5, name: "Table Keeper", color: "#B8560A", description: "Halfway to mastery", pointsRequired: 1800, streakRequired: 60, tablesRequired: 0, unlocks: "Host toolkit · 60-day badge · Stats dashboard" },
  { level: 6, name: "Steward", color: "#8A6A00", description: "Lifestyle shift achieved", pointsRequired: 3000, streakRequired: 90, tablesRequired: 0, unlocks: "Mentor a beginner · 90-day badge" },
  { level: 7, name: "Guide", color: "#5A4B8A", description: "Host 1 table OR earn via practice", pointsRequired: 5000, streakRequired: 120, tablesRequired: 1, unlocks: "LIFE Partner status · Guide badge · Advanced library", hostPath: true },
  { level: 8, name: "Elder", color: "#3D4A6B", description: "Host 3 tables OR earn via practice", pointsRequired: 8000, streakRequired: 180, tablesRequired: 3, unlocks: "Franchise eligibility · Elder badge · LIFE wall", hostPath: true },
  { level: 9, name: "Sage", color: "#1E3A28", description: "Host 6 tables OR earn via practice", pointsRequired: 12000, streakRequired: 270, tablesRequired: 6, unlocks: "LIFE Ambassador · Annual recognition · Sage badge", hostPath: true },
  { level: 10, name: "Longevity Expert", color: "#B8933A", description: "365 days. The summit.", pointsRequired: 20000, streakRequired: 365, tablesRequired: 0, unlocks: "Co-creator status · Gold badge · Shape next city launch" },
];

const HABIT_DATA: TrackerHabit[] = [
  { id: "h1_water", task: "Drink one full glass of water before your first meal", micro: "Glass on the counter when you wake up.", stack: "Stack onto: waking up", pillars: ["food"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h1_fruit", task: "Eat one whole fruit or vegetable today", micro: "One piece. Whole food. Not juice.", stack: "Stack onto: breakfast or any snack", pillars: ["food"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h1_walk", task: "Walk outside for 5 minutes", micro: "To the mailbox, around the block. Just outside.", stack: "Stack onto: after lunch or school drop-off", pillars: ["movement", "stress"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h1_convo", task: "One conversation with a family member — phone face down", micro: "Phone down. Eye contact. At least 2 minutes.", stack: "Stack onto: dinner — phone in another room", pillars: ["connection"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h1_bed", task: "Be in bed 15 minutes earlier than usual", micro: "In bed. Lights out. 15 minutes earlier.", stack: "Stack onto: set a phone alarm 15 mins before normal bedtime", pillars: ["sleep"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h1_grateful", task: "Tell one family member one thing you appreciate about them", micro: "Out loud. Specific. Today.", stack: "Stack onto: dinner or bedtime", pillars: ["purpose", "connection"], points: 1, difficulty: "Easy", weekly: false, minLevel: 1 },
  { id: "h2_water", task: "Drink 4 glasses of water today", micro: "Count them. One at each meal plus one at wake-up.", stack: "Refill at every meal", pillars: ["food"], points: 2, difficulty: "Easy", weekly: false, minLevel: 2 },
  { id: "h2_swap", task: "Replace one packaged snack with a whole food", micro: "Chips to apple. Crackers to nuts. One swap.", stack: "Stack onto: afternoon snack", pillars: ["food"], points: 2, difficulty: "Easy", weekly: false, minLevel: 2 },
  { id: "h2_walk10", task: "Walk outside for 10 minutes", micro: "Same time every day starts the habit.", stack: "After dinner — once around the block", pillars: ["movement", "stress"], points: 2, difficulty: "Easy", weekly: false, minLevel: 2 },
  { id: "h2_nophone", task: "No phones during any family meal today", micro: "All phones face down or in another room for the whole meal.", stack: "Every meal becomes the trigger", pillars: ["connection", "food"], points: 2, difficulty: "Easy", weekly: false, minLevel: 2 },
  { id: "h2_screens", task: "No screens for 30 minutes before bed", micro: "TV, phone, tablet all off 30 mins before lights out.", stack: "Set a 'wind down' alarm 30 mins before bedtime", pillars: ["sleep", "stress"], points: 2, difficulty: "Easy", weekly: false, minLevel: 2 },
  { id: "h3_water6", task: "Drink 6 glasses of water — no sugary drinks today", micro: "6 glasses. Zero soda, juice, or energy drinks.", stack: "Water bottle visible on counter or desk", pillars: ["food"], points: 2, difficulty: "Easy", weekly: false, minLevel: 3 },
  { id: "h3_cook", task: "Cook one meal from scratch using whole ingredients", micro: "Scrambled eggs count. Pasta with olive oil counts. No packet sauces.", stack: "Replace one takeout or packaged meal", pillars: ["food"], points: 3, difficulty: "Easy", weekly: false, minLevel: 3 },
  { id: "h3_walkfam", task: "Walk for 10 minutes with at least one family member", micro: "Outside. Together. 10 minutes. Phones pocketed.", stack: "After dinner — make it the family default", pillars: ["movement", "connection", "stress"], points: 3, difficulty: "Medium", weekly: false, minLevel: 3 },
  { id: "h3_meals", task: "Phone-free family meal every day this week", micro: "Every meal. Every day. Phones in another room.", stack: "Basket by door — phones go in before dinner", pillars: ["connection", "food"], points: 3, difficulty: "Medium", weekly: false, minLevel: 3 },
  { id: "h3_bedtime", task: "Same bedtime 3 nights in a row", micro: "Within 15 minutes of the same time, 3 consecutive nights.", stack: "Pick a time. Set recurring alarm tonight.", pillars: ["sleep"], points: 3, difficulty: "Easy", weekly: false, minLevel: 3 },
  { id: "h4_cook4", task: "Cook from scratch 4 days this week — whole ingredients only", micro: "Nothing with more than 5 ingredients on the label.", stack: "Batch cook Sunday to make weeknights easier", pillars: ["food"], points: 3, difficulty: "Medium", weekly: true, minLevel: 4 },
  { id: "h4_walk20", task: "20-minute family walk — 3 times this week", micro: "20 minutes. Together. 3 separate days.", stack: "After dinner — same time every day", pillars: ["movement", "connection", "stress"], points: 4, difficulty: "Medium", weekly: true, minLevel: 4 },
  { id: "h4_sleep", task: "Consistent bedtime and no screens 45 mins before bed — every night", micro: "Both conditions. Every night this week.", stack: "One alarm for wind-down, one for lights out", pillars: ["sleep", "stress"], points: 4, difficulty: "Medium", weekly: false, minLevel: 4 },
  { id: "h4_grateful", task: "Each family member names one thing grateful for at dinner", micro: "Everyone says one. Out loud. At the table.", stack: "Stack onto: the phone-free dinner already established", pillars: ["purpose", "connection"], points: 3, difficulty: "Easy", weekly: false, minLevel: 4 },
  { id: "h4_breath", task: "4-7-8 breath before your biggest meal today", micro: "Inhale 4, hold 7, exhale 8. Twice. Under 2 minutes.", stack: "Stack onto: sitting down at the dinner table", pillars: ["stress"], points: 2, difficulty: "Easy", weekly: false, minLevel: 4 },
  { id: "h5_famcook", task: "Cook a full family meal together — everyone has a role", micro: "Everyone participates. Scratch ingredients. No phones.", stack: "Sunday dinner becomes the weekly anchor meal", pillars: ["food", "connection", "purpose"], points: 5, difficulty: "Medium", weekly: true, minLevel: 5 },
  { id: "h5_walkevery", task: "Family walk after dinner — every night this week", micro: "Every night. Together. Minimum 15 minutes.", stack: "It's already 3x — now lock in every night", pillars: ["movement", "connection", "stress"], points: 5, difficulty: "Medium", weekly: true, minLevel: 5 },
  { id: "h5_fullsleep", task: "Full sleep routine — consistent bed/wake time + no screens 45 mins before bed all week", micro: "All three conditions. All week.", stack: "One alarm for wind-down, one for lights out", pillars: ["sleep", "stress"], points: 4, difficulty: "Bold", weekly: false, minLevel: 5 },
  { id: "h5_neighbor", task: "Learn the name of one neighbor you don't know yet", micro: "A real name. From a real conversation.", stack: "Next time you see them — introduce yourself", pillars: ["connection", "purpose"], points: 3, difficulty: "Easy", weekly: false, minLevel: 5 },
  { id: "h5_phonefree", task: "One completely phone-free evening this week", micro: "No phones from dinner until bed. One full evening.", stack: "Pick the calmest night and protect it", pillars: ["stress", "connection", "sleep"], points: 5, difficulty: "Bold", weekly: true, minLevel: 5 },
  { id: "h6_cookdaily", task: "Cook from scratch daily — no ultra-processed food at home", micro: "If it has more than 5 ingredients, put it back.", stack: "Weekly shop: read labels before buying", pillars: ["food"], points: 4, difficulty: "Bold", weekly: false, minLevel: 6 },
  { id: "h6_workout", task: "One structured movement session — gym, yoga, pilates, or home workout", micro: "One dedicated session. 20 minutes minimum.", stack: "Replace one hour of screen time this week", pillars: ["movement", "stress", "purpose"], points: 5, difficulty: "Medium", weekly: true, minLevel: 6 },
  { id: "h6_sleep", task: "Full sleep routine every night — no exceptions", micro: "The exceptions are where habits die. Hold the line.", stack: "Non-negotiable from this level forward", pillars: ["sleep"], points: 3, difficulty: "Medium", weekly: false, minLevel: 6 },
  { id: "h6_purpose", task: "Do one thing each week purely for someone else", micro: "A favor, a meal, a visit. No transaction. Just showing up.", stack: "Stack onto: the weekly anchor meal — invite someone", pillars: ["purpose", "connection"], points: 4, difficulty: "Medium", weekly: true, minLevel: 6 },
  { id: "h6_silence", task: "5 minutes of silence daily — no phone, no input", micro: "5 minutes. Alone. Quiet. Every day.", stack: "Stack onto: morning coffee before anything else", pillars: ["stress"], points: 3, difficulty: "Medium", weekly: false, minLevel: 6 },
  { id: "h7_table", task: "Host one LIFE cooking experience — cook together, share the guide", micro: "4–6 people. Cooked from scratch. Guide shared. Verified by LIFE HQ.", pillars: ["connection", "purpose", "food"], points: 8, difficulty: "Bold", weekly: true, minLevel: 7 },
  { id: "h7_share", task: "Share the LIFE Guide with one family who needs it", micro: "One family. Personal recommendation. Not a link — a conversation.", pillars: ["purpose", "connection"], points: 5, difficulty: "Medium", weekly: true, minLevel: 7 },
  { id: "h7_mentor", task: "Mentor one family through Levels 1–3", micro: "Check in weekly. Cook together once. Answer their questions.", pillars: ["purpose", "connection"], points: 5, difficulty: "Bold", weekly: true, minLevel: 7 },
  { id: "w_church", task: "Attend church or faith community", micro: "Belonging to something larger is one of the oldest longevity habits.", pillars: ["connection", "purpose", "stress"], points: 7, difficulty: "Medium", weekly: true, minLevel: 2 },
  { id: "w_games", task: "Family game night — phones in a drawer", micro: "Laughter, competition, presence.", pillars: ["connection", "purpose", "stress"], points: 6, difficulty: "Easy", weekly: true, minLevel: 2 },
  { id: "w_volunteer", task: "Volunteer in your community for one hour", micro: "The feeling of being needed is one of the most protective forces in health.", pillars: ["connection", "purpose"], points: 7, difficulty: "Medium", weekly: true, minLevel: 4 },
  { id: "w_civic", task: "Attend a civic or service meeting", micro: "Neighborhood association, school board, local council. Show up.", pillars: ["connection", "purpose"], points: 8, difficulty: "Bold", weekly: true, minLevel: 5 },
  { id: "w_gym", task: "Go to the gym", micro: "Dedicated strength or cardio session.", pillars: ["movement", "stress", "purpose"], points: 5, difficulty: "Medium", weekly: false, minLevel: 3 },
  { id: "w_yoga", task: "Yoga or Pilates session", micro: "Flexibility, strength, breath. Body and mind together.", pillars: ["movement", "stress"], points: 4, difficulty: "Medium", weekly: false, minLevel: 3 },
];

export const TRACKER_HABITS: TrackerHabit[] = HABIT_DATA;
export const TRACKER_MIN_DAILY_POINTS = 15;
export const TRACKER_STATE_KEY = "life_v4";
