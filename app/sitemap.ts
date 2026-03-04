import type { MetadataRoute } from "next";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const ROUTES = ["/", "/register", "/register/thanks", "/donate", "/keynote", "/gallery"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
