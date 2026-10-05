import type { Metadata } from "next";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const ASSESSMENT_URL = "https://www.longevityinitiativeforfoodandeducation.com/assessment";

export const metadata: Metadata = {
  title: "Free LIFE Assessment — Understand Your Everyday Habits",
  description: "Take the free LIFE Assessment to understand your strengths and opportunities across six practical pillars of longevity.",
  alternates: {
    canonical: ASSESSMENT_URL,
  },
  openGraph: {
    title: "Free LIFE Assessment — Understand Your Everyday Habits",
    description: "Take the free LIFE Assessment to understand your strengths and opportunities across six practical pillars of longevity.",
    url: ASSESSMENT_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Free LIFE Assessment — Understand Your Everyday Habits",
    description: "Take the free LIFE Assessment to understand your strengths and opportunities across six practical pillars of longevity.",
    images: DEFAULT_TWITTER_IMAGES,
  },
};

export default function AssessmentPage() {
  return (
    <>
      <main className="bg-[var(--bg)] pb-16 pt-10 text-[var(--text)]">
        <AssessmentWizard />
      </main>
</>
  );
}
