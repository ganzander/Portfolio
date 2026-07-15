import { Monitor, Server, Bot, Cloud } from "lucide-react";

export const skillCategories = [
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
        name: "FastAPI",
        icon: "/tech/fastapi.svg",
        description:
          "Typed Python APIs with automatic docs — used for HRMS backend work at Torit.",
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        core: true,
        description:
          "Relational database with advanced features for complex data modeling and querying.",
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
        name: "JWT / OAuth",
        icon: "/tech/jwt.svg",
        description:
          "Token-based auth, Google sign-in and role-based access control done right.",
      },
      {
        name: "WebSockets",
        icon: "/tech/websocket.svg",
        description:
          "Real-time bidirectional communication for live chat, notifications, and streaming data.",
      },
    ],
  },
  {
    title: "Agentic AI",
    icon: Bot,
    blurb: "Production-ready AI systems",
    skills: [
      {
        name: "LangGraph",
        icon: "/tech/langgraph.svg",
        core: true,
        description:
          "Building stateful, multi-agent workflows with conditional routing, memory, and human-in-the-loop execution.",
      },
      {
        name: "LangChain",
        icon: "/tech/langchain.svg",
        core: true,
        description:
          "Developing LLM applications with tool calling, RAG pipelines, structured outputs, and agent orchestration.",
      },
      {
        name: "LangSmith",
        icon: "/tech/langsmith.svg",
        core: true,
        description:
          "Tracing, evaluating, and debugging LLM applications to improve reliability and performance.",
      },
      {
        name: "MCP",
        icon: "/tech/mcp.svg",
        core: true,
        description:
          "Integrating external tools, APIs, and enterprise data sources through the Model Context Protocol.",
      },
      {
        name: "Anthropic Claude",
        icon: "/tech/anthropic-claude.svg",
        core: true,
        description:
          "Building AI applications using Claude models for reasoning, coding, and long-context workflows.",
      },
      {
        name: "Gemini",
        icon: "/tech/gemini.svg",
        core: true,
        description:
          "Developing multimodal AI applications using Gemini for text, vision, and structured reasoning tasks.",
      },
      {
        name: "AWS Bedrock",
        icon: "/tech/aws-bedrock.svg",
        core: true,
        description:
          "Deploying secure enterprise AI solutions with managed foundation models, knowledge bases, and agents.",
      },
      {
        name: "Azure OpenAI",
        icon: "/tech/azure-openai.svg",
        core: true,
        description:
          "Building enterprise-grade AI applications with GPT models, embeddings, and Azure AI services.",
      },
      {
        name: "RAG & Vector DBs",
        icon: "/tech/rag.svg",
        core: true,
        description:
          "ChromaDB, Azure AI Search — embedding pipelines and hybrid search for contextual AI retrieval.",
      },
      {
        name: "CrewAI",
        icon: "/tech/crewai.svg",
        description:
          "Multi-agent collaboration frameworks for autonomous task delegation and workflow automation.",
      },
    ],
  },
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
        name: "Three.js / R3F",
        icon: "/tech/three.svg",
        core: true,
        description:
          "WebGL scenes, shaders and particle systems — like the themed backgrounds, 3D avatars, and this very globe.",
      },
      {
        name: "Redux",
        icon: "/tech/redux.svg",
        description:
          "Predictable state management for complex application data flows and side-effect handling.",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    blurb: "Ship fast, scale smart",
    skills: [
      {
        name: "AWS",
        icon: "/tech/aws.svg",
        core: true,
        description:
          "EC2, S3, Bedrock, and serverless services — deploying resilient, scalable cloud infrastructure.",
      },
      {
        name: "Azure",
        icon: "/tech/azure.svg",
        core: true,
        description:
          "Azure OpenAI, AI Search, and cloud-native deployments for enterprise-grade AI workloads.",
      },
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        core: true,
        description:
          "Containerized development and deployment — consistent environments from local to production.",
      },
      {
        name: "CI/CD",
        icon: "/tech/cicd.svg",
        core: true,
        description:
          "GitHub Actions pipelines for automated build, test, and zero-downtime deployments.",
      },
      {
        name: "Nginx",
        icon: "/tech/nginx.svg",
        description:
          "Reverse proxy, load balancing, SSL termination, and static asset serving in production.",
      },
      {
        name: "Supabase",
        icon: "/tech/supabase.svg",
        description:
          "PostgreSQL-backed backend-as-a-service with real-time subscriptions, auth, and storage.",
      },
      {
        name: "Vercel",
        icon: "/tech/vercel-w.svg",
        description:
          "Zero-config deploys, edge network and preview environments for every project.",
      },
      {
        name: "DigitalOcean",
        icon: "/tech/digitalocean.svg",
        description:
          "Full server infrastructure management — droplets, networking, SSL, and production hosting.",
      },
      {
        name: "Git / GitHub",
        icon: "/tech/git.svg",
        description:
          "Branch discipline, code review, clean history, and collaborative workflows across every project.",
      },
    ],
  },
];

export const globeSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.title })),
);
