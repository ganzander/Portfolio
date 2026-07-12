"use client";

import { ArrowUpRight, Award, BadgeCheck, Calendar } from "lucide-react";
import certifications from "@/lib/certifications";

export default function CertificationsSection() {
  return (
    <section
      id="certifications-section"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        data-parallax="0.12"
        className="accent-orb-soft pointer-events-none absolute -left-40 top-16 h-[24rem] w-[24rem] rounded-full blur-[120px]"
      />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div data-reveal className="mb-10 flex flex-col gap-3 md:mb-14">
          <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
            Certifi<span className="text-gradient">cations</span>
          </h2>
        </div>

        <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="glass group relative flex flex-col gap-5 overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[rgb(var(--accent-rgb)/0.5)] hover:shadow-2xl hover:shadow-[0_30px_60px_-15px_rgb(var(--accent-rgb)/0.2)] md:p-7"
            >
              {/* accent light-bar across the top */}
              <span className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30 transition-all duration-500 group-hover:inset-x-2 group-hover:opacity-100" />

              {/* ghost index numeral */}
              <span
                aria-hidden="true"
                className="zentry pointer-events-none absolute -top-3 right-5 select-none text-[5.5rem] leading-none text-white/[0.045] transition-colors duration-500 group-hover:text-[rgb(var(--accent-rgb)/0.1)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* corner glow */}
              <div className="accent-orb pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                {/* seal emblem with spinning conic ring on hover */}
                <span className="relative grid h-14 w-14 shrink-0 place-items-center">
                  <span className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,transparent_10%,var(--accent),transparent_60%)] opacity-0 transition-opacity duration-500 [animation:spin_3s_linear_infinite] group-hover:opacity-100" />
                  <span className="absolute inset-[2px] rounded-[14px] border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.1)] backdrop-blur" />
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="relative h-8 w-8 object-contain"
                    />
                  ) : (
                    <Award className="relative h-6 w-6 text-accent transition-transform duration-500 group-hover:scale-110" />
                  )}
                </span>

                <div className="min-w-0 pr-10">
                  <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                    {cert.title}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-foreground/55">
                    <span className="inline-flex items-center gap-1.5">
                      <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-foreground/40">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </span>
                  </p>
                </div>
              </div>

              {/* dashed separator — certificate feel */}
              <div className="relative border-t border-dashed border-white/15" />

              <div className="relative mt-auto flex items-end justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-foreground/65 transition-colors duration-300 group-hover:border-[rgb(var(--accent-rgb)/0.3)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-cursor inline-flex shrink-0 items-center gap-1 rounded-full border border-[rgb(var(--accent-rgb)/0.4)] bg-[rgb(var(--accent-rgb)/0.1)] px-3.5 py-1.5 text-xs font-medium text-accent transition-all hover:bg-[rgb(var(--accent-rgb)/0.25)] hover:shadow-lg hover:shadow-[0_8px_20px_-6px_rgb(var(--accent-rgb)/0.5)]"
                  >
                    Verify
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[11px] text-foreground/35">
                    Credential on request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
