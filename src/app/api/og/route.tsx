import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.get("title") ?? "Interaktywny Podręcznik Medyczny";
    const domain = searchParams.get("domain") ?? "Nauka do egzaminu";

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
            fontFamily: "sans-serif", // Ideally load our custom Pluto fonts if supported, using fallback for now
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
