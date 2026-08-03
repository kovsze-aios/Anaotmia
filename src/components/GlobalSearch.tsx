"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchSections, type SearchResult } from "@/services/searchService";

/** Groups results by subject, ignoring any subject the UI has no section for. */
const SUBJECT_GROUPS = ["Anatomia", "Biologia", "Chemia", "Fizjologia", "Matura"] as const;

const SUBJECT_HEADINGS: Record<(typeof SUBJECT_GROUPS)[number], string> = {
  Anatomia: "🩺 Anatomia",
  Biologia: "🌿 Biologia",
  Chemia: "🧪 Chemia",
  Fizjologia: "🫀 Fizjologia",
  Matura: "📝 Matura",
};

/** Requests below this length are skipped — one letter has no search intent. */
const MIN_QUERY_LENGTH = 2;

/** Pause before firing the request, so rapid typing hits the API once. */
const DEBOUNCE_MS = 250;

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const searchRef = React.useRef<HTMLDivElement>(null);

  // Debounce the query so the request fires on the settled value, not on every
  // keystroke.
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed.length < MIN_QUERY_LENGTH) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const controller = new AbortController();

    searchSections(trimmed, { signal: controller.signal })
      .then((result) => {
        setResults(result);
        setIsLoading(false);
      })
      .catch((error: unknown) => {
        // An aborted request is the expected outcome of typing another key.
        if (controller.signal.aborted) return;
        console.error("Search request failed", error);
        setResults([]);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  const groupedResults = React.useMemo(() => {
    const grouped = {
      Anatomia: [],
      Biologia: [],
      Chemia: [],
      Fizjologia: [],
      Matura: [],
    } as Record<(typeof SUBJECT_GROUPS)[number], SearchResult[]>;

    for (const item of results) {
      grouped[item.subject]?.push(item);
    }
    return grouped;
  }, [results]);

  const showDropdown = open && debouncedQuery.trim().length >= MIN_QUERY_LENGTH;

  return (
    <div className="relative" ref={searchRef}>
      <Command className="overflow-visible bg-transparent border-none">
        <CommandInput
          placeholder="Szukaj..."
          value={query}
          onValueChange={setQuery}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
          className="dark:text-zinc-100 dark:placeholder-zinc-400"
          wrapperClassName="dark:bg-zinc-800/50 dark:border-zinc-700"
          iconClassName="dark:text-zinc-400 dark:opacity-100"
        />
        {showDropdown && (
          <div className="absolute top-full mt-2 right-0 w-80 max-h-96 overflow-y-auto rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 z-50">
            <CommandList className="max-h-[60vh] overflow-y-auto overscroll-contain">
              {isLoading ? (
                <div className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  Szukanie…
                </div>
              ) : (
                <>
                  <CommandEmpty>
                    Nie znaleziono wyników dla &quot;{debouncedQuery}&quot;.
                  </CommandEmpty>

                  {SUBJECT_GROUPS.map((subject) =>
                    groupedResults[subject].length > 0 ? (
                      <CommandGroup key={subject} heading={SUBJECT_HEADINGS[subject]}>
                        {groupedResults[subject].map((item) => (
                          <CommandItem
                            key={item.url}
                            value={`${item.id} ${item.title}`}
                            onSelect={() => {
                              runCommand(() => router.push(item.url));
                            }}
                            className="cursor-pointer"
                          >
                            <div className="flex flex-col gap-0.5">
                              <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</span>
                              {item.excerpt && (
                                <span className="line-clamp-2 text-xs leading-snug text-zinc-500 dark:text-zinc-400">
                                  {item.excerpt}
                                </span>
                              )}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ) : null,
                  )}
                </>
              )}
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
