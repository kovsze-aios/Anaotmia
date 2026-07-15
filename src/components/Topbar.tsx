"use client";

import Link from "next/link";
import { useState } from "react";
import { SidebarDrawer } from "./Sidebar";
import { useTheme } from "@/hooks/useTheme";
import { GlobalSearch } from "./GlobalSearch";

export function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <>
      <div className="l-topbar">
        <div className="l-topbar-container">
          <button
            className="topbar-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Otwórz menu nawigacji"
          >
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
          </button>

          <Link href="/" className="logo">
            <span className="logo-text">Medycyna</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <GlobalSearch />
            <a
              href="https://buycoff.ee/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-pill rounded-full border border-zinc-200 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900 px-4 py-1 text-xs font-bold transition-colors flex items-center gap-1"
              title="Kup mi kawę"
            >
              <span>☕</span>
              <span className="hidden sm:inline">Wsprzyj projekt</span>
            </a>

            {/* Premium text-only theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-pill rounded-full border border-current px-4 py-1 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label={dark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
              title={dark ? "Tryb jasny" : "Tryb NOIR"}
            >
              {dark ? "JASNY" : "NOIR"}
            </button>
          </div>
        </div>
      </div>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
