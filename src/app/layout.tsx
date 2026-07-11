import type { Metadata } from "next";
import localFont from "next/font/local";
import { LayoutShell } from "@/components/LayoutShell";
import "./globals.css";

const plutoSansLight = localFont({
  src: "../../public/fonts/PlutoSansLight.woff2",
  variable: "--font-pluto-light",
  display: "swap",
  weight: "300",
});

const plutoSansRegular = localFont({
  src: "../../public/fonts/PlutoSansRegular.woff2",
  variable: "--font-pluto-regular",
  display: "swap",
  weight: "400",
});

const plutoSansMedium = localFont({
  src: "../../public/fonts/PlutoSansMedium.woff2",
  variable: "--font-pluto-medium",
  display: "swap",
  weight: "500",
});

const plutoLightItalic = localFont({
  src: "../../public/fonts/PlutoLightItalic.woff2",
  variable: "--font-pluto-light-italic",
  display: "swap",
  weight: "300",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Medycyna — Inteligentny podręcznik do anatomii",
  description:
    "Darmowy, otwarto-źródłowy podręcznik do anatomii stworzony pod ramy egzaminu z anatomii. Active Recall, pytania egzaminacyjne i materiały z Bochenka i Reichera.",
  metadataBase: new URL("https://anatomia2026.pl"),
  icons: {
    icon: [
      { url: "/seo/favicon.ico" },
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    siteName: "Medycyna",
    url: "https://anatomia2026.pl",
    type: "website",
    images: "/seo/og-image",
  },
};

export const viewport = {
  themeColor: "#3A5062",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${plutoSansLight.variable} ${plutoSansRegular.variable} ${plutoSansMedium.variable} ${plutoLightItalic.variable}`}
    >
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
