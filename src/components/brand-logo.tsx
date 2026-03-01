import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "mark" | "lockup";
  size?: number;
  href?: string;
  className?: string;
};

const LOCKUP_RATIO = 220 / 260;

export default function BrandLogo({
  variant = "lockup",
  size,
  href = "/",
  className,
}: BrandLogoProps) {
  const isMark = variant === "mark";
  const width = size ?? (isMark ? 44 : 160);
  const height = isMark ? width : Math.round(width * LOCKUP_RATIO);
  const src = isMark ? "/brand/mark.svg" : "/images/logo.png";

  const classes = ["h-auto", "w-auto", className].filter(Boolean).join(" ");
  const image = (
    <Image
      src={src}
      alt="Longevity Initiative for Food & Education"
      width={width}
      height={height}
      className={classes}
      priority
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Longevity Initiative for Food & Education">
      {image}
    </Link>
  );
}
