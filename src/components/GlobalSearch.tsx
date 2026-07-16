"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchTerms, type SearchItem } from "@/lib/search";

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  // Bolt: useDeferredValue prevents the expensive fuzzy search from blocking the main thread during typing
  const deferredQuery = React.useDeferredValue(query);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const results = React.useMemo(() => searchTerms(deferredQuery), [deferredQuery]);

  const groupedResults = React.useMemo(() => {
    const grouped: Record<string, SearchItem[]> = {
      Anatomia: [],
      Biologia: [],
      Chemia: [],
    };
    results.forEach((item) => {
      grouped[item.subject].push(item);
    });
    return grouped;
  }, [results]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-500 bg-zinc-100/50 hover:bg-zinc-200/50 hover:text-zinc-900 border border-zinc-200 rounded-full transition-colors dark:bg-zinc-800/50 dark:border-zinc-700/50 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
        aria-label="Szukaj pojęcia (Command/Control + K)"
      >
        <SearchIcon className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline-block">Szukaj pojęcia...</span>
        <span className="inline-block sm:hidden">Szukaj...</span>
        <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-600 opacity-100 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Szukaj pojęcia..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[60vh] overflow-y-auto overscroll-contain">
          <CommandEmpty>Nie znaleziono wyników dla &quot;{query}&quot;.</CommandEmpty>

          {query.length > 0 && (
            <>
              {groupedResults.Anatomia.length > 0 && (
                <CommandGroup heading="🩺 Anatomia">
                  {groupedResults.Anatomia.map((item) => (
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
              )}

              {groupedResults.Biologia.length > 0 && (
                <CommandGroup heading="🌿 Biologia">
                  {groupedResults.Biologia.map((item) => (
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
              )}

              {groupedResults.Chemia.length > 0 && (
                <CommandGroup heading="🧪 Chemia">
                  {groupedResults.Chemia.map((item) => (
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
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
