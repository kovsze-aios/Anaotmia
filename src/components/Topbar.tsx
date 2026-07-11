"use client";

import Link from "next/link";

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <div className="l-topbar">
      <div className="l-topbar-container">
        <button
          className="topbar-hamburger"
          onClick={onMenuToggle}
          aria-label="Otwórz menu nawigacji"
        >
          <span className="topbar-hamburger__line" />
          <span className="topbar-hamburger__line" />
          <span className="topbar-hamburger__line" />
        </button>

        <Link href="/" className="logo">
          <span className="logo-text">Medycyna</span>
        </Link>
      </div>
    </div>
  );
}
