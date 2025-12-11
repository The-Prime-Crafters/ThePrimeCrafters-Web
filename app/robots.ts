import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://theprimecrafters.com/sitemap.xml",
    host: "https://theprimecrafters.com",
  };
}

