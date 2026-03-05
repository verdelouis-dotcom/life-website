import type { CSSProperties } from "react";

const SEGMENTS = [
  { label: "Food", start: -90, end: -30, color: "#4f6f52" },
  { label: "Movement", start: -30, end: 30, color: "#6d8c4b" },
  { label: "Connection", start: 30, end: 90, color: "#3c6e9b" },
  { label: "Community", start: 90, end: 150, color: "#5c8cc7" },
  { label: "Purpose", start: 150, end: 210, color: "#c36a3a" },
  { label: "Stress Regulation", start: 210, end: 270, color: "#e49a4a" },
];

const GROUP_BADGES = [
  { label: "Physical", details: "Food • Movement", style: { top: "2%", left: "8%" } },
  { label: "Social", details: "Connection • Community", style: { top: "38%", right: "8%" } },
  { label: "Psychological", details: "Purpose • Stress Regulation", style: { bottom: "6%", left: "18%" } },
];

const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 180;
const LABEL_RADIUS = 140;

function polarToCartesian(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function describeSector(startAngle: number, endAngle: number) {
  const start = polarToCartesian(startAngle, RADIUS);
  const end = polarToCartesian(endAngle, RADIUS);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${CENTER} ${CENTER}`,
    `L ${start.x} ${start.y}`,
    `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

export default function SixPillarsWheel() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-labelledby="six-pillars-title six-pillars-desc">
        <title id="six-pillars-title">Six Pillars of Longevity Wheel</title>
        <desc id="six-pillars-desc">A circular diagram showing Food, Movement, Connection, Community, Purpose, and Stress Regulation surrounding the shared table.</desc>
        {SEGMENTS.map((segment) => (
          <path key={segment.label} d={describeSector(segment.start, segment.end)} fill={segment.color} opacity={0.92} />
        ))}
        {SEGMENTS.map((segment) => {
          const midAngle = (segment.start + segment.end) / 2;
          const pos = polarToCartesian(midAngle, LABEL_RADIUS);
          return (
            <text
              key={`${segment.label}-label`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              className="fill-white text-[14px] font-semibold uppercase tracking-[0.2em]"
            >
              {segment.label}
            </text>
          );
        })}
        <circle cx={CENTER} cy={CENTER} r={110} fill="#fff8ef" stroke="rgba(42,42,42,0.15)" strokeWidth={2} />
        <text
          x={CENTER}
          y={CENTER - 6}
          textAnchor="middle"
          className="fill-[var(--life-forest)] text-2xl font-semibold"
        >
          The Shared Table
        </text>
        <text x={CENTER} y={CENTER + 26} textAnchor="middle" className="fill-[var(--muted)] text-[11px] tracking-[0.3em] uppercase">
          Cooking • Conversation • Community
        </text>
      </svg>
      {GROUP_BADGES.map((badge) => (
        <div
          key={badge.label}
          className="absolute rounded-full bg-white/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[var(--olive)] shadow"
          style={badge.style as CSSProperties}
        >
          <div>{badge.label}</div>
          <div className="mt-1 text-[10px] normal-case tracking-normal text-[var(--muted)]">{badge.details}</div>
        </div>
      ))}
      <ul className="sr-only">
        {SEGMENTS.map((segment) => (
          <li key={`sr-${segment.label}`}>{segment.label}</li>
        ))}
      </ul>
    </div>
  );
}
