"use client";

import ThreeBackground from "./ThreeBackground";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

/** Renders the particle background for the currently selected theme. */
export default function ThemedBackground() {
  const { theme } = useBackgroundTheme();
  const active = backgroundThemes[theme] ?? backgroundThemes.ember;
  return <ThreeBackground config={active.config} />;
}
