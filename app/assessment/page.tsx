import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";

const ASSESSMENT_URL = "https://www.longevityinitiativeforfoodandeducation.com/assessment";

export const metadata: Metadata = {
  title: "Longevity Assessment | Discover Your Health & Lifestyle Score",
  description: "Take the LIFE Longevity Assessment to see how your daily habits impact your potential lifespan and learn how to improve your health.",
  alternates: {
    canonical: ASSESSMENT_URL,
  },
  openGraph: {
    title: "Longevity Assessment | Discover Your Health & Lifestyle Score",
    description: "Take the LIFE Longevity Assessment to see how your daily habits impact your potential lifespan and learn how to improve your health.",
    url: ASSESSMENT_URL,
  },
  twitter: {
    title: "Longevity Assessment | Discover Your Health & Lifestyle Score",
    description: "Take the LIFE Longevity Assessment to see how your daily habits impact your potential lifespan and learn how to improve your health.",
  },
};

export default function AssessmentPage() {
  return (
    <>
      <main className="bg-[var(--bg)] pb-16 pt-10 text-[var(--text)]">
        <AssessmentWizard />
      </main>
      <SiteFooter />
    </>
  );
}
