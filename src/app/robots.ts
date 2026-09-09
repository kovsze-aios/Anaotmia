import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/**
 * Crawl policy.
 *
 * Everything readable is open, including all of `/theory/`. The two exclusions
 * are routes that render nothing a search result could use: `/api/` returns
 * JSON — `/api/section` alone would otherwise be crawled 1,730 times for
 * content that already has a page — and `/_next/` is build output.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    // No `host` directive: it is a Yandex extension that expects a bare
    // hostname, and Next renders whatever it is given verbatim — an origin
    // with a scheme and a trailing slash is not what the directive means.
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
