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
  const strongestPillar = results.metrics.strongestPillar;
  const growthPillar = results.metrics.weakestPillar;
  const scoreMessage = getScoreMessage(lifeScore);
  const [shareStatus, setShareStatus] = useState<string>("");
  const shareSummary = useMemo(
    () =>
      `My LIFE Score: ${lifeScore}%\n\nCurrent path: ${results.metrics.currentExpectedAge} years\nPotential with consistent LIFE habits: ${results.metrics.potentialExpectedAge} years\n\nStrongest pillar: ${strongestPillar?.label ?? "N/A"}\nGrowth opportunity: ${growthPillar?.label ?? "N/A"}\n\nTake the LIFE Longevity Assessment:\nhttps://www.longevityinitiativeforfoodandeducation.com/assessment`,
    [
      growthPillar?.label,
      lifeScore,
      results.metrics.currentExpectedAge,
      results.metrics.potentialExpectedAge,
      strongestPillar?.label,
    ]
  );

  const heroCards = [
    {
      title: "Current Path",
      value: `${results.metrics.currentExpectedAge} yrs`,
      detail: `≈ Year ${results.metrics.currentExpectedYear}`,
    },
    {
      title: "With Consistent LIFE Habits",
      value: `${results.metrics.potentialExpectedAge} yrs`,
      detail: `≈ Year ${results.metrics.potentialExpectedYear}`,
    },
    {
      title: "Years You Could Gain",
      value: `+${results.metrics.yearsGained} yrs`,
      detail: "Educational estimate",
    },
  ];

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
      <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="type-eyebrow text-[var(--olive)]">Your LIFE Score</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">{lifeScore}%</h1>
            <p className="mt-3 text-base text-[var(--muted)]">{scoreMessage}</p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--text)] md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                <p className="type-eyebrow text-[var(--olive)]">Strongest pillar</p>
                <p className="mt-1 font-semibold text-[var(--life-forest)]">{strongestPillar?.label ?? "N/A"}</p>
                <p className="text-sm text-[var(--muted)]">{strongestPillar?.description}</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
                <p className="type-eyebrow text-[var(--terracotta)]">Growth opportunity</p>
                <p className="mt-1 font-semibold text-[var(--life-forest)]">{growthPillar?.label ?? "N/A"}</p>
                <p className="text-sm text-[var(--muted)]">{growthPillar?.description}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#fff8ef] p-6 text-center">
            <p className="type-eyebrow text-[var(--olive)]">Healthy longevity outlook</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--life-forest)]">Estimated LIFE span: {results.metrics.currentExpectedAge} yrs</p>
            <p className="text-sm text-[var(--muted)]">With consistent habits you could reach {results.metrics.potentialExpectedAge} yrs (+{results.metrics.yearsGained}).</p>
            <button
              type="button"
              onClick={onRestart}
              className="mt-5 inline-flex items-center justify-center rounded-2xl border border-[var(--olive)] px-5 py-2 text-sm font-semibold text-[var(--olive)] transition hover:bg-white"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          {heroCards.map((card) => (
            <SummaryCard key={card.title} title={card.title} value={card.value} detail={card.detail} />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/70 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">What your score means</p>
        <p className="mt-3 text-sm text-[var(--text)]">
          Your LIFE Score reflects the daily habits and health context that influence long-term wellbeing. It is an educational snapshot—not a medical diagnosis—and it highlights both strengths and
          areas with room to grow.
        </p>
        <p className="mt-3 text-sm text-[var(--text)]">{scoreMessage}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {supportingCards.map((card) => (
          <ResultsSummaryCard key={card.label} label={card.label} value={card.value} detail={card.detail} />
        ))}
      </section>

      <ShareSection
        score={lifeScore}
        strongest={strongestPillar?.label ?? "N/A"}
        growth={growthPillar?.label ?? "N/A"}
        currentAge={results.metrics.currentExpectedAge}
        potentialAge={results.metrics.potentialExpectedAge}
        shareSummary={shareSummary}
        shareStatus={shareStatus}
        onCopy={(payload) => handleCopy(payload, setShareStatus)}
        onShare={() => handleWebShare(shareSummary, setShareStatus)}
        onDownloadImage={() =>
          handleDownloadShareImage(
            {
              score: lifeScore,
              strongest: strongestPillar?.label ?? "N/A",
              growth: growthPillar?.label ?? "N/A",
              yearsGained: results.metrics.yearsGained,
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
        <p className="type-eyebrow text-[var(--olive)]">What to do next</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/how-it-works" className="btn-solid px-8 text-base">
            Learn How LIFE Works
          </Link>
          <Link href="/assessment/methodology" className="btn-outline px-8 text-base">
            Review Methodology
          </Link>
          <Link href="/newsletter" className="btn-outline px-8 text-base">
            Join the Newsletter
          </Link>
        </div>
      </section>

      {showEmailCaptureCard ? <EmailCaptureCard defaultFirstName={firstName} report={results} /> : null}

      <DonationSupportCard />

      <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 text-center shadow-sm">
        <a
          href="/#join"
          className="inline-flex items-center justify-center rounded-2xl border border-[var(--terracotta)] px-6 py-3 text-sm font-semibold text-[var(--terracotta)] transition hover:bg-[var(--terracotta)] hover:text-white"
        >
          Enroll in LIFE →
        </a>
      </section>

      <section className="rounded-[32px] border border-[var(--border)] bg-white/80 p-6 text-sm text-[var(--muted)]">
        <p>
          This assessment provides an educational estimate based on lifestyle and health factors associated with healthy aging. It is not a medical diagnosis and should not replace professional medical advice.
        </p>
        <Link href="/assessment/methodology" className="mt-3 inline-flex text-[var(--olive)]">
          Learn about the research behind this assessment
        </Link>
      </section>
    </div>
  );
}

function ShareSection({ score, strongest, growth, currentAge, potentialAge, shareSummary, shareStatus, onCopy, onShare, onDownloadImage }: {
  score: number;
  strongest: string;
  growth: string;
  currentAge: number;
  potentialAge: number;
  shareSummary: string;
  shareStatus: string;
  onCopy: (value: string) => void;
  onShare: () => void;
  onDownloadImage: () => void;
}) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://www.longevityinitiativeforfoodandeducation.com/assessment";

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Share your LIFE Score</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="space-y-1 text-sm text-[var(--muted)]">
          <p>My LIFE Score: {score}%</p>
          <p>Current path: {currentAge} years</p>
          <p>Potential with consistent LIFE habits: {potentialAge} years</p>
          <p>Strongest pillar: {strongest}</p>
          <p>Growth opportunity: {growth}</p>
          <p>Take the assessment: https://www.longevityinitiativeforfoodandeducation.com/assessment</p>
        </div>
        <div className="space-y-3">
          <button onClick={() => onCopy(currentUrl)} className="btn-outline w-full px-6 text-sm">
            Copy Link
          </button>
          <button onClick={() => onCopy(shareSummary)} className="btn-outline w-full px-6 text-sm">
            Copy Share Text
          </button>
          <button onClick={onDownloadImage} className="btn-outline w-full px-6 text-sm">
            Download Image
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
        title: "My LIFE Score",
        text: summary,
        url: "https://www.longevityinitiativeforfoodandeducation.com/assessment",
      })
      .catch(() => setShareStatus("Unable to open the native share dialog."));
  } else {
    setShareStatus("Sharing is not supported on this device.");
  }
}

function handleDownloadShareImage(
  data: { score: number; strongest: string; growth: string; yearsGained: number },
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
  ctx.font = "bold 64px 'Inter', sans-serif";
  ctx.fillText("My LIFE Score", 80, 140);

  ctx.font = "bold 140px 'Inter', sans-serif";
  ctx.fillText(`${data.score}%`, 80, 290);

  ctx.font = "28px 'Inter', sans-serif";
  const lines = [
    `Strongest pillar: ${data.strongest}`,
    `Growth area: ${data.growth}`,
    `Years you could gain: +${data.yearsGained}`,
    "Take the LIFE Longevity Assessment",
    "longevityinitiativeforfoodandeducation.com/assessment",
  ];
  let y = 360;
  lines.forEach((line) => {
    ctx.fillText(line, 80, y);
    y += 50;
  });

  const link = document.createElement("a");
  link.download = "life-score.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  setShareStatus("Share image downloaded.");
  setTimeout(() => setShareStatus(""), 3000);
}
function SummaryCard({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-[var(--life-forest)]">{value}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{detail}</p>
    </article>
  );
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
