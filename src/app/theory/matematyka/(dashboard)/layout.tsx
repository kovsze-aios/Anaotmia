import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function MatematykaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/matematyka" domains={getNavDomains("matematyka")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
