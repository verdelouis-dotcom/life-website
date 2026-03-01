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
      <circle cx={7} cy={9} r={3} />
      <circle cx={17} cy={9} r={3} />
      <path d="M3 21c0-3.5 3-6.5 7-6.5" />
      <path d="M21 21c0-3.5-3-6.5-7-6.5" />
      <path d="M12 12v3" />
      <path d="M9 21h6" />
    </svg>
  );
}
