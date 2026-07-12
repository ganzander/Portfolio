import { Monitor, Server, Bot, Wrench } from "lucide-react";

/**
 * ── Skills config ─────────────────────────────────────────────────────────
 * Single source of truth for the Skills section. Add/remove/edit skills here
 * and both the 3D globe and the category cards update automatically.
 *
 * Per skill:
 *   name        – label (tooltip + dialog title)
 *   icon        – svg path under /public (globe sprite + chips + dialog)
 *   description – one-liner shown in the dialog when the icon is clicked
 *   core        – true → bigger sprite on the globe with an accent glow ring
 */
export const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    blurb: "Interfaces that feel alive",
    skills: [
      {
        name: "React",
        icon: "/tech/react.svg",
        core: true,
        description:
          "My component workhorse — hooks, context, and performance-tuned rendering for complex interactive UIs.",
      },
      {
        name: "Next.js",
        icon: "/tech/nextjs-w.svg",
        core: true,
        description:
          "App-router, server components, API routes and image optimization — my default full-stack framework.",
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwindcss.svg",
        description:
          "Utility-first styling for fast, consistent, responsive design systems without leaving the markup.",
      },
      {
        name: "GSAP",
        icon: "/tech/gsap.svg",
        core: true,
        description:
          "ScrollTrigger pins, scrubbed timelines and micro-interactions — the engine behind this site's scrollytelling.",
      },
      {
        name: "Framer Motion",
        icon: "/tech/framer.svg",
        description:
          "Declarative React animations — layout transitions, gestures and presence animations.",
      },
      {
        name: "Three.js",
        icon: "/tech/three.svg",
        core: true,
        description:
          "WebGL scenes, shaders and particle systems — like the themed backgrounds and this very globe.",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    blurb: "APIs built to scale",
    skills: [
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
        core: true,
        description:
          "Event-driven server runtime for APIs, workers and realtime services.",
      },
      {
        name: "Express.js",
        icon: "/tech/express.svg",
        description:
          "Minimal, middleware-driven HTTP framework for REST services and gateways.",
      },
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
        core: true,
        description:
          "Document modelling, aggregation pipelines and Mongoose schemas for flexible data.",
      },
      {
        name: "REST APIs",
        icon: "/tech/api.svg",
        description:
          "Well-shaped resources, auth flows, pagination and error contracts that front-ends love.",
      },
      {
        name: "FastAPI",
        icon: "/tech/fastapi.svg",
        description:
          "Typed Python APIs with automatic docs — used for HRMS backend work at Torit.",
      },
      {
        name: "JWT / OAuth",
        icon: "/tech/jwt.svg",
        description:
          "Token-based auth, Google sign-in and role-based access control done right.",
      },
    ],
  },
  {
    title: "AI & Cloud",
    icon: Bot,
    blurb: "Intelligence, shipped",
    skills: [
      {
        name: "Gemini AI",
        icon: "/tech/gemini.svg",
        core: true,
        description:
          "Context-aware replies, sentiment analysis and generation — powering WhisperGram and YT Comments Xpert.",
      },
      {
        name: "Groq",
        icon: "/tech/groq.svg",
        description:
          "Ultra-low-latency LLM inference for realtime AI features.",
      },
      {
        name: "AWS S3",
        icon: "/tech/aws.svg",
        description:
          "Object storage plus Transcribe pipelines — the backbone of Captionizer.",
      },
      {
        name: "GCP",
        icon: "/tech/gcp.svg",
        description:
          "YouTube Data API integrations and cloud services on Google's stack.",
      },
      {
        name: "Vercel",
        icon: "/tech/vercel-w.svg",
        description:
          "Zero-config deploys, edge network and preview environments for every project.",
      },
      {
        name: "Serverless",
        icon: "/tech/serverless.svg",
        description:
          "Functions-first architectures that scale to zero and back.",
      },
    ],
  },
  {
    title: "Tools & Craft",
    icon: Wrench,
    blurb: "The daily drivers",
    skills: [
      {
        name: "JavaScript",
        icon: "/tech/js.svg",
        core: true,
        description:
          "The language underneath it all — ES2023+, async patterns and the browser platform.",
      },
      {
        name: "Python",
        icon: "/tech/python.svg",
        description:
          "Scripting, APIs and data wrangling — my second language for backend work.",
      },
      {
        name: "Git / GitHub",
        icon: "/tech/git.svg",
        description:
          "Branch discipline, code review and clean history across every project.",
      },
      {
        name: "Postman",
        icon: "/tech/postman.svg",
        description:
          "API design, testing and collection-driven documentation.",
      },
      {
        name: "Frappe HR",
        icon: "/tech/frappe.svg",
        description:
          "HRMS backend development on the Frappe framework at Torit Innovations.",
      },
      {
        name: "CI/CD",
        icon: "/tech/cicd.svg",
        description:
          "Automated build, test and deploy pipelines so shipping stays boring.",
      },
    ],
  },
];

/** Flat list for the 3D globe (category attached for the dialog). */
export const globeSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.title }))
);
