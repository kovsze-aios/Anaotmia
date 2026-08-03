import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anatomia2026.pl";

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
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/seo/favicon.ico" },
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    siteName: "Medycyna",
    url: SITE_URL,
    type: "website",
    images: "/seo/og-image",
  },
};

export const viewport = {
  themeColor: "#000000",
};

// Applies the persisted theme before first paint, so there is no flash of the
// wrong theme and dark-mode users don't get a light flash on reload.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={`${plutoSansLight.variable} ${plutoSansRegular.variable} ${plutoSansMedium.variable} ${plutoLightItalic.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
