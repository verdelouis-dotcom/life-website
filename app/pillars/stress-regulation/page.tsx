import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "stress-regulation";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Stress Regulation"} Pillar | L.I.F.E.`,
  description: pillar?.summary,
};

export default function StressRegulationPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
