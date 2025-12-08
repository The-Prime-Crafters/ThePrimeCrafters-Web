import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeCrafters | AI Automation Excellence",
  description:
    "Transform your business with cutting-edge AI automation solutions. PrimeCrafters delivers proven results with a track record of successful projects.",
  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Integration",
    "Process Automation",
    "Workflow Optimization",
    "Custom AI Solutions",
  ],
  authors: [{ name: "PrimeCrafters" }],
  openGraph: {
    title: "PrimeCrafters | AI Automation Excellence",
    description:
      "Transform your business with cutting-edge AI automation solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeCrafters | AI Automation Excellence",
    description:
      "Transform your business with cutting-edge AI automation solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased bg-[#0a0a0a] text-[#f5f5f5]`}
      >
        {children}
      </body>
    </html>
  );
}
