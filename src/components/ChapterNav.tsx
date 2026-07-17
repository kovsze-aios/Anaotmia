"use client";

import { useState } from "react";
import type { TextbookDomain } from "@/types/textbook";

interface ChapterNavProps {
  domains: TextbookDomain[];
  activeSection: string | null;
  onSectionSelect: (domainId: string, sectionId: string) => void;
}

export function ChapterNav({
  domains,
  activeSection,
  onSectionSelect,
}: ChapterNavProps) {
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(
    new Set(domains.length > 0 ? [domains[0].id] : []),
  );

  const toggleDomain = (id: string) => {
    setExpandedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (domains.length === 0) {
    return (
      <div className="chapter-nav-empty">
        <p>No domains loaded yet.</p>
        <p className="text-sm text-muted-foreground">
          Content coming soon.
        </p>
      </div>
    );
  }

  return (
    <nav className="chapter-nav">
      {domains.map((domain) => (
        <div key={domain.id} className="chapter-nav__domain">
          <button
            className={`chapter-nav__domain-title ${
              expandedDomains.has(domain.id)
                ? "chapter-nav__domain-title--expanded"
                : ""
            }`}
            onClick={() => toggleDomain(domain.id)}
            aria-expanded={expandedDomains.has(domain.id)}
          >
            <span>
              {domain.icon && (
                <span className="chapter-nav__icon">{domain.icon}</span>
              )}
              {domain.shortTitle}
            </span>
            <span className="chapter-nav__chevron" aria-hidden="true">
              {expandedDomains.has(domain.id) ? "▾" : "▸"}
            </span>
          </button>

          {expandedDomains.has(domain.id) && (
            <div className="chapter-nav__sections">
              {domain.sections.map((section) => (
                <button
                  key={section.id}
                  className={`chapter-nav__section ${
                    activeSection === section.id
                      ? "chapter-nav__section--active"
                      : ""
                  }`}
                  onClick={() => onSectionSelect(domain.id, section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
