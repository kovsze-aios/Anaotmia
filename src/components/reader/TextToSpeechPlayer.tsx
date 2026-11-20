"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Play, Square } from "lucide-react";
import { useI18n } from "@/i18n";
import {
  chunkForSpeech,
  htmlToSpeechText,
  pickBestPolishVoice,
  type NeuralVoiceId,
  type SpeechPlaybackRate,
} from "@/lib/speechText";

export const AUTOPLAY_PARAM = "autoplay";

const DEFAULT_VOICE: NeuralVoiceId = "pl-PL-ZofiaNeural";
const DEFAULT_RATE: SpeechPlaybackRate = 1;

type PlayerStatus = "idle" | "loading" | "playing";
type TtsEngine = "neural" | "browser";

export interface TextToSpeechPlayerProps {
  chapterId: string;
  title: string;
  html: string;
  nextChapterId?: string | null;
  basePath?: string;
}

export function TextToSpeechPlayer({
  chapterId,
  title,
  html,
  nextChapterId,
  basePath = "/theory/anatomia",
}: TextToSpeechPlayerProps) {
  const router = useRouter();
  const { t } = useI18n();

  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [engine, setEngine] = useState<TtsEngine>("neural");

  const chunks = useMemo(() => {
    const bodyText = htmlToSpeechText(html);
    const combined = title ? `${title}\n${bodyText}` : bodyText;
    return chunkForSpeech(combined);
  }, [title, html]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const blobCacheRef = useRef<Map<string, string>>(new Map());
  const sessionIdRef = useRef(0);
  const autoPlayedChapterRef = useRef<string | null>(null);

  const clearAudioCache = useCallback(() => {
    for (const url of blobCacheRef.current.values()) {
      URL.revokeObjectURL(url);
    }
    blobCacheRef.current.clear();
  }, []);

  const stopPlayback = useCallback(() => {
    sessionIdRef.current += 1;

    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }

    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");
      audioRef.current.load();
    }

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setStatus("idle");
  }, []);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }

    return () => {
      stopPlayback();
      clearAudioCache();
    };
  }, [stopPlayback, clearAudioCache]);

  // Reset playback when navigating between chapters
  useEffect(() => {
    stopPlayback();
    clearAudioCache();
    setEngine("neural");
  }, [chapterId, stopPlayback, clearAudioCache]);

  const handleFinishedChapter = useCallback(() => {
    setStatus("idle");
    if (nextChapterId) {
      router.push(`${basePath}/${nextChapterId}?${AUTOPLAY_PARAM}=1`);
    }
  }, [basePath, nextChapterId, router]);

  const fetchNeuralChunkUrl = useCallback(
    async (idx: number, signal?: AbortSignal): Promise<string> => {
      const cacheKey = `${idx}:${DEFAULT_VOICE}:${DEFAULT_RATE}`;
      const cached = blobCacheRef.current.get(cacheKey);
      if (cached) return cached;

      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: chunks[idx],
          voice: DEFAULT_VOICE,
          rate: DEFAULT_RATE,
        }),
        signal,
      });

      if (!response.ok) {
        throw new Error(`TTS HTTP ${response.status}`);
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error("Empty TTS audio blob");
      }

      const objectUrl = URL.createObjectURL(blob);
      blobCacheRef.current.set(cacheKey, objectUrl);
      return objectUrl;
    },
    [chunks],
  );

  const speakBrowserFrom = useCallback(
    (idx: number, sessionId: number) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        if (sessionId === sessionIdRef.current) {
          setStatus("idle");
        }
        return;
      }

      if (sessionId !== sessionIdRef.current) return;
      if (idx >= chunks.length) {
        handleFinishedChapter();
        return;
      }

      setEngine("browser");
      setStatus("playing");

      const utterance = new SpeechSynthesisUtterance(chunks[idx]);
      utterance.lang = "pl-PL";
      utterance.rate = DEFAULT_RATE;

      const availableVoices = window.speechSynthesis.getVoices();
      const chosen = pickBestPolishVoice(availableVoices, DEFAULT_VOICE);
      if (chosen) {
        utterance.voice = chosen;
        utterance.lang = chosen.lang || "pl-PL";
      }

      utterance.onend = () => {
        if (sessionId !== sessionIdRef.current) return;
        speakBrowserFrom(idx + 1, sessionId);
      };

      utterance.onerror = () => {
        if (sessionId !== sessionIdRef.current) return;
        setStatus("idle");
      };

      window.speechSynthesis.speak(utterance);
    },
    [chunks, handleFinishedChapter],
  );

  const speakNeuralFrom = useCallback(
    async (idx: number, sessionId: number) => {
      if (sessionId !== sessionIdRef.current) return;
      if (idx >= chunks.length) {
        handleFinishedChapter();
        return;
      }

      setStatus("loading");

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const audioUrl = await fetchNeuralChunkUrl(idx, controller.signal);
        if (sessionId !== sessionIdRef.current) return;

        // Prefetch next chunk in parallel so transitions are gapless
        if (idx + 1 < chunks.length) {
          void fetchNeuralChunkUrl(idx + 1).catch(() => undefined);
        }

        const audio = audioRef.current ?? new Audio();
        audioRef.current = audio;
        audio.src = audioUrl;
        audio.playbackRate = DEFAULT_RATE;

        audio.onended = () => {
          if (sessionId !== sessionIdRef.current) return;
          void speakNeuralFrom(idx + 1, sessionId);
        };

        audio.onerror = () => {
          if (sessionId !== sessionIdRef.current) return;
          speakBrowserFrom(idx, sessionId);
        };

        await audio.play();
        if (sessionId === sessionIdRef.current) {
          setEngine("neural");
          setStatus("playing");
        }
      } catch {
        if (controller.signal.aborted || sessionId !== sessionIdRef.current) {
          return;
        }
        speakBrowserFrom(idx, sessionId);
      }
    },
    [chunks.length, fetchNeuralChunkUrl, handleFinishedChapter, speakBrowserFrom],
  );

  const startFrom = useCallback(
    (startIdx: number) => {
      if (chunks.length === 0) return;
      stopPlayback();
      const nextSession = sessionIdRef.current + 1;
      sessionIdRef.current = nextSession;
      if (engine === "browser" && typeof navigator !== "undefined" && !navigator.onLine) {
        speakBrowserFrom(startIdx, nextSession);
      } else {
        void speakNeuralFrom(startIdx, nextSession);
      }
    },
    [chunks.length, engine, speakBrowserFrom, speakNeuralFrom, stopPlayback],
  );

  // Resume playback across chapter navigation (?autoplay=1) without calling useSearchParams
  useEffect(() => {
    if (!mounted || chunks.length === 0) return;
    if (autoPlayedChapterRef.current === chapterId) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get(AUTOPLAY_PARAM) === "1") {
      autoPlayedChapterRef.current = chapterId;
      startFrom(0);
    }
  }, [mounted, chapterId, chunks.length, startFrom]);

  const handleTogglePlay = () => {
    if (status === "idle") {
      startFrom(0);
      return;
    }
    stopPlayback();
  };

  if (!mounted || chunks.length === 0) {
    return null;
  }

  const isActive = status !== "idle";
  const label = isActive ? t.reader.stopListening : t.reader.listen;

  return (
    <button
      type="button"
      onClick={handleTogglePlay}
      aria-label={label}
      aria-pressed={isActive}
      title={label}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-lg backdrop-blur-md transition-colors hover:bg-zinc-100 focus-ring dark:border-zinc-800 dark:bg-zinc-950/95 dark:text-zinc-100 dark:hover:bg-zinc-900 print:hidden"
    >
      {status === "loading" ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : status === "playing" ? (
        <Square className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
      ) : (
        <Play className="h-4 w-4 translate-x-0.5 fill-current" aria-hidden="true" />
      )}
    </button>
  );
}
