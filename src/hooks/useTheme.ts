"use client";

import { useState, useEffect } from "react";

const THEME_KEY = "theme";

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    setDark(html.classList.contains("dark"));

    const obs = new MutationObserver(() => {
      setDark(html.classList.contains("dark"));
    });
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const next = !html.classList.contains("dark");
    html.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // localStorage can be unavailable (private mode, sandboxed iframe).
    }
    setDark(next);
  };

  return { dark, toggleTheme };
}
