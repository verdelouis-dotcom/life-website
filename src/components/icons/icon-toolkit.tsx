type IconProps = {
  className?: string;
};

export default function IconToolkit({ className }: IconProps) {
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
      <path d="M3 9h18v10H3z" />
      <path d="M7 9V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
      <path d="M9.5 14h5" />
      <path d="M9.5 17h5" />
    </svg>
  );
}
