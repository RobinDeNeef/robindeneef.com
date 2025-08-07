

"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = ["light", "dark", "system"] as const;
type Mode = typeof modes[number];

function getSystemTheme(): Mode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const ThemeSwitcher = () => {
  const [mode, setMode] = useState<Mode>("light");

  // On mount, set mode from localStorage or system
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Mode | null;
    const initial = stored === "dark" || stored === "light" ? stored : getSystemTheme();
    setMode(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    document.documentElement.setAttribute("data-mode", initial);
  }, []);

  // When mode changes, update localStorage and html class
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  // Cycle through modes
  const handleSwitch = () => {
    const idx = modes.indexOf(mode);
    const next = modes[(idx + 1) % modes.length];
    setMode(next === "system" ? getSystemTheme() : next);
  };

  return (
    <button onClick={handleSwitch} aria-label="Toggle theme">
      {mode === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
