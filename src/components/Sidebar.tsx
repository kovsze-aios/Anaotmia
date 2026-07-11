"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/* ─── Accordion group ─── */
function AccordionGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

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
          maxHeight: expanded ? "600px" : "0",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="sidebar-accordion__inner">{children}</div>
      </div>
    </div>
  );
}

/* ─── Sidebar nav links ─── */
const anatomyLinks = [
  { href: "/textbook?domain=osteology", label: "🦴 Osteologia i Artrologia" },
  { href: "/textbook?domain=myology", label: "💪 Miologia" },
  { href: "/textbook?domain=nervous", label: "🧠 Układ Nerwowy" },
  { href: "/textbook?domain=endocrine", label: "🔬 Układ Dokrewny" },
  { href: "/textbook?domain=cardiovascular-respiratory", label: "❤️ Układ Krążenia i Oddechowy" },
  { href: "/textbook?domain=digestive", label: "🍇 Układ Pokarmowy" },
  { href: "/textbook?domain=urinary-reproductive", label: "🫘 Układ Moczowo-Płciowy" },
  { href: "/textbook?domain=sensory", label: "👁️ Narządy Zmysłów" },
];

const biologyLinks = [
  { href: "/theory/biologia", label: "🧬 Cytologia" },
  { href: "/theory/biologia", label: "🧬 Genetyka" },
  { href: "/theory/biologia", label: "⚡ Metabolizm" },
  { href: "/theory/biologia", label: "🌿 Botanika" },
  { href: "/theory/biologia", label: "🐾 Zoologia" },
  { href: "/theory/biologia", label: "🧍 Anatomia i fizjologia człowieka" },
  { href: "/theory/biologia", label: "🌍 Ekologia" },
];

const chemistryLinks = [
  { href: "/theory/chemia", label: "⚛️ Budowa atomu" },
  { href: "/theory/chemia", label: "⚖️ Stechiometria" },
  { href: "/theory/chemia", label: "🧪 Chemia nieorganiczna" },
  { href: "/theory/chemia", label: "🔬 Chemia organiczna" },
  { href: "/theory/chemia", label: "📊 Chemia fizyczna" },
  { href: "/theory/chemia", label: "⚗️ Reakcje i mechanizmy" },
];

/* ─── Sidebar panel (desktop persistent + mobile drawer) ─── */
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop: always-visible sidebar */}
      <aside className="global-sidebar global-sidebar--desktop">
        <div className="global-sidebar__header">
          <Link href="/" className="global-sidebar__brand">
            Medycyna
          </Link>
        </div>
        <nav className="global-sidebar__nav">
          <AccordionGroup label="Anatomia (Podręcznik Akademicki)">
            {anatomyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="sidebar-link">
                {l.label}
              </Link>
            ))}
          </AccordionGroup>
          <AccordionGroup label="Biologia (Formuła 2015)">
            {biologyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="sidebar-link">
                {l.label}
              </Link>
            ))}
          </AccordionGroup>
          <AccordionGroup label="Chemia (Formuła 2015)">
            {chemistryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="sidebar-link">
                {l.label}
              </Link>
            ))}
          </AccordionGroup>

          <div className="global-sidebar__divider" />
          <Link href="/" className="sidebar-link sidebar-link--home" onClick={onClose}>
            🏠 Strona główna
          </Link>
        </nav>
      </aside>

      {/* Mobile backdrop */}
      <div
        className={`drawer-backdrop ${open ? "drawer-backdrop--visible" : ""}`}
        onClick={onClose}
      />

      {/* Mobile drawer */}
      <aside
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__header">
          <Link href="/" className="global-sidebar__brand" onClick={onClose}>
            Medycyna
          </Link>
          <button className="mobile-drawer__close" onClick={onClose}>✕</button>
        </div>
        <nav className="mobile-drawer__nav">
          <AccordionGroup label="Anatomia (Podręcznik Akademicki)">
            {anatomyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>
          <AccordionGroup label="Biologia (Formuła 2015)">
            {biologyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>
          <AccordionGroup label="Chemia (Formuła 2015)">
            {chemistryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="drawer-link" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>
          <div className="mobile-drawer__divider" />
          <Link href="/" className="drawer-link drawer-link--home" onClick={onClose}>
            🏠 Strona główna
          </Link>
        </nav>
      </aside>
    </>
  );
}
