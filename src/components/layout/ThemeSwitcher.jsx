"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { backgroundThemes } from "@/lib/threeConfig";
import { useBackgroundTheme } from "@/context/BackgroundThemeContext";

/**
 * Navbar theme picker: shows the available background themes as swatches;
 * clicking one completely swaps the backdrop (3D scene + page tint).
 *
 * On md+ the picker pops open as a small dropdown next to the trigger.
 * On sm and below the panel is wider and stretches across the navbar so it
 * behaves like the mobile menu list — same width, same item shape, same
 * animation. This avoids a cramped popover on small screens.
 */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useBackgroundTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Shared list rendered inside both the popover and the wide panel.
  const themeList = (itemClass) => (
    <>
      <p className="px-2 pb-1 pt-1 text-xs font-medium uppercase tracking-widest text-foreground/50">
        Background
      </p>
      {Object.entries(backgroundThemes).map(([key, t]) => {
        const active = key === theme;
        return (
          <button
            key={key}
            type="button"
            onClick={() => {
              setTheme(key);
              setOpen(false);
            }}
            className={
              itemClass ||
              `hover-cursor flex w-full items-center gap-3 rounded-xl px-2 py-2 text-sm transition-colors ${
                active
                  ? "bg-white/10 text-foreground"
                  : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
              }`
            }
          >
            <span
              className="h-6 w-6 shrink-0 rounded-full border border-white/20"
              style={{
                background: `linear-gradient(135deg, ${t.swatch[0]}, ${t.swatch[1]})`,
              }}
            />
            <span className="flex-1 text-left">{t.label}</span>
            {active && <Check className="h-4 w-4 text-accent" />}
          </button>
        );
      })}
    </>
  );

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Change background theme"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="hover-cursor relative grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground transition-colors hover:bg-white/10"
      >
        <Palette className="h-[18px] w-[18px] text-accent" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* sm and below: identical to the mobile menu panel — same
                animation, same width (min(92%, 72rem)), same item shape
                (px-4 py-3 text-base rounded-xl), same glass-strong card. */}
            <motion.div
              key="themes-mobile"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="glass-strong fixed inset-x-0 top-[5rem] z-40 mx-auto flex max-h-[60vh] flex-col gap-1 overflow-y-auto rounded-2xl p-2 shadow-xl shadow-black/40 md:hidden"
              style={{ width: "min(92%, 72rem)" }}
            >
              {themeList(
                "hover-cursor flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
              )}
            </motion.div>

            {/* md+: compact popover next to the trigger */}
            <motion.div
              key="themes-desktop"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="glass-strong absolute right-0 top-full z-50 mt-3 hidden w-48 rounded-2xl p-2 shadow-xl shadow-black/40 md:block"
            >
              {themeList()}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}