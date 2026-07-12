"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { site } from "@/lib/site";

const NAV = [
  { label: "About", id: "about-section" },
  { label: "Skills", id: "skills-section" },
  { label: "Projects", id: "project-section" },
  { label: "Experience", id: "experience-section" },
  { label: "Certifications", id: "certifications-section" },
  { label: "Contact", id: "contact-section" },
];

export default function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover-cursor flex items-center gap-2 text-lg font-semibold"
          >
            <span className="glow-orange grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold text-white">
              G
            </span>
            {site.name}
          </button>
          <p className="mt-2 text-sm text-foreground/50">
            {site.role} · {site.location}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="hover-cursor mt-1 inline-block text-sm text-accent hover:underline"
          >
            {site.email}
          </a>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
          {NAV.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="hover-cursor transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { href: site.socials.github, Icon: Github, label: "GitHub" },
            { href: site.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: site.socials.twitter, Icon: Twitter, label: "Twitter" },
            { href: `mailto:${site.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="hover-cursor grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground/60 transition-all hover:border-[rgb(var(--accent-rgb)/0.6)] hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-foreground/35">
        © {new Date().getFullYear()} {site.name} · Built with Next.js, GSAP
        &amp; three.js
      </div>
    </footer>
  );
}
