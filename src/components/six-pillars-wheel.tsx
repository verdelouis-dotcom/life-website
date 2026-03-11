import { PILLARS } from "@/data/pillars";

const slice = 360 / PILLARS.length;
const SEGMENTS = PILLARS.map((pillar, index) => {
  const start = -90 + index * slice;
  const end = start + slice;
  return { ...pillar, start, end };
});

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
        <desc id="six-pillars-desc">A circular diagram showing Food, Movement, Sleep, Connection, Purpose, and Stress Regulation surrounding the shared table.</desc>
        {SEGMENTS.map((segment) => {
          const mid = polarToCartesian((segment.start + segment.end) / 2, LABEL_RADIUS);
          return (
            <g key={segment.slug}>
              <path d={describeSector(segment.start, segment.end)} fill={segment.color} opacity={0.92} />
              <text
                x={mid.x}
                y={mid.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-[16px] font-semibold uppercase tracking-[0.1em]"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth={1}
                paintOrder="stroke"
              >
                {segment.title}
              </text>
            </g>
          );
        })}
        <circle cx={CENTER} cy={CENTER} r={110} fill="#fff8ef" stroke="rgba(42,42,42,0.12)" strokeWidth={2} />
        <text x={CENTER} y={CENTER - 4} textAnchor="middle" className="fill-[var(--life-forest)] text-2xl font-semibold">
          The Shared Table
        </text>
      </svg>
      <ul className="sr-only">
        {SEGMENTS.map((segment) => (
          <li key={`sr-${segment.title}`}>{segment.title}</li>
        ))}
      </ul>
    </div>
  );
}
