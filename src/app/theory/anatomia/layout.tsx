import { TextbookLayoutWrapper } from "@/components/TextbookLayoutWrapper";

export default function TextbookRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TextbookLayoutWrapper>{children}</TextbookLayoutWrapper>;
}
