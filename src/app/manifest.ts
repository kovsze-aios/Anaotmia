import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Medycyna — Inteligentny podręcznik do anatomii",
    short_name: "Medycyna",
    description:
      "Darmowy, otwarto-źródłowy podręcznik do anatomii z Active Recall i pytaniami egzaminacyjnymi.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/seo/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/seo/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
