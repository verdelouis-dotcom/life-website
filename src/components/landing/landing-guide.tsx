import styles from "./landing.module.css";

type Pillar = {
  title: string;
  body: string;
  icon: JSX.Element;
};

const pillars: Pillar[] = [
  {
    title: "Food",
    body: "Cook from scratch. Use whole ingredients. Share what you make. The way we eat shapes everything else.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2s-4 3.5-4 7a4 4 0 008 0C12 5.5 8 2 8 2z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" fill="none" />
      </svg>
    ),
  },
  {
    title: "Movement",
    body: "Cooking, setting the table, walking after dinner — natural movement is built into the evening.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="4.5" r="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
        <path d="M4.5 14v-3.5a3.5 3.5 0 017 0V14" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    title: "Sleep",
    body: "Calmer evenings, shared meals, less chaos. Better rhythms support deeper rest.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 10.5c1.2 1.2 3.2 1.2 4.4 0S8.6 7.3 7.4 6.1 4.2 4.9 3 6.1C1.8 7.3 1.8 9.3 3 10.5z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
        <path d="M11 4l2-2m-2 4l3-3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Connection",
    body: "People sit, talk, listen, and feel known. Health sticks better when it&apos;s relational.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="5" cy="6" r="2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
        <circle cx="11" cy="6" r="2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
        <path d="M2.5 13c0-1.93 1.57-3.5 3.5-3.5m3 0c1.93 0 3.5 1.57 3.5 3.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Purpose",
    body: "Teaching a meal, passing on a tradition, helping someone else — hosting gives people a reason to show up.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" />
        <path d="M8 5.5v3l1.5 1.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stress Regulation",
    body: "Cooking, gathering, slowing down. Simple rhythms help people reset and feel grounded again.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2v3M11 3.27l-2.1 2.1M13 7h-3M11 11l-2.1-2.1M8 13v-3M5 11l2.1-2.1M3 7h3M5 3.27l2.1 2.1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
];

const GUIDE_NOTE = "These aren't rules. They're habits — meant to be shared, practiced, and passed on.";

export default function LandingGuideSection() {
  return (
    <section className={`${styles.section} ${styles.guideSection}`} id="guide">
      <span className={`${styles.tagline} ${styles.guideTagline}`}>The LIFE Guide</span>
      <h2 className={`${styles.sectionHeading} ${styles.guideHeading}`}>Six pillars. Habits you can actually live.</h2>
      <p className={`${styles.sectionBody} ${styles.guideBody}`}>
        Every guest leaves with a guide built around six foundations of long-term health. Not a diet plan. Not a program. Just simple habits worth sharing.
      </p>
      <div className={styles.guideGrid}>
        {pillars.map((pillar) => (
          <div className={styles.guideItem} key={pillar.title}>
            <div className={styles.guideIcon}>{pillar.icon}</div>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </div>
        ))}
      </div>
      <p className={styles.guideNote}>{GUIDE_NOTE}</p>
    </section>
  );
}
