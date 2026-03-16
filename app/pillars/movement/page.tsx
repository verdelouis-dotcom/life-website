import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "movement";
const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const pillar = getPillarBySlug(slug);
const pageTitle = `${pillar?.title ?? "Movement"} Pillar | LIFE`;
const pageDescription = pillar?.summary ?? "Explore the LIFE Movement pillar focused on natural movement and strength.";
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

export default function MovementPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
