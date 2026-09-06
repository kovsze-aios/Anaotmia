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
  EXPLANATIONS,
  explanation,
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

/** Organs offered before the visitor has typed anything. Dataset names are English. */
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

export interface AtlasExplorerProps {
  /** Leaves the immersive view and returns to the landing poster. */
  onExit?: () => void;
}

export default function AtlasExplorer({ onExit }: AtlasExplorerProps) {
  const detailTitle = useRef<HTMLHeadingElement>(null);
  const { dark } = useTheme();

  const [atlas, setAtlas] = useState<Atlas | null>(null);
  const [state, setState] = useState(initial);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [panel, setPanel] = useState<"layers" | "search" | null>(null);
  const [details, setDetails] = useState(false);
  const [about, setAbout] = useState(false);
  const [query, setQuery] = useState("");
  const [chosen, setChosen] = useState<AtlasConcept | null>(null);

  useEffect(() => {
    const abort = new AbortController();
    setProgress(0);
    setError("");
    getAtlas({ signal: abort.signal })
      .then(setAtlas)
      .catch((e: Error) => {
        if (e.name !== "AbortError") setError(e.message);
      });
    return () => abort.abort();
  }, []);

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
          c.name.toLowerCase().includes(term) ||
          c.id.toLowerCase().includes(term),
      )
      .sort((a, b) => a.name.length - b.name.length)
      .slice(0, 80);
  }, [atlas, query]);

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

  return (
    <div className="atlas-studio">
      {atlas && (
        <AnatomyScene
          atlas={atlas}
          dark={dark}
          state={{ ...state, inspectorOpen: details && selectedParts.length > 0 }}
          onSelect={choosePart}
          onProgress={(n) => {
            setProgress(n);
            if (n === 100) setError("");
          }}
          onError={setError}
        />
      )}
      <div className="atlas-vignette" />

      <header className="atlas-identity">
        <div className="atlas-eyebrow">
          <span className="atlas-status-dot" /> INTERAKTYWNA ANATOMIA
        </div>
        <h1>
          Atlas 3D
          <Badge variant="outline" className="atlas-edition">
            3D
          </Badge>
        </h1>
        <div className="atlas-identity-meta">
          {atlas ? atlas.parts.length.toLocaleString("pl-PL") : "2 234"} struktur{" "}
          <span>·</span> BodyParts3D
        </div>
      </header>

      <nav className="atlas-top-actions" aria-label="Panele eksploratora">
        <Button
          variant="ghost"
          className={panel === "search" ? "active" : ""}
          onClick={() => openPanel("search")}
          aria-label="Szukaj struktury anatomicznej"
        >
          <Search size={18} />
          <span>Znajdź strukturę</span>
          <kbd>/</kbd>
        </Button>
        <Link href="/theory" className="atlas-theory-link focus-ring">
          <BookOpen size={18} />
          <span>Podręcznik</span>
        </Link>
        <Button
          variant="ghost"
          className="atlas-icon-button"
          aria-label="O tym atlasie"
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
            aria-label="Zamknij atlas 3D"
            onClick={onExit}
          >
            <X size={18} />
          </Button>
        )}
      </nav>

      <section
        className={`atlas-layers-panel atlas-glass ${panel === "layers" ? "mobile-open" : ""}`}
        aria-label="Warstwy anatomiczne"
      >
        <div className="atlas-panel-heading">
          <span>Układy</span>
          <Button
            variant="ghost"
            className="atlas-mobile-only atlas-icon-button"
            onClick={() => setPanel(null)}
            aria-label="Zamknij listę układów"
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
            Wszystko
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
            Szkielet
          </Button>
          <Button
            variant="ghost"
            aria-pressed={
              state.visible.length === 6 &&
              (
                [
                  "cardiac",
                  "respiratory",
                  "digestive",
                  "urinary",
                  "endocrine",
                  "reproductive",
                ] as SystemId[]
              ).every((id) => state.visible.includes(id))
            }
            onClick={() =>
              setState((s) => ({
                ...s,
                selected: [],
                isolate: false,
                visible: [
                  "cardiac",
                  "respiratory",
                  "digestive",
                  "urinary",
                  "endocrine",
                  "reproductive",
                ],
              }))
            }
          >
            Narządy
          </Button>
        </div>
        <div className="atlas-system-list">
          {activeSystems.map((s) => (
            <div
              className={`atlas-system-row ${state.visible.includes(s.id) ? "enabled" : ""}`}
              key={s.id}
            >
              <Button
                variant="ghost"
                className="atlas-system-name"
                title={`Pokaż tylko: ${s.name.toLowerCase()}`}
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
                {s.name}
                <span className="atlas-system-count">{counts[s.id]}</span>
              </Button>
              <Switch
                checked={state.visible.includes(s.id)}
                onCheckedChange={() => toggle(s.id)}
                aria-label={`Pokaż: ${s.name.toLowerCase()}`}
              />
            </div>
          ))}
        </div>
        <div className="atlas-panel-foot">
          <span>{visibleCount.toLocaleString("pl-PL")} widocznych struktur</span>
          <Button
            variant="ghost"
            onClick={() =>
              setState((s) => ({ ...s, visible: [], selected: [], isolate: false }))
            }
          >
            Ukryj wszystko
          </Button>
        </div>
      </section>

      {panel === "search" && (
        <section className="atlas-search-panel atlas-glass" aria-label="Znajdź strukturę">
          <div className="atlas-panel-heading">
            <span>Znajdź strukturę</span>
            <Button
              variant="ghost"
              className="atlas-icon-button"
              onClick={() => setPanel(null)}
              aria-label="Zamknij wyszukiwarkę"
            >
              <X size={18} />
            </Button>
          </div>
          {/* Above the field: the results popup floats over anything below it. */}
          <p className="atlas-search-note">
            {query
              ? "Pokazujemy do 80 dopasowań. Doprecyzuj zapytanie, aby znaleźć mniejsze struktury."
              : "Nazwy struktur pochodzą z bazy BodyParts3D i są w języku angielskim."}
          </p>
          <Combobox<AtlasConcept>
            items={results}
            value={null}
            onValueChange={(value) => {
              if (value) choose(value);
            }}
            inputValue={query}
            onInputValueChange={setQuery}
            itemToStringLabel={(c) => c.name}
            filter={null}
            open
            onOpenChange={(open) => {
              if (!open) setPanel(null);
            }}
          >
            <ComboboxInput
              autoFocus
              placeholder="Heart, femur, cranial nerve…"
              aria-label="Szukaj nazwanych struktur anatomicznych"
              showTrigger={false}
            />
            <ComboboxContent className="atlas-search-results">
              <ComboboxEmpty>Brak struktur pasujących do zapytania.</ComboboxEmpty>
              <ComboboxList>
                {(c: AtlasConcept) => (
                  <ComboboxItem key={c.id} value={c}>
                    <span className="atlas-search-result-name">{c.name}</span>
                    <span className="atlas-small-number">
                      {c.elements.length}{" "}
                      {c.elements.length === 1 ? "element" : "elementów"}
                    </span>
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </section>
      )}

      <nav className="atlas-view-controls atlas-glass" aria-label="Sterowanie kamerą">
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
            title={["Widok 3/4", "Z przodu", "Z boku", "Z tyłu"][i]}
            aria-label={["Widok 3/4", "Z przodu", "Z boku", "Z tyłu"][i]}
          >
            <span>{["¾", "P", "B", "T"][i]}</span>
          </Button>
        ))}
        <i />
        <Button
          variant="ghost"
          disabled={state.explode >= 0.4}
          aria-label={state.rotate ? "Zatrzymaj obrót" : "Obracaj model"}
          title="Automatyczny obrót"
          className={state.rotate ? "active" : ""}
          onClick={() => setState((s) => ({ ...s, rotate: !s.rotate }))}
        >
          {state.rotate ? <Pause size={17} /> : <RotateCw size={18} />}
        </Button>
        <Button
          variant="ghost"
          aria-label="Zresetuj widok i warstwy"
          title="Reset"
          onClick={reset}
        >
          <RotateCcw size={17} />
        </Button>
      </nav>

      <div className="atlas-scene-caption">
        <span className="atlas-caption-line" />
        <span>
          {state.isolate
            ? (chosen?.name ?? "WYBRANA STRUKTURA")
            : state.explode > 0.95
              ? "INWENTARZ ANATOMICZNY"
              : state.explode > 0.05
                ? "STRUKTURY ROZDZIELONE"
                : "DOROSŁY CZŁOWIEK · MĘŻCZYZNA"}
        </span>
        <span className="atlas-caption-line" />
      </div>

      <div className="atlas-bottom-dock atlas-glass">
        <Button
          variant="ghost"
          className="atlas-mobile-only atlas-dock-layers"
          onClick={() => openPanel("layers")}
          aria-label="Otwórz warstwy układów"
        >
          <Layers3 size={20} />
          <span>Układy</span>
        </Button>
        <div className="atlas-explode-control">
          <div className="atlas-explode-label">
            <label id="atlas-explode-label">Rozłóż anatomię</label>
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
            <span>Złożone</span>
            <span>Każdy element</span>
          </div>
        </div>
        <Button
          variant="ghost"
          className="atlas-dock-reset"
          onClick={reset}
          aria-label="Złóż i zresetuj"
        >
          <RotateCcw size={18} />
          <span>Reset</span>
        </Button>
      </div>

      <footer className="atlas-studio-footer">
        <span>
          {state.explode > 0.8 ? "Przeciągnij, aby przesunąć" : "Przeciągnij, aby obracać"}{" "}
          <b>·</b> Szczypnij, aby przybliżyć <b>·</b> Dotknij, aby zbadać
        </span>
        <Button
          variant="ghost"
          onClick={() => {
            setDetails(false);
            setPanel(null);
            setAbout(true);
          }}
        >
          Źródło i licencja <ArrowUpRight size={12} />
        </Button>
      </footer>

      {progress < 100 && !error && (
        <div className="atlas-loading atlas-glass" role="status">
          <Activity size={18} />
          <div>
            <strong>Przygotowujemy anatomię</strong>
            <span>
              {progress}% · Wczytywanie{" "}
              {atlas?.parts.length.toLocaleString("pl-PL") ?? "2 234"} struktur
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
            Odśwież widok
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
            <div className="atlas-eyebrow">{system?.name ?? "ANATOMIA"}</div>
            <SheetTitle ref={detailTitle} tabIndex={-1} className="atlas-structure-title">
              {chosen?.name}
            </SheetTitle>
          </div>
          <div className="atlas-detail-scroll" key={`${chosen?.id}-${state.isolate}`}>
            <SheetDescription className="atlas-structure-description">
              {chosen && selected ? explanation(chosen.name, selected.system) : ""}
            </SheetDescription>
            {chosen && !EXPLANATIONS[chosen.name.toLowerCase()] && (
              <span className="atlas-context-note">
                Opis układu · struktura rozpoznana na podstawie danych źródłowych
              </span>
            )}
            <div className="atlas-structure-meta">
              <span>
                Identyfikator<strong>{chosen?.id}</strong>
              </span>
              <span>
                Wybrane elementy
                <strong>{state.selected.length.toLocaleString("pl-PL")}</strong>
              </span>
            </div>
            {selectedParts.length > 1 && (
              <div className="atlas-member-list">
                <h3>Struktury składowe</h3>
                {selectedParts.slice(0, 50).map((p) => (
                  <Button variant="ghost" key={p.id} onClick={() => choosePart(p.id)}>
                    <span>{p.name}</span>
                    <ChevronRight size={14} />
                  </Button>
                ))}
                {selectedParts.length > 50 && (
                  <p>I jeszcze {selectedParts.length - 50} modelowanych elementów.</p>
                )}
              </div>
            )}
            <a
              className="atlas-source-link"
              href="https://lifesciencedb.jp/bp3d/"
              target="_blank"
              rel="noreferrer"
            >
              Zobacz źródło anatomiczne <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="atlas-detail-actions">
            <Button
              className={`atlas-primary-action ${state.isolate ? "active" : ""}`}
              onClick={() => setState((s) => ({ ...s, isolate: !s.isolate, explode: 0 }))}
            >
              <Focus size={18} />
              {state.isolate ? "Pokaż otoczenie" : "Izoluj strukturę"}
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
              Wyczyść wybór
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={about} onOpenChange={setAbout}>
        <SheetContent className="atlas-about-sheet atlas-glass">
          <div className="atlas-eyebrow">ŹRÓDŁO I ZAKRES</div>
          <SheetTitle className="atlas-structure-title">Ciało, odsłonięte.</SheetTitle>
          <SheetDescription>
            Poznaj referencyjną anatomię dorosłego mężczyzny z bazy BodyParts3D.
          </SheetDescription>
          <div className="atlas-about-copy">
            <p>
              <strong>Mężczyzna · BodyParts3D</strong>
              <br />2 234 pojedynczych siatek i 3 432 nazwanych pojęć anatomicznych.
            </p>
            <p>
              Ta baza nie zawiera wszystkich struktur ani wariantów anatomicznych
              człowieka. Jedno pojęcie może obejmować wiele elementów; każda siatka
              źródłowa jest renderowana raz.
            </p>
            <p>
              Kolory i podział na układy dobrano na potrzeby eksploracji. Geometria
              została uproszczona na potrzeby sieci, a krótkie opisy mają charakter
              ogólnoedukacyjny. To materiał anatomiczny, <strong>nie narzędzie
              diagnostyczne ani kliniczne</strong>.
            </p>
            <h3>Źródło danych</h3>
            <p>
              BodyParts3D, © The Database Center for Life Science, na licencji
              Creative Commons Attribution 4.0 International (CC BY 4.0).
            </p>
            <a
              href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html"
              target="_blank"
              rel="noreferrer"
            >
              Licencja zbioru danych <ArrowUpRight size={14} />
            </a>
            <a
              href="https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html"
              target="_blank"
              rel="noreferrer"
            >
              Oryginalna geometria i metadane <ArrowUpRight size={14} />
            </a>
            <a
              href="https://academic.oup.com/nar/article/37/suppl_1/D782/1000752"
              target="_blank"
              rel="noreferrer"
            >
              Publikacja źródłowa <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/ashemag/human-atlas"
              target="_blank"
              rel="noreferrer"
            >
              Silnik atlasu (MIT) <ArrowUpRight size={14} />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
