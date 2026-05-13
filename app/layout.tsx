import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: "PrimeCrafters | AI Automation Excellence",
  description:
    "Transform your business with cutting-edge AI automation solutions. PrimeCrafters delivers proven results with a track record of successful projects.",

  metadataBase: new URL("https://www.theprimecrafters.com"),

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
    url: "https://www.theprimecrafters.com",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-[#f5f5f5]">
        {/* Organization Schema */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.theprimecrafters.com",
              name: "PrimeCrafters",
              logo: "https://www.theprimecrafters.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/the-prime-crafters/posts/?feedView=all",
                "https://www.instagram.com/theprimecrafters/",
                "https://github.com/The-Prime-Crafters",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.theprimecrafters.com",
              name: "PrimeCrafters | AI Automation Excellence",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}