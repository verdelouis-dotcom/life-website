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
      <path d="M12 3c-2 4-2 10 0 14 2-4 2-10 0-14z" />
      <path d="M6 7c0 7 3 12 6 12s6-5 6-12c-2.5-2-4.5-3-6-3s-3.5 1-6 3z" />
      <path d="M9 12h6" />
    </svg>
  );
}
