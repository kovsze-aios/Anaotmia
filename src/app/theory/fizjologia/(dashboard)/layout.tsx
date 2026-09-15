import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

/**
 * Layout for the fizjologia dashboard only.
 *
 * Scoped to the `(dashboard)` route group so the chapter reading view at
 * `/theory/fizjologia/[id]` never mounts it: the reader has its own right-hand
 * table of contents, and a left tree beside it was both redundant and a second
 * copy of the navigation payload. Route groups do not appear in the URL, so
 * `/theory/fizjologia` is unchanged.
 */
export default function FizjologiaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Projected server-side: the chapter tree crosses to the client without the
  // section content hanging off it.
  return (
    <TextbookLayoutWrapper basePath="/theory/fizjologia" domains={getNavDomains("fizjologia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
