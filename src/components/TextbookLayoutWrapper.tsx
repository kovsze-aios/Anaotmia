"use client";

import { usePathname, useRouter } from "next/navigation";
import { TextbookLayout } from "./TextbookLayout";
import { getDomains, getDomain } from "@/data/textbook";

export function TextbookLayoutWrapper({ children }: { children: React.ReactNode }) {
  const domains = getDomains();
  const pathname = usePathname();
  const router = useRouter();

  // Determine active section from the URL path.
  // We assume the URL matches `/textbook/[id]` where [id] is the section ID.
  const pathParts = pathname.split("/");
  const activeSectionId = pathParts.length > 2 && pathParts[1] === "textbook" ? pathParts[2] : null;

  const handleSectionSelect = (domainId: string, sectionId: string) => {
    router.push(`/textbook/${sectionId}`);
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
