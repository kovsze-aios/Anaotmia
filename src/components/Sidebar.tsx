"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity } from "lucide-react";

import type { SidebarNavigation } from "@/server/models";

/* ─── Accordion group ─── */
function AccordionGroup({
  label,
  defaultExpanded = false,
  children,
}: {
  label: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="sidebar-accordion">
      <button
        className="sidebar-accordion__trigger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-accordion__chevron" aria-hidden="true">
          {expanded ? "▲" : "▼"}
        </span>
      </button>
      <div
        className="sidebar-accordion__body"
        style={{
          maxHeight: expanded ? "1200px" : "0",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="sidebar-accordion__inner">{children}</div>
      </div>
    </div>
  );
}

/* ─── Sub-accordion (for chemistry sections) ─── */
function SubAccordion({
  label,
  defaultExpanded = false,
  children,
}: {
  label: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="sidebar-sub-accordion">
      <button
        className="sidebar-sub-accordion__trigger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-sub-accordion__chevron" aria-hidden="true">
          {expanded ? "–" : "+"}
        </span>
      </button>
      <div
        className="sidebar-sub-accordion__body"
        style={{
          maxHeight: expanded ? "800px" : "0",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="sidebar-sub-accordion__inner">{children}</div>
      </div>
    </div>
  );
}

/* ─── Mobile drawer ─── */
export function SidebarDrawer({
  open,
  onClose,
  navigation,
}: {
  open: boolean;
  onClose: () => void;
  /**
   * Built server-side by `getSidebarNavigation()`. Passing it in — rather than
   * deriving it from the textbook data here — is what keeps the multi-megabyte
   * repositories out of this client component's bundle.
   */
  navigation: SidebarNavigation;
}) {
  const {
    anatomy: anatomyLinks,
    biology: biologyLinks,
    chemistryInorganic: chemistryInorganicLinks,
    chemistryOrganic: chemistryOrganicLinks,
  } = navigation;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${open ? "drawer-backdrop--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__header">
          <Link href="/" className="drawer-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-sm" onClick={onClose}>
            Medycyna
          </Link>
          <button className="mobile-drawer__close focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-sm" onClick={onClose} aria-label="Zamknij menu">✕</button>
        </div>
        <nav className="mobile-drawer__nav">

          {/* ─── 🩺 ANATOMIA ─── */}
          <AccordionGroup label="🩺 ANATOMIA" defaultExpanded={false}>
            {/* Keyed by label: every anatomy domain links to the same route. */}
            {anatomyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🫀 FIZJOLOGIA ─── */}
          <Link href="/theory/fizjologia" className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
            <Activity className="inline-block w-4 h-4 mr-2" aria-hidden="true" /> FIZJOLOGIA
          </Link>

          <div className="mobile-drawer__divider" />

          {/* ─── 🌿 BIOLOGIA ─── */}
          <AccordionGroup label="🌿 BIOLOGIA" defaultExpanded={false}>
            {biologyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
                {l.label}
              </Link>
            ))}
            <Link href="/matura/biologia" className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
              📝 Arkusze CKE — Biologia
            </Link>
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🧪 CHEMIA ─── */}
          <div className="drawer-section-label">🧪 CHEMIA — Matura Formuła 2015</div>
          <SubAccordion label="Chemia nieorganiczna i obliczenia">
            {chemistryInorganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <SubAccordion label="Chemia organiczna">
            {chemistryOrganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <Link href="/matura/chemia" className="drawer-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
            📝 Arkusze CKE — Chemia
          </Link>

          <div className="mobile-drawer__divider" />
          <Link href="/" className="drawer-link drawer-link--home focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600" onClick={onClose}>
            🏠 Strona główna
          </Link>
        </nav>
      </aside>
    </>
  );
}
