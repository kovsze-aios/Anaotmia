"use client";

import Link from "next/link";
import { useState } from "react";

import { getDomains } from "@/data/textbook";
import { biologiaTheory } from "@/data/biologia/theory";
import { chemiaTheory } from "@/data/chemia/theory";

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
        className="sidebar-accordion__trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-accordion__chevron">
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
        className="sidebar-sub-accordion__trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-sub-accordion__chevron">
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

/* ─── Nav links ─── */
const anatomyLinks = getDomains().map((domain) => ({
  href: `/theory/anatomia`,
  label: `${domain.icon} ${domain.title}`,
}));

const biologyLinks = biologiaTheory.map((domain) => ({
  href: "/theory/biologia",
  label: `${domain.icon} ${domain.title}`,
}));

const chemistryLinks = chemiaTheory.map((domain) => ({
  id: domain.id,
  href: "/theory/chemia",
  label: `${domain.icon} ${domain.title}`,
}));

const chemistryInorganicLinks = chemistryLinks.filter(l => l.label.includes("nieorganiczna") || l.label.includes("atomu") || l.label.includes("Stechiometria"));
const chemistryOrganicLinks = chemistryLinks.filter(l => l.label.includes("organiczna"));

/* ─── Mobile drawer ─── */
export function SidebarDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${open ? "drawer-backdrop--visible" : ""}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__header">
          <Link href="/" className="drawer-brand" onClick={onClose}>
            Medycyna
          </Link>
          <button className="mobile-drawer__close" onClick={onClose} aria-label="Zamknij menu">✕</button>
        </div>
        <nav className="mobile-drawer__nav">

          {/* ─── 🩺 ANATOMIA ─── */}
          <AccordionGroup label="🩺 ANATOMIA" defaultExpanded={false}>
            {anatomyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🌿 BIOLOGIA ─── */}
          <AccordionGroup label="🌿 BIOLOGIA" defaultExpanded={false}>
            {biologyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
            <Link href="/matura/biologia" className="drawer-link" onClick={onClose}>
              📝 Arkusze CKE — Biologia
            </Link>
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🧪 CHEMIA ─── */}
          <div className="drawer-section-label">🧪 CHEMIA — Matura Formuła 2015</div>
          <SubAccordion label="Chemia nieorganiczna i obliczenia">
            {chemistryInorganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <SubAccordion label="Chemia organiczna">
            {chemistryOrganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <Link href="/matura/chemia" className="drawer-link" onClick={onClose}>
            📝 Arkusze CKE — Chemia
          </Link>

          <div className="mobile-drawer__divider" />
          <Link href="/" className="drawer-link drawer-link--home" onClick={onClose}>
            🏠 Strona główna
          </Link>
        </nav>
      </aside>
    </>
  );
}
