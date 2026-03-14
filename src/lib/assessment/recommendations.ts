import type { AssessmentStrengthOpportunity, GeneralRecommendation, PillarKey, PillarScore } from "@/components/assessment/AssessmentTypes";

interface PillarMessaging {
  title: string;
  strength: string;
  opportunity: string;
  recommendations: GeneralRecommendation[];
}

const PILLAR_LIBRARY: Record<PillarKey, PillarMessaging> = {
  food: {
    title: "Food",
    strength: "Nourishing meals and produce-forward habits are supporting your biology.",
    opportunity: "Dial in produce, fiber, and home-prepared meals to stabilize blood sugar and inflammation.",
    recommendations: [
      {
        title: "Build meals around plants",
        detail: "Cover half your plate with vegetables or fruit and layer in beans, whole grains, and healthy fats to raise fiber and polyphenols.",
      },
      {
        title: "Limit ultra-processed staples",
        detail: "Swap packaged snacks and sugary drinks for nuts, seeds, sparkling water, or herbal tea most days of the week.",
      },
      {
        title: "Batch cook at home",
        detail: "Prepare soups, grain bowls, or roasted trays once or twice per week so home meals become the simple default.",
      },
    ],
  },
  movement: {
    title: "Movement",
    strength: "Your movement volume is signaling metabolic and cardiovascular resilience.",
    opportunity: "Blend natural movement, practical strength, and daily walks to keep muscle and insulin sensitivity strong.",
    recommendations: [
      {
        title: "Walk or cycle most days",
        detail: "Layer brisk walks, hikes, or casual rides so your heart rate comes up regularly without needing a gym setting.",
      },
      {
        title: "Lift, carry, or climb twice weekly",
        detail: "Use bodyweight work, resistance bands, gardening, or carrying loads to challenge muscles and preserve strength.",
      },
      {
        title: "Break up long sitting",
        detail: "Stand, stretch, or take short movement snacks every hour to keep circulation, lymph, and mitochondrial activity high.",
      },
    ],
  },
  sleep: {
    title: "Sleep",
    strength: "Consistent rest is reinforcing hormone balance and cellular repair.",
    opportunity: "Protect 7+ hours in a dark, cool environment so your nervous system can reset.",
    recommendations: [
      {
        title: "Anchor bed and wake times",
        detail: "Keep a 60-minute window for going to bed and waking up—even on weekends—to support circadian rhythms.",
      },
      {
        title: "Guard evening wind-down",
        detail: "Dim lights, reduce screens, and finish meals 2–3 hours before bed to improve melatonin release.",
      },
      {
        title: "Address sleep disruptions",
        detail: "If insomnia or snoring persists, speak with a clinician about behavioral therapy or screening for sleep apnea.",
      },
    ],
  },
  connection: {
    title: "Connection",
    strength: "Meaningful relationships appear to be buffering daily stress load.",
    opportunity: "Protect shared meals, screen-free time, and mutual support to reinforce belonging.",
    recommendations: [
      {
        title: "Schedule standing gatherings",
        detail: "Plan a weekly shared meal or walk with people who leave you feeling supported and energized.",
      },
      {
        title: "Practice phone-free meals",
        detail: "Place devices away from the table and focus on conversation to strengthen emotional safety cues.",
      },
      {
        title: "Invest in reciprocity",
        detail: "Offer specific support to friends or neighbors and ask for help when you need it to deepen bonds.",
      },
    ],
  },
  purpose: {
    title: "Purpose",
    strength: "A sense of direction is helping you align habits with long-term meaning.",
    opportunity: "Clarifying purpose can motivate the daily behaviors that extend healthspan.",
    recommendations: [
      {
        title: "Name what matters",
        detail: "Write down who benefits when you show up with energy—family, community, teams—and revisit it weekly.",
      },
      {
        title: "Link purpose to routines",
        detail: "Pair workouts, meal prep, or sleep routines with the impact they enable so they feel mission-driven.",
      },
      {
        title: "Offer your skills",
        detail: "Mentor, volunteer, or teach in spaces aligned with your values to reinforce meaning and accountability.",
      },
    ],
  },
  stress: {
    title: "Stress Regulation",
    strength: "You appear to have tools for resetting your nervous system.",
    opportunity: "Daily decompression practices can prevent chronic stress from accelerating aging biology.",
    recommendations: [
      {
        title: "Practice brief regulation",
        detail: "Use 5-minute breathing, prayer, or mindfulness breaks throughout the day to keep cortisol in check.",
      },
      {
        title: "Move stress through the body",
        detail: "Walks, light strength work, or gentle mobility after intense days help metabolize stress hormones.",
      },
      {
        title: "Check in with professionals",
        detail: "If anxiety or low mood persist, talk with a mental health professional for evidence-based therapies.",
      },
    ],
  },
};

interface RecommendationResult {
  strengths: AssessmentStrengthOpportunity[];
  opportunities: AssessmentStrengthOpportunity[];
  recommendations: GeneralRecommendation[];
}

export function buildRecommendations(pillarScores: PillarScore[]): RecommendationResult {
  if (!pillarScores.length) {
    return { strengths: [], opportunities: [], recommendations: [] };
  }

  const sortedDescending = [...pillarScores].sort((a, b) => b.score - a.score);
  const sortedAscending = [...pillarScores].sort((a, b) => a.score - b.score);

  const strengths = sortedDescending.slice(0, 2).map((pillar) => {
    const library = PILLAR_LIBRARY[pillar.key];
    return {
      title: `${library.title} pillar`,
      description: library.strength,
    } satisfies AssessmentStrengthOpportunity;
  });

  const opportunities = sortedAscending.slice(0, 2).map((pillar) => {
    const library = PILLAR_LIBRARY[pillar.key];
    return {
      title: `${library.title} pillar`,
      description: library.opportunity,
    } satisfies AssessmentStrengthOpportunity;
  });

  const weakPillars = sortedAscending.slice(0, 3);
  const recommendationSet: GeneralRecommendation[] = [];

  for (const pillar of weakPillars) {
    const library = PILLAR_LIBRARY[pillar.key];
    for (const tip of library.recommendations) {
      if (recommendationSet.length >= 5) break;
      const exists = recommendationSet.some((item) => item.title === tip.title);
      if (!exists) {
        recommendationSet.push(tip);
      }
    }
    if (recommendationSet.length >= 5) break;
  }

  return { strengths, opportunities, recommendations: recommendationSet };
}
