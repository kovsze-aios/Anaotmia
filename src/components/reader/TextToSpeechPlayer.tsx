"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Pause, Play, Square, Volume2 } from "lucide-react";
import { useI18n } from "@/i18n";
import {
  NEURAL_VOICES,
  SPEED_OPTIONS,
  chunkForSpeech,
  htmlToSpeechText,
  pickBestPolishVoice,
  type NeuralVoiceId,
  type SpeechPlaybackRate,
} from "@/lib/speechText";

export const AUTOPLAY_PARAM = "autoplay";

const VOICE_STORAGE_KEY = "sportnotes_tts_voice";
const RATE_STORAGE_KEY = "sportnotes_tts_rate";

type PlayerStatus = "idle" | "loading" | "playing" | "paused";
type TtsEngine = "neural" | "browser";

export interface TextToSpeechPlayerProps {
  chapterId: string;
  title: string;
  html: string;
  nextChapterId?: string | null;
  basePath?: string;
}

function readStoredVoice(): NeuralVoiceId {
  try {
    const raw = window.localStorage.getItem(VOICE_STORAGE_KEY);
    if (raw === "pl-PL-MarekNeural" || raw === "pl-PL-ZofiaNeural") {
      return raw;
    }
  } catch {
    // Ignore storage access errors
  }
  return "pl-PL-ZofiaNeural";
}

function readStoredRate(): SpeechPlaybackRate {
  try {
    const raw = Number(window.localStorage.getItem(RATE_STORAGE_KEY));
    if (raw === 1 || raw === 1.25 || raw === 1.5) {
      return raw;
    }
  } catch {
    // Ignore storage access errors
  }
  return 1;
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
  const [voice, setVoice] = useState<NeuralVoiceId>("pl-PL-ZofiaNeural");
  const [rate, setRate] = useState<SpeechPlaybackRate>(1);
  const [chunkIndex, setChunkIndex] = useState(0);

  const chunks = useMemo(() => {
    const bodyText = htmlToSpeechText(html);
    const combined = title ? `${title}\n${bodyText}` : bodyText;
    return chunkForSpeech(combined);
  }, [title, html]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const blobCacheRef = useRef<Map<string, string>>(new Map());
  const sessionIdRef = useRef(0);
  const voiceRef = useRef<NeuralVoiceId>(voice);
  const rateRef = useRef<SpeechPlaybackRate>(rate);
  const currentRenderedRateRef = useRef<number>(1);
  const autoPlayedChapterRef = useRef<string | null>(null);

  voiceRef.current = voice;
  rateRef.current = rate;

  const clearAudioCache = useCallback(() => {
    for (const url of blobCacheRef.current.values()) {
      URL.revokeObjectURL(url);
    }
    blobCacheRef.current.clear();
  }, []);

  const stopPlayback = useCallback(
    (resetIndex = true) => {
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
      if (resetIndex) {
        setChunkIndex(0);
      }
    },
    [],
  );

  // Hydrate persisted voice/rate and tear down audio resources on unmount
  useEffect(() => {
    setVoice(readStoredVoice());
    setRate(readStoredRate());
    setMounted(true);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }

    return () => {
      stopPlayback(false);
      clearAudioCache();
    };
  }, [stopPlayback, clearAudioCache]);

  // Reset playback when navigating between chapters
  useEffect(() => {
    stopPlayback(true);
    clearAudioCache();
    setEngine("neural");
  }, [chapterId, stopPlayback, clearAudioCache]);

  const handleFinishedChapter = useCallback(() => {
    setStatus("idle");
    setChunkIndex(0);
    if (nextChapterId) {
      router.push(`${basePath}/${nextChapterId}?${AUTOPLAY_PARAM}=1`);
    }
  }, [basePath, nextChapterId, router]);

  const fetchNeuralChunkUrl = useCallback(
    async (
      idx: number,
      targetVoice: NeuralVoiceId,
      targetRate: SpeechPlaybackRate,
      signal?: AbortSignal,
    ): Promise<string> => {
      const cacheKey = `${idx}:${targetVoice}:${targetRate}`;
      const cached = blobCacheRef.current.get(cacheKey);
      if (cached) return cached;

      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: chunks[idx],
          voice: targetVoice,
          rate: targetRate,
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
      setChunkIndex(idx);
      setStatus("playing");

      const utterance = new SpeechSynthesisUtterance(chunks[idx]);
      utterance.lang = "pl-PL";
      utterance.rate = rateRef.current;

      const availableVoices = window.speechSynthesis.getVoices();
      const chosen = pickBestPolishVoice(availableVoices, voiceRef.current);
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

      const activeVoice = voiceRef.current;
      const activeRate = rateRef.current;

      setChunkIndex(idx);
      setStatus("loading");

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const audioUrl = await fetchNeuralChunkUrl(
          idx,
          activeVoice,
          activeRate,
          controller.signal,
        );
        if (sessionId !== sessionIdRef.current) return;

        // Prefetch next chunk in parallel so transitions are gapless
        if (idx + 1 < chunks.length) {
          void fetchNeuralChunkUrl(idx + 1, activeVoice, activeRate).catch(
            () => undefined,
          );
        }

        const audio = audioRef.current ?? new Audio();
        audioRef.current = audio;
        audio.src = audioUrl;
        currentRenderedRateRef.current = activeRate;
        audio.playbackRate = 1;

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
      } catch (err) {
        if (controller.signal.aborted || sessionId !== sessionIdRef.current) {
          return;
        }
        // Seamless zero-config fallback when Edge Neural is offline / unreachable
        void err;
        speakBrowserFrom(idx, sessionId);
      }
    },
    [chunks.length, fetchNeuralChunkUrl, handleFinishedChapter, speakBrowserFrom],
  );

  const startFrom = useCallback(
    (startIdx: number) => {
      if (chunks.length === 0) return;
      stopPlayback(false);
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

    if (status === "playing" || status === "loading") {
      if (engine === "neural" && audioRef.current) {
        audioRef.current.pause();
        setStatus("paused");
      } else if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.pause();
        setStatus("paused");
      }
      return;
    }

    // Resume from pause
    if (engine === "neural" && audioRef.current && audioRef.current.src) {
      void audioRef.current
        .play()
        .then(() => setStatus("playing"))
        .catch(() => startFrom(chunkIndex));
    } else if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.resume();
      setStatus("playing");
    } else {
      startFrom(chunkIndex);
    }
  };

  const handleVoiceChange = (nextVoice: NeuralVoiceId) => {
    if (nextVoice === voice) return;
    setVoice(nextVoice);
    voiceRef.current = nextVoice;
    try {
      window.localStorage.setItem(VOICE_STORAGE_KEY, nextVoice);
    } catch {
      // Ignore storage errors
    }
    clearAudioCache();

    if (status !== "idle") {
      startFrom(chunkIndex);
    }
  };

  const handleRateChange = (nextRate: SpeechPlaybackRate) => {
    if (nextRate === rate) return;
    setRate(nextRate);
    rateRef.current = nextRate;
    try {
      window.localStorage.setItem(RATE_STORAGE_KEY, String(nextRate));
    } catch {
      // Ignore storage errors
    }
    clearAudioCache();

    if (status === "playing" && engine === "neural" && audioRef.current) {
      audioRef.current.playbackRate = nextRate / currentRenderedRateRef.current;
    } else if (status !== "idle" && engine === "browser") {
      startFrom(chunkIndex);
    }
  };

  if (!mounted || chunks.length === 0) {
    return null;
  }

  const isActive = status !== "idle";
  const primaryLabel =
    status === "playing" || status === "loading"
      ? t.reader.pauseListening
      : status === "paused"
        ? t.reader.resumeListening
        : t.reader.listen;

  return (
    <div
      className="fixed bottom-4 right-3 z-40 flex flex-wrap items-center gap-1.5 rounded-full border border-zinc-200 bg-white/95 px-2.5 py-1.5 shadow-lg backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 sm:bottom-6 sm:right-4 print:hidden"
      role="region"
      aria-label={t.reader.listen}
    >
      {/* Voice switcher: Zofia / Marek (Edge Neural + smart local fallback) */}
      <div
        className="flex items-center rounded-full border border-zinc-200 bg-zinc-100/80 p-0.5 dark:border-zinc-800 dark:bg-zinc-900/90"
        role="group"
        aria-label="Wybór głosu lektora"
      >
        {NEURAL_VOICES.map((option) => {
          const selected = voice === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleVoiceChange(option.id)}
              aria-pressed={selected}
              title={`Głos: ${option.label} (Polski Neural)`}
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors ${
                selected
                  ? "bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Speed switcher: 1x / 1.25x / 1.5x */}
      <div
        className="flex items-center rounded-full border border-zinc-200 bg-zinc-100/80 p-0.5 dark:border-zinc-800 dark:bg-zinc-900/90"
        role="group"
        aria-label="Prędkość odtwarzania"
      >
        {SPEED_OPTIONS.map((opt) => {
          const selected = rate === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => handleRateChange(opt)}
              aria-pressed={selected}
              className={`rounded-full px-1.5 py-0.5 font-mono text-[11px] transition-colors ${
                selected
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {opt}x
            </button>
          );
        })}
      </div>

      {/* Play / Pause main pill button */}
      <button
        type="button"
        onClick={handleTogglePlay}
        className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        {status === "loading" ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
        ) : status === "playing" ? (
          <Pause className="h-3.5 w-3.5" aria-hidden="true" />
        ) : isActive ? (
          <Play className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        <span>{primaryLabel}</span>
      </button>

      {/* Progress & Stop button while active */}
      {isActive && (
        <>
          <span
            className="hidden font-mono text-[11px] text-zinc-500 dark:text-zinc-400 sm:inline"
            title={engine === "neural" ? "Głos neuronowy (Edge Neural)" : "Głos przeglądarki"}
          >
            {chunkIndex + 1}/{chunks.length}
          </span>
          <button
            type="button"
            onClick={() => stopPlayback(true)}
            aria-label={t.reader.stopListening}
            title={t.reader.stopListening}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <Square className="h-3 w-3" aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}
