import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "food";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Food"} Pillar | L.I.F.E.`,
  description: pillar?.summary,
};

export default function FoodPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
