import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function FarmakologiaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/farmakologia" domains={getNavDomains("farmakologia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
