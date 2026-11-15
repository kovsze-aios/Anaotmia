import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function InformatykaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/informatyka" domains={getNavDomains("informatyka")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
