"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/* ─── Desktop dropdown ─── */
function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="topbar-dropdown"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="topbar-link topbar-dropdown__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <span className="topbar-dropdown__arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="topbar-dropdown__menu">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="topbar-dropdown__item"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Accordion group inside mobile drawer ─── */
function AccordionGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="drawer-accordion">
      <button
        className="drawer-accordion__trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="drawer-accordion__chevron">
          {expanded ? "▲" : "▼"}
        </span>
      </button>
      <div
        className="drawer-accordion__body"
        style={{
          maxHeight: expanded ? children ? "300px" : "0" : "0",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="drawer-accordion__inner">{children}</div>
      </div>
    </div>
  );
}

/* ─── Mobile drawer ─── */
function MobileDrawer({
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
          <span className="mobile-drawer__title">Nawigacja</span>
          <button className="mobile-drawer__close" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {/* Alphabetical subject list */}
          <AccordionGroup label="Anatomia (Podręcznik Akademicki)">
            <Link
              href="/textbook"
              className="drawer-link"
              onClick={onClose}
            >
              🦴 Osteologia i Artrologia
            </Link>
            <Link
              href="/textbook?domain=myology"
              className="drawer-link"
              onClick={onClose}
            >
              💪 Miologia
            </Link>
            <Link
              href="/textbook?domain=nervous"
              className="drawer-link"
              onClick={onClose}
            >
              🧠 Układ Nerwowy
            </Link>
            <Link
              href="/textbook?domain=endocrine"
              className="drawer-link"
              onClick={onClose}
            >
              🔬 Układ Dokrewny
            </Link>
            <Link
              href="/textbook?domain=cardiovascular-respiratory"
              className="drawer-link"
              onClick={onClose}
            >
              ❤️ Układ Krążenia i Oddechowy
            </Link>
            <Link
              href="/textbook?domain=digestive"
              className="drawer-link"
              onClick={onClose}
            >
              🍇 Układ Pokarmowy
            </Link>
            <Link
              href="/textbook?domain=urinary-reproductive"
              className="drawer-link"
              onClick={onClose}
            >
              🫘 Układ Moczowo-Płciowy
            </Link>
            <Link
              href="/textbook?domain=sensory"
              className="drawer-link"
              onClick={onClose}
            >
              👁️ Narządy Zmysłów
            </Link>
          </AccordionGroup>

          <AccordionGroup label="Biologia (Formuła 2015)">
            <Link
              href="/matura/biologia"
              className="drawer-link"
              onClick={onClose}
            >
              🧬 Arkusze CKE 2015-2024
            </Link>
            <Link
              href="/matura/biologia?mode=topic"
              className="drawer-link"
              onClick={onClose}
            >
              📂 Zadania według działów
            </Link>
          </AccordionGroup>

          <AccordionGroup label="Chemia (Formuła 2015)">
            <Link
              href="/matura/chemia"
              className="drawer-link"
              onClick={onClose}
            >
              ⚗️ Arkusze CKE 2015-2024
            </Link>
            <Link
              href="/matura/chemia?mode=year"
              className="drawer-link"
              onClick={onClose}
            >
              📂 Arkusz po roku
            </Link>
          </AccordionGroup>

          {/* Direct links */}
          <div className="mobile-drawer__divider" />
          <Link href="/" className="drawer-link drawer-link--home" onClick={onClose}>
            🏠 Strona główna
          </Link>
        </nav>
      </aside>
    </>
  );
}

/* ─── Topbar ─── */
export function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="l-topbar">
        <div className="l-topbar-container">
          {/* Hamburger — visible on mobile only */}
          <button
            className="topbar-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Otwórz menu nawigacji"
          >
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
          </button>

          <Link href="/" className="logo">
            <span className="logo-text">Medycyna</span>
          </Link>

          {/* Desktop dropdowns — hidden on mobile */}
          <div className="topbar-links">
            <DropdownMenu
              label="Podręczniki Akademickie"
              items={[{ href: "/textbook", label: "Anatomia" }]}
            />

            <DropdownMenu
              label="Podręczniki Maturalne"
              items={[
                { href: "/matura/biologia", label: "Biologia" },
                { href: "/matura/chemia", label: "Chemia" },
              ]}
            />

            <DropdownMenu
              label="Trening Maturalny CKE 2015"
              items={[
                { href: "/matura/biologia?mode=year", label: "Arkusz po roku" },
                { href: "/matura/biologia?mode=topic", label: "Zadania wg działów" },
                { href: "/matura/chemia?mode=year", label: "Chemia - Arkusz po roku" },
              ]}
            />
          </div>
        </div>
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
