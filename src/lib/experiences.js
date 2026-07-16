const experiences = [
  {
    id: 1,
    name: "Associate AI/ML Engineer",
    companyName: "Programming.com",
    experience: "August 2025 - Present · 1 yr",
    logo: "/experience/programming_logo.jpeg",
    description: `Built health-tech and business assistant backends using agentic workflows, RAG, and LLMs.
Created custom MCP servers and LangChain workflows, cutting test-authoring time by 70%.
Engineered real-time FastAPI backends and managed Docker-based AWS/Azure CI/CD pipelines.`,
    fullDescription: `Built AI-driven backend systems for a health-tech platform and an enterprise business assistant application, spanning agentic workflows, RAG, and real-time LLM services.
Designed and developed a custom MCP (Model Context Protocol) server from the ground up, powering the business assistant with governed, tool-based access to multiple datasets and enabling cross-system querying through a single conversational interface.
Engineered an agentic AI workflow with LangChain that analyzes BRDs and codebases to auto-generate functional, unit, and penetration test cases, cutting manual test-case authoring time by an estimated 70%.
Built real-time conversational backends with FastAPI, including response streaming and interactive data visualization.
Containerized services with Docker and owned CI/CD delivery across two pipelines: GitHub Actions → AWS and Azure Repos → Azure Container Apps enabling automated, repeatable deployments.`,
    focusAreas: [
      "Python",
      "FastAPI",
      "Agentic AI",
      "LangChain",
      "RAG",
      "AWS",
      "MCP",
      "WebSocket",
      "Docker",
      "CI/CD",
      "Microsoft Azure",
    ],
  },
  {
    id: 2,
    name: "AI/ML Developer",
    companyName: "LetsAI",
    experience: "January 2025 - July 2025 · 7 mos",
    logo: "/experience/letsai_logo.jpeg",
    description: `Developed Strapi backend services and REST APIs to power visa petition workflows.
Built web-search AI agents to gather applicant data and automate petition drafting.
Implemented multi-role RBAC security and contributed to a dynamic petition editor.`,
    fullDescription: `Developed backend services on Strapi (headless CMS), modeling structured applicant and petition data and exposing REST APIs to power the EB1A visa petition workflow from draft to submission.
Built an AI research agent that uses web search to gather an applicant's past experience and achievements, feeding that context into automated petition drafting.
Implemented role-based access control (RBAC) governing multi-role access to sensitive applicant and petition data.
Contributed to a dynamic petition editor enabling applicants to draft, edit, and manage complex, structured visa petitions.`,
    focusAreas: [
      "Agentic AI",
      "Python",
      "Node.js",
      "Generative AI",
      "Strapi.js",
      "Next.js",
      "React.js",
    ],
  },
  {
    id: 3,
    name: "Back End Developer",
    companyName: "Torit Innovations",
    experience: "August 2024 - December 2024 · 5 mos",
    logo: "/experience/torit_logo.jpeg",
    description: `Created an Express.js backend with Brave-based AI news pipelines and cron crawlers.
Built Twalkon end-to-end with Stripe payment integration and secure Supabase schemas.
Orchestrated LLM workflows for an MSL platform to surface scientific research.`,
    fullDescription: `Designed the database and built the backend with Express.js for a financial-news platform, including an AI powered pipeline that searches Brave for relevant news and cron schedulers for automated, recurring retrieval.
Developed Twalkon's end-to-end backend, frontend, and a securely designed Supabase database with Stripe payment integration.
Built AI orchestration for a Medical Science Liaison (MSL) platform, coordinating LLM driven workflows to surface and synthesize scientific and medical information for field teams.`,
    focusAreas: [
      "Express.js",
      "Stripe",
      "Agentic Workflows",
      "LangChain",
      "LangGraph",
      "Supabase",
      "Cron Schedulers",
    ],
  },
  {
    id: 4,
    name: "Software Developer",
    companyName: "iFIX tech Global",
    experience: "March 2024 - July 2024 · 5 mos",
    logo: "/experience/ifix_logo.jpeg",
    description: `Developed backend complaints & management features using Node.js and Express.js.
Built authentication and bulk communication services using Twilio, Bcrypt, and Nodemailer.
Optimized data models and query speeds across MySQL and MongoDB databases.`,
    fullDescription: `Developed backend functionality for the RERA Bihar Complaints & Management System, a government-facing platform using Node.js and Express.js.
Built secure authentication and multi-channel communication features using Bcrypt, Nodemailer, Twilio, and the Airtel Bulk Push API.
Managed data across MySQL and MongoDB, focusing on schema design, query efficiency, and data integrity.`,
    focusAreas: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Twilio",
      "Nodemailer",
      "API Development",
    ],
  },
];

export default experiences;
