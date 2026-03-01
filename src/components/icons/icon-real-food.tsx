type IconProps = {
  className?: string;
};

export default function IconRealFood({ className }: IconProps) {
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
      <path d="M5 14c0-5.5 4-9.5 7-11 3 1.5 7 5.5 7 11s-4 9-7 9-7-3.5-7-9z" />
      <path d="M12 5v14" />
      <path d="M9 12c1.5 1.5 3 2 3 2" />
      <path d="M15 10c-1 1.8-2 2.7-3 3" />
    </svg>
  );
}
