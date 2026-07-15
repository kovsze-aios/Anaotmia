"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    if (next) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setDark(next);
  };

  return { dark, toggleTheme };
}
