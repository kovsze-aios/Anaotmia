"use client";

import { usePathname, useRouter } from "next/navigation";
import { TextbookLayout } from "./TextbookLayout";
import type { NavDomain } from "@/server/models";

export function TextbookLayoutWrapper({
  domains,
  children,
}: {
  /** Chapter tree without content, resolved by the server layout. */
  domains: NavDomain[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine active section from the URL path.
  // We assume the URL matches `/theory/anatomia/[id]` where [id] is the section ID.
  const pathParts = pathname.split("/");
  const activeSectionId = pathParts.length > 3 && pathParts[1] === "theory" && pathParts[2] === "anatomia" ? pathParts[3] : null;

  const handleSectionSelect = (domainId: string, sectionId: string) => {
    router.push(`/theory/anatomia/${sectionId}`);
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
