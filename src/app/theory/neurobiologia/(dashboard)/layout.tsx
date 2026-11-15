import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function NeurobiologiaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/neurobiologia" domains={getNavDomains("neurobiologia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
