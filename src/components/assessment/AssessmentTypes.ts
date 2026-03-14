export type AssessmentSectionId =
  | "basicHealth"
  | "food"
  | "movement"
  | "sleep"
  | "connection"
  | "purposeStress"
  | "healthHabits"
  | "familyContext";

export type QuestionInputType = "text" | "number" | "singleSelect" | "composite";

export interface AssessmentOption {
  value: string;
  label: string;
  helperText?: string;
}

export interface CompositeFieldConfig {
  id: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface AssessmentQuestion {
  id: AssessmentQuestionId;
  prompt: string;
  placeholder?: string;
  helperText?: string;
  sectionId: AssessmentSectionId;
  type: QuestionInputType;
  required?: boolean;
  options?: AssessmentOption[];
  min?: number;
  max?: number;
  compositeFields?: CompositeFieldConfig[];
}

export interface AssessmentSectionConfig {
  id: AssessmentSectionId;
  title: string;
  description?: string;
}

export type SexOption = "male" | "female";

export type OptionalMarkerKey = "bloodPressure" | "ldl" | "fastingGlucose";

export type AssessmentQuestionId =
  | "firstName"
  | "age"
  | "sex"
  | "height"
  | "weight"
  | "fruitsVeg"
  | "processedFoods"
  | "sugarIntake"
  | "homePreparedMeals"
  | "waterIntake"
  | "cardio"
  | "strengthTraining"
  | "dailyMovement"
  | "fitnessLevel"
  | "mobility"
  | "sleepDuration"
  | "sleepQuality"
  | "sleepSchedule"
  | "timeWithOthers"
  | "socialSupport"
  | "sharedMeals"
  | "sharedTable"
  | "screenFreeMeals"
  | "stressFrequency"
  | "mentalHealthImpact"
  | "purpose"
  | "alcohol"
  | "nicotine"
  | "chronicDisease"
  | "selfRatedHealth"
  | "grandparents85"
  | "preventiveCare"
  | "weightDistribution";

export interface HeightAnswer {
  feet?: number;
  inches?: number;
  [key: string]: number | undefined;
}

export interface AssessmentAnswers {
  firstName?: string;
  age?: number;
  sex?: SexOption;
  height?: HeightAnswer;
  weight?: number;
  fruitsVeg?: string;
  processedFoods?: string;
  sugarIntake?: string;
  homePreparedMeals?: string;
  waterIntake?: string;
  cardio?: string;
  strengthTraining?: string;
  dailyMovement?: string;
  fitnessLevel?: string;
  mobility?: string;
  sleepDuration?: string;
  sleepQuality?: string;
  sleepSchedule?: string;
  timeWithOthers?: string;
  socialSupport?: string;
  sharedMeals?: string;
  sharedTable?: string;
  screenFreeMeals?: string;
  stressFrequency?: string;
  mentalHealthImpact?: string;
  purpose?: string;
  alcohol?: string;
  nicotine?: string;
  chronicDisease?: string;
  selfRatedHealth?: string;
  grandparents85?: string;
  preventiveCare?: string;
  weightDistribution?: string;
  bloodPressure?: string;
  ldl?: string;
  fastingGlucose?: string;
}

export type PillarKey = "food" | "movement" | "sleep" | "connection" | "purpose" | "stress";

export interface PillarScore {
  key: PillarKey;
  label: string;
  score: number;
  description: string;
}

export interface TimelinePoint {
  label: string;
  value: number;
}

export interface LongevityMetrics {
  surveyBiologicalAge: number;
  estimatedLifespan: number;
  longevityPotential: number;
  yearsYouCouldGain: number;
}

export interface AssessmentStrengthOpportunity {
  title: string;
  description: string;
}

export interface GeneralRecommendation {
  title: string;
  detail: string;
}

export interface AssessmentResultsPayload {
  metrics: LongevityMetrics;
  pillarScores: PillarScore[];
  normalizedScore: number;
  strengths: AssessmentStrengthOpportunity[];
  opportunities: AssessmentStrengthOpportunity[];
  recommendations: GeneralRecommendation[];
  baselineLifeExpectancy: number;
}
