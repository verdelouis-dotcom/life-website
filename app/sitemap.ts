import type { MetadataRoute } from "next";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const ROUTES = [
  "/",
  "/assessment",
  "/assessment/methodology",
  "/host",
  "/register",
  "/register/thanks",
  "/donate",
  "/keynote",
  "/newsletter",
  "/gallery",
  "/pillars/food",
  "/pillars/movement",
  "/pillars/sleep",
  "/pillars/connection",
  "/pillars/purpose",
  "/pillars/stress-regulation",
  "/pillars/community",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
