import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import localFont from "next/font/local";
import { I18nProvider } from "@/i18n";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sportnotes.pl";

const caveatHandwriting = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

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
    default: "SportNotes",
    template: "%s | SportNotes",
  },
  applicationName: "SportNotes",
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
    siteName: "SportNotes",
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

// Corrects `<html lang>` before paint if the visitor picked another language,
// defaulting to Polish (`pl`).
const localeInitScript = `(function(){try{var l=localStorage.getItem("locale");if(l&&["en","pl","de","fr","it","es"].indexOf(l)>-1){document.documentElement.lang=l}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={`${plutoSansLight.variable} ${plutoSansRegular.variable} ${plutoSansMedium.variable} ${plutoLightItalic.variable} ${caveatHandwriting.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
