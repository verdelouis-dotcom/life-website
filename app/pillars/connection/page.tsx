import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "connection";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Connection"} Pillar | LIFE`,
  description: pillar?.summary,
};

export default function ConnectionPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
