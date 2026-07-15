"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import HeroObject from "../three/HeroObject";
import { site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-12">
      {/* ambient glows (parallax) */}
      <div
        data-parallax="0.25"
        className="accent-orb pointer-events-none absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full blur-[120px]"
      />
      <div
        data-parallax="-0.2"
        className="accent-orb-soft pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-[120px]"
      />

      <div className="relative z-10 mx-auto h-full w-[90%] max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center space-y-6 px-4 text-center md:w-1/2 md:items-start md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-foreground/80"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              {site.availability}
              <span className="hidden items-center gap-1 text-foreground/50 sm:inline-flex">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="zentry text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-6xl lg:text-8xl"
            >
              Ganesh Kumar <span className="text-gradient">Mangla</span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="max-w-xl text-lg font-medium text-foreground/70 md:text-2xl"
            >
              {site.role} building production-ready AI agents, scalable backend
              systems, and LLM-powered applications.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("project-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover-cursor btn-accent rounded-full px-6 py-2 font-medium"
              >
                View Projects
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover-cursor rounded-full border border-black/15 bg-black/5 px-6 py-2 font-medium text-foreground backdrop-blur transition-all hover:bg-black/10 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Contact Me
              </Button>
              <Button
                asChild
                className="hover-cursor rounded-full border border-[rgb(var(--accent-rgb)/0.5)] bg-[rgb(var(--accent-rgb)/0.1)] px-6 py-2 font-medium text-[var(--accent-light)] transition-all hover:bg-[rgb(var(--accent-rgb)/0.2)]"
              >
                <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                  <FileText className="mr-1 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* quick links — the first thing a recruiter looks for */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-3 pt-2"
            >
              {[
                { href: site.socials.github, Icon: Github, label: "GitHub" },
                {
                  href: site.socials.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: `mailto:${site.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="hover-cursor grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-foreground/70 transition-all hover:border-[rgb(var(--accent-rgb)/0.6)] hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D centerpiece (three.js) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="relative mt-4 h-[300px] w-full sm:h-[380px] md:mt-0 md:h-[600px] md:w-1/2"
          >
            <div className="accent-orb absolute inset-10 rounded-full blur-3xl" />
            <HeroObject />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.6, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/50"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
