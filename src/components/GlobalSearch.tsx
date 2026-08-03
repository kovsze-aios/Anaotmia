"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
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
const SUBJECT_GROUPS = ["Anatomia", "Biologia", "Chemia", "Fizjologia"] as const;

const SUBJECT_HEADINGS: Record<(typeof SUBJECT_GROUPS)[number], string> = {
  Anatomia: "🩺 Anatomia",
  Biologia: "🌿 Biologia",
  Chemia: "🧪 Chemia",
  Fizjologia: "🫀 Fizjologia",
};

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  // Bolt: useDeferredValue keeps the input responsive — the request is fired for
  // the settled value rather than on every keystroke.
  const deferredQuery = React.useDeferredValue(query);
  const router = useRouter();
  const searchRef = React.useRef<HTMLDivElement>(null);

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
    if (!deferredQuery.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    searchSections(deferredQuery, { signal: controller.signal })
      .then(setResults)
      .catch((error: unknown) => {
        // An aborted request is the expected outcome of typing another key.
        if (controller.signal.aborted) return;
        console.error("Search request failed", error);
        setResults([]);
      });

    return () => controller.abort();
  }, [deferredQuery]);

  const groupedResults = React.useMemo(() => {
    const grouped = {
      Anatomia: [],
      Biologia: [],
      Chemia: [],
      Fizjologia: [],
    } as Record<(typeof SUBJECT_GROUPS)[number], SearchResult[]>;

    for (const item of results) {
      grouped[item.subject]?.push(item);
    }
    return grouped;
  }, [results]);

  return (
    <div className="relative" ref={searchRef}>
      <Command className="overflow-visible bg-transparent border-none">
        <CommandInput
          placeholder="Szukaj..."
          value={query}
          onValueChange={setQuery}
          onFocus={() => setOpen(true)}
          className="dark:text-zinc-100 dark:placeholder-zinc-400"
          wrapperClassName="dark:bg-zinc-800/50 dark:border-zinc-700"
          iconClassName="dark:text-zinc-400 dark:opacity-100"
        />
        {open && query.length > 0 && (
          <div className="absolute top-full mt-2 right-0 w-80 max-h-96 overflow-y-auto rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 z-50">
            <CommandList className="max-h-[60vh] overflow-y-auto overscroll-contain">
              <CommandEmpty>Nie znaleziono wyników dla &quot;{query}&quot;.</CommandEmpty>

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
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : null,
              )}
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
