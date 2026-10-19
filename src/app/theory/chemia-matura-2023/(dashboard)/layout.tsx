import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function ChemiaMatura2023DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper
      basePath="/theory/chemia-matura-2023"
      domains={getNavDomains("chemia-matura-2023")}
    >
      {children}
    </TextbookLayoutWrapper>
  );
}
