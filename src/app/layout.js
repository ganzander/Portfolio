import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ThemedBackground from "@/components/three/ThemedBackground";
import ScrollFX from "@/components/scroll/ScrollFX";
import Navbar from "@/components/layout/Navbar";
import { BackgroundThemeProvider } from "@/context/BackgroundThemeContext";

export const metadata = {
  title: "Ganesh | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ganesh, a Full Stack Developer specializing in React, Next.js, AI integrations, and 3D experiences.",
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
