import Image from "next/image";
import Link from "next/link";

type LifeLogoProps = {
  href?: string | null;
  variant?: "header" | "footer";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const IMAGE_SRC = "/branding/life-logo-full-transparent.png";
const IMAGE_WIDTH = 2000;
const IMAGE_HEIGHT = 1333;

export default function LifeLogo({ href = null, variant = "header", className = "", imageClassName = "", priority = false }: LifeLogoProps) {
  const sizeClass = variant === "footer" ? "h-16 md:h-20" : "h-20 md:h-24";

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
