"use client";

import { usePathname, useRouter } from "next/navigation";
import { TextbookLayout } from "./TextbookLayout";
import type { NavDomain } from "@/server/models";

/**
 * Sidebar shell for a subject's dashboard.
 *
 * Client-side only because the sidebar tracks the current chapter and opens as
 * a drawer on mobile; the tree itself is projected by the server layout above,
 * so no chapter content crosses over.
 *
 * Takes the subject's route rather than assuming anatomy — every subject now
 * reads through the same chapter routes, and hardcoding one of them here left
 * the other three with a sidebar that navigated to anatomy.
 */
export function TextbookLayoutWrapper({
  basePath,
  domains,
  children,
}: {
  /** Route the subject's chapters live under, e.g. `/theory/biologia`. */
  basePath: string;
  /** Chapter tree without content, resolved by the server layout. */
  domains: NavDomain[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // A chapter is open when the path goes one segment deeper than the subject
  // root — `/theory/<subject>/<id>`. On the landing page itself there is no
  // active chapter, and nothing in the tree is marked.
  const activeSectionId = pathname.startsWith(`${basePath}/`)
    ? (pathname.slice(basePath.length + 1).split("/")[0] || null)
    : null;

  const handleSectionSelect = (_domainId: string, sectionId: string) => {
    router.push(`${basePath}/${sectionId}`);
  };

  return (
    <TextbookLayout
      domains={domains}
      activeSection={activeSectionId}
      onSectionSelect={handleSectionSelect}
    >
      {children}
    </TextbookLayout>
  );
}
