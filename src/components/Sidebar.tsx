"use client";

import Link from "next/link";
import { useState } from "react";

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

/* ─── Nav links ─── */
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
  { href: "/theory/biologia", label: "🧍 Anatomia i fizjologia człowieka" },
];

const chemistryLinks = [
  { href: "/theory/chemia", label: "⚛️ Budowa atomu" },
  { href: "/theory/chemia", label: "⚖️ Stechiometria" },
  { href: "/theory/chemia", label: "🧪 Chemia nieorganiczna" },
  { href: "/theory/chemia", label: "🔬 Chemia organiczna" },
];

/* ─── Mobile drawer only (no persistent desktop sidebar) ─── */
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
