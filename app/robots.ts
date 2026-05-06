import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.theprimecrafters.com", // ✅ MUST be here
    sitemap: "https://www.theprimecrafters.com/sitemap.xml",
  };
}