"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const LINKS = [
  { label: "About", id: "about-section" },
  { label: "AI Focus", id: "ai-focus-section" },
  { label: "Skills", id: "skills-section" },
  { label: "Projects", id: "project-section" },
  { label: "Experience", id: "experience-section" },
  { label: "Contact", id: "contact-section" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled || open
            ? "glass-strong px-3 py-1.5 shadow-lg shadow-black/30 sm:px-4"
            : "border border-transparent px-4 py-2.5 sm:px-5"
        }`}
        style={{
          width: "92%",
          maxWidth: scrolled && !open ? "46rem" : "72rem",
          transitionProperty: "max-width, padding, background-color, box-shadow, border-color",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover-cursor flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span
            className={`glow-orange grid place-items-center rounded-full bg-accent text-sm font-bold text-white transition-all duration-500 ${
              scrolled ? "h-7 w-7" : "h-8 w-8"
            }`}
          >
            G
          </span>
          <span
            className={`hidden overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:inline-block ${
              scrolled ? "max-w-0 opacity-0" : "max-w-[100px] opacity-100"
            }`}
          >
            Ganesh
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="hover-cursor rounded-full px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={() => go("contact-section")}
            className={`hover-cursor btn-accent rounded-full text-sm font-medium transition-all duration-500 ${
              scrolled ? "px-3.5 py-1.5" : "px-4 py-2 sm:px-5"
            }`}
          >
            Let&apos;s talk
          </button>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="hover-cursor grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass-strong mx-auto mt-2 flex flex-col gap-1 rounded-2xl p-2 shadow-xl shadow-black/40 md:hidden"
            style={{ width: "min(92%, 72rem)" }}
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="hover-cursor rounded-xl px-4 py-3 text-left text-base text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
