type IconProps = {
  className?: string;
};

export default function IconEducation({ className }: IconProps) {
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
      <path d="M3 7 12 3l9 4-9 4-9-4z" />
      <path d="m5 9 7 3 7-3" />
      <path d="M7 12v4a5 5 0 0 0 10 0v-4" />
    </svg>
  );
}
