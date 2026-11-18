"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavDomain } from "@/server/models";

interface ChapterNavProps {
  domains: NavDomain[];
  activeSection: string | null;
  onSectionSelect: (domainId: string, sectionId: string) => void;
  basePath?: string;
}

const MATURA_SUBJECTS = new Set(["biologia", "chemia", "fizyka", "matematyka"]);

export function ChapterNav({
  domains,
  activeSection,
  onSectionSelect,
  basePath,
}: ChapterNavProps) {
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(
    new Set(domains.length > 0 ? [domains[0].id] : []),
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain");
    if (domainParam && domains.some((d) => d.id === domainParam)) {
      setExpandedDomains((prev) => {
        if (prev.has(domainParam)) return prev;
        const next = new Set(prev);
        next.add(domainParam);
        return next;
      });
    }
  }, [domains]);

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

  const normalizedSlug = (basePath ?? "")
    .replace(/^\/theory\//, "")
    .replace(/-matura-(?:2015|2023)$/, "");
  const isMaturaSubject = MATURA_SUBJECTS.has(normalizedSlug);
  const maturaLandingPath = normalizedSlug ? `/theory/${normalizedSlug}` : "";

  return (
    <nav className="chapter-nav">
      {domains.map((domain) => (
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
              {domain.sections.map((section) => (
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
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {isMaturaSubject && maturaLandingPath && (
        <div className="mt-4 border-t border-zinc-800 px-3 pt-4">
          <p className="pb-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Matura
          </p>
          <div className="flex flex-col gap-1">
            <Link
              href={`${maturaLandingPath}?formula=2023#sekcja-matura`}
              className="rounded-md px-2 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-ring"
            >
              Formuła 2023+ (2015+)
            </Link>
            <Link
              href={`${maturaLandingPath}?formula=2015#sekcja-matura`}
              className="rounded-md px-2 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-ring"
            >
              Formuła 2015
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

