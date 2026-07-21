# Backend AI Engineer Portfolio

A premium, highly interactive developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Positioned for a **Backend AI Engineer** specializing in agentic AI systems, RAG pipelines, and scalable LLM infrastructure.

---

## AI Expertise

### Core Competencies
- **Multi-Agent Orchestration** — LangGraph orchestrator-worker workflows, conditional routing, stateful agents
- **RAG & Knowledge Systems** — Hybrid retrieval (semantic + keyword), embedding pipelines, ChromaDB / pgvector
- **LLM Backend Infrastructure** — FastAPI streaming backends, WebSocket real-time AI, LLM observability via LangSmith
- **MCP & Tool Servers** — Custom Model Context Protocol servers exposing ERP/CRM data to AI agents
- **Enterprise AI Integration** — AWS Bedrock, Azure OpenAI, guardrails, and production deployment pipelines

### Featured AI Projects
- **Lobo** — Enterprise data agent unifying ERP retrieval through a custom MCP server + LangChain RAG pipeline. Reduced manual data retrieval by ~70%.
- **Kris** — Multi-agent e-commerce support system built with a LangGraph orchestrator-worker architecture, hybrid-search RAG on AWS Bedrock, and a real-time WebSocket backend.
- **3D Talking Avatar** — Agentic AI avatar with RAG ingestion, ElevenLabs voice synthesis, and a Rhubarb + FFmpeg lip-sync pipeline.

---

## Features

### Client & UI Experience
- **Custom Cursor Lock**: A global cursor lock locking carets and pointers to a customized asset (`/cursor.png`) with clean hover states.
- **Interactive Work Experience**: A scroll-driven GSAP / Framer-Motion chronological timeline. Cards display concise bullets with a "Read More" button opening an adjustable-height Dialog overlay.
- **Featured Projects Showcase**: An interactive deck-stacking project slider. Projects feature custom SVGs structured to emphasize **AI > Backend > Database** tech stacks.
- **AI Focus Areas Section**: Visual showcase of core AI engineering capabilities — RAG, multi-agent orchestration, MCP servers, LLM infrastructure, prompt engineering, and enterprise AI integration.
- **Certifications Section**: Showcase of completed AI / ML / backend certifications with verification links.
- **Clean & Modern Contact Form**: A two-column form (image left, input form right) with custom file uploads (Resume, BRD), `autoComplete="off"` overrides, and strict validation.

### Backend & API Integration
- **Multipart Form API (`/api/contact`)**: A Next.js App Router POST endpoint that parses files and fields on the server.
- **Nodemailer SMTP Integration**: Automatically sends structured emails containing contact form messages and uploads.
- **Twilio WhatsApp API Alerts**: Triggers background WhatsApp messages notifying of new form entries in real-time.
- **Graceful Fallbacks**: If environment variables are missing, the endpoint hides all technical logs and prompts users with friendly notices.

---

## Tech Stack

### AI & Machine Learning
- **LLM Frameworks**: LangChain, LangGraph, LangSmith, CrewAI
- **AI Models**: Anthropic Claude, Google Gemini, AWS Bedrock, Azure OpenAI
- **RAG & Retrieval**: ChromaDB, pgvector, Azure AI Search, Hybrid Search
- **Protocols**: Model Context Protocol (MCP)

### Backend & Infrastructure
- **API Frameworks**: FastAPI, Express.js, Next.js API Routes
- **Databases**: PostgreSQL (with pgvector), MongoDB, Supabase
- **Cloud**: AWS (EC2, S3, Bedrock, ECS), Azure (Container Apps, AI Search)
- **DevOps**: Docker, GitHub Actions, CI/CD pipelines

### Frontend & Animation
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Animation**: Framer Motion, GSAP, Locomotive Scroll
- **3D**: Three.js, React Three Fiber

---

## Getting Started

### Prerequisites
- [Node.js 18.x or later](https://nodejs.org/)
- npm, yarn, or pnpm

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.local.example` file in the root directory to `.env.local`:
```bash
cp .env.local.example .env.local
```
Open `.env.local` and fill in your credentials:

```env
# --- Nodemailer (Gmail SMTP) ---
EMAIL_USER=XXXX
EMAIL_PASS=XXXX
EMAIL_TO=XXXX

# --- Twilio WhatsApp API (Optional) ---
TWILIO_ACCOUNT_SID=XXXX
TWILIO_AUTH_TOKEN=XXXX
TWILIO_FROM_NUMBER=XXXX
TWILIO_TO_NUMBER=XXXX
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## Folder Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js      # Nodemailer & Twilio background notification endpoint
│   │   ├── globals.css           # Global typography & custom cursor setup
│   │   ├── layout.js             # Root HTML wrap & providers
│   │   └── page.js               # Landing page composition
│   ├── components/
│   │   ├── AIFocus/              # AI Focus Areas section
│   │   │   └── AIFocusSection.jsx
│   │   ├── Certifications/       # Certifications grid
│   │   ├── Contact/              # Contact form & uploader
│   │   ├── Hero/                 # Hero, loading, scroll FX
│   │   ├── Highlights/           # Stats + principles
│   │   ├── Project/              # Project cards & dialogs
│   │   ├── Skills/               # Skills + 3D skill globe
│   │   ├── WorkExperience/       # Pinned timeline
│   │   ├── layout/               # Navbar, footer, theme switcher
│   │   ├── three/                # 3D background, hero, skill globe
│   │   └── ui/                   # Shared UI primitives (Dialog, Button, Input, etc.)
│   ├── context/                  # Background theme context
│   ├── lib/
│   │   ├── certifications.js     # AI / ML / backend certifications
│   │   ├── experiences.js        # Timeline data
│   │   ├── projects.js           # Project metadata
│   │   ├── site.js               # Site config + AI focus areas
│   │   ├── skills.js             # AI Engineering, Backend, Cloud skills
│   │   └── utils.js              # cn() helper
│   └── ...
├── public/                       # Image assets & cursor vectors
├── package.json                  # Dependencies configuration
└── .env.local.example            # Environment variables example template
```

---

## Security & Best Practices

- **App Passwords**: Never use your primary Gmail password for `EMAIL_PASS`. Always generate a secure Google App Password under *Account Security*.
- **Validation**: Form entries are checked on both the client and server to prevent spam submissions.
- **Environment Protection**: Never check `.env.local` into Git control. It is already added to `.gitignore`.

---

## Connect

- **LinkedIn**: [linkedin.com/in/ganesh-mangla](https://www.linkedin.com/in/ganesh-mangla-958a392a8/)
- **GitHub**: [github.com/ganzander](https://github.com/ganzander)
- **Email**: [ganeshmangla2003@gmail.com](mailto:ganeshmangla2003@gmail.com)
