// app/services/ai-agents/page.tsx
import type { Metadata } from "next";
import { Navbar , Footer } from "@/components";
import AIAgentsHero from '../ai-agents/components/AIAgentsHero';
import AIAgentsProblem from '../ai-agents/components/AIAgentsProblem';
import AIAgentsService from '../ai-agents/components/AIAgentsService';
import AIAgentsDeliverables from '../ai-agents/components/AIAgentsDeliverables';
import AIAgentsArchitecture from '../ai-agents/components/AIAgentsArchitecture';
import AIAgentsProcess from '../ai-agents/components/AIAgentsProcess';
import AIAgentsUseCases from '../ai-agents/components/AIAgentsUseCases';
import AIAgentsBenefits from '../ai-agents/components/AIAgentsBenefits';
import AIAgentsCaseStudies from '../ai-agents/components/AIAgentsCaseStudies';
import AIAgentsWhyUs from '../ai-agents/components/AIAgentsWhyUs';
import AIAgentsAbout from '../ai-agents/components/AIAgentsAbout';
import AIAgentsCTA from '../ai-agents/components/AIAgentsCTA';
import AIAgentsFAQ from '../ai-agents/components/AIAgentsFAQ';

export const metadata = {
 
  alternates: {
    canonical: 'https://www.theprimecrafters.com/services/ai-agents',
  },
};

export default function AIAgentsPage() {
  return (
    <main>
        <Navbar/>
      <AIAgentsHero />
      <AIAgentsProblem />
      <AIAgentsService />
      <AIAgentsDeliverables />
      <AIAgentsArchitecture />
      <AIAgentsProcess />
      <AIAgentsUseCases />
      <AIAgentsBenefits />
      <AIAgentsCaseStudies />
      <AIAgentsWhyUs />
      <AIAgentsAbout />
      <AIAgentsCTA />
      <AIAgentsFAQ />
      <Footer/>
    </main>
  );
}