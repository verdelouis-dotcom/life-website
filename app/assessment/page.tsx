import type { Metadata } from "next";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const ASSESSMENT_URL = "https://www.longevityinitiativeforfoodandeducation.com/assessment";

export const metadata: Metadata = {
  title: "Free Longevity Assessment — Discover Your LIFE Age",
  description: "Take the free LIFE longevity assessment. Discover which habits are adding years to your life and which ones are taking them away.",
  alternates: {
    canonical: ASSESSMENT_URL,
  },
  openGraph: {
    title: "Free Longevity Assessment — Discover Your LIFE Age",
    description: "Take the free LIFE longevity assessment. Discover which habits are adding years to your life and which ones are taking them away.",
    url: ASSESSMENT_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Free Longevity Assessment — Discover Your LIFE Age",
    description: "Take the free LIFE longevity assessment. Discover which habits are adding years to your life and which ones are taking them away.",
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
