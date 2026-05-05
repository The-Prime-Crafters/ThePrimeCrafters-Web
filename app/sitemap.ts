import type { MetadataRoute } from "next";
import { projectsData } from "@/app/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theprimecrafters.com";

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  const caseStudyRoutes = Array.isArray(projectsData)
    ? projectsData.map((project) => ({
        url: `${baseUrl}/case-study/${project.slug}`,
        lastModified: new Date(),
      }))
    : [];

  return [...staticRoutes, ...caseStudyRoutes];
}