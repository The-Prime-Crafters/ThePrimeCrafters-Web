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


export const metadata: Metadata = {
  title: "AI Automation Services | The Prime Crafters",
  description:
    "AI automation services including voice agents, workflow automation, chatbot development, and custom AI integrations.",
 keywords: [
    "AI Automation Services",
    "AI Solutions Company",
    "AI Voice Agents",
    "Workflow Automation",
    "Business Process Automation",
    "AI Chatbot Development",
    "Custom AI Integrations",
    "AI Automation Agency",
    "Business Automation Services",
    "AI Systems for Businesses",
    "CRM Automation",
    "Voice AI Solutions",
    "AI Workflow Automation",
    "Customer Support Automation",
    "AI Agency",
  ],
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
    </main>
  );
}