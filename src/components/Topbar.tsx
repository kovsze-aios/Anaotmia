"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SidebarDrawer } from "./Sidebar";

export function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dark, setDark] = useState(false);

  /* Initialize theme from <html> class on mount */
  useEffect(() => {
    const html = document.documentElement;
    setDark(html.classList.contains("dark"));
  }, []);

  /* Toggle .dark on <html> */
  const toggleTheme = () => {
    const html = document.documentElement;
    const next = !html.classList.contains("dark");
    if (next) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setDark(next);
  };

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
            className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 transition-all text-xs font-semibold tracking-wider"
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
