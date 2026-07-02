"use client";

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const LINKS = [
  { label: "About", id: "about-section" },
  { label: "Projects", id: "project-section" },
  { label: "Experience", id: "experience-section" },
  { label: "Contact", id: "contact-section" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-black/30"
            : "border border-transparent"
        }`}
        style={{ width: "min(92%, 72rem)" }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover-cursor flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="glow-orange grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold text-white">
            G
          </span>
          <span className="hidden sm:inline">Ganesh</span>
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
            className="hover-cursor btn-accent rounded-full px-5 py-2 text-sm font-medium"
          >
            Let&apos;s talk
          </button>
        </div>
      </nav>
    </header>
  );
}
