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

  /* Toggle .dark on <html> and persist */
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

          {/* Theme toggle — far right */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={dark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
            title={dark ? "Tryb jasny" : "Tryb NOIR"}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
