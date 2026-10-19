"use client";

import { useState } from "react";
import type { NavDomain } from "@/server/models";
import {
  CkeFormulaSwitcher,
  CkeStatusBadge,
  matchesFormulaFilter,
  type FormulaFilterMode,
} from "./matura/CkeFormulaControls";

interface ChapterNavProps {
  domains: NavDomain[];
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
  const [formulaFilter, setFormulaFilter] = useState<FormulaFilterMode>("all");

  const hasCkeMetadata = domains.some((d) =>
    d.sections.some((s) => Boolean(s.ckeStatus)),
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
      {hasCkeMetadata && (
        <div className="px-3 pb-3 pt-1">
          <CkeFormulaSwitcher
            value={formulaFilter}
            onChange={setFormulaFilter}
            compact
          />
        </div>
      )}
      {domains.map((domain) => {
        const filteredSections = hasCkeMetadata
          ? domain.sections.filter((s) =>
              matchesFormulaFilter(formulaFilter, s.formulas, s.ckeStatus),
            )
          : domain.sections;

        if (filteredSections.length === 0) return null;

        return (
          <div key={domain.id} className="chapter-nav__domain">
            <button
              className={`chapter-nav__domain-title focus-ring ${
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
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    className={`chapter-nav__section flex items-center justify-between gap-2 focus-ring ${
                      activeSection === section.id
                        ? "chapter-nav__section--active"
                        : ""
                    }`}
                    onClick={() => onSectionSelect(domain.id, section.id)}
                  >
                    <span className="truncate text-left">{section.title}</span>
                    {section.ckeStatus && (
                      <CkeStatusBadge status={section.ckeStatus} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

