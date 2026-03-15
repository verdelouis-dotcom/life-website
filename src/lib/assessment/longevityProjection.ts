import type { AssessmentAnswers, SexOption } from "@/components/assessment/AssessmentTypes";
import { clamp } from "@/lib/assessment/utils";

export type LongevityProjectionInput = {
  age: number;
  sex: SexOption;
  lifeHabitsScore: number;
  longevityPotential: number;
  answers: AssessmentAnswers;
};

export type LongevityProjectionResult = {
  currentExpectedAge: number;
  potentialExpectedAge: number;
  yearsGained: number;
  currentExpectedYear: number;
  potentialExpectedYear: number;
};

const CURRENT_YEAR = new Date().getFullYear();

export function calculateLongevityProjection(input: LongevityProjectionInput): LongevityProjectionResult {
  const { age, sex, lifeHabitsScore, longevityPotential, answers } = input;

  const baseExpectancy = sex === "male" ? 76 : 81;
  const habitAdjustmentCurrent = calculateHabitAdjustment(lifeHabitsScore);
  const habitAdjustmentPotential = calculateHabitAdjustment(longevityPotential);
  const familyModifier = calculateFamilyModifier(answers.grandparents85);
  const contextPenalty = calculateContextPenalty(answers);

  const rawCurrent = baseExpectancy + habitAdjustmentCurrent + familyModifier + contextPenalty;
  const rawPotential = baseExpectancy + habitAdjustmentPotential + familyModifier + contextPenalty;

  const currentExpectedAge = Math.round(clamp(rawCurrent, age + 5, 105));
  const potentialExpectedAge = Math.round(clamp(rawPotential, age + 5, 105));

  const yearsGained = Math.max(0, Math.round(potentialExpectedAge - currentExpectedAge));
  const currentExpectedYear = CURRENT_YEAR + Math.max(0, currentExpectedAge - Math.round(age));
  const potentialExpectedYear = CURRENT_YEAR + Math.max(0, potentialExpectedAge - Math.round(age));

  return {
    currentExpectedAge,
    potentialExpectedAge,
    yearsGained,
    currentExpectedYear,
    potentialExpectedYear,
  };
}

function calculateHabitAdjustment(score: number) {
  // Allow ±12 years swing based on habits to highlight how daily routines influence lifespan
  return ((score - 50) / 50) * 12;
}

function calculateFamilyModifier(grandparents85?: string) {
  switch (grandparents85) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "threeOrFour":
      return 4.5;
    default:
      return 0;
  }
}

function calculateContextPenalty(answers: AssessmentAnswers) {
  let penalty = 0;

  if (answers.nicotine === "dailyUser") {
    penalty -= 4;
  }
  if (answers.chronicCondition === "yes") {
    penalty -= 3;
  }

  const bpHigh = answers.bloodPressure === "high";
  const glucoseHigh = answers.fastingGlucose === "diabetes" || answers.fastingGlucose === "prediabetes";
  if (bpHigh || glucoseHigh) {
    penalty -= 1.5;
  }

  return penalty;
}
