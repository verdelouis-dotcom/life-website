"use client";

import { useMemo, useState } from "react";
import type {
  AssessmentAnswers,
  PillarKey,
  PillarScore,
  SexOption,
} from "@/components/assessment/AssessmentTypes";
import { calculateLongevityProjection } from "@/lib/assessment/longevityProjection";
import { calculateLongevityPotential } from "@/lib/assessment/scoring";
import { clamp } from "@/lib/assessment/utils";

const PILLAR_BOOSTS: Record<PillarKey, number> = {
  food: 5,
  movement: 6,
  sleep: 4,
  connection: 4,
  purpose: 3,
  stressRegulation: 3,
};

const PILLAR_DESCRIPTIONS: Record<PillarKey, string> = {
  food: "Plan produce-forward meals and batch cook so fresh ingredients become the default.",
  movement: "Layer natural movement, strength, and fewer sedentary hours into each day.",
  sleep: "Protect a consistent wind-down routine and earlier dinners to support deeper rest.",
  connection: "Schedule shared meals, conversations, and screen-free table time.",
  purpose: "Link daily routines to a meaningful mission and contribution.",
  stressRegulation: "Anchor micro reset practices that calm your nervous system.",
};

const TITLE_MAP: Record<PillarKey, string> = {
  food: "Food",
  movement: "Movement",
  sleep: "Sleep",
  connection: "Connection",
  purpose: "Purpose",
  stressRegulation: "Stress Regulation",
};

interface LongevitySimulatorProps {
  age: number;
  sex: SexOption;
  pillarScores: PillarScore[];
  healthContextScore: number;
  answers: AssessmentAnswers;
}

export default function LongevitySimulator({ age, sex, pillarScores, healthContextScore, answers }: LongevitySimulatorProps) {
  const [toggles, setToggles] = useState<Record<PillarKey, boolean>>({
    food: false,
    movement: false,
    sleep: false,
    connection: false,
    purpose: false,
    stressRegulation: false,
  });

  const baseScores = useMemo(() => {
    const map = new Map<PillarKey, number>();
    pillarScores.forEach((pillar) => {
      map.set(pillar.key, pillar.score);
    });
    return map;
  }, [pillarScores]);

  const adjustedPillars = useMemo(() => {
    return pillarScores.map((pillar) => {
      const boost = toggles[pillar.key] ? PILLAR_BOOSTS[pillar.key] : 0;
      return {
        ...pillar,
        score: clamp(pillar.score + boost, 0, 100),
      } satisfies PillarScore;
    });
  }, [pillarScores, toggles]);

  const adjustedLifeHabits = useMemo(() => {
    if (!adjustedPillars.length) return 0;
    const sum = adjustedPillars.reduce((total, pillar) => total + pillar.score, 0);
    return Math.round(sum / adjustedPillars.length);
  }, [adjustedPillars]);

  const adjustedLongevityPotential = useMemo(() => {
    return Math.round(calculateLongevityPotential(adjustedLifeHabits, adjustedPillars, answers));
  }, [adjustedLifeHabits, adjustedPillars, answers]);

  const adjustedLongevityBaseline = useMemo(() => {
    return Math.round(adjustedLifeHabits * 0.7 + healthContextScore * 0.3);
  }, [adjustedLifeHabits, healthContextScore]);

  const projection = useMemo(() => {
    return calculateLongevityProjection({
      age,
      sex,
      currentLongevityBaseline: adjustedLongevityBaseline,
      longevityPotential: adjustedLongevityPotential,
    });
  }, [age, sex, adjustedLongevityBaseline, adjustedLongevityPotential]);

  function handleToggle(pillar: PillarKey) {
    setToggles((prev) => ({
      ...prev,
      [pillar]: !prev[pillar],
    }));
  }

  return (
    <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-sm space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">Longevity Simulator</p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--life-forest)]">Explore how LIFE habits shift your trajectory</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Toggle the habits you want to emphasize. Each switch models a realistic boost in that pillar and shows how your LIFE Habits Score,
          Longevity Potential, and projected timeline could improve.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pillarScores.map((pillar) => {
          const baseScore = baseScores.get(pillar.key) ?? pillar.score;
          const boost = PILLAR_BOOSTS[pillar.key];
          const simulatedScore = toggles[pillar.key] ? Math.round(clamp(baseScore + boost, 0, 100)) : Math.round(baseScore);
          return (
            <article key={pillar.key} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--life-forest)]">{TITLE_MAP[pillar.key]}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Current {Math.round(baseScore)}%</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle(pillar.key)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    toggles[pillar.key]
                      ? "bg-[var(--olive)] text-white"
                      : "border border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--olive)]"
                  }`}
                >
                  {toggles[pillar.key] ? "Added" : "Add Habit"}
                </button>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">{PILLAR_DESCRIPTIONS[pillar.key]}</p>
              {toggles[pillar.key] && (
                <p className="mt-2 text-xs font-semibold text-[var(--olive)]">Simulated score: {simulatedScore}%</p>
              )}
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SimulatorMetricCard label="LIFE Habits Score" value={`${adjustedLifeHabits}%`} detail="Projected average across six pillars" />
        <SimulatorMetricCard label="Longevity Potential" value={`${adjustedLongevityPotential}%`} detail="If these habits stay consistent" />
        <SimulatorMetricCard label="Potential years gained" value={`+${projection.yearsGained} yrs`} detail="Educational estimate" />
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-sm text-[var(--muted)]">
        <p>
          Updated projection: <span className="font-semibold text-[var(--life-forest)]">Age {projection.currentExpectedAge}</span> (≈ {projection.currentExpectedYear})
          &nbsp;→&nbsp; <span className="font-semibold text-[var(--terracotta)]">Age {projection.potentialExpectedAge}</span> (≈ {projection.potentialExpectedYear})
        </p>
      </div>
    </section>
  );
}

interface SimulatorMetricCardProps {
  label: string;
  value: string;
  detail: string;
}

function SimulatorMetricCard({ label, value, detail }: SimulatorMetricCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-white/80 p-5 text-left shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)]">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-[var(--life-forest)]">{value}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
    </article>
  );
}
