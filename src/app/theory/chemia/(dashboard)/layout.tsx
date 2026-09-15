import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

/**
 * Layout for the chemia dashboard only.
 *
 * Scoped to the `(dashboard)` route group so the chapter reading view at
 * `/theory/chemia/[id]` never mounts it: the reader has its own right-hand
 * table of contents, and a left tree beside it was both redundant and a second
 * copy of the navigation payload. Route groups do not appear in the URL, so
 * `/theory/chemia` is unchanged.
 */
export default function ChemiaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Projected server-side: the chapter tree crosses to the client without the
  // section content hanging off it.
  return (
    <TextbookLayoutWrapper basePath="/theory/chemia" domains={getNavDomains("chemia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
