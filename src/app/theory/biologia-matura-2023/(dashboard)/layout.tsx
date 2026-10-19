import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function BiologiaMatura2023DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper
      basePath="/theory/biologia-matura-2023"
      domains={getNavDomains("biologia-matura-2023")}
    >
      {children}
    </TextbookLayoutWrapper>
  );
}
