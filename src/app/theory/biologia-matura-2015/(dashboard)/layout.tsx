import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function BiologiaMatura2015DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper
      basePath="/theory/biologia-matura-2015"
      domains={getNavDomains("biologia-matura-2015")}
    >
      {children}
    </TextbookLayoutWrapper>
  );
}
