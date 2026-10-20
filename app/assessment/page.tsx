import type { Metadata } from "next";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGES } from "@/lib/seo";

const ASSESSMENT_URL = "https://www.longevityinitiativeforfoodandeducation.com/assessment";

export const metadata: Metadata = {
  title: "LIFE Expectancy Calculator — Find Your Number",
  description: "Estimate your LIFE expectancy using U.S. life-table data and published research, then see practical habits that may help you add years.",
  alternates: {
    canonical: ASSESSMENT_URL,
  },
  openGraph: {
    title: "LIFE Expectancy Calculator — Find Your Number",
    description: "Estimate your LIFE expectancy using U.S. life-table data and published research, then see practical habits that may help you add years.",
    url: ASSESSMENT_URL,
    siteName: "LIFE — Longevity Initiative for Food & Education",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "LIFE Expectancy Calculator — Find Your Number",
    description: "Estimate your LIFE expectancy using U.S. life-table data and published research, then see practical habits that may help you add years.",
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
