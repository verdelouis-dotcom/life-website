import assert from "node:assert/strict";
import test from "node:test";
import { calculateLongevityProjection } from "../src/lib/assessment/longevityProjection.ts";
import { computeRemainingExpectancy } from "../src/lib/assessment/ssaLifeTable.ts";

const average = {
  age: 50, sex: "female" as const, height: { feet: 5, inches: 5 }, weight: 155,
  cigaretteStatus: "former" as const, yearsSinceQuitting: "underOne" as const,
  moderateActivity: "seventyFiveToOneFortyNine", alcohol: 1.75, sleepHours: "sevenToEight",
};

test("all-average answers remain within one year of the SSA baseline", () => {
  const result = calculateLongevityProjection({ age: 50, sex: "female", answers: average });
  const baselineAge = 50 + computeRemainingExpectancy(50, "female");
  assert.ok(Math.abs(result.currentExpectedAge - baselineAge) <= 1, `${result.currentExpectedAge} vs ${baselineAge}`);
});

test("all-best and all-worst stay inside the published joint span", () => {
  const best = calculateLongevityProjection({ age: 50, sex: "female", answers: { ...average, weight: 130, cigaretteStatus: "never", moderateActivity: "threeHundredPlus", alcohol: 7, sleepHours: "sevenToEight" } });
  const worst = calculateLongevityProjection({ age: 50, sex: "female", answers: { ...average, weight: 230, cigaretteStatus: "current", moderateActivity: "zero", alcohol: 21, sleepHours: "overNine" } });
  assert.ok(Math.abs(best.yearsComparedWithBaseline) <= 14);
  assert.ok(Math.abs(worst.yearsComparedWithBaseline) <= 14);
});

test("each modeled factor moves the estimate in the expected direction", () => {
  const baseline = calculateLongevityProjection({ age: 50, sex: "female", answers: average }).currentExpectedAge;
  const adverse = [
    { ...average, cigaretteStatus: "current" as const },
    { ...average, weight: 230 },
    { ...average, moderateActivity: "zero" },
    { ...average, alcohol: 21 },
  ];
  adverse.forEach((answers) => assert.ok(calculateLongevityProjection({ age: 50, sex: "female", answers }).currentExpectedAge < baseline));
});

test("sleep duration has the expected U-shaped effect", () => {
  const seven = calculateLongevityProjection({ age: 50, sex: "female", answers: { ...average, sleepHours: "sevenToEight" } }).currentExpectedAge;
  const short = calculateLongevityProjection({ age: 50, sex: "female", answers: { ...average, sleepHours: "underFive" } }).currentExpectedAge;
  const long = calculateLongevityProjection({ age: 50, sex: "female", answers: { ...average, sleepHours: "overNine" } }).currentExpectedAge;
  assert.ok(seven > short);
  assert.ok(seven > long);
});
