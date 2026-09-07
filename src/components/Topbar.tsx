"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SidebarDrawer } from "./Sidebar";
import { useTheme } from "@/hooks/useTheme";
import { GlobalSearch } from "./GlobalSearch";
import { Sun, Moon, Box, BookOpen } from "lucide-react";
import type { SidebarNavigation } from "@/server/models";
import { useI18n } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Topbar({ navigation }: { navigation: SidebarNavigation }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();
  const { t } = useI18n();
  const pathname = usePathname();

  // The atlas lives at the root; everything textbook-shaped lives under /theory.
  const onAtlas = pathname === "/";
  const onTheory = pathname.startsWith("/theory") || pathname.startsWith("/matura");

  return (
    <>
      <div className="l-topbar">
        <div className="l-topbar-container">
          <button
            className="topbar-hamburger focus-ring"
            onClick={() => setDrawerOpen(true)}
            aria-label={t.topbar.openMenu}
          >
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
            <span className="topbar-hamburger__line" />
          </button>

          {/* Hidden below 640px so the search field gets its width back — see
              the rule in globals.css. A Tailwind `max-sm:hidden` cannot do it:
              utilities live in a cascade layer and lose to the unlayered
              `.l-topbar-container .logo` rule regardless of specificity. */}
          <Link href="/" className="logo focus-ring rounded-sm">
            <span className="logo-text">{t.nav.brand}</span>
          </Link>

          <nav className="topbar-nav" aria-label={t.topbar.mainNav}>
            <Link
              href="/"
              className={`topbar-nav__link focus-ring ${onAtlas ? "is-active" : ""}`}
              aria-current={onAtlas ? "page" : undefined}
            >
              <Box className="w-4 h-4" aria-hidden="true" />
              <span>{t.nav.atlas}</span>
            </Link>
            <Link
              href="/theory"
              className={`topbar-nav__link focus-ring ${onTheory ? "is-active" : ""}`}
              aria-current={onTheory ? "page" : undefined}
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>{t.nav.textbook}</span>
            </Link>
          </nav>

          <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-2 sm:flex-none">
            <GlobalSearch />
            <LanguageSwitcher />
            <a
              href="https://buycoff.ee/"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-pill w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900 text-xs font-bold transition-colors focus-ring"
              title={t.topbar.supportTitle}
              aria-label={t.topbar.supportAria}
            >
              <span aria-hidden="true">☕</span>
            </a>

            <button
              onClick={toggleTheme}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-zinc-200 dark:bg-zinc-800 p-1 cursor-pointer transition-colors duration-300 focus-ring"
              aria-label={t.topbar.toggleTheme}
            >
              {/* Icons Layer */}
              <div className="flex w-full justify-between px-0.5 text-zinc-400 dark:text-zinc-500 z-10 pointer-events-none">
                <Sun className={`h-3.5 w-3.5 transition-colors duration-300 ${!dark ? 'text-zinc-900' : 'text-zinc-600'}`} />
                <Moon className={`h-3.5 w-3.5 transition-colors duration-300 ${dark ? 'text-zinc-100' : 'text-zinc-400'}`} />
              </div>

              {/* Smooth Sliding Circle */}
              <span
                className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white dark:bg-zinc-950 shadow-sm transition-transform duration-300 ease-in-out transform ${
                  dark ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <SidebarDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navigation={navigation}
      />
    </>
  );
}
