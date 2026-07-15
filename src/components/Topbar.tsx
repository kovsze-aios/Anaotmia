"use client";

import Link from "next/link";
import { useState } from "react";
import { SidebarDrawer } from "./Sidebar";
import { useTheme } from "@/hooks/useTheme";

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

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
