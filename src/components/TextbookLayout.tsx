"use client";

import { useState } from "react";
import { ChapterNav } from "./ChapterNav";
import type { TextbookDomain, TextbookSection } from "@/types/textbook";

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
          <a href="/" className="textbook-sidebar__home">
            <span>←</span> Home
          </a>
          <h2>Smart Textbook</h2>
          <button
            className="textbook-sidebar__close"
            onClick={() => setSidebarOpen(false)}
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
          className="textbook-mobile-toggle"
          onClick={() => setSidebarOpen(true)}
        >
          ☰ Menu
        </button>

        {children}
      </main>
    </div>
  );
}
