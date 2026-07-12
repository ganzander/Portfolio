/**
 * ── Site identity config ──────────────────────────────────────────────────
 * Single source of truth for recruiter-facing facts: name, role, links,
 * resume and headline stats. Every section reads from here — update once.
 *
 * TODO(ganesh): verify the social URLs and drop your resume PDF into
 * /public/resume.pdf (or change resumeUrl).
 */
export const site = {
  name: "Ganesh Kumar Mangla",
  role: "Full Stack Developer",
  tagline:
    "Full Stack Developer specializing in Next.js, AI integrations and interactive 3D web experiences.",
  location: "India · open to remote",
  availability: "Open to full-time & freelance",
  email: "ganesh.mangla@radence.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ganesh-mangla",
    linkedin: "https://www.linkedin.com/in/ganesh-mangla",
    twitter: "https://x.com/ganesh_mangla",
  },
};

/** Headline numbers shown in the Highlights band (GSAP count-up). */
export const stats = [
  { value: 4, suffix: "+", label: "Products shipped to production" },
  { value: 4, suffix: "", label: "Companies worked with" },
  { value: 15, suffix: "+", label: "Technologies used in production" },
  { value: 3, suffix: "", label: "AI-powered apps live today" },
];

/** How-I-work value props (Highlights section cards). */
export const principles = [
  {
    title: "Ship end to end",
    text: "From Figma to deployed URL — frontend, backend, auth, data and CI/CD, owned as one piece.",
  },
  {
    title: "AI where it matters",
    text: "Gemini, Groq and AWS Transcribe integrated into real products people use — not demos.",
  },
  {
    title: "Performance is a feature",
    text: "60fps scroll experiences, code-split three.js scenes and reduced-motion fallbacks by default.",
  },
];
