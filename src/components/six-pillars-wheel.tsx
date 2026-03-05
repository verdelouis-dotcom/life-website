import type { CSSProperties } from "react";

const SEGMENTS = [
  { label: "Food", start: -90, end: -30, color: "#5e7d5a" },
  { label: "Movement", start: -30, end: 30, color: "#7fa064" },
  { label: "Connection", start: 30, end: 90, color: "#4b82b3" },
  { label: "Community", start: 90, end: 150, color: "#6ea1d4" },
  { label: "Purpose", start: 150, end: 210, color: "#d17a4e" },
  { label: "Stress Regulation", start: 210, end: 270, color: "#f0ad63" },
];

const GROUP_BADGES = [
  { label: "Physical", details: "Food • Movement", style: { top: "-8%", left: "15%" } },
  { label: "Social", details: "Connection • Community", style: { top: "28%", right: "-10%" } },
  { label: "Psychological", details: "Purpose • Stress Regulation", style: { bottom: "-10%", left: "22%" } },
];

const SIZE = 520;
const CENTER = SIZE / 2;
const RADIUS = 220;
const LABEL_RADIUS = 190;

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
        <circle cx={CENTER} cy={CENTER} r={110} fill="#fff8ef" stroke="rgba(42,42,42,0.12)" strokeWidth={2} />
        {SEGMENTS.map((segment) => {
          const midAngle = (segment.start + segment.end) / 2;
          const pos = polarToCartesian(midAngle, LABEL_RADIUS);
          return (
            <text
              key={`${segment.label}-label`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-[16px] font-semibold uppercase tracking-[0.1em]"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth={1}
              paintOrder="stroke"
            >
              {segment.label}
            </text>
          );
        })}
        <text x={CENTER} y={CENTER - 4} textAnchor="middle" className="fill-[var(--life-forest)] text-2xl font-semibold">
          The Shared Table
        </text>
        <text x={CENTER} y={CENTER + 20} textAnchor="middle" className="fill-[var(--muted)] text-[12px] tracking-[0.15em] uppercase">
          Cooking · Conversation · Community
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
