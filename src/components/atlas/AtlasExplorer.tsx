"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Eye,
  Focus,
  Hand,
  Info,
  Layers,
  Layers3,
  Pause,
  RotateCcw,
  RotateCw,
  Scissors,
  Search,
  Sparkles,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import type { Atlas, AtlasConcept, SystemId } from "@/server/models";
import { getAtlas } from "@/services/atlasService";
import { useTheme } from "@/hooks/useTheme";
import { useI18n, translateAnatomyName, anatomySearchHaystack } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import AnatomyScene from "./AnatomyScene";
import {
  DEFAULT_VISIBLE,
  REGION_PRESETS,
  SYSTEMS,
  explanation,
  hasOrganExplanation,
  type RegionId,
  type SceneState,
  type View,
} from "./anatomy";

const initial: SceneState = {
  explode: 0,
  peelDepth: 0,
  peeled: [],
  xray: false,
  mode: "inspect",
  region: "whole",
  focusTrigger: 0,
  zoomTrigger: 0,
  zoomStep: 1,
  orbitTrigger: 0,
  orbitAzimuth: 0,
  orbitPolar: 0,
  visible: DEFAULT_VISIBLE,
  selected: [],
  isolate: false,
  view: "three-quarter",
  rotate: false,
  reset: 0,
};

/** Structures offered before the visitor has typed. Dataset names are English. */
const SUGGESTED = [
  "heart",
  "brain",
  "liver",
  "stomach",
  "spleen",
  "pancreas",
  "urinary bladder",
  "trachea",
  "diaphragm",
];

const ORGAN_PRESET: SystemId[] = [
  "cardiac",
  "respiratory",
  "digestive",
  "urinary",
  "endocrine",
  "reproductive",
];

const MUSCLE_SKELETON_PRESET: SystemId[] = [
  "skeletal",
  "muscular",
  "connective",
];

const NEUROVASCULAR_PRESET: SystemId[] = [
  "skeletal",
  "cardiac",
  "arterial",
  "venous",
  "nervous",
  "lymphatic",
];

export interface AtlasExplorerProps {
  /** Leaves the immersive view and returns to the landing poster. */
  onExit?: () => void;
  /**
   * BodyParts3D name to open focused on, e.g. "heart".
   */
  focusName?: string;
  /**
   * Running inside another panel rather than full screen.
   */
  embedded?: boolean;
}

export default function AtlasExplorer({
  onExit,
  focusName,
  embedded = false,
}: AtlasExplorerProps) {
  const detailTitle = useRef<HTMLHeadingElement>(null);
  const { dark } = useTheme();
  const { t, n, plural, locale } = useI18n();
  const isPl = locale === "pl";

  const [atlas, setAtlas] = useState<Atlas | null>(null);
  const [state, setState] = useState(initial);
  const [sliderMode, setSliderMode] = useState<"peel" | "explode">("peel");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [panel, setPanel] = useState<"layers" | "search" | null>(null);
  const [details, setDetails] = useState(false);
  const [about, setAbout] = useState(false);
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState<AtlasConcept | null>(null);

  const catalogueError = t.atlas.errorCatalogue;
  useEffect(() => {
    const abort = new AbortController();
    setProgress(0);
    setError("");
    getAtlas({ signal: abort.signal })
      .then(setAtlas)
      .catch((e: Error) => {
        if (e.name !== "AbortError") setError(e.message || catalogueError);
      });
    return () => abort.abort();
  }, [catalogueError]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        setPanel("search");
        setDetails(false);
      } else if (e.key === "Escape" && onExit) {
        onExit();
      } else if (e.key === "x" || e.key === "X") {
        setState((s) => ({ ...s, xray: !s.xray }));
      } else if (e.key === "p" || e.key === "P") {
        setState((s) => ({
          ...s,
          mode: s.mode === "peel" ? "inspect" : "peel",
        }));
      } else if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) {
        setState((s) => ({
          ...s,
          peeled: (s.peeled ?? []).slice(0, -1),
        }));
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [onExit]);

  const parts = useMemo(
    () => new Map(atlas?.parts.map((p) => [p.id, p])),
    [atlas],
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        SYSTEMS.map((s) => [
          s.id,
          atlas?.parts.filter((p) => p.system === s.id).length ?? 0,
        ]),
      ),
    [atlas],
  );
  const activeSystems = SYSTEMS.filter((s) => counts[s.id] > 0);

  const selectedParts = state.selected
    .map((id) => parts.get(id))
    .filter((p) => !!p);
  const selected = selectedParts[0];
  const system = SYSTEMS.find((s) => s.id === selected?.system);
  const peeledList = state.peeled ?? [];
  const visibleCount =
    atlas?.parts.filter((p) =>
      state.isolate
        ? state.selected.includes(p.id)
        : !peeledList.includes(p.id) &&
          (state.visible.includes(p.system) || state.selected.includes(p.id)),
    ).length ?? 0;

  const results = useMemo(() => {
    if (!atlas) return [];
    const term = query.toLowerCase().trim();
    if (!term) {
      return SUGGESTED.map((name) =>
        atlas.concepts.find((c) => c.name.toLowerCase() === name),
      ).filter((x): x is AtlasConcept => !!x);
    }
    return atlas.concepts
      .filter(
        (c) =>
          anatomySearchHaystack(c.name, locale).includes(term) ||
          c.id.toLowerCase().includes(term),
      )
      .sort((a, b) => a.name.length - b.name.length)
      .slice(0, 80);
  }, [atlas, query, locale]);

  const sceneLabels = useMemo(
    () => ({
      formatPartName: (name: string) => translateAnatomyName(name, locale),
      sceneAria: t.atlas.sceneAria,
      errorWebgl: t.atlas.errorWebgl,
      errorContextLost: t.atlas.errorContextLost,
      errorFile: t.atlas.errorFile,
      errorIncomplete: t.atlas.errorIncomplete,
      errorGeometry: t.atlas.errorGeometry,
      errorGeneric: t.atlas.errorGeneric,
    }),
    [t, locale],
  );

  const choose = (c: AtlasConcept) => {
    setChosen(c);
    setState((s) => ({
      ...s,
      selected: c.elements,
      isolate: false,
      rotate: false,
      focusTrigger: (s.focusTrigger ?? 0) + 1,
    }));
    if (!embedded) setDetails(true);
    setPanel(null);
  };

  useEffect(() => {
    if (!atlas || !focusName) return;
    const wanted = focusName.trim().toLowerCase();
    const concept =
      atlas.concepts.find((c) => c.name.toLowerCase() === wanted) ??
      atlas.parts.find((p) => p.name.toLowerCase() === wanted);
    if (!concept) return;

    const elements = "elements" in concept ? concept.elements : [concept.id];
    setChosen({ id: concept.id, name: concept.name, elements });
    setState((s) => ({
      ...s,
      selected: elements,
      isolate: true,
      rotate: false,
    }));
    if (!embedded) setDetails(true);
  }, [atlas, focusName, embedded]);

  const choosePart = (id: string) => {
    const p = parts.get(id);
    if (!p) return;
    setChosen({ id: p.conceptId, name: p.name, elements: [id] });
    setState((s) => ({ ...s, selected: [id], isolate: false, rotate: false }));
    if (!embedded) setDetails(true);
    setPanel(null);
  };

  /**
   * Peels a clicked structure away (dissection mode) and selects the deeper
   * neighbor if needed.
   */
  const peelPart = (id: string) => {
    setState((s) => {
      const currentPeeled = s.peeled ?? [];
      if (currentPeeled.includes(id)) return s;
      return {
        ...s,
        peeled: [...currentPeeled, id],
        selected: s.selected.filter((x) => x !== id),
      };
    });
  };

  /**
   * Peels the currently selected structure(s) AND automatically reveals/selects
   * the structure lying directly deeper underneath its 3D bounding box.
   */
  const peelSelectedAndRevealDeeper = () => {
    if (!atlas || state.selected.length === 0) return;
    const selectedIds = new Set(state.selected);
    const currentPeeled = new Set(state.peeled ?? []);
    const visibleSys = new Set(state.visible);

    // Compute union bounding box of currently selected parts
    let minX = Infinity,
      minY = Infinity,
      minZ = Infinity;
    let maxX = -Infinity,
      maxY = -Infinity,
      maxZ = -Infinity;
    selectedParts.forEach((p) => {
      minX = Math.min(minX, p.bounds[0][0]);
      minY = Math.min(minY, p.bounds[0][1]);
      minZ = Math.min(minZ, p.bounds[0][2]);
      maxX = Math.max(maxX, p.bounds[1][0]);
      maxY = Math.max(maxY, p.bounds[1][1]);
      maxZ = Math.max(maxZ, p.bounds[1][2]);
    });
    const cx = (minX + maxX) * 0.5;
    const cy = (minY + maxY) * 0.5;
    const cz = (minZ + maxZ) * 0.5;

    // Find the closest non-peeled, visible part overlapping/underneath the peeled structure
    let bestPart: Atlas["parts"][number] | null = null;
    let bestScore = Infinity;
    for (const p of atlas.parts) {
      if (
        selectedIds.has(p.id) ||
        currentPeeled.has(p.id) ||
        !visibleSys.has(p.system) ||
        p.system === "integumentary"
      ) {
        continue;
      }
      const px = (p.bounds[0][0] + p.bounds[1][0]) * 0.5;
      const py = (p.bounds[0][1] + p.bounds[1][1]) * 0.5;
      const pz = (p.bounds[0][2] + p.bounds[1][2]) * 0.5;
      const dist = Math.hypot(px - cx, py - cy, pz - cz);
      if (dist < bestScore) {
        bestScore = dist;
        bestPart = p;
      }
    }

    const nextPeeled = [
      ...(state.peeled ?? []),
      ...state.selected.filter((id) => !(state.peeled ?? []).includes(id)),
    ];

    if (bestPart && bestScore < 0.22) {
      setChosen({
        id: bestPart.conceptId,
        name: bestPart.name,
        elements: [bestPart.id],
      });
      setState((s) => ({
        ...s,
        peeled: nextPeeled,
        selected: [bestPart.id],
        isolate: false,
      }));
    } else {
      setState((s) => ({
        ...s,
        peeled: nextPeeled,
        selected: [],
        isolate: false,
      }));
      setDetails(false);
    }
  };

  /**
   * Peels away superficial overlying layers (skin, fascia, outer muscles) that
   * overlap the currently selected structure's 3D bounding box so the target
   * structure and its deep bed are clearly exposed.
   */
  const peelOverlyingAroundSelected = () => {
    if (!atlas || selectedParts.length === 0) return;
    const selectedIds = new Set(state.selected);
    let minX = Infinity,
      minY = Infinity,
      minZ = Infinity;
    let maxX = -Infinity,
      maxY = -Infinity,
      maxZ = -Infinity;
    selectedParts.forEach((p) => {
      minX = Math.min(minX, p.bounds[0][0] - 0.03);
      minY = Math.min(minY, p.bounds[0][1] - 0.03);
      minZ = Math.min(minZ, p.bounds[0][2] - 0.03);
      maxX = Math.max(maxX, p.bounds[1][0] + 0.03);
      maxY = Math.max(maxY, p.bounds[1][1] + 0.03);
      maxZ = Math.max(maxZ, p.bounds[1][2] + 0.03);
    });
    const selRad = Math.hypot(
      (minX + maxX) * 0.5,
      (minZ + maxZ) * 0.5,
    );

    const overlyingIds: string[] = [];
    for (const p of atlas.parts) {
      if (selectedIds.has(p.id) || p.system === "skeletal") continue;
      const overlapsBox =
        p.bounds[1][0] >= minX &&
        p.bounds[0][0] <= maxX &&
        p.bounds[1][1] >= minY &&
        p.bounds[0][1] <= maxY &&
        p.bounds[1][2] >= minZ &&
        p.bounds[0][2] <= maxZ;
      if (!overlapsBox) continue;
      const px = (p.bounds[0][0] + p.bounds[1][0]) * 0.5;
      const pz = (p.bounds[0][2] + p.bounds[1][2]) * 0.5;
      const partRad = Math.hypot(px, pz);
      if (
        p.system === "integumentary" ||
        p.system === "connective" ||
        (p.system === "muscular" && partRad >= selRad - 0.015)
      ) {
        overlyingIds.push(p.id);
      }
    }

    if (overlyingIds.length > 0) {
      setState((s) => {
        const merged = new Set([...(s.peeled ?? []), ...overlyingIds]);
        return {
          ...s,
          peeled: Array.from(merged),
          focusTrigger: (s.focusTrigger ?? 0) + 1,
        };
      });
    } else {
      // Fallback: enable X-Ray ghosting and focus camera if no outer muscles overlap
      setState((s) => ({
        ...s,
        xray: true,
        focusTrigger: (s.focusTrigger ?? 0) + 1,
      }));
    }
  };

  const toggle = (id: SystemId) => {
    setDetails(false);
    setState((s) => ({
      ...s,
      selected: [],
      isolate: false,
      visible: s.visible.includes(id)
        ? s.visible.filter((x) => x !== id)
        : [...s.visible, id],
    }));
  };

  const selectRegion = (region: RegionId) => {
    setState((s) => ({
      ...s,
      region,
      isolate: false,
      explode: 0,
      rotate: false,
      view: region === "spine" ? "back" : s.view,
      reset: s.reset + 1,
    }));
  };

  const reset = () => {
    setState((s) => ({
      ...initial,
      visible: DEFAULT_VISIBLE,
      reset: s.reset + 1,
    }));
    setChosen(null);
    setDetails(false);
    setPanel(null);
  };

  const openPanel = (next: "layers" | "search") => {
    setDetails(false);
    setPanel((p) => (p === next ? null : next));
  };

  const viewTitles = [
    t.atlas.viewThreeQuarter,
    t.atlas.viewFront,
    t.atlas.viewSide,
    t.atlas.viewBack,
  ];

  const activeRegion = state.region ?? "whole";
  const peelDepthPct = Math.round((state.peelDepth ?? 0) * 100);
  const explodePct = Math.round(state.explode * 100);

  return (
    <div className="atlas-studio">
      {atlas && (
        <AnatomyScene
          atlas={atlas}
          dark={dark}
          labels={sceneLabels}
          state={{ ...state, inspectorOpen: details && selectedParts.length > 0 }}
          onSelect={choosePart}
          onPeelPart={peelPart}
          onProgress={(p) => {
            setProgress(p);
            if (p === 100) setError("");
          }}
          onError={setError}
        />
      )}
      <div className="atlas-vignette" />

      <header className="atlas-identity">
        <div className="atlas-eyebrow">
          <span className="atlas-status-dot" /> {t.atlas.eyebrow}
        </div>
        <h1>
          {t.nav.atlas}
          <Badge variant="outline" className="atlas-edition">
            3D HD
          </Badge>
        </h1>
        <div className="atlas-identity-meta">
          {atlas ? n(atlas.parts.length) : n(2234)} {t.atlas.structures}{" "}
          <span>·</span> BodyParts3D
        </div>
      </header>

      {/* Quick Regional Camera Presets Bar (Desktop & Mobile Horizontal Scroll) */}
      <nav
        className="atlas-region-bar atlas-glass"
        aria-label={isPl ? "Zbliżenia regionalne" : "Regional camera views"}
      >
        <span className="atlas-region-bar__label">
          <Crosshair size={13} />
          <span>{isPl ? "Zbliżenie:" : "Focus:"}</span>
        </span>
        <div className="atlas-region-bar__scroll">
          {REGION_PRESETS.map((r) => {
            const active = activeRegion === r.id && !state.isolate;
            return (
              <button
                key={r.id}
                type="button"
                className={`atlas-region-pill ${active ? "active" : ""}`}
                onClick={() => selectRegion(r.id)}
                title={isPl ? r.labelPl : r.labelEn}
              >
                {r.id === "hand" && <Hand size={12} />}
                <span>{isPl ? r.shortPl : r.shortEn}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav className="atlas-top-actions" aria-label={t.atlas.panelsLabel}>
        <Button
          variant="ghost"
          className={state.mode === "peel" ? "active atlas-mode-peel-btn" : ""}
          onClick={() =>
            setState((s) => ({
              ...s,
              mode: s.mode === "peel" ? "inspect" : "peel",
            }))
          }
          title={
            isPl
              ? "Tryb Sekcji (Skalpel): Kliknij w dowolny mięsień lub tkankę, aby odsłonić głębszą warstwę [P]"
              : "Dissection Mode: Click any muscle or tissue to peel it away and reveal deeper layers [P]"
          }
        >
          <Scissors size={16} />
          <span>{isPl ? "Tryb odsłaniania" : "Peel Mode"}</span>
          <kbd>P</kbd>
        </Button>
        <Button
          variant="ghost"
          className={state.xray ? "active atlas-mode-xray-btn" : ""}
          onClick={() => setState((s) => ({ ...s, xray: !s.xray }))}
          title={
            isPl
              ? "Prześwietlenie X-Ray: Otaczające warstwy stają się półprzezroczyste po wybraniu struktury [X]"
              : "X-Ray Ghosting: Surrounding layers become translucent when a structure is selected [X]"
          }
        >
          <Eye size={16} />
          <span>X-Ray</span>
          <kbd>X</kbd>
        </Button>
        <Button
          variant="ghost"
          className={panel === "search" ? "active" : ""}
          onClick={() => openPanel("search")}
          aria-label={t.atlas.findStructureAria}
        >
          <Search size={18} />
          <span>{t.atlas.findStructure}</span>
          <kbd>/</kbd>
        </Button>
        {!embedded && (
          <Link href="/theory" className="atlas-theory-link focus-ring">
            <BookOpen size={18} />
            <span>{t.nav.textbook}</span>
          </Link>
        )}
        <Button
          variant="ghost"
          className="atlas-icon-button"
          aria-label={t.atlas.about}
          onClick={() => {
            setDetails(false);
            setPanel(null);
            setAbout(true);
          }}
        >
          <Info size={18} />
        </Button>
        {onExit && (
          <Button
            variant="ghost"
            className="atlas-icon-button"
            aria-label={t.atlas.close}
            onClick={onExit}
          >
            <X size={18} />
          </Button>
        )}
      </nav>

      {/* Active Dissection / Peeled Layers Floating Banner */}
      {(peeledList.length > 0 || state.mode === "peel") && (
        <div className="atlas-peel-banner atlas-glass" role="status">
          <Scissors size={14} className="atlas-peel-banner__icon" />
          <span>
            {state.mode === "peel"
              ? isPl
                ? `Tryb Odsłaniania aktywny — kliknij mięsień, aby odsłonić głębiej (${peeledList.length})`
                : `Peel Mode active — click any muscle to reveal deeper layers (${peeledList.length})`
              : isPl
                ? `Odsłonięto warstw: ${peeledList.length}`
                : `Peeled layers: ${peeledList.length}`}
          </span>
          {peeledList.length > 0 && (
            <div className="atlas-peel-banner__actions">
              <button
                type="button"
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    peeled: (s.peeled ?? []).slice(0, -1),
                  }))
                }
                title={isPl ? "Cofnij ostatnie odsłonięcie" : "Undo last peel"}
              >
                <Undo2 size={13} />
                <span>{isPl ? "Cofnij" : "Undo"}</span>
              </button>
              <button
                type="button"
                onClick={() => setState((s) => ({ ...s, peeled: [] }))}
              >
                {isPl ? "Przywróć wszystkie" : "Restore all"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Quick Action Bar for Selected Structure (Always accessible on Mobile & Embedded) */}
      {selectedParts.length > 0 && chosen && (
        <div className="atlas-selection-bar atlas-glass">
          <div className="atlas-selection-bar__info">
            <span
              className="atlas-system-dot"
              style={{ background: system?.color }}
            />
            <strong className="atlas-selection-bar__name">
              {translateAnatomyName(chosen.name, locale)}
            </strong>
          </div>
          <div className="atlas-selection-bar__actions">
            <button
              type="button"
              className="atlas-selection-chip"
              onClick={() =>
                setState((s) => ({
                  ...s,
                  isolate: false,
                  focusTrigger: (s.focusTrigger ?? 0) + 1,
                }))
              }
              title={isPl ? "Zbliż kamerę do tego miejsca" : "Zoom camera here"}
            >
              <ZoomIn size={13} />
              <span>{isPl ? "Zbliż" : "Zoom"}</span>
            </button>
            <button
              type="button"
              className="atlas-selection-chip highlight"
              onClick={peelSelectedAndRevealDeeper}
              title={
                isPl
                  ? "Ukryj ten element i odsłoń warstwę leżącą bezpośrednio pod nim"
                  : "Peel this structure away to reveal the layer directly underneath"
              }
            >
              <Scissors size={13} />
              <span>{isPl ? "Odsłoń głębiej" : "Peel deeper"}</span>
            </button>
            <button
              type="button"
              className="atlas-selection-chip"
              onClick={peelOverlyingAroundSelected}
              title={
                isPl
                  ? "Odsłoń powierzchowne warstwy zakrywające okolicę tej struktury"
                  : "Peel superficial layers covering this structure"
              }
            >
              <Sparkles size={13} />
              <span>{isPl ? "Odsłoń okolicę" : "Expose area"}</span>
            </button>
            <button
              type="button"
              className={`atlas-selection-chip ${state.xray ? "active" : ""}`}
              onClick={() => setState((s) => ({ ...s, xray: !s.xray, isolate: false }))}
              title={
                isPl
                  ? "Prześwietl ciało (X-Ray) wokół wybranej struktury"
                  : "X-Ray ghost surrounding structures"
              }
            >
              <Eye size={13} />
              <span>X-Ray</span>
            </button>
            <button
              type="button"
              className={`atlas-selection-chip ${state.isolate ? "active" : ""}`}
              onClick={() =>
                setState((s) => ({ ...s, isolate: !s.isolate, explode: 0 }))
              }
            >
              <Focus size={13} />
              <span>{state.isolate ? (isPl ? "Całość" : "Context") : (isPl ? "Izoluj" : "Isolate")}</span>
            </button>
          </div>
        </div>
      )}

      <section
        className={`atlas-layers-panel atlas-glass ${panel === "layers" ? "mobile-open" : ""}`}
        aria-label={t.atlas.layersLabel}
      >
        <div className="atlas-panel-heading">
          <span>{t.atlas.systems}</span>
          <Button
            variant="ghost"
            className="atlas-mobile-only atlas-icon-button"
            onClick={() => setPanel(null)}
            aria-label={t.atlas.closeSystems}
          >
            <X size={18} />
          </Button>
          <Badge variant="secondary" className="atlas-desktop-only atlas-small-number">
            {activeSystems.length}
          </Badge>
        </div>
        <div className="atlas-layer-presets">
          <Button
            variant="ghost"
            aria-pressed={activeSystems.every((x) => state.visible.includes(x.id))}
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                peeled: [],
                peelDepth: 0,
                visible: activeSystems.map((x) => x.id),
              }))
            }
          >
            {t.atlas.presetAll}
          </Button>
          <Button
            variant="ghost"
            aria-pressed={
              state.visible.length === MUSCLE_SKELETON_PRESET.length &&
              MUSCLE_SKELETON_PRESET.every((id) => state.visible.includes(id))
            }
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                visible: [...MUSCLE_SKELETON_PRESET],
              }))
            }
          >
            {isPl ? "Mięśnie" : "Muscles"}
          </Button>
          <Button
            variant="ghost"
            aria-pressed={state.visible.length === 1 && state.visible[0] === "skeletal"}
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                visible: ["skeletal"],
              }))
            }
          >
            {t.atlas.presetSkeleton}
          </Button>
          <Button
            variant="ghost"
            aria-pressed={
              state.visible.length === ORGAN_PRESET.length &&
              ORGAN_PRESET.every((id) => state.visible.includes(id))
            }
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                visible: [...ORGAN_PRESET],
              }))
            }
          >
            {t.atlas.presetOrgans}
          </Button>
          <Button
            variant="ghost"
            aria-pressed={
              state.visible.length === NEUROVASCULAR_PRESET.length &&
              NEUROVASCULAR_PRESET.every((id) => state.visible.includes(id))
            }
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                visible: [...NEUROVASCULAR_PRESET],
              }))
            }
          >
            {isPl ? "Naczynia/Nerwy" : "Vessels/Nerves"}
          </Button>
        </div>
        <div className="atlas-system-list">
          {activeSystems.map((s) => {
            const label = t.systems[s.id];
            return (
              <div
                className={`atlas-system-row ${state.visible.includes(s.id) ? "enabled" : ""}`}
                key={s.id}
              >
                <Button
                  variant="ghost"
                  className="atlas-system-name"
                  title={`${t.atlas.showOnly} ${label.toLowerCase()}`}
                  onClick={() =>
                    setState((v) => ({
                      ...v,
                      visible: [s.id],
                      isolate: false,
                      selected: [],
                    }))
                  }
                >
                  <span className="atlas-system-dot" style={{ background: s.color }} />
                  {label}
                  <span className="atlas-system-count">{counts[s.id]}</span>
                </Button>
                <Switch
                  checked={state.visible.includes(s.id)}
                  onCheckedChange={() => toggle(s.id)}
                  aria-label={`${t.atlas.show} ${label.toLowerCase()}`}
                />
              </div>
            );
          })}
        </div>
        <div className="atlas-panel-foot">
          <span>
            {n(visibleCount)} {t.atlas.visibleStructures}
          </span>
          <Button
            variant="ghost"
            onClick={() =>
              setState((s) => ({ ...s, visible: [], selected: [], isolate: false }))
            }
          >
            {t.atlas.hideAll}
          </Button>
        </div>
      </section>

      {panel === "search" && (
        <section className="atlas-search-panel atlas-glass" aria-label={t.atlas.findLabel}>
          <div className="atlas-panel-heading">
            <span>{t.atlas.searchPanelTitle}</span>
            <Button
              variant="ghost"
              className="atlas-icon-button"
              onClick={() => setPanel(null)}
              aria-label={t.atlas.closeSearch}
            >
              <X size={18} />
            </Button>
          </div>
          <p className="atlas-search-note">
            {query ? t.atlas.searchHintTyping : t.atlas.searchHintIdle}
          </p>
          <Combobox<AtlasConcept>
            items={results}
            value={null}
            onValueChange={(value) => {
              if (value) choose(value);
            }}
            inputValue={query}
            onInputValueChange={setQuery}
            itemToStringLabel={(c) => translateAnatomyName(c.name, locale)}
            filter={null}
            open
            onOpenChange={(isOpen) => {
              if (!isOpen) setPanel(null);
            }}
          >
            <ComboboxInput
              autoFocus
              placeholder={t.atlas.searchPlaceholder}
              aria-label={t.atlas.searchAria}
              showTrigger={false}
            />
            <ComboboxContent className="atlas-search-results">
              <ComboboxEmpty>{t.atlas.searchEmpty}</ComboboxEmpty>
              <ComboboxList>
                {(c: AtlasConcept) => (
                  <ComboboxItem key={c.id} value={c}>
                    <span className="atlas-search-result-name">
                      {translateAnatomyName(c.name, locale)}
                    </span>
                    <span className="atlas-small-number">
                      {n(c.elements.length)} {plural(c.elements.length)}
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </section>
      )}

      <nav className="atlas-view-controls atlas-glass" aria-label={t.atlas.cameraControls}>
        {(["three-quarter", "front", "side", "back"] as View[]).map((v, i) => (
          <Button
            variant="ghost"
            key={v}
            className={state.view === v ? "active" : ""}
            aria-pressed={state.view === v}
            disabled={state.explode > 0.8 && v !== "front"}
            onClick={() =>
              setState((s) => ({ ...s, view: v, reset: s.reset + 1, rotate: false }))
            }
            title={viewTitles[i]}
            aria-label={viewTitles[i]}
          >
            <span>{t.atlas.viewLetters[i]}</span>
          </Button>
        ))}
        <i />
        <Button
          variant="ghost"
          aria-label={isPl ? "Przybliż (+)" : "Zoom in (+)"}
          title={isPl ? "Przybliż widok" : "Zoom in"}
          onClick={() =>
            setState((s) => ({
              ...s,
              zoomStep: 1,
              zoomTrigger: (s.zoomTrigger ?? 0) + 1,
              rotate: false,
            }))
          }
        >
          <ZoomIn size={17} />
        </Button>
        <Button
          variant="ghost"
          aria-label={isPl ? "Oddal (-)" : "Zoom out (-)"}
          title={isPl ? "Oddal widok" : "Zoom out"}
          onClick={() =>
            setState((s) => ({
              ...s,
              zoomStep: -1,
              zoomTrigger: (s.zoomTrigger ?? 0) + 1,
              rotate: false,
            }))
          }
        >
          <ZoomOut size={17} />
        </Button>
        <Button
          variant="ghost"
          aria-label={isPl ? "Obróć w lewo" : "Orbit left"}
          title={isPl ? "Obróć o 35° w lewo" : "Orbit 35° left"}
          disabled={state.explode >= 0.8}
          onClick={() =>
            setState((s) => ({
              ...s,
              orbitAzimuth: -0.6,
              orbitPolar: 0,
              orbitTrigger: (s.orbitTrigger ?? 0) + 1,
              rotate: false,
            }))
          }
        >
          <ChevronLeft size={18} />
        </Button>
        <Button
          variant="ghost"
          aria-label={isPl ? "Obróć w prawo" : "Orbit right"}
          title={isPl ? "Obróć o 35° w prawo" : "Orbit 35° right"}
          disabled={state.explode >= 0.8}
          onClick={() =>
            setState((s) => ({
              ...s,
              orbitAzimuth: 0.6,
              orbitPolar: 0,
              orbitTrigger: (s.orbitTrigger ?? 0) + 1,
              rotate: false,
            }))
          }
        >
          <ChevronRight size={18} />
        </Button>
        <i />
        <Button
          variant="ghost"
          className={state.mode === "peel" ? "active" : ""}
          aria-pressed={state.mode === "peel"}
          title={
            isPl
              ? "Tryb Sekcji: Kliknięcie w mięsień odsłania głębszą warstwę"
              : "Peel Mode: Clicking a muscle peels it away"
          }
          onClick={() =>
            setState((s) => ({
              ...s,
              mode: s.mode === "peel" ? "inspect" : "peel",
            }))
          }
        >
          <Scissors size={16} />
        </Button>
        <Button
          variant="ghost"
          className={state.xray ? "active" : ""}
          aria-pressed={state.xray}
          title={isPl ? "Prześwietlenie (X-Ray)" : "X-Ray Ghost Mode"}
          onClick={() => setState((s) => ({ ...s, xray: !s.xray }))}
        >
          <Eye size={16} />
        </Button>
        <Button
          variant="ghost"
          disabled={state.explode >= 0.4}
          aria-label={state.rotate ? t.atlas.pauseRotation : t.atlas.rotateModel}
          title={t.atlas.autoRotate}
          className={state.rotate ? "active" : ""}
          onClick={() => setState((s) => ({ ...s, rotate: !s.rotate }))}
        >
          {state.rotate ? <Pause size={17} /> : <RotateCw size={18} />}
        </Button>
        <Button
          variant="ghost"
          aria-label={t.atlas.resetView}
          title={t.atlas.reset}
          onClick={reset}
        >
          <RotateCcw size={17} />
        </Button>
      </nav>

      <div className="atlas-scene-caption">
        <span className="atlas-caption-line" />
        <span>
          {state.isolate
            ? chosen
              ? translateAnatomyName(chosen.name, locale)
              : t.atlas.captionSelected
            : state.explode > 0.95
              ? t.atlas.captionInventory
              : state.explode > 0.05
                ? t.atlas.captionSeparated
                : (state.peelDepth ?? 0) > 0.05
                  ? isPl
                    ? `Odsłanianie warstw: ${peelDepthPct}% głębokości`
                    : `Layer dissection: ${peelDepthPct}% depth`
                  : t.atlas.captionAdult}
        </span>
        <span className="atlas-caption-line" />
      </div>

      <div className="atlas-bottom-dock atlas-glass">
        <Button
          variant="ghost"
          className="atlas-mobile-only atlas-dock-layers"
          onClick={() => openPanel("layers")}
          aria-label={t.atlas.openLayers}
        >
          <Layers3 size={20} />
          <span>{t.atlas.systems}</span>
        </Button>
        <div className="atlas-explode-control">
          <div className="atlas-explode-label">
            <div className="atlas-slider-tabs">
              <button
                type="button"
                className={`atlas-slider-tab ${sliderMode === "peel" ? "active" : ""}`}
                onClick={() => setSliderMode("peel")}
              >
                <Layers size={12} />
                <span>{isPl ? "Głębokość warstw" : "Layer Depth"}</span>
              </button>
              <button
                type="button"
                className={`atlas-slider-tab ${sliderMode === "explode" ? "active" : ""}`}
                onClick={() => setSliderMode("explode")}
              >
                <Layers3 size={12} />
                <span>{t.atlas.explode}</span>
              </button>
            </div>
            <output>
              {sliderMode === "peel" ? peelDepthPct : explodePct}
              <span>%</span>
            </output>
          </div>
          {sliderMode === "peel" ? (
            <>
              <Slider
                aria-label={isPl ? "Głębokość odsłaniania warstw" : "Layer peel depth"}
                min={0}
                max={100}
                step={1}
                value={[peelDepthPct]}
                onValueChange={(v) => {
                  const next = Array.isArray(v) ? v[0] : v;
                  setState((s) => ({
                    ...s,
                    peelDepth: next / 100,
                    isolate: false,
                  }));
                }}
              />
              <div className="atlas-slider-endpoints">
                <span>{isPl ? "Warstwy powierzchowne" : "Superficial"}</span>
                <span>{isPl ? "Mięśnie głębokie / Narządy" : "Deep / Organs"}</span>
                <span>{isPl ? "Szkielet" : "Skeleton"}</span>
              </div>
            </>
          ) : (
            <>
              <Slider
                aria-label={t.atlas.explode}
                min={0}
                max={100}
                step={1}
                value={[explodePct]}
                onValueChange={(v) => {
                  const next = Array.isArray(v) ? v[0] : v;
                  setState((s) => ({
                    ...s,
                    explode: next / 100,
                    view: next > 80 ? "front" : s.view,
                    rotate: false,
                  }));
                }}
              />
              <div className="atlas-slider-endpoints">
                <span>{t.atlas.assembled}</span>
                <span>{t.atlas.everyPiece}</span>
              </div>
            </>
          )}
        </div>
        <Button
          variant="ghost"
          className="atlas-dock-reset"
          onClick={reset}
          aria-label={t.atlas.resetDock}
        >
          <RotateCcw size={18} />
          <span>{t.atlas.reset}</span>
        </Button>
      </div>

      <footer className="atlas-studio-footer">
        <span>
          {state.explode > 0.8 ? t.atlas.dragPan : t.atlas.dragOrbit} <b>·</b>{" "}
          {t.atlas.pinchZoom} <b>·</b>{" "}
          {isPl
            ? "Kliknij strukturę lub użyj Trybu Odsłaniania [P], by odsłaniać mięśnie warstwami"
            : t.atlas.tapInspect}
        </span>
        <Button
          variant="ghost"
          onClick={() => {
            setDetails(false);
            setPanel(null);
            setAbout(true);
          }}
        >
          {t.atlas.sourceCredits} <ArrowUpRight size={12} />
        </Button>
      </footer>

      {progress < 100 && !error && (
        <div className="atlas-loading atlas-glass" role="status">
          <Activity size={18} />
          <div>
            <strong>{t.atlas.preparing}</strong>
            <span>
              {progress}% · {t.atlas.loadingPieces}{" "}
              {n(atlas?.parts.length ?? 2234)} {t.atlas.structures}
            </span>
            <div className="atlas-loading-track">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="atlas-loading atlas-glass error" role="alert">
          <p>{error}</p>
          <Button variant="ghost" onClick={() => location.reload()}>
            {t.atlas.reload}
          </Button>
        </div>
      )}

      <Sheet
        open={details && selectedParts.length > 0}
        modal={false}
        disablePointerDismissal
        onOpenChange={setDetails}
      >
        <SheetContent
          initialFocus={detailTitle}
          className={`atlas-detail-sheet atlas-glass ${state.isolate ? "is-isolated" : ""}`}
          showCloseButton={true}
        >
          <div className="atlas-detail-header">
            <div className="atlas-detail-accent" style={{ background: system?.color }} />
            <div className="atlas-eyebrow">
              {system ? t.systems[system.id] : t.atlas.detailFallback}
            </div>
            <SheetTitle ref={detailTitle} tabIndex={-1} className="atlas-structure-title">
              {chosen ? translateAnatomyName(chosen.name, locale) : ""}
            </SheetTitle>
          </div>
          <div className="atlas-detail-scroll" key={`${chosen?.id}-${state.isolate}`}>
            <SheetDescription className="atlas-structure-description">
              {chosen && selected
                ? explanation(chosen.name, selected.system, locale)
                : ""}
            </SheetDescription>
            {chosen && !hasOrganExplanation(chosen.name, locale) && (
              <span className="atlas-context-note">{t.atlas.systemOverviewNote}</span>
            )}
            <div className="atlas-structure-meta">
              <span>
                {t.atlas.atlasReference}
                <strong>{chosen?.id}</strong>
              </span>
              <span>
                {t.atlas.selectedPieces}
                <strong>{n(state.selected.length)}</strong>
              </span>
            </div>
            {selectedParts.length > 1 && (
              <div className="atlas-member-list">
                <h3>{t.atlas.includedStructures}</h3>
                {selectedParts.slice(0, 50).map((p) => (
                  <Button variant="ghost" key={p.id} onClick={() => choosePart(p.id)}>
                    <span>{translateAnatomyName(p.name, locale)}</span>
                    <ChevronRight size={14} />
                  </Button>
                ))}
                {selectedParts.length > 50 && (
                  <p>
                    {t.atlas.andMore.replace(
                      "{count}",
                      n(selectedParts.length - 50),
                    )}
                  </p>
                )}
              </div>
            )}
            <a
              className="atlas-source-link"
              href="https://lifesciencedb.jp/bp3d/"
              target="_blank"
              rel="noreferrer"
            >
              {t.atlas.viewSource} <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="atlas-detail-actions">
            <div className="atlas-detail-dissect-grid">
              <Button
                variant="outline"
                className="atlas-dissect-btn"
                onClick={peelSelectedAndRevealDeeper}
              >
                <Scissors size={15} />
                <span>{isPl ? "Ukryj i odsłoń pod spodem" : "Peel & reveal deeper"}</span>
              </Button>
              <Button
                variant="outline"
                className="atlas-dissect-btn"
                onClick={peelOverlyingAroundSelected}
              >
                <Sparkles size={15} />
                <span>{isPl ? "Odsłoń warstwy wokół" : "Expose surrounding"}</span>
              </Button>
            </div>
            <div className="atlas-detail-dissect-grid">
              <Button
                variant="outline"
                className={`atlas-dissect-btn ${state.xray ? "active" : ""}`}
                onClick={() =>
                  setState((s) => ({ ...s, xray: !s.xray, isolate: false }))
                }
              >
                <Eye size={15} />
                <span>{isPl ? "Prześwietl ciało (X-Ray)" : "X-Ray Context"}</span>
              </Button>
              <Button
                variant="outline"
                className="atlas-dissect-btn"
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    isolate: false,
                    focusTrigger: (s.focusTrigger ?? 0) + 1,
                  }))
                }
              >
                <ZoomIn size={15} />
                <span>{isPl ? "Przybliż tutaj" : "Zoom to structure"}</span>
              </Button>
            </div>
            <Button
              className={`atlas-primary-action ${state.isolate ? "active" : ""}`}
              onClick={() => setState((s) => ({ ...s, isolate: !s.isolate, explode: 0 }))}
            >
              <Focus size={18} />
              {state.isolate ? t.atlas.showSurrounding : t.atlas.isolate}
              <ChevronRight size={16} />
            </Button>
            <Button
              variant="ghost"
              className="atlas-secondary-action"
              onClick={() => {
                setState((s) => ({ ...s, selected: [], isolate: false }));
                setDetails(false);
              }}
            >
              {t.atlas.clearSelection}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={about} onOpenChange={setAbout}>
        <SheetContent className="atlas-about-sheet atlas-glass">
          <div className="atlas-eyebrow">SOURCE &amp; SCOPE</div>
          <SheetTitle className="atlas-structure-title">A body, revealed.</SheetTitle>
          <SheetDescription>
            Explore the adult male reference anatomy from BodyParts3D.
          </SheetDescription>
          <div className="atlas-about-copy" lang="en">
            <p>
              <strong>Male · BodyParts3D</strong>
              <br />
              2,234 individual meshes and 3,432 named concepts from an adult male
              reference anatomy.
            </p>
            <p>
              This reference does not contain every human structure or variation.
              Named concepts can contain multiple pieces; each source mesh is
              rendered once.
            </p>
            <p>
              Colors and system groupings are designed for exploration. The geometry
              is simplified for the web, and short explanations provide general
              educational context. This is an anatomical reference,{" "}
              <strong>not a diagnostic or clinical tool</strong>.
            </p>
            <h3>Source</h3>
            <p>
              BodyParts3D, © The Database Center for Life Science, licensed under
              Creative Commons Attribution 4.0 International (CC BY 4.0).
            </p>
            <a
              href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html"
              target="_blank"
              rel="noreferrer"
            >
              View license terms <ArrowUpRight size={12} />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
