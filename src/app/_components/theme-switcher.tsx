

"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes = ["light", "dark"] as const;
type Mode = typeof modes[number];

function getSystemTheme(): Mode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const ThemeSwitcher = () => {
  const [mode, setMode] = useState<Mode>("light");
  const [mounted, setMounted] = useState(false);

  // On mount, set mode from localStorage or system
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Mode | null;
    const initial = stored === "dark" || stored === "light" ? stored : getSystemTheme();
    setMode(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    document.documentElement.setAttribute("data-mode", initial);
    setMounted(true);
  }, []);

  // When mode changes, update localStorage and html class
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode, mounted]);

  // Toggle between light and dark
  const handleSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button onClick={handleSwitch} aria-label="Toggle theme">
      {mode === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
