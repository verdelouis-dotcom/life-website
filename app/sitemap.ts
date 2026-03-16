import type { MetadataRoute } from "next";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const ROUTES = [
  "/",
  "/about",
  "/how-it-works",
  "/assessment",
  "/assessment/methodology",
  "/host",
  "/workshops",
  "/register",
  "/register/thanks",
  "/donate",
  "/keynote",
  "/contact",
  "/impact",
  "/resources",
  "/resources/why-shared-meals-matter",
  "/resources/mediterranean-cooking-for-longevity",
  "/resources/the-six-pillars-of-life",
  "/resources/social-connection-and-longevity",
  "/resources/how-life-creates-community-health",
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
