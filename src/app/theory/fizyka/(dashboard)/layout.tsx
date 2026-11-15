import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function FizykaDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper basePath="/theory/fizyka" domains={getNavDomains("fizyka")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
