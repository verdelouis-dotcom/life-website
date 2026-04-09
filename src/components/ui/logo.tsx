import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes: Record<Required<LogoProps>["size"], string> = {
    sm: "w-[100px]",
    md: "w-[140px]",
    lg: "w-[180px]",
  };

  return (
    <div className={`relative ${sizes[size]} h-auto ${className}`.trim()}>
      <Image
        src="/images/life-logo.png"
        alt="LIFE Logo"
        width={400}
        height={200}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
