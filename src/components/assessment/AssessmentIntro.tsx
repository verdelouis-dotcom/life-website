"use client";

import Link from "next/link";

interface AssessmentIntroProps {
  onStart: () => void;
  hasProgress: boolean;
}

const TRUST_POINTS = [
  "3 minutes",
  "Your estimated LIFE expectancy",
  "Free, private",
];

export default function AssessmentIntro({ onStart, hasProgress }: AssessmentIntroProps) {
  return (
    <section className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-[var(--border)] bg-white/90 px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
      <p className="type-eyebrow text-[var(--olive)]">LIFE LONGEVITY ASSESSMENT</p>
      <h1 className="mx-auto mt-4 max-w-4xl type-display leading-[0.98]">How many years do you have left?</h1>
      <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[var(--text)]">Your habits are changing the answer right now. Find out your number, and how to add years.</p>
      <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">A 3-minute assessment built on national life-expectancy data and longevity research across LIFE&apos;s six pillars.</p>

      <ul className="mt-6 flex flex-col gap-3 text-sm text-[var(--text)] sm:flex-row sm:justify-center">
        {TRUST_POINTS.map((point) => (
          <li key={point} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
            {point}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onStart}
        className="btn-primary mt-9 min-h-14 px-10 py-4 text-lg"
      >
        {hasProgress ? "Resume My Assessment" : "Find My Number"}
      </button>

      <p className="mt-4 text-sm text-[var(--muted)]">Free · Results in minutes</p>
      <Link
        href="/assessment/methodology"
        style={{ color: "#3f5338" }}
        className="mt-5 inline-flex items-center justify-center text-sm font-semibold text-[var(--olive)] hover:text-[#2f3a29]"
      >
        Learn about the research behind this assessment
      </Link>
      <p className="mx-auto mt-7 max-w-2xl text-xs leading-5 text-[var(--muted)]">Statistical estimate for education only. Not a medical prediction or diagnosis.</p>
    </section>
  );
}
