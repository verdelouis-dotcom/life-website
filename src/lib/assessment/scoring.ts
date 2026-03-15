import type {
  AssessmentAnswers,
  AssessmentQuestionId,
  AssessmentResultsPayload,
  HabitOpportunityInsight,
  OptionalMarkerKey,
  PillarKey,
  PillarScore,
} from "@/components/assessment/AssessmentTypes";
import { buildRecommendations } from "@/lib/assessment/recommendations";
import { ASSESSMENT_QUESTIONS } from "@/lib/assessment/questions";
import { clamp, safeNumber } from "@/lib/assessment/utils";
import { calculateLongevityProjection } from "@/lib/assessment/longevityProjection";

const SCORE_SCALE = [25, 50, 75, 100] as const;

const HABIT_PILLAR_MAP: Record<PillarKey, AssessmentQuestionId[]> = {
  food: ["fruitsVegServings", "processedMeals", "addedSugar", "homeCookedMeals", "hydrationChoice"],
  movement: ["moderateActivity", "strengthDays", "sedentaryTime", "lifestyleMovement"],
  sleep: ["sleepHours", "wakeRested", "sleepConsistency"],
  connection: ["meaningfulTime", "sharedMeals", "screenFreeMeals", "communityBelonging"],
  purpose: ["senseOfPurpose", "meaningfulActivities", "contributionFrequency"],
  stressRegulation: ["overwhelmFrequency", "outdoorQuietTime"],
};

const CONNECTION_WEIGHTS: Partial<Record<AssessmentQuestionId, number>> = {
  meaningfulTime: 0.25,
  sharedMeals: 0.45,
  screenFreeMeals: 0.2,
  communityBelonging: 0.1,
};

const HABIT_OPTION_SCORES: Partial<Record<AssessmentQuestionId, Record<string, number>>> = {
  fruitsVegServings: buildScoreMap(["underOne", "oneToTwo", "threeToFour", "fivePlus"]),
  processedMeals: buildScoreMap(["mostMeals", "onePerDay", "fewPerWeek", "rarely"]),
  addedSugar: buildScoreMap(["multiDaily", "daily", "fewPerWeek", "rarely"]),
  homeCookedMeals: buildScoreMap(["underTwo", "threeToFour", "fiveToSix", "mostDays"]),
  hydrationChoice: buildScoreMap(["mostlySugary", "sweetenedMix", "waterPlus", "mostlyWater"]),
  moderateActivity: buildScoreMap(["lessThanWeekly", "oneToTwoPerWeek", "threeToFourPerWeek", "mostDays"]),
  strengthDays: buildScoreMap(["none", "oneDay", "twoDays", "threePlusDays"]),
  sedentaryTime: buildScoreMap(["overTenHours", "sevenToTenHours", "fourToSixHours", "underFourHours"]),
  lifestyleMovement: buildScoreMap(["mostlySeated", "mixed", "onFeet", "activeAllDay"]),
  sleepHours: buildScoreMap(["underSix", "sixToSeven", "sevenToEight", "overEight"]),
  wakeRested: buildScoreMap(["rarelyRested", "sometimesRested", "mostMornings", "almostAlwaysRested"]),
  sleepConsistency: buildScoreMap(["inconsistent", "somewhatConsistent", "mostlyConsistent", "veryConsistent"]),
  meaningfulTime: buildScoreMap(["rarely", "fewTimesPerMonth", "weekly", "severalPerWeek"]),
  sharedMeals: buildScoreMap(["rarely", "fewTimesPerMonth", "weekly", "mostDays"]),
  screenFreeMeals: buildScoreMap(["almostAlwaysWithScreens", "oftenWithScreens", "sometimesWithoutScreens", "usuallyScreenFree"]),
  communityBelonging: buildScoreMap(["disconnected", "someBelonging", "solidBelonging", "deepBelonging"]),
  senseOfPurpose: buildScoreMap(["noClearPurpose", "emergingPurpose", "clearPurpose", "anchoredPurpose"]),
  meaningfulActivities: buildScoreMap(["lessThanMonthly", "monthly", "weekly", "severalPerWeek"]),
  contributionFrequency: buildScoreMap(["rarely", "fewTimesPerYear", "monthly", "weekly"]),
  overwhelmFrequency: buildScoreMap(["almostDaily", "fewTimesPerWeek", "sometimes", "rarely"]),
  outdoorQuietTime: buildScoreMap(["rarely", "fewTimesPerMonth", "weekly", "severalPerWeek"]),
  alcohol: buildScoreMap(["fifteenPlus", "eightToFourteen", "oneToSeven", "none"]),
  nicotine: buildScoreMap(["dailyUser", "occasionalUser", "formerUser", "neverUsed"]),
  chronicCondition: buildScoreMap(["yes", "riskFactors", "unsure", "no"]),
  preventiveCare: buildScoreMap(["never", "everyFiveYears", "everyTwoToThreeYears", "yearly"]),
  grandparents85: buildScoreMap(["zero", "one", "two", "threeOrFour"]),
};

const OPTIONAL_MARKER_KEYS: OptionalMarkerKey[] = ["bloodPressure", "ldl", "fastingGlucose"];

const OPTIONAL_MARKER_SCORES: Record<OptionalMarkerKey, Record<string, number>> = {
  bloodPressure: {
    high: 35,
    elevated: 70,
    normal: 100,
    dontKnow: 60,
  },
  ldl: {
    high: 35,
    borderline: 70,
    optimal: 100,
    dontKnow: 60,
  },
  fastingGlucose: {
    diabetes: 30,
    prediabetes: 70,
    normal: 100,
    dontKnow: 60,
  },
};

const PILLAR_DESCRIPTIONS: Record<PillarKey, string> = {
  food: "Meals prepared with fresh ingredients, rich in plants and whole foods, support long-term health.",
  movement: "Natural movement, strength, and lower sedentary time protect metabolic health.",
  sleep: "Consistent, restorative sleep enables recovery and hormone balance.",
  connection: "Shared tables, supportive relationships, and belonging reinforce healthy aging.",
  purpose: "A clear sense of purpose and contribution keeps habits mission-driven.",
  stressRegulation: "Daily recovery practices calm the nervous system and reduce wear and tear.",
};

const CONTEXT_QUESTION_IDS: AssessmentQuestionId[] = [
  "alcohol",
  "nicotine",
  "chronicCondition",
  "preventiveCare",
  "grandparents85",
];

const QUESTION_LOOKUP = new Map(ASSESSMENT_QUESTIONS.map((question) => [question.id, question]));

export function evaluateAssessment(answers: AssessmentAnswers): AssessmentResultsPayload {
  const pillarScores = calculatePillarScores(answers);
  const lifeHabitsScore = roundScore(calculateWeightedHabitScore(pillarScores));
  const healthContextScore = roundScore(calculateHealthContextScore(answers));
  const currentLongevityBaseline = roundScore(lifeHabitsScore * 0.7 + healthContextScore * 0.3);
  const longevityPotential = roundScore(calculateLongevityPotential(lifeHabitsScore, pillarScores, answers));

  const strongestPillar = [...pillarScores].sort((a, b) => b.score - a.score)[0];
  const weakestPillar = [...pillarScores].sort((a, b) => a.score - b.score)[0];
  const habitOpportunities = buildHabitOpportunities(answers);
  const projection = calculateLongevityProjection({
    age: answers.age ?? 40,
    sex: answers.sex ?? "female",
    lifeHabitsScore,
    longevityPotential,
    answers,
  });

  const { strengths, opportunities, recommendations } = buildRecommendations(pillarScores);

  return {
    metrics: {
      lifeHabitsScore,
      healthContextScore,
      currentLongevityBaseline,
      longevityPotential,
      strongestPillar,
      weakestPillar,
      habitOpportunities,
      ...projection,
    },
    pillarScores,
    strengths,
    opportunities,
    recommendations,
  };
}

function calculatePillarScores(answers: AssessmentAnswers): PillarScore[] {
  return (Object.keys(HABIT_PILLAR_MAP) as PillarKey[]).map((pillar) => {
    const questionIds = HABIT_PILLAR_MAP[pillar];
    const scores = questionIds.map((id) => scoreQuestion(id, answers[id] as string | undefined));
    const score =
      pillar === "connection"
        ? roundScore(weightedConnectionScore(questionIds, scores))
        : roundScore(average(scores));
    return {
      key: pillar,
      label: PILLAR_LIBRARY[pillar].label,
      score,
      description: PILLAR_DESCRIPTIONS[pillar],
    };
  });
}

function weightedConnectionScore(questionIds: AssessmentQuestionId[], scores: number[]) {
  let weightedTotal = 0;
  let totalWeight = 0;
  questionIds.forEach((id, index) => {
    const weight = CONNECTION_WEIGHTS[id] ?? 0;
    weightedTotal += scores[index] * weight;
    totalWeight += weight;
  });
  if (!totalWeight) return average(scores);
  return weightedTotal / totalWeight;
}

function calculateWeightedHabitScore(pillarScores: PillarScore[]) {
  let total = 0;
  pillarScores.forEach((pillar) => {
    const weight = PILLAR_LIBRARY[pillar.key].weight;
    total += weight * pillar.score;
  });
  return total;
}

const PILLAR_LIBRARY: Record<PillarKey, { label: string; weight: number }> = {
  food: { label: "Food", weight: 0.21 },
  movement: { label: "Movement", weight: 0.2 },
  sleep: { label: "Sleep", weight: 0.15 },
  connection: { label: "Connection", weight: 0.18 },
  purpose: { label: "Purpose", weight: 0.13 },
  stressRegulation: { label: "Stress Regulation", weight: 0.13 },
};

function calculateHealthContextScore(answers: AssessmentAnswers) {
  const contextScores: number[] = [];
  const bmiScore = scoreBmi(answers.height, answers.weight);
  if (bmiScore !== null) {
    contextScores.push(bmiScore);
  }

  CONTEXT_QUESTION_IDS.forEach((id) => {
    const value = answers[id];
    const score = scoreQuestion(id, value as string | undefined);
    contextScores.push(score);
  });

  OPTIONAL_MARKER_KEYS.forEach((marker) => {
    const value = answers[marker];
    contextScores.push(scoreOptionalMarker(marker, value));
  });

  return contextScores.length ? average(contextScores) : 60;
}

export function calculateLongevityPotential(lifeHabitsScore: number, pillarScores: PillarScore[], answers: AssessmentAnswers) {
  const headroomGains = pillarScores.map((pillar) => (100 - pillar.score) * 0.55);
  const averageGain = average(headroomGains);
  let potential = lifeHabitsScore + averageGain;

  // Light penalties for major risk factors
  if (answers.nicotine === "dailyUser") {
    potential -= 12;
  } else if (answers.nicotine === "occasionalUser") {
    potential -= 5;
  }

  if (answers.chronicCondition === "yes") {
    potential -= 10;
  } else if (answers.chronicCondition === "riskFactors") {
    potential -= 6;
  }

  if (answers.bloodPressure === "high") {
    potential -= 6;
  } else if (answers.bloodPressure === "elevated") {
    potential -= 3;
  }

  if (answers.fastingGlucose === "diabetes") {
    potential -= 6;
  } else if (answers.fastingGlucose === "prediabetes") {
    potential -= 3;
  }

  return clamp(potential, 0, 100);
}

function scoreQuestion(id: AssessmentQuestionId, value: string | undefined): number {
  const table = HABIT_OPTION_SCORES[id];
  if (!table) {
    return 60;
  }

  if (!value) {
    return 60;
  }
  return table[value] ?? 60;
}

function scoreOptionalMarker(key: OptionalMarkerKey, value: string | undefined) {
  if (!value) {
    return 60;
  }
  const table = OPTIONAL_MARKER_SCORES[key];
  return table[value] ?? 60;
}

function buildScoreMap(values: string[], scale: readonly number[] = SCORE_SCALE) {
  return values.reduce<Record<string, number>>((acc, value, index) => {
    acc[value] = scale[index] ?? scale[scale.length - 1];
    return acc;
  }, {});
}

function average(values: number[]) {
  if (!values.length) return 0;
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

function roundScore(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.round(value);
}

function scoreBmi(height: AssessmentAnswers["height"], weight: AssessmentAnswers["weight"]) {
  const safeHeightFeet = safeNumber(height?.feet ?? undefined);
  const safeHeightInches = safeNumber(height?.inches ?? undefined);
  const safeWeight = safeNumber(weight);
  if (safeHeightFeet === undefined || safeHeightInches === undefined || safeWeight === undefined) {
    return null;
  }
  const totalInches = safeHeightFeet * 12 + safeHeightInches;
  if (!totalInches) return null;
  const bmi = (safeWeight / (totalInches * totalInches)) * 703;
  if (!Number.isFinite(bmi)) return null;

  if (bmi >= 18.5 && bmi < 25) return 100;
  if (bmi >= 25 && bmi < 28) return 85;
  if (bmi >= 28 && bmi < 31) return 70;
  if (bmi >= 31 && bmi < 35) return 50;
  if (bmi >= 35) return 35;
  if (bmi < 18.5 && bmi >= 17) return 70;
  if (bmi < 17) return 55;
  return 60;
}

function buildHabitOpportunities(answers: AssessmentAnswers): HabitOpportunityInsight[] {
  const habitQuestionIds = Object.values(HABIT_PILLAR_MAP).flat();
  const scoredQuestions = habitQuestionIds.map((questionId) => {
    const score = scoreQuestion(questionId, answers[questionId] as string | undefined);
    const pillar = getPillarForQuestion(questionId);
    const prompt = QUESTION_LOOKUP.get(questionId)?.prompt ?? questionId;
    return { questionId, pillar, prompt, score };
  });

  const opportunities = scoredQuestions.sort((a, b) => a.score - b.score).slice(0, 3);
  return opportunities;
}

function getPillarForQuestion(questionId: AssessmentQuestionId): PillarKey {
  const entry = (Object.entries(HABIT_PILLAR_MAP) as [PillarKey, AssessmentQuestionId[]][]).find(([, questions]) =>
    questions.includes(questionId),
  );
  return entry ? entry[0] : "food";
}
