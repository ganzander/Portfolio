# Tech Stack Icons — Dark Theme Set

35 SVG logos, transparent backgrounds, colored/sized to read clearly on dark UI.
Filenames match the `/tech/...` paths referenced in your skills data file, so you
can drop this folder straight into `public/tech/`.

## Notes on sourcing

- Official brand marks (Node.js, Express, FastAPI, PostgreSQL, MongoDB, React,
  Next.js, Tailwind, GSAP, Framer, Three.js, Redux, Docker, Nginx, Supabase,
  Vercel, DigitalOcean, Git, GitHub, LangChain, LangGraph, MCP, Claude, Gemini,
  CrewAI, AWS, Azure) come from the `simple-icons` / `devicon` open icon sets.
- Brands whose default logo is black (Express, JWT, MCP, Next.js, Three.js,
  Vercel, GitHub) were recolored to white — those files carry a `-w` suffix
  where the original doc used one, otherwise just plain white.
- A few items in your list aren't real standalone brands with public logos
  (REST APIs, WebSockets, LangSmith, AWS Bedrock, Azure OpenAI, RAG & Vector
  DBs, CI/CD). For these I designed simple, on-brand-color line icons from
  scratch: `api.svg`, `websocket.svg`, `langsmith.svg`, `aws-bedrock.svg`,
  `azure-openai.svg`, `rag.svg`, `cicd.svg`. Swap these out anytime if you'd
  rather use something else.
- `jwt.svg` covers the "JWT / OAuth" entry (JSON Web Tokens mark).

## Usage

Each SVG has a transparent background and an explicit `fill`, so they'll show
up correctly against dark backgrounds without extra CSS. If you want to tint
them via CSS instead, just strip the `fill` attribute on the `<svg>` tag and
use `currentColor` / a CSS `fill` override.
