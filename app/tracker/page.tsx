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
  tablesHosted: number;
}

const DEFAULT_STATE: TrackerState = {
  level: 1,
  ptsTotal: 0,
  streak: 0,
  best: 0,
  days: {},
  selected: [],
  hStreaks: {},
  tablesHosted: 0,
};

type TrackerView = "today" | "library" | "levels";

type ToastState = { message: string; gold?: boolean } | null;

const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

function calculateLevel(state: TrackerState) {
  const totalPoints = state.ptsTotal ?? 0;
  const streakDays = state.streak ?? 0;
  const tables = state.tablesHosted ?? 0;
  if (tables >= 6) return Math.max(state.level, 9);
  if (tables >= 3) return Math.max(state.level, 8);
  if (tables >= 1) return Math.max(state.level, 7);
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

function computeCoverage(state: TrackerState, dateKey: string) {
  const record = state.days[dateKey] ?? {};
  const coverage: Record<string, boolean> = {};
  TRACKER_PILLARS.forEach((pillar) => {
    coverage[pillar.id] = false;
  });
  state.selected.forEach((habitId) => {
    const habit = HABIT_MAP[habitId];
    if (!habit || !record[habitId]) return;
    habit.pillars.forEach((pillar) => {
      coverage[pillar] = true;
    });
  });
  return coverage;
}

function checkStreakDay(state: TrackerState, dateKey: string) {
  if (!state.selected.length) return false;
  const coverage = computeCoverage(state, dateKey);
  const record = state.days[dateKey] ?? {};
  const points = state.selected.reduce((sum, habitId) => {
    const habit = HABIT_MAP[habitId];
    if (!habit) return sum;
    return sum + (record[habitId] ? habit.points : 0);
  }, 0);
  const allPillars = TRACKER_PILLARS.every((pillar) => coverage[pillar.id]);
  return points >= TRACKER_MIN_DAILY_POINTS && allPillars;
}

const TrackerPage = () => {
  const router = useRouter();
  const [state, setState] = useState<TrackerState>(DEFAULT_STATE);
  const [view, setView] = useState<TrackerView>("today");
  const [libDraft, setLibDraft] = useState<string[]>([]);
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({
    [TRACKER_PILLARS[0]?.id ?? "food"]: true,
  });
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
        setLibDraft(parsed.selected ?? []);
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

  useEffect(() => {
    setLibDraft(state.selected);
  }, [state.selected]);

  const currentDayKey = todayKey();
  const todayRecord = state.days[currentDayKey] ?? {};
  const selectedHabits = useMemo(() => state.selected.map((id) => HABIT_MAP[id]).filter(Boolean), [state.selected]);
  const dailyHabits = selectedHabits.filter((habit) => !habit.weekly);
  const weeklyHabits = selectedHabits.filter((habit) => habit.weekly);
  const todaysPoints = selectedHabits.reduce((sum, habit) => sum + (todayRecord[habit.id] ? habit.points : 0), 0);
  const maxPoints = selectedHabits.reduce((sum, habit) => sum + habit.points, 0);
  const coverage = computeCoverage(state, currentDayKey);
  const pillarHasSelection = useMemo(() => {
    const map: Record<string, boolean> = {};
    TRACKER_PILLARS.forEach((pillar) => {
      map[pillar.id] = state.selected.some((id) => HABIT_MAP[id]?.pillars.includes(pillar.id as TrackerPillarKey));
    });
    return map;
  }, [state.selected]);
  const uncoveredPillars = TRACKER_PILLARS.filter((pillar) => pillarHasSelection[pillar.id] && !coverage[pillar.id]);
  const ptsNeeded = Math.max(0, TRACKER_MIN_DAILY_POINTS - todaysPoints);
  const streakReady = selectedHabits.length > 0 && ptsNeeded <= 0 && uncoveredPillars.length === 0;
  const nextLevel = TRACKER_LEVELS.find((lvl) => lvl.level === state.level + 1);
  const progressPercent = levelProgressPercent(state);

  const weekHistory = useMemo(() => {
    const history: { key: string; label: string; points: number; earned: boolean; partial: boolean; isToday: boolean }[] = [];
    for (let offset = -6; offset <= 0; offset += 1) {
      const key = offsetDateKey(offset);
      const date = new Date();
      date.setDate(date.getDate() + offset);
      const record = state.days[key] ?? {};
      const points = state.selected.reduce((sum, habitId) => {
        const habit = HABIT_MAP[habitId];
        if (!habit) return sum;
        return sum + (record[habitId] ? habit.points : 0);
      }, 0);
      const earned = checkStreakDay(state, key);
      history.push({
        key,
        label: WEEKDAY_LABELS[date.getDay()],
        points,
        earned,
        partial: points > 0 && !earned,
        isToday: offset === 0,
      });
    }
    return history;
  }, [state]);

  const statusParts: string[] = [];
  if (!streakReady && selectedHabits.length) {
    if (ptsNeeded > 0) statusParts.push(`${ptsNeeded} more pts`);
    if (uncoveredPillars.length > 0) statusParts.push(`cover ${uncoveredPillars.map((p) => p.name).join(", ")}`);
  }

  const nudgeCopy = (() => {
    if (!selectedHabits.length) return "";
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
    ? nextLevel.hostPath
      ? `To ${nextLevel.name}: ${Math.max(0, nextLevel.pointsRequired - state.ptsTotal)} pts + ${Math.max(0, nextLevel.streakRequired - state.streak)} streak days or host a table`
      : `To ${nextLevel.name}: ${Math.max(0, nextLevel.pointsRequired - state.ptsTotal)} pts + ${Math.max(0, nextLevel.streakRequired - state.streak)} streak days`
    : "Maximum level reached";

  const dailyPointsPossible = dailyHabits.reduce((sum, habit) => sum + habit.points, 0);

  const handleTabChange = (nextView: TrackerView) => {
    setView(nextView);
    if (nextView === "library") {
      setLibDraft(state.selected);
    }
  };

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
      const updated: TrackerState = {
        ...prev,
        days: { ...prev.days, [key]: dayRecord },
        hStreaks: streaks,
        ptsTotal,
      };
      const prevEarned = checkStreakDay(prev, key);
      const nowEarned = checkStreakDay(updated, key);
      if (!prevEarned && nowEarned) {
        const yesterdayEarned = checkStreakDay(updated, offsetDateKey(-1));
        const newStreak = yesterdayEarned ? (prev.streak ?? 0) + 1 : 1;
        updated.streak = newStreak;
        updated.best = Math.max(updated.best ?? 0, newStreak);
      } else if (prevEarned && !nowEarned) {
        const yesterdayEarned = checkStreakDay(prev, offsetDateKey(-1));
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

  const toggleLibraryHabit = (habitId: string) => {
    setLibDraft((prev) => (prev.includes(habitId) ? prev.filter((id) => id !== habitId) : [...prev, habitId]));
  };

  const saveLibrary = () => {
    if (!libDraft.length) return;
    setState((prev) => ({ ...prev, selected: [...libDraft] }));
    setToast({ message: `${libDraft.length} habits saved` });
    setView("today");
  };

  const verifyHostPath = () => {
    setState((prev) => {
      const tablesHosted = (prev.tablesHosted ?? 0) + 1;
      const updated: TrackerState = { ...prev, tablesHosted };
      const newLevel = calculateLevel(updated);
      if (newLevel > updated.level) {
        updated.level = newLevel;
        setToast({ message: `Table verified! Level ${newLevel}`, gold: true });
      } else {
        setToast({ message: `Table ${tablesHosted} verified!`, gold: true });
      }
      return updated;
    });
  };

  const renderHabitRow = (habit: TrackerHabit, weekly = false) => {
    const done = !!todayRecord[habit.id];
    const fire = state.hStreaks?.[habit.id] ?? 0;
    return (
      <div
        key={habit.id}
        className={cx("tracker-habit-row", weekly && "tracker-weekly", done && "tracker-done")}
        onClick={() => toggleHabit(habit.id)}
      >
        <div className="tracker-hcheck">
          <div className="tracker-tick" />
        </div>
        <div className="tracker-hinfo">
          <div className="tracker-htask">{habit.task}</div>
          <div className="tracker-hmicro">{habit.micro}</div>
          {habit.stack ? <div className="tracker-hstack">💡 {habit.stack}</div> : null}
          <div className="tracker-htags">
            {habit.pillars.map((pillar) => {
              const meta = TRACKER_PILLARS.find((p) => p.id === pillar);
              return (
                <span key={`${habit.id}-${pillar}`} className="tracker-htag" style={{ background: meta?.bg, color: meta?.color }}>
                  {meta?.name}
                </span>
              );
            })}
            <span className="tracker-htag" style={{ background: DIFF_STYLES[habit.difficulty].bg, color: DIFF_STYLES[habit.difficulty].color }}>
              {habit.difficulty}
            </span>
            {weekly && <span className="tracker-htag" style={{ background: "#FFF3CC", color: "#8A6A00" }}>Weekly</span>}
          </div>
        </div>
        <div className="tracker-hright">
          <div className="tracker-hpts">+{habit.points}</div>
          <div className="tracker-hfire">🔥{fire}d</div>
        </div>
      </div>
    );
  };

  const renderLibrarySection = (pillarId: TrackerPillarKey) => {
    const pillar = TRACKER_PILLARS.find((p) => p.id === pillarId);
    if (!pillar) return null;
    const available = TRACKER_HABITS.filter((habit) => habit.pillars.includes(pillarId) && habit.minLevel <= (state.level ?? 1));
    if (!available.length) return null;
    const daily = available.filter((habit) => !habit.weekly);
    const weeklyOptions = available.filter((habit) => habit.weekly);
    const selectedCount = available.filter((habit) => libDraft.includes(habit.id)).length;
    const isOpen = expandedPillars[pillar.id] ?? false;
    return (
      <div key={pillar.id} className="tracker-lib-sec">
        <button
          type="button"
          className="tracker-lib-hdr"
          style={{ borderLeftColor: pillar.color }}
          onClick={() =>
            setExpandedPillars((prev) => ({
              ...prev,
              [pillar.id]: !isOpen,
            }))
          }
        >
          <div className="tracker-lib-hdr-name" style={{ color: pillar.color }}>
            {pillar.name}
          </div>
          <div className="tracker-lib-hdr-ct">{selectedCount} selected</div>
          <div className={cx("tracker-lib-chev", isOpen && "tracker-open")}>▶</div>
        </button>
        <div className={cx("tracker-lib-habits", isOpen && "tracker-open")}>
          {[daily, weeklyOptions].map((list, idx) => (
            <div key={`${pillar.id}-${idx}`}>
              {idx === 1 && list.length ? <div className="tracker-lib-wlabel">Weekly</div> : null}
              {list.map((habit) => {
                const isSelected = libDraft.includes(habit.id);
                return (
                  <div
                    key={habit.id}
                    className={cx("tracker-lib-item", habit.weekly && "tracker-wli", isSelected && "tracker-sel")}
                    onClick={() => toggleLibraryHabit(habit.id)}
                  >
                    <div className="tracker-lcheck">
                      <div className="tracker-ltick" />
                    </div>
                    <div className="tracker-linfo">
                      <div className="tracker-ltask">{habit.task}</div>
                      <div className="tracker-lmicro">{habit.micro}</div>
                      {habit.stack ? <div className="tracker-lstack">💡 {habit.stack}</div> : null}
                      <div className="tracker-lmeta">
                        {habit.pillars.map((pillarKey) => {
                          const meta = TRACKER_PILLARS.find((p) => p.id === pillarKey);
                          return (
                            <span key={`${habit.id}-${pillarKey}`} className="tracker-lptag" style={{ background: meta?.bg, color: meta?.color }}>
                              {meta?.name}
                            </span>
                          );
                        })}
                        <span className="tracker-ldiff" style={{ background: DIFF_STYLES[habit.difficulty].bg, color: DIFF_STYLES[habit.difficulty].color }}>
                          {habit.difficulty}
                        </span>
                        {habit.weekly && <span className="tracker-lwk">Weekly</span>}
                        <span className="tracker-lpts">+{habit.points} pts</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const libDailyPts = libDraft.reduce((sum, habitId) => {
    const habit = HABIT_MAP[habitId];
    if (!habit || habit.weekly) return sum;
    return sum + habit.points;
  }, 0);

  const todayView = (
    <div className={cx("tracker-view", view === "today" && "tracker-active")}>
      {selectedHabits.length > 0 ? (
        <>
          <div className="tracker-status-card tracker-sc-progress">
            {streakReady ? (
              <>
                <div className="tracker-sc-t">✨ Streak day earned!</div>
                <div className="tracker-sc-s">All 6 pillars covered · {todaysPoints} pts · Come back tomorrow</div>
              </>
            ) : (
              <>
                <div className="tracker-sc-t">🎯 {statusParts.join(" · ") || "Keep going"}</div>
                <div className="tracker-sc-s">Earn 15 pts and cover all pillars to extend your streak</div>
              </>
            )}
          </div>
          <div className={cx("tracker-nudge-card", nudgeCopy && "tracker-show")}>
            <span style={{ fontSize: "0.95rem" }}>💡</span>
            <div className="tracker-ntxt">{nudgeCopy}</div>
          </div>
        </>
      ) : (
        <div className="tracker-empty-s">
          <div className="tracker-ei">📚</div>
          <div className="tracker-et">Build your habit list</div>
          <div className="tracker-es">Choose habits from the library. Cover all 6 pillars and earn 15+ pts daily to build your streak.</div>
          <button onClick={() => handleTabChange("library")}>Browse the library</button>
        </div>
      )}
      <div className="tracker-scroll-content">
        {dailyHabits.length ? (
          <>
            <div className="tracker-slabel">
              Daily habits
              <span className="tracker-wbadge">{dailyHabits.length} habits · {dailyPointsPossible} pts</span>
            </div>
            {[...dailyHabits]
              .sort((a, b) => {
                const doneA = !!todayRecord[a.id];
                const doneB = !!todayRecord[b.id];
                if (doneA === doneB) return 0;
                return doneA ? 1 : -1;
              })
              .map((habit) => renderHabitRow(habit))}
          </>
        ) : null}
        {weeklyHabits.length ? (
          <>
            <div className="tracker-slabel">
              Weekly habits
              <span className="tracker-wbadge">Counts on day done</span>
            </div>
            {[...weeklyHabits]
              .sort((a, b) => {
                const doneA = !!todayRecord[a.id];
                const doneB = !!todayRecord[b.id];
                if (doneA === doneB) return 0;
                return doneA ? 1 : -1;
              })
              .map((habit) => renderHabitRow(habit, true))}
          </>
        ) : null}
      </div>
    </div>
  );

  const libraryView = (
    <div className={cx("tracker-view", view === "library" && "tracker-active")}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        {TRACKER_PILLARS.map((pillar) => renderLibrarySection(pillar.id))}
      </div>
      <div className="tracker-save-bar">
        <button className="tracker-save-btn" onClick={saveLibrary} disabled={!libDraft.length}>
          {libDraft.length ? `Save ${libDraft.length} habits · ${libDailyPts} daily pts` : "Select habits to save"}
        </button>
        <div className="tracker-save-note">
          Streak needs all 6 pillars + <span>15 pts</span> daily
        </div>
      </div>
    </div>
  );

  const levelsView = (
    <div className={cx("tracker-view", view === "levels" && "tracker-active")}>
      <div className="tracker-levels-content">
        <div className="tracker-host-path-card">
          <div className="tracker-hpc-title">🍝 Fast path: Host a LIFE table</div>
          <div className="tracker-hpc-body">Tables verified: <strong>{state.tablesHosted ?? 0}</strong></div>
          <div className="tracker-hpc-rows">
            <div className="tracker-hpc-row">
              <div className="tracker-hpc-dot" />
              <div>
                <strong>1 table</strong> = instant Guide (Level 7)
              </div>
            </div>
            <div className="tracker-hpc-row">
              <div className="tracker-hpc-dot" />
              <div>
                <strong>3 tables</strong> = instant Elder (Level 8)
              </div>
            </div>
            <div className="tracker-hpc-row">
              <div className="tracker-hpc-dot" />
              <div>
                <strong>6 tables</strong> = instant Sage (Level 9)
              </div>
            </div>
          </div>
          <button type="button" className="tracker-demo-btn" onClick={verifyHostPath}>
            Simulate: LIFE HQ verifies a table
          </button>
        </div>
        {TRACKER_LEVELS.map((lvl) => {
          const isCurrent = state.level === lvl.level;
          const isAchieved = state.level > lvl.level;
          return (
            <div key={lvl.level} className={cx("tracker-lv-row", isCurrent && "tracker-current", isAchieved && "tracker-achieved")}>
              <div className="tracker-lv-num-col" style={{ background: lvl.color }}>
                {lvl.level}
              </div>
              <div className="tracker-lv-body-col">
                <div className="tracker-lv-title-row">
                  <div className="tracker-lv-name">{lvl.name}</div>
                  {isCurrent && <span className="tracker-lv-current-badge">★ Current</span>}
                  {isAchieved && <span className="tracker-lv-done-badge">✓ Done</span>}
                  {lvl.hostPath && <span className="tracker-lv-host-badge">🍝 Host path</span>}
                </div>
                <div className="tracker-lv-reqs">
                  {lvl.pointsRequired > 0 ? (
                    <span className="tracker-lv-chip" style={{ background: `${lvl.color}20`, color: lvl.color }}>
                      {lvl.pointsRequired.toLocaleString()} pts
                    </span>
                  ) : null}
                  {lvl.streakRequired > 0 ? (
                    <span className="tracker-lv-chip" style={{ background: "#FAECE7", color: "#A0522D" }}>
                      {lvl.streakRequired}-day streak
                    </span>
                  ) : null}
                  {lvl.tablesRequired > 0 ? (
                    <span className="tracker-lv-chip" style={{ background: "#FAECE7", color: "#A0522D" }}>
                      {lvl.tablesRequired} table{lvl.tablesRequired > 1 ? "s" : ""}
                    </span>
                  ) : null}
                </div>
                <div className="tracker-lv-unlock">
                  <strong>Unlocks:</strong> {lvl.unlocks}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const navTabs = (
    <div className="tracker-footer-nav">
      <button type="button" className={cx("tracker-fnav-tab", view === "today" && "tracker-active")} onClick={() => handleTabChange("today")}>
        🏠 Today
      </button>
      <button type="button" className={cx("tracker-fnav-tab", view === "library" && "tracker-active")} onClick={() => handleTabChange("library")}>
        📚 Library
      </button>
      <button type="button" className={cx("tracker-fnav-tab", view === "levels" && "tracker-active")} onClick={() => handleTabChange("levels")}>
        ⭐ Levels
      </button>
      <button type="button" className="tracker-fnav-tab" onClick={() => handleTabChange("today")}>
        👥 Community
      </button>
    </div>
  );

  if (!authorized) {
    return (
      <section className={styles.wrapper}>
        <div className={`${styles.appShell} tracker-page`}>
          <div className="tracker-empty-s">
            <div className="tracker-ei">🔒</div>
            <div className="tracker-et">Members only</div>
            <div className="tracker-es">Enroll for $10 to unlock the habit tracker.</div>
          </div>
        </div>
      </section>
    );
  }

  if (!loaded) {
    return (
      <section className={styles.wrapper}>
        <div className={`${styles.appShell} tracker-page`}>
          <div className="tracker-empty-s">
            <div className="tracker-ei">⏳</div>
            <div className="tracker-et">Loading tracker…</div>
            <div className="tracker-es">Fetching your saved habits.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.appShell} tracker-page`}>
        <div className="tracker-top-bar">
          <div className="tracker-top-bar-inner">
            <div className="tracker-tb-logo">LIFE</div>
            <div className="tracker-tb-date">{new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</div>
          </div>
        </div>
        <div className="tracker-progress-section" style={{ background: levelData.color }}>
          <div className="tracker-level-band">
            <div className="tracker-lb-left">
              <div className="tracker-lb-badge">{state.level}</div>
              <div>
                <div className="tracker-lb-name">{levelData.name}</div>
                <div className="tracker-lb-sub">{levelData.description}</div>
              </div>
            </div>
            <div className="tracker-lb-right">
              <div className="tracker-lb-pts">{state.ptsTotal.toLocaleString()} pts</div>
              <div className="tracker-lb-pts-lbl">total earned</div>
              <div className="tracker-lb-streak">🔥 {state.streak} day streak</div>
            </div>
          </div>
          <div className="tracker-lp-row">
            <span>{progressLabel}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="tracker-lp-track">
            <div className="tracker-lp-fill" style={{ width: `${progressPercent}%`, background: "rgba(255,255,255,0.35)" }} />
          </div>
          <div style={{ height: 4 }} />
          <div className="tracker-dp-row">
            <span>Today</span>
            <span>
              <span>{Object.keys(todayRecord).filter((id) => todayRecord[id]).length}</span>/{selectedHabits.length} habits · {todaysPoints} pts · {TRACKER_PILLARS.filter((pillar) => coverage[pillar.id]).length}/6 pillars
            </span>
          </div>
          <div className="tracker-dp-track">
            <div className="tracker-dp-fill" style={{ width: maxPoints ? `${Math.min(100, Math.round((todaysPoints / maxPoints) * 100))}%` : "0%" }} />
            <div className="tracker-dp-threshold" style={{ left: maxPoints ? `${Math.min(100, Math.round((TRACKER_MIN_DAILY_POINTS / maxPoints) * 100))}%` : "50%" }} />
          </div>
        </div>
        <div className="tracker-pillar-dots">
          {TRACKER_PILLARS.map((pillar) => {
            const hasLit = coverage[pillar.id];
            const hasSelection = pillarHasSelection[pillar.id];
            return (
              <button key={pillar.id} type="button" className="tracker-pdw" onClick={() => handleTabChange("library")}>
                <div
                  className={cx("tracker-pd", hasLit && "tracker-lit", !hasLit && hasSelection && "tracker-nudge")}
                  style={{ borderColor: hasSelection ? pillar.color : "rgba(255,255,255,0.15)", background: hasLit ? pillar.bg : "rgba(255,255,255,0.05)" }}
                >
                  {hasLit ? <span style={{ color: pillar.color, fontSize: "9px" }}>✓</span> : <span style={{ color: hasSelection ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)" }}>○</span>}
                </div>
                <div className="tracker-pd-lbl">{pillar.name}</div>
              </button>
            );
          })}
        </div>
        <div className="tracker-week-strip">
          {weekHistory.map((day) => (
            <div key={day.key} className="tracker-wd">
              <div className="tracker-wd-lbl">{day.label}</div>
              <div className={cx("tracker-wd-c", day.earned && "tracker-sday", day.partial && "tracker-partial", day.isToday && "tracker-today-r")}>
                {day.points > 0 && !day.isToday ? day.points : day.isToday ? "●" : ""}
              </div>
            </div>
          ))}
        </div>
        <div className="tracker-views">
          {todayView}
          {libraryView}
          {levelsView}
        </div>
        {navTabs}
        {toast ? <div className={cx("tracker-toast", toast.gold && "tracker-gold", toast && "tracker-show")}>{toast.message}</div> : null}
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
    </section>
  );
};

export default TrackerPage;
