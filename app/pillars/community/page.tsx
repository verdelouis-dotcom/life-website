import type { Metadata } from "next";
import { redirect } from "next/navigation";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const connectionUrl = `${SITE_URL}/pillars/connection`;

export const metadata: Metadata = {
  title: "Connection Pillar | LIFE",
  description: "Connection and belonging are part of LIFE’s six-pillar longevity framework.",
  alternates: {
    canonical: connectionUrl,
  },
  openGraph: {
    title: "Connection Pillar | LIFE",
    description: "Connection and belonging are part of LIFE’s six-pillar longevity framework.",
    url: connectionUrl,
  },
  twitter: {
    title: "Connection Pillar | LIFE",
    description: "Connection and belonging are part of LIFE’s six-pillar longevity framework.",
  },
};

export default function CommunityPillarRedirectPage() {
  redirect("/pillars/connection");
}
