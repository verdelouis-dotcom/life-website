"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AssessmentAnswers, AssessmentQuestionId, AssessmentResultsPayload } from "@/components/assessment/AssessmentTypes";
import ResultsSummaryCard from "@/components/assessment/ResultsSummaryCard";
import EmailCaptureCard from "@/components/assessment/EmailCaptureCard";
import DonationSupportCard from "@/components/assessment/DonationSupportCard";
import { LIFE_HABIT_LIBRARY } from "@/lib/assessment/lifeHabitLibrary";
import { HABIT_RECOMMENDATIONS } from "@/lib/assessment/habitRecommendations";

interface AssessmentResultsProps {
  answers: AssessmentAnswers;
  results: AssessmentResultsPayload;
  onRestart: () => void;
  showEmailCaptureCard?: boolean;
}

export default function AssessmentResults({ answers, results, onRestart, showEmailCaptureCard = true }: AssessmentResultsProps) {
  const firstName = answers.firstName?.trim() || "Friend";
  const formatPercent = (value: number) => `${Math.round(value)}%`;
  const lifeScore = Math.round(results.metrics.lifeHabitsScore);
  const scoreMessage = getScoreMessage(lifeScore);
  const [shareStatus, setShareStatus] = useState<string>("");
  const shareSummary = useMemo(() => `My LIFE expectancy: age ${results.metrics.currentExpectedAge}\nFind yours at https://www.longevityinitiativeforfoodandeducation.com/assessment`, [results.metrics.currentExpectedAge]);

  const supportingCards = [
    {
      label: "LIFE Habits Score",
      value: formatPercent(results.metrics.lifeHabitsScore),
      detail: "Average across Food, Movement, Sleep, Connection, Purpose, Stress Regulation.",
    },
    {
      label: "Health Context Score",
      value: formatPercent(results.metrics.healthContextScore),
      detail: "Body composition, alcohol/nicotine, preventive care, family longevity, biomarkers.",
    },
  ];

  const topHabits = results.metrics.habitOpportunities.slice(0, 3);
  const pillarGuidance = results.pillarScores.map((pillar) => {
    const guide = LIFE_HABIT_LIBRARY[pillar.key];
    const habitCue = guide?.habits[0];
    return {
      key: pillar.key,
      label: pillar.label,
      score: Math.round(pillar.score),
      summary: guide?.summary,
      habit: habitCue?.title,
    };
  });

  return (
    <div className="space-y-10">
      <section className="rounded-[40px] border border-[var(--border)] bg-white/95 p-7 text-center shadow-sm sm:p-10">
        <p className="type-eyebrow text-[var(--olive)]">Your LIFE expectancy</p>
        <h1 className="mt-3 type-display text-[clamp(4rem,12vw,8rem)] leading-none text-[var(--life-forest)]">age {results.metrics.currentExpectedAge}</h1>
        <p className="mt-3 text-xl font-semibold text-[var(--olive)]">around {results.metrics.currentExpectedYear}</p>
        <p className="mt-3 text-base text-[var(--text)]">Most likely between age {results.metrics.expectedAgeLow} and {results.metrics.expectedAgeHigh}</p>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">{getBaselineMessage(results.metrics.yearsComparedWithBaseline)}</p>
        <a href="#add-years" style={{ color: "#fff8ef" }} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#9f5335] px-8 py-3 font-bold transition hover:bg-[#87442d] active:scale-[0.98]">Add years</a>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-[var(--muted)]">Statistical estimate for education only. Not a medical prediction or diagnosis.</p>
      </section>

      <section id="add-years" className="scroll-mt-24 rounded-[32px] border border-[var(--border)] bg-[#fff8ef] p-6 shadow-sm sm:p-8">
        <p className="type-eyebrow text-[var(--terracotta)]">Add years</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--life-forest)]">Your three biggest opportunities</h2>
        {results.metrics.addYearsOpportunities.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {results.metrics.addYearsOpportunities.map((item) => (
              <article key={item.factor} className="rounded-3xl border border-[var(--border)] bg-white p-5">
                <p className="text-3xl font-semibold text-[var(--terracotta)]">+{item.estimatedYears.toFixed(1)} years</p>
                <h3 className="mt-2 font-semibold text-[var(--life-forest)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        ) : <p className="mt-4 text-[var(--muted)]">Your modeled factors are already in their lowest-risk ranges. Keep reinforcing what is working.</p>}
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/70 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What your score means</p>
        <p className="mt-3 text-sm text-[var(--text)]">
          Your LIFE Score reflects the daily habits and health context that influence long-term wellbeing. It is an educational snapshot—not a medical diagnosis—and it highlights both strengths and
          areas with room to grow.
        </p>
        <p className="mt-3 text-sm text-[var(--text)]">{scoreMessage}</p>
        <p className="mt-3 text-xs text-[var(--muted)]">Your estimate uses age, sex, BMI, smoking, activity, alcohol, and sleep. Your other pillars appear below as guidance.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {supportingCards.map((card) => (
          <ResultsSummaryCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
        ))}
      </section>

      <ShareSection
        currentAge={results.metrics.currentExpectedAge}
        shareSummary={shareSummary}
        shareStatus={shareStatus}
        onCopy={(payload) => handleCopy(payload, setShareStatus)}
        onShare={() => handleWebShare(shareSummary, setShareStatus)}
        onDownloadImage={() =>
          handleDownloadShareImage(
            {
              age: results.metrics.currentExpectedAge,
            },
            setShareStatus
          )
        }
      />

      {topHabits.length ? (
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--terracotta)]">Top Habits to Improve First</p>
          <p className="mt-2 text-sm text-[var(--muted)]">These habits represent the areas with the most room for improvement across the LIFE pillars.</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--text)]">
            {topHabits.map((item) => (
              <li key={item.questionId} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <p className="font-semibold text-[var(--life-forest)]">
                  {getHabitRecommendation(item.questionId as AssessmentQuestionId, item.prompt)}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {results.pillarScores.find((pillar) => pillar.key === item.pillar)?.label ?? item.pillar}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Pillar Breakdown</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillarGuidance.map((pillar) => (
            <PillarCard key={pillar.key} label={pillar.label} score={pillar.score} summary={pillar.summary} habit={pillar.habit} />
          ))}
        </div>
      </section>

      <section className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
        <p className="type-eyebrow text-[var(--olive)]">Your free next steps</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)]">Use your pillar results to explore practical education for the habits that matter most to you.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/resources" className="btn-solid px-8 text-base">
            Explore Free Resources
          </Link>
          <Link href="/assessment/methodology" className="btn-outline px-8 text-base">
            Review Methodology
          </Link>
        </div>
      </section>

      {showEmailCaptureCard ? <EmailCaptureCard defaultFirstName={firstName} report={results} /> : null}

      <DonationSupportCard />

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 text-center shadow-sm">
        <button type="button" onClick={onRestart} className="btn-outline mb-4 px-6 text-sm">Retake Assessment</button>
        <Link
          href="/#join"
          className="inline-flex items-center justify-center rounded-2xl border border-[var(--terracotta)] px-6 py-3 text-sm font-semibold text-[var(--terracotta)] transition hover:bg-[var(--terracotta)] hover:text-white"
        >
          Enroll in LIFE →
        </Link>
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/80 p-6 text-sm text-[var(--muted)]">
        <p>
          Statistical estimate for education only. Not a medical prediction or diagnosis.
        </p>
        <Link href="/assessment/methodology" className="mt-3 inline-flex text-[var(--olive)]">
          Learn about the research behind this assessment
        </Link>
      </section>
    </div>
  );
}

function ShareSection({ currentAge, shareSummary, shareStatus, onCopy, onShare, onDownloadImage }: {
  currentAge: number;
  shareSummary: string;
  shareStatus: string;
  onCopy: (value: string) => void;
  onShare: () => void;
  onDownloadImage: () => void;
}) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://www.longevityinitiativeforfoodandeducation.com/assessment";

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Share my number</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-1 text-sm text-[var(--muted)]">
          <p className="text-lg font-semibold text-[var(--life-forest)]">My LIFE expectancy: age {currentAge}</p>
          <p className="break-all">Find yours at longevityinitiativeforfoodandeducation.com/assessment</p>
          <p className="text-xs">No personal health answers are included.</p>
        </div>
        <div className="space-y-3">
          <button onClick={() => onCopy(currentUrl)} className="btn-outline w-full px-6 text-sm">
            Copy Link
          </button>
          <button onClick={() => onCopy(shareSummary)} className="btn-outline w-full px-6 text-sm">
            Copy Share Text
          </button>
          <button onClick={onDownloadImage} className="btn-outline w-full px-6 text-sm">
            Download Share Card
          </button>
          <button onClick={onShare} className="btn-outline w-full px-6 text-sm">
            Share from this device
          </button>
          {shareStatus && <p className="text-xs text-[var(--muted)]">{shareStatus}</p>}
        </div>
      </div>
    </section>
  );
}

function getScoreMessage(score: number) {
  if (score >= 85) {
    return "Your habits show strong momentum. Keep reinforcing the LIFE pillars to maintain this trajectory.";
  }
  if (score >= 70) {
    return "You have a solid foundation. Consistent focus on the weaker pillars can unlock even more years of healthy living.";
  }
  if (score >= 50) {
    return "You’re building awareness. Pick one pillar to improve this month and measure again after your next LIFE cooking experience.";
  }
  return "This score is a starting point. Use the recommendations below and LIFE Resources to create small, sustainable shifts.";
}

function getBaselineMessage(years: number) {
  if (Math.abs(years) < .5) return "Your modeled habits are close to the national baseline for your age and sex.";
  if (years > 0) return `Your modeled habits are adding about ${Math.abs(years).toFixed(1)} years compared with the national baseline.`;
  return `About ${Math.abs(years).toFixed(1)} years are available to win back compared with the national baseline.`;
}

async function handleCopy(value: string, setShareStatus: (value: string) => void) {
  try {
    await navigator.clipboard.writeText(value);
    setShareStatus("Copied to clipboard.");
    setTimeout(() => setShareStatus(""), 3000);
  } catch {
    setShareStatus("Copy is unavailable on this device.");
  }
}

function handleWebShare(summary: string, setShareStatus: (value: string) => void) {
  if (navigator.share) {
    navigator
      .share({
        title: "My LIFE expectancy",
        text: summary,
        url: "https://www.longevityinitiativeforfoodandeducation.com/assessment",
      })
      .catch(() => setShareStatus("Unable to open the native share dialog."));
  } else {
    setShareStatus("Sharing is not supported on this device.");
  }
}

function handleDownloadShareImage(
  data: { age: number },
  setShareStatus: (value: string) => void
) {
  if (typeof window === "undefined") {
    return;
  }
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    setShareStatus("Unable to create image.");
    return;
  }

  ctx.fillStyle = "#f8f3eb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#1b3a2f";
  ctx.font = "bold 58px Georgia, serif";
  ctx.fillText("My LIFE expectancy", 80, 140);

  ctx.font = "bold 140px Georgia, serif";
  ctx.fillText(`age ${data.age}`, 80, 310);

  ctx.font = "28px 'Inter', sans-serif";
  const lines = ["Find yours at", "longevityinitiativeforfoodandeducation.com/assessment"];
  let y = 420;
  lines.forEach((line) => {
    ctx.fillText(line, 80, y);
    y += 50;
  });

  const link = document.createElement("a");
  link.download = "my-life-expectancy.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  setShareStatus("Share image downloaded.");
  setTimeout(() => setShareStatus(""), 3000);
}
function PillarCard({
  label,
  score,
  summary,
  habit,
}: {
  label: string;
  score: number;
  summary?: string;
  habit?: string;
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/90 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--life-forest)]">{label}</p>
        <span className="text-2xl font-semibold text-[var(--life-forest)]">{score}%</span>
      </div>
      {summary && <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>}
      {habit && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">
          Start with: <span className="normal-case text-[var(--text)]">{habit}</span>
        </p>
      )}
    </article>
  );
}

function getHabitRecommendation(questionId: AssessmentQuestionId, fallback: string) {
  return HABIT_RECOMMENDATIONS[questionId] ?? fallback;
}
