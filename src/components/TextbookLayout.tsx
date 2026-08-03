"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChapterNav } from "./ChapterNav";
import type { NavDomain } from "@/server/models";

interface TextbookLayoutProps {
  domains: NavDomain[];
  activeSection: string | null;
  onSectionSelect: (domainId: string, sectionId: string) => void;
  children: React.ReactNode;
}

export function TextbookLayout({
  domains,
  activeSection,
  onSectionSelect,
  children,
}: TextbookLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  return (
    <div className="textbook-layout">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="textbook-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`textbook-sidebar ${
          sidebarOpen ? "textbook-sidebar--open" : ""
        }`}
      >
        <div className="textbook-sidebar__header">
          <Link href="/" className="textbook-sidebar__home focus-ring rounded-sm">
            <span>←</span> Strona główna
          </Link>
          <h2>Podręcznik</h2>
          <button
            className="textbook-sidebar__close focus-ring rounded-sm"
            onClick={() => setSidebarOpen(false)}
            aria-label="Zamknij pasek boczny"
          >
            ✕
          </button>
        </div>
        <ChapterNav
          domains={domains}
          activeSection={activeSection}
          onSectionSelect={(domainId, sectionId) => {
            onSectionSelect(domainId, sectionId);
            setSidebarOpen(false);
          }}
        />
      </aside>

      {/* Main content */}
      <main className="textbook-content">
        {/* Mobile toggle */}
        <button
          className="textbook-mobile-toggle focus-ring"
          onClick={() => setSidebarOpen(true)}
          aria-expanded={sidebarOpen}
        >
          ☰ Menu
        </button>

        {children}
      </main>
    </div>
  );
}
