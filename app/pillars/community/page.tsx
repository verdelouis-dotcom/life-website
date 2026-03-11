import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Connection Pillar | LIFE",
  description: "Connection and belonging are part of LIFE’s six-pillar longevity framework.",
};

export default function CommunityPillarRedirectPage() {
  redirect("/pillars/connection");
}
