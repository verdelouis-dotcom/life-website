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

const GUIDE_BASE: Record<PillarKey, Omit<LifeHabitGuide, "habits">> = {
  food: {
    key: "food",
    title: "Food",
    summary:
      "Meals built from fresh ingredients, plants, and healthy fats stabilize blood sugar, reduce inflammation, and reinforce shared LIFE workshops.",
    reinforcementIdeas: [
      "Plan shared meals each weekend",
      "Shop the perimeter of markets first",
      "Keep fruit visible on the counter",
    ],
  },
  movement: {
    key: "movement",
    title: "Movement",
    summary: "Blend natural movement, strength, and lower sedentary time to protect metabolic health and mobility.",
    reinforcementIdeas: ["Pair calls with walks", "Keep a kettlebell or mat visible", "Use a sit-stand or floor workspace"],
  },
  sleep: {
    key: "sleep",
    title: "Sleep",
    summary: "Consistent, restorative nights enable hormone balance, cognitive resilience, and appetite control.",
    reinforcementIdeas: ["Dim lamps after dinner", "Keep bedroom cooler", "Reserve the bed for sleep or intimacy only"],
  },
  connection: {
    key: "connection",
    title: "Connection",
    summary: "Shared meals, supportive relationships, and belonging buffer stress and improve adherence to healthy habits.",
    reinforcementIdeas: ["Use the LIFE host guide", "Rotate potluck roles", "Keep a gratitude list for friends and neighbors"],
  },
  purpose: {
    key: "purpose",
    title: "Purpose",
    summary: "A clear sense of meaning ties routines to impact, improving consistency and resilience.",
    reinforcementIdeas: ["Share goals at LIFE workshops", "Track purpose wins", "Mentor someone learning the model"],
  },
  stressRegulation: {
    key: "stressRegulation",
    title: "Stress Regulation",
    summary: "Daily decompression protects the nervous system, digestion, and long-term healthspan.",
    reinforcementIdeas: [
      "Keep a regulation toolkit (tea, journal, mat)",
      "Stack breathwork onto existing routines",
      "Share calming rituals at LIFE workshops",
    ],
  },
};

export function getPillarBySlug(slug: string) {
  return PILLARS.find((pillar) => pillar.slug === slug);
}

type HabitPillarKey = "food" | "movement" | "sleep" | "connection" | "purpose" | "stress";

type HabitDifficulty = "Easy" | "Medium" | "Bold";

type RawHabitSpec = {
  id: string;
  pillar: HabitPillarKey;
  text: string;
  points: number;
  difficulty: HabitDifficulty;
  weekly: boolean;
  minLevel: number;
  stack?: string;
};

const createHabit = (
  pillar: HabitPillarKey,
  id: string,
  text: string,
  options: Partial<Omit<RawHabitSpec, "pillar" | "id" | "text">> = {}
): RawHabitSpec => ({
  pillar,
  id,
  text,
  points: options.points ?? 3,
  difficulty: options.difficulty ?? "Medium",
  weekly: options.weekly ?? false,
  minLevel: options.minLevel ?? 1,
  stack: options.stack,
});

const HABIT_SPECS: RawHabitSpec[] = [
  // Food (11)
  createHabit("food", "food_remove_processed", "Remove highly processed food from your home — if it comes in a bag or a box with more than 5 ingredients, it doesn't belong in your kitchen", {
    difficulty: "Bold",
    points: 4,
    minLevel: 2,
  }),
  createHabit("food", "food_fast_food_poison", "Treat fast food as poison — your body does not know what to do with it and neither does your brain", {
    difficulty: "Bold",
    points: 4,
    minLevel: 3,
  }),
  createHabit("food", "food_meal_vegetables", "Build every meal around vegetables — they are superchargers for your body and mind", { difficulty: "Medium", points: 3 }),
  createHabit("food", "food_add_legumes", "Add legumes to your diet — beans, lentils, chickpeas — throw them in soups, salads, and pasta — they are cheap, filling, and among the most powerful longevity foods on earth", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("food", "food_whole_snacks", "Eat whole food snacks — nuts, fruit, vegetables — and eliminate packaged snacks from the house entirely", { difficulty: "Easy", points: 2 }),
  createHabit("food", "food_family_cooking", "Cook as many meals from scratch as you can and prepare them with your family — get the kids off screens and make this a family tradition", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("food", "food_water_primary", "Drink water as your primary drink — eliminate soda and sugary drinks completely", { difficulty: "Easy", points: 2 }),
  createHabit("food", "food_refined_sugar", "Treat refined sugar the way you treat fast food — as poison — it drives cancer, heart disease, diabetes, and cognitive decline — and it is addictive by design, the food industry engineered it that way — breaking the habit is one of the single most important things you can do for your long term health and your children's health", {
    difficulty: "Bold",
    points: 4,
    minLevel: 3,
  }),
  createHabit("food", "food_healthy_oils", "Cook with healthy oils — olive oil, avocado oil, and coconut oil are all excellent choices — replace vegetable oil, canola oil, and seed oils completely", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("food", "food_dinner_together", "Sit down together for dinner every night — no screens, no exceptions, no excuses — this is where your family heals, where everyone feels safe and heard, where the habits of a lifetime get passed down", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("food", "food_recipe_book", "Create a family recipe book — start a 3-ring binder with your favorite recipes, print them, add to it over time — this becomes your family's most valuable heirloom", {
    difficulty: "Medium",
    points: 3,
    minLevel: 2,
  }),

  // Movement (9)
  createHabit("movement", "move_walk_after_dinner", "Walk after dinner — even a quick loop around the block — this single habit reduces blood sugar, aids digestion, improves sleep, and gives your family uninterrupted time together", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("movement", "move_park_further", "Park further away — from the office, the grocery store, everywhere — the extra steps add up to years", { difficulty: "Easy", points: 2 }),
  createHabit("movement", "move_household_tasks", "Household tasks count as movement — cooking, cleaning, gardening, carrying groceries, stairs, laundry — this is how communities stay active into their 90s", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("movement", "move_break_sitting", "Break up sitting every 45 minutes — stand up, stretch, walk to another room — prolonged sitting is harmful even if you exercise regularly", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("movement", "move_find_activity", "Find something you enjoy that involves moving your body and do it often — Pilates, yoga, pickleball, rock climbing, hiking, gardening, swimming, dancing — it doesn't matter what it is, it matters that you love it", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("movement", "move_family_outing", "Get outside and move as a family at least once a week — a walk, a hike, a bike ride — it doesn't matter what it is", {
    difficulty: "Medium",
    points: 4,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("movement", "move_kid_activity", "Sign your kids up for a physical activity they choose — when kids find movement they love early, they carry it for life", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("movement", "move_calls_standing", "Take phone calls standing up or walking — you're already on the phone, use the time", { difficulty: "Easy", points: 2 }),
  createHabit("movement", "move_garden", "Garden — it's movement, it's mindfulness, it's food, and it's one of the most common habits in every long-lived community on earth", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
  }),

  // Sleep (9)
  createHabit("sleep", "sleep_consistent_bedtime", "Set a consistent bedtime and keep it — your body's clock runs on consistency, not just hours — going to bed at the same time every night is the single most impactful sleep change you can make", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("sleep", "sleep_no_screens", "No screens for 45 minutes before bed — blue light from phones and televisions delays sleep by 1–3 hours — replace the scroll with conversation, reading, or simply sitting together", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("sleep", "sleep_cool_dark", "Keep your bedroom cool and dark — the ideal sleep temperature is 65–68°F — darkness triggers melatonin — both together signal your body it's time to rest", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("sleep", "sleep_phone_outside", "Keep your phone outside your bedroom or out of reach — the last thing you see before sleep and the first thing you reach for in the morning should not be a screen", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("sleep", "sleep_kid_bedtime", "Set a consistent bedtime for your kids and enforce it — no exceptions on school nights — their developing brains need 9–11 hours to function, grow, and heal", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("sleep", "sleep_wind_down", "Create a 10-minute wind-down ritual — the same sequence every night signals your nervous system that it's safe to rest", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("sleep", "sleep_consistent_wake", "Wake up at the same time every day including weekends — consistency is more powerful than duration", {
    difficulty: "Medium",
    points: 3,
    minLevel: 2,
  }),
  createHabit("sleep", "sleep_nap", "Take a nap when your body asks for one — a 20-minute nap can make up for an hour of lost sleep and keeps you sharp for the rest of the day", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("sleep", "sleep_midnight_review", "If you are waking in the middle of the night, look at these four things first — screens before bed, alcohol in the evening, overeating at dinner, and unmanaged stress during the day — fix one of them before you reach for a sleep aid", {
    difficulty: "Bold",
    points: 4,
    minLevel: 3,
  }),

  // Connection (10)
  createHabit("connection", "connect_know_neighbors", "Know your neighbors by name — introduce yourself, show up when they need something, accept help when you need it — this is how communities survive", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("connection", "connect_call_not_text", "Call someone you love instead of texting them — voice activates the parts of the brain associated with bonding in a way that a text message never will", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("connection", "connect_dinner_question", "Ask your kids and your partner one real question at dinner every night — not 'how was your day' — try 'what made you laugh today?' or 'what's something hard you're dealing with right now?' — the quality of your family conversations determines the quality of your family connection", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("connection", "connect_show_up", "Show up for people without being asked — drop off a meal, check in on a neighbor, be the person your community can count on", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("connection", "connect_join_group", "Join a local club, team, or group that meets regularly — pickleball league, book club, running group, Rotary — it doesn't matter what it is, it matters that you show up consistently", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("connection", "connect_neighbors_alone", "Know which neighbors live alone — check on them, include them, be the reason they don't feel invisible", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("connection", "connect_faith", "Join a faith community if it aligns with your values — the data is clear that people who belong to one live longer, healthier, more connected lives", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("connection", "connect_moai", "Find your moai — a small group of 4–6 people who share your values and meet regularly — this is the Okinawan secret to lifelong connection", {
    difficulty: "Bold",
    points: 4,
    weekly: true,
    minLevel: 3,
  }),
  createHabit("connection", "connect_volunteer", "Volunteer regularly — people who give their time live longer, report higher purpose, and are measurably less lonely", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("connection", "connect_teach", "Teach something you know to someone who doesn't — a skill, a recipe, a trade — contribution is connection", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
  }),

  // Purpose (11)
  createHabit("purpose", "purpose_model_passion", "Let your kids see you doing something you love — children who watch their parents pursue purpose grow up believing they are allowed to have one too", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("purpose", "purpose_daily_intention", "Start each morning with one intention — before you check your phone, ask yourself who you want to show up for today", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("purpose", "purpose_family_history", "Know your family history — where your grandparents came from, what they survived, what they built — roots give you something to stand on", {
    difficulty: "Medium",
    points: 3,
    minLevel: 2,
  }),
  createHabit("purpose", "purpose_mentor", "Mentor someone younger than you — at work, in your neighborhood, in your community — being needed is one of the most powerful forces in human health", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
  }),
  createHabit("purpose", "purpose_use_skills", "Use your skills to serve others — if you're a doctor, a lawyer, a teacher, a cook — find a way to give that away to someone who needs it", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("purpose", "purpose_family_connector", "Be the person in your family who keeps everyone connected — the one who organizes the dinners, makes the calls, remembers the birthdays", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("purpose", "purpose_pursue_curiosity", "Pursue something you are genuinely curious about — a language, an instrument, a craft, a sport — curiosity is a form of purpose", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
  }),
  createHabit("purpose", "purpose_know_what_alive", "Know what makes you come alive — not what you're good at, not what pays well — what lights you up — and protect time for it every week", {
    difficulty: "Medium",
    points: 3,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("purpose", "purpose_read_books", "Read books that challenge how you think — the people who stay curious stay alive longer", {
    difficulty: "Easy",
    points: 2,
  }),
  createHabit("purpose", "purpose_say_no", "Say no to things that drain you — protecting your energy is not selfish, it is necessary", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("purpose", "purpose_know_values", "Know your values — not your family's values, not your company's values — yours — and make decisions from them", {
    difficulty: "Medium",
    points: 3,
    minLevel: 2,
  }),

  // Stress (11)
  createHabit("stress", "stress_silence", "Spend time in silence every day — even 5 minutes — no phone, no music, no podcast — just you and your thoughts — most people are terrified of this and it's exactly why they need it", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_outside", "Spend 20 minutes outside every day — exposure to natural light and outdoor environments lowers cortisol, reduces rumination, and improves mood independently of exercise", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_work_stop", "Set a hard stop to your workday — when work bleeds into everything the body never fully recovers — have dinner at the table, not the desk — make evenings belong to your family", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_rest_day", "Protect one day a week for rest — build a weekly ritual of deliberate rest and protect it fiercely — your body and your family need it", {
    difficulty: "Medium",
    points: 4,
    weekly: true,
    minLevel: 2,
  }),
  createHabit("stress", "stress_cook_slow", "Cook dinner slowly and deliberately — the act of preparing a meal with your hands is one of the oldest and most effective stress regulation tools available", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_talk_trust", "Talk to someone you trust when you are struggling — chronic stress carried alone becomes chronic illness — connection is medicine", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_no_news", "Stop consuming news first thing in the morning — what you feed your mind in the first 30 minutes of the day sets the tone for everything that follows", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_no_perfection", "Stop trying to be perfect — perfectionism is chronic stress with a good reputation", { difficulty: "Medium", points: 3 }),
  createHabit("stress", "stress_people_calm", "Spend time with people who make you feel calm — energy is contagious — choose accordingly", {
    difficulty: "Medium",
    points: 3,
  }),
  createHabit("stress", "stress_focus_control", "Stop spending energy on things outside your control — you cannot control the news, the economy, other people's behavior, or what hasn't happened yet — you can control what you eat, how you move, how you show up for your family tonight", {
    difficulty: "Bold",
    points: 4,
    minLevel: 3,
  }),
  createHabit("stress", "stress_anxiety_question", "Ask yourself one question when you feel anxious — is this something I can actually do something about right now? If yes, act. If no, let it go", {
    difficulty: "Medium",
    points: 3,
  }),
];

const HABITS_BY_PILLAR = HABIT_SPECS.reduce<Record<HabitPillarKey, RawHabitSpec[]>>(
  (acc, spec) => {
    acc[spec.pillar].push(spec);
    return acc;
  },
  { food: [], movement: [], sleep: [], connection: [], purpose: [], stress: [] }
);

const HABITS_FOR_GUIDE: Record<PillarKey, RawHabitSpec[]> = {
  food: HABITS_BY_PILLAR.food,
  movement: HABITS_BY_PILLAR.movement,
  sleep: HABITS_BY_PILLAR.sleep,
  connection: HABITS_BY_PILLAR.connection,
  purpose: HABITS_BY_PILLAR.purpose,
  stressRegulation: HABITS_BY_PILLAR.stress,
};

const toCue = (spec: RawHabitSpec): HabitCue => {
  const [short] = spec.text.split(" — ");
  return {
    title: short.trim(),
    description: spec.text.trim(),
  };
};

export const LIFE_HABIT_LIBRARY: Record<PillarKey, LifeHabitGuide> = {
  food: { ...GUIDE_BASE.food, habits: HABITS_FOR_GUIDE.food.map(toCue) },
  movement: { ...GUIDE_BASE.movement, habits: HABITS_FOR_GUIDE.movement.map(toCue) },
  sleep: { ...GUIDE_BASE.sleep, habits: HABITS_FOR_GUIDE.sleep.map(toCue) },
  connection: { ...GUIDE_BASE.connection, habits: HABITS_FOR_GUIDE.connection.map(toCue) },
  purpose: { ...GUIDE_BASE.purpose, habits: HABITS_FOR_GUIDE.purpose.map(toCue) },
  stressRegulation: { ...GUIDE_BASE.stressRegulation, habits: HABITS_FOR_GUIDE.stressRegulation.map(toCue) },
};
