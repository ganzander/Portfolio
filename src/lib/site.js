export const site = {
  name: "Ganesh Kumar Mangla",
  role: "Backend AI Engineer",
  tagline:
    "I architect production-grade AI systems — multi-agent workflows, RAG pipelines, and scalable LLM backends that ship to real users.",
  shortTagline:
    "Backend AI Engineer focused on autonomous agents, retrieval systems, and scalable LLM infrastructure.",
  location: "India · open to remote",
  availability: "Open to full-time & freelance",
  email: "ganeshmangla2003@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ganzander",
    linkedin: "https://www.linkedin.com/in/ganesh-mangla-958a392a8/",
    whatsapp: "+91XXXXXXXXXX", // Replace with your actual WhatsApp number (include country code, e.g., +91...)
  },
};

export const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Production AI Systems Shipped",
  },
  {
    value: 4,
    suffix: "+",
    label: "Enterprise AI Projects Deployed",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years in Backend AI Engineering",
  },
  {
    value: 70,
    suffix: "%",
    label: "Avg. Reduction in Manual Work via AI",
  },
];

export const principles = [
  {
    title: "Production AI First",
    text: "Architecting reliable AI systems with scalable backends, observability, and evaluation pipelines — not just demos.",
  },
  {
    title: "Agents Beyond Chatbots",
    text: "Building orchestrated multi-agent systems, MCP servers, and RAG pipelines that integrate with real enterprise data and workflows.",
  },
  {
    title: "Engineering at Scale",
    text: "Designing secure, cloud-native AI infrastructure with clean API contracts, streaming, and performance-first architecture.",
  },
];

export const aiFocusAreas = [
  {
    title: "RAG & Knowledge Systems",
    icon: "BookOpen",
    blurb: "Grounded answers over your own data",
    description:
      "Embedding pipelines, hybrid semantic + keyword retrieval, and chunking strategies that surface the right context — not just the closest vector.",
    stack: ["ChromaDB", "pgvector", "Azure AI Search", "LangChain Retrievers"],
  },
  {
    title: "Multi-Agent Orchestration",
    icon: "Network",
    blurb: "LangGraph orchestrator-worker systems",
    description:
      "Stateful agents that route, retry, and compose work — with shared memory, conditional routing, and human-in-the-loop controls.",
    stack: ["LangGraph", "LangChain", "CrewAI", "Custom Orchestrators"],
  },
  {
    title: "MCP & Tool Servers",
    icon: "Plug",
    blurb: "Exposing enterprise data as AI-callable tools",
    description:
      "Custom Model Context Protocol servers that wrap ERP, CRM, and internal APIs into governed, discoverable tools for agents.",
    stack: ["MCP SDK", "FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    title: "LLM Backend Infrastructure",
    icon: "Server",
    blurb: "Streaming, observability, cost control",
    description:
      "High-throughput LLM backends with response streaming, token-level observability via LangSmith, and caching to keep inference costs in check.",
    stack: ["FastAPI", "WebSockets", "LangSmith", "Anthropic Claude", "AWS Bedrock"],
  },
  {
    title: "Prompt & Output Engineering",
    icon: "Terminal",
    blurb: "Reliable outputs, structured responses",
    description:
      "System prompts, structured-output schemas, guardrails, and validation layers — turning unpredictable models into dependable services.",
    stack: ["Prompt Chaining", "Guardrails AI", "JSON Schema", "Pydantic"],
  },
  {
    title: "Enterprise AI Integration",
    icon: "Building2",
    blurb: "AI that fits inside real businesses",
    description:
      "Connecting agents to existing identity, security, and data systems — RBAC, audit logging, and tenant isolation for production AI.",
    stack: ["OAuth/JWT", "RBAC", "AWS", "Azure", "Supabase"],
  },
];
