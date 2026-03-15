import type { SexOption } from "@/components/assessment/AssessmentTypes";
import { clamp } from "@/lib/assessment/utils";

export type LongevityProjectionInput = {
  age: number;
  sex: SexOption;
  currentLongevityBaseline: number;
  longevityPotential: number;
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
  const { age, sex, currentLongevityBaseline, longevityPotential } = input;

  const baseExpectancy = sex === "male" ? 76 : 81;
  const baselineAdjustment = (currentLongevityBaseline - 50) * 0.15;
  const potentialAdjustment = (longevityPotential - 50) * 0.2;

  const rawCurrent = baseExpectancy + baselineAdjustment;
  const rawPotential = baseExpectancy + potentialAdjustment;

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
