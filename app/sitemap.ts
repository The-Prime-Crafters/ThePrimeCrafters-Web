import type { MetadataRoute } from "next";
import { projectsData } from "@/app/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theprimecrafters.com";

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
  ];

  const caseStudies: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${base}/case-study/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...caseStudies];
}

