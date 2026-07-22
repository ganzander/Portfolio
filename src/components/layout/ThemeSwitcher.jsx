"use client";

import { useMemo } from "react";
import { Palette } from "lucide-react";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useBackgroundTheme();

  const themeKeys = useMemo(
    () => Object.keys(backgroundThemes).filter((k) => k !== theme),
    [theme]
  );

  const handleClick = () => {
    const randomKey =
      themeKeys[Math.floor(Math.random() * themeKeys.length)];
    setTheme(randomKey);
  };

  return (
    <button
      type="button"
      aria-label="Change background theme"
      onClick={handleClick}
      className="hover-cursor relative grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground transition-colors hover:bg-white/10"
    >
      <Palette className="h-[18px] w-[18px] text-accent" />
    </button>
  );
}