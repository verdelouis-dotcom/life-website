"use client";

import type { AssessmentQuestion } from "@/components/assessment/AssessmentTypes";

interface QuestionStepProps {
  question: AssessmentQuestion;
  sectionTitle: string;
  sectionDescription?: string;
  stepLabel: string;
  textValue?: string;
  numberValue?: number;
  selectedValue?: string;
  compositeValue?: Record<string, number | undefined>;
  onTextChange?: (value: string) => void;
  onNumberChange?: (value: number | undefined) => void;
  onOptionSelect?: (value: string) => void;
  onCompositeChange?: (fieldId: string, value: number | undefined) => void;
  onBack: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
}

export default function QuestionStep({
  question,
  sectionTitle,
  sectionDescription,
  stepLabel,
  textValue,
  numberValue,
  selectedValue,
  compositeValue,
  onTextChange,
  onNumberChange,
  onOptionSelect,
  onCompositeChange,
  onBack,
  onNext,
  isNextDisabled,
}: QuestionStepProps) {
  function renderInput() {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            value={textValue ?? ""}
            onChange={(event) => onTextChange?.(event.target.value)}
            placeholder={question.placeholder}
            className="mt-5 w-full rounded-3xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
            required={question.required}
          />
        );
      case "number":
        return (
          <input
            type="number"
            inputMode="numeric"
            min={question.min}
            max={question.max}
            value={typeof numberValue === "number" && Number.isFinite(numberValue) ? numberValue : ""}
            onChange={(event) => onNumberChange?.(event.target.value ? Number(event.target.value) : undefined)}
            placeholder={question.placeholder}
            className="mt-5 w-full rounded-3xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
            required={question.required}
          />
        );
      case "singleSelect":
        return (
          <div className="mt-6 grid gap-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 text-left text-base transition ${
                  selectedValue === option.value
                    ? "border-[var(--olive)] bg-white text-[var(--life-forest)]"
                    : "border-[var(--border)] bg-white/70 text-[var(--text)] hover:border-[var(--olive)]/60"
                }`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={selectedValue === option.value}
                  onChange={() => onOptionSelect?.(option.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      case "composite":
        return (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {question.compositeFields?.map((field) => (
              <div key={field.id}>
                <label className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--olive)]">{field.label}</label>
                <input
                  type="number"
                  inputMode="numeric"
                  min={field.min}
                  max={field.max}
                  step={field.step ?? 1}
                  value={typeof compositeValue?.[field.id] === "number" ? compositeValue?.[field.id] : ""}
                  onChange={(event) =>
                    onCompositeChange?.(field.id, event.target.value ? Number(event.target.value) : undefined)
                  }
                  className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-white/80 px-4 py-3 text-base text-[var(--text)] focus:border-[var(--olive)] focus:outline-none"
                  required={question.required}
                />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <section className="rounded-[40px] border border-[var(--border)] bg-white/90 p-8 shadow-sm">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[var(--olive)]">
        <span>{sectionTitle}</span>
        <span>{stepLabel}</span>
      </div>
      {sectionDescription && <p className="mt-2 text-sm text-[var(--muted)]">{sectionDescription}</p>}
      <h2 className="mt-6 text-2xl font-semibold text-[var(--life-forest)]">{question.prompt}</h2>
      {question.helperText && <p className="mt-2 text-sm text-[var(--muted)]">{question.helperText}</p>}

      {renderInput()}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--olive)]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={isNextDisabled}
          className="inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#394930] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Next
        </button>
      </div>
    </section>
  );
}
