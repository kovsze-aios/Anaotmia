import type { MetadataRoute } from "next";
import { getAnatomyDomains } from "@/server";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anatomia2026.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/matura`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/matura/biologia`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/matura/chemia`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/theory/anatomia`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/theory/biologia`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/theory/chemia`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/theory/fizjologia`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const sectionRoutes: MetadataRoute.Sitemap = getAnatomyDomains().flatMap(
    (domain) =>
      domain.sections.map((section) => ({
        url: `${BASE_URL}/theory/anatomia/${section.id}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  );

  return [...staticRoutes, ...sectionRoutes];
}
