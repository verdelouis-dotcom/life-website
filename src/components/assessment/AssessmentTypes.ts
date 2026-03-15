export type AssessmentSectionId =
  | "startingPoint"
  | "food"
  | "movement"
  | "sleep"
  | "connection"
  | "purpose"
  | "stressRegulation"
  | "healthContext";

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
  | "fruitsVegServings"
  | "processedMeals"
  | "addedSugar"
  | "homeCookedMeals"
  | "hydrationChoice"
  | "fiberFoods"
  | "moderateActivity"
  | "strengthDays"
  | "sedentaryTime"
  | "lifestyleMovement"
  | "mobilityPractice"
  | "sleepHours"
  | "wakeRested"
  | "sleepConsistency"
  | "sleepHygiene"
  | "meaningfulTime"
  | "supportSystem"
  | "sharedMeals"
  | "screenFreeMeals"
  | "communityBelonging"
  | "senseOfPurpose"
  | "meaningfulActivities"
  | "contributionFrequency"
  | "overwhelmFrequency"
  | "recoveryHabits"
  | "outdoorQuietTime"
  | "alcohol"
  | "nicotine"
  | "chronicCondition"
  | "selfRatedHealth"
  | "preventiveCare"
  | "grandparents85"
  | OptionalMarkerKey;

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
  fruitsVegServings?: string;
  processedMeals?: string;
  addedSugar?: string;
  homeCookedMeals?: string;
  hydrationChoice?: string;
  fiberFoods?: string;
  moderateActivity?: string;
  strengthDays?: string;
  sedentaryTime?: string;
  lifestyleMovement?: string;
  mobilityPractice?: string;
  sleepHours?: string;
  wakeRested?: string;
  sleepConsistency?: string;
  sleepHygiene?: string;
  meaningfulTime?: string;
  supportSystem?: string;
  sharedMeals?: string;
  screenFreeMeals?: string;
  communityBelonging?: string;
  senseOfPurpose?: string;
  meaningfulActivities?: string;
  contributionFrequency?: string;
  overwhelmFrequency?: string;
  recoveryHabits?: string;
  outdoorQuietTime?: string;
  alcohol?: string;
  nicotine?: string;
  chronicCondition?: string;
  selfRatedHealth?: string;
  preventiveCare?: string;
  grandparents85?: string;
  bloodPressure?: string;
  ldl?: string;
  fastingGlucose?: string;
}

export type PillarKey = "food" | "movement" | "sleep" | "connection" | "purpose" | "stressRegulation";

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

export interface HabitOpportunityInsight {
  questionId: AssessmentQuestionId;
  pillar: PillarKey;
  prompt: string;
  score: number;
}

export interface LongevityMetrics {
  lifeHabitsScore: number;
  healthContextScore: number;
  currentLongevityBaseline: number;
  longevityPotential: number;
  strongestPillar?: PillarScore;
  weakestPillar?: PillarScore;
  habitOpportunities: HabitOpportunityInsight[];
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
  strengths: AssessmentStrengthOpportunity[];
  opportunities: AssessmentStrengthOpportunity[];
  recommendations: GeneralRecommendation[];
}
