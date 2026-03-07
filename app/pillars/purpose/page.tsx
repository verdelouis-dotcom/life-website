import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "purpose";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Purpose"} Pillar | LIFE`,
  description: pillar?.summary,
};

export default function PurposePillarPage() {
  return <PillarDetailPage slug={slug} />;
}
