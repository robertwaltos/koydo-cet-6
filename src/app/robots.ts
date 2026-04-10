import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://cet-6.koydo.app/sitemap.xml",
    host: "https://cet-6.koydo.app",
  };
}
