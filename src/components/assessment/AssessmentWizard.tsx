"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import AssessmentIntro from "@/components/assessment/AssessmentIntro";
import ProgressBar from "@/components/assessment/ProgressBar";
import QuestionStep from "@/components/assessment/QuestionStep";
import AssessmentResults from "@/components/assessment/AssessmentResults";
import type { AssessmentAnswers, AssessmentQuestion, OptionalMarkerKey } from "@/components/assessment/AssessmentTypes";
import {
  ASSESSMENT_QUESTIONS,
  ASSESSMENT_SECTIONS,
  OPTIONAL_MARKER_QUESTIONS,
  TOTAL_QUESTION_COUNT,
} from "@/lib/assessment/questions";
import { evaluateAssessment } from "@/lib/assessment/scoring";
import {
  clearAssessmentProgress,
  loadAssessmentProgress,
  persistAssessmentProgress,
} from "@/lib/assessment/utils";

const CALCULATION_DELAY_MS = 1900;

type Phase = "intro" | "questions" | "optional" | "calculating" | "results";

export default function AssessmentWizard() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>(() => loadAssessmentProgress() ?? {});
  const [results, setResults] = useState<ReturnType<typeof evaluateAssessment> | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!hasAnyResponses(answers)) {
      clearAssessmentProgress();
      return;
    }
    persistAssessmentProgress(answers);
  }, [answers]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const sections = useMemo(() => {
    return new Map(ASSESSMENT_SECTIONS.map((section) => [section.id, section]));
  }, []);

  const hasProgress = useMemo(() => hasAnyResponses(answers), [answers]);

  const currentQuestion: AssessmentQuestion | undefined = ASSESSMENT_QUESTIONS[currentIndex];

  function findFirstIncompleteIndex() {
    return ASSESSMENT_QUESTIONS.findIndex((question) => !isQuestionComplete(question));
  }

  function handleStart() {
    const firstIncomplete = findFirstIncompleteIndex();
    setCurrentIndex(firstIncomplete === -1 ? 0 : firstIncomplete);
    setPhase("questions");
  }

  function handleBack() {
    if (phase === "optional") {
      setPhase("questions");
      setCurrentIndex(TOTAL_QUESTION_COUNT - 1);
      return;
    }

    if (currentIndex === 0) {
      setPhase("intro");
      return;
    }

    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  function handleNext() {
    if (!currentQuestion) return;

    if (currentIndex === TOTAL_QUESTION_COUNT - 1) {
      setAnswers((prev) => applyOptionalDefaults(prev));
      setPhase("optional");
      return;
    }

    setCurrentIndex((prev) => Math.min(prev + 1, TOTAL_QUESTION_COUNT - 1));
  }

  function handleCompositeChange(fieldId: string, value: number | undefined) {
    setAnswers((prev) => ({
      ...prev,
      height: {
        ...(prev.height || {}),
        [fieldId]: value,
      },
    }));
  }

  function isQuestionComplete(question: AssessmentQuestion) {
    const value = answers[question.id];
    if (question.type === "text") {
      return typeof value === "string" && value.trim().length > 0;
    }
    if (question.type === "number") {
      return typeof value === "number" && Number.isFinite(value);
    }
    if (question.type === "singleSelect") {
      return typeof value === "string" && value.length > 0;
    }
    if (question.type === "composite") {
      return Boolean(answers.height?.feet) && typeof answers.height?.inches === "number";
    }
    return false;
  }

  const progressStep = Math.min(currentIndex + 1, TOTAL_QUESTION_COUNT);
  const stepLabel = `Question ${progressStep} of ${TOTAL_QUESTION_COUNT}`;
  const section = currentQuestion ? sections.get(currentQuestion.sectionId) : undefined;
  const isNextDisabled = currentQuestion ? !isQuestionComplete(currentQuestion) : true;

  function handleSubmitResults() {
    setPhase("calculating");
    timerRef.current = setTimeout(() => {
      const computed = evaluateAssessment(answers);
      setResults(computed);
      setPhase("results");
    }, CALCULATION_DELAY_MS);
  }

  function handleRestart() {
    clearAssessmentProgress();
    setAnswers({});
    setCurrentIndex(0);
    setResults(null);
    setPhase("intro");
  }

  function renderContent() {
    if (phase === "intro") {
      return <AssessmentIntro onStart={handleStart} hasProgress={hasProgress} />;
    }

    if (phase === "questions" && currentQuestion) {
      return (
        <div className="space-y-6">
          <ProgressBar current={progressStep} total={TOTAL_QUESTION_COUNT} />
          <QuestionStep
            question={currentQuestion}
            sectionTitle={section?.title ?? ""}
            sectionDescription={section?.description}
            stepLabel={stepLabel}
            textValue={typeof answers[currentQuestion.id] === "string" ? (answers[currentQuestion.id] as string) : undefined}
            numberValue={typeof answers[currentQuestion.id] === "number" ? (answers[currentQuestion.id] as number) : undefined}
            selectedValue={typeof answers[currentQuestion.id] === "string" ? (answers[currentQuestion.id] as string) : undefined}
            compositeValue={currentQuestion.id === "height" ? answers.height : undefined}
            onTextChange={(value) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))}
            onNumberChange={(value) =>
              setAnswers((prev) => ({
                ...prev,
                [currentQuestion.id]: typeof value === "number" ? value : undefined,
              }))
            }
            onOptionSelect={(value) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))}
            onCompositeChange={handleCompositeChange}
            onBack={handleBack}
            onNext={handleNext}
            isNextDisabled={isNextDisabled}
          />
        </div>
      );
    }

    if (phase === "optional") {
      return <OptionalMarkersStep answers={answers} onChange={setAnswers} onBack={handleBack} onContinue={handleSubmitResults} />;
    }

    if (phase === "calculating") {
      return (
        <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 text-center shadow-sm" aria-live="polite">
          <p className="type-eyebrow">Please hold</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--life-forest)]">Calculating your longevity profile...</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">We’re analyzing your inputs to estimate biological age and lifespan projections.</p>
        </div>
      );
    }

    if (phase === "results" && results) {
      return <AssessmentResults answers={answers} results={results} onRestart={handleRestart} />;
    }

    return null;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 text-[var(--text)]">
      <div className="flex flex-col gap-2 text-center text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>Survey-based educational experience</span>
        <Link href="/assessment/methodology" className="text-[var(--olive)] underline decoration-[rgba(74,92,64,0.3)] underline-offset-4">
          Review the LIFE Assessment methodology
        </Link>
      </div>
      {renderContent()}
    </div>
  );
}

function hasAnyResponses(candidate: AssessmentAnswers) {
  return Object.values(candidate).some((value) => {
    if (typeof value === "string") return value.trim().length > 0;
    if (typeof value === "number") return Number.isFinite(value);
    if (typeof value === "object" && value !== null) {
      return Object.values(value).some((nested) => (typeof nested === "number" ? Number.isFinite(nested) : Boolean(nested)));
    }
    return false;
  });
}

function applyOptionalDefaults(candidate: AssessmentAnswers) {
  const next: AssessmentAnswers = { ...candidate };
  let mutated = false;
  OPTIONAL_MARKER_QUESTIONS.forEach((marker) => {
    if (!next[marker.id]) {
      const markerId = marker.id as OptionalMarkerKey;
      next[markerId] = "dontKnow";
      mutated = true;
    }
  });
  return mutated ? next : candidate;
}

interface OptionalMarkersStepProps {
  answers: AssessmentAnswers;
  onChange: Dispatch<SetStateAction<AssessmentAnswers>>;
  onBack: () => void;
  onContinue: () => void;
}

function OptionalMarkersStep({ answers, onChange, onBack, onContinue }: OptionalMarkersStepProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Optional Health Markers</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">Optional Health Markers</h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          If you know these values from recent blood work or routine care, include them for a more personalized estimate. Otherwise, choose “I don’t know.”
        </p>

        <div className="mt-6 space-y-5">
          {OPTIONAL_MARKER_QUESTIONS.map((question) => (
            <div key={question.id} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <label className="block text-sm font-semibold text-[var(--life-forest)]" htmlFor={`optional-${question.id}`}>
                {question.prompt}
              </label>
              {question.helperText && <p className="text-xs text-[var(--muted)]">{question.helperText}</p>}
              <select
                id={`optional-${question.id}`}
                value={(answers[question.id] as string) ?? "dontKnow"}
                onChange={(event) =>
                  onChange((prev) => ({
                    ...prev,
                    [question.id]: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
              >
                {(question.options ?? []).map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--olive)]"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onContinue}
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930]"
          >
            See Results
          </button>
        </div>
      </div>
    </section>
  );
}
