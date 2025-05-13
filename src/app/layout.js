import "./globals.css";
import { Space_Grotesk } from "next/font/google";

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
    <html lang="en">
      <body
        className={` ${spaceGrotesk.className}`}
        cz-shortcut-listen="true"
        style={{ cursor: "url('/navigate.png')" }}
      >
        {children}
      </body>
    </html>
  );
}
