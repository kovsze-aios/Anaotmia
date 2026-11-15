import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function BiochemiaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/biochemia" domains={getNavDomains("biochemia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
