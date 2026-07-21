/**
 * ── Certifications config ─────────────────────────────────────────────────
 *
 * Replace with your real certifications.
 * Fields:
 *   title         – certificate name
 *   issuer        – issuing organization
 *   date          – "Month YYYY"
 *   credentialUrl – public verification link (null hides the button)
 *   skills        – short tag list shown on the card
 *   logo          – optional image under /public (falls back to an icon)
 */
const certifications = [
  {
    id: 1,
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "2025",
    credentialUrl: "https://www.deeplearning.ai/courses/generative-ai-with-llms/",
    skills: ["LLMs", "RAG", "Prompt Engineering", "AI Applications"],
    logo: null,
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: null,
    skills: ["AWS", "Cloud Architecture", "AI Infrastructure"],
    logo: null,
  },
  {
    id: 3,
    title: "FastAPI Masterclass",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: null,
    skills: ["FastAPI", "Python", "Async APIs", "Backend"],
    logo: null,
  },
  {
    id: 4,
    title: "LangChain for LLM Application Development",
    issuer: "LangChain / DeepLearning.AI",
    date: "2025",
    credentialUrl: null,
    skills: ["LangChain", "RAG", "Agents", "LLM Apps"],
    logo: null,
  },
];

export default certifications;


