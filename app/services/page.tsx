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
    "AI automation services including voice agents, workflow automation, chatbot development, and custom AI integrations.",
 keywords: [
    "AI Automation Services","AI Automation Agency USA",
    "AI Solutions Company","Workflow Automation", "Business Process Automation", "CRM Automation",
    "AI Development Services", "Business Automation Services",
    "AI Voice Agents", "Voice AI Solutions", "Customer Support Automation",
    "AI Chatbot Development", "Lead Generation Chatbot", "Customer Support Automation",
    "Custom AI Integrations", "CRM Automation", "AI API Integration","AI Automation FAQs", "AI Chatbot Questions", "Voice Agent FAQ",
    "AI Systems for Businesses", "Business Automation Benefits","AI Case Studies", "AI Automation Results",
    " AI Automation Agency", "Industry AI Solutions","AI Workflow Automation", "AI Implementation Process",
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
      <Footer/>
    </main>
  );
}