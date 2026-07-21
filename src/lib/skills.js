import { Bot, Server, Cloud } from "lucide-react";

export const skillCategories = [
  {
    title: "AI Engineering",
    icon: Bot,
    blurb: "Agentic systems that reason, retrieve, and act",
    skills: [
      {
        name: "LangGraph",
        icon: "/tech/langgraph.svg",
        core: true,
        description:
          "Stateful multi-agent workflows — orchestrator-worker patterns, conditional routing, memory, and human-in-the-loop execution in production.",
      },
      {
        name: "LangChain",
        icon: "/tech/langchain.svg",
        core: true,
        description:
          "LLM application framework for tool calling, RAG pipelines, structured outputs, and agent orchestration at scale.",
      },
      {
        name: "LangSmith",
        icon: "/tech/langsmith.svg",
        core: true,
        description:
          "Observability layer — tracing every agent step, evaluating outputs, and regression-testing LLM applications.",
      },
      {
        name: "MCP",
        icon: "/tech/mcp.svg",
        core: true,
        description:
          "Building Model Context Protocol servers to expose enterprise data (ERP, CRM) as first-class tools for AI agents.",
      },
      {
        name: "RAG & Vector DBs",
        icon: "/tech/rag.svg",
        core: true,
        description:
          "Embedding pipelines, hybrid search (semantic + keyword), and vector stores — ChromaDB, pgvector, Azure AI Search.",
      },
      {
        name: "Anthropic Claude",
        icon: "/tech/anthropic-claude.svg",
        core: true,
        description:
          "Frontier LLMs for reasoning, tool use, and long-context workflows — the reasoning engine behind production agents.",
      },
      {
        name: "Google Gemini",
        icon: "/tech/gemini.svg",
        core: true,
        description:
          "Multimodal AI for text, vision, and structured reasoning — used for document understanding and retrieval augmentation.",
      },
      {
        name: "AWS Bedrock",
        icon: "/tech/aws-bedrock.svg",
        core: true,
        description:
          "Managed foundation models, knowledge bases, and agents — deploying enterprise AI with guardrails and cost control.",
      },
      {
        name: "Azure OpenAI",
        icon: "/tech/azure-openai.svg",
        core: true,
        description:
          "GPT models, embeddings, and Azure AI Search for enterprise-grade retrieval and generation pipelines.",
      },
      {
        name: "CrewAI",
        icon: "/tech/crewai.svg",
        description:
          "Multi-agent collaboration frameworks for autonomous task delegation and workflow automation.",
      },
      {
        name: "Prompt Engineering",
        icon: "/tech/langchain.svg",
        description:
          "System prompts, chain-of-thought, structured output schemas, and prompt optimization for production reliability.",
      },
      {
        name: "AI Guardrails",
        icon: "/tech/mcp.svg",
        description:
          "Output validation, content filtering, and safety layers to keep AI responses on-policy and hallucination-free.",
      },
    ],
  },
  {
    title: "Backend Systems",
    icon: Server,
    blurb: "APIs and infrastructure built to scale",
    skills: [
      {
        name: "FastAPI",
        icon: "/tech/fastapi.svg",
        core: true,
        description:
          "High-performance async Python APIs — streaming endpoints, WebSocket support, and auto-generated OpenAPI docs for AI backends.",
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
        core: true,
        description:
          "Event-driven runtime for real-time services, WebSocket servers, and API gateways powering agent backends.",
      },
      {
        name: "Express.js",
        icon: "/tech/express.svg",
        description:
          "Minimal HTTP framework for REST APIs, middleware pipelines, and backend services.",
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        core: true,
        description:
          "Relational database with pgvector for embeddings — structured data and semantic search in one store.",
      },
      {
        name: "MongoDB",
        icon: "/tech/mongodb.svg",
        core: true,
        description:
          "Document modelling for unstructured content — news articles, agent memory, and flexible schema data.",
      },
      {
        name: "WebSockets",
        icon: "/tech/websocket.svg",
        description:
          "Full-duplex real-time communication for streaming agent responses to multiple concurrent users.",
      },
      {
        name: "REST APIs",
        icon: "/tech/api.svg",
        description:
          "Well-shaped resources, auth flows, pagination, and error contracts — clean interfaces for AI service integration.",
      },
      {
        name: "JWT / OAuth",
        icon: "/tech/jwt.svg",
        description:
          "Token-based auth, role-based access control, and secure API gateways for multi-tenant AI services.",
      },
      {
        name: "Docker",
        icon: "/tech/docker.svg",
        core: true,
        description:
          "Containerized AI services — consistent environments from local development through production deployment.",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    blurb: "Ship fast, monitor reliably",
    skills: [
      {
        name: "AWS",
        icon: "/tech/aws.svg",
        core: true,
        description:
          "EC2, S3, Bedrock, ECS — deploying resilient, scalable infrastructure for AI workloads.",
      },
      {
        name: "Azure",
        icon: "/tech/azure.svg",
        core: true,
        description:
          "Azure OpenAI, AI Search, Container Apps — enterprise-grade AI deployment and CI/CD pipelines.",
      },
      {
        name: "Supabase",
        icon: "/tech/supabase.svg",
        description:
          "PostgreSQL-backed backend-as-a-service with auth, row-level security, and real-time subscriptions.",
      },
      {
        name: "CI/CD",
        icon: "/tech/cicd.svg",
        description:
          "GitHub Actions and Azure Pipelines — automated testing, container builds, and zero-downtime AI service deployments.",
      },
      {
        name: "Nginx",
        icon: "/tech/nginx.svg",
        description:
          "Reverse proxy, load balancing, and SSL termination for high-traffic AI endpoints.",
      },
      {
        name: "Vercel",
        icon: "/tech/vercel-w.svg",
        description:
          "Edge deployment and preview environments for frontend interfaces to AI backends.",
      },
      {
        name: "DigitalOcean",
        icon: "/tech/digitalocean.svg",
        description:
          "Droplet-based infrastructure for hosting and scaling AI services cost-effectively.",
      },
      {
        name: "Git / GitHub",
        icon: "/tech/git.svg",
        description:
          "Branch discipline, code review, and collaborative workflows across every AI project.",
      },
    ],
  },
];

export const globeSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.title })),
);
