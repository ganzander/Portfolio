import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ThemedBackground from "@/components/three/ThemedBackground";
import ScrollFX from "@/components/scroll/ScrollFX";
import Navbar from "@/components/layout/Navbar";
import { BackgroundThemeProvider } from "@/context/BackgroundThemeContext";

export const metadata = {
  title: "Ganesh Kumar Mangla | Backend AI Engineer — AI Systems, RAG & Scalable Architecture",
  description:
    "Backend AI Engineer specializing in production-ready AI agents, LangChain/LangGraph RAG pipelines, LLM infrastructure, Python, Node.js, and high-performance backend architecture. 4+ shipped products.",
  keywords: [
    "Backend AI Engineer",
    "AI Engineer",
    "Backend Engineer",
    "AI Agent Engineer",
    "LangGraph Developer",
    "LangChain",
    "RAG Architecture",
    "LLM Infrastructure",
    "FastAPI",
    "Node.js Backend",
    "Python AI",
    "Vector Databases",
    "Ganesh Kumar Mangla",
  ],
  openGraph: {
    title: "Ganesh Kumar Mangla | Backend AI Engineer",
    description:
      "Backend AI Engineer specializing in production-ready AI agents, RAG systems, and scalable backend architecture. Open to full-time & freelance.",
    type: "website",
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
          <ThemedBackground />
          <ScrollFX />
          <Navbar />
          <div className="relative z-10">{children}</div>
        </BackgroundThemeProvider>
      </body>
    </html>
  );
}
