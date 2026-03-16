import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

interface CTA {
  href: string;
  label: string;
  variant?: "solid" | "outline";
}

interface ResourceArticleLayoutProps {
  title: string;
  intro: string;
  children: ReactNode;
  primaryCta: CTA;
  secondaryCta?: CTA;
}

export default function ResourceArticleLayout({ title, intro, children, primaryCta, secondaryCta }: ResourceArticleLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] text-[var(--text)]">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[40px] border border-[var(--border)] bg-white/90 p-10 shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">LIFE Resources</p>
            <h1 className="mt-2 text-4xl font-semibold text-[var(--life-forest)]">{title}</h1>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-6 px-6 pb-12">{children}</section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-[36px] border border-[var(--border)] bg-white p-8 text-center shadow-sm">
            <p className="type-eyebrow text-[var(--olive)]">Next steps</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href={primaryCta.href} className={`btn-${primaryCta.variant === "outline" ? "outline" : "solid"} px-8 text-base`}>
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link href={secondaryCta.href} className={`btn-${secondaryCta.variant === "outline" ? "outline" : "solid"} px-8 text-base`}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
