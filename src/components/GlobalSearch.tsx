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
import { searchTerms, type SearchItem } from "@/lib/search";

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  // Bolt: useDeferredValue prevents the expensive fuzzy search from blocking the main thread during typing
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
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}
