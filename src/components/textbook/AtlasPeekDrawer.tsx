"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Maximize2, MapPin, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { getAnatomicalEntity } from "@/data/anatomy-entities";

/**
 * The 3D viewer, loaded only when a reader actually asks for it.
 *
 * `ssr: false` because the scene needs WebGL, and the chunk is large: Three.js
 * plus the viewer is far more than a textbook page should pay for on first
 * paint, and most readers never open it. The import is not even evaluated
 * until the drawer opens — `AtlasPeekDrawer` returns null before that — so a
 * chapter page loads exactly as it did before this feature existed.
 */
const AtlasExplorer = dynamic(() => import("@/components/atlas/AtlasExplorer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-zinc-950 text-sm text-zinc-400">
      Wczytywanie interaktywnego Atlasu 3D Pro…
    </div>
  ),
});

export interface AtlasPeekDrawerProps {
  /** BodyParts3D name / meshId to focus, or null when the drawer is closed. */
  focusName: string | null;
  /** Polish and Latin label of the structure, for the heading. */
  label: string;
  onClose: () => void;
}

/**
 * Slide-out Contextual 3D Inspector Drawer (Tier 2 UX), opened from a linked
 * anatomical structure inside a textbook chapter.
 */
export function AtlasPeekDrawer({
  focusName,
  label,
  onClose,
}: AtlasPeekDrawerProps) {
  const open = focusName !== null;
  const entity = open ? getAnatomicalEntity(focusName) : undefined;
  const resolvedFocus = entity?.meshId ?? focusName;

  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 border-zinc-800 bg-zinc-950 p-0 text-zinc-100 sm:max-w-3xl md:w-[min(52rem,62vw)] max-md:inset-x-0 max-md:bottom-0 max-md:top-auto max-md:h-[85vh] max-md:rounded-t-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-zinc-800 bg-zinc-950/95 px-5 py-3.5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <SheetTitle className="truncate text-base font-semibold text-zinc-100">
                {entity ? `${entity.namePl} (${entity.nameLat})` : label}
              </SheetTitle>
              {entity?.system && (
                <span className="rounded-md border border-emerald-800/70 bg-emerald-950/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  {entity.system}
                </span>
              )}
              {entity && entity.pins.length > 0 && (
                <span className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                  <MapPin className="size-3 text-emerald-400" />
                  {entity.pins.length} szpilek 3D
                </span>
              )}
            </div>
            <SheetDescription className="mt-0.5 truncate text-xs text-zinc-400">
              {entity?.summary ??
                "Contextual 3D Atlas Pro — tryb izolacji, przekroje X/Y/Z, X-Ray i Szpilki"}
            </SheetDescription>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <Link
              href={
                resolvedFocus
                  ? `/atlas?focus=${encodeURIComponent(resolvedFocus)}`
                  : "/atlas"
              }
              title="Otwórz pełnoekranowy Atlas 3D"
              className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white focus-ring"
            >
              <Maximize2 className="size-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Pełny Atlas</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Zamknij Atlas 3D"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-ring"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mounted only while open so closing releases the WebGL context. */}
        <div className="relative min-h-0 flex-1">
          {open && <AtlasExplorer focusName={resolvedFocus ?? undefined} embedded />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
