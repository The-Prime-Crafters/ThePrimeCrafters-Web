import type { Metadata } from "next";
import { Navbar } from '@/components';
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import QuickContactOptions from './components/QuickContactOptions';
import WhyContactUs from './components/WhyContactUs';
import ServicesSnapshot from './components/ServicesSnapshot';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import IndustriesSection from './components/IndustriesSection';
import ContactFAQ from './components/ContactFAQ';
import FinalCTA from './components/FinalCTA';
import { Footer } from '@/components';

export const metadata: Metadata = {
  title: "Contact The Prime Crafters — Book a Free AI Automation Consultation",
  description:
    "Ready to automate your business? Contact The Prime Crafters to book a free 30-minute consultation. We build custom AI systems for healthcare, SaaS, e-commerce, real estate, and more. Response within 24 hours.",
  alternates: {
    canonical: "https://www.theprimecrafters.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#050505]">
      <Navbar/>
      <ContactHero />
      <ContactFormSection />
      <QuickContactOptions />
      <WhyContactUs />
      <ServicesSnapshot />
      <CaseStudiesPreview />
      <IndustriesSection />
      <ContactFAQ />
      <FinalCTA />
      <Footer/>
    </main>
  );
}