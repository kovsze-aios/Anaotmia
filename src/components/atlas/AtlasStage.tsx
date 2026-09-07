"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, Box, Layers3, MousePointerClick, Search } from "lucide-react";

import { useI18n } from "@/i18n";

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
      {/* Localised by `AtlasBootLabel`, which can reach the locale context. */}
      <AtlasBootLabel />
    </div>
  ),
});

function AtlasBootLabel() {
  const { t } = useI18n();
  return <span>{t.atlasPoster.booting}</span>;
}

export function AtlasStage() {
  const { t } = useI18n();
  const highlights = [
    { icon: Layers3, title: t.atlasPoster.systemsTitle, body: t.atlasPoster.systemsBody },
    { icon: MousePointerClick, title: t.atlasPoster.structuresTitle, body: t.atlasPoster.structuresBody },
    { icon: Search, title: t.atlasPoster.searchTitle, body: t.atlasPoster.searchBody },
  ];
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
            {t.atlasPoster.eyebrow}
          </div>
          <h1 id="atlas-poster-heading">
            {t.atlasPoster.title}
            <span className="atlas-poster__accent">.</span>
          </h1>
          <p className="atlas-poster__lead">
{t.atlasPoster.lead}
          </p>

          <ul className="atlas-poster__highlights">
            {highlights.map(({ icon: Icon, title, body }) => (
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
              {t.atlasPoster.launch}
            </button>
            {/* Stated up front: this is a large download on a metered connection. */}
            <p className="atlas-poster__weight">
{t.atlasPoster.weight}
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
