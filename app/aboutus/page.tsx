import type { Metadata } from "next";

import { Navbar } from "@/components";
import AboutHero from "../aboutus/components/abouthero";
import CompanyIntro from "../aboutus/components/intro";
import MissionSection from "../aboutus/components/missionsection";
import ServicesOverview from "../aboutus/components/service";
import WhyChooseUs from "../aboutus/components/whychooseus";
import CaseStudies from "../aboutus/components/casestudies";
import ProcessSection from "../aboutus/components/process";
import TrustSection from "../aboutus/components/trustus";
import CTASection from "../aboutus/components/CTA";


export const metadata: Metadata = {
  title:
    "AI Automation Agency | Voice AI & Workflow Automation Experts | The Prime Crafters",

  description:
    "The Prime Crafters helps businesses scale with AI automation, voice agents, workflow automation, AI chatbots, and custom business automation systems.",

  keywords: [
    "AI Automation Agency",
    "Voice AI Solutions",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Automation Experts",
    "AI Solutions Company",
    "Custom AI Automation",
  ],
};
export default function aboutus() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <Navbar/>
      <AboutHero/>
      <CompanyIntro />
      <MissionSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudies/>
      <ProcessSection />
      <TrustSection />
      <CTASection />
    </main>
  );
}