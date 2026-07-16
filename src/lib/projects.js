// Tech icons live in /public/tech. Each techStack entry is { name, svg, description }
// so the Tech Stack tab can render the icon and an on-hover explanation.

const tech = {
  langchain: {
    name: "LangChain",
    svg: "/tech/langchain.svg",
    description:
      "LangChain is a framework for building applications on top of LLMs. It provides the building blocks — chains, tools, memory, and agents — for orchestrating reasoning over external data and APIs.",
  },
  langgraph: {
    name: "LangGraph",
    svg: "/tech/langgraph.svg",
    description:
      "LangGraph models agent workflows as stateful graphs. It's ideal for orchestrator-worker and multi-agent systems where control flow, retries, and shared state need to be explicit and durable.",
  },
  langsmith: {
    name: "LangSmith",
    svg: "/tech/langsmith.svg",
    description:
      "LangSmith is the observability and evaluation layer for LLM apps — tracing every agent step, prompt, and tool call so behaviour can be debugged, measured, and regression-tested.",
  },
  mcp: {
    name: "MCP",
    svg: "/tech/mcp.svg",
    description:
      "The Model Context Protocol is an open standard for exposing tools and data sources to AI agents through a uniform interface, letting one agent talk to many systems without bespoke integrations.",
  },
  rag: {
    name: "RAG",
    svg: "/tech/rag.svg",
    description:
      "Retrieval-Augmented Generation grounds LLM responses in your own data by retrieving relevant chunks from a vector store at query time, cutting hallucinations and keeping answers current.",
  },
  anthropicClaude: {
    name: "Anthropic Claude",
    svg: "/tech/anthropic-claude.svg",
    description:
      "Claude is Anthropic's family of frontier LLMs with strong reasoning and long-context support, used here as the reasoning engine behind the agents' tool use and conversation.",
  },
  awsBedrock: {
    name: "AWS Bedrock",
    svg: "/tech/aws-bedrock.svg",
    description:
      "Amazon Bedrock is a managed service for running foundation models and building generative-AI apps, including managed knowledge bases and hybrid semantic + keyword retrieval.",
  },
  aws: {
    name: "AWS",
    svg: "/tech/aws.svg",
    description:
      "Amazon Web Services provides the cloud infrastructure — compute, storage, and managed services — that the platform is deployed and scaled on.",
  },
  fastapi: {
    name: "FastAPI",
    svg: "/tech/fastapi.svg",
    description:
      "FastAPI is a high-performance async Python web framework with automatic validation and OpenAPI docs, well suited to low-latency AI backends and streaming endpoints.",
  },
  websocket: {
    name: "WebSocket",
    svg: "/tech/websocket.svg",
    description:
      "WebSocket provides full-duplex, persistent connections over a single TCP socket, enabling real-time, multi-user streaming of agent responses to the browser.",
  },
  postgresql: {
    name: "PostgreSQL",
    svg: "/tech/postgresql.svg",
    description:
      "PostgreSQL is a robust open-source relational database, used here for application data and — with vector extensions — as a store for embeddings.",
  },
  mongodb: {
    name: "MongoDB",
    svg: "/tech/mongodb.svg",
    description:
      "MongoDB is a document database that stores data in flexible, JSON-like records, ideal for evolving schemas and unstructured content such as news articles.",
  },
  express: {
    name: "Express.js",
    svg: "/tech/express.svg",
    description:
      "Express is a minimal, unopinionated Node.js web framework for building REST APIs and services with a rich middleware ecosystem.",
  },
  nodejs: {
    name: "Node.js",
    svg: "/tech/nodejs.svg",
    description:
      "Node.js is a JavaScript runtime built on V8 with non-blocking I/O, well suited to building fast, scalable network services and APIs.",
  },
  api: {
    name: "REST APIs",
    svg: "/tech/api.svg",
    description:
      "RESTful APIs expose the system's functionality over HTTP with predictable, resource-oriented endpoints that clients and third-party services can consume.",
  },
  cicd: {
    name: "CI/CD",
    svg: "/tech/cicd.svg",
    description:
      "Continuous integration and delivery pipelines automate testing and deployment, so changes ship quickly and reliably on every push.",
  },
  docker: {
    name: "Docker",
    svg: "/tech/docker.svg",
    description:
      "Docker packages services and their dependencies into portable containers, giving consistent environments from local development through production.",
  },
  supabase: {
    name: "Supabase",
    svg: "/tech/supabase.svg",
    description:
      "Supabase is an open-source Firebase alternative built on PostgreSQL, providing auth, row-level security, storage, and instant APIs for the backend.",
  },
  nextjs: {
    name: "Next.js",
    svg: "/tech/nextjs-w.svg",
    description:
      "Next.js is a React framework with server-side rendering, static generation, and file-based routing for building fast, SEO-friendly full-stack apps.",
  },
  react: {
    name: "React",
    svg: "/tech/react.svg",
    description:
      "React is a component-based library for building interactive UIs with a declarative model and a large ecosystem.",
  },
  tailwindcss: {
    name: "TailwindCSS",
    svg: "/tech/tailwindcss.svg",
    description:
      "Tailwind CSS is a utility-first CSS framework for building modern, responsive interfaces quickly and consistently.",
  },
  jwt: {
    name: "JWT Auth",
    svg: "/tech/jwt.svg",
    description:
      "JSON Web Tokens carry signed, verifiable claims, providing stateless authentication and a foundation for role-based access control.",
  },
  three: {
    name: "React Three Fiber",
    svg: "/tech/three.svg",
    description:
      "React Three Fiber is a React renderer for Three.js, letting you build and animate real-time 3D scenes declaratively as components.",
  },
};

const projects = [
  {
    id: "01",
    title: "Lobo",
    subtitle: "Enterprise data agent that unifies ERP retrieval into one conversational interface.",
    role: "AI/ML Developer",
    associated: "Programming.com",
    duration: "Feb 2026 – Jun 2026",
    techStack: [
      tech.langchain,
      tech.mcp,
      tech.rag,
      tech.anthropicClaude,
      tech.fastapi,
      tech.postgresql,
      tech.langsmith,
      tech.docker,
      tech.api,
    ],
    features: [
      "Cross-system querying via one chat interface",
      "Custom MCP server exposing Epicor ERP data",
      "RAG pipeline for contextual enterprise search",
      "LangChain-orchestrated tool use over AP/AR",
    ],
    image: "/project/lobo.svg",
    description: `
      <p>
        Lobo is an enterprise data agent that unifies Epicor ERP data retrieval — across Accounts Payable and Accounts Receivable — into a single LangChain-orchestrated agent exposed over the Model Context Protocol (MCP), so teams can query multiple back-office systems through one conversational interface instead of navigating separate ERP screens.
      </p>
      <p>
        My work centred on the intelligence layer: I built the RAG-based retrieval and embedding pipeline that powers contextual search over enterprise data, and developed the custom MCP server that exposes Epicor ERP data to the agent as first-class, callable tools. Together these let the agent reason over live financial data and answer questions grounded in the organisation's own records.
      </p>
    `,
    challenges:
      "Modelling heterogeneous ERP entities as clean MCP tools and keeping retrieval grounded and accurate over sensitive financial data.",
    impact:
      "Gave finance and operations teams instant, plain-English answers to AP/AR questions — no more hopping between ERP screens or waiting on IT, so they spend their time on decisions instead of digging for data.",
    liveDemo: null,
    repo: null,
    direction: "left",
  },
  {
    id: "02",
    title: "Kris",
    subtitle: "Multi-agent AI support system for e-commerce, built on an orchestrator-worker architecture.",
    role: "AI/ML Developer",
    associated: "Programming.com",
    duration: "Sep 2025 – Jan 2026",
    techStack: [
      tech.langgraph,
      tech.langchain,
      tech.fastapi,
      tech.websocket,
      tech.awsBedrock,
      tech.aws,
      tech.rag,
      tech.postgresql,
      tech.docker,
    ],
    features: [
      "LangGraph orchestrator-worker workflow",
      "Real-time, multi-user WebSocket backend",
      "Hybrid-search RAG on Amazon Bedrock",
      "Guardrails for safe AI output",
    ],
    image: "/project/kris.svg",
    description: `
      <p>
        Kris is a multi-agent AI support system for e-commerce, built with LangGraph using an orchestrator-worker architecture: a central orchestrator routes each customer request to specialised worker agents — product lookup, order help, and more — and composes their results into a single coherent reply.
      </p>
      <p>
        I designed the LangGraph orchestrator-worker workflow and built the FastAPI + WebSocket backend for real-time, multi-user processing. I implemented the hybrid-search RAG pipeline on Amazon Bedrock, built the tools for real-time product retrieval, and added Guardrails to keep AI output safe and on-policy.
      </p>
    `,
    challenges:
      "Coordinating multiple agents with shared state while streaming responses to many concurrent users without blocking.",
    impact:
      "Gave shoppers accurate, on-brand help the moment they asked — day or night — while freeing the support team from repetitive order and refund questions to focus on the cases that truly need a human.",
    liveDemo: null,
    repo: null,
    direction: "right",
  },
  {
    id: "03",
    title: "Fintakes",
    subtitle: "Financial-news platform with an AI-powered news-retrieval pipeline.",
    role: "Backend Developer",
    associated: "Torit Innovations",
    duration: "Dec 2025",
    techStack: [
      tech.express,
      tech.nodejs,
      tech.postgresql,
      tech.api,
      tech.docker,
      tech.cicd,
    ],
    features: [
      "AI retrieval pipeline over Brave search",
      "Cron-scheduled recurring news fetches",
      "Express.js REST backend",
      "Normalised relational schema",
    ],
    image: "/project/fintakes.svg",
    description: `
      <p>
        Fintakes is a financial-news platform backed by an AI-powered retrieval pipeline that continuously surfaces relevant market and finance news for its users.
      </p>
      <p>
        I designed the database schema, built the Express.js backend, and implemented the AI retrieval pipeline that searches Brave for relevant news and processes the results into the platform. I also set up cron schedulers so the retrieval runs automatically on a recurring basis, keeping the feed fresh without manual intervention.
      </p>
    `,
    challenges:
      "Turning noisy open-web search results into a clean, deduplicated, relevance-ranked feed on a reliable schedule.",
    impact:
      "Kept readers on top of the markets with a feed of relevant, up-to-the-hour financial news — surfacing what matters automatically, so they no longer had to scour multiple sources to stay informed.",
    liveDemo: null,
    repo: null,
    direction: "down",
  },
  {
    id: "04",
    title: "TwalkOn",
    subtitle: "Subscription platform for a parenting-support community.",
    role: "Full Stack Developer",
    associated: "Torit Innovations",
    duration: "Aug 2025 – Nov 2025",
    techStack: [
      tech.supabase,
      tech.nextjs,
      tech.react,
      tech.tailwindcss,
      tech.jwt,
      tech.nodejs,
    ],
    features: [
      "Stripe payments & subscription handling",
      "Role-based access control (RBAC)",
      "User groupings & bundle purchases",
      "Supabase backend + frontend integration",
    ],
    image: "/project/twalkon.svg",
    description: `
      <p>
        TwalkOn is a subscription platform for a parenting-support community, bringing together coaching sessions, webinars, curated content, and a moderated community space behind a paid membership.
      </p>
      <p>
        I managed the Supabase backend and its integration with the frontend, built the Stripe payment webhooks and subscription handling, and implemented the platform's more complex business logic — including role-based access control (RBAC), user groupings, and a bundle-purchase feature that lets members buy curated packages of offerings.
      </p>
    `,
    challenges:
      "Getting subscription state, Stripe webhooks, and role-based access to stay consistent across purchase, renewal, and bundle edge cases.",
    impact:
      "Gave parents one trusted place for coaching, webinars, and a supportive community — with billing and access that just work — so they could focus on getting help and connecting with others, not fighting the platform.",
    liveDemo: null,
    repo: null,
    direction: "left",
  },
  {
    id: "05",
    title: "3D Talking Avatar",
    subtitle: "Real-time 3D talking avatar with agentic AI, built end to end.",
    role: "Full Stack Developer",
    associated: "LETSAI Solution",
    duration: "Mar 2025",
    techStack: [
      tech.three,
      tech.react,
      tech.nextjs,
      tech.rag,
      tech.nodejs,
    ],
    features: [
      "RAG ingestion & retrieval for context",
      "ElevenLabs voice synthesis",
      "Lip-sync via Rhubarb + FFmpeg",
      "React Three Fiber rendering",
    ],
    image: "/project/avatar.svg",
    description: `
      <p>
        A real-time 3D talking avatar powered by agentic AI, built end to end — the avatar listens, reasons over a knowledge base, speaks with a synthesised voice, and moves its mouth in sync with the audio.
      </p>
      <p>
        I built the RAG ingestion and retrieval pipelines for context-aware responses, integrated ElevenLabs for voice synthesis, and implemented the lip-sync pipeline with Rhubarb Lip Sync and FFmpeg. The rendering and frontend were built with React Three Fiber, bringing the animated 3D character to life in the browser.
      </p>
    `,
    challenges:
      "Aligning generated speech, phoneme timing, and 3D mouth animation into a believable, low-latency real-time experience.",
    impact:
      "Let people get answers by simply talking to a lifelike avatar that responds in real time — turning a dry knowledge base into a warm, face-to-face conversation that feels natural and accessible to everyone.",
    liveDemo: null,
    repo: null,
    direction: "right",
  },
];

export default projects;
