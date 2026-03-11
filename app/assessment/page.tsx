import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";

export const metadata: Metadata = {
  title: "LIFE Longevity Assessment",
  description:
    "Take the LIFE Longevity Assessment to explore your survey-based biological age, estimated lifespan, and lifestyle opportunities associated with healthy aging.",
};

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--bg)] pb-16 pt-10 text-[var(--text)]">
        <AssessmentWizard />
      </main>
      <SiteFooter />
    </>
  );
}
