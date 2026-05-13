import type { Metadata } from "next";

import { Navbar } from "@/components";
import AboutHero from "./components/abouthero";
import CompanyIntro from "./components/intro";
import MissionSection from "./components/missionsection";
import ServicesOverview from "./components/service";
import WhyChooseUs from "./components/whychooseus";
import CaseStudies from "./components/casestudies";
import ProcessSection from "./components/process";
import TrustSection from "./components/trustus";
import CTASection from "./components/CTA";


export const metadata: Metadata = {
  title:
    "About The Prime Crafters | AI Automation Agency & Workflow Experts",

  description:
    "Learn about The Prime Crafters — an AI automation agency helping businesses scale with AI voice agents, workflow automation, custom chatbots, and intelligent business systems.",
     alternates: {
    canonical: "https://theprimecrafters.com/about-us", // 👈 add this
  },
 
  keywords: [
    "AI Automation Agency",
    "AI Solutions Company",
    "Voice AI Solutions",
    "Workflow Automation",
    "Business Automation Experts",
    "Custom AI Automation",
    "AI Chatbot Development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "The Prime Crafters | AI Automation Agency",
    description:
      "We build AI systems that help businesses automate operations, reduce manual work, and scale faster.",
    url: "https://theprimecrafters.com/about-us",
    siteName: "The Prime Crafters",
    type: "website",
  },
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