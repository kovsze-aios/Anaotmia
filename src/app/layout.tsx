import type { Metadata } from "next";
import localFont from "next/font/local";
import { I18nProvider } from "@/i18n";
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
  // Declared so the variable stays available, but nothing references it yet.
  // Preloading it spent a request per page load and logged a browser warning
  // that the font went unused; it will still load on demand if something
  // starts using the variable.
  preload: false,
});

export const metadata: Metadata = {
  // A template rather than a fixed string: every page states only its own
  // subject and the brand is appended once, here. Pages that set no title of
  // their own fall back to `default`.
  title: {
    default: "Medycyna",
    template: "%s | Medycyna",
  },
  description:
    "Inteligentny podręcznik i baza wiedzy medycznej. Anatomia, interaktywny atlas 3D i system Active Recall.",
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

// Corrects `<html lang>` before paint. The shell's *text* is still English
// until hydration — only a dynamic render could fix that, and it would cost us
// static generation — but the language attribute itself is right immediately,
// which is what assistive tech and translation tooling read.
const localeInitScript = `(function(){try{var l=localStorage.getItem("locale");if(l&&["en","pl","de","fr","it","es"].indexOf(l)>-1){document.documentElement.lang=l}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plutoSansLight.variable} ${plutoSansRegular.variable} ${plutoSansMedium.variable} ${plutoLightItalic.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
