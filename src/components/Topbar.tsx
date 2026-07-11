import Link from "next/link";

export function Topbar() {
  return (
    <div className="l-topbar">
      <div className="l-topbar-container">
        <Link href="/" className="logo">
          <span className="logo-text">Medycyna</span>
        </Link>

        <div className="topbar-links">
          <Link href="/textbook" className="topbar-link topbar-textbook">
            Podręcznik
          </Link>

          <a
            href="https://www.buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-coffee"
            title="Postaw kawę"
          >
            ☕
          </a>
        </div>
      </div>
    </div>
  );
}
