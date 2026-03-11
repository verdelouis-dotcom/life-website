import type {
  AssessmentAnswers,
  AssessmentQuestionId,
  AssessmentResultsPayload,
  OptionalMarkerKey,
  PillarKey,
  PillarScore,
} from "@/components/assessment/AssessmentTypes";
import { buildRecommendations } from "@/lib/assessment/recommendations";
import { clamp } from "@/lib/assessment/utils";

const SCORE_KEYS: (AssessmentQuestionId | OptionalMarkerKey)[] = [
  "fruitsVeg",
  "processedFoods",
  "sugarIntake",
  "homePreparedMeals",
  "cardio",
  "strengthTraining",
  "dailyMovement",
  "fitnessLevel",
  "sleepDuration",
  "sleepQuality",
  "sleepSchedule",
  "timeWithOthers",
  "socialSupport",
  "sharedMeals",
  "screenFreeMeals",
  "stressFrequency",
  "mentalHealthImpact",
  "purpose",
  "alcohol",
  "nicotine",
  "chronicDisease",
  "selfRatedHealth",
  "bloodPressure",
  "ldl",
  "fastingGlucose",
];

const OPTIONAL_MARKER_KEYS: OptionalMarkerKey[] = ["bloodPressure", "ldl", "fastingGlucose"];

const QUESTION_WEIGHTS: Partial<Record<(typeof SCORE_KEYS)[number], number>> = {
  fruitsVeg: 3,
  processedFoods: 3,
  sugarIntake: 2,
  homePreparedMeals: 2,
  cardio: 4,
  strengthTraining: 3,
  dailyMovement: 3,
  fitnessLevel: 3,
  sleepDuration: 3,
  sleepQuality: 2,
  sleepSchedule: 1,
  timeWithOthers: 2,
  socialSupport: 2,
  sharedMeals: 2,
  screenFreeMeals: 1,
  stressFrequency: 2,
  mentalHealthImpact: 2,
  purpose: 2,
  alcohol: 3,
  nicotine: 4,
  chronicDisease: 4,
  selfRatedHealth: 3,
  bloodPressure: 3,
  ldl: 2,
  fastingGlucose: 3,
};

const SCORE_TABLE: Partial<Record<(typeof SCORE_KEYS)[number], Record<string, number>>> = {
  fruitsVeg: {
    rarely: 0,
    severalTimesPerWeek: 1,
    daily: 2,
    fivePlusServings: 3,
  },
  processedFoods: {
    multipleTimesPerDay: 0,
    daily: 1,
    severalTimesPerWeek: 2,
    rarely: 3,
  },
  sugarIntake: {
    severalTimesDaily: 0,
    dailyTreat: 1,
    fewTreatsPerWeek: 2,
    rarelyOrNone: 3,
  },
  homePreparedMeals: {
    rarely: 0,
    oneToTwoPerWeek: 1,
    threeToFivePerWeek: 2,
    mostDays: 3,
  },
  cardio: {
    rarelyOrNever: 0,
    under150: 1,
    from150To300: 2,
    over300: 3,
  },
  strengthTraining: {
    rarelyOrNever: 0,
    lessThanOnceWeekly: 1,
    oneToTwoPerWeek: 2,
    moreThanTwoPerWeek: 3,
  },
  dailyMovement: {
    mostlySitting: 0,
    someMovement: 1,
    frequentlyMoving: 2,
    veryActive: 3,
  },
  fitnessLevel: {
    poor: 0,
    moderate: 1,
    good: 2,
    excellent: 3,
  },
  sleepDuration: {
    rarely: 0,
    sometimes: 1,
    often: 2,
    almostAlways: 3,
  },
  sleepQuality: {
    fivePlusNights: 0,
    threeToFourNights: 1,
    oneToTwoNights: 2,
    rarelyOrNever: 3,
  },
  sleepSchedule: {
    rarely: 0,
    sometimes: 1,
    often: 2,
    almostAlways: 3,
  },
  timeWithOthers: {
    rarely: 0,
    fewTimesPerMonth: 1,
    weekly: 2,
    daily: 3,
  },
  socialSupport: {
    notSupportive: 0,
    slightlySupportive: 1,
    fairlySupportive: 2,
    verySupportive: 3,
  },
  sharedMeals: {
    rarely: 0,
    fewTimesPerMonth: 1,
    weekly: 2,
    mostDays: 3,
  },
  screenFreeMeals: {
    almostAlwaysWithScreens: 0,
    oftenWithScreens: 1,
    sometimesWithoutScreens: 2,
    usuallyScreenFree: 3,
  },
  stressFrequency: {
    almostAllTheTime: 0,
    frequently: 1,
    occasionally: 2,
    rarely: 3,
  },
  mentalHealthImpact: {
    severely: 0,
    moderately: 1,
    mildly: 2,
    notAtAll: 3,
  },
  purpose: {
    noClearPurpose: 0,
    someDirection: 1,
    strongPurpose: 2,
    deepSenseOfPurpose: 3,
  },
  alcohol: {
    fifteenPlus: 0,
    eightToFourteen: 1,
    oneToSeven: 2,
    none: 3,
  },
  nicotine: {
    dailyUser: 0,
    occasionalUser: 1,
    formerUser: 2,
    neverUsed: 3,
  },
  chronicDisease: {
    yes: 0,
    riskFactors: 1,
    unsure: 2,
    no: 3,
  },
  selfRatedHealth: {
    poor: 0,
    fair: 1,
    good: 2,
    excellent: 3,
  },
  bloodPressure: {
    high: 0,
    elevated: 1,
    normal: 3,
    dontKnow: 1,
  },
  ldl: {
    high: 0,
    borderline: 1,
    optimal: 3,
    dontKnow: 1,
  },
  fastingGlucose: {
    diabetes: 0,
    prediabetes: 1,
    normal: 3,
    dontKnow: 1,
  },
};

const PILLAR_GROUPS: Record<PillarKey, AssessmentQuestionId[]> = {
  food: ["fruitsVeg", "processedFoods", "sugarIntake", "homePreparedMeals"],
  movement: ["cardio", "strengthTraining", "dailyMovement", "fitnessLevel"],
  sleep: ["sleepDuration", "sleepQuality", "sleepSchedule"],
  connection: ["timeWithOthers", "socialSupport", "sharedMeals", "screenFreeMeals"],
  purpose: ["purpose"],
  stress: ["stressFrequency", "mentalHealthImpact"],
};

const PILLAR_DESCRIPTIONS: Record<PillarKey, string> = {
  food: "Nutrition choices linked to metabolic and cognitive longevity markers.",
  movement: "Cardiorespiratory fitness, strength, and daily movement volume.",
  sleep: "Sleep quantity, quality, and rhythm cues.",
  connection: "Protective relationships and shared meals that buffer stress.",
  purpose: "Meaning, direction, and contribution that motivate healthy routines.",
  stress: "Stress load and mental health impact on daily functioning.",
};

interface ScoreSummary {
  weightedScore: number;
  maxScore: number;
  normalizedScore: number;
  optionalNormalized: number;
}

function scoreValue(key: (typeof SCORE_KEYS)[number], value: string | undefined) {
  if (!value) return 0;
  return SCORE_TABLE[key]?.[value] ?? 0;
}

function calculateScoreSummary(answers: AssessmentAnswers): ScoreSummary {
  let weightedScore = 0;
  let maxScore = 0;
  let optionalWeighted = 0;
  let optionalMax = 0;

  for (const key of SCORE_KEYS) {
    const weight = QUESTION_WEIGHTS[key] ?? 0;
    const value = answers[key as keyof AssessmentAnswers];
    const score = scoreValue(key, typeof value === "string" ? value : undefined);
    weightedScore += score * weight;
    maxScore += 3 * weight;

    if (OPTIONAL_MARKER_KEYS.includes(key as OptionalMarkerKey)) {
      optionalWeighted += score * weight;
      optionalMax += 3 * weight;
    }
  }

  const normalizedScore = maxScore ? weightedScore / maxScore : 0;
  const optionalNormalized = optionalMax ? optionalWeighted / optionalMax : 0.5;

  return { weightedScore, maxScore, normalizedScore, optionalNormalized };
}

function calculatePillarScores(answers: AssessmentAnswers): PillarScore[] {
  return (Object.keys(PILLAR_GROUPS) as PillarKey[]).map((pillar) => {
    const questionIds = PILLAR_GROUPS[pillar];
    let scoreSum = 0;
    let maxSum = 0;

    questionIds.forEach((id) => {
      const weight = QUESTION_WEIGHTS[id] ?? 0;
      const value = answers[id];
      const score = scoreValue(id, typeof value === "string" ? value : undefined);
      scoreSum += score * weight;
      maxSum += 3 * weight;
    });

    const normalized = maxSum ? Math.round((scoreSum / maxSum) * 100) : 0;

    return {
      key: pillar,
      label: PILLAR_LIBRARY_METADATA[pillar].title,
      score: normalized,
      description: PILLAR_DESCRIPTIONS[pillar],
    } satisfies PillarScore;
  });
}

const PILLAR_LIBRARY_METADATA: Record<PillarKey, { title: string }> = {
  food: { title: "Food" },
  movement: { title: "Movement" },
  sleep: { title: "Sleep" },
  connection: { title: "Connection" },
  purpose: { title: "Purpose" },
  stress: { title: "Stress Regulation" },
};

function projectImprovedAnswers(answers: AssessmentAnswers): AssessmentAnswers {
  const next: AssessmentAnswers = { ...answers };

  // Food
  next.fruitsVeg = answers.fruitsVeg && ["daily", "fivePlusServings"].includes(answers.fruitsVeg)
    ? answers.fruitsVeg
    : "daily";
  next.processedFoods = answers.processedFoods && ["rarely", "severalTimesPerWeek"].includes(answers.processedFoods)
    ? answers.processedFoods
    : "severalTimesPerWeek";
  next.sugarIntake = answers.sugarIntake && ["fewTreatsPerWeek", "rarelyOrNone"].includes(answers.sugarIntake)
    ? answers.sugarIntake
    : "fewTreatsPerWeek";
  next.homePreparedMeals = answers.homePreparedMeals && ["threeToFivePerWeek", "mostDays"].includes(answers.homePreparedMeals)
    ? answers.homePreparedMeals
    : "threeToFivePerWeek";

  // Movement
  next.cardio = answers.cardio && ["from150To300", "over300"].includes(answers.cardio) ? answers.cardio : "from150To300";
  next.strengthTraining =
    answers.strengthTraining && ["oneToTwoPerWeek", "moreThanTwoPerWeek"].includes(answers.strengthTraining)
      ? answers.strengthTraining
      : "oneToTwoPerWeek";
  next.dailyMovement = answers.dailyMovement && ["frequentlyMoving", "veryActive"].includes(answers.dailyMovement)
    ? answers.dailyMovement
    : "frequentlyMoving";
  next.fitnessLevel = answers.fitnessLevel && ["good", "excellent"].includes(answers.fitnessLevel) ? answers.fitnessLevel : "good";

  // Sleep
  next.sleepDuration = answers.sleepDuration && ["often", "almostAlways"].includes(answers.sleepDuration)
    ? answers.sleepDuration
    : "often";
  next.sleepQuality = answers.sleepQuality && ["oneToTwoNights", "rarelyOrNever"].includes(answers.sleepQuality)
    ? answers.sleepQuality
    : "oneToTwoNights";
  next.sleepSchedule = answers.sleepSchedule && ["often", "almostAlways"].includes(answers.sleepSchedule)
    ? answers.sleepSchedule
    : "often";

  // Connection
  next.timeWithOthers = answers.timeWithOthers && ["weekly", "daily"].includes(answers.timeWithOthers)
    ? answers.timeWithOthers
    : "weekly";
  next.sharedMeals = answers.sharedMeals && ["weekly", "mostDays"].includes(answers.sharedMeals)
    ? answers.sharedMeals
    : "weekly";
  next.screenFreeMeals = answers.screenFreeMeals && ["sometimesWithoutScreens", "usuallyScreenFree"].includes(answers.screenFreeMeals)
    ? answers.screenFreeMeals
    : "sometimesWithoutScreens";

  // Purpose & stress
  next.stressFrequency = answers.stressFrequency && ["occasionally", "rarely"].includes(answers.stressFrequency)
    ? answers.stressFrequency
    : "occasionally";
  next.mentalHealthImpact = answers.mentalHealthImpact && ["mildly", "notAtAll"].includes(answers.mentalHealthImpact)
    ? answers.mentalHealthImpact
    : "mildly";
  next.purpose = answers.purpose && ["strongPurpose", "deepSenseOfPurpose"].includes(answers.purpose)
    ? answers.purpose
    : "strongPurpose";

  // Health & habits
  next.alcohol = answers.alcohol && ["oneToSeven", "none"].includes(answers.alcohol) ? answers.alcohol : "oneToSeven";
  if (answers.nicotine === "neverUsed") {
    next.nicotine = "neverUsed";
  } else if (answers.nicotine === "formerUser" || !answers.nicotine) {
    next.nicotine = "formerUser";
  } else {
    next.nicotine = "formerUser";
  }
  next.chronicDisease = answers.chronicDisease;
  if (answers.selfRatedHealth === "excellent" || answers.selfRatedHealth === "good") {
    next.selfRatedHealth = answers.selfRatedHealth;
  } else {
    next.selfRatedHealth = "good";
  }

  return next;
}

function calculateMetrics(answers: AssessmentAnswers, normalizedScore: number, optionalNormalized: number) {
  const chronologicalAge = answers.age ?? 40;
  const baselineLifeExpectancy = answers.sex === "female" ? 81 : answers.sex === "male" ? 76 : 78;

  const lifespanAdjustment = clamp((normalizedScore - 0.5) * 20, -10, 10);
  const optionalAdjustment = clamp((optionalNormalized - 0.5) * 4, -2, 2);
  const estimatedLifespanRaw = baselineLifeExpectancy + lifespanAdjustment + optionalAdjustment;
  const estimatedLifespan = clamp(estimatedLifespanRaw, chronologicalAge + 2, 100);

  const biologicalAgeAdjustment = clamp((0.5 - normalizedScore) * 10, -8, 8);
  const surveyBiologicalAge = Math.round(chronologicalAge + biologicalAgeAdjustment);

  return { baselineLifeExpectancy, estimatedLifespan, surveyBiologicalAge };
}

export function evaluateAssessment(answers: AssessmentAnswers): AssessmentResultsPayload {
  const { normalizedScore, optionalNormalized } = calculateScoreSummary(answers);
  const pillarScores = calculatePillarScores(answers);

  const { baselineLifeExpectancy, estimatedLifespan, surveyBiologicalAge } = calculateMetrics(
    answers,
    normalizedScore,
    optionalNormalized,
  );

  const improvedAnswers = projectImprovedAnswers(answers);
  const improvedSummary = calculateScoreSummary(improvedAnswers);
  const improvedMetrics = calculateMetrics(improvedAnswers, improvedSummary.normalizedScore, optionalNormalized);

  const longevityPotential = clamp(improvedMetrics.estimatedLifespan, estimatedLifespan, 100);
  const yearsYouCouldGain = clamp(longevityPotential - estimatedLifespan, 0, 15);

  const metrics = {
    surveyBiologicalAge,
    estimatedLifespan,
    longevityPotential,
    yearsYouCouldGain,
  };

  const { strengths, opportunities, recommendations } = buildRecommendations(pillarScores);

  return {
    metrics,
    pillarScores,
    normalizedScore,
    strengths,
    opportunities,
    recommendations,
    baselineLifeExpectancy,
  } satisfies AssessmentResultsPayload;
}
