import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ThePrimeCrafters | AI Automation Agency",
  description: "Transform your business with cutting-edge AI automation solutions. We craft intelligent systems that amplify productivity, streamline operations, and unlock unprecedented growth.",
  keywords: ["AI automation", "business automation", "artificial intelligence", "workflow automation", "AI agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased bg-obsidian text-ivory`}
      >
        {children}
      </body>
    </html>
  );
}
