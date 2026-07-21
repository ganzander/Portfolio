export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ganesh Kumar Mangla",
  url: "https://ganesh-mangla.vercel.app",
  jobTitle: "Backend AI Engineer",
  description:
    "Backend AI Engineer specializing in production-ready multi-agent systems, RAG pipelines, MCP servers, and scalable LLM infrastructure.",
  sameAs: [
    "https://github.com/ganzander",
    "https://www.linkedin.com/in/ganesh-mangla/",
  ],
  knowsAbout: [
    "LangGraph",
    "LangChain",
    "RAG",
    "Multi-Agent Systems",
    "MCP",
    "LLM Infrastructure",
    "Anthropic Claude",
    "AWS Bedrock",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Docker",
    "CI/CD",
  ],
};

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
