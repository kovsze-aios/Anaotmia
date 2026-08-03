import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

/** Loads a self-hosted font for the OG card, falling back to sans-serif. */
async function loadFont(origin: string, path: string): Promise<ArrayBuffer | undefined> {
  try {
    const res = await fetch(`${origin}${path}`);
    if (res.ok) return await res.arrayBuffer();
  } catch {
    // Font loading is cosmetic — never fail the card because of it.
  }
  return undefined;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { origin } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get("title") ?? "Interaktywny Podręcznik Medyczny";
    const domain = searchParams.get("domain") ?? "Nauka do egzaminu";

    const [plutoRegular, plutoMedium] = await Promise.all([
      loadFont(origin, "/fonts/PlutoSansRegular.woff2"),
      loadFont(origin, "/fonts/PlutoSansMedium.woff2"),
    ]);

    const fonts: {
      name: string;
      data: ArrayBuffer;
      weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      style: "normal";
    }[] = [];
    if (plutoRegular) fonts.push({ name: "Pluto", data: plutoRegular, weight: 400, style: "normal" });
    if (plutoMedium) fonts.push({ name: "Pluto", data: plutoMedium, weight: 500, style: "normal" });
    if (plutoMedium) fonts.push({ name: "Pluto", data: plutoMedium, weight: 700, style: "normal" });
    const fontFamily = fonts.length > 0 ? "Pluto" : "sans-serif";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            backgroundImage: "linear-gradient(to bottom right, #111111, #000000)",
            color: "white",
            padding: "80px",
            fontFamily,
          }}
        >
          {/* Header/Domain pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              padding: "12px 24px",
              borderRadius: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {domain}
          </div>

          {/* Main Title */}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "60px",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>

          {/* Branding footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 32,
                fontWeight: 300,
                color: "#a1a1aa", // zinc-400 equivalent
              }}
            >
              Anatomia<span style={{ fontWeight: 600, color: "white" }}>2026</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
