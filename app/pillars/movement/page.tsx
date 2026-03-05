import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "movement";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Movement"} Pillar | L.I.F.E.`,
  description: pillar?.summary,
};

export default function MovementPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
