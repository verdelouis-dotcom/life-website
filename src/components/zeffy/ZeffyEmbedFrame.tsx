import { getZeffyEmbedUrl } from "@/lib/zeffy";

type Props = {
  amount?: number;
  className?: string;
  minHeight?: number;
};

export function ZeffyEmbedFrame({ amount, className = "", minHeight = 720 }: Props) {
  const src = getZeffyEmbedUrl(amount);

  return (
    <div
      className={`zeffy-embed-frame relative w-full overflow-hidden rounded-[1.2rem] border border-[var(--border)] bg-white shadow-sm ${className}`}
      style={{ minHeight }}
    >
      <iframe
        src={src}
        title="Donate securely with Zeffy"
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="payment"
      />
    </div>
  );
}
