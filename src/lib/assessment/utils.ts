import type { AssessmentAnswers } from "@/components/assessment/AssessmentTypes";

const ASSESSMENT_STORAGE_KEY = "life_longevity_assessment_state_v1";

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function safeNumber(value: string | number | undefined): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string" && value.trim().length) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return undefined;
}

export function loadAssessmentProgress(): AssessmentAnswers | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const stored = window.sessionStorage.getItem(ASSESSMENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as AssessmentAnswers;
    return parsed ?? null;
  } catch (error) {
    console.warn("ASSESSMENT_STORAGE_READ_FAILED", error);
    return null;
  }
}

export function persistAssessmentProgress(answers: AssessmentAnswers) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.sessionStorage.setItem(ASSESSMENT_STORAGE_KEY, JSON.stringify(answers));
  } catch (error) {
    console.warn("ASSESSMENT_STORAGE_WRITE_FAILED", error);
  }
}

export function clearAssessmentProgress() {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.sessionStorage.removeItem(ASSESSMENT_STORAGE_KEY);
  } catch (error) {
    console.warn("ASSESSMENT_STORAGE_CLEAR_FAILED", error);
  }
}

export function formatYears(value: number) {
  return `${Math.round(value)} yrs`;
}
