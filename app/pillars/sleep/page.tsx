import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "sleep";
const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const pillar = getPillarBySlug(slug);
const pageTitle = `${pillar?.title ?? "Sleep"} Pillar | LIFE`;
const pageDescription = pillar?.summary ?? "Explore the LIFE Sleep pillar focused on rest, rhythm, and recovery.";
const pageUrl = `${SITE_URL}/pillars/${slug}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SleepPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
