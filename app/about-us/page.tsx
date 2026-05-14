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
import { Footer } from "@/components";


export const metadata: Metadata = {
  title:
    "About Us | The Prime Crafters | AI Automation Agency",

  description:
    "About us, The Prime Crafters is an AI automation agency helping businesses scale with AI voice agents, workflow automation, chatbots, and custom integrations",
     alternates: {
    canonical: "https://www.theprimecrafters.com/about-us", // 👈 add this
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
      <Footer/>
    </main>
  );
}