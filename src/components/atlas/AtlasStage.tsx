"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, Box, Layers3, MousePointerClick, Search } from "lucide-react";

/**
 * The WebGL viewer is loaded on demand for two reasons: it pulls in `three`
 * (~600 kB) plus ~30 MB of mesh data, and it touches `window` at module scope,
 * so it can never be server-rendered.
 */
const AtlasExplorer = dynamic(() => import("./AtlasExplorer"), {
  ssr: false,
  loading: () => (
    <div className="atlas-boot" role="status">
      <Activity size={20} aria-hidden="true" />
      <span>Uruchamianie widoku 3D…</span>
    </div>
  ),
});

const HIGHLIGHTS = [
  {
    icon: Layers3,
    title: "15 układów",
    body: "Włączaj i wyłączaj układ kostny, mięśniowy, nerwowy, krwionośny i pozostałe.",
  },
  {
    icon: MousePointerClick,
    title: "2 234 struktury",
    body: "Dotknij dowolnej struktury, aby ją wyizolować i poznać jej opis.",
  },
  {
    icon: Search,
    title: "Wyszukiwarka",
    body: "Znajdź konkretną kość, mięsień lub nerw spośród 3 432 nazwanych pojęć.",
  },
];

export function AtlasStage() {
  const [launched, setLaunched] = useState(false);

  // The immersive view is fixed-position and full-bleed, so the page behind it
  // must not scroll while it is open. The `atlas-open` class additionally lets
  // the stylesheet lift portalled popups above the viewer — Base UI renders them
  // at `document.body`, outside the viewer's stacking context.
  useEffect(() => {
    if (!launched) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("atlas-open");
    return () => {
      document.body.style.overflow = previous;
      document.body.classList.remove("atlas-open");
    };
  }, [launched]);

  if (launched) {
    return (
      <div className="atlas-fullscreen">
        <AtlasExplorer onExit={() => setLaunched(false)} />
      </div>
    );
  }

  return (
    <section className="atlas-poster" aria-labelledby="atlas-poster-heading">
      <div className="atlas-poster__inner">
        <div className="atlas-poster__copy">
          <div className="atlas-poster__eyebrow">
            <span className="atlas-status-dot" aria-hidden="true" />
            INTERAKTYWNA ANATOMIA 3D
          </div>
          <h1 id="atlas-poster-heading">
            Atlas 3D<span className="atlas-poster__accent">.</span>
          </h1>
          <p className="atlas-poster__lead">
            Obracaj, rozkładaj i badaj kompletny model anatomiczny dorosłego
            człowieka — 2 234 struktury w 15 układach, prosto w przeglądarce.
          </p>

          <ul className="atlas-poster__highlights">
            {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon size={18} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="atlas-poster__actions">
            <button
              type="button"
              className="atlas-poster__cta focus-ring"
              onClick={() => setLaunched(true)}
            >
              <Box size={20} aria-hidden="true" />
              Uruchom Atlas 3D
            </button>
            {/* Stated up front: this is a large download on a metered connection. */}
            <p className="atlas-poster__weight">
              Model waży ok. 30 MB i wczytuje się dopiero po uruchomieniu.
              Wymaga przeglądarki z obsługą WebGL.
            </p>
          </div>
        </div>

        <div className="atlas-poster__art" aria-hidden="true">
          <div className="atlas-poster__orb" />
          <div className="atlas-poster__grid" />
          <Box size={132} strokeWidth={0.6} />
        </div>
      </div>
    </section>
  );
}
