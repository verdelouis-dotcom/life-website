type IconProps = {
  className?: string;
};

export default function IconSharedMeals({ className }: IconProps) {
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
      <circle cx={7.5} cy={12} r={4.5} />
      <circle cx={16.5} cy={12} r={4.5} />
      <path d="M3 6v2" />
      <path d="M3 10v8" />
      <path d="M21 6v2" />
      <path d="M21 10v8" />
    </svg>
  );
}
