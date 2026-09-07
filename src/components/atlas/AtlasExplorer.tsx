"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Focus,
  Info,
  Layers3,
  Pause,
  RotateCcw,
  RotateCw,
  Search,
  X,
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
  SYSTEMS,
  explanation,
  hasOrganExplanation,
  type SceneState,
  type View,
} from "./anatomy";

const initial: SceneState = {
  explode: 0,
  visible: DEFAULT_VISIBLE,
  selected: [],
  isolate: false,
  view: "three-quarter",
  rotate: false,
  reset: 0,
};

/** Organs offered before the visitor has typed. Dataset names are English. */
const SUGGESTED = [
  "heart",
  "brain",
  "liver",
  "stomach",
  "spleen",
  "pancreas",
  "urinary bladder",
  "trachea",
];

const ORGAN_PRESET: SystemId[] = [
  "cardiac",
  "respiratory",
  "digestive",
  "urinary",
  "endocrine",
  "reproductive",
];

export interface AtlasExplorerProps {
  /** Leaves the immersive view and returns to the landing poster. */
  onExit?: () => void;
}

export default function AtlasExplorer({ onExit }: AtlasExplorerProps) {
  const detailTitle = useRef<HTMLHeadingElement>(null);
  const { dark } = useTheme();
  const { t, n, plural, locale } = useI18n();

  const [atlas, setAtlas] = useState<Atlas | null>(null);
  const [state, setState] = useState(initial);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [panel, setPanel] = useState<"layers" | "search" | null>(null);
  const [details, setDetails] = useState(false);
  const [about, setAbout] = useState(false);
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState<AtlasConcept | null>(null);

  // Re-reads on locale change so a language switch relabels the error too.
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
        e.key === "/" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setPanel("search");
        setDetails(false);
      }
      if (e.key === "Escape" && onExit) onExit();
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
  const visibleCount =
    atlas?.parts.filter((p) =>
      state.isolate
        ? state.selected.includes(p.id)
        : state.visible.includes(p.system) || state.selected.includes(p.id),
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
          // Matches either language, so "watroba" and "liver" both find it.
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
    setState((s) => ({ ...s, selected: c.elements, isolate: false, rotate: false }));
    setDetails(true);
    setPanel(null);
  };

  const choosePart = (id: string) => {
    const p = parts.get(id);
    if (!p) return;
    setChosen({ id: p.conceptId, name: p.name, elements: [id] });
    setState((s) => ({ ...s, selected: [id], isolate: false, rotate: false }));
    setDetails(true);
    setPanel(null);
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

  const reset = () => {
    setState((s) => ({ ...initial, visible: DEFAULT_VISIBLE, reset: s.reset + 1 }));
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

  return (
    <div className="atlas-studio">
      {atlas && (
        <AnatomyScene
          atlas={atlas}
          dark={dark}
          labels={sceneLabels}
          state={{ ...state, inspectorOpen: details && selectedParts.length > 0 }}
          onSelect={choosePart}
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
            3D
          </Badge>
        </h1>
        <div className="atlas-identity-meta">
          {atlas ? n(atlas.parts.length) : n(2234)} {t.atlas.structures}{" "}
          <span>·</span> BodyParts3D
        </div>
      </header>

      <nav className="atlas-top-actions" aria-label={t.atlas.panelsLabel}>
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
        <Link href="/theory" className="atlas-theory-link focus-ring">
          <BookOpen size={18} />
          <span>{t.nav.textbook}</span>
        </Link>
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
                visible: activeSystems.map((x) => x.id),
              }))
            }
          >
            {t.atlas.presetAll}
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
          {/* Above the field: the results popup floats over anything below it. */}
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
            ? (chosen ? translateAnatomyName(chosen.name, locale) : t.atlas.captionSelected)
            : state.explode > 0.95
              ? t.atlas.captionInventory
              : state.explode > 0.05
                ? t.atlas.captionSeparated
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
            <label id="atlas-explode-label">{t.atlas.explode}</label>
            <output>
              {Math.round(state.explode * 100)}
              <span>%</span>
            </output>
          </div>
          <Slider
            aria-labelledby="atlas-explode-label"
            min={0}
            max={100}
            step={1}
            value={[state.explode * 100]}
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
          {t.atlas.pinchZoom} <b>·</b> {t.atlas.tapInspect}
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

      {/*
        Source and licence notice. Kept in English in every locale: it reproduces
        the BodyParts3D attribution, and a licence is safest quoted as published
        rather than paraphrased into six languages. See ATTRIBUTION.md.
      */}
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
              Dataset license <ArrowUpRight size={14} />
            </a>
            <a
              href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html"
              target="_blank"
              rel="noreferrer"
            >
              Original geometry &amp; metadata <ArrowUpRight size={14} />
            </a>
            <a
              href="https://academic.oup.com/nar/article/37/suppl_1/D782/1000752"
              target="_blank"
              rel="noreferrer"
            >
              Read the source publication <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/ashemag/human-atlas"
              target="_blank"
              rel="noreferrer"
            >
              Atlas viewer engine (MIT) <ArrowUpRight size={14} />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
