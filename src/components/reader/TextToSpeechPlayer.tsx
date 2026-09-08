"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pause, Play, Square } from "lucide-react";

import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { chunkForSpeech, htmlToSpeechText } from "@/lib/speechText";

/**
 * Flag that carries "keep reading" across an auto-turned page.
 *
 * Paging forward is a `router.push`, so the player unmounts with the chapter
 * it was reading. The intent to continue has to survive in the one place that
 * outlives the component — the URL.
 */
export const AUTOPLAY_PARAM = "autoplay";

/** The corpus is Polish; the engine needs telling, or it reads it as English. */
const SPEECH_LANG = "pl-PL";

type Status = "idle" | "playing" | "paused";

export interface TextToSpeechPlayerProps {
  /** Chapter on screen. A change resets the player, mount or soft navigation. */
  chapterId: string;
  /** Read first, so a listener hears which chapter has started. */
  title: string;
  /** Chapter body as rendered; stripped to plain text before it is spoken. */
  html: string;
  /** Turned to when the chapter finishes. Absent on the last chapter. */
  nextChapterId?: string;
}

/** 44px floor, the same touch target the rest of the reader chrome uses. */
const BUTTON =
  "flex min-h-11 min-w-11 items-center justify-center transition-colors focus-ring " +
  "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900";

/**
 * Read-aloud control for the reading view.
 *
 * Floating rather than docked. The obvious home is beside the prev/next
 * controls, but those sit past the end of a chapter that takes minutes to read
 * — by the time speech is running they are far off-screen, and a pause button
 * you have to scroll to find is not a pause button. Fixed positioning also
 * satisfies the harder constraint: the reading column is never reflowed,
 * because the player is not in its flow at all.
 *
 * Collapsed to a single circle at rest, so the immersive view carries one
 * 44px control; it expands to pause and stop only while something is playing.
 */
export function TextToSpeechPlayer({
  chapterId,
  title,
  html,
  nextChapterId,
}: TextToSpeechPlayerProps) {
  const router = useRouter();
  const { t } = useI18n();

  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);

  /**
   * Invalidates the handlers of speech that has been torn down.
   *
   * `cancel()` makes Chrome fire `onend` on every queued utterance, exactly as
   * a natural finish does. Without a generation stamp captured at queue time,
   * pressing stop would look like "the chapter finished" and turn the page.
   */
  const generation = useRef(0);
  const spoken = useRef(0);
  const total = useRef(0);
  const voice = useRef<SpeechSynthesisVoice | null>(null);

  const teardown = useCallback(() => {
    generation.current += 1;
    spoken.current = 0;
    total.current = 0;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const stop = useCallback(() => {
    teardown();
    setStatus("idle");
    setProgress(0);
  }, [teardown]);

  const start = useCallback(() => {
    const synth = window.speechSynthesis;

    // Anything still queued belongs to a previous press; drop it first so two
    // readings can never overlap.
    teardown();
    const mine = generation.current;

    const chunks = chunkForSpeech(
      [title, htmlToSpeechText(html)].filter(Boolean).join("\n"),
    );
    if (chunks.length === 0) return;

    total.current = chunks.length;
    setProgress(0);
    setStatus("playing");

    // One utterance per chunk, queued in order. The engine drains the queue
    // itself, which keeps sequencing out of React and off the event loop.
    const advance = () => {
      if (generation.current !== mine) return;
      spoken.current += 1;
      setProgress(spoken.current / total.current);
      if (spoken.current < total.current) return;

      setStatus("idle");
      setProgress(0);
      if (nextChapterId) {
        router.push(`/theory/anatomia/${nextChapterId}?${AUTOPLAY_PARAM}=1`);
      }
    };

    for (const chunk of chunks) {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = SPEECH_LANG;
      if (voice.current) utterance.voice = voice.current;
      utterance.onend = advance;
      // A chunk the engine refuses must not strand the rest of the chapter, so
      // an error advances exactly as a finish does. Cancellation also arrives
      // here in some browsers, and the generation check absorbs it.
      utterance.onerror = advance;
      synth.speak(utterance);
    }
  }, [html, nextChapterId, router, teardown, title]);

  // Held in a ref so the reset effect below can call the current version
  // without listing every prop `start` closes over among its dependencies —
  // which would tear down playback whenever one of them changed identity.
  const startRef = useRef(start);
  useEffect(() => {
    startRef.current = start;
  });

  const toggle = useCallback(() => {
    const synth = window.speechSynthesis;
    if (status === "playing") {
      synth.pause();
      setStatus("paused");
    } else if (status === "paused") {
      synth.resume();
      setStatus("playing");
    } else {
      startRef.current();
    }
  }, [status]);

  /**
   * Feature detection and voice resolution.
   *
   * `supported` starts false so the server render and the first client render
   * agree on rendering nothing; the effect then reveals the control. Voices
   * populate asynchronously, and `voiceschanged` is the only reliable signal —
   * without it the first utterance can be spoken by the browser's default
   * (usually English) voice even with `lang` set.
   */
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    setSupported(true);

    const synth = window.speechSynthesis;
    const resolve = () => {
      const voices = synth.getVoices();
      voice.current =
        voices.find((v) => v.lang === SPEECH_LANG) ??
        voices.find((v) => v.lang?.toLowerCase().replace("_", "-").startsWith("pl")) ??
        null;
    };

    resolve();
    synth.addEventListener("voiceschanged", resolve);
    return () => synth.removeEventListener("voiceschanged", resolve);
  }, []);

  /**
   * Reset on chapter change, then honour an auto-turned page.
   *
   * Keyed on `chapterId` rather than on mount: a soft navigation between two
   * chapters reuses this component with new props, so mount-only cleanup would
   * leave the previous chapter reading over the new one.
   *
   * The flag is read from `window.location` instead of `useSearchParams`
   * deliberately. All 687 chapter routes are prerendered, and a prerendered
   * page that calls `useSearchParams` outside a Suspense boundary fails the
   * production build — while appearing to work in dev, where routes render on
   * demand. Reading it in an effect is honest about being client-only and
   * leaves the static HTML untouched.
   */
  useEffect(() => {
    if (!supported) return;

    teardown();
    setStatus("idle");
    setProgress(0);

    const params = new URLSearchParams(window.location.search);
    if (params.has(AUTOPLAY_PARAM)) {
      // Consume the flag before speaking. It has done its job, and leaving it
      // on the URL would restart playback on any later reload or shared link.
      params.delete(AUTOPLAY_PARAM);
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        window.location.pathname + (query ? `?${query}` : ""),
      );
      startRef.current();
    }

    // Unmount or chapter change: kill the queue *and* invalidate the handlers
    // holding it, so nothing can navigate from a page that is already gone.
    return teardown;
  }, [chapterId, supported, teardown]);

  // A full page unload normally stops the engine, but a bfcache restore can
  // bring speech back with it. `pagehide` closes that gap.
  useEffect(() => {
    const kill = () => {
      generation.current += 1;
      window.speechSynthesis?.cancel();
    };
    window.addEventListener("pagehide", kill);
    return () => window.removeEventListener("pagehide", kill);
  }, []);

  if (!supported) return null;

  const active = status !== "idle";
  const playing = status === "playing";

  return (
    <div className="fixed bottom-4 right-3 z-40 sm:bottom-6 sm:right-4 print:hidden">
      <div
        className={cn(
          "relative flex items-center overflow-hidden rounded-full border shadow-lg backdrop-blur",
          "border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90",
        )}
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={
            playing
              ? t.reader.pauseListening
              : status === "paused"
                ? t.reader.resumeListening
                : t.reader.listen
          }
          className={cn(BUTTON, "rounded-full")}
        >
          {playing ? (
            <Pause className="size-5" aria-hidden="true" />
          ) : (
            <Play className="size-5" aria-hidden="true" />
          )}
        </button>

        {active && (
          <button
            type="button"
            onClick={stop}
            aria-label={t.reader.stopListening}
            className={cn(BUTTON, "rounded-full")}
          >
            <Square className="size-4" aria-hidden="true" />
          </button>
        )}

        {/* Chapter progress. Decorative — the buttons already carry the state
            for assistive tech, and a live percentage would be noise. */}
        {active && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-200 dark:bg-zinc-800"
          >
            <span
              className="block h-full bg-zinc-900 transition-[width] duration-300 dark:bg-zinc-100"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </span>
        )}
      </div>
    </div>
  );
}
