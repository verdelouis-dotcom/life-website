"use client";

import Link from "next/link";

interface AssessmentIntroProps {
  onStart: () => void;
  hasProgress: boolean;
}

const TRUST_POINTS = [
  "Takes about 3 minutes",
  "Personalized report",
  "Research-informed and educational",
];

export default function AssessmentIntro({ onStart, hasProgress }: AssessmentIntroProps) {
  return (
    <section className="mx-auto max-w-4xl rounded-[40px] border border-[var(--border)] bg-white/80 p-10 text-center shadow-sm">
      <p className="type-eyebrow text-[var(--olive)]">LIFE Longevity Assessment</p>
      <h1 className="mt-3 type-display">LIFE Longevity Assessment</h1>
      <p className="mt-4 text-lg leading-7 text-[var(--muted)]">
        Discover how your daily habits may be shaping your long-term health.
      </p>
      <p className="mt-2 text-base text-[var(--text)]">
        This short assessment provides an educational estimate of biological age, lifespan potential, and lifestyle opportunities associated with healthy aging.
      </p>

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
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[var(--olive)] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#394930]"
      >
        {hasProgress ? "Resume Assessment" : "Start Assessment"}
      </button>

      <p className="mt-4 text-sm text-[var(--muted)]">Free to take • Results in minutes</p>
      <Link
        href="/assessment/methodology"
        className="mt-5 inline-flex items-center justify-center text-sm font-semibold text-[var(--olive)] hover:text-[#2f3a29]"
      >
        Learn about the research behind this assessment
      </Link>
    </section>
  );
}
