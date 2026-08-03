import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";
import { getNavDomains } from "@/server";

export default function TextbookRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Projected server-side: the chapter tree crosses to the client without the
  // section content hanging off it.
  return (
    <TextbookLayoutWrapper domains={getNavDomains("anatomia")}>
      {children}
    </TextbookLayoutWrapper>
  );
}
