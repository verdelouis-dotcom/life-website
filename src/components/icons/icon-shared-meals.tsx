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
      <circle cx={8} cy={10} r={2.5} />
      <circle cx={16} cy={10} r={2.5} />
      <path d="M4 14h16" />
      <path d="M7 14v5" />
      <path d="M17 14v5" />
      <path d="M2 19h20" />
    </svg>
  );
}
