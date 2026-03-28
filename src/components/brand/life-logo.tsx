import Image from "next/image";
import Link from "next/link";

type LifeLogoProps = {
  href?: string | null;
  variant?: "header" | "footer";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const IMAGE_SRC = "/images/branding/life-logo.png";
const IMAGE_WIDTH = 768; // preserves native 3:2 aspect ratio
const IMAGE_HEIGHT = 512;

export default function LifeLogo({ href = "/", variant = "header", className = "", imageClassName = "", priority = false }: LifeLogoProps) {
  const sizeClass = variant === "footer" ? "h-8 md:h-10" : "h-10 md:h-12";

  const image = (
    <Image
      src={IMAGE_SRC}
      alt="LIFE logo"
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      className={`w-auto ${sizeClass} ${imageClassName}`.trim()}
      priority={priority}
    />
  );

  if (!href) {
    return <span className={`inline-flex items-center ${className}`.trim()}>{image}</span>;
  }

  return (
    <Link href={href} className={`inline-flex items-center ${className}`.trim()} aria-label="LIFE logo">
      {image}
    </Link>
  );
}
