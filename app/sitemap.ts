import type { MetadataRoute } from "next";

const SITE_URL = "https://www.longevityinitiativeforfoodandeducation.com";
const ROUTES = [
  "/",
  "/about",
  "/governance",
  "/host",
  "/register",
  "/register/thanks",
  "/donate",
  "/speaking",
  "/workshops",
  "/lifehost-guide",
  "/why-this-matters",
  "/what-we-do",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
