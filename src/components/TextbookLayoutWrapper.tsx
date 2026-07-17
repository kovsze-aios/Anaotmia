"use client";

import { usePathname, useRouter } from "next/navigation";
import { TextbookLayout } from "./TextbookLayout";
import { getDomains, getDomain } from "@/data/textbook";

export function TextbookLayoutWrapper({ children }: { children: React.ReactNode }) {
  const domains = getDomains();
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
