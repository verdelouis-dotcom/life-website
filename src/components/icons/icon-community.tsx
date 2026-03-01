type IconProps = {
  className?: string;
};

export default function IconCommunity({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={12} cy={7} r={3} />
      <circle cx={6.5} cy={12} r={2.5} />
      <circle cx={17.5} cy={12} r={2.5} />
      <path d="M6 21c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
      <path d="M2 21c0-2.5 1.5-4.5 4-5.5" />
      <path d="M22 21c0-2.5-1.5-4.5-4-5.5" />
    </svg>
  );
}
