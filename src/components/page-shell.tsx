import { PropsWithChildren } from "react";

type PageShellProps = {
  className?: string;
};

export default function PageShell({ children, className }: PropsWithChildren<PageShellProps>) {
  return (
    <div className={`mx-auto w-full max-w-[760px] px-6 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
