"use client";

import Link from "next/link";
import { useState } from "react";
import { ChapterNav } from "./ChapterNav";
import type { TextbookDomain } from "@/types/textbook";

interface TextbookLayoutProps {
  domains: TextbookDomain[];
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

  return (
    <div className="textbook-layout">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="textbook-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`textbook-sidebar ${
          sidebarOpen ? "textbook-sidebar--open" : ""
        }`}
      >
        <div className="textbook-sidebar__header">
          <Link href="/" className="textbook-sidebar__home">
            <span>←</span> Strona główna
          </Link>
          <h2>Podręcznik</h2>
          <button
            className="textbook-sidebar__close focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-sm"
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
          className="textbook-mobile-toggle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
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
