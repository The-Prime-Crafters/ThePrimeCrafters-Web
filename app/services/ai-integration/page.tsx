import type { Metadata } from "next";
import { Navbar } from "@/components";
import AIIntegrationHero from "../ai-integration/components/AIIntegrationHero";
import AIIntegrationAbout from "../ai-integration/components/AIIntegrationAbout";
import AIIntegrationArchitecture from "../ai-integration/components/AIIntegrationArchitecture";
import AIIntegrationBenefits from "../ai-integration/components/AIIntegrationBenefits";
import AIIntegrationCaseStudies from "../ai-integration/components/AIIntegrationCaseStudies";
import AIIntegrationProblem from "../ai-integration/components/AIIntegrationProblem";
import AIIntegrationProcess from "../ai-integration/components/AIIntegrationProcess";
import AIIntegrationService from "../ai-integration/components/AIIntegrationService";
import AIIntegrationSystems from "../ai-integration/components/AIIntegrationSystems";
import AIIntegrationUseCases from "../ai-integration/components/AIIntegrationUseCases";
import AIIntegrationCTA from "../ai-integration/components/AIIntegrationCTA";
import AIIntegrationFAQ from "../ai-integration/components/AIIntegrationFAQ";
import AIIntegrationWhyUs from "../ai-integration/components/AIIntegrationWhyUs";
import { Footer } from "@/components";

export const metadata: Metadata = {
    title:'AI Integration Services for Connected Business Systems',
 description: 'ThePrimeCrafters provides AI integration services that connect AI with CRMs, websites, databases, APIs, and business tools so workflows stay synced.',

  alternates: {
    canonical: "https://www.theprimecrafters.com/services/ai-integration",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIIntegrationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar />
      <AIIntegrationHero />
      <AIIntegrationProblem />
      <AIIntegrationService />
      <AIIntegrationSystems />
      <AIIntegrationArchitecture />
      <AIIntegrationProcess />
      <AIIntegrationUseCases />
      <AIIntegrationBenefits />
      <AIIntegrationCaseStudies />
      <AIIntegrationWhyUs />
      <AIIntegrationAbout />
      <AIIntegrationCTA />
      <AIIntegrationFAQ />
      <Footer />
    </main>
  );
}