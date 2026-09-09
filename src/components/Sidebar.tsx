"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Box, BookOpen } from "lucide-react";

import type { SidebarNavigation } from "@/server/models";
import { useI18n } from "@/i18n";
import { HIDE_SCROLLBAR } from "@/lib/utils";

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
        className="sidebar-accordion__trigger focus-ring"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-accordion__chevron" aria-hidden="true">
          {expanded ? "▲" : "▼"}
        </span>
      </button>
      {/* grid-template-rows animates height without a magic max-height cap,
          so long link lists can never get clipped. */}
      <div
        className={`sidebar-accordion__body ${expanded ? "sidebar-accordion__body--open" : ""}`}
        style={{ opacity: expanded ? 1 : 0 }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="sidebar-accordion__inner">{children}</div>
        </div>
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
        className="sidebar-sub-accordion__trigger focus-ring"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{label}</span>
        <span className="sidebar-sub-accordion__chevron" aria-hidden="true">
          {expanded ? "–" : "+"}
        </span>
      </button>
      <div
        className={`sidebar-sub-accordion__body ${expanded ? "sidebar-sub-accordion__body--open" : ""}`}
        style={{ opacity: expanded ? 1 : 0 }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="sidebar-sub-accordion__inner">{children}</div>
        </div>
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
    physiology: physiologyLinks,
    biology: biologyLinks,
    chemistryInorganic: chemistryInorganicLinks,
    chemistryOrganic: chemistryOrganicLinks,
  } = navigation;

  const { t } = useI18n();
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep focus inside the drawer while it is open.
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${open ? "drawer-backdrop--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — `inert` removes it (and its focusable links) from the a11y
          tree while closed, instead of aria-hidden which keeps them focusable. */}
      <aside
        ref={drawerRef}
        inert={!open}
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
      >
        <div className="mobile-drawer__header">
          <Link href="/" className="drawer-brand focus-ring rounded-sm" onClick={onClose}>
            {t.nav.brand}
          </Link>
          <button
            ref={closeButtonRef}
            className="mobile-drawer__close focus-ring rounded-sm"
            onClick={onClose}
            aria-label={t.sidebar.closeMenu}
          >
            ✕
          </button>
        </div>
        <nav className={`mobile-drawer__nav ${HIDE_SCROLLBAR} overscroll-contain`}>

          {/* ─── Top-level sections: the 3D atlas vs. the textbook ─── */}
          <Link href="/" className="drawer-link drawer-link--section focus-ring" onClick={onClose}>
            <Box className="inline-block w-4 h-4 mr-2" aria-hidden="true" /> {t.nav.atlas.toUpperCase()}
          </Link>
          <Link
            href="/theory"
            className="drawer-link drawer-link--section focus-ring"
            onClick={onClose}
          >
            <BookOpen className="inline-block w-4 h-4 mr-2" aria-hidden="true" /> {t.nav.textbook.toUpperCase()}
          </Link>

          <div className="mobile-drawer__divider" />

          {/* ─── 🩺 ANATOMIA ─── */}
          <AccordionGroup label={`🩺 ${t.sidebar.anatomy}`} defaultExpanded={false}>
            {anatomyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-ring" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🫀 FIZJOLOGIA ─── */}
          <AccordionGroup label={`🫀 ${t.sidebar.physiology}`} defaultExpanded={false}>
            {physiologyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-ring" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🌿 BIOLOGIA ─── */}
          <AccordionGroup label={`🌿 ${t.sidebar.biology}`} defaultExpanded={false}>
            {biologyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-ring" onClick={onClose}>
                {l.label}
              </Link>
            ))}
            <Link href="/matura/biologia" className="drawer-link focus-ring" onClick={onClose}>
              📝 {t.sidebar.examSheetsBiology}
            </Link>
          </AccordionGroup>

          <div className="mobile-drawer__divider" />

          {/* ─── 🧪 CHEMIA ─── */}
          <div className="drawer-section-label">🧪 {t.sidebar.chemistry}</div>
          <SubAccordion label={t.sidebar.chemistryInorganic}>
            {chemistryInorganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-ring" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <SubAccordion label={t.sidebar.chemistryOrganic}>
            {chemistryOrganicLinks.map((l) => (
              <Link key={l.label} href={l.href} className="drawer-link focus-ring" onClick={onClose}>
                {l.label}
              </Link>
            ))}
          </SubAccordion>
          <Link href="/matura/chemia" className="drawer-link focus-ring" onClick={onClose}>
            📝 {t.sidebar.examSheetsChemistry}
          </Link>

          <div className="mobile-drawer__divider" />
          <Link href="/" className="drawer-link drawer-link--home focus-ring" onClick={onClose}>
            🏠 {t.sidebar.home}
          </Link>
        </nav>
      </aside>
    </>
  );
}
