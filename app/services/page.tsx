import type { Metadata } from "next";

import { Navbar } from "@/components";
import ServicesHero from "../services/components/ServicesHero";
import ServicesGrid from "../services/components/ServicesGrid";
import VoiceAgentsSection from "../services/components/VoiceAgentsSection";
import WorkflowSection from "../services/components/WorkflowSection";
import ChatbotSection from "../services/components/ChatbotSection";
import IntegrationsSection from "../services/components/IntegrationsSection";
import BenefitsSection from "../services/components/BenefitsSection";
import IndustriesSection from "../services/components/IndustriesSection";
import ProcessSection from "../services/components/ProcessSection";
import CaseStudiesPreview from "../services/components/CaseStudiesPreview";
import FAQSection from "../services/components/FAQSection";
import ServicesCTA from "../services/components/ServicesCTA";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "AI Automation Services | The Prime Crafters",
  description:
    "Explore AI automation services by The Prime Crafters — voice agents, workflow automation, chatbots, and custom AI integrations built for business growth.",
  alternates: {
    canonical: "https://www.theprimecrafters.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar/>
      <ServicesHero />
      <ServicesGrid />
      <VoiceAgentsSection />
      <WorkflowSection />
      <ChatbotSection />
      <IntegrationsSection />
      <BenefitsSection />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesPreview />
      <FAQSection />
      <ServicesCTA />
      <Footer/>
    </main>
  );
}