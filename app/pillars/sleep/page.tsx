import type { Metadata } from "next";
import PillarDetailPage from "@/components/pillar-detail-page";
import { getPillarBySlug } from "@/data/pillars";

const slug = "sleep";
const pillar = getPillarBySlug(slug);

export const metadata: Metadata = {
  title: `${pillar?.title ?? "Sleep"} Pillar | LIFE`,
  description: pillar?.summary,
};

export default function SleepPillarPage() {
  return <PillarDetailPage slug={slug} />;
}
