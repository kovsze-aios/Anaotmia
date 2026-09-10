"use client";

import dynamic from "next/dynamic";
import { X } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";

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
    <div className="flex h-full items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
      Wczytywanie Atlasu 3D…
    </div>
  ),
});

export interface AtlasPeekDrawerProps {
  /** BodyParts3D name to focus, or null when the drawer is closed. */
  focusName: string | null;
  /** Polish and Latin label of the structure, for the heading. */
  label: string;
  onClose: () => void;
}

/**
 * Slide-out 3D view of one structure, opened from a word in the chapter.
 *
 * A drawer rather than a route change on purpose: the reader is mid-paragraph,
 * and sending them to the atlas page would lose their place and their scroll
 * position. Closing it puts them back exactly where they were.
 */
export function AtlasPeekDrawer({ focusName, label, onClose }: AtlasPeekDrawerProps) {
  const open = focusName !== null;

  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 p-0 sm:max-w-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <div className="min-w-0">
            <SheetTitle className="truncate text-base font-semibold">{label}</SheetTitle>
            <SheetDescription className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              Atlas 3D — model interaktywny
            </SheetDescription>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij Atlas 3D"
            className="shrink-0 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-ring dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Mounted only while open, so closing the drawer releases the WebGL
            context and the geometry buffers instead of leaving a hidden scene
            rendering behind the page. */}
        <div className="relative min-h-0 flex-1">
          {open && <AtlasExplorer focusName={focusName} embedded />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
