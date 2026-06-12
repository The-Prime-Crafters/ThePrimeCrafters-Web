import type { Metadata } from "next";
import { Navbar } from "@/components";
import AIIntegrationHero from "../ai-integration/components/AIIntegrationHero";
import { Footer } from "@/components";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.theprimecrafters.com/services/ai-integration",
  },
};

export default function AIIntegrationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar />
      <AIIntegrationHero />
      <Footer />
    </main>
  );
}