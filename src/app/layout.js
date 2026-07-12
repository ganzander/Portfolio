import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ThemedBackground from "@/components/three/ThemedBackground";
import ScrollFX from "@/components/scroll/ScrollFX";
import Navbar from "@/components/layout/Navbar";
import { BackgroundThemeProvider } from "@/context/BackgroundThemeContext";

export const metadata = {
  title: "Ganesh Kumar Mangla | Full Stack Developer — Next.js, AI & 3D",
  description:
    "Full Stack Developer with production experience across Next.js, Node.js, AI integrations (Gemini, Groq, AWS) and interactive three.js experiences. 4+ shipped products. Open to full-time & freelance.",
  keywords: [
    "Full Stack Developer",
    "Next.js developer",
    "React developer",
    "Three.js",
    "GSAP",
    "AI integration",
    "Ganesh Kumar Mangla",
  ],
  openGraph: {
    title: "Ganesh Kumar Mangla | Full Stack Developer",
    description:
      "Next.js, AI integrations and interactive 3D — 4+ shipped products. Open to full-time & freelance.",
    type: "website",
    images: ["/ganesh.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Kumar Mangla | Full Stack Developer",
    description:
      "Next.js, AI integrations and interactive 3D — 4+ shipped products.",
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
        style={{ cursor: "url('/navigate.png')" }}
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
