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
    "AI Automation Services | The Prime Crafters",

  description:
    "Explore AI automation services by The Prime Crafters — voice agents, workflow automation, chatbots, and custom AI integrations built for business growth.",
     alternates: {
    canonical: "https://www.theprimecrafters.com/about-us", // 👈 add this
  },
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
      <Footer/>
    </main>
  );
}