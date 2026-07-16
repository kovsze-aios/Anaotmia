"use client";

import Link from "next/link";
import { useState } from "react";
import { SidebarDrawer } from "./Sidebar";
import { useTheme } from "@/hooks/useTheme";
import { GlobalSearch } from "./GlobalSearch";
import { Sun, Moon } from "lucide-react";

export function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <>
      <div className="l-topbar">
        <div className="l-topbar-container">
          <button
            className="topbar-hamburger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
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
              className="theme-pill rounded-full border border-zinc-200 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900 px-4 py-1 text-xs font-bold transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
              title="Kup mi kawę"
              aria-label="Wesprzyj projekt (otwiera się w nowej karcie)"
            >
              <span aria-hidden="true">☕</span>
              <span className="hidden sm:inline">Wesprzyj projekt</span>
            </a>

            {/* Sliding animated theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-zinc-200 dark:bg-zinc-800 p-1 cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
              aria-label="Zmień motyw"
            >
              {/* Icons Layer */}
              <div className="flex w-full justify-between px-0.5 text-zinc-400 dark:text-zinc-500 z-10 pointer-events-none">
                <Sun className={`h-3.5 w-3.5 transition-colors duration-300 ${!dark ? 'text-zinc-900' : 'text-zinc-600'}`} />
                <Moon className={`h-3.5 w-3.5 transition-colors duration-300 ${dark ? 'text-zinc-100' : 'text-zinc-400'}`} />
              </div>

              {/* Smooth Sliding Circle */}
              <span
                className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white dark:bg-zinc-950 shadow-sm transition-transform duration-300 ease-in-out transform ${
                  dark ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
