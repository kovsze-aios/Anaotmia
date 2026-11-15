"use client";

import { useState } from "react";
import type { NavDomain } from "@/server/models";
import {
  CurriculumModeSwitcher,
  CkeStatusBadge,
  isTierRequiredInMode,
  useCurriculumViewMode,
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
  const [viewMode, setViewMode] = useCurriculumViewMode();

  const hasCkeMetadata = domains.some((d) =>
    d.sections.some((s) => Boolean(s.ckeStatus || s.tier)),
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
          <CurriculumModeSwitcher
            value={viewMode}
            onChange={setViewMode}
            compact
          />
        </div>
      )}
      {domains.map((domain) => {
        const domainHasMatch =
          !hasCkeMetadata ||
          domain.sections.some((s) =>
            isTierRequiredInMode(viewMode, s.tier ?? s.ckeStatus, s.formulas),
          );

        return (
          <div
            key={domain.id}
            className={`chapter-nav__domain transition-opacity ${domainHasMatch ? "" : "opacity-40"}`}
          >
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
                {domain.sections.map((section) => {
                  const isRequired =
                    !hasCkeMetadata ||
                    isTierRequiredInMode(
                      viewMode,
                      section.tier ?? section.ckeStatus,
                      section.formulas,
                    );
                  return (
                    <button
                      key={section.id}
                      className={`chapter-nav__section flex items-center justify-between gap-2 transition-opacity focus-ring ${
                        activeSection === section.id
                          ? "chapter-nav__section--active"
                          : ""
                      } ${isRequired ? "" : "opacity-40"}`}
                      onClick={() => onSectionSelect(domain.id, section.id)}
                    >
                      <span className="truncate text-left">{section.title}</span>
                      {(section.tier || section.ckeStatus) && (
                        <CkeStatusBadge
                          tier={section.tier}
                          status={section.ckeStatus}
                          compact
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

