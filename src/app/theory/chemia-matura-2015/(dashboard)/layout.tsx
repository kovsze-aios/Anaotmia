import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function ChemiaMatura2015DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextbookLayoutWrapper
      basePath="/theory/chemia-matura-2015"
      domains={getNavDomains("chemia-matura-2015")}
    >
      {children}
    </TextbookLayoutWrapper>
  );
}
