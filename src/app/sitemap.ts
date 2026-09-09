import type { MetadataRoute } from "next";

import { getTheoryDomains, type TheorySubject } from "@/server";
import { absoluteUrl } from "@/lib/seo";

/**
 * Every indexable route, built from the corpus rather than a hand-kept list.
 *
 * Only URLs that resolve to their own HTML document are listed. That rules out
 * the `?domain=` links the drawer uses for physiology, biology and chemistry:
 * those select a chapter on the client and are stripped from the address bar
 * straight afterwards, so all of them return the same prerendered page.
 * Submitting them would be submitting a thousand duplicates. The chapter
 * routes under `/theory/<subject>/<id>` are the real documents, and those are
 * what appear here.
 */

const SUBJECTS: TheorySubject[] = ["anatomia", "fizjologia", "biologia", "chemia"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/theory"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/matura"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/matura/biologia"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/matura/chemia"), lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Subject landing pages rank for the broad query ("anatomia podręcznik") and
  // are the entry point a chapter's breadcrumb points back to.
  const subjectRoutes: MetadataRoute.Sitemap = SUBJECTS.map((subject) => ({
    url: absoluteUrl(`/theory/${subject}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const chapterRoutes: MetadataRoute.Sitemap = SUBJECTS.flatMap((subject) =>
    getTheoryDomains(subject).flatMap((domain) =>
      domain.sections.map((section) => ({
        url: absoluteUrl(`/theory/${subject}/${section.id}`),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
  );

  return [...staticRoutes, ...subjectRoutes, ...chapterRoutes];
}
