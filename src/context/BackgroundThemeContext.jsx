"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { backgroundThemes } from "@/lib/threeConfig";

const BackgroundThemeContext = createContext({
  theme: "ember",
  setTheme: () => {},
});

export function BackgroundThemeProvider({ children }) {
  const [theme, setTheme] = useState("ember");

  // Restore the saved choice once on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem("bg-theme");
    if (saved && backgroundThemes[saved]) setTheme(saved);
  }, []);

  // Reflect the theme on <html> so CSS can restyle the page base, and persist.
  useEffect(() => {
    document.documentElement.setAttribute("data-bg-theme", theme);
    window.localStorage.setItem("bg-theme", theme);
  }, [theme]);

  return (
    <BackgroundThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </BackgroundThemeContext.Provider>
  );
}

export const useBackgroundTheme = () => useContext(BackgroundThemeContext);
