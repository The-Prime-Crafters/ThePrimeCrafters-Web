import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://theprimecrafters.com"),
  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Integration",
    "Process Automation",
    "Workflow Optimization",
    "Custom AI Solutions",
  ],
  authors: [{ name: "PrimeCrafters" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PrimeCrafters | AI Automation Excellence",
    description:
      "Transform your business with cutting-edge AI automation solutions.",
    type: "website",
    locale: "en_US",
    url: "https://theprimecrafters.com",
    siteName: "PrimeCrafters",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeCrafters | AI Automation Excellence",
    description:
      "Transform your business with cutting-edge AI automation solutions.",
    site: "@PrimeCrafters",
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
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://theprimecrafters.com",
              name: "PrimeCrafters",
              logo: "https://theprimecrafters.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/the-prime-crafters/posts/?feedView=all",
                "https://www.instagram.com/theprimecrafters/",
                "https://github.com/The-Prime-Crafters",
              ],
            }),
          }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://theprimecrafters.com",
              name: "PrimeCrafters | AI Automation Excellence",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
