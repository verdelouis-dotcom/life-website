"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./tracker.module.css";
import {
  TRACKER_HABITS,
  TRACKER_LEVELS,
  TRACKER_PILLARS,
  TRACKER_MIN_DAILY_POINTS,
  TRACKER_STATE_KEY,
  type TrackerHabit,
  type TrackerPillarKey,
  type TrackerHabitDifficulty,
  type TrackerLevel,
} from "@/lib/assessment/lifeHabitLibrary";
import { TRACKER_UNLOCK_KEY } from "@/lib/tracker";

const HABIT_MAP: Record<string, TrackerHabit> = TRACKER_HABITS.reduce<Record<string, TrackerHabit>>((acc, habit) => {
  acc[habit.id] = habit;
  return acc;
}, {});

const getHabitsForLevel = (level: number) => TRACKER_HABITS.filter((habit) => habit.minLevel <= level);

const INSTALL_PROMPT_KEY = "life_tracker_install_prompted";

const DIFF_STYLES: Record<TrackerHabitDifficulty, { bg: string; color: string }> = {
  Easy: { bg: "#EAF3DE", color: "#2C5239" },
  Medium: { bg: "#FFF3CC", color: "#8A6A00" },
  Bold: { bg: "#FAECE7", color: "#A0522D" },
};

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatDateKey = (date: Date) => date.toISOString().split("T")[0];
const todayKey = () => formatDateKey(new Date());
const offsetDateKey = (offset: number) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return formatDateKey(date);
};

interface TrackerState {
  level: number;
  ptsTotal: number;
  streak: number;
  best: number;
  days: Record<string, Record<string, boolean>>;
  selected: string[];
  hStreaks: Record<string, number>;
}

const DEFAULT_STATE: TrackerState = {
  level: 1,
  ptsTotal: 0,
  streak: 0,
  best: 0,
  days: {},
  selected: [],
  hStreaks: {},
};

type ToastState = { message: string; gold?: boolean } | null;

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

function calculateLevel(state: TrackerState) {
  const totalPoints = state.ptsTotal ?? 0;
  const streakDays = state.streak ?? 0;
  let level = 1;
  for (const lv of TRACKER_LEVELS) {
    if (totalPoints >= lv.pointsRequired && streakDays >= lv.streakRequired) {
      level = lv.level;
    }
  }
  return Math.max(level, state.level ?? 1);
}

function levelProgressPercent(state: TrackerState) {
  const current = TRACKER_LEVELS.find((lvl) => lvl.level === state.level) ?? TRACKER_LEVELS[0];
  const next = TRACKER_LEVELS.find((lvl) => lvl.level === state.level + 1);
  if (!next) return 100;
  const ptsSpan = Math.max(1, next.pointsRequired - current.pointsRequired);
  const streakSpan = Math.max(1, next.streakRequired - current.streakRequired);
  const ptsProgress = Math.min(1, Math.max(0, (state.ptsTotal - current.pointsRequired) / ptsSpan));
  const streakProgress = Math.min(1, Math.max(0, (state.streak - current.streakRequired) / streakSpan));
  return Math.round(Math.min(ptsProgress, streakProgress) * 100);
}

function computeCoverage(state: TrackerState, dateKey: string, habits: TrackerHabit[]) {
  const record = state.days[dateKey] ?? {};
  const coverage: Record<string, boolean> = {};
  TRACKER_PILLARS.forEach((pillar) => {
    coverage[pillar.id] = false;
  });
  habits.forEach((habit) => {
    if (!record[habit.id]) return;
    habit.pillars.forEach((pillar) => {
      coverage[pillar] = true;
    });
  });
  return coverage;
}

function checkStreakDay(state: TrackerState, dateKey: string, habits: TrackerHabit[]) {
  if (!habits.length) return false;
  const coverage = computeCoverage(state, dateKey, habits);
  const record = state.days[dateKey] ?? {};
  const points = habits.reduce((sum, habit) => (record[habit.id] ? sum + habit.points : sum), 0);
  const allPillars = TRACKER_PILLARS.every((pillar) => coverage[pillar.id]);
  return points >= TRACKER_MIN_DAILY_POINTS && allPillars;
}

const TrackerPage = () => {
  const router = useRouter();
  const [state, setState] = useState<TrackerState>(DEFAULT_STATE);
  const [activePillar, setActivePillar] = useState<TrackerPillarKey>(TRACKER_PILLARS[0]?.id ?? "food");
  const [authorized, setAuthorized] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const unlocked = window.localStorage.getItem(TRACKER_UNLOCK_KEY);
    if (!unlocked) {
      router.replace("/#join");
      return;
    }
    setAuthorized(true);
    const stored = window.localStorage.getItem(TRACKER_STATE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<TrackerState>;
        setState({ ...DEFAULT_STATE, ...parsed, days: parsed.days ?? {}, hStreaks: parsed.hStreaks ?? {}, selected: parsed.selected ?? [] });
      } catch {
        setState(DEFAULT_STATE);
      }
    }
    setLoaded(true);
  }, [router]);

  useEffect(() => {
    if (!authorized || typeof window === "undefined") return;
    const handle = window.setTimeout(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(() => undefined);
      }
    }, 500);
    return () => window.clearTimeout(handle);
  }, [authorized]);

  useEffect(() => {
    if (!loaded || typeof window === "undefined") return;
    window.localStorage.setItem(TRACKER_STATE_KEY, JSON.stringify(state));
  }, [state, loaded]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const currentDayKey = todayKey();
  const todayRecord = state.days[currentDayKey] ?? {};
  const unlockedHabits = useMemo(() => getHabitsForLevel(state.level ?? 1), [state.level]);
  const totalHabits = unlockedHabits.length;
  const completedHabits = unlockedHabits.reduce((sum, habit) => (todayRecord[habit.id] ? sum + 1 : sum), 0);
  const todaysPoints = unlockedHabits.reduce((sum, habit) => sum + (todayRecord[habit.id] ? habit.points : 0), 0);
  const coverage = computeCoverage(state, currentDayKey, unlockedHabits);
  const litPillars = TRACKER_PILLARS.filter((pillar) => coverage[pillar.id]);
  const pillarHasSelection = useMemo(() => {
    const map: Record<string, boolean> = {};
    TRACKER_PILLARS.forEach((pillar) => {
      map[pillar.id] = unlockedHabits.some((habit) => habit.pillars.includes(pillar.id as TrackerPillarKey));
    });
    return map;
  }, [unlockedHabits]);
  const uncoveredPillars = TRACKER_PILLARS.filter((pillar) => pillarHasSelection[pillar.id] && !coverage[pillar.id]);
  const ptsNeeded = Math.max(0, TRACKER_MIN_DAILY_POINTS - todaysPoints);
  const streakReady = unlockedHabits.length > 0 && ptsNeeded <= 0 && uncoveredPillars.length === 0;
  const nextLevel = TRACKER_LEVELS.find((lvl) => lvl.level === state.level + 1);
  const progressPercent = levelProgressPercent(state);

  const weekHistory = useMemo(() => {
    const history: { key: string; label: string; date: number; earned: boolean; partial: boolean; isToday: boolean }[] = [];
    const habits = getHabitsForLevel(state.level ?? 1);
    for (let offset = -6; offset <= 0; offset += 1) {
      const key = offsetDateKey(offset);
      const date = new Date();
      date.setDate(date.getDate() + offset);
      const earned = checkStreakDay(state, key, habits);
      const record = state.days[key] ?? {};
      const points = habits.reduce((sum, habit) => {
        if (!habit) return sum;
        return sum + (record[habit.id] ? habit.points : 0);
      }, 0);
      history.push({
        key,
        label: WEEKDAY_LABELS[date.getDay()],
        date: date.getDate(),
        earned,
        partial: points > 0 && !earned,
        isToday: offset === 0,
      });
    }
    return history;
  }, [state]);

  const statusParts: string[] = [];
  if (!streakReady && unlockedHabits.length) {
    if (ptsNeeded > 0) statusParts.push(`${ptsNeeded} more pts`);
    if (uncoveredPillars.length > 0) statusParts.push(`cover ${uncoveredPillars.map((p) => p.name).join(", ")}`);
  }

  const nudgeCopy = (() => {
    if (!unlockedHabits.length) return "";
    if (uncoveredPillars.length > 0) {
      const piece = uncoveredPillars[0];
      return `${piece.name} not covered${ptsNeeded > 0 ? ` · ${ptsNeeded} pts needed` : ""}`;
    }
    if (ptsNeeded > 0) {
      return `All pillars lit — ${ptsNeeded} more pts to earn today's streak`;
    }
    return "";
  })();

  const levelData = TRACKER_LEVELS.find((lvl) => lvl.level === state.level) ?? TRACKER_LEVELS[0];
  const progressLabel = nextLevel
    ? `To ${nextLevel.name}: ${Math.max(0, nextLevel.pointsRequired - state.ptsTotal)} pts + ${Math.max(0, nextLevel.streakRequired - state.streak)} streak days`
    : "Maximum level reached";


  const toggleHabit = (habitId: string) => {
    const habit = HABIT_MAP[habitId];
    if (!habit || !loaded) return;
    const wasDoneBefore = !!todayRecord[habitId];
    setState((prev) => {
      const key = todayKey();
      const dayRecord = { ...(prev.days[key] ?? {}) };
      const streaks = { ...(prev.hStreaks ?? {}) };
      const wasDone = !!dayRecord[habitId];
      dayRecord[habitId] = !wasDone;
      let ptsTotal = prev.ptsTotal ?? 0;
      if (wasDone) {
        ptsTotal = Math.max(0, ptsTotal - habit.points);
        streaks[habitId] = Math.max(0, (streaks[habitId] ?? 1) - 1);
      } else {
        ptsTotal += habit.points;
        streaks[habitId] = (streaks[habitId] ?? 0) + 1;
      }
      const habitsForLevel = getHabitsForLevel(prev.level ?? 1);
      const updated: TrackerState = {
        ...prev,
        days: { ...prev.days, [key]: dayRecord },
        hStreaks: streaks,
        ptsTotal,
      };
      const prevEarned = checkStreakDay(prev, key, habitsForLevel);
      const nowEarned = checkStreakDay(updated, key, habitsForLevel);
      if (!prevEarned && nowEarned) {
        const yesterdayEarned = checkStreakDay(updated, offsetDateKey(-1), habitsForLevel);
        const newStreak = yesterdayEarned ? (prev.streak ?? 0) + 1 : 1;
        updated.streak = newStreak;
        updated.best = Math.max(updated.best ?? 0, newStreak);
      } else if (prevEarned && !nowEarned) {
        const yesterdayEarned = checkStreakDay(prev, offsetDateKey(-1), habitsForLevel);
        updated.streak = yesterdayEarned ? Math.max(1, (prev.streak ?? 1) - 1) : 0;
      }
      updated.level = calculateLevel(updated);
      return updated;
    });
    setToast({
      message: wasDoneBefore ? "Habit unchecked" : `+${habit.points} pts · ${habit.pillars.length} pillar${habit.pillars.length > 1 ? "s" : ""}`,
      gold: !wasDoneBefore && habit.pillars.length > 1,
    });
    if (typeof window !== "undefined" && !window.localStorage.getItem(INSTALL_PROMPT_KEY)) {
      window.localStorage.setItem(INSTALL_PROMPT_KEY, "seen");
      setShowInstallPrompt(true);
    }
  };

  const filteredHabits = unlockedHabits.filter((habit) => habit.pillars.includes(activePillar));
  if (!authorized) {
    return (
      <div className={styles.page}>
        <div className={styles.centerState}>
          <div>🔒</div>
          <p>Members only</p>
          <small>Enroll for $10 to unlock the LIFE Tracker.</small>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className={styles.page}>
        <div className={styles.centerState}>
          <div>⏳</div>
          <p>Loading your tracker…</p>
          <small>Fetching your saved habits.</small>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.grid}>
          <section className={styles.leftColumn}>
            <div className={styles.levelCard} style={{ background: levelData.color }}>
              <div className={styles.levelMeta}>
                <p className={styles.levelEyebrow}>Level {state.level}</p>
                <h1>{levelData.name}</h1>
                <p className={styles.levelDescription}>{levelData.description}</p>
              </div>
              <div className={styles.levelMetrics}>
                <div className={styles.metricBlock}>
                  <div className={styles.metricValue}>{todaysPoints}</div>
                  <div className={styles.metricLabel}>Points today</div>
                </div>
                <div className={styles.metricBlock}>
                  <div className={styles.metricValue}>{state.streak}</div>
                  <div className={styles.metricLabel}>Current streak</div>
                </div>
              </div>
              <p className={styles.streakHint}>Check off habits daily to keep your streak alive.</p>
              <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
                </div>
                <div className={styles.progressLabel}>{progressLabel}</div>
              </div>
              <div className={styles.summaryList}>
                <div>
                  <span>Completed today</span>
                  <strong>
                    {completedHabits}/{totalHabits || 0}
                  </strong>
                </div>
                <div>
                  <span>Pillars lit</span>
                  <strong>{litPillars.length}/6</strong>
                </div>
              </div>
            </div>

            <div className={styles.weekCard}>
              <div className={styles.sectionHeader}>
                <h3>This week</h3>
                <span>Goal: 15 pts + all pillars</span>
              </div>
              <div className={styles.weekRow}>
                {weekHistory.map((day) => (
                  <div
                    key={day.key}
                    className={cx(styles.weekDay, day.isToday && styles.weekDayToday)}
                  >
                    <div className={styles.weekDayLabel}>{day.label}</div>
                    <div className={styles.weekDayDate}>{day.date}</div>
                    <div
                      className={cx(
                        styles.weekIndicator,
                        day.earned && styles.weekIndicatorEarned,
                        day.partial && !day.earned && styles.weekIndicatorPartial
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.levelPanel}>
              <div className={styles.sectionHeader}>
                <h3>Level path</h3>
                <span>Best streak: {state.best ?? 0} days</span>
              </div>
              <div className={styles.levelList}>
                {TRACKER_LEVELS.map((lvl) => {
                  const isCurrent = state.level === lvl.level;
                  const achieved = state.level > lvl.level;
                  return (
                    <div
                      key={lvl.level}
                      className={cx(styles.levelRow, achieved && styles.levelRowDone, isCurrent && styles.levelRowCurrent)}
                    >
                      <div className={styles.levelNumber} style={{ background: lvl.color }}>
                        {lvl.level}
                      </div>
                      <div className={styles.levelBody}>
                        <div className={styles.levelTitle}>
                          <strong>{lvl.name}</strong>
                          {isCurrent && <span className={styles.levelBadge}>Current</span>}
                          {achieved && <span className={styles.levelBadge}>Complete</span>}
                        </div>
                        <div className={styles.levelChips}>
                          {lvl.pointsRequired > 0 ? <span>{lvl.pointsRequired.toLocaleString()} pts</span> : null}
                          {lvl.streakRequired > 0 ? <span>{lvl.streakRequired}-day streak</span> : null}
                        </div>
                        <p>{lvl.unlocks}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={styles.rightColumn}>
            <div className={styles.statusCard}>
              {streakReady ? (
                <>
                  <p className={styles.statusHeading}>✨ Streak day earned!</p>
                  <p className={styles.statusSub}>All pillars covered and 15+ pts secured. Come back tomorrow.</p>
                </>
              ) : (
                <>
                  <p className={styles.statusHeading}>{statusParts.join(" · ") || "Keep going"}</p>
                  <p className={styles.statusSub}>Earn 15 pts and cover all 6 pillars to extend your streak.</p>
                </>
              )}
              {nudgeCopy ? <div className={styles.nudge}>{nudgeCopy}</div> : null}
            </div>

            <div className={styles.libraryPanel}>
              <div className={styles.sectionHeader}>
                <h3>Habit library</h3>
                <span>Tap any habit to mark it complete</span>
              </div>
              <div className={styles.pillarTabs}>
                {TRACKER_PILLARS.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    className={cx(styles.pillarTab, activePillar === pillar.id && styles.pillarTabActive)}
                    onClick={() => setActivePillar(pillar.id)}
                  >
                    <span className={styles.pillarDot} style={{ backgroundColor: pillar.color }} />
                    {pillar.name}
                  </button>
                ))}
              </div>
              <div className={styles.libraryList}>
                {filteredHabits.map((habit) => {
                  const done = !!todayRecord[habit.id];
                  return (
                    <div key={habit.id} className={cx(styles.habitCard, done && styles.habitCardDone)}>
                      <button type="button" className={cx(styles.habitCheck, done && styles.habitCheckDone)} onClick={() => toggleHabit(habit.id)} aria-label={`Mark ${habit.task} as ${done ? "incomplete" : "complete"}`}>
                        {done ? <span className={styles.habitCheckIcon}>✓</span> : null}
                      </button>
                      <div className={styles.habitContent}>
                        <div className={styles.habitCardHead}>
                          <div>
                            <h4>{habit.task}</h4>
                            <p>{habit.micro}</p>
                          </div>
                        </div>
                        <div className={styles.habitTags}>
                          {habit.pillars.map((pillarKey) => {
                            const meta = TRACKER_PILLARS.find((pillar) => pillar.id === pillarKey);
                            return (
                              <span key={`${habit.id}-${pillarKey}`} className={styles.pillarTag} style={{ backgroundColor: meta?.bg, color: meta?.color }}>
                                {meta?.name}
                              </span>
                            );
                          })}
                          <span className={styles.diffTag} style={{ backgroundColor: DIFF_STYLES[habit.difficulty].bg, color: DIFF_STYLES[habit.difficulty].color }}>
                            {habit.difficulty}
                          </span>
                          {habit.weekly && <span className={styles.weekTag}>Weekly</span>}
                          {habit.stack ? <span className={styles.stackTag}>{habit.stack}</span> : null}
                        </div>
                        {habit.stack ? <div className={styles.stackHint}>Stack onto: {habit.stack}</div> : null}
                      </div>
                    </div>
                  );
                })}
                {!filteredHabits.length ? (
                  <div className={styles.emptyLibrary}>No habits unlocked yet for this pillar. Keep leveling up.</div>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </main>

      {toast ? (
        <div className={cx(styles.toast, toast.gold && styles.toastGold, toast && styles.toastShow)}>{toast.message}</div>
      ) : null}

      {showInstallPrompt ? (
        <div className={styles.installPrompt}>
          <h3>Add LIFE Tracker to your home screen</h3>
          <p>Tap the share icon → “Add to Home Screen”. On Android Chrome, open the ⋮ menu → “Install app”.</p>
          <button type="button" onClick={() => setShowInstallPrompt(false)}>
            Got it
          </button>
          <small>We will only ask once.</small>
        </div>
      ) : null}
    </div>
  );
};

export default TrackerPage;
