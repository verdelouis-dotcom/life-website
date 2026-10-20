import type { AddYearsOpportunity, AssessmentAnswers, SexOption } from "@/components/assessment/AssessmentTypes";
import { computeRemainingExpectancy, computeSurvivalQuantileAge } from "./ssaLifeTable.ts";

export type LongevityProjectionInput = { age: number; sex: SexOption; answers: AssessmentAnswers };
export type LongevityProjectionResult = {
  currentExpectedAge: number; potentialExpectedAge: number; yearsGained: number;
  currentExpectedYear: number; potentialExpectedYear: number; baselineExpectedAge: number;
  expectedAgeLow: number; expectedAgeHigh: number; yearsComparedWithBaseline: number;
  combinedHazardRatio: number; modelVersion: "life-expectancy-v2"; addYearsOpportunities: AddYearsOpportunity[];
};

type FactorKey = AddYearsOpportunity["factor"];
type Factor = { key: FactorKey; title: string; detail: string; hr: number; bestHr: number };

export function calculateLongevityProjection({ age, sex, answers }: LongevityProjectionInput): LongevityProjectionResult {
  const factors = buildFactors(answers, sex);
  const combinedHazardRatio = round(clamp(factors.reduce((product, factor) => product * factor.hr, 1), .26, 1 / .26), 3);
  const baselineExpectedAge = age + computeRemainingExpectancy(age, sex, 1);
  const uncappedExpectedAge = age + computeRemainingExpectancy(age, sex, combinedHazardRatio);
  const publishedSpan = sex === "female" ? 14 : 12.2;
  const currentAgeRaw = clamp(uncappedExpectedAge, baselineExpectedAge - publishedSpan, baselineExpectedAge + publishedSpan);
  const opportunities = buildOpportunities(age, sex, factors, combinedHazardRatio, currentAgeRaw);
  const currentExpectedAge = Math.round(currentAgeRaw);
  const potentialExpectedAge = Math.round(currentAgeRaw + opportunities.reduce((sum, item) => sum + item.estimatedYears, 0));
  const year = new Date().getFullYear();

  return {
    currentExpectedAge,
    potentialExpectedAge,
    yearsGained: Math.max(0, potentialExpectedAge - currentExpectedAge),
    currentExpectedYear: year + Math.max(0, currentExpectedAge - Math.round(age)),
    potentialExpectedYear: year + Math.max(0, potentialExpectedAge - Math.round(age)),
    baselineExpectedAge: round(baselineExpectedAge, 1),
    expectedAgeLow: Math.round(computeSurvivalQuantileAge(age, sex, combinedHazardRatio, .75)),
    expectedAgeHigh: Math.round(computeSurvivalQuantileAge(age, sex, combinedHazardRatio, .25)),
    yearsComparedWithBaseline: round(currentAgeRaw - baselineExpectedAge, 1),
    combinedHazardRatio,
    modelVersion: "life-expectancy-v2",
    addYearsOpportunities: opportunities,
  };
}

function buildFactors(answers: AssessmentAnswers, sex: SexOption): Factor[] {
  return [smokingFactor(answers), bmiFactor(answers), activityFactor(answers.moderateActivity), alcoholFactor(answers.alcohol, sex), sleepFactor(answers.sleepHours)];
}

function smokingFactor(answers: AssessmentAnswers): Factor {
  let publishedHr = 1.41;
  let detail = "Staying smoke-free";
  if (answers.cigaretteStatus === "never") publishedHr = 1;
  if (answers.cigaretteStatus === "current") publishedHr = 2.02;
  if (answers.cigaretteStatus === "former") {
    // Li et al.'s aggregate former-smoker HR is used through year 14; only the
    // well-supported 15+ year recovery estimate changes it further.
    publishedHr = answers.yearsSinceQuitting === "fifteenPlus" ? 1.10 : 1.41;
    detail = "Continuing to stay smoke-free";
  }
  return { key: "smoking", title: "Protect your smoke-free years", detail, hr: publishedHr / 1.41, bestHr: 1 / 1.41 };
}

function bmiFactor(answers: AssessmentAnswers): Factor {
  const totalInches = (answers.height?.feet ?? 0) * 12 + (answers.height?.inches ?? 0);
  const bmi = totalInches && answers.weight ? answers.weight * 703 / (totalInches * totalInches) : 27;
  const publishedHr = bmi < 18.5 ? 1.51 : bmi < 23 ? 1.06 : bmi < 25 ? 1 : bmi < 30 ? 1.05 : bmi < 35 ? 1.25 : 1.67;
  return { key: "bmi", title: "Move toward your healthy weight range", detail: "Aim for a sustainable BMI in the research reference range with professional guidance.", hr: publishedHr / 1.05, bestHr: 1 / 1.05 };
}

function activityFactor(value?: string): Factor {
  const values: Record<string, number> = { zero: 1, oneToSeventyFour: .65, seventyFiveToOneFortyNine: .56, oneFiftyToTwoNinetyNine: .50, threeHundredPlus: .44 };
  const publishedHr = values[value ?? "seventyFiveToOneFortyNine"] ?? .56;
  return { key: "activity", title: "Build your weekly movement", detail: "Work toward at least 150 minutes of moderate-to-vigorous activity each week.", hr: publishedHr / .56, bestHr: .44 / .56 };
}

function alcoholFactor(drinks: number | undefined, sex: SexOption): Factor {
  const gramsPerDay = Math.max(0, drinks ?? 3.5) * 2;
  let publishedHr = 1.03;
  if (gramsPerDay === 0) publishedHr = 1.27;
  else if (gramsPerDay < 5) publishedHr = 1.03;
  else if (gramsPerDay < 15) publishedHr = 1;
  else if (gramsPerDay < 30) publishedHr = sex === "male" ? .99 : 1.25;
  else publishedHr = 1.25;
  return { key: "alcohol", title: "Keep alcohol in a lower-risk range", detail: "Reducing higher intake can move this factor toward the study’s lower-risk range.", hr: publishedHr / 1.03, bestHr: .99 / 1.03 };
}

function sleepFactor(value?: string): Factor {
  const values: Record<string, number> = { underFive: 1.13, fiveToUnderSix: 1.10, sixToUnderSeven: 1.06, sevenToEight: 1, overEightToNine: 1.13, overNine: 1.28 };
  const rr = values[value ?? "sevenToEight"] ?? 1;
  return { key: "sleep", title: "Move sleep toward 7–8 hours", detail: "A consistent 7–8 hours is the lowest-risk range in the cited sleep analysis.", hr: rr, bestHr: 1 };
}

function buildOpportunities(age: number, sex: SexOption, factors: Factor[], combinedHr: number, currentAge: number) {
  return factors.filter((factor) => factor.bestHr < factor.hr - .001).map((factor) => {
    const improvedHr = clamp(combinedHr / factor.hr * factor.bestHr, .26, 1 / .26);
    const improvedAge = age + computeRemainingExpectancy(age, sex, improvedHr);
    return { factor: factor.key, title: factor.title, detail: factor.detail, estimatedYears: round(Math.max(0, improvedAge - currentAge), 1) };
  }).filter((item) => item.estimatedYears >= .1).sort((a, b) => b.estimatedYears - a.estimatedYears).slice(0, 3);
}

function clamp(value: number, min: number, max: number) { return Math.min(max, Math.max(min, value)); }
function round(value: number, digits: number) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }
