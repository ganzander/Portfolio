import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ThemedBackground from "@/components/three/ThemedBackground";
import ScrollFX from "@/components/scroll/ScrollFX";
import Navbar from "@/components/layout/Navbar";
import { BackgroundThemeProvider } from "@/context/BackgroundThemeContext";
import { JsonLd, personSchema } from "@/components/ui/json-ld";

export const metadata = {
  title: "Ganesh Kumar Mangla | Backend AI Engineer — Agentic Systems, RAG & LLM Infrastructure",
  description:
    "Backend AI Engineer specializing in production-ready multi-agent systems, LangGraph/LangChain RAG pipelines, MCP servers, and scalable LLM infrastructure built on FastAPI and Node.js. 5+ shipped AI products.",
  keywords: [
    "Backend AI Engineer",
    "AI Engineer",
    "AI Agent Engineer",
    "LangGraph Developer",
    "LangChain Engineer",
    "MCP Server Developer",
    "RAG Architecture",
    "LLM Infrastructure",
    "Multi-Agent Systems",
    "Vector Databases",
    "FastAPI",
    "Python AI",
    "Anthropic Claude",
    "AWS Bedrock",
    "Ganesh Kumar Mangla",
  ],
  openGraph: {
    title: "Ganesh Kumar Mangla | Backend AI Engineer",
    description:
      "Backend AI Engineer specializing in production-ready multi-agent systems, RAG pipelines, MCP servers, and scalable LLM infrastructure. Open to full-time & freelance.",
    type: "website",
    images: ["/ganesh.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Kumar Mangla | Backend AI Engineer",
    description:
      "Production AI systems — LangGraph agents, RAG pipelines, MCP servers, and scalable LLM backends.",
    images: ["/ganesh.jpg"],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark overflow-x-hidden"
      data-bg-theme="ember"
      suppressHydrationWarning
    >
      <body
        className={`grain relative overflow-x-hidden bg-background text-foreground ${spaceGrotesk.className}`}
        cz-shortcut-listen="true"
        style={{ cursor: "url('/cursor.png')" }}
      >
        <BackgroundThemeProvider>
          <JsonLd data={personSchema} />
          <ThemedBackground />
          <ScrollFX />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </BackgroundThemeProvider>
      </body>
    </html>
  );
}
