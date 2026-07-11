"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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

export function Topbar() {
  return (
    <div className="l-topbar">
      <div className="l-topbar-container">
        <Link href="/" className="logo">
          <span className="logo-text">Medycyna</span>
        </Link>

        <div className="topbar-links">
          {/* Academic textbooks dropdown */}
          <DropdownMenu
            label="Podręczniki Akademickie"
            items={[
              { href: "/textbook", label: "Anatomia" },
            ]}
          />

          {/* Matura dropdown */}
          <DropdownMenu
            label="Podręczniki Maturalne"
            items={[
              { href: "/matura/biologia", label: "Biologia" },
              { href: "/matura/chemia", label: "Chemia" },
            ]}
          />

          {/* Exam training dropdown */}
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
  );
}
